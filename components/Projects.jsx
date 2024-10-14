"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const experiences = [
  {
    title: "Desarrollador Full Stack - Fiberlux S.A.C.",
    description:
      "Desarrollé una aplicación web full-stack para una veterinaria municipal, gestionando el frontend, backend y el despliegue en VPS. La plataforma es completamente escalable y optimizada para diferentes dispositivos.",
    technologies: [
      "Next.js",
      "Tailwind",
      "RadixUI",
      "Node.js",
      "MongoDB",
      "VPS",
      "Nginx",
    ],
    liveUrl: "https://syspets.com",
    githubUrl: "https://github.com/yourusername/veterinary-app",
    duration: "Agosto 2024 - Septiembre 2024",
  },
  {
    title: "Desarrollador Full Stack - Ebbiner S.A.C.",
    description:
      "Implementé un asistente virtual en una plataforma interna que reduce la asistencia humana en un 80%, guiando a los usuarios a través de la plataforma y mejorando la experiencia de uso.",
    technologies: [
      "React",
      "Next.js",
      "Python",
      "Node.js",
      "Firebase",
      "MongoDB",
    ],
    liveUrl: "https://ebbiner.com",
    githubUrl: "https://github.com/yourusername/gemini-ai-assistant",
    duration: "Agosto 2022 - Junio 2024",
  },
  {
    title: "Desarrollador Frontend - Servicio Puntual",
    description:
      "Colaboré en la creación de componentes reutilizables para la página, y participé en el desarrollo de layouts y formularios.",
    technologies: ["React", "Firebase", "GIT", "HTML", "CSS", "JS"],
    liveUrl: "https://serviciopuntual.com.pe",
    githubUrl: "https://github.com/yourusername/servicio-puntual",
    duration: "Junio 2022 - Julio 2022",
  },
  {
    title: "Desarrollador Full Stack - Gauler S.A.C.",
    description:
      "Desarrollé el lado administrador de una página web para la gestión de preguntas académicas en formato Latex, aumentando en un 70% el suministro de preguntas académicas para una plataforma educativa.",
    technologies: ["React", "Node.js", "Firebase", "GCP", "HTML", "CSS"],
    liveUrl: "https://gauler.com",
    githubUrl: "https://github.com/yourusername/academic-platform",
    duration: "Enero 2022 - Mayo 2022",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Mi Experiencia Laboral
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col min-h-full" // Aseguramos que la card tenga altura mínima
            >
              <Card className="flex flex-col min-h-full">
                {" "}
                {/* Aseguramos que la card sea flexible y tenga altura mínima */}
                <CardHeader>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription>{experience.description}</CardDescription>
                  <p className="text-sm text-gray-500">{experience.duration}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between mt-auto">
                    {" "}
                    {/* Hace que el botón se alinee en la parte inferior */}
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={experience.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> URL
                      </a>
                    </Button>
                    {/* Descomentar si se desea habilitar GitHub */}
                    {/* <Button asChild variant="outline" size="sm">
                      <a
                        href={experience.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
