import WhatsAppButton from "@/components/ui/WhatsappButton";

export default function ContactCTA() {
  return (
    <section id="contacto" className="bg-black px-10 py-15 md:py-20 relative z-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* Información principal */}
          <div>
            <p className="text-m font-bold uppercase tracking-[0.2em] text-[#B89B5E]">
              Contacto
            </p>

            <h2 className="mt-4 text-4xl font-semi tracking-tight text-white sm:text-3xl">
              ¿Necesitás orientación jurídica?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-300">
              Estoy para escucharte, orientarte y brindarte el asesoramiento jurídico que necesitás. Comunicate conmigo para contarme tu situación y analizar juntos el camino más adecuado para tu caso.
            </p>

            <WhatsAppButton
            className="mt-8 inline-flex rounded-md bg-[#B89B5E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9F854D]"
          />
          </div>
        </div>
      </div>
    </section>
  );
}