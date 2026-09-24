import { comments } from "@/data/opinions";

export default function Opinions() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="text-xl font-bold tracking-tight text-[#B89B5E]">
            Opiniones
          </p>

          <p className="mt-5 text-base leading-7">
          </p>
        </div>

        {/* Opiniones */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {comments.map((comment) => (
            <article
              key={comment.name}
              className="w-full max-w-[250px] border border-black/10 bg-white p-6"
            >
              {/* Nombre */}
              <h3 className="font-semibold text-black">
                {comment.name}
              </h3>

              {/* Estrellas */}
              <div
                className="mt-3 flex gap-1"
                aria-label={`${comment.rating} de 5 estrellas`}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= comment.rating
                        ? "text-[#B89B5E]"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Comentario */}
              <p className="mt-5 text-sm leading-7 text-gray-600">
                {comment.comment}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}