"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
  // Avanzado
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",

  // Intermedio
  "TypeScript",
  "Python",
  "Java",
  "React Native",
  "Styled Components",
  "Firebase",
  "AWS",
  "Git",
  "GitHub",
  "S3 AWS",

  // Básico
  "MySQL",
  "Redis",
  "GCP",
  "VPS",
  "Docker",
  "Tailwind",
  "Figma",
  "HTML",
  "CSS",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary rounded-xl">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Mis Habilidades</h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
