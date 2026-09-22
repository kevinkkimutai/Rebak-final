/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { ABOUT_STATS, VALUES, AREAS, SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Rebak Solutions",
  description: "Rebak Solutions designs and installs concrete, chainlink, wooden, barbed and perimeter fencing and gates for homes, farms and businesses across Kenya.",
};

export default function Page() {
  return (
    <>
      <PageHero title="About Rebak Solutions" text="Reliable, affordable fencing for homes, farms and businesses across Kenya." />

      {/* Story */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl shadow-md">
          <img src="/about.jpg" alt="A finished concrete fence beside a garden" className="aspect-[3/2] mx-auto object-top-right w-full object-cover" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-brand">Who we are</p>
          <h2 className="mt-1 text-3xl font-bold text-ink">Strong fences, done properly</h2>
          <div className="mt-4 space-y-4 text-ink/70">
            <p>
              Rebak Solutions designs and installs fencing that protects your property and improves how it looks. We work with homeowners, farmers, schools and businesses who want a boundary they can rely on.
            </p>
            <p>
              Every project starts with a conversation and a site visit, so the fence we quote fits your plot, your budget and your security needs. Our own team does the installation, and we finish with an inspection and your sign-off.
            </p>
          </div>
          <Link href="/services" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-dark px-5 py-3 text-sm font-semibold text-white hover:bg-brand-deep">
            See our services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-soft">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {ABOUT_STATS.map((s) => (
            <div key={s.label}>
              <dt className="text-3xl font-extrabold text-brand-dark sm:text-4xl">{s.value}</dt>
              <dd className="mt-1 text-sm text-ink/70">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-xl">
          <h2 className="text-3xl font-bold text-ink">How we work</h2>
          <p className="mt-2 text-ink/70">Four things we hold ourselves to on every job.</p>
        </div>
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.title} className="border-l-4 border-brand pl-5">
              <h3 className="text-lg font-bold text-ink">{v.title}</h3>
              <p className="mt-1 text-sm text-ink/70">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we install */}
      <section className="bg-brand-deep text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h2 className="text-3xl font-bold">What we install</h2>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <Link href={`/services#${s.title.toLowerCase().replace(/\s+/g, "-")}`} className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold hover:bg-white/20">
                  {s.title} <ArrowRight size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-ink">Where we work</h2>
        <p className="mt-2 max-w-xl text-ink/70">We are based in Nairobi and take projects across Kenya. Some of the areas we have recently worked in:</p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {AREAS.map((a) => (
            <li key={a} className="flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand-soft px-4 py-1.5 text-sm font-medium text-brand-dark">
              <MapPin size={14} className="text-brand" /> {a}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink/60">Don&apos;t see your area? <Link href="/#quote" className="font-semibold text-brand underline">Ask us</Link>, and we will confirm.</p>
      </section>

      <CtaBand />
    </>
  );
}