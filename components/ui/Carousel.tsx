"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  slideClassName?: string;
}

export default function Carousel({
  children,
  slideClassName = "flex-[0_0_100%]",
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4">
          {children}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2
                   flex h-10 w-10 items-center justify-center
                   rounded-full bg-white/90 shadow-md
                   transition hover:bg-white"
        aria-label="Anterior"
      >
        ←
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2
                   flex h-10 w-10 items-center justify-center
                   rounded-full bg-white/90 shadow-md
                   transition hover:bg-white"
        aria-label="Siguiente"
      >
        →
      </button>
    </div>
  );
}