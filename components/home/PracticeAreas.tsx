import { practiceAreas } from "@/data/practiceAreas";

export default function PracticeAreas() {
  return (
    <section id="areas" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B89B5E]">
            Áreas de práctica
          </p>

          <h2 className="mt-1 text-3xl font-medium tracking-tight text-black sm:text-3xl">
            Asesoramiento y acompañamiento profesional
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600">
            Conocé las principales áreas en las se
            brinda asesoramiento y representación legal.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
         {Object.entries(practiceAreas).map(([slug, area]) => (
            <a
              key={slug}
              href={`/areas/${slug}`}
              className="group border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#B89B5E]/50 hover:shadow-lg"
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
    </section>
  );
}