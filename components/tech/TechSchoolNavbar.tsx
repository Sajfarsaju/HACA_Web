"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { TechMenuOverlay } from "@/components/sections/tech/TechMenuOverlay";
import { ENQUIRE_URL } from "@/lib/enquire";
import { isTechSchoolSeoPath, TECH_SEO_PAGE_BG } from "@/lib/tech-school-seo";

const TECH_NAV_LINKS = [
    { href: "/tech-school", label: "Home" },
    { href: "/tech-school/tech-courses", label: "Courses" },
    { href: "/tech-school/tech-projects", label: "Projects" },
    { href: "/success-story", label: "Success Story" },
    { href: "/blog", label: "Blogs" },
] as const;

/**
 * Document-flow Tech School navbar for SEO and inner pages (not hero-absolute layout).
 * Matches links, logo, and CTA from `TechNavbar` / Tech home.
 */
export function TechSchoolNavbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isSeoPage = isTechSchoolSeoPath(pathname);

    return (
        <>
            <header
                className={[
                    "sticky top-0 z-40 w-full shrink-0",
                    isSeoPage ? "bg-[#000010]" : "bg-[#111111]",
                ].join(" ")}
                style={{ backgroundColor: isSeoPage ? TECH_SEO_PAGE_BG : "#111111" }}
            >
                <div className="mx-auto box-border flex w-full max-w-[1440px] items-center justify-between px-[clamp(16px,4.16vw,60px)] py-5 md:min-h-[99px] md:py-0 md:pt-[55px] md:pb-0">
                    <Link href="/tech-school" className="relative block h-[23px] w-[130px] shrink-0 md:h-[36px] md:w-[203px]">
                        <Image
                            src="/photos/Tech/tech PW 1.svg"
                            alt="Tech PW Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    <nav
                        className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[50px] md:flex"
                        aria-label="Tech school"
                    >
                        {TECH_NAV_LINKS.map(({ href, label }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className="flex items-center gap-[6px] font-outfit text-[16px] font-normal leading-[20px] text-white no-underline whitespace-nowrap transition-opacity duration-200 hover:opacity-90"
                                >
                                    {isActive && (
                                        <span className="h-[6px] w-[6px] shrink-0 self-center rounded-full bg-white" aria-hidden />
                                    )}
                                    <span>{label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <Link
                        href={ENQUIRE_URL}
                        className="group relative hidden h-[44px] w-[118px] shrink-0 overflow-hidden rounded-[8px] bg-white px-[10px] py-[10px] font-outfit text-[14px] font-semibold leading-none text-[#1a1a1a] no-underline md:flex md:items-center md:justify-center"
                    >
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
                            Let&apos;s Connect
                        </span>
                        <span className="pointer-events-none absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-300 ease-out group-hover:translate-y-0">
                            Let&apos;s Connect
                        </span>
                    </Link>

                    <button
                        type="button"
                        className="flex h-8 w-8 shrink-0 items-center justify-center border-none bg-transparent p-0 md:hidden"
                        aria-label="Open menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Image src="/photos/Tech/Frame 68.svg" alt="" aria-hidden="true" width={16} height={16} className="object-contain" />
                    </button>
                </div>
            </header>

            <TechMenuOverlay
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                navLinks={TECH_NAV_LINKS}
            />
        </>
    );
}
