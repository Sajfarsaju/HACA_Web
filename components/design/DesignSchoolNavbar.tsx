"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { isDesignSchoolSeoPath } from "@/lib/design-school-seo";
import { ENQUIRE_URL } from "@/lib/enquire";

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

const VIDEO_CALICUT_THEME = "#655CC5";

const ARROW_PATH =
    "M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z";

const ARROW_OUTWARD_PATH =
    "M0.933333 8.66667L0 7.73333L6.4 1.33333H0.666667V0H8.66667V8H7.33333V2.26667L0.933333 8.66667Z";

const FONT = '"VC Nudge Trial Normal", sans-serif';

export type DesignSchoolNavbarVariant = "default" | "video-calicut";

type DesignSchoolNavbarProps = {
    variant?: DesignSchoolNavbarVariant;
};

function ArrowOutwardIcon({ fill }: { fill: string }) {
    return (
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d={ARROW_OUTWARD_PATH} fill={fill} />
        </svg>
    );
}

function VideoCalicutContactUsButton({ onClick }: { onClick?: () => void }) {
    return (
        <Link
            href="/contact"
            onClick={onClick}
            className="inline-flex items-center gap-2.5 rounded-[10px] px-6 py-3.5"
            style={{ fontFamily: FONT, fontWeight: 550, backgroundColor: VIDEO_CALICUT_THEME }}
        >
            <span className="text-[17.78px] leading-none whitespace-nowrap text-white">Contact Us</span>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-[4px] bg-white" aria-hidden>
                <ArrowOutwardIcon fill={VIDEO_CALICUT_THEME} />
            </span>
        </Link>
    );
}

function MobileContactUsButton({ onClick }: { onClick?: () => void }) {
    return (
        <Link
            href="/contact"
            onClick={onClick}
            className="group flex h-[50.19px] w-[178.83px] shrink-0 items-center gap-[4.4px] no-underline"
            aria-label="Contact Us"
        >
            <span
                className="flex h-full flex-1 items-center justify-center rounded-[50px] border border-[#FF5C00] bg-transparent px-[26px] transition-colors duration-300 group-hover:bg-[#FF5C00]"
                style={{ fontFamily: FONT, fontWeight: 550, fontSize: 16 }}
            >
                <span className="leading-none whitespace-nowrap text-[#000000] transition-colors duration-300 group-hover:text-white">
                    Contact Us
                </span>
            </span>
            <span className="relative h-[47.57px] w-[47.57px] shrink-0 overflow-hidden rounded-full bg-[#FF5C00]">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0 -translate-x-[36px]">
                    <svg viewBox="0 0 34 34" fill="none" style={{ width: 26, height: 26 }} aria-hidden>
                        <path d={ARROW_PATH} fill="white" />
                    </svg>
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-[36px]">
                    <svg viewBox="0 0 34 34" fill="none" style={{ width: 26, height: 26 }} aria-hidden>
                        <path d={ARROW_PATH} fill="white" />
                    </svg>
                </span>
            </span>
        </Link>
    );
}

type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    isVideoCalicut: boolean;
    getActiveColor: (href: (typeof NAV_LINKS)[number]["href"]) => string;
    isLinkActive: (href: (typeof NAV_LINKS)[number]["href"]) => boolean;
};

