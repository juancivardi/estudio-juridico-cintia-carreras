import { trayectoria } from "@/data/trayectoria";

export default function TrayectoriaPage() {
  return (
    <main className="bg-white">
      <section className="px-6 py-10 md:py-15">
        <div className="mx-auto max-w-7xl">

          {/* Encabezado */}
          <div className="max-w-3xl">
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#B89B5E]">
              Mi trayectoria
            </h1>

            <p className="mt-6 text-lg leading-8">
              
            </p>
          </div>

          {/* Tarjetas */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {trayectoria.map((seccion, index) => (
              <article
                key={seccion.title}
                className="border border-black/10 bg-white p-8 md:p-10"
              >
                {/* Título */}
                <h2 className="mt-4 text-2xl font-semibold text-black">
                  {seccion.title}
                </h2>

                {/* Introducción */}
                <p className="mt-5 leading-7 text-gray-600">
                  {seccion.intro}
                </p>

                {/* Puntos */}
                <ul className="mt-7 space-y-4">
                  {seccion.items.map((item) => (
                    <div key={item.title}>
                      <p className="text-sm font-semibold text-[#B89B5E]">
                        {item.year}
                      </p>

                      <p className="mt-1 font-medium text-black">
                        {item.title}
                      </p>

                      <p className="text-sm text-gray-600">
                        {item.institution}
                      </p>
                    </div>
                  ))}
                </ul>
              </article>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}