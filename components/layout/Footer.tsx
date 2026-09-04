export default function Footer() {
  return (
    <footer className="bg-black text-white relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          
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