"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const aboutData = {
  name: "Christian Sotelo Gutiérrez",
  title: "Sobre mí",
  description1:
    "Soy un Desarrollador Full Stack con más de 3 años de experiencia participando en todo el ciclo de vida del desarrollo de software. Me especializo en tecnologías como NextJS, React, Node.js, entre otras, y siempre estoy en busca de nuevos retos y aprendizajes.",
  description2:
    "Fuera del mundo del desarrollo, disfruto de seguir adquiriendo conocimientos, explorar nuevas tecnologías, y enfrentarme a retos desafiantes en modalidad remota.",
  imageUrl:
    "https://firebasestorage.googleapis.com/v0/b/personal-files-a9caa.appspot.com/o/profile.jpg?alt=media&token=d3e0ad99-8332-4c76-8db3-eb8fe7ca4f6b",
  altText: "Foto de perfil",
};

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={aboutData.imageUrl}
            alt={aboutData.altText}
            width={300}
            height={300}
            className="rounded-full mx-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">{aboutData.title}</h2>
          <p className="mb-4">{aboutData.description1}</p>
          <p>{aboutData.description2}</p>
        </div>
      </motion.div>
    </section>
  );
}
