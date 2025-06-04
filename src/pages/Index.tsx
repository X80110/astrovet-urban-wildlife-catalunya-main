
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ClientsSection from '@/components/ClientsSection';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Astrovet Solutions - Gestió de Fauna Salvatge i Biodiversitat";
    
    // Reveal animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });
    
    // Apply animation to hero section elements
    const heroElements = document.querySelectorAll('.animate-fade-in-up');
    heroElements.forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.opacity = '1';
      }
    });
    
    return () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
      <AboutSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
