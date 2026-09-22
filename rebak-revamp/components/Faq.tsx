"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="grid content-start gap-3 sm:grid-cols-2">
      {FAQS.map((f, i) => (
        <div key={f.q} className="self-start rounded-lg border border-black/10 bg-white">
          <button className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
            {f.q}
            <Plus size={16} className={`shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`} />
          </button>
          {open === i && <p className="px-4 pb-3 text-sm text-ink/70">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}
