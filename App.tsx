import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <ServicesSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
        <Chatbot />
      </div>
    </LanguageProvider>
  );
}

export default App;