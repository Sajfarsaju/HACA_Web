"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
                    const isActive = pathname === link.href;
                    const activeColor = ACTIVE_LINK_COLORS[link.href];
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={[
                                "h-[22px] whitespace-nowrap text-[16px] leading-[100%] transition-colors",
                                isActive ? "italic" : "text-[#000000] hover:text-[#FF5C00]",
                            ].join(" ")}
                            style={{
                                fontFamily: '"VC Nudge Trial Normal", sans-serif',
                                fontWeight: 500,
                                ...(isActive ? { color: activeColor } : null),
                            }}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex flex-row items-center cursor-pointer group w-[230.2222px] h-[60.5556px] gap-[5.56px]">
                <button
                    className="flex items-center justify-center w-[164.67px] h-[60.5556px] border-[1.11px] border-[#FF5C00] rounded-[50px] px-[33.33px] py-[17.78px] bg-transparent transition-colors group-hover:bg-[#FF5C00]/5"
                    style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif' }}
                >
                    <span className="font-medium text-[17.78px] text-[#000000] leading-none whitespace-nowrap">
                        Contact Us
                    </span>
                </button>
                <div className="w-[60.5556px] h-[60.5556px] relative shrink-0">
                    <Image src="/photos/schools/design/NavRightArrow.svg" alt="Arrow" fill className="object-contain" />
                </div>
            </div>

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

