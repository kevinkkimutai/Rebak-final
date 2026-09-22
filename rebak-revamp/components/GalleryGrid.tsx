"use client";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import { GALLERY, GALLERY_CATEGORIES } from "@/lib/data";
import Image from "next/image";

export default function GalleryGrid() {
  const [cat, setCat] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");
  const [active, setActive] = useState<number | null>(null);
  const items = GALLERY.filter((g) => cat === "All" || g.category === cat);

  const step = useCallback(
    (d: number) =>
      setActive((a) =>
        a === null ? a : (a + d + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, step]);

  const current = active !== null ? items[active] : null;

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter projects"
        className="mb-8 flex flex-wrap gap-2"
      >
        {GALLERY_CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => {
              setCat(c);
              setActive(null);
            }}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${cat === c ? "bg-brand-dark text-white" : "border border-black/10 bg-white hover:border-brand"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((g, i) => (
          <button
            key={g.title}
            onClick={() => setActive(i)}
            className="group overflow-hidden rounded-lg border border-black/5 bg-white text-left shadow-sm focus-visible:outline-2 focus-visible:outline-brand"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={g.img}
                alt={g.title}
                width={1000}
                height={1000}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-3">
              <p className="text-sm font-bold">{g.title}</p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-ink/60">
                <MapPin size={12} />
                {g.place}, Kenya
              </p>
            </div>
          </button>
        ))}
      </div>
      {items.length === 0 && (
        <p className="py-12 text-center text-ink/60">
          No projects in this category yet.
        </p>
      )}

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.img}
              alt={current.title}
              width={1000}
              height={1000}
              className="max-h-[70vh] w-full rounded-lg object-cover"
            />
            <p className="mt-3 text-white">
              <span className="font-bold">{current.title}</span> ·{" "}
              {current.place}, Kenya
            </p>
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute -top-3 -right-3 grid size-9 place-items-center rounded-full bg-white text-ink"
            >
              <X size={18} />
            </button>
            <button
              aria-label="Previous"
              onClick={() => step(-1)}
              className="absolute left-2 top-1/3 grid size-10 place-items-center rounded-full bg-white/90 text-ink"
            >
              <ChevronLeft />
            </button>
            <button
              aria-label="Next"
              onClick={() => step(1)}
              className="absolute right-2 top-1/3 grid size-10 place-items-center rounded-full bg-white/90 text-ink"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
