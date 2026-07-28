import React, { useState } from 'react';
import { SectionId } from '../types';
import FadeIn from './FadeIn';
import { useLanguage } from '../context/LanguageContext';

type TabType = 'history' | 'purpose' | 'vision';

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('history');
  const { t } = useLanguage();

  const tabContent = {
    history: {
      title: t.about.content.historyTitle,
      subtitle: t.about.content.historySubtitle,
      content: t.about.content.historyText,
    },
    purpose: {
      title: t.about.content.purposeTitle,
      subtitle: t.about.content.purposeSubtitle,
      content: t.about.content.purposeText,
    },
    vision: {
      title: t.about.content.visionTitle,
      subtitle: t.about.content.visionSubtitle,
      content: t.about.content.visionText,
    }
  };

  const getValueIcon = (index: number) => {
    const iconClass = "w-6 h-6";
    switch (index) {
      // Conciencia organizacional (Insight/Eye/Structure)
      case 0: return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>;
      
      // Trabajo en equipo (Hands/Users)
      case 1: return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>;
      
      // Compromiso y calidad (Badge/Star/Ribbon)
      case 2: return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>;
      
      // Ética y sencillez (Heart/Hand)
      case 3: return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>;
      
      // Flexibilidad y adaptación (Arrows/Cycle)
      case 4: return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>;
      
      // Innovación y creatividad (Lightbulb)
      case 5: return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>;
      
      // Integridad (Shield/Fingerprint)
      case 6: return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565m-2.25 1.65A9.756 9.756 0 0 1 12 12.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5" /></svg>;
      
      default: return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>;
    }
  };

  return (
    <section id={SectionId.ABOUT} className="py-24 bg-white relative overflow-hidden" aria-label="Acerca de Profiles Group">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/3 translate-y-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* IMAGE COLUMN */}
          <FadeIn className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-100 rounded-3xl transform rotate-3 scale-[1.02] -z-10 transition-transform duration-500 group-hover:rotate-2"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square group">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=75" 
                  alt="Equipo ejecutivo" 
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-8 -right-4 lg:-right-12 bg-white p-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-100 max-w-[240px] z-20 animate-fadeIn hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-50 rounded-xl text-brand-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                     <span className="block text-3xl font-serif font-bold text-slate-900 leading-none mb-1">15+</span>
                     <span className="text-xs text-slate-500 font-bold uppercase tracking-wide leading-tight block">{t.about.yearsBadge}</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CONTENT COLUMN */}
          <div className="order-1 lg:order-2">
            <FadeIn delay={200}>
              <div className="mb-10">
                <span className="inline-block py-1 px-3 rounded-full bg-brand-50 text-brand-600 font-bold tracking-wider text-xs uppercase mb-4">
                  {t.about.badge}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight mb-6">
                  {t.about.title} <span className="text-brand-600 relative inline-block">
                    {t.about.titleHighlight}
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-200 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>.
                </h2>
              </div>

              {/* Tabs Container */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-slate-100/80 rounded-xl w-fit backdrop-blur-sm">
                  {(['history', 'purpose', 'vision'] as TabType[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        activeTab === tab 
                          ? 'bg-white text-brand-700 shadow-sm' 
                          : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                      }`}
                    >
                      {t.about.tabs[tab]}
                    </button>
                  ))}
                </div>

                <div className="min-h-[140px] relative">
                    <div key={activeTab} className="animate-fadeIn">
                        <h4 className="text-3xl font-serif font-bold text-slate-800 mb-2">{tabContent[activeTab].title}</h4>
                        <p className="text-brand-600 font-medium mb-6 text-lg tracking-wide">{tabContent[activeTab].subtitle}</p>
                        <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-brand-200 pl-6">
                        {tabContent[activeTab].content}
                        </p>
                    </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* VALUES SECTION */}
        <div className="pt-24 mt-10 border-t border-slate-100">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                  <div className="lg:col-span-2 relative group sticky top-24">
                      {/* Image container for "Perfiles de Valores" */}
                      <div className="absolute -inset-4 bg-slate-100/50 rounded-[40px] -z-10 transform rotate-1"></div>
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
                          <img 
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                            alt="Perfiles de Valores - Profiles Group"
                            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-transparent flex flex-col justify-end p-8">
                             <div className="w-16 h-1 bg-white mb-4 rounded-full"></div>
                             <p className="text-white font-serif text-3xl font-bold leading-tight mb-2">{t.about.cultureTitle}</p>
                             <p className="text-white/80 text-sm">La esencia de nuestro éxito radica en nuestros valores compartidos.</p>
                          </div>
                      </div>
                  </div>

                  <div className="lg:col-span-3">
                      <FadeIn>
                         <div className="mb-10">
                            <h4 className="text-4xl font-serif font-bold text-slate-800 mb-4">{t.about.valuesTitle}</h4>
                            <p className="text-slate-600 text-lg">Principios que guían cada decisión, cada selección y cada relación que construimos.</p>
                         </div>
                      </FadeIn>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {t.about.values.map((value, idx) => (
                          <FadeIn key={idx} delay={idx * 50}>
                            <div className="group h-full bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 hover:border-brand-300 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02]">
                                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                                  {getValueIcon(idx)}
                                </div>
                                <h5 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-brand-700 transition-colors">{value.title}</h5>
                                {value.desc && <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">{value.desc}</p>}
                            </div>
                          </FadeIn>
                        ))}
                      </div>
                  </div>
              </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;