function DesignSchoolMobileMenu({
    isOpen,
    onClose,
    isVideoCalicut,
    getActiveColor,
    isLinkActive,
}: MobileMenuProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex min-h-[100dvh] w-full flex-col overflow-y-auto bg-[#FCFCFC] px-5 pb-10 pt-[55px] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
        >
            <div className="mx-auto flex w-full max-w-[335px] flex-1 flex-col gap-10">
                <div className="flex h-11 items-center justify-between">
                    <button
                        type="button"
                        onClick={onClose}
                        className="relative flex h-[30px] w-[30px] shrink-0 items-center justify-center border-none bg-transparent p-0"
                        aria-label="Close menu"
                    >
                        <span className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 rotate-45 bg-black" />
                        <span className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 -rotate-45 bg-black" />
                    </button>

                    {isVideoCalicut ? (
                        <VideoCalicutContactUsButton onClick={onClose} />
                    ) : (
                        <MobileContactUsButton onClick={onClose} />
                    )}
                </div>

                <nav className="flex flex-col gap-5" aria-label="Design school">
                    {NAV_LINKS.map((link) => {
                        const isActive = isLinkActive(link.href);
                        const activeColor = getActiveColor(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className={[
                                    "w-fit py-2.5 text-[24px] leading-[100%] no-underline transition-colors",
                                    isActive ? "italic" : "text-[#000000]",
                                ].join(" ")}
                                style={{
                                    fontFamily: FONT,
                                    fontWeight: 500,
                                    ...(isActive ? { color: activeColor } : null),
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto flex flex-col gap-5 border-t border-black/10 pt-8">
                    <Link
                        href="/legal/privacy"
                        onClick={onClose}
                        className="text-[14px] leading-[120%] text-[#000000B2] no-underline"
                        style={{ fontFamily: FONT }}
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/legal/terms"
                        onClick={onClose}
                        className="text-[14px] leading-[120%] text-[#000000B2] no-underline"
                        style={{ fontFamily: FONT }}
                    >
                        Terms and Conditions
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function DesignSchoolNavbar({ variant = "default" }: DesignSchoolNavbarProps) {
    const pathname = usePathname() ?? "";
    const isVideoCalicut = variant === "video-calicut";
    const onDesignSchoolSeoLanding = isDesignSchoolSeoPath(pathname);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

    useEffect(() => {
        if (!isMobileMenuOpen) return;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        closeMobileMenu();
    }, [pathname, closeMobileMenu]);

    const getActiveColor = (href: (typeof NAV_LINKS)[number]["href"]) => {
        if (isVideoCalicut && href === "/design-school") {
            return VIDEO_CALICUT_THEME;
        }
        return ACTIVE_LINK_COLORS[href];
    };

    const isLinkActive = (href: (typeof NAV_LINKS)[number]["href"]) => {
        if (href === "/design-school") {
            return pathname === href || (isVideoCalicut && pathname === "/video-editing-course-in-calicut");
        }
        if (isVideoCalicut) {
            return pathname === href;
        }
        return pathname === href || (onDesignSchoolSeoLanding && href === "/design-school/courses");
    };

    return (
        <>
            <nav className="relative z-50 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 pt-[20px] pb-[20px] lg:h-[120.56px] lg:px-[60px] lg:pb-[40px]">
                <Link href="/design-school" className="relative h-[24.5435px] w-[120px] shrink-0 lg:h-[40.91px] lg:w-[200px]" aria-label="Design School home">
                    <Image
                        src="/photos/schools/design/DESIGN-SCHOOL-Logo.svg"
                        alt="Design School Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                <div className="hidden h-[54px] w-[490px] items-center gap-[30px] rounded-[10px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] lg:flex">
                    {NAV_LINKS.map((link) => {
                        const isActive = isLinkActive(link.href);
                        const activeColor = getActiveColor(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={[
                                    "h-[22px] whitespace-nowrap text-[16px] leading-[100%] transition-colors",
                                    isActive ? "italic" : "text-[#000000] hover:text-[#FF5C00]",
                                ].join(" ")}
                                style={{
                                    fontFamily: FONT,
                                    fontWeight: 500,
                                    ...(isActive ? { color: activeColor } : null),
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {isVideoCalicut ? (
                    <div className="hidden shrink-0 lg:flex">
                        <VideoCalicutContactUsButton />
                    </div>
                ) : (
                    <div className="group hidden h-[60.5556px] w-[230.2222px] cursor-pointer flex-row items-center gap-[5.56px] lg:flex">
                        <Link
                            href="/contact"
                            className="flex h-[60.5556px] w-[164.67px] items-center justify-center rounded-[50px] border-[1.11px] border-[#FF5C00] bg-transparent px-[33.33px] py-[17.78px] transition-colors duration-300 group-hover:bg-[#FF5C00] no-underline"
                            style={{ fontFamily: FONT }}
                        >
                            <span
                                className="text-[17.78px] leading-none whitespace-nowrap text-[#000000] transition-colors duration-300 group-hover:text-white"
                                style={{ fontWeight: 550 }}
                            >
                                Contact Us
                            </span>
                        </Link>
                        <Link
                            href="/contact"
                            className="relative h-[60px] w-[60px] shrink-0 cursor-pointer overflow-hidden rounded-full bg-[#FF5C00]"
                            aria-label="Contact Us"
                        >
                            <span className="absolute top-[13.89px] left-[13.89px] h-[33.33px] w-[33.33px] -translate-x-[45.56px] transition-transform duration-300 group-hover:translate-x-0">
                                <svg width="33" height="33" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                    <path d={ARROW_PATH} fill="white" />
                                </svg>
                            </span>
                            <span className="absolute top-[13.89px] left-[13.89px] h-[33.33px] w-[33.33px] transition-transform duration-300 group-hover:translate-x-[46px]">
                                <svg width="33" height="33" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                    <path d={ARROW_PATH} fill="white" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                )}

                <button
                    type="button"
                    className="relative flex h-11 w-11 shrink-0 items-center justify-center border-none bg-transparent p-0 lg:hidden"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    <span className="relative block h-[13.33px] w-5">
                        <Image src="/photos/schools/design/HamburgerMenu.svg" alt="" fill className="object-contain" aria-hidden />
                    </span>
                </button>
            </nav>

            <DesignSchoolMobileMenu
                isOpen={isMobileMenuOpen}
                onClose={closeMobileMenu}
                isVideoCalicut={isVideoCalicut}
                getActiveColor={getActiveColor}
                isLinkActive={isLinkActive}
            />
        </>
    );
}
