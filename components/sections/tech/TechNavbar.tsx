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
        <header className="tech-main-hero-header">
            {/* Logo */}
            <Link href="/schools/tech" className="tech-main-hero-logo">
                <Image
                    src="/photos/Tech/tech PW 1.svg"
                    alt="Tech PW Logo"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                />
            </Link>

            {/* Nav links */}
            <nav className="tech-main-hero-nav">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`tech-nav-item ${isActive ? "active" : ""}`}
                        >
                            {isActive && <span className="tech-nav-bullet">•</span>}
                            {item.label}
                        </Link>
                    );
                })}
            </nav>


            {/* Join Now CTA */}
            <Link href="/contact" className="tech-main-hero-cta">
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
