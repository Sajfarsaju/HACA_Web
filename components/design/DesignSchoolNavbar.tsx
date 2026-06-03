"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { isDesignSchoolSeoPath } from "@/lib/design-school-seo";
import { ENQUIRE_URL } from "@/lib/enquire";

import { DESIGN_CTA_TRANSITION } from "./DesignSplitArrowCta";

const NAV_LINKS = [
    { label: "Home", href: "/design-school" },
    { label: "Success Story", href: "/design-school/success-story" },
    { label: "Projects", href: "/design-school/projects" },
    { label: "Courses", href: "/design-school/courses" },
    { label: "Blog", href: "/blog" },
] as const;

const ACTIVE_LINK_COLORS: Record<(typeof NAV_LINKS)[number]["href"], string> = {
    "/design-school": "#8F56FF",
    "/design-school/success-story": "#2592FF",
    "/design-school/projects": "#29C76B",
    "/design-school/courses": "#FF5C00",
    "/blog": "#8F56FF",
} as const;

export function DesignSchoolNavbar() {
    const pathname = usePathname();
    const onDesignSchoolSeoLanding = isDesignSchoolSeoPath(pathname);
    const [hoverHref, setHoverHref] = useState<(typeof NAV_LINKS)[number]["href"] | null>(null);

    return (
        <nav className="max-w-[1440px] mx-auto w-full flex justify-between items-center lg:h-[120.56px] pt-[20px] pb-[20px] px-6 lg:px-[60px] lg:pb-[40px]">
            {/* Left Logo */}
            <div className="w-[120px] h-[24.5435px] lg:w-[200px] lg:h-[40.91px] relative shrink-0">
                <Image
                    src="/photos/schools/design/DESIGN-SCHOOL-Logo.svg"
                    alt="Design School Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Navlinks */}
            <div className="hidden lg:flex items-center gap-[30px] w-[490px] h-[54px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] rounded-[10px]">
                {NAV_LINKS.map((link) => {
                    const isActive =
                        pathname === link.href ||
                        (onDesignSchoolSeoLanding && link.href === "/design-school/courses");
                    const activeColor = ACTIVE_LINK_COLORS[link.href];
                    const isHovered = hoverHref === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            onMouseEnter={() => setHoverHref(link.href)}
                            onMouseLeave={() => setHoverHref(null)}
                            className={[
                                "h-[22px] whitespace-nowrap text-[16px] leading-[100%] transition-[color,transform] duration-200 ease-out",
                                "hover:scale-[1.06]",
                                isActive ? "italic" : "text-[#000000]",
                            ].join(" ")}
                            style={{
                                fontFamily: '"VC Nudge Trial Normal", sans-serif',
                                fontWeight: 500,
                                color: isActive ? activeColor : isHovered ? activeColor : "#000000",
                            }}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>

            {/* Right Side */}
            <Link
                href={ENQUIRE_URL}
                className="hidden lg:flex flex-row items-center cursor-pointer group w-[230.2222px] h-[60.5556px] gap-[5.56px] no-underline"
                aria-label="Contact us"
            >
                <span
                    className={`flex items-center justify-center w-[164.67px] h-[60.5556px] border-[1.11px] border-[#FF5C00] rounded-[50px] px-[33.33px] py-[17.78px] bg-transparent transition-colors ${DESIGN_CTA_TRANSITION} group-hover:bg-[#FF5C00]`}
                    style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif' }}
                >
                    <span className={`text-[17.78px] text-[#000000] leading-none whitespace-nowrap transition-colors ${DESIGN_CTA_TRANSITION} group-hover:text-white`} style={{ fontWeight: 550 }}>
                        Contact Us
                    </span>
                </span>
                <div className={`relative box-border size-[60px] shrink-0 cursor-pointer overflow-hidden rounded-full border-[1.11px] border-transparent bg-[#FF5C00] text-white transition-colors ${DESIGN_CTA_TRANSITION} group-hover:border-[#FF5C00] group-hover:bg-white group-hover:text-[#FF5C00]`}>
                    <div className={`absolute left-[13.89px] top-[13.89px] size-[33.33px] -translate-x-[45.56px] transform-gpu transition-transform ${DESIGN_CTA_TRANSITION} group-hover:translate-x-0`}>
                        <svg width="33" height="33" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path
                                d="M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div className={`absolute left-[13.89px] top-[13.89px] size-[33.33px] transform-gpu transition-transform ${DESIGN_CTA_TRANSITION} group-hover:translate-x-[46px]`}>
                        <svg width="33" height="33" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path
                                d="M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </div>
            </Link>

            {/* Mobile Hamburger */}
            <button
                type="button"
                className="lg:hidden w-[20px] h-[13.3333px] p-0 border-none bg-transparent relative shrink-0"
                aria-label="Open menu"
            >
                <Image src="/photos/schools/design/HamburgerMenu.svg" alt="Menu" fill className="object-contain" />
            </button>
        </nav>
    );
}

