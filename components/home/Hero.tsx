import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsappButton";

export default function Hero() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B89B5E]">
            Estudio Jurídico
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl">
            Cintia Carreras Jacznik
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 sm:text-xl">
            Asesoramiento y representación legal en La Plata,
            Provincia de Buenos Aires.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">
            Derecho Penal, Derecho de Familia y Derecho
            Internacional Privado.
          </p>

          <WhatsAppButton
            className="mt-8 inline-flex rounded-md bg-[#B89B5E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9F854D]"
          />
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/cintia-foto.jpeg"
              alt="Cintia Carreras Jacznik, abogada en La Plata"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}