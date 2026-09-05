import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { practiceAreas } from "@/data/practiceAreas";
import WhatsAppButton from "@/components/ui/WhatsappButton";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const area = practiceAreas[slug as keyof typeof practiceAreas];

  if (!area) {
    return {
      title: "Área no encontrada",
    };
  }

  return {
    title: `${area.title} | Estudio Jurídico Cintia Carreras Jacznik`,
    description: `${area.description} Estudio Jurídico Cintia Carreras Jacznik en La Plata.`,
  };
}

export default async function PracticeAreaPage({
  params,
}: Props) {
  const { slug } = await params;

  const area = practiceAreas[slug as keyof typeof practiceAreas];

  if (!area) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
        <a
  href="/#areas"
  className="block text-right text-sm font-medium text-gray-500 transition-colors hover:text-[#B89B5E]"
>
  ← Volver a áreas de práctica
</a>
       
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B89B5E]">
            Área de práctica
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-3xl">
            {area.title}
          </h1>
          <p className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-2xl">
            {area.content.intro}
          </p>

          <div className="mt-6 max-w-3xl space-y-3 text-gray-600">
            {area.content.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-7">
                {paragraph}
              </p>
              ))}
          </div>

          <div className="mt-12 border-t border-black/10 pt-10">
            <h2 className="text-2xl font-semibold text-black">
              Asesoramiento jurídico personalizado
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-gray-600">
              Cada situación requiere un análisis particular. El
              estudio brinda asesoramiento y representación legal
              de acuerdo con las circunstancias de cada caso.
            </p>

            <WhatsAppButton
              className="mt-8 inline-flex rounded-md bg-[#B89B5E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9F854D]"
            />
          </div>

        </div>
      </section>
    </main>
  );
}