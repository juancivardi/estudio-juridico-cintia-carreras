export default function Footer() {
  return (
    <footer className="bg-black text-white relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Información del estudio */}
          <div>
            <p className="text-lg font-semibold tracking-wide">
              ESTUDIO JURÍDICO
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Cintia Carreras Jacznik
            </p>

            <div className="mt-5 h-px w-10 bg-[#B89B5E]" />
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#B89B5E]">
              Contacto
            </h3>

            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <p>221-6062175</p>
              <p>carrerasjacznikyasociados@gmail.com</p>
              <p>
                Calle 8 N.º 862 entre 49 y 50,
                <br />
                2.º piso, Of. F
              </p>
            </div>
          </div>

          {/* Atención */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#B89B5E]">
              Atención
            </h3>

            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <p>Lunes a viernes</p>
              <p>9:00 a 17:00 hs.</p>
              <p>La Plata, Buenos Aires</p>
            </div>
          </div>


          <div className="overflow-hidden rounded">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.9637712066797!2d-57.953034280956125!3d-34.915381621380654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e630bc98d1a9%3A0xf50bb25b4c8d5651!2sC.%208%20862%2C%20B1900THB%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1789507726630!5m2!1ses-419!2sar"
                    className="h-[250px] w-[250px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tita Nails La Plata"
                  />
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Estudio Jurídico Cintia Carreras Jacznik.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}