import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_280px] md:gap-14">

        {/* Texto */}
        <div>
          <p className="text-xl font-bold tracking-tight text-[#B89B5E]">
            Abogada
          </p>

          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            Cintia Carreras Jacznik
          </h1>

          <div className="mt-5 h-px w-12 bg-[#B89B5E]" />

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-700">
            Derecho Penal · Familia · Derecho Internacional Privado
            <br />
            Abogada de Niñas, Niños y Adolescentes
          </p>

          <p className="mt-5 text-base leading-7">
            Compromiso, cercanía y calidad profesional.
          </p>
        </div>

        {/* Foto */}
        <div className="relative mx-auto w-full max-w-[280px] shadow-[0_6px_20px_rgba(0,0,0,0.20)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded">
            <Image
              src="/images/cintia-foto.jpeg"
              alt="Cintia Carreras Jacznik, abogada en La Plata"
              fill
              priority
              className="object-cover"
              sizes="280px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}