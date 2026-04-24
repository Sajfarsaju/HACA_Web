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
            className="grid h-8 w-8 place-items-center rounded-full border border-white/30 text-white/90 transition-colors hover:text-white"
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
            className="grid h-[50px] w-[50px] place-items-center rounded-full bg-[#0066FF] text-white transition-transform duration-200 hover:scale-105 active:scale-95"
            aria-label="Back to top"
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                    d="M12 19V5m0 0-6 6m6-6 6 6"
                    stroke="currentColor"
                    strokeWidth={2.25}
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
                    <div className="relative w-full min-w-0 lg:grid lg:grid-cols-[1fr_240px] lg:gap-[120px]">
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

                            <div className="grid w-full min-w-0 grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-[26px]">
                                <div className="min-w-0">
                                    <p className="m-0 font-['Satoshi',sans-serif] text-[14px] font-semibold leading-none text-white">
                                        Address
                                    </p>
                                    <p className="mt-3 m-0 max-w-[260px] font-['Satoshi',sans-serif] text-[13px] font-normal leading-[1.35] text-white/70">
                                        SECOND FLOOR,
                                        <br />
                                        4 Wing Avenue,
                                        <br />
                                        Panniyankara,
                                        <br />
                                        Kozhikode, Kerala
                                        <br />
                                        673003
                                    </p>
                                </div>
                                <div className="min-w-0">
                                    <p className="m-0 font-['Satoshi',sans-serif] text-[14px] font-semibold leading-none text-white">
                                        Phone Number
                                    </p>
                                    <p className="mt-3 m-0 font-['Satoshi',sans-serif] text-[13px] font-normal leading-[1.35] text-white/70">
                                        +91 08031332470
                                    </p>
                                </div>
                                <div className="min-w-0">
                                    <p className="m-0 font-['Satoshi',sans-serif] text-[14px] font-semibold leading-none text-white">
                                        Email
                                    </p>
                                    <p className="mt-3 m-0 font-['Satoshi',sans-serif] text-[13px] font-normal leading-[1.35] text-white/70">
                                        info@harisandcoacademy.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: quick links + back-to-top (desktop placement like screenshot) */}
                        <div className="mt-10 flex min-w-0 flex-col items-start gap-4 lg:mt-0 lg:items-start lg:pt-1">
                            <p className="m-0 font-['Satoshi',sans-serif] text-[14px] font-semibold leading-none text-white">
                                Quick Links
                            </p>
                            <ul className="m-0 flex list-none flex-col gap-[6px] p-0">
                                {QUICK_LINKS.map((l) => (
                                    <li key={l.label}>
                                        <Link
                                            href={l.href}
                                            className="font-['Satoshi',sans-serif] text-[13px] font-normal leading-none text-white/70 transition-colors hover:text-white"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Desktop: the button sits lower (not in bottom row) */}
                            <div className="hidden lg:block pt-[26px]">
                                <BackToTopBlue />
                            </div>
                        </div>
                    </div>

                    {/* Accent divider */}
                    <div className="h-[2px] w-full" style={{ backgroundColor: ACCENT }} aria-hidden />

                    {/* Bottom row */}
                    <div className="flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                            <SocialIcon href="#" label="Facebook">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path
                                        d="M14 8h3V5h-3c-2.21 0-4 1.79-4 4v3H7v3h3v7h3v-7h3l1-3h-4V9c0-.55.45-1 1-1Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="#" label="LinkedIn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path
                                        d="M6 6.5A1.5 1.5 0 1 1 6 3.5a1.5 1.5 0 0 1 0 3ZM4.75 20.5h2.5V9h-2.5v11.5ZM9.5 9h2.4v1.6h.03c.33-.62 1.15-1.28 2.37-1.28 2.53 0 3 1.67 3 3.84v7.34h-2.5v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43v6.61H9.5V9Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="#" label="Instagram">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path
                                        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.4-2.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="#" label="YouTube">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path
                                        d="M21.8 8.1a3 3 0 0 0-2.1-2.1C17.9 5.5 12 5.5 12 5.5s-5.9 0-7.7.5A3 3 0 0 0 2.2 8.1 31.1 31.1 0 0 0 1.9 12c0 1.3.1 2.6.3 3.9a3 3 0 0 0 2.1 2.1c1.8.5 7.7.5 7.7.5s5.9 0 7.7-.5a3 3 0 0 0 2.1-2.1c.2-1.3.3-2.6.3-3.9 0-1.3-.1-2.6-.3-3.9ZM10.2 14.8V9.2L15 12l-4.8 2.8Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </SocialIcon>
                        </div>

                        <div className="flex items-center justify-between gap-4 sm:justify-end">
                            <div className="flex items-center gap-6">
                                <Link
                                    href="/privacy-policy"
                                    className="font-['Satoshi',sans-serif] text-[12px] font-normal text-white/70 hover:text-white"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="/terms-conditions"
                                    className="font-['Satoshi',sans-serif] text-[12px] font-normal text-white/70 hover:text-white"
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

