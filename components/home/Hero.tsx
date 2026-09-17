import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsappButton";

export default function Hero() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-5xl items-center md:grid-cols-2">
        <div>
          <p className="text-3xl font-bold text-[#B89B5E]">
            Abogada
          </p>

          <h1 className="mt-4 text-xl font-semibold">
            Cintia Carreras Jacznik
          </h1>

          <p className="mt-6 text-xl ">
            · Derecho Penal <br />
            · Familia <br /> 
            · Derecho Internacional Privado <br />
            · Abogada de Niñas, Niños y Adolescentes <br />
          </p>

          <p className="mt-4 max-w-xl text-xl leading-8">
            Compromiso, cercanía y calidad profesional.
          </p>

          <div className="m-8 flex justify-center">
          <WhatsAppButton
            className="rounded-md bg-[#B89B5E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9F854D]"
          />
        </div>
        </div>

        <div className="relative mx-auto w-full max-w-[250px] shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
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