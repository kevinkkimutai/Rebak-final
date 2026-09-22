import Image from "next/image";
import logo from "@/public/logo-1.png"

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="/" className="flex items-center gap-2">
      <Image src={logo} alt="" width={500} height={500} className="object-contain w-14" />
      <span className="leading-tight">
        <span className={`block text-lg font-bold ${light ? "text-white" : "text-brand-dark"}`}>Rebak Solutions</span>
        <span className={`block text-[11px] ${light ? "text-white/70" : "text-ink/60"}`}>A Safe fence for a safe neighbour </span>
      </span>
    </a>
  );
}
