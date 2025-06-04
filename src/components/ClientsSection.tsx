
import { Building } from 'lucide-react';

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-astroearth-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-astrogreen">Els Nostres Clients</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Confien en nosaltres administracions i entitats compromeses amb el medi ambient i la gestió sostenible
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden reveal">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-64 w-full object-cover md:w-64"
                src="https://images.unsplash.com/photo-1674732505281-a2afb3e25e52?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="Ajuntament de Barcelona"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Building className="h-6 w-6 text-astrogreen mr-2" />
                <h3 className="text-2xl font-bold text-gray-800">Ajuntament de Barcelona</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Col·laborem amb l'Ajuntament de Barcelona en el control i gestió de la població de porcs senglars a les zones limítrofes de la ciutat amb Collserola, desenvolupant estratègies efectives i sostenibles.
              </p>
              <p className="text-gray-600 mb-4">
                El nostre pla d'acció ha permès reduir els incidents amb senglars en zones urbanes en un 40% durant l'últim any, mitjançant tècniques no invasives i respectuoses amb el medi ambient.
              </p>
              <div className="mt-6">
                <span className="inline-block bg-astrogreen rounded-full px-4 py-1 text-sm font-semibold text-white">
                  Control de Fauna
                </span>
                <span className="inline-block bg-astroblue rounded-full px-4 py-1 text-sm font-semibold text-white ml-2">
                  Senglars
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 reveal">
          <p className="text-lg text-gray-700 italic">
            "La col·laboració amb Astrovet Solutions ha estat clau per a gestionar de forma eficaç i sostenible la problemàtica dels senglars a la zona urbana."
          </p>
          <p className="text-gray-600 mt-2">
            — Departament de Medi Ambient, Ajuntament de Barcelona
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
