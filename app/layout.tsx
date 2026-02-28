import { Geist, Geist_Mono, Rethink_Sans, Outfit } from "next/font/google";
import "../styles/globals.css";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { ClientLayoutProvider } from "@/components/layout/ClientLayoutProvider";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rethinkSans.variable} ${outfit.variable} antialiased min-h-screen flex flex-col overflow-x-hidden relative isolation-isolate`}
        suppressHydrationWarning
      >
        {/* ── Global Page Top Gradient ── */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[clamp(183px,16.2px+44.4vw,870px)] -z-10 pointer-events-none opacity-100 max-md:max-w-full">
          <Image
            src="/photos/main/bg-gradient-top.svg"
            alt=""
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <ClientLayoutProvider>
          {children}
        </ClientLayoutProvider>

        <ConditionalFooter />
      </body>
    </html>
  );
}
