import WhatsAppButton from "@/components/ui/WhatsappButton";
import Image from "next/image";

export default function ContactCTA() {
  return (
    <section id="contacto" className="bg-black-500 px-10 py-15 relative z-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* Información principal */}
          <div>
            <p className="text-xl font-bold tracking-tight text-[#B89B5E]">
              Contacto
            </p>

            <h2 className="mt-4 text-2xl font-semi tracking-tight">
              ¿Necesitás ayuda con un tema legal?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7">
              Estoy para ayudarte y acompañarte. <br/>
              Mi objetivo es escucharte, orientarte y brindarte el asesoramiento que necesitás. Comunicate conmigo para contarme tu situación y evaluar juntos el camino más adecuado.
            </p>

            <WhatsAppButton className="mt-8 inline-flex rounded-md bg-[#B89B5E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9F854D]">
              Conversá conmigo 
            </WhatsAppButton>
          </div>
          {/* Logo */}
          <div className="mx-auto w-full max-w-[220px]">
            <div className="relative aspect-square">
              <Image
                src="/images/logoPNG.png"
                alt="Cintia Carreras Jacznik, abogada"
                fill
                className="object-contain"
                sizes="220px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}