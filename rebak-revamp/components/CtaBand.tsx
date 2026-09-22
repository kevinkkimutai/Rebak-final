import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/data";

export default function CtaBand() {
  return (
    <section className="pb-10 md:pb-14 text-white">
      <div className="mx-auto bg-brand-dark rounded-md flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-12 sm:px-6">
        <div>
          <h2 className="text-2xl font-bold">Ready to secure your property?</h2>
          <p className="mt-1 text-sm text-white/80">Tell us about your project and get a free estimate within 24 hours.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/#quote" className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold">Get a Free Quote <ArrowRight size={16} /></Link>
          <a href={WHATSAPP} className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-3 text-sm font-semibold"><MessageCircle size={16} /> WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}