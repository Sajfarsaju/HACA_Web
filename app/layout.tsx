"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import "../styles/haca-360.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { usePathname } from "next/navigation";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isTechSchool = pathname === "/schools/tech";

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative isolation-isolate`}
      >
        {/* ── Global Page Top Gradient ── */}
        <div className="page-top-gradient-wrap">
          <Image
            src="/photos/main/bg-gradient-top.svg"
            alt=""
            fill
            className="page-top-gradient-img"
            priority
          />
        </div>
        {!isTechSchool && <Navbar />}
        <main className="flex-grow">
          {children}
        </main>
        {!isTechSchool && <Footer />}
        {!isTechSchool && <WhatsAppButton />}
      </body>
    </html>
  );
}
