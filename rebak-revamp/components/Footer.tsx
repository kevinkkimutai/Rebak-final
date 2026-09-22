import Link from "next/link";
import { Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NAV, PHONE, WHATSAPP } from "@/lib/data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-8 sm:px-6">
        <Logo light />
        <nav className="flex flex-wrap gap-8 text-sm font-medium">
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} className="hover:text-brand">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            aria-label="Facebook"
            href="https://web.facebook.com/people/Rebak-Fencing-Solutions/100087678855591/"
            target="_blank" rel="noopener noreferrer"
            className="grid size-8 place-items-center rounded-full bg-[#1877f2]"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/rebak_fencing_solutions/"
            target="_blank" rel="noopener noreferrer"
            className="grid size-8 place-items-center rounded-full bg-linear-to-br from-pink-500 to-orange-400"
          >
            <FaInstagram size={14} />
          </a>
          <a
            aria-label="X"
            href="https://twitter.com/FencingRebak"
            target="_blank" rel="noopener noreferrer"
            className="grid size-8 place-items-center rounded-full bg-black"
          >
            <FaXTwitter size={14} />
          </a>
          <a
            aria-label="WhatsApp"
            href={WHATSAPP}
            target="_blank" rel="noopener noreferrer"
            className="grid size-8 place-items-center rounded-full bg-[#25d366]"
          >
            <FaWhatsapp size={14} />
          </a>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm"
          >
            <Phone size={14} className="text-brand" />
            {PHONE}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-4 py-4 text-xs sm:px-6">
          <p>
            © {new Date().getFullYear()} Rebak Solutions. All rights reserved.
          </p>
          <p className="flex gap-6">
            <Link href="https://maneno.co.ke" className="text-blue-100" target="_blank" rel="noopener noreferrer">
              Maneno Tech Studio
            </Link>
            {/* <Link href="/terms">Terms &amp; Conditions</Link> */}
          </p>
        </div>
      </div>
    </footer>
  );
}
