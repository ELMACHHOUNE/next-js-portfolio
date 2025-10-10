"use client";
import React, { useEffect, useRef, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

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
    <div className="relative w-full group transition-transform duration-300 hover:-translate-y-1">
      {/* image/media wrapper - switch aspect by prop */}
      <div className={`relative w-full ${mediaAspect} overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 dark:ring-white/5`}>
        <img
          src={card.src}
          alt={card.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          draggable={false}
          loading="lazy"
          decoding="async"
          sizes="(min-width:1024px) 720px, (min-width:640px) 520px, 90vw"
        />
        {/* bottom gradient + text overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <div className="text-[10px] uppercase tracking-[0.12em] opacity-80">{card.category}</div>
          <div className="text-base sm:text-lg font-semibold leading-tight line-clamp-2">{card.title}</div>
        </div>
      </div>

      {/* optional external content below card */}
      {card.content && <div className="mt-4">{card.content}</div>}
    </div>
  );
}

export function Carousel({ items }: { items: React.ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const rafRef = useRef<number | null>(null);

  const computeStride = (el: HTMLDivElement) => {
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length < 2) return el.clientWidth * 0.9;
    return children[1].offsetLeft - children[0].offsetLeft;
  };

  const updateActive = () => {
    const el = containerRef.current;
    if (!el) return;
    const stride = computeStride(el);
    const idx = Math.round(el.scrollLeft / (stride || 1));
    setActive(Math.max(0, Math.min(items.length - 1, idx)));
  };

  const onScroll = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateActive);
  };

  const scrollByDir = (dir: 1 | -1) => {
    const el = containerRef.current;
    if (!el) return;
    const stride = computeStride(el);
    el.scrollBy({ left: dir * stride, behavior: "smooth" });
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowRight") scrollByDir(1);
    if (e.key === "ArrowLeft") scrollByDir(-1);
  };

  return (
    <div className="relative w-full">
      {/* left/right gradient edges (desktop only) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-10 md:block"
      >
        <div className="h-full w-full bg-gradient-to-r from-white/70 to-transparent dark:from-neutral-900/70" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-10 md:block"
      >
        <div className="h-full w-full bg-gradient-to-l from-white/70 to-transparent dark:from-neutral-900/70" />
      </div>

      {/* scroll buttons (desktop) */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollByDir(-1)}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-neutral-900/70 shadow-md ring-1 ring-black/10 dark:ring-white/10 hover:bg-white dark:hover:bg-neutral-900"
      >
        <IconChevronLeft className="h-5 w-5 text-neutral-900 dark:text-neutral-200" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollByDir(1)}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-neutral-900/70 shadow-md ring-1 ring-black/10 dark:ring-white/10 hover:bg-white dark:hover:bg-neutral-900"
      >
        <IconChevronRight className="h-5 w-5 text-neutral-900 dark:text-neutral-200" />
      </button>

      <div
        ref={containerRef}
        onScroll={onScroll}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="relative z-0 flex w-full gap-6 overflow-x-auto pb-6 snap-x snap-mandatory md:px-4 scroll-smooth"
      >
        {items.map((item, i) => (
          <div key={i} className="snap-center shrink-0 w-[90vw] sm:w-[520px] md:w-[720px]">
            {item}
          </div>
        ))}
      </div>

      {/* pagination dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              const el = containerRef.current;
              if (!el) return;
              const stride = computeStride(el);
              el.scrollTo({ left: i * stride, behavior: "smooth" });
            }}
            className={`h-2 rounded-full transition-all ${
              active === i ? "w-6 bg-neutral-900 dark:bg-neutral-200" : "w-2 bg-neutral-300 dark:bg-neutral-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

