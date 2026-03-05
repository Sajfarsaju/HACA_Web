"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function TechNavbar() {
    const pathname = usePathname();

    const navItems = [
        { label: "Home", href: "/schools/tech" },
        { label: "Courses", href: "/schools/tech/tech-courses" },
        { label: "Projects", href: "/schools/tech/tech-projects" },
        { label: "Success Story", href: "/success-story" },
        { label: "Blogs", href: "/blog" },
    ];

    return (
        // Header: absolute 1320×44, top-[55px] left-[60px]
        <header className="absolute w-[1320px] h-[44px] top-[55px] left-[60px] flex justify-between items-center z-[10]">
            {/* Logo */}
            <Link href="/schools/tech" className="relative w-[203px] h-[36px] shrink-0">
                <Image
                    src="/photos/Tech/tech PW 1.svg"
                    alt="Tech PW Logo"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                />
            </Link>

            {/* Nav links */}
            <nav className="w-[500px] h-[20px] flex items-center gap-[30px] relative shrink-0">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`font-outfit text-[16px] font-normal text-white no-underline flex items-center gap-[6px] whitespace-nowrap transition-opacity duration-200 ease ${isActive ? "opacity-100 font-medium" : "opacity-80 hover:opacity-100"}`}
                        >
                            {isActive && <span className="text-[20px] leading-none">•</span>}
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Join Now CTA */}
            <Link href="/contact" className="w-[118px] h-[44px] rounded-[8px] border border-transparent p-[10px] flex items-center justify-center gap-[8px] relative shrink-0">
                <Image
                    src="/photos/Tech/Join Now.svg"
                    alt="Join Now"
                    width={118}
                    height={44}
                    style={{ objectFit: "contain" }}
                />
            </Link>
        </header>
    );
}
