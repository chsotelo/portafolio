"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="h-full flex items-center justify-center px-4  pt-8">
      <div className="max-w-md w-full  text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-500">
            ¡Oh no! Página no encontrada...
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Te has perdido, pero no te preocupes, todos nos hemos extraviado
            alguna vez. ¡Aquí estoy para devolverte al buen camino!
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <Button asChild className="w-full">
            <Link href="/">
              Regresa a mi portafolio antes de que te pierdas aún más
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
