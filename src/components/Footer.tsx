
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-montserrat font-bold text-xl text-astrogreen mb-4">
              ASTROVET<span className="text-astroblue">Solutions</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Especialistes en gestió de fauna salvatge i biodiversitat en entorns urbans a Catalunya.
            </p>
            <p className="text-gray-300">
              © {new Date().getFullYear()} Astrovet Solutions. Tots els drets reservats.
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Serveis</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-astrogreen transition-colors">Control de Fauna Urbana</a>
              </li>
              <li>
                <a href="#services" className="hover:text-astrogreen transition-colors">Conservació de la Biodiversitat</a>
              </li>
              <li>
                <a href="#services" className="hover:text-astrogreen transition-colors">Planificació Territorial</a>
              </li>
              <li>
                <a href="#services" className="hover:text-astrogreen transition-colors">Educació Ambiental</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Enllaços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-astrogreen transition-colors">Sobre Nosaltres</a>
              </li>
              <li>
                <a href="#clients" className="hover:text-astrogreen transition-colors">Clients</a>
              </li>
              <li>
                <a href="#services" className="hover:text-astrogreen transition-colors">Serveis</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-astrogreen transition-colors">Contacte</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Dissenyat amb respecte pel medi ambient i la biodiversitat
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-astrogreen transition-colors"
          >
            Tornar amunt <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
