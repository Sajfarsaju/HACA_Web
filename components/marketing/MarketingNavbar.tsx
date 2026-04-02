"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MARKETING_NAV_LINKS = [
    { href: "/schools/marketing", label: "Home" },
    { href: "/marketing-school/success-story", label: "Success Story" },
    { href: "/blog", label: "Blog" },
    { href: "/courses", label: "Courses" },
] as const;

export function MarketingNavbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="relative w-full bg-white h-[52px] md:h-16 lg:h-[120px] px-4 md:px-8 lg:px-[60px] py-[10px] md:py-3 lg:py-[30px] flex items-center justify-between">
            <Link
                href="/schools/marketing"
                className="relative w-[123px] h-[32px] md:w-[clamp(140px,22vw,200px)] md:h-[clamp(36px,5vw,48px)] lg:w-[220px] lg:h-[53.496px] shrink-0"
                aria-label="Marketing School Home"
            >
                <Image
                    src="/photos/schools/marketing/marketing school logo.svg"
                    alt="Marketing School logo"
                    fill
                    className="object-contain"
                    priority
                />
            </Link>

            <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-[478px] h-[60px] rounded-[1000px] bg-[#E6EFFF] px-[30px] items-center justify-between gap-[50px]">
                {MARKETING_NAV_LINKS.map(({ href, label }) => {
                    const isActive = pathname === href
                    return (
                        <Link
                            key={href}
                            href={href}
                            className="inline-flex items-center gap-[5px] no-underline text-black whitespace-nowrap"
                        >
                            {isActive ? <span className="w-[6px] h-[6px] rounded-full bg-[#015AFF] shrink-0" /> : null}
                            <span className="font-rethink font-medium text-[18px] leading-[100%]">{label}</span>
                        </Link>
                    );
                })}
            </nav>

            <Link
                href="/contact"
                className="hidden lg:flex relative items-center w-[180px] h-[60px] shrink-0 group no-underline"
                aria-label="Contact us"
            >
                <div className="absolute left-0 top-0 w-[175px] h-[60px] bg-[#E6EFFF] rounded-[30px] flex items-center pl-[20px] transition-colors duration-300 group-hover:bg-[#d6e4ff]">
                    <span 
                        className="text-black whitespace-nowrap"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}
                    >
                        Contact Us
                    </span>
                </div>
                <div className="absolute right-0 top-0 w-[60px] h-[60px] pointer-events-none transition-transform duration-300 group-hover:translate-x-1">
                    <Image
                        src="/photos/schools/marketing/button arrow.svg"
                        alt=""
                        width={60}
                        height={60}
                        className="w-full h-full object-contain"
                    />
                </div>
            </Link>

            <button
                type="button"
                className="lg:hidden w-[20px] h-[16.364px] p-0 border-none bg-transparent inline-flex flex-col justify-between"
                aria-label="Toggle marketing menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
                <span className="block h-[2.73px] w-full rounded-full bg-black" />
                <span className="block h-[2.73px] w-full rounded-full bg-black" />
                <span className="block h-[2.73px] w-full rounded-full bg-black" />
            </button>

            {isMobileMenuOpen ? (
                <div className="fixed inset-0 z-[80] lg:hidden bg-black p-[55px_20px] flex flex-col gap-[40px] overflow-y-auto">
                    <div className="w-full max-w-[335px] flex flex-col gap-[40px]">
                        <div className="w-full h-[44px] flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-[30px] h-[30px] border-none p-0 bg-transparent relative"
                                aria-label="Close menu"
                            >
                                <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2 rotate-45" />
                                <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2 -rotate-45" />
                            </button>

                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative flex items-center w-[158.26px] h-[44px] shrink-0 group no-underline"
                                aria-label="Enquire now"
                            >
                                <div className="absolute left-0 top-0 w-[154.6px] h-[44px] bg-[#E6EFFF] rounded-[22px] flex items-center pl-[12px] transition-colors duration-300 group-hover:bg-[#d6e4ff]">
                                    <span 
                                        className="text-black whitespace-nowrap text-[16px]"
                                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, lineHeight: "100%" }}
                                    >
                                        Enquire Now
                                    </span>
                                </div>
                                <div className="absolute right-0 top-0 w-[44px] h-[44px] pointer-events-none transition-transform duration-300 group-hover:translate-x-1">
                                    <Image
                                        src="/photos/schools/marketing/button arrow.svg"
                                        alt=""
                                        width={44}
                                        height={44}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </Link>
                        </div>

                        <nav className="w-[164px] flex flex-col gap-[20px]">
                            {MARKETING_NAV_LINKS.map(({ href, label }) => {
                                const isActive = pathname === href;
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-fit h-[44px] rounded-[18px] py-[10px] px-[16px] inline-flex items-center justify-center gap-[10px] no-underline"
                                    >
                                        <span
                                            className={`${isActive ? "text-[#015AFF]" : "text-white"} text-[24px] leading-[100%] font-semibold tracking-[0] text-center whitespace-nowrap`}
                                            style={{ fontFamily: "Darker Grotesque" }}
                                        >
                                            {label}
                                        </span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    <div className="w-[316px] h-[52px] flex flex-col gap-[20px] mt-[8px]">
                        <div className="w-full h-[16px] flex items-center gap-[53px]">
                            <Link
                                href="/privacy-policy"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-rethink font-normal text-[16px] leading-[100%] text-[#A7ADBE] no-underline whitespace-nowrap w-[102px]"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-conditions"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-rethink font-normal text-[16px] leading-[100%] text-[#A7ADBE] no-underline whitespace-nowrap"
                            >
                                Terms and conditions
                            </Link>
                        </div>

                        <div className="w-full h-[16px] flex items-center gap-[65px]">
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-rethink font-normal text-[16px] leading-[100%] text-[#A7ADBE] no-underline w-[90px]"
                            >
                                Instagram
                            </Link>
                            <Link
                                href="https://youtube.com"
                                target="_blank"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-rethink font-normal text-[16px] leading-[100%] text-[#A7ADBE] no-underline"
                            >
                                Youtube
                            </Link>
                        </div>
                    </div>
                </div>
            ) : null}
        </header>
    );
}
