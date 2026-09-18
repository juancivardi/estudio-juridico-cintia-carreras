import { practiceAreas } from "@/data/practiceAreas";
import Image from "next/image";

export default function PracticeAreas() {
  return (
    <section id="areas" className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:gap-16">
        <div>
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold tracking-tight text-[#B89B5E]">
              Áreas de práctica
            </h2>

            <p className="mt-5 text-base leading-7">
              Una práctica profesional orientada al asesoramiento, la
              representación y la defensa técnica de derechos, con
              estrategia y compromiso.
            </p>
          </div>

          {/* Tarjetas */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(practiceAreas).map(([slug, area]) => (
              <a
                key={slug}
                href={`/areas/${slug}`}
                className="group border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B89B5E]/50 hover:shadow-lg"
              >
                <div className="mb-6 h-px w-10 bg-[#B89B5E]" />

                <h3 className="text-xl font-semibold text-black">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {area.description}
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-black transition-colors group-hover:text-[#B89B5E]">
                  Conocer más →
                </span>
              </a>
            ))}
          </div>
        </div>

        

      </div>
    </section>
  );
}