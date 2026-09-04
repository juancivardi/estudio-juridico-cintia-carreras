import WhatsAppButton from "@/components/ui/WhatsappButton";

export default function ContactoPage() {
  return (
    <main className="bg-white">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B89B5E]">
              Contacto
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              Estamos para ayudarte
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comunicate con el Estudio Jurídico Cintia Carreras
              Jacznik para realizar tu consulta.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="border border-black/10 p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-[#B89B5E]">
                WhatsApp
              </p>

              <p className="mt-3 text-sm text-gray-700">
                221-6062175
              </p>

              <WhatsAppButton
                className="mt-5 inline-flex text-sm font-semibold text-black underline decoration-[#B89B5E] decoration-2 underline-offset-4 transition-colors hover:text-[#B89B5E]"
              >
                Iniciar conversación
              </WhatsAppButton>
            </div>

            <div className="border border-black/10 p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-[#B89B5E]">
                Teléfono
              </p>

              <a
                href="tel:+542216062175"
                className="mt-3 block text-sm text-gray-700 hover:text-[#B89B5E]"
              >
                221-6062175
              </a>
            </div>

            <div className="border border-black/10 p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-[#B89B5E]">
                Email
              </p>

              <a
                href="mailto:carrerasjacznikyasociados@gmail.com"
                className="mt-3 block break-words text-sm text-gray-700 hover:text-[#B89B5E]"
              >
                carrerasjacznikyasociados@gmail.com
              </a>
            </div>

            <div className="border border-black/10 p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-[#B89B5E]">
                Atención
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-700">
                Lunes a viernes
                <br />
                9:00 a 17:00 hs.
              </p>
            </div>

          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">

            <div className="border border-black/10 p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-[#B89B5E]">
                Dirección
              </p>

              <h2 className="mt-3 text-xl font-semibold text-black">
                Estudio Jurídico
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Calle 8 N.º 862 entre 49 y 50,
                <br />
                2.º piso, Oficina F.
                <br />
                La Plata, Provincia de Buenos Aires.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Calle+8+862+La+Plata+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-sm font-semibold text-black underline decoration-[#B89B5E] decoration-2 underline-offset-4 transition-colors hover:text-[#B89B5E]"
              >
                Cómo llegar
              </a>
            </div>

            <div className="flex min-h-64 items-center justify-center border border-black/10 bg-gray-50 p-8">
              <p className="text-center text-sm text-gray-400">
                Aquí podremos incorporar un mapa de Google Maps.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}