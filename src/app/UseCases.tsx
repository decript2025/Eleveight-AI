'use client'

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel";
import type { CarouselApi } from "../components/ui/carousel";

const images: { src: string; alt: string }[] = [
  { src: "/use-cases/gen2b.jpg", alt: "Use case 1" },
  { src: "/use-cases/krisp.jpg", alt: "Use case 2" },
  { src: "/use-cases/render.jpg", alt: "Use case 3" },
];

export function UseCases() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(images.length);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect as any);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      api.scrollNext();
    }, 3500);
    return () => clearInterval(id);
  }, [api]);
  return (
    <section id="use-cases" className="mx-10 mb-[80px]">
      <h2 className="text-[40px] max-[1180px]:text-[36px] my-5 text-left max-[1180px]:text-center font-bold">Use Cases</h2>

      <div className="relative">
        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="rounded-[12px] overflow-hidden">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex items-center justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={
                `h-2.5 w-2.5 rounded-full transition-colors ${
                  i === current ? 'bg-black/80' : 'bg-black/30'
                }`
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;


