import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Rebak Fencing Solutions | Quality Fencing Solutions in Kenya",
  description: "Design and installation of barbed, concrete, wooden, chainlink and perimeter fences across Kenya. Get a free quote within 24 hours.",
  openGraph: {
    title: "Rebak Fencing Solutions | Quality Fencing Solutions in Kenya",
    description: "Design and installation of barbed, concrete, wooden, chainlink and perimeter fences across Kenya. Get a free quote within 24 hours.",
    url: "/",
    siteName: "Rebak Fencing Solutions",
    images: [
      {
        url: "/about.jpg",
        width: 1170,
        height: 1170,
        alt: "Rebak Fencing Solutions concrete perimeter fence",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebak Fencing Solutions | Quality Fencing Solutions in Kenya",
    description: "Design and installation of barbed, concrete, wooden, chainlink and perimeter fences across Kenya. Get a free quote within 24 hours.",
    creator: "@FencingRebak",
    images: ["/about.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} bg-white font-sans text-ink antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
