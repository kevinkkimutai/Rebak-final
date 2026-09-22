import type { Metadata } from "next";
import {
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { PHONE, WHATSAPP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Rebak Solutions",
  description:
    "Contact Rebak Solutions for a free fencing consultation and quote across Kenya.",
};

const phoneLink = `tel:${PHONE.replace(/\s/g, "")}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Rebak Solutions"
        text="Tell us what you need to secure your property. We will help you choose the right fencing solution and arrange the next step."
      />

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-brand">
              Let&apos;s talk
            </p>
            <h2 className="mt-1 text-3xl font-bold text-ink">
              We&apos;re ready to help
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-ink/70">
              Whether you need a boundary fence, gate, chainlink installation or
              a complete perimeter solution, send us a few details and our team
              will get back to you within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={phoneLink}
                className="flex items-start gap-4 rounded-lg border border-black/10 p-4 transition hover:border-brand/40 hover:bg-brand-soft/50"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-dark">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">
                    Call us
                  </span>
                  <span className="mt-1 block text-sm text-ink/70">
                    {PHONE}
                  </span>
                </span>
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-lg border border-black/10 p-4 transition hover:border-brand/40 hover:bg-brand-soft/50"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#25d366] text-white">
                  <MessageCircle size={18} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">
                    WhatsApp us
                  </span>
                  <span className="mt-1 block text-sm text-ink/70">
                    Message us for a quick response
                  </span>
                </span>
              </a>
              <div className="flex items-start gap-4 rounded-lg border border-black/10 p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-dark">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">
                    Service area
                  </span>
                  <span className="mt-1 block text-sm text-ink/70">
                    Based in Kericho, serving projects across Kenya
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-brand-deep p-6 text-white">
              <div className="flex items-center gap-2 text-brand">
                <Clock3 size={18} />
                <span className="text-sm font-bold">What happens next?</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                {[
                  "We review your project details",
                  "We call to understand your site and requirements",
                  "You receive practical advice and a clear quote",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-brand"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <QuoteForm />
            <p className="mt-3 text-center text-xs text-ink/60">
              Free consultation, no obligation.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
