import Carousel from "@/components/ui/Carousel";

export default function Coments() {
    const comments = [
        {
            name: "Gabriela L.",
            text: "Cintia me acompañó y me asesoró en uno de los momentos más difíciles. Su compromiso, sensibilidad y profesionalismo hicieron una gran diferencia para mí y para mis hijas. Estoy muy agradecida.",
        },
        {
            name: "Lucia",
            text: "Después de pasar por varios profesionales sin encontrar respuestas, encontrar a Cintia fue un antes y un después. Su compromiso, claridad y dedicación hicieron una gran diferencia. Además de ser una excelente profesional, se destaca por su calidez y acompañamiento en los momentos más difíciles.",
        },
        {
            name: "Selena M. G.",
            text: "Agradezco la paciencia que tuvo la doctora para reiterar el caso de mi hijo y yo en la justicia cada vez que nos dejaron en espera, recomiendo.",
        },
        {
            name: "A. C.",
            text: "Una genia la doctora nos acompaño en todo momento del proceso.",
        },
        
    ];
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
            <p className="text-xl font-bold tracking-tight text-[#B89B5E]">
            Opiniones
            </p>
        </div>

        <Carousel>
            {comments.map((comment, index) => (
            <div
                key={index}
                className="min-w-0 flex-[0_0_85%] md:flex-[0_0_45%]"
            >
                <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1 text-lg text-[#B89B5E]">
                    ★★★★★
                </div>

                <p className="text-base leading-relaxed text-gray-600">
                    "{comment.text}"
                </p>

                <div className="mt-6">
                    <p className="font-semibold text-gray-900">
                    {comment.name}
                    </p>
                </div>
                </article>
            </div>
            ))}
        </Carousel>
        <p className="text-xs mt-10 text-sm font-medium">
           *Opiniones reales con el texto mejorado para mejor comprensión.
        </p>
      </section>
    </main>
  );
}