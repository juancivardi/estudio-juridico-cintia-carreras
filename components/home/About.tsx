

export default function About() {
  return (
    <section id="estudio" className="bg-white px-6 py-10 md:py-15">
      <div className="mx-auto max-w-7xl items-center">
        {/* Información */}
        <div>
          <p className="text-xl font-bold tracking-tight text-[#B89B5E]">
            Sobre mí
          </p>

          <h2 className="mt-4 text-xl font-semi tracking-tight text-black">
            Compromiso y visión profesional.
          </h2>

          <p className="mt-6 text-base leading-7">
            Como abogada, asumo el desafío de ejercer la profesión con el mayor compromiso, 
            responsabilidad y respeto, entendiendo que una adecuada práctica profesional 
            requiere no solo preparación jurídica, sino también calidad humana. 
          </p>

          <p className="mt-6 text-base leading-7">
            Para lograrlo, priorizo la formación 
            continua y el estudio minucioso de cada situación. 
            Creo firmemente que la mejor estrategia legal nace de comprender 
            las particularidades de cada caso y de mantener una comunicación abierta, honesta y 
            transparente con quienes depositan su confianza en mí.
          </p>

          <p className="mt-4 text-base leading-7">
            Asimismo, concibo mi labor desde el diálogo y el trabajo colaborativo con otros profesionales cuando el contexto lo requiere. 
            Mi meta es brindar un acompañamiento cercano, traduciendo la complejidad de las leyes en 
            soluciones claras y manteniendo siempre un compromiso real con la defensa de sus derechos.
          </p>

          <a
            href="/trayectoria"
            className="mt-8 inline-flex text-sm font-semibold text-black underline decoration-[#B89B5E] decoration-2 underline-offset-4 transition-colors hover:text-[#B89B5E]"
          >
            Conocer más →
          </a>
        </div>

      </div>
    </section>
  );
}