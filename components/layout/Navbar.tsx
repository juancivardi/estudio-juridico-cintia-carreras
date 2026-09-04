"use client";

import { useState } from "react";
import WhatsAppButton from "@/components/ui/WhatsappButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="border-b border-black/10 bg-white relative z-10">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <div>
          {/* Logo / Nombre */}
          <a
            href="/"
            className="text-lg font-semibold tracking-wide text-black"
            onClick={closeMenu}
          >
            ESTUDIO JURÍDICO
            <p className="text-lg font-semi tracking-wide text-black">Cintia Carreras Jacznik</p>
          </a>
          </div>
          {/* Menú desktop */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="text-sm text-gray-800 transition-colors hover:text-[#B89B5E]"
            >
              Inicio
            </a>

            <a
              href="/#estudio"
              className="text-sm text-gray-800 transition-colors hover:text-[#B89B5E]"
            >
              Nosotros
            </a>

            <a
              href="/#areas"
              className="text-sm text-gray-800 transition-colors hover:text-[#B89B5E]"
            >
              Áreas de práctica
            </a>

            <a
              href="/#contacto"
              className="text-sm text-gray-800 transition-colors hover:text-[#B89B5E]"
            >
              Contacto
            </a>

            <WhatsAppButton
              className="rounded-md bg-[#B89B5E] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#9F854D]">
              WhatsApp
            </WhatsAppButton>
            
          </div>

          {/* Botón mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center text-2xl text-black md:hidden"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Menú mobile */}
        {isOpen && (
          <div className="border-t border-black/10 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="/"
                onClick={closeMenu}
                className="text-sm text-gray-800"
              >
                Inicio
              </a>

              <a
                href="/#estudio"
                onClick={closeMenu}
                className="text-sm text-gray-800"
              >
                Nosotros
              </a>

              <a
                href="/#areas"
                onClick={closeMenu}
                className="text-sm text-gray-800"
              >
                Áreas de práctica
              </a>

              <a
                href="/#contacto"
                onClick={closeMenu}
                className="text-sm text-gray-800"
              >
                Contacto
              </a>

              <WhatsAppButton
              className="mt-2 inline-flex justify-center rounded-md bg-[#B89B5E] px-5 py-3 text-sm font-medium text-white"
            >
              Consultar por WhatsApp
            </WhatsAppButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}