import React from 'react';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../services/analytics';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string, label: string) => {
    e.preventDefault();
    trackEvent('click_cta', { category: 'Hero', label });

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" aria-label="Introducción">
      {/* Background Image - Clean and Professional */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
          alt="Consultoría de Recursos Humanos y Gestión de Talento" 
          className="w-full h-full object-cover"
        />
        {/* Minimalist Overlay - Elegant gradient from dark to transparent for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-slate-900/20"></div>
        {/* Bottom subtle fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight leading-[1.1] drop-shadow-sm animate-fadeIn">
            {t.hero.title} <br className="hidden md:block" />
            <span className="text-brand-300 relative">
              {t.hero.titleHighlight}
            </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 font-light leading-relaxed opacity-90 animate-fadeIn" style={{ animationDelay: '100ms' }}>
            {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeIn" style={{ animationDelay: '200ms' }}>
            <a 
                href={`#${SectionId.CONTACT}`}
                onClick={(e) => handleScrollTo(e, SectionId.CONTACT, 'Primary: Contact Us')}
                className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-semibold transition-all transform hover:-translate-y-1 shadow-lg shadow-black/10 text-center min-w-[160px]"
            >
                {t.hero.ctaPrimary}
            </a>
            <a 
                href={`#${SectionId.SERVICES}`}
                onClick={(e) => handleScrollTo(e, SectionId.SERVICES, 'Secondary: Services')}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 rounded-full font-medium transition-all text-center min-w-[160px]"
            >
                {t.hero.ctaSecondary}
            </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;