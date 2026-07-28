import React, { useState, useEffect } from 'react';
import { SectionId, ServiceItem } from '../types';
import { UsersIcon, ChartIcon, BrainIcon, DocumentIcon, ScaleIcon, CheckCircleIcon, MagnetIcon } from './Icons';
import FadeIn from './FadeIn';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../services/analytics';

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { t, language } = useLanguage();

  const services: ServiceItem[] = [
    {
      id: 's1',
      title: t.services.items.s1.title,
      description: t.services.items.s1.desc,
      icon: <MagnetIcon className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
      details: t.services.items.s1.details,
      features: t.services.items.s1.features
    },
    {
      id: 's2',
      title: t.services.items.s2.title,
      description: t.services.items.s2.desc,
      icon: <UsersIcon className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      details: t.services.items.s2.details,
      features: t.services.items.s2.features
    },
    {
      id: 's3',
      title: t.services.items.s3.title,
      description: t.services.items.s3.desc,
      icon: <ChartIcon className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      details: t.services.items.s3.details,
      features: t.services.items.s3.features
    },
    {
      id: 's4',
      title: t.services.items.s4.title,
      description: t.services.items.s4.desc,
      icon: <BrainIcon className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      details: t.services.items.s4.details,
      features: t.services.items.s4.features
    },
    {
      id: 's5',
      title: t.services.items.s5.title,
      description: t.services.items.s5.desc,
      icon: <DocumentIcon className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
      details: t.services.items.s5.details,
      features: t.services.items.s5.features
    },
    {
      id: 's6',
      title: t.services.items.s6.title,
      description: t.services.items.s6.desc,
      icon: <ScaleIcon className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
      details: t.services.items.s6.details,
      features: t.services.items.s6.features
    },
  ];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedService]);

  const handleOpenService = (service: ServiceItem) => {
    setSelectedService(service);
    trackEvent('view_service', { category: 'Services', label: service.title });
  };

  const handleContactClick = () => {
    if (selectedService) {
      trackEvent('click_service_cta', { category: 'Services', label: selectedService.title });
    }
    
    setSelectedService(null);
    const contactSection = document.getElementById(SectionId.CONTACT);
    if (contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <section id={SectionId.SERVICES} className="py-24 bg-slate-50 relative" aria-label="Servicios de Recursos Humanos">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-600 font-semibold tracking-wider text-xs uppercase mb-3 block">{t.services.badge}</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
              {t.services.title}
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100} className="h-full">
              <div 
                className="group relative h-full bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-slate-100 hover:border-slate-200"
                onClick={() => handleOpenService(service)}
              >
                <div className="flex flex-col h-full">
                    {/* Minimalist Icon Container */}
                    <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center text-slate-700 mb-6 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                        {service.icon}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-5 border-t border-slate-50 flex items-center text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {t.services.readMore}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity animate-fadeIn" 
            onClick={() => setSelectedService(null)}
          ></div>
          
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-10 animate-fadeIn flex flex-col max-h-[90vh] overflow-hidden">
            
            {/* Modal Image Header */}
            <div className="relative h-48 w-full">
               <img 
                 src={selectedService.image} 
                 alt={selectedService.title} 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-slate-900/50 transition-opacity"></div>
               
               <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors focus:outline-none backdrop-blur-md"
                aria-label="Cerrar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

               <div className="absolute bottom-6 left-8 right-8">
                  <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                    {selectedService.title}
                  </h3>
               </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto bg-white">
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                {selectedService.details || selectedService.description}
              </p>

              <div className="mb-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                  {t.services.modal.featuresTitle}
                </h4>
                {selectedService.features && selectedService.features.length > 0 ? (
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-500 italic text-sm">
                    {language === 'en' 
                      ? 'No specific features listed for this service.' 
                      : 'No hay características específicas listadas para este servicio.'}
                  </p>
                )}
              </div>

              <button
                onClick={handleContactClick}
                className="w-full py-4 px-6 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-all shadow-lg shadow-slate-900/10 text-center"
              >
                {t.services.modal.ctaButton}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default ServicesSection;