"use client";

import Image from "next/image"
import Link from "next/link"
import React from "react"

const ACCENT = "#0066FF"

const QUICK_LINKS = [
    { label: "Home", href: "/" },
    { label: "Success Story", href: "/success-story" },
    { label: "Blog", href: "/blog" },
    { label: "Courses", href: "/marketing-school#marketing-courses" },
    { label: "Contact Us", href: "/#contact" },
]

function SocialIcon({
    href,
    label,
    children,
}: {
    href: string
    label: string
    children: React.ReactNode
}) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="inline-flex h-10 w-10 items-center justify-center text-white transition-opacity hover:opacity-90"
        >
            {children}
        </Link>
    )
}

function BackToTopBlue() {
    return (
        <button
            type="button"
            onClick={() => {
                if (typeof window === "undefined") return
                window.scrollTo({ top: 0, behavior: "smooth" })
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
    )
}

export function MarketingFooter() {
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
                                    alt="HACA Marketing School"
                                    width={230}
                                    height={44}
                                    className="h-auto w-[clamp(170px,18vw,230px)]"
                                    priority={false}
                                />
                            </div>

                            {/* Contact block size on desktop: 531px wide, 6px title↔content gap */}
                            <div className="grid w-full min-w-0 grid-cols-1 gap-8 md:max-w-[531px] md:grid-cols-[130px_158px_231px] md:gap-x-[15px] md:gap-y-0">
                                <div className="min-w-0 flex flex-col gap-[14px]">
                                    <p className="m-0 text-white [font-family:'Darker_Grotesque',sans-serif] text-[24px] font-semibold leading-[100%] tracking-[-0.02em]">
                                        Address
                                    </p>
                                    <p className="m-0 max-w-[260px] text-white font-['Satoshi',sans-serif] text-[16px] font-medium leading-[150%] tracking-[0em]">
                                        <span className="block whitespace-nowrap">SECOND FLOOR,</span>
                                        <span className="block whitespace-nowrap">4 Wing Avenue,</span>
                                        <span className="block whitespace-nowrap">Panniyankara,</span>
                                        <span className="block whitespace-nowrap">Kozhikode, Kerala</span>
                                        <span className="block whitespace-nowrap">673003</span>
                                    </p>
                                </div>
                                <div className="min-w-0 flex flex-col gap-[14px]">
                                    <p className="m-0 text-white [font-family:'Darker_Grotesque',sans-serif] text-[24px] font-semibold leading-[100%] tracking-[-0.02em]">
                                        Phone Number
                                    </p>
                                    <p className="m-0 text-white font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] tracking-[0em]">
                                        +91 08031332470
                                    </p>
                                </div>
                                <div className="min-w-0 flex flex-col gap-[14px]">
                                    <p className="m-0 text-white [font-family:'Darker_Grotesque',sans-serif] text-[24px] font-semibold leading-[100%] tracking-[-0.02em]">
                                        Email
                                    </p>
                                    <p className="m-0 text-white font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] tracking-[0em]">
                                        info@harisandcoacademy.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: quick links + back-to-top (desktop placement like screenshot) */}
                        <div className="mt-8 min-w-0 md:mt-0 md:pt-1 md:flex md:flex-col">
                            {/* Quick links frame size on desktop: 169px wide, 40px gap to button */}
                            <div className="flex w-full min-w-0 flex-col items-start md:w-[169px]">
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

                            {/* Desktop: arrow below quick links, aligned to far right */}
                            <div className="hidden md:flex w-full justify-end pt-6">
                                <BackToTopBlue />
                            </div>
                        </div>

                        {/* Mobile: arrow top-right like screenshot */}
                        <div className="absolute right-0 top-0 md:hidden">
                            <BackToTopBlue />
                        </div>
                    </div>

                    {/* Accent divider */}
                    <div className="h-[2px] w-full" style={{ backgroundColor: ACCENT }} aria-hidden />

                    {/* Bottom row */}
                    <div className="flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            <SocialIcon href="#" label="Facebook">
                                <svg width="34" height="34" viewBox="0 0 30 30" fill="none" aria-hidden>
                                    <circle cx="15" cy="15" r="12.5" stroke="currentColor" strokeWidth="2" />
                                    <path
                                        d="M16.7 23v-7h2.3l.4-2.5h-2.7v-1.6c0-.7.2-1.2 1.2-1.2h1.6V8.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v1.4H11v2.5h2.3v7h3.4Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="#" label="LinkedIn">
                                <svg width="34" height="34" viewBox="0 0 30 30" fill="none" aria-hidden>
                                    <rect x="3.5" y="3.5" width="23" height="23" stroke="currentColor" strokeWidth="2" />
                                    <path
                                        d="M10.8 13.2V22H8.4v-8.8h2.4ZM9.6 12.1c-.8 0-1.3-.6-1.3-1.3 0-.7.5-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3 0 .7-.5 1.3-1.3 1.3ZM22 22h-2.4v-4.7c0-1.1 0-2.5-1.5-2.5-1.5 0-1.7 1.2-1.7 2.4V22H14v-8.8h2.3v1.2h.1c.3-.6 1.2-1.3 2.5-1.3 2.7 0 3.2 1.8 3.2 4.1V22Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="#" label="Instagram">
                                <svg width="34" height="34" viewBox="0 0 30 30" fill="none" aria-hidden>
                                    <rect x="4.5" y="4.5" width="21" height="21" rx="6" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="15" cy="15" r="5" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="21" cy="9" r="1.2" fill="currentColor" />
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="#" label="YouTube">
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
    )
}

