import React, { useState } from 'react';
import { SectionId } from '../types';
import FadeIn from './FadeIn';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../services/analytics';

interface FormData {
  name: string;
  lastname: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    lastname: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return !value.trim() ? t.contact.errors.name : '';
      case 'lastname':
        return !value.trim() ? t.contact.errors.lastname : '';
      case 'email':
        if (!value.trim()) return t.contact.errors.email;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return !emailRegex.test(value) ? t.contact.errors.email : '';
      case 'service':
        return !value ? t.contact.errors.service : '';
      case 'message':
        return value.trim().length < 10 ? t.contact.errors.message : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));

    if (touched[id]) {
      const error = validateField(id, value);
      setErrors(prev => ({ ...prev, [id]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
    const error = validateField(id, value);
    setErrors(prev => ({ ...prev, [id]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    
    setTouched({
      name: true,
      lastname: true,
      email: true,
      service: true,
      message: true
    });

    if (isValid) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('/enviar.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData as any).toString()
        });

        const text = await response.text();
        let result;
        
        try {
          result = JSON.parse(text);
        } catch (e) {
          console.error("Respuesta no válida del servidor:", text);
          throw new Error('El servidor devolvió una respuesta inesperada.');
        }

        if (response.ok && result.status === 'success') {
          trackEvent('form_submit_success', { category: 'Contact', label: 'Contact Form' });
          setIsSubmitted(true);
          setIsFadingOut(false);
          
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              setIsSubmitted(false);
              setIsFadingOut(false);
              setFormData({ name: '', lastname: '', email: '', service: '', message: '' });
              setTouched({});
              setErrors({});
            }, 500);
          }, 5000);
        } else {
          setSubmitError(result.message || (language === 'en' ? 'Error sending message.' : 'Error al enviar el mensaje.'));
        }
      } catch (error: any) {
        setSubmitError(language === 'en' 
          ? `Problem: ${error.message || 'Server connection failed'}. Please use WhatsApp.` 
          : `Error: ${error.message || 'Fallo de conexión'}. Por favor, usa WhatsApp.`);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const getInputClasses = (fieldName: string) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const baseClasses = "w-full px-4 py-3.5 rounded-xl bg-slate-50 border outline-none transition-all duration-300 disabled:bg-slate-100 disabled:text-slate-400 font-medium";
    
    if (hasError) {
      return `${baseClasses} border-red-500 text-slate-900 focus:ring-2 focus:ring-red-200 focus:border-red-500 placeholder-red-300`;
    }
    return `${baseClasses} border-slate-200 text-slate-800 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:bg-white hover:border-brand-300`;
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full mix-blend-screen filter blur-[100px] translate-x-1/2 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[100px] -translate-x-1/2 translate-y-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <FadeIn>
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-brand-900/50 border border-brand-700/50 text-brand-300 font-bold tracking-wider text-xs uppercase mb-6 backdrop-blur-sm">
                {t.contact.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                {t.contact.title}
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-lg">
                {t.contact.subtitle}
              </p>
              
              <div className="grid gap-6">
                <div className="grid sm:grid-cols-2 gap-4">
                    <a href="mailto:contacto@profilesge.com" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-500/50 p-6 rounded-2xl transition-all duration-300 backdrop-blur-sm">
                        <div className="bg-brand-500/20 p-3 rounded-xl w-fit mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors text-brand-400">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <h4 className="text-white font-bold mb-1">Email</h4>
                        <p className="text-slate-400 text-sm truncate">contacto@profilesge.com</p>
                    </a>

                     <div className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-500/50 p-6 rounded-2xl transition-all duration-300 backdrop-blur-sm">
                        <div className="bg-brand-500/20 p-3 rounded-xl w-fit mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors text-brand-400">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <h4 className="text-white font-bold mb-2">{language === 'en' ? 'Contact' : 'Contacto'}</h4>
                        <div className="flex flex-col gap-1.5 text-slate-400 text-sm mb-4">
                            <a href="tel:+582124147457" className="hover:text-white transition-colors block">+58 (212) 414-7457</a>
                            <a href="tel:+584241446550" className="hover:text-white transition-colors block">+58 (424) 144-6550</a>
                            <a href="tel:+584241397759" className="hover:text-white transition-colors block">+58 (424) 139-7759</a>
                        </div>
                        <a 
                          href="https://wa.me/584241397759" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold rounded-full transition-all shadow-md transform hover:-translate-y-0.5"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.891-11.891 11.891-2.093 0-4.134-.544-5.941-1.583l-6.23 1.632zm7.422-3.913c1.558.934 3.41 1.43 5.332 1.43 5.504 0 9.982-4.477 9.982-9.982 0-2.66-.1.35-2.03-2.031-1.893-1.893-4.41-2.935-7.078-2.935-5.503 0-9.982 4.477-9.982 9.982 0 1.925.548 3.774 1.587 5.334l-1.044 3.81 3.914-1.026zM17.787 14.5c-.328-.164-1.936-.954-2.235-1.063-.298-.11-.515-.164-.731.164-.216.328-.838 1.063-1.027 1.282-.19.219-.379.246-.706.082-.328-.164-1.383-.509-2.636-1.627-.974-.869-1.631-1.942-1.822-2.269-.191-.328-.02-.505.143-.668.147-.146.328-.383.492-.574.164-.191.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.731-1.764-1.002-2.42-.263-.64-.529-.553-.731-.564l-.624-.012c-.216 0-.568.082-.865.41-.297.328-1.137 1.112-1.137 2.712s1.166 3.141 1.328 3.36c.164.219 2.296 3.505 5.56 4.915.776.335 1.383.536 1.855.686.78.248 1.488.213 2.05.129.626-.094 1.936-.791 2.208-1.556.273-.766.273-1.42.191-1.556-.082-.136-.3-.218-.628-.382z"/></svg>
                          WhatsApp Directo
                        </a>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm flex items-start gap-4">
                    <div className="bg-brand-500/20 p-3 rounded-xl flex-shrink-0 text-brand-400">
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-1">{language === 'en' ? 'Office' : 'Oficina'}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Av. Francisco de Miranda. Torre Profesional. Caracas.
                        </p>
                    </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              <form onSubmit={handleSubmit} noValidate className="relative z-10">
                {isSubmitted ? (
                  <div className={`absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8 z-20 transition-opacity duration-500 ${
                    isFadingOut ? 'opacity-0' : 'opacity-100 animate-fadeIn'
                  }`}>
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-slate-900 mb-3">{t.contact.successTitle}</h3>
                    <p className="text-slate-600 text-lg">{t.contact.successMsg}</p>
                  </div>
                ) : null}

                <div className="mb-8">
                    <h3 className="text-slate-900 text-2xl font-bold font-serif mb-2">{t.contact.formTitle}</h3>
                    <p className="text-slate-500 text-sm">Estás a un paso de encontrar el talento que necesitas.</p>
                </div>
                
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded-r-lg animate-fadeIn">
                    {submitError}
                  </div>
                )}

                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">{t.contact.labels.name}</label>
                      <input type="text" id="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('name')} placeholder={t.contact.placeholders.name} disabled={isSubmitting} />
                      {touched.name && errors.name && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastname" className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">{t.contact.labels.lastname}</label>
                      <input type="text" id="lastname" value={formData.lastname} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('lastname')} placeholder={t.contact.placeholders.lastname} disabled={isSubmitting} />
                      {touched.lastname && errors.lastname && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.lastname}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">{t.contact.labels.email}</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('email')} placeholder={t.contact.placeholders.email} disabled={isSubmitting} />
                    {touched.email && errors.email && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">{t.contact.labels.service}</label>
                    <select id="service" value={formData.service} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('service')} disabled={isSubmitting}>
                        <option value="">{t.contact.placeholders.service}</option>
                        <option value="seleccion">{t.contact.options.selection}</option>
                        <option value="headhunting">{t.contact.options.headhunting}</option>
                        <option value="evaluaciones">{t.contact.options.evaluations}</option>
                        <option value="nomina">{t.contact.options.payroll}</option>
                        <option value="legales">{t.contact.options.legal}</option>
                    </select>
                    {touched.service && errors.service && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">{t.contact.labels.message}</label>
                    <textarea id="message" rows={4} value={formData.message} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('message')} placeholder={t.contact.placeholders.message} disabled={isSubmitting}></textarea>
                    {touched.message && errors.message && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.message}</p>}
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-2">
                    <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                      {t.contact.consent}
                    </p>
                  </div>

                  <button type="submit" disabled={isSubmitting || isSubmitted} className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg transition-all disabled:opacity-70 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        <span>{t.contact.sending}</span>
                      </>
                    ) : t.contact.submit}
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;