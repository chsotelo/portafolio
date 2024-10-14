"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }) {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br flex items-center justify-center p-4">
      <div className="max-w-md w-fullrounded-lg shadow-xl overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Icono de error */}
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className=" w-16 h-16" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-500 mb-4">
            ¡Ups! Algo salió mal...
          </h1>
          <p className="text-center text-gray-400 mb-6">
            No te preocupes, probablemente me olvidé de algo, ¡pero mis dedos ya
            están trabajando para solucionarlo!
          </p>
          <div className="space-y-4">
            {/* Botón para intentar de nuevo */}
            <button
              onClick={() => {
                reset();
                handleShake();
              }}
              className={`w-full py-2 px-4 font-semibold rounded-md transition duration-300 ease-in-out flex items-center justify-center ${
                isShaking ? "animate-shake" : ""
              }`}>
              <RefreshCw className="mr-2 h-5 w-5" />
              Intentar de nuevo
            </button>
            {/* Volver al inicio */}
            <Link
              href="/"
              className="w-full py-2 px-4 text-gray-800 font-semibold rounded-md transition duration-300 ease-in-out flex items-center justify-center">
              <Home className="mr-2 h-5 w-5" />
              Volver al inicio
            </Link>
          </div>
        </div>
        <div className=" p-4 flex items-center justify-center">
          <p className="text-sm ">
            Si el problema persiste, por favor{" "}
            <Link href="/contact" className="font-medium underline">
              contáctame
            </Link>
            . ¡Haré todo lo posible para ayudarte a solucionar este error!
          </p>
        </div>
      </div>
    </main>
  );
}
