import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import { Cpu, Network, ShieldCheck } from "lucide-react"; // @note: verified
import Link from "next/link";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fractional CTO | Managed IT & Industrial Design",
  description: "From the Router to the Browser. Digital reliability engineered for scale.",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-industrial-blue/30`}>
        <div className="fixed inset-0 grid-bg -z-10 pointer-events-none" />

        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

