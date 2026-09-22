import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Rebak Solutions | Quality Fencing Solutions in Kenya",
  description: "Design and installation of barbed, concrete, wooden, chainlink and perimeter fences across Kenya. Get a free quote within 24 hours.",
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