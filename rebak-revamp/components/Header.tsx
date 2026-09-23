"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { NAV, PHONE, WHATSAPP } from "@/lib/data";
import Logo from "./Logo";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-14  max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {NAV.map((n, i) => (
            <Link key={n.label} href={n.href}
              className={`py-5 hover:text-brand ${i === 0 ? "border-b-2 border-brand text-brand" : "text-ink"}`}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm font-medium">
            <Phone size={16} className="text-brand" /> {PHONE}
          </a>
          <div className="flex items-center gap-2 text-white">
            <a aria-label="Facebook" href="https://web.facebook.com/people/Rebak-Fencing-Solutions/100087678855591/" target="_blank" rel="noopener noreferrer" className="grid size-6 place-items-center rounded-full bg-[#1877f2]"><FaFacebookF size={12} /></a>
            <a aria-label="Instagram" href="https://www.instagram.com/rebak_fencing_solutions/" target="_blank" rel="noopener noreferrer" className="grid size-6 place-items-center rounded-full bg-linear-to-br from-pink-500 to-orange-400"><FaInstagram size={12} /></a>
            <a aria-label="TikTok" href="https://www.tiktok.com/@frankrebak?_r=1&_t=ZS-99y12gTpDj2" target="_blank" rel="noopener noreferrer" className="grid size-6 place-items-center rounded-full bg-black"><FaTiktok size={12} /></a>
            <a aria-label="X" href="https://twitter.com/FencingRebak" target="_blank" rel="noopener noreferrer" className="grid size-6 place-items-center rounded-full bg-black"><FaXTwitter size={12} /></a>
            <a aria-label="WhatsApp" href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="grid size-6 place-items-center rounded-full bg-[#25d366]"><FaWhatsapp size={12} /></a>
          </div>
          <a href="/contact#quote" className="rounded-md bg-brand-dark px-4 py-2 text-sm font-semibold text-white hover:bg-brand-deep">Get a Free Quote</a>
        </div>
        <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-black/5 bg-white px-4 py-4 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} onClick={() => setOpen(false)} className="block py-2 font-medium">{n.label}</Link>
          ))}
          <a href="/contact#quote" onClick={() => setOpen(false)} className="mt-3 block rounded-md bg-brand-dark px-4 py-2.5 text-center font-semibold text-white">Get a Free Quote</a>
        </div>
      )}
    </header>
  );
}
