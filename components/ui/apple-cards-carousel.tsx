"use client";
import type React from "react";

// Card props: add aspect to control portrait/landscape
export function Card({
  card,
  index,
  aspect = "portrait",
  // ...existing props...
}: {
  card: {
    category: string;
    title: string;
    src: string;
    content?: React.ReactNode;
  };
  index: number;
  aspect?: "portrait" | "landscape";
  // ...existing prop types...
}) {
  // ...existing code...

  const mediaAspect =
    aspect === "landscape" ? "aspect-[16/9]" : "aspect-[3/4]"; // default was portrait 3/4

  return (
    // ...existing code...
    <div className="relative w-full">
      {/* image/media wrapper - switch aspect by prop */}
      <div className={`relative w-full ${mediaAspect} overflow-hidden rounded-3xl`}>
        <img
          src={card.src}
          alt={card.title}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
          loading="lazy"
        />
      </div>

      {/* ...existing content below... */}
    </div>
  );
}

export function Carousel({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="relative w-full">
      <div className="flex w-full gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
        {items.map((item, i) => (
          <div key={i} className="snap-center shrink-0 w-[90vw] sm:w-[520px] md:w-[720px]">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

// ...existing code...
