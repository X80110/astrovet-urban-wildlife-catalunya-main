
import { Earth, Leaf } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-astrogreen">Sobre Astrovet Solutions</h2>
            
            <div className="mb-6 flex items-start">
              <Earth className="h-8 w-8 mr-4 text-astroblue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">La Nostra Missió</h3>
                <p className="text-gray-600">
                  Promoure la convivència harmònica entre la vida salvatge i els entorns urbans a Catalunya, desenvolupant solucions innovadores i respectuoses amb el medi ambient que beneficiïn tant les comunitats humanes com els ecosistemes naturals.
                </p>
              </div>
            </div>
            
            <div className="mb-6 flex items-start">
              <Leaf className="h-8 w-8 mr-4 text-astroblue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Els Nostres Valors</h3>
                <p className="text-gray-600">
                  Ens guiem pels principis de sostenibilitat, benestar animal, rigor científic i innovació. Creiem en la importància de preservar la biodiversitat mentre desenvolupem comunitats sostenibles.
                </p>
              </div>
            </div>
            
            <p className="text-gray-600">
              Fundada per un equip de biòlegs, veterinaris i experts en medi ambient, Astrovet Solutions ofereix més de 15 anys d'experiència combinada en la gestió de fauna salvatge i conservació de la biodiversitat a tota Catalunya.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 reveal">
            <img 
              src="https://images.unsplash.com/photo-1618753032504-1829cac5401e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0" 
              alt="Wildlife conservation" 
              className="rounded-lg shadow-lg h-64 w-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="https://images.unsplash.com/photo-1727589791118-45380818dace?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0" 
              alt="Urban wildlife management" 
              className="rounded-lg shadow-lg h-64 w-full object-cover mt-8 transform hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="https://images.unsplash.com/photo-1557444300-73a5c390bdeb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0" 
              alt="Biodiversity project" 
              className="rounded-lg shadow-lg h-64 w-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="https://images.unsplash.com/photo-1674732505281-a2afb3e25e52?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0" 
              alt="Wildlife in natural habitat" 
              className="rounded-lg shadow-lg h-64 w-full object-cover mt-8 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
