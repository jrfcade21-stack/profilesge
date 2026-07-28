import React, { useState, useEffect } from 'react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { language, setLanguage, t } = useLanguage();

  // Helper to get translated labels
  const getNavLabel = (originalLabel: string) => {
    switch(originalLabel) {
        case 'Inicio': return t.nav.home;
        case 'Nosotros': return t.nav.about;
        case 'Servicios': return t.nav.services;
        case 'Noticias': return t.nav.blog;
        case 'Contacto': return t.nav.contact;
        default: return originalLabel;
    }
  };

  // Handle scroll effect for sticky header and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setIsScrolled(scrollPosition > 20);

      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      
      // 1. Check if we are at the bottom of the page (activates Contact usually)
      if (scrollPosition + windowHeight >= docHeight - 50) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      // 2. Iterate through sections to find the current one
      let current = '';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          // Trigger slightly before the element hits the top (minus header height + offset)
          const offset = 150; 
          if (element.offsetTop - offset <= scrollPosition) {
            current = sectionId;
          }
        }
      }

      // 3. Fallback for top of page
      if (scrollPosition < 50) {
        setActiveSection(sections[0]);
      } else if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#' || href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace(/^#/, '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm h-[80px]' : 'bg-transparent h-[100px]'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center h-full relative z-50">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, '#')}
            className="flex items-center gap-2 relative z-50 transition-opacity duration-300 hover:opacity-80"
          >
            <img 
              src="https://www.profilesge.com/assets/images/logo_profiles_group_2025.webp" 
              alt={COMPANY_INFO.name}
              className={`object-contain transition-all duration-300 w-auto ${isScrolled ? 'h-14' : 'h-20'}`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              const isContact = link.label === 'Contacto';
              
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? (isScrolled 
                          ? 'bg-brand-600 text-white shadow-md transform scale-105' 
                          : 'bg-white text-brand-900 shadow-lg transform scale-105')
                      : (isScrolled 
                          ? 'text-slate-600 hover:bg-slate-100 hover:text-brand-600' 
                          : 'text-white/90 hover:bg-white/10 hover:text-white')
                  }`}
                >
                  {isContact && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  )}
                  {getNavLabel(link.label)}
                </a>
              );
            })}
            
            {/* Language Toggle Desktop */}
            <div className={`ml-4 flex items-center rounded-full p-1 backdrop-blur-sm transition-colors duration-300 ${isScrolled ? 'bg-slate-100' : 'bg-black/10'}`}>
                <button 
                    type="button"
                    onClick={() => setLanguage('es')}
                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                        language === 'es' 
                        ? 'bg-white text-brand-600 shadow-sm' 
                        : (isScrolled ? 'text-slate-500 hover:text-slate-800' : 'text-white/70 hover:text-white')
                    }`}
                >
                    ES
                </button>
                <button 
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                        language === 'en' 
                        ? 'bg-white text-brand-600 shadow-sm' 
                        : (isScrolled ? 'text-slate-500 hover:text-slate-800' : 'text-white/70 hover:text-white')
                    }`}
                >
                    EN
                </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block w-full h-0.5 rounded-full transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2.5 bg-slate-800' : (isScrolled ? 'bg-slate-800' : 'bg-white drop-shadow-sm')
              }`}></span>
              <span className={`block w-full h-0.5 rounded-full transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : (isScrolled ? 'bg-slate-800' : 'bg-white drop-shadow-sm')
              }`}></span>
              <span className={`block w-full h-0.5 rounded-full transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-slate-800' : (isScrolled ? 'bg-slate-800' : 'bg-white drop-shadow-sm')
              }`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop */}
      <div 
        className={`fixed inset-0 z-[60] flex justify-end md:hidden transition-visibility duration-300 ${
          mobileMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div 
          className={`relative w-[85%] max-w-[320px] bg-white h-full shadow-2xl flex flex-col pt-24 pb-8 px-6 transition-transform duration-300 ease-out transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile Language Toggle */}
          <div className="flex justify-center mb-6">
             <div className="flex items-center bg-slate-100 rounded-full p-1 shadow-inner">
                <button 
                    type="button"
                    onClick={() => setLanguage('es')}
                    className={`min-w-[56px] px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                        language === 'es' 
                        ? 'bg-white text-brand-600 shadow-sm scale-105' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                >
                    ES
                </button>
                <button 
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`min-w-[56px] px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                        language === 'en' 
                        ? 'bg-white text-brand-600 shadow-sm scale-105' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                >
                    EN
                </button>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
             {NAV_LINKS.map((link, idx) => {
               const isActive = activeSection === link.href.replace('#', '');
               const isContact = link.label === 'Contacto';
               const delay = mobileMenuOpen ? `${100 + idx * 50}ms` : '0ms';

               return (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ transitionDelay: delay }}
                  className={`
                    group flex items-center justify-between mx-2 p-3 rounded-xl text-lg font-medium border-l-4 transition-all duration-500 ease-out transform
                    ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
                    ${isActive 
                      ? 'bg-brand-50 border-brand-600 text-brand-700 shadow-sm font-bold' 
                      : 'border-transparent text-slate-600 hover:bg-slate-50 hover:border-brand-300 hover:text-brand-600 hover:pl-5'
                    }
                  `}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span className="flex items-center gap-3">
                    {isContact && (
                        <div className={`p-1 rounded-md transition-colors ${isActive ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-500 group-hover:bg-brand-100 group-hover:text-brand-600'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </div>
                    )}
                    {getNavLabel(link.label)}
                  </span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className={`w-5 h-5 transition-all duration-300 ${
                        isActive 
                        ? 'text-brand-600 opacity-100' 
                        : 'text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-400'
                    }`}
                  >
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </a>
               );
             })}
          </div>

          <div className="mt-auto">
             <div className={`transition-all duration-700 delay-300 transform ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="h-px bg-slate-100 mb-6 mx-2"></div>
              <p className="text-xs text-slate-400 mb-3 font-medium tracking-wider uppercase px-2">Contacto Directo</p>
              <div className="flex flex-col gap-2 mb-2 px-2">
                 <a href="tel:+582124147457" className="text-sm font-bold text-slate-800 hover:text-brand-600 transition-colors block">+58 (212) 414-7457</a>
                 <a href="tel:+584241446550" className="text-sm font-bold text-slate-800 hover:text-brand-600 transition-colors block">+58 (424) 144-6550</a>
                 <a href="tel:+584241397759" className="text-sm font-bold text-slate-800 hover:text-brand-600 transition-colors block">+58 (424) 139-7759</a>
              </div>
              <a href="mailto:contacto@profilesge.com" className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-50 transition-colors group">
                <span className="text-sm font-medium text-slate-600">contacto@profilesge.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;