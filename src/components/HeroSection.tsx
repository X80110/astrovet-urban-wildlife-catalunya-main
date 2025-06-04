
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1747595509327-20fb3e0c3216?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0')",
          filter: "brightness(0.7)",
        }}
      >
        {/* Fallback image in case the background doesn't load */}
        <img 
          src="https://images.unsplash.com/photo-1747595509327-20fb3e0c3216?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0" 
          alt="Wildlife background"
          className="hidden w-full h-full object-cover" 
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Gestió Professional de Fauna Salvatge
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
            Solucions innovadores per a la convivència entre la fauna salvatge i els entorns urbans a Catalunya
          </p>
          <div className="space-x-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-astrogreen hover:bg-astrogreen-dark text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contacta'ns
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-astrogreen"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Serveis <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
