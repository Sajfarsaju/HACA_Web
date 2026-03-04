import { Geist, Geist_Mono, Rethink_Sans } from "next/font/google";
import "../styles/globals.css";
import { ConditionalNavbar } from "../components/layout/ConditionalNavbar";

import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
// Build trigger: 1


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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rethinkSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <ConditionalNavbar />
        <main className="flex-grow">
          {children}
        </main>
        <ConditionalFooter />
      </body>
    </html>
  );
}

