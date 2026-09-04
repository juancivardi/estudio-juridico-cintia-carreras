import Image from "next/image";

export default function About() {
  return (
    <section id="estudio" className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">

        {/* Imagen */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/cintia.jpeg"
              alt="Cintia Carreras Jacznik, abogada"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Información */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B89B5E]">
            El Estudio
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Experiencia y compromiso profesional
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600">
            El Estudio Jurídico Cintia Carreras Jacznik brinda
            asesoramiento y representación legal, ofreciendo una
            atención personalizada y profesional.
          </p>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Nuestro objetivo es acompañar a cada cliente en el
            análisis de su situación y encontrar las herramientas
            jurídicas adecuadas para cada caso.
          </p>

          <a
            href="/contacto"
            className="mt-8 inline-flex text-sm font-semibold text-black underline decoration-[#B89B5E] decoration-2 underline-offset-4 transition-colors hover:text-[#B89B5E]"
          >
            Conocer más sobre el estudio →
          </a>
        </div>

      </div>
    </section>
  );
}