"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const TECH_NAV_LINKS = [
    { href: "/tech-school", label: "Home" },
    { href: "/tech-school/tech-courses", label: "Courses" },
    { href: "/tech-school/tech-projects", label: "Projects" },
    { href: "/success-story", label: "Success Story" },
    { href: "/blog", label: "Blogs" },
] as const;

export function TechNavbar() {
    const pathname = usePathname();

    return (
        <>
            {/* Same as tech home: 1320×44, top 55px left 60px, z-30 + load animation */}
            <motion.header
                className="absolute w-[1320px] h-[44px] top-[55px] left-[60px] flex justify-between items-center z-[30]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
            {/* Logo — same size as tech home */}
            <Link href="/tech-school" className="block relative w-[203px] h-[36px] shrink-0">
                <Image
                    src="/photos/Tech/tech PW 1.svg"
                    alt="Tech PW Logo"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                />
            </Link>

            {/* Nav links — centered, same gap and typography as tech home */}
            <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[50px] w-auto h-[20px]">
                {TECH_NAV_LINKS.map(({ href, label }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className="flex items-center gap-[6px] font-outfit font-normal text-[16px] leading-[20px] text-white no-underline hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
                        >
                            {isActive && (
                                <span className="w-[6px] h-[6px] rounded-full bg-white flex-shrink-0 self-center" />
                            )}
                            <span>{label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Let's Connect — same as tech home (size, style, slide animation) */}
            <div className="flex items-center shrink-0">
                <Link
                    href="/contact"
                    className="group relative flex w-[118px] h-[44px] rounded-[8px] px-[10px] py-[10px] bg-white text-[#1a1a1a] font-outfit font-semibold text-[14px] leading-none no-underline overflow-hidden"
                >
                    <span className="absolute inset-0 flex h-[44px] w-full items-center justify-center font-outfit font-semibold text-[14px] leading-none text-[#1a1a1a] transition-transform duration-300 ease-out group-hover:-translate-y-full">
                        Let&apos;s Connect
                    </span>
                    <span className="pointer-events-none absolute inset-0 flex h-[44px] w-full items-center justify-center font-outfit font-semibold text-[14px] leading-none text-[#1a1a1a] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                        Let&apos;s Connect
                    </span>
                </Link>
            </div>
            </motion.header>
        </>
    );
}
