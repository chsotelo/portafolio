"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react"; // Importamos los iconos de menú

const headerData = {
  title: "Christian Sotelo",
  links: [
    { href: "#about", text: "Sobre mí" },
    { href: "#skills", text: "Habilidades" },
    { href: "#projects", text: "Proyectos" },
    { href: "#contact", text: "Contacto" },
  ],
};

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú en mobile

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="py-6 px-3">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{headerData.title}</h1>
        {/* Menú de navegación en pantallas grandes */}
        <ul className="hidden md:flex space-x-4">
          {headerData.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-primary transition-colors">
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        <section className="flex flex-row gap-3">
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden absolute top-16 left-0 right-0 p-4 shadow-lg transition-all duration-300 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}>
            <ul className="flex flex-col space-y-4">
              {headerData.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    } text-xl hover:text-primary transition-colors`}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </section>
      </nav>
    </header>
  );
}
