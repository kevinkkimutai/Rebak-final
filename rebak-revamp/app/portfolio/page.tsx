import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Project Gallery | Rebak Solutions",
  description: "Recent fencing projects across Nairobi and Kenya: concrete, chainlink, wooden, barbed, perimeter fences and gates.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Project Gallery" text="A look at recent fences and gates we've installed for homes, farms and businesses." />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6"><GalleryGrid /></section>
      <CtaBand />
    </>
  );
}