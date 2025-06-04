
import { TreeDeciduous, Map, Bug, Users } from 'lucide-react';

const services = [
  {
    icon: <Bug className="h-12 w-12 mb-4 text-astrogreen" />,
    title: "Control de Fauna Urbana",
    description: "Gestió especialitzada de poblacions de fauna salvatge en entorns urbans, com senglars, coloms i altres espècies que poden generar conflictes en zones habitades."
  },
  {
    icon: <TreeDeciduous className="h-12 w-12 mb-4 text-astrogreen" />,
    title: "Conservació de la Biodiversitat",
    description: "Desenvolupament i implementació de projectes per preservar i potenciar la biodiversitat en ecosistemes urbans i periurbans."
  },
  {
    icon: <Map className="h-12 w-12 mb-4 text-astrogreen" />,
    title: "Planificació Territorial",
    description: "Assessorament en la planificació territorial per a la integració equilibrada entre el desenvolupament urbà i la conservació dels hàbitats naturals."
  },
  {
    icon: <Users className="h-12 w-12 mb-4 text-astrogreen" />,
    title: "Educació Ambiental",
    description: "Programes formatius i de sensibilització per promoure el coneixement i respecte per la fauna salvatge entre la ciutadania."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-astrogreen">Els Nostres Serveis</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferim solucions integrals per a la gestió de la fauna salvatge i la biodiversitat en entorns urbans i naturals a tot Catalunya
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 reveal"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
