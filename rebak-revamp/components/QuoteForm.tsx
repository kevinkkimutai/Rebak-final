"use client";
import { useState } from "react";
import { ArrowRight, Calculator, Check } from "lucide-react";
import { SERVICE_OPTIONS } from "@/lib/data";

const field = "w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form id="quote" onSubmit={onSubmit} className="rounded-lg bg-white p-6 shadow-xl">
      <div className="mb-4 flex items-start gap-3">
        <span className="grid size-10 place-items-center rounded-lg bg-brand-dark text-white"><Calculator size={20} /></span>
        <div>
          <h2 className="text-xl font-bold text-ink">Get a Free Quote</h2>
          <p className="text-xs text-ink/60">Tell us about your project and get an estimated cost within 24 hours.</p>
        </div>
      </div>

      <label className="mb-1 block text-xs font-semibold" htmlFor="service">Service Needed</label>
      <select id="service" name="service" required defaultValue="" className={`${field} mb-3`}>
        <option value="" disabled>Select a service</option>
        {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
      </select>

      <label className="mb-1 block text-xs font-semibold" htmlFor="details">Project Details</label>
      <textarea id="details" name="details" rows={3} placeholder="e.g. length, type of fence, location, additional notes..." className={`${field} mb-3 resize-none`} />

      <div className="mb-4 grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-xs font-semibold" htmlFor="name">Your Name</label>
          <input id="name" name="name" required placeholder="Full name" className={field} />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold" htmlFor="phone">Phone / WhatsApp</label>
          <input id="phone" name="phone" required type="tel" placeholder="+254 7XX XXX XXX" className={field} />
        </div>
      </div>

      <button disabled={status === "sending"} className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-dark py-3 text-sm font-semibold text-white hover:bg-brand-deep disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Get Estimate"} <ArrowRight size={16} />
      </button>
      <p role="status" className="mt-2 text-center text-xs">
        {status === "sent" && <span className="text-brand">Thanks! Your quote request has been sent. We will contact you within 24 hours.</span>}
        {status === "error" && <span className="text-red-600">Something went wrong. Please try again.</span>}
      </p>

      <ul className="mt-3 flex flex-wrap justify-between gap-2 text-[11px] text-ink/70">
        {["Free & no obligation", "Quick response", "Professional advice"].map((t) => (
          <li key={t} className="flex items-center gap-1"><Check size={12} className="text-brand" /> {t}</li>
        ))}
      </ul>
    </form>
  );
}
