import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rebakfencing.com").replace(/\/$/, "");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Rebak Fencing Solutions",
  url: siteUrl,
  logo: `${siteUrl}/logo.jpg`,
  image: `${siteUrl}/logo.jpg`,
  description:
    "Design and installation of barbed, concrete, wooden, chainlink and perimeter fences across Kenya.",
  telephone: "+254707414664",
  priceRange: "$$",
  areaServed: [
    "Kipkelion",
    "Kericho",
    "Nandi",
    "Bomet",
    "Londiani",
    "Kapsaos",
    "Eldoret",
    "Litein",
    "Jamji",
    "Chepsir",
  ],
  serviceType: [
    "Barbed fence installation",
    "Concrete fence installation",
    "Gate installation",
    "Wooden fence installation",
    "Chainlink fence installation",
    "Perimeter fence installation",
  ],
  sameAs: [
    "https://web.facebook.com/people/Rebak-Fencing-Solutions/100087678855591/",
    "https://www.instagram.com/rebak_fencing_solutions/",
    "https://www.tiktok.com/@frankrebak",
    "https://twitter.com/FencingRebak",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254707414664",
    contactType: "customer service",
    areaServed: "KE",
    availableLanguage: "en",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: "Rebak Fencing Solutions | Quality Fencing Solutions in Kenya",
  description: "Design and installation of barbed, concrete, wooden, chainlink and perimeter fences across Kenya. Get a free quote within 24 hours.",
  openGraph: {
    title: "Rebak Fencing Solutions | Quality Fencing Solutions in Kenya",
    description: "Design and installation of barbed, concrete, wooden, chainlink and perimeter fences across Kenya. Get a free quote within 24 hours.",
    url: siteUrl,
    siteName: "Rebak Fencing Solutions",
    images: [
      {
        url: "/logo.jpg",
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
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} bg-white font-sans text-ink antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
