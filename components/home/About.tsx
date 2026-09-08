import Image from "next/image";

export default function About() {
  return (
    <section id="estudio" className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">

        {/* Imagen */}
        <div className="relative mx-auto w-full max-w-xs">
          <div className="relative aspect-[5/5] overflow-hidden rounded">
            <Image
              src="/images/logoPNG.png"
              alt="Cintia Carreras Jacznik, abogada"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Información */}
        <div>
          <p className="text-xl font-medium uppercase tracking-[0.2em] text-[#B89B5E]">
            Sobre mí
          </p>

          <h2 className="mt-4 text-2xl font-semi tracking-tight text-black sm:text-3xl">
            Compromiso y visión profesional.
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600">
            Como abogada, asumo el desafío de ejercer la profesión con el mayor compromiso, 
            responsabilidad y respeto, entendiendo que una adecuada práctica profesional 
            requiere no solo preparación jurídica, sino también calidad humana. 
          </p>

          <p className="mt-6 text-base leading-7 text-gray-600">
            Para lograrlo, priorizo la formación 
            continua y el estudio minucioso de cada situación. 
            Creo firmemente que la mejor estrategia legal nace de comprender 
            las particularidades de cada caso y de mantener una comunicación abierta, honesta y 
            transparente con quienes depositan su confianza en mí.
          </p>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Asimismo, concibo mi labor desde el diálogo y el trabajo colaborativo con otros profesionales cuando el contexto lo requiere. 
            Mi meta es brindar un acompañamiento cercano, traduciendo la complejidad de las leyes en 
            soluciones claras y manteniendo siempre un compromiso real con la defensa de sus derechos.
          </p>

          <a
            href="/contacto"
            className="mt-8 inline-flex text-sm font-semibold text-black underline decoration-[#B89B5E] decoration-2 underline-offset-4 transition-colors hover:text-[#B89B5E]"
          >
            Conocer más →
          </a>
        </div>

      </div>
    </section>
  );
}