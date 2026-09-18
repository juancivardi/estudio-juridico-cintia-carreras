import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsappButton";

export default function Hero() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-5xl items-center md:grid-cols-2">
        <div>
          <h1 className="text-2xl font-semi tracking-tight sm:text-3xl">
            Cintia Carreras Jacznik
          </h1>

          <p className="text-xl tracking-[0.1em] text-[#B89B5E]">
            Abogada
          </p>

          <p className="mt-6 text-m leading-8">
            · Derecho Penal · Familia  · Derecho Internacional Privado <br />
            · Abogada de Niñas, Niños y Adolescentes
          </p>

          <p className="mt-6 text-m">
            Compromiso, cercanía y calidad profesional.
          </p>

        </div>
        

        <div className="mt-10 relative mx-auto w-full max-w-[250px] shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
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