import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
// Si vols fer servir axios, hauries d'importar-lo:
// import axios from 'axios';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    // 'bot-field': '', // Opcional si el vols gestionar a l'estat
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Actualització dinàmica de les dades del formulari
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 4. Codificació de la petició HTTP
  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e: React.FormEvent) => {
    // 3. Prevenció del comportament per defecte
    e.preventDefault(); 
    setIsSubmitting(true);

    const formName = "contact-form-netlify"; 
    
    // 2. Control total sobre l'estructura de les dades enviades
    const netlifyPayload = {
      "form-name": formName,
      ...formData,
    };

    // 5. Ús d'un client HTTP (Fetch en aquest cas)
    fetch("/", { 
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(netlifyPayload) // Utilitzem les dades codificades
    })
    .then(() => {
      toast({
        title: "Formulari enviat correctament",
        description: "Ens posarem en contacte amb vostè tan aviat com sigui possible.",
      });
      setFormData({
        name: '', email: '', phone: '', subject: '', message: '',
      });
    })
    .catch((error) => {
      console.error("Error en enviar el formulari:", error);
      toast({
        title: "Error en enviar el formulari",
        description: "Hi ha hagut un problema. Si us plau, torna-ho a provar més tard.",
        variant: "destructive",
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });

    /* // Alternativa amb Axios:
    axios.post("/", encode(netlifyPayload), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    .then(() => {
      toast({
        title: "Formulari enviat correctament",
        description: "Ens posarem en contacte amb vostè tan aviat com sigui possible.",
      });
      setFormData({
        name: '', email: '', phone: '', subject: '', message: '',
      });
    })
    .catch((error) => {
      console.error("Error en enviar el formulari amb Axios:", error);
      toast({
        title: "Error en enviar el formulari",
        description: "Hi ha hagut un problema. Si us plau, torna-ho a provar més tard.",
        variant: "destructive",
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
    */
  };

  return (
    <section id="contact" className="py-20 bg-astroearth-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* ... contingut de la capçalera ... */}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1 reveal">
            {/* ... Informació de contacte ... */}
          </div>
          
          <div className="lg:col-span-2 reveal">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-astrogreen">Envia'ns un Missatge</h3>
              
              <form 
                name="contact-form-netlify" 
                method="POST"            
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit} // 3. Gestió de l'enviament del formulari
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact-form-netlify" />
                <p className="hidden" style={{ display: 'none' }}> 
                  <label>
                    No omplir si ets humà: <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>

                {/* ... Camps del formulari (Inputs, Textarea) ... */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom i cognoms *</label>
                    <Input
                      id="name"
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correu electrònic *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telèfon</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assumpte *</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Missatge *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-astrogreen hover:bg-astrogreen-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviant..." : "Enviar Missatge"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;