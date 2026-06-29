"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WHATSAPP_AE_URL } from "@/lib/whatsapp";

const ACCENT = "#0066FF";

const UAE_INSTAGRAM_URL = "https://www.instagram.com/haca.uae?igsh=NmVjc3Nua2pwZTRj";
const UAE_YOUTUBE_URL = "https://www.youtube.com/@haca_uae";

const QUICK_LINKS = [
    { label: "Home", href: "/ae" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: WHATSAPP_AE_URL },
];

function SocialIcon({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex h-10 w-10 items-center justify-center text-white transition-opacity hover:opacity-90"
        >
            {children}
        </a>
    );
}

function BackToTopBlue() {
    return (
        <button
            type="button"
            onClick={() => {
                if (typeof window === "undefined") return;
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex h-[54.8242px] w-[54.8242px] cursor-pointer items-center justify-center rounded-[20px] bg-[#0066FF] px-[16.18px] py-[4.49px] text-white transition-transform duration-200 hover:scale-105 active:scale-95"
            aria-label="Back to top"
        >
            <svg
                width="16.6425"
                height="22.070982"
                viewBox="0 0 16.6425 22.070982"
                fill="none"
                aria-hidden
                className="block"
            >
                <path
                    d="M8.32125 20.720982V3.120982M8.32125 3.120982L2.07125 9.370982M8.32125 3.120982L14.57125 9.370982"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

export function AeFooter() {
    return (
        <footer className="w-full bg-black">
            <div className="mx-auto box-border w-full min-w-0 max-w-[1440px] px-[clamp(16px,4.16vw,60px)] py-[clamp(20px,3vw,30px)]">
                <div className="flex w-full min-w-0 flex-col gap-[40px]">
                    {/* Top row */}
                    <div className="relative w-full min-w-0 md:grid md:grid-cols-[1fr_240px] md:gap-[80px] lg:gap-[120px]">
                        {/* Left: logo + contact columns */}
                        <div className="flex min-w-0 flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/photos/main/haca degital marketing.svg"
                                    alt="HACA UAE"
                                    width={230}
                                    height={44}
                                    className="h-auto w-[clamp(170px,18vw,230px)]"
                                    priority={false}
                                />
                            </div>

                            <div className="grid w-full min-w-0 grid-cols-1 gap-8 md:max-w-[560px] md:grid-cols-[1fr_158px] md:gap-x-[15px] md:gap-y-0">
                                <div className="min-w-0 flex flex-col gap-[14px]">
                                    <p className="m-0 text-white [font-family:'Darker_Grotesque',sans-serif] text-[24px] font-semibold leading-[100%] tracking-[-0.02em]">
                                        Address
                                    </p>
                                    <p className="m-0 max-w-[320px] text-white font-['Satoshi',sans-serif] text-[16px] font-medium leading-[150%] tracking-[0em]">
                                        <span className="block">HACA (Haris&amp;Co. Academy)</span>
                                        <span className="block">Abdullah Kamber Business Centre</span>
                                        <span className="block">Near Aboobacker Siddeeque Metro Station,</span>
                                        <span className="block">Deira, Dubai, UAE</span>
                                    </p>
                                </div>
                                <div className="min-w-0 flex flex-col gap-[14px]">
                                    <p className="m-0 text-white [font-family:'Darker_Grotesque',sans-serif] text-[24px] font-semibold leading-[100%] tracking-[-0.02em]">
                                        Phone Number
                                    </p>
                                    <p className="m-0 text-white font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] tracking-[0em]">
                                        +971 52 230 1767
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: quick links + back-to-top */}
                        <div className="mt-8 min-w-0 md:mt-0 md:pt-1 md:flex md:flex-col">
                            <div className="flex w-full min-w-0 flex-col items-start md:w-[220px]">
                                <div className="flex flex-col items-start gap-[14px]">
                                    <p className="m-0 text-white [font-family:'Darker_Grotesque',sans-serif] text-[28px] font-semibold leading-[150%] tracking-[-0.05em] capitalize">
                                        Quick Links
                                    </p>
                                    <ul className="m-0 flex list-none flex-col gap-[6px] p-0">
                                        {QUICK_LINKS.map((l) => (
                                            <li key={l.label}>
                                                <Link
                                                    href={l.href}
                                                    className="text-white font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] tracking-[0em] transition-opacity hover:opacity-90"
                                                >
                                                    {l.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Desktop: arrow below quick links */}
                            <div className="hidden md:flex w-full justify-end pt-6">
                                <BackToTopBlue />
                            </div>
                        </div>

                        {/* Mobile: arrow top-right */}
                        <div className="absolute right-0 top-0 md:hidden">
                            <BackToTopBlue />
                        </div>
                    </div>

                    {/* Accent divider */}
                    <div className="h-[2px] w-full" style={{ backgroundColor: ACCENT }} aria-hidden />

                    {/* Bottom row */}
                    <div className="flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            <SocialIcon href={UAE_INSTAGRAM_URL} label="HACA UAE on Instagram">
                                <svg width="34" height="34" viewBox="0 0 30 30" fill="none" aria-hidden>
                                    <rect x="4.5" y="4.5" width="21" height="21" rx="6" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="15" cy="15" r="5" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="21" cy="9" r="1.2" fill="currentColor" />
                                </svg>
                            </SocialIcon>
                            <SocialIcon href={UAE_YOUTUBE_URL} label="HACA UAE on YouTube">
                                <svg width="38" height="30" viewBox="0 0 34 26" fill="none" aria-hidden>
                                    <rect x="1.5" y="1.5" width="31" height="23" rx="6" stroke="currentColor" strokeWidth="2" />
                                    <path d="M15 9.5v7l6-3.5-6-3.5Z" fill="currentColor" />
                                </svg>
                            </SocialIcon>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-6">
                            <p className="m-0 font-['Satoshi',sans-serif] text-[12px] font-normal text-white sm:hidden">
                                © 2026 HACA. All rights reserved
                            </p>
                            <div className="flex items-center gap-6">
                                <Link
                                    href="/privacy-policy"
                                    className="font-['Satoshi',sans-serif] text-[14px] font-medium text-white transition-opacity hover:opacity-90"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="/terms-conditions"
                                    className="font-['Satoshi',sans-serif] text-[14px] font-medium text-white transition-opacity hover:opacity-90"
                                >
                                    Terms And Conditions
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
