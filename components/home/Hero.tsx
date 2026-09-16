import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsappButton";

export default function Hero() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-5">
        <div>
          <p className="text-xl font-bold uppercase tracking-[0.1em] text-[#B89B5E]">
            ABOGADA
          </p>

          <h1 className="font-serif mt-4 text-3xl font-medium tracking-tight text-black sm:text-3xl lg:text-4xl">
            Cintia Carreras Jacznik
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 sm:text-xl">
            Derecho Penal · Familia · Derecho Internacional Privado
            · Abogada de Niñas, Niños y Adolescentes
          </p>

          <p className="mt-4 max-w-xl text-xl leading-6 italic">
            Compromiso, cercanía y calidad profesional.
          </p>

          <WhatsAppButton
            className="mt-8 inline-flex rounded-md bg-[#B89B5E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9F854D]"
          />
        </div>

        <div className="relative mx-auto w-full max-w-xs">
          <div className="relative aspect-[4/5] overflow-hidden rounded">
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