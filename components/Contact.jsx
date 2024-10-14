"use client";

import { Button } from "@/components/ui/button";
import { Phone, Linkedin, Mail } from "lucide-react"; // Importamos los iconos de mensaje
import Wsp from "@/components/icon/wsp";

const contactData = {
  whatsappNumber: "+51935502067", // Tu número de WhatsApp
  linkedinUrl: "https://linkedin.com/in/christian-sotelo-gut", // Tu LinkedIn
  phoneNumber: "+51935502067", // Tu número de teléfono
  email: "csotelo.dev@gmail.com", // Tu correo electrónico
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary rounded-xl mb-8">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center">Contáctame</h2>
        <div className="flex justify-center gap-6">
          {/* WhatsApp */}
          <Button asChild variant="ghost" size="icon">
            <a
              href={`https://wa.me/${contactData.whatsappNumber}?text=Hola,%20me%20estoy%20contactando%20a%20través%20de%20tu%20portafolio%20web.%20Me%20interesa%20conocer%20más%20sobre%20tus%20servicios%20de%20desarrollo%20web.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary">
              <Wsp className="h-6 w-6" />
            </a>
          </Button>

          {/* LinkedIn */}
          <Button asChild variant="ghost" size="icon">
            <a
              href={contactData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>

          {/* Teléfono */}
          <Button asChild variant="ghost" size="icon">
            <a href={`tel:${contactData.phoneNumber}`} className="text-primary">
              <Phone className="h-6 w-6" />
            </a>
          </Button>

          {/* Correo electrónico */}
          <Button asChild variant="ghost" size="icon">
            <a
              href={`mailto:${contactData.email}?subject=Consulta%20desde%20mi%20portafolio%20web&body=Hola,%20me%20estoy%20poniendo%20en%20contacto%20a%20través%20de%20tu%20portafolio%20web.%20Me%20gustaría%20saber%20más%20sobre%20los%20servicios%20de%20desarrollo%20web%20que%20ofreces.`}
              className="text-primary">
              <Mail className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
