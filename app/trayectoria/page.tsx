import { trayectoria } from "@/data/trayectoria";
import Image from "next/image";

export default function TrayectoriaPage() {
  return (
    <main className="bg-white">
      <section className="px-6 py-10 md:py-15">
        <div className="mx-auto max-w-7xl">
          {/* Foto */}

          {/* Encabezado */}
          <div className="max-w-3xl">
            <h1 className="mt-2 text-3xl tracking-tight text-[#B89B5E]">
              Mi trayectoria
            </h1>

            <p className="mt-6 text-lg leading-7">
              Mi formación y trayectoria profesional se han desarrollado a lo largo de los años, combinando el ejercicio de la abogacía con la docencia, la investigación y la participación institucional en el Colegio de la Abogacía de La Plata.
            </p>
          </div>

          {/* Tarjetas */}
          <div className="mt-14">
            {trayectoria.map((seccion, index) => (
              <article
                key={seccion.title}
                className="bg-white/50 p-8 md:p-10"
              >
                {/* Título */}
                <h2 className="mt-2 text-2xl tracking-tight text-[#B89B5E]">
                  {seccion.title}
                </h2>
                <div className="mt-5 h-px w-auto bg-[#B89B5E]" />
                {/* Introducción */}
                <p className="whitespace-pre-line mt-4 leading-6 text-gray-640">
                  {seccion.intro}
                </p>
                


                {/* Puntos - Este codigo queda pendiente a ser usado
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
                */}
              </article>
            ))}
          </div>
          <div className="relative mx-auto w-full max-w-[280px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded">
              <Image
                src="/images/logoPNG.png"
                alt="Logo de la doctora Cintia Carreras Jacznik, abogada en La Plata"
                fill
                priority
                className="object-contain"
                sizes="280px"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}