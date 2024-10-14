"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const heroData = {
  title: "Bienvenido a Mi Portafolio",
  subtitle: "Desarrollador Full Stack con más de 3 años de experiencia",
  buttonText: "Contáctame",
  contactLink: "#contact",
};

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold mb-4">{heroData.title}</h1>
        <p className="text-xl mb-8">{heroData.subtitle}</p>
        <Button asChild>
          <a href={heroData.contactLink}>{heroData.buttonText}</a>
        </Button>
      </motion.div>
    </section>
  );
}
