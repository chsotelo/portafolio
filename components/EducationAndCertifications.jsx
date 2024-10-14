"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Bachiller en Ingeniería de Sistemas",
    institution: "Universidad Nacional de San Cristóbal de Huamanga",
    date: "Febrero de 2024",
    description:
      "Estudios centrados en la programación, redes, bases de datos y desarrollo de software.",
  },
  {
    title: "Escuelas de Desarrollo",
    institution: "Platzi, Udemy",
    date: "Diversos cursos",
    description:
      "Cursos online especializados en desarrollo web, frameworks modernos y herramientas de backend.",
  },
  {
    title: "Analítica de Datos con Python",
    institution: "Colegio de Ingenieros del Perú",
    date: "2021",
    description:
      "Curso sobre análisis de datos con Python, incluyendo bibliotecas como Pandas y Matplotlib.",
  },
];

export default function EducationAndCertifications() {
  return (
    <section id="education-certifications" className="py-20 bg-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Educación y Certificaciones
        </h2>

        {/* Sección de Educación */}
        <motion.div
          className="space-y-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <h3 className="text-2xl font-semibold text-center mb-4">Educación</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-xl font-bold">{certifications[0].title}</h4>
              <p className="text-lg text-gray-400">
                {certifications[0].institution}
              </p>
              <p className="text-sm text-gray-400">{certifications[0].date}</p>
              <p className="text-sm text-gray-600 mt-2">
                {certifications[0].description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sección de Certificaciones */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <h3 className="text-2xl font-semibold text-center mb-4">
            Certificaciones
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {certifications.slice(1).map((certification, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start">
                <h4 className="text-xl font-bold">{certification.title}</h4>
                <p className="text-lg text-gray-400">
                  {certification.institution}
                </p>
                <p className="text-sm text-gray-500">{certification.date}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {certification.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
