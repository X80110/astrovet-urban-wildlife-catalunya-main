
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white bg-opacity-95 shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-astrogreen font-montserrat font-bold text-xl md:text-2xl">
            ASTROVET<span className="text-astroblue">Solutions</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-800 hover:text-astrogreen font-medium transition-colors">
            Serveis
          </a>
          <a href="#clients" className="text-gray-800 hover:text-astrogreen font-medium transition-colors">
            Clients
          </a>
          <a href="#about" className="text-gray-800 hover:text-astrogreen font-medium transition-colors">
            Sobre Nosaltres
          </a>
          <a href="#contact" className="text-gray-800 hover:text-astrogreen font-medium transition-colors">
            Contacte
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-astrogreen"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Tancar menú" : "Obrir menú"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-astrogreen" />
          ) : (
            <Menu className="h-6 w-6 text-astrogreen" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a
            href="#services"
            className="text-gray-800 py-2 border-b border-gray-200"
            onClick={toggleMobileMenu}
          >
            Serveis
          </a>
          <a
            href="#clients"
            className="text-gray-800 py-2 border-b border-gray-200"
            onClick={toggleMobileMenu}
          >
            Clients
          </a>
          <a
            href="#about"
            className="text-gray-800 py-2 border-b border-gray-200"
            onClick={toggleMobileMenu}
          >
            Sobre Nosaltres
          </a>
          <a
            href="#contact"
            className="text-gray-800 py-2"
            onClick={toggleMobileMenu}
          >
            Contacte
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
