"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MOBILE_DESIGN_H } from "@/components/sections/tech-courses/constants";
import { TechMenuOverlay } from "@/components/sections/tech/TechMenuOverlay";

interface TechProjectsMobileHeroProps {
    scale: number;
}

const TECH_MOBILE_NAV_LINKS = [
    { href: "/tech-school", label: "Home" },
    { href: "/tech-school/tech-courses", label: "Courses" },
    { href: "/tech-school/tech-projects", label: "Projects" },
    { href: "/success-story", label: "Success Story" },
    { href: "/blog", label: "Blogs" },
] as const;

export function TechProjectsMobileHero({ scale }: TechProjectsMobileHeroProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const menuToggleRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!isMenuOpen) return;

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            const inDropdown = menuRef.current?.contains(target);
            const inToggle = menuToggleRef.current?.contains(target);

            if (!inDropdown && !inToggle) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <>
            <TechMenuOverlay
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                navLinks={TECH_MOBILE_NAV_LINKS}
                containerRef={menuRef}
            />

            <div
                className="tech-mobile-hero-wrapper relative z-20 w-full overflow-x-hidden block md:hidden bg-[#111111]"
                style={{
                    height: `${MOBILE_DESIGN_H * scale}px`,
                }}
            >
                <div
                    className="tech-mobile-hero-canvas absolute top-0 left-1/2 w-[375px]"
                    style={{
                        transform: `translateX(-50%) scale(${scale})`,
                        transformOrigin: "top center",
                        left: "50%",
                        height: `${MOBILE_DESIGN_H}px`,
                    }}
                >
                    {/* Navbar gradient (top strip) + dots/group: on mobile only dots/group hidden so title has solid dark */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div
                            className="tech-mobile-hero-dots-and-group absolute w-[406px] h-[4877px] left-1/2 -translate-x-1/2 top-0 z-[-2] pointer-events-none"
                        >
                            <Image
                                src="/photos/Tech/DOTsBG.svg"
                                alt="" aria-hidden="true"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                        <div
                            className="tech-mobile-hero-dots-and-group absolute w-[342px] h-[4705px] left-1/2 -translate-x-1/2 top-0 z-[-1] pointer-events-none"
                        >
                            <Image
                                src="/photos/Tech/Group 23.svg"
                                alt="" aria-hidden="true"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                        {/* ── Mobile Top Gradient (CSS — animated) ── */}
                        <div aria-hidden="true" className="absolute z-0 pointer-events-none"
                            style={{ width: '420px', height: '128px', top: 0, left: 0 }}>
                            <div className="hero-grad-outer-m" style={{
                                position: 'absolute', width: '460px', height: '120px',
                                top: '-14px', left: '-70px', borderRadius: '50%',
                                background: 'linear-gradient(261.66deg, rgba(255,86,0,1) 17.08%, rgba(105,74,255,1) 72.9%)',
                                filter: 'blur(30px) saturate(1.28) contrast(1.03)',
                            }} />
                            <div className="hero-grad-inner-m" style={{
                                position: 'absolute', width: '290px', height: '58px',
                                top: '16px', left: '10px', borderRadius: '50%',
                                background: '#FFFFFF',
                                filter: 'blur(38px) saturate(1.08)',
                                opacity: 0.76,
                            }} />
                        </div>
                    </div>

                    {/* Soft fade: gentle transition from navbar gradient to #111111 theme */}
                    <div
                        className="absolute left-0 w-[375px] z-[1] pointer-events-none"
                        style={{
                            top: "100px",
                            height: "260px",
                            background: "linear-gradient(to bottom, transparent 0%, rgba(17,17,17,0.06) 12%, rgba(17,17,17,0.18) 32%, rgba(17,17,17,0.4) 55%, rgba(17,17,17,0.68) 78%, #111111 100%)",
                        }}
                        aria-hidden="true"
                    />

                    <nav
                        className="relative z-10 w-full h-[63px] flex justify-between items-center px-5 box-border"
                    >
                        <div
                            className="relative w-[130px] h-[23px] shrink-0"
                        >
                            <Image
                                src="/photos/Tech/tech PW 1.svg"
                                alt="Logo"
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                        <button
                            ref={menuToggleRef}
                            type="button"
                            onClick={() => setIsMenuOpen(true)}
                            className="w-4 h-4 flex items-center justify-center shrink-0"
                            aria-label="Open menu"
                        >
                            <Image
                                src="/photos/Tech/Frame 68.svg"
                                alt="Menu"
                                width={16}
                                height={16}
                            />
                        </button>
                    </nav>
                </div>
            </div>

            <style>{`
                .tech-nav-dropdown {
                    animation: techNavDropdownIn 0.3s ease-in-out forwards;
                }
                @keyframes techNavDropdownIn {
                    from {
                        opacity: 0;
                        transform: translateY(-12px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
}

