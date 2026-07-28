import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NAV_LINKS } from '../constants';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const LEGAL_NAME = "Grupo E Profiles, C.A.";
  const CONTACT_EMAIL = "contacto@profilesge.com";

  // State for Legal Modals
  const [legalModalOpen, setLegalModalOpen] = useState<'privacy' | 'terms' | 'cookies' | null>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/^#/, '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const getModalContent = () => {
    switch(legalModalOpen) {
      case 'privacy':
        return { title: t.footer.legal.privacyTitle, content: t.footer.legal.privacyContent };
      case 'terms':
        return { title: t.footer.legal.termsTitle, content: t.footer.legal.termsContent };
      case 'cookies':
        return { title: t.footer.legal.cookiesTitle, content: t.footer.legal.cookiesContent };
      default:
        return { title: '', content: '' };
    }
  };

  const modalData = getModalContent();

  return (
    <>
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 font-sans">
        <div className="container mx-auto px-6">
          
          {/* Main Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            
            {/* Column 1: Brand & About */}
            <div className="space-y-6">
              <div>
                <h5 className="text-white text-xl font-bold font-serif mb-2">{LEGAL_NAME}</h5>
                <p className="text-sm leading-relaxed max-w-sm text-slate-400">
                  {t.about.content.historySubtitle}
                  <br />
                  {language === 'en' ? 'Connecting talent since 2008.' : 'Conectando talento desde 2008.'}
                </p>
              </div>
              <div className="flex gap-4">
                <a 
                    href="https://www.linkedin.com/in/liliana-sánchez-52018565/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a 
                    href="https://www.instagram.com/profilesge/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h6 className="text-white font-bold uppercase tracking-wider text-sm mb-6 border-l-2 border-brand-500 pl-3">
                {language === 'en' ? 'Explore' : 'Explorar'}
              </h6>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="hover:text-brand-400 transition-colors flex items-center gap-2 group text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand-500 transition-colors"></span>
                      {getNavLabel(link.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h6 className="text-white font-bold uppercase tracking-wider text-sm mb-6 border-l-2 border-brand-500 pl-3">
                {language === 'en' ? 'Contact Us' : 'Contáctanos'}
              </h6>
              <ul className="space-y-4">
                {/* Address */}
                <li className="flex items-start gap-3 group">
                  <div className="bg-slate-900 p-2 rounded-lg text-brand-500 group-hover:text-brand-400 transition-colors mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                  </div>
                  <div className="text-sm">
                      <span className="block text-slate-300 font-medium mb-0.5">{language === 'en' ? 'Office' : 'Oficina'}</span>
                      <span className="leading-relaxed">Av. Francisco de Miranda.<br/>Torre Profesional. Caracas, VE.</span>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-3 group">
                  <div className="bg-slate-900 p-2 rounded-lg text-brand-500 group-hover:text-brand-400 transition-colors mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                  </div>
                  <div className="text-sm">
                      <span className="block text-slate-300 font-medium mb-0.5">{language === 'en' ? 'Phones' : 'Teléfonos'}</span>
                      <div className="flex flex-col gap-1">
                          <a href="tel:+582124147457" className="hover:text-white transition-colors block">+58 (212) 414-7457</a>
                          <a href="tel:+584241446550" className="hover:text-white transition-colors block">+58 (424) 144-6550</a>
                          <a href="tel:+584241397759" className="hover:text-white transition-colors block">+58 (424) 139-7759</a>
                      </div>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-3 group">
                  <div className="bg-slate-900 p-2 rounded-lg text-brand-500 group-hover:text-brand-400 transition-colors mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                  </div>
                  <div className="text-sm">
                      <span className="block text-slate-300 font-medium mb-0.5">Email</span>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar - Enhanced with required legal text */}
          <div className="pt-8 border-t border-slate-900">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
              <div className="flex-1 max-w-2xl">
                <p className="text-[11px] font-medium text-slate-500 leading-relaxed uppercase tracking-tight">
                  &copy; 2025 {t.footer.rights}
                </p>
                <p className="text-[10px] text-slate-600 mt-2 font-normal leading-relaxed italic">
                  {t.footer.legalNote}
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-2 text-[11px] font-bold uppercase tracking-wider">
                <button 
                  onClick={() => setLegalModalOpen('privacy')}
                  className="text-slate-500 hover:text-brand-400 transition-colors focus:outline-none"
                >
                  {t.footer.links.privacy}
                </button>
                <button 
                  onClick={() => setLegalModalOpen('terms')}
                  className="text-slate-500 hover:text-brand-400 transition-colors focus:outline-none"
                >
                  {t.footer.links.terms}
                </button>
                <button 
                  onClick={() => setLegalModalOpen('cookies')}
                  className="text-slate-500 hover:text-brand-400 transition-colors focus:outline-none"
                >
                  {t.footer.links.cookies}
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Render Legal Modal if state is active */}
      <LegalModal 
        isOpen={!!legalModalOpen}
        onClose={() => setLegalModalOpen(null)}
        title={modalData.title}
        content={modalData.content}
      />
    </>
  );
};

export default Footer;