import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import EducationAndCertifications from "@/components/EducationAndCertifications";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <EducationAndCertifications />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
