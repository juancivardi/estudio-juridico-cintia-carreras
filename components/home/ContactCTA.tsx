import WhatsAppButton from "@/components/ui/WhatsappButton";

export default function ContactCTA() {
  return (
    <section id="contacto" className="bg-black px-6 py-20 md:py-24 relative z-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* Información principal */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B89B5E]">
              Contacto
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              ¿Necesitás asesoramiento jurídico?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-300">
              Comunicate con el Estudio Jurídico Cintia Carreras
              Jacznik para realizar tu consulta y recibir
              asesoramiento personalizado.
            </p>

            <WhatsAppButton
            className="mt-8 inline-flex rounded-md bg-[#B89B5E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9F854D]"
          />
          </div>

          {/* Datos de contacto */}
          <div className="border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <div className="space-y-6">

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#B89B5E]">
                  Teléfono
                </p>

                <a
                  href="tel:+542216062175"
                  className="mt-1 block text-sm text-gray-300 transition-colors hover:text-white"
                >
                  221-6062175
                </a>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#B89B5E]">
                  Email
                </p>

                <a
                  href="mailto:carrerasjacznikyasociados@gmail.com"
                  className="mt-1 block break-all text-sm text-gray-300 transition-colors hover:text-white"
                >
                  carrerasjacznikyasociados@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#B89B5E]">
                  Dirección
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-300">
                  Calle 8 N.º 862 entre 49 y 50
                  <br />
                  2.º piso, Oficina F
                  <br />
                  La Plata, Buenos Aires
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#B89B5E]">
                  Horario de atención
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  Lunes a viernes · 9:00 a 17:00 hs.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}