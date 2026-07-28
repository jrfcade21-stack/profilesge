import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../services/analytics';
import { generateChatResponseStream } from '../services/geminiService';

// Fix: Added React import to provide access to React namespace (React.FC, React.FormEvent)
const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [quickReplies, setQuickReplies] = useState<{label: string, value: string}[]>([]);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) trackEvent('open_chat', { category: 'Chatbot' });
  };

  useEffect(() => {
    setMessages([{ role: 'model', text: t.chatbot.initialMessage }]);
    setQuickReplies(getServiceOptions());
  }, [language]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading, quickReplies]);

  const getServiceOptions = () => {
    if (language === 'en') {
        return [
            { label: 'Our Services', value: 'What services do you offer?' },
            { label: 'WhatsApp', value: 'I want to contact you via WhatsApp' },
            { label: 'Location', value: 'Where are your offices located?' },
            { label: 'Hire Talent', value: 'How can you help me hire talent?' }
        ];
    }
    return [
        { label: 'Nuestros Servicios', value: '¿Qué servicios ofrecen?' },
        { label: 'WhatsApp', value: 'Quiero contactarlos por WhatsApp' },
        { label: 'Ubicación', value: '¿Dónde están ubicadas sus oficinas?' },
        { label: 'Selección', value: '¿Cómo me ayudan con la selección de personal?' }
    ];
  };

  const processUserMessage = async (userText: string) => {
    if (!userText.trim()) return;

    const newUserMessage: ChatMessage = { role: 'user', text: userText };
    const currentHistory = [...messages];
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);
    setQuickReplies([]);

    try {
      // Add a placeholder for the model response
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      let fullResponse = "";
      const stream = generateChatResponseStream(currentHistory, userText, language);
      
      setIsLoading(false); // Hide spinner once streaming starts

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'model', text: fullResponse };
          return updated;
        });
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: language === 'es' ? "Disculpa, ocurrió un error inesperado." : "Sorry, an unexpected error occurred." 
      }]);
    } finally {
      setIsLoading(false);
      if (messages.length < 10) {
        setQuickReplies(getServiceOptions());
      }
    }
  };

  // Fix: Explicitly using React.FormEvent type
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    processUserMessage(inputValue.trim());
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl bg-brand-600 text-white transition-all hover:scale-110 active:scale-95 group"
        aria-label="Abrir chat de asistencia"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-brand-600 rounded-full animate-ping"></span>
          </div>
        )}
      </button>

      <div className={`fixed bottom-24 right-6 w-[350px] md:w-[400px] bg-white rounded-2xl shadow-2xl z-40 transition-all duration-500 flex flex-col overflow-hidden border border-slate-100 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`} style={{ height: '550px', maxHeight: '80vh' }}>
        
        <div className="bg-brand-600 p-5 text-white flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-brand-600 rounded-full"></span>
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">Asistente Virtual</h3>
              <p className="text-[10px] text-brand-100 uppercase tracking-widest font-bold">Profiles Group IA</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>

        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 custom-scrollbar">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
              <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                ? 'bg-brand-600 text-white rounded-tr-none shadow-md' 
                : 'bg-white shadow-sm border border-slate-200 text-slate-700 rounded-tl-none'
              }`}>
                <div className="whitespace-pre-line">
                    {msg.text ? msg.text.split('**').map((part, index) => 
                        index % 2 === 1 ? <strong key={index} className="font-bold">{part}</strong> : part
                    ) : (
                      <span className="flex gap-1 py-1">
                        <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></span>
                        <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                        <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                      </span>
                    )}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 flex gap-1.5 items-center">
                <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                <div className="w-1.5 h-1.5 bg-brand-600 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {quickReplies.map((qr, i) => (
              <button 
                key={i} 
                onClick={() => processUserMessage(qr.value)} 
                className="text-[11px] px-3 py-2 rounded-xl bg-white text-brand-700 border border-brand-100 shadow-sm hover:border-brand-500 hover:text-brand-900 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                {qr.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 bg-white border-t border-slate-100">
            <form onSubmit={handleSend} className="flex gap-2 items-center bg-slate-100 rounded-xl p-1 focus-within:ring-2 focus-within:ring-brand-500 transition-all">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={language === 'es' ? "Escribe tu consulta..." : "Type your query..."}
                    className="flex-1 text-sm bg-transparent border-none outline-none px-3 py-2 text-slate-800 placeholder:text-slate-400"
                    disabled={isLoading}
                />
                <button 
                    type="submit" 
                    disabled={isLoading || !inputValue.trim()}
                    className="p-2 bg-brand-600 text-white rounded-lg shadow-md disabled:bg-slate-300 disabled:shadow-none hover:bg-brand-700 transition-all active:scale-95"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
            </form>
            <p className="text-[9px] text-center text-slate-400 mt-2 font-medium uppercase tracking-tighter">
                IA de apoyo • Profiles Group 2026
            </p>
        </div>
      </div>
    </>
  );
};

export default Chatbot;