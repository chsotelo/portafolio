import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi Portafolio Profesional",
  description:
    "Un portafolio avanzado creado con Next.js y Shadcn/UI. Presento mis habilidades en desarrollo web full-stack, diseño de UI/UX y proyectos realizados con tecnologías modernas como React, Node.js y más.",
  keywords:
    "portafolio, desarrollador full-stack, Next.js, React, Node.js, Shadcn/UI, diseño web, UI/UX, proyectos de desarrollo, programador, portfolio",
  author: "Christian Sotelo",
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    site: "@tuTwitterHandle",
    creator: "@tuTwitterHandle",
    title: "Mi Portafolio Profesional",
    description:
      "Explora mis proyectos y habilidades como desarrollador full-stack utilizando Next.js, React, Node.js, y Shadcn/UI.",
    // image: "/path/to/your/image.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://chsotelo.github.io/portafolio",
    title: "Mi Portafolio Profesional",
    description:
      "Descubre mis proyectos de desarrollo web y diseño con Next.js, React y Node.js.",
    // images: [
    //   {
    //     url: "/path/to/your/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Portafolio de Christian Sotelo",
    //   },
    // ],
  },
  favicon: "/favicon.ico",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
