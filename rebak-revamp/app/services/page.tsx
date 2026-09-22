/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { SERVICES, SERVICE_DETAILS } from "@/lib/data";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fencing Services | Rebak Solutions",
  description: "Barbed, concrete, gate, wooden, chainlink and perimeter fencing designed and installed across Kenya.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Fencing Services" text="Six fencing solutions, designed and installed by our team. Pick the one that fits your property and budget." />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <nav aria-label="Jump to service" className="mb-12 flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <a key={s.title} href={`#${s.title.toLowerCase().replace(/\s+/g, "-")}`} className="rounded-full border border-brand/30 bg-brand-soft px-4 py-1.5 text-sm font-medium text-brand-dark hover:bg-brand hover:text-white">
              {s.title}
            </a>
          ))}
        </nav>

        <div className="space-y-16">
          {SERVICES.map((s, i) => {
            const d = SERVICE_DETAILS[s.title];
            return (
              <div key={s.title} id={s.title.toLowerCase().replace(/\s+/g, "-")} className="grid scroll-mt-24 items-center gap-8 md:grid-cols-2">
                <div className={`overflow-hidden rounded-2xl shadow-md ${i % 2 ? "md:order-2" : ""}`}>
                  <Image src={s.img} alt={s.title} width={5000} height={3500} className="aspect-4/3 h-100 w-full object-cover" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-ink">{s.title}</h2>
                  <p className="mt-3 text-ink/70">{d.description}</p>
                  <ul className="mt-5 space-y-2">
                    {d.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white"><Check size={12} /></span>{f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm"><span className="font-semibold">Best for:</span> {d.bestFor}</p>
                  <Link href="/#quote" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-dark px-5 py-3 text-sm font-semibold text-white hover:bg-brand-deep">
                    Get a quote for {s.title.toLowerCase()} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}