import Image from "next/image";
import {
  ArrowRight,
  Play,
  Shield,
  Star,
  MapPin,
  Users,
  Settings,
  ThumbsUp,
  ClipboardCheck,
  Ruler,
  Wrench,
  CheckCircle2,
  Phone,
  Quote,
  MessagesSquare,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import {
  NAV,
  PHONE,
  WHATSAPP,
  SERVICES,
  WHY,
  PORTFOLIO,
  STEPS,
  TESTIMONIALS,
} from "@/lib/data";
import concrete from "@/public/assets/images/sample perimeter fence.jpg";
import woodenfence_r from "@/public/assets/wood/barb.jpg"
import sample from "@/public/assets/images/sample electric 2.jpg"

const whyIcons = {
  shield: Shield,
  users: Users,
  settings: Settings,
  thumbs: ThumbsUp,
};
const stepIcons = [MessagesSquare, ClipboardCheck, Ruler, Wrench, CheckCircle2];
const heroBadges = [
  { Icon: Shield, label: "Durable Materials" },
  { Icon: Star, label: "Professional Installation" },
  { Icon: MapPin, label: "Across Kenya" },
];

function SectionHead({
  eyebrow,
  title,
  text,
  action,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-brand">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-3xl font-bold text-ink">{title}</h2>
        {text && <p className="mt-2 max-w-md text-sm text-ink/70">{text}</p>}
      </div>
      {action}
    </div>
  );
}

function Stars({ size = 12 }: { size?: number }) {
  return (
    <span className="flex text-amber-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} fill="currentColor" />
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative isolate overflow-hidden bg-brand-deep"
        >
          <Image
            src={concrete}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover opacity-80"
          />
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:py-20">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 rounded-md bg-brand px-3 py-1.5 text-xs font-semibold">
                <Shield size={14} /> Premium Fencing Solutions in Kenya
              </span>
              <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] sm:text-6xl">
                Strong Fences.
                <br />
                <span className="text-brand">Beautiful Spaces.</span>
              </h1>
              <p className="mt-5 max-w-md text-white/90">
                We design and install high-quality fencing solutions that
                enhance your property&apos;s security, privacy and curb appeal.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold hover:brightness-110"
                >
                  Get a Free Quote <ArrowRight size={16} />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/20"
                >
                  <Play size={16} /> View Our Services
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-6 text-xs font-semibold">
                {heroBadges.map(({ Icon, label }) => (
                  <li key={label} className="flex items-center gap-2">
                    <span className="grid size-8 place-items-center rounded-full bg-brand-dark">
                      <Icon size={14} />
                    </span>{" "}
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <QuoteForm />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHead
            eyebrow="Our Services"
            title="Our Fencing Services"
            text="Explore our range of expert fencing solutions designed to enhance your property's safety and aesthetics."
            action={
              <a
                href="#services"
                className="flex items-center gap-1 text-sm font-semibold text-brand"
              >
                View All Services <ArrowRight size={14} />
              </a>
            }
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm"
              >
                <div className="relative h-32">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="relative -mt-9 mb-2 grid size-8 place-items-center rounded-full bg-brand-soft text-brand-dark ring-4 ring-white">
                    <Shield size={14} />
                  </span>
                  <h3 className="text-sm font-bold">{s.title}</h3>
                  <p className="mt-1 text-xs text-ink/60">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why choose us */}
        <section id="why" className="bg-brand-soft">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-brand">
                Why Choose Us
              </p>
              <h2 className="mt-1 text-3xl font-bold text-ink">
                Quality Fencing, Trusted Across Kenya
              </h2>
              <p className="mt-3 max-w-md text-sm text-ink/70">
                We deliver reliable, affordable and professional fencing
                solutions. Our team is committed to quality workmanship, timely
                delivery and complete customer satisfaction.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-dark px-5 py-3 text-sm font-semibold text-white hover:bg-brand-deep"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {WHY.map((w) => {
                const I = whyIcons[w.icon];
                return (
                  <div key={w.title} className="flex gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-dark text-white">
                      <I size={20} />
                    </span>
                    <div>
                      <h3 className="font-bold text-ink">{w.title}</h3>
                      <p className="mt-1 text-sm text-ink/60">{w.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section
          id="portfolio"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6"
        >
          <SectionHead
            eyebrow="Our Portfolio"
            title="Explore Our Craftsmanship"
            text="Take a look at some of our recent projects. Quality work, satisfied clients."
            action={
              <a
                href="#portfolio"
                className="flex items-center gap-1 rounded-md border border-brand px-4 py-2 text-sm font-semibold text-brand"
              >
                View Full Gallery <ArrowRight size={14} />
              </a>
            }
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {PORTFOLIO.map((p) => (
              <figure
                key={p.title}
                className="overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm"
              >
                <div className="relative h-36">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-3">
                  <p className="text-xs font-bold">{p.title}</p>
                  <p className="mt-0.5 text-[11px] text-ink/60">{p.place}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="relative isolate overflow-hidden bg-brand-deep text-white">
          <Image
            src={woodenfence_r}
            alt=""
            fill
            sizes="100vw"
            className="-z-10 object-cover opacity-10"
          />
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <span className="rounded bg-brand px-2 py-1 text-[11px] font-semibold">
              Our Process
            </span>
            <h2 className="mt-3 text-3xl font-bold">
              From Inquiry to Installation
            </h2>
            <p className="mt-1 text-sm text-white/80">
              A simple and transparent process to get your fencing solution.
            </p>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {STEPS.map((s, i) => {
                const I = stepIcons[i];
                return (
                  <li key={s.title} className="relative flex gap-3">
                    <span className="relative grid size-14 shrink-0 place-items-center rounded-full bg-brand-dark ring-1 ring-white/20">
                      <I size={22} />
                      <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-white text-xs font-bold text-brand-dark">
                        {i + 1}
                      </span>
                    </span>
                    <div>
                      <h3 className="font-bold">{s.title}</h3>
                      <p className="mt-1 text-xs text-white/75">{s.text}</p>
                    </div>
                    {i < STEPS.length - 1 && (
                      <ArrowRight
                        size={16}
                        className="absolute -right-4 top-5 hidden text-white/60 lg:block"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHead
            eyebrow="What Our Clients Say"
            title="Trusted by Homeowners & Businesses"
            text="Our commitment to quality and customer satisfaction has earned us the trust of many clients across Kenya."
            action={
              <div className="rounded-lg bg-brand-soft px-4 py-2 text-center">
                <div className="flex items-center gap-2">
                  <Stars size={14} />
                  <b>4.9/5</b>
                </div>
                <p className="text-[11px] text-ink/60">
                  Based on 50+ happy customers
                </p>
              </div>
            }
          />
          <div className="grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-lg border border-black/5 bg-white p-6 shadow-sm"
              >
                <Quote size={20} className="text-brand" />
                <p className="mt-2 text-sm text-ink/80">{t.quote}</p>
                <footer className="mt-4 flex items-center gap-3">
                  <Image
                    src={t.img}
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-[11px] text-ink/60">{t.role}</p>
                    <Stars />
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* FAQ + CTA */}
        <section id="contact" className="bg-brand-soft/50 pt-4">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-brand">
                Frequently Asked Questions
              </p>
              <h2 className="mb-2 mt-1 text-3xl font-bold">Common Questions</h2>
              <p className="mb-5 text-sm text-ink/70">
                Find answers to the most common questions about our fencing
                services.
              </p>
              <Faq />
            </div>
            <div className="relative isolate flex min-h-72 items-end overflow-hidden rounded-xl p-6 text-white">
              <Image
                src={sample}
                alt=""
                fill
                sizes="50vw"
                className="-z-10 object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-brand-deep/90 to-transparent" />
              <div className="rounded-lg bg-brand-deep/85 p-5 backdrop-blur">
                <span className="rounded bg-brand px-2 py-0.5 text-[11px] font-semibold">
                  Get Started Today
                </span>
                <h3 className="mt-2 text-2xl font-bold">
                  Secure Your Property Today
                </h3>
                <p className="mt-1 text-sm text-white/85">
                  Get a free consultation with us for a free consultation and
                  quote. We&apos;re here to help!
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2.5 text-sm font-semibold"
                  >
                    Get a Free Quote <ArrowRight size={14} />
                  </a>
                  <a
                    href={WHATSAPP}
                    className="inline-flex items-center gap-2 rounded-md border border-white/40 px-4 py-2.5 text-sm font-semibold"
                  >
                    <FaWhatsapp size={14} /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
