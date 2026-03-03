"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   The design canvas is 1440 × 1044 px (Figma spec).
   We scale the whole canvas uniformly so it always fills the viewport width,
   then set the outer wrapper's height to match the scaled canvas height.
   This keeps every element's proportions perfect on any desktop screen.
───────────────────────────────────────────────────────────────────────────── */

const DESIGN_W = 1440;
const DESIGN_H = 1044;
const DESKTOP_HERO_END = 916; // stats box bottom (826 + 90) - hero ends here, no gap
const MOBILE_DESIGN_W = 375;
const MOBILE_DESIGN_H = 706; // nav 63 + content 643

const TECH_NAV_LINKS = [
    { href: "/schools/tech", label: "Home" },
    { href: "/schools/tech/courses", label: "Courses" },
    { href: "/schools/tech#tech-projects", label: "Projects" },
    { href: "/success-story", label: "Success Story" },
    { href: "/blog", label: "Blogs" },
] as const;

export default function TechHero() {
    const [desktopScale, setDesktopScale] = useState(1);
    const [mobileScale, setMobileScale] = useState(1);
    const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
    const desktopMenuRef = useRef<HTMLDivElement>(null);
    const desktopMenuToggleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const update = () => {
            const containerWidth = window.innerWidth;
            setDesktopScale(containerWidth / DESIGN_W);
            setMobileScale(containerWidth / MOBILE_DESIGN_W);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        if (!isDesktopMenuOpen) return;
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            const inDropdown = desktopMenuRef.current?.contains(target);
            const inToggle = desktopMenuToggleRef.current?.contains(target);
            if (!inDropdown && !inToggle) setIsDesktopMenuOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isDesktopMenuOpen]);

    useEffect(() => {
        if (isDesktopMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isDesktopMenuOpen]);
    return (
        <>
            {/* Desktop/Tablet/Mobile nav drawer — high z-index, handles all screen sizes when open */}
            {isDesktopMenuOpen && (
                <div
                    ref={desktopMenuRef}
                    className="tech-nav-dropdown fixed inset-x-0 top-0 z-[9999] flex flex-col items-center"
                    style={{ pointerEvents: "auto" }}
                >
                    {/* Backdrop for mobile closing */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm md:hidden"
                        onClick={() => setIsDesktopMenuOpen(false)}
                    />

                    <div
                        className="relative mx-auto w-full md:max-w-[1320px] rounded-b-[24px] border-x border-b border-white/10 py-10 px-6 flex-shrink-0"
                        style={{
                            background: "linear-gradient(180deg, rgba(17,17,17,0.98) 0%, rgba(20,20,35,0.95) 100%)",
                            backdropFilter: "blur(24px)",
                            WebkitBackdropFilter: "blur(24px)",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
                        }}
                    >
                        {/* Close Button (X) */}
                        <button
                            onClick={() => setIsDesktopMenuOpen(false)}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                            aria-label="Close menu"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>

                        <nav className="flex flex-col gap-0.5 mt-8 items-center">
                            {TECH_NAV_LINKS.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setIsDesktopMenuOpen(false)}
                                    className="font-outfit font-normal text-[20px] leading-[1.35] text-white no-underline py-4 px-8 rounded-[12px] transition-all duration-[280ms] ease-in-out hover:bg-white/10 hover:shadow-[0_0_16px_rgba(255,255,255,0.06)]"
                                    style={{ textShadow: "0 0 24px rgba(255,255,255,0.06)" }}
                                >
                                    {label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsDesktopMenuOpen(false)}
                                className="mt-4 flex items-center justify-center w-[118px] h-[44px] gap-2 rounded-[8px] px-[10px] py-[10px] bg-white text-[#1a1a1a] font-outfit font-semibold text-[14px] leading-none no-underline hover:bg-white/90 transition-colors"
                            >
                                Let&apos;s Connect
                            </Link>
                        </nav>
                    </div>
                </div>
            )}

            {/* Gradient border mask - same pattern as project cards */}
            <style>{`
                .tech-hero-stats-border::before {
                    content: "";
                    position: absolute;
                    inset: -1px;
                    border-radius: 20px;
                    padding: 1px;
                    background: linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                }
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
                .tech-desktop-nav-toggle-open {
                    transform: rotate(90deg);
                }
            `}</style>
            {/* ══════════════════════════════════════════════
                DESKTOP HERO (hidden on mobile <= 768px)
                ══════════════════════════════════════════════ */}
            <div
                className="hidden md:block w-full overflow-hidden relative z-20 bg-[#111111]"
                style={{
                    height: `${DESKTOP_HERO_END * desktopScale}px`,
                }}
            >
                {/* ── Inner canvas — scaled from top-left corner ── */}
                <section
                    className="w-[1440px] h-[1044px] absolute top-0 left-1/2"
                    style={{
                        transform: `translateX(-50%) scale(${desktopScale})`,
                        transformOrigin: "top center",
                    }}
                >
                    {/* ... (rest of desktop content) ... */}
                    {/* ── Soft fade overlay: gradient dissolves into hero bg (150–250px) ── */}
                    <div
                        className="absolute left-0 right-0 z-[3] pointer-events-none"
                        style={{
                            top: "80px",
                            height: "220px",
                            background: "linear-gradient(to bottom, transparent 0%, rgba(17,17,17,0.12) 20%, rgba(17,17,17,0.4) 50%, rgba(17,17,17,0.85) 85%, #111111 100%)",
                        }}
                        aria-hidden="true"
                    />
                    {/* ── GRADIENT + ELLIPSE layer ── */}
                    <div className="absolute w-[1593.45px] h-[304px] top-[-29px] left-[-36px] opacity-100 z-0 pointer-events-none">
                        {/* Base gradient */}
                        <Image
                            src="/photos/Tech/Gradiant.svg"
                            alt="Gradient"
                            fill
                            className="!object-cover"
                            priority
                        />

                        {/* Ellipse 2 — layered on top of the gradient */}
                        <div className="absolute inset-0 z-[1]">
                            <Image
                                src="/photos/Tech/Ellipse 2.svg"
                                alt="Ellipse Gradient"
                                fill
                                className="tech-main-hero-bg-img"
                                priority
                            />
                        </div>
                    </div>

                    {/* ── HEADER ── */}
                    <header className="absolute w-[1320px] h-[44px] top-[55px] left-[60px] flex justify-between items-center z-[30]">
                        {/* Logo — left */}
                        <Link href="/schools/tech" className="block relative w-[203px] h-[36px] shrink-0">
                            <Image
                                src="/photos/Tech/tech PW 1.svg"
                                alt="Tech PW Logo"
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </Link>

                        {/* Nav links — centered */}
                        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-[50px] w-auto h-[20px]">
                            {TECH_NAV_LINKS.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="font-outfit font-normal text-[16px] leading-[20px] text-white no-underline hover:opacity-90 transition-opacity duration-200"
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>

                        {/* Right: Let's Connect (md+) / Toggle (mobile) */}
                        <div className="flex items-center shrink-0">
                            {/* Let's Connect button — visible on md, lg, xl */}
                            <Link
                                href="/contact"
                                className="hidden md:flex items-center justify-center w-[118px] h-[44px] gap-2 rounded-[8px] px-[10px] py-[10px] bg-white text-[#1a1a1a] font-outfit font-semibold text-[14px] leading-none no-underline hover:bg-white/90 transition-colors"
                            >
                                Let&apos;s Connect
                            </Link>

                            {/* Toggle menu icon — mobile only (< 768px) */}
                            <button
                                ref={desktopMenuToggleRef}
                                type="button"
                                onClick={() => setIsDesktopMenuOpen((o) => !o)}
                                className="md:hidden w-[44px] h-[44px] flex items-center justify-center rounded-[8px] bg-transparent border-none cursor-pointer p-0 transition-transform duration-300 ease-in-out"
                                aria-label={isDesktopMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isDesktopMenuOpen}
                            >
                                <Image
                                    src="/photos/Tech/Frame 68.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className={`transition-transform duration-300 ease-in-out ${isDesktopMenuOpen ? "tech-desktop-nav-toggle-open" : ""}`}
                                    style={{ objectFit: "contain" }}
                                />
                            </button>
                        </div>
                    </header>

                    {/* ── HERO TEXT SECTION ── */}
                    <div className="absolute w-[472px] h-[320px] top-[249px] left-[151px] flex flex-col gap-[6px] z-[5]">
                        {/* Sub-heading */}
                        <div className="w-[472px] h-[24px] font-outfit font-light text-[20px] leading-[1.2] text-white whitespace-nowrap">
                            School for the Tech Evolution
                        </div>

                        {/* Main heading + button wrapper */}
                        <div className="w-[472px] h-[286px] flex flex-col gap-[20px]">
                            {/* Main heading */}
                            <div className="w-[411px] h-[222px] font-outfit font-normal text-[74px] leading-none tracking-[-0.02em] text-white">
                                Be Part of <br />
                                What&apos;s Next in Tech
                            </div>

                            {/* Button */}
                            <div className="w-[200px] h-[64px] gap-[12px] opacity-100 border-[1.5px] border-solid border-transparent rounded-[14px] px-[30px] py-[20px] flex items-center justify-center relative rotate-0">
                                <Image
                                    src="/photos/Tech/Button Container (2).svg"
                                    alt="Get Started"
                                    width={200}
                                    height={64}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── HERO IMAGE (bust) ── */}
                    <div className="absolute w-[500px] h-[589px] top-[280.34px] left-[829px] z-[4]">
                        <Image
                            src="/photos/Tech/freepik__a-closeup-profile-shot-shows-a-dark-metallic-bust-__44477 (1) 1.png"
                            alt="Tech Bust"
                            fill
                            style={{ objectFit: "contain" }}
                            priority
                        />
                    </div>

                    {/* ── SOCIAL ICONS (left sidebar) ── */}
                    <div className="absolute w-[36px] h-[157.5px] top-[411px] left-[51px] flex flex-col gap-[24.75px] items-center z-[6]">
                        {/* Instagram */}
                        <div className="w-[36px] h-[36px] rounded-[55px] border-[0.38px] border-white/40 opacity-80 flex items-center justify-center p-[9px]">
                            <Image
                                src="/photos/Tech/Social Icons.svg"
                                alt="Instagram"
                                width={18}
                                height={18}
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        {/* Facebook */}
                        <div className="w-[36px] h-[36px] rounded-[55px] border-[0.38px] border-white/40 opacity-80 flex items-center justify-center p-[9px]">
                            <Image
                                src="/photos/Tech/uil_facebook.svg"
                                alt="Facebook"
                                width={18}
                                height={18}
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        {/* YouTube */}
                        <div className="w-[36px] h-[36px] rounded-[55px] border-[0.38px] border-white/40 opacity-80 flex items-center justify-center p-[9px]">
                            <Image
                                src="/photos/Tech/mdi_youtube.svg"
                                alt="YouTube"
                                width={18}
                                height={18}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </div>

                    {/* ── COHORT / SKILLS INFO BLOCK ── */}
                    <div className="absolute w-[254.5px] h-[133px] top-[603px] left-[542px] z-[6]">
                        {/* "Practical Tech Skills" label */}
                        <div className="absolute w-[120px] h-[36px] top-0 left-[3px] font-outfit font-normal text-[14px] leading-[1.1] text-white flex items-center">
                            Practical <br /> Tech Skills
                        </div>

                        {/* Vector line 1 */}
                        <div className="absolute pointer-events-none w-[254.5px] h-[30px] top-[23px] left-0">
                            <Image
                                src="/photos/Tech/Vector 3 (1).svg"
                                alt="Vector 1"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        {/* Arrow 2 */}
                        <div className="absolute pointer-events-none w-[12.73px] h-[12.73px] top-[5px] left-[238.5px]">
                            <Image
                                src="/photos/Tech/Arrow 2.svg"
                                alt="Arrow 2"
                                width={13}
                                height={13}
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        {/* "Cohort Learning" label */}
                        <div className="absolute w-[143px] h-[36px] top-[80px] left-[2.5px] font-outfit font-normal text-[14px] leading-none text-white flex items-center">
                            Cohort <br /> Learning
                        </div>

                        {/* Vector line 3 */}
                        <div className="absolute pointer-events-none w-[254.5px] h-[30px] top-[103px] left-0">
                            <Image
                                src="/photos/Tech/Vector 3.svg"
                                alt="Vector 3"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        {/* Arrow 1 */}
                        <div className="absolute pointer-events-none w-[12.73px] h-[12.73px] top-[91.5px] left-[236.64px] rotate-0">
                            <Image
                                src="/photos/Tech/Arrow 1.svg"
                                alt="Arrow 1"
                                width={13}
                                height={13}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </div>

                    {/* ── WHATSAPP FLOATING BUTTON (hidden on smaller screens) ── */}
                    <div className="absolute hidden lg:block w-[80px] h-[80px] rounded-[200px] border-[1px] border-white/30 top-[719px] left-[1302px] overflow-hidden p-0 z-[8] cursor-pointer bg-white/5">
                        <Image
                            src="/photos/Tech/ic_baseline-whatsapp.svg"
                            alt="WhatsApp"
                            width={80}
                            height={80}
                            className="block w-[80px] h-[80px] min-w-[80px] min-h-[80px] shrink-0"
                            style={{ objectFit: "contain" }}
                        />
                    </div>

                    {/* ── BOTTOM STATS BAR ── */}
                    <div className="absolute w-[1322px] h-[90px] top-[826px] left-[60px] z-[7] rounded-[20px] flex justify-center items-center py-[20px] px-[40px] gap-[80px] border border-transparent bg-[#A3A3A3]/[.15] backdrop-blur-[51.4px] tech-hero-stats-border">
                        {/* Stat 1 */}
                        <div className="flex items-center gap-[12px] relative opacity-100 rotate-0 w-auto h-[50px]">
                            <Image src="/photos/Tech/200+.svg" alt="200+" width={95} height={30} style={{ objectFit: "contain" }} priority />
                            <span className="flex items-center font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100">Students Learned</span>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex items-center gap-[12px] relative opacity-100 rotate-0 w-auto h-[50px]">
                            <Image src="/photos/Tech/100-percent.svg" alt="100%" width={93} height={30} style={{ objectFit: "contain" }} priority />
                            <span className="flex items-center font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100">Placement Support</span>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex items-center gap-[12px] relative opacity-100 rotate-0 w-auto h-[50px]">
                            <Image src="/photos/Tech/500+.svg" alt="500+" width={95} height={30} style={{ objectFit: "contain" }} priority />
                            <span className="flex items-center font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100">Projects Completed</span>
                        </div>
                    </div>

                </section>
            </div>

            {/* ══════════════════════════════════════════════
                MOBILE HERO (visible only on <= 768px)
                ══════════════════════════════════════════════ */}
            <div
                className="block md:hidden relative w-full bg-[#111111] overflow-hidden"
                style={{
                    height: `${MOBILE_DESIGN_H * mobileScale}px`,
                }}
            >
                <div
                    className="absolute top-0 left-0 w-[375px]"
                    style={{
                        transform: `translateX(-50%) scale(${mobileScale})`,
                        transformOrigin: "top center",
                        left: "50%",
                    }}
                >
                    {/* ── Mobile Top Gradient (HeroTopGradientMobile.svg) ── */}
                    <div className="absolute top-0 left-0 w-[375px] h-[160px] pointer-events-none z-0" aria-hidden="true">
                        <Image
                            src="/photos/Tech/HeroTopGradientMobile.svg"
                            alt=""
                            width={375}
                            height={160}
                            className="w-full h-full object-cover object-top"
                            priority
                        />
                    </div>
                    {/* ── Soft fade overlay: below gradient, BELOW content (z-1) so titles stay crisp ── */}
                    <div
                        className="absolute left-0 w-[375px] z-[1] pointer-events-none"
                        style={{
                            top: "130px",
                            height: "200px",
                            background: "linear-gradient(to bottom, transparent 0%, rgba(17,17,17,0.2) 40%, rgba(17,17,17,0.7) 80%, #111111 100%)",
                        }}
                        aria-hidden="true"
                    />

                    {/* ── Mobile Navbar (375 × 63) ── */}
                    <nav className="relative z-10 w-[375px] max-w-full h-[63px] flex justify-between items-center px-[16px] py-[20px] box-border">
                        <div className="w-[130px] h-[23px] relative shrink-0">
                            <Image
                                src="/photos/Tech/tech PW 1.svg"
                                alt="HACA Tech School"
                                width={130}
                                height={23}
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                        <button
                            onClick={() => setIsDesktopMenuOpen(true)}
                            className="w-[32px] h-[32px] flex items-center justify-center gap-[4px] shrink-0 bg-transparent border-none cursor-pointer"
                        >
                            <Image
                                src="/photos/Tech/Frame 68.svg"
                                alt="Menu"
                                width={16}
                                height={16}
                                style={{ objectFit: "contain" }}
                            />
                        </button>
                    </nav>

                    {/* ── Mobile content area (374 × 643) - z-[10] above overlay for clear visibility ── */}
                    <div className="relative z-[10] w-[374px] max-w-full h-[643px] mx-auto overflow-hidden">

                        {/* ── Top block: text + button (374 × 184) ── */}
                        <div className="relative w-[373px] h-[184px] pt-[20px] px-[16px] pb-0 flex flex-col items-center gap-[15px] box-border">
                            <div className="w-[341px] h-[109px] flex flex-col items-center gap-[10px]">
                                {/* Subheading (341 × 19) */}
                                <div className="w-[341px] h-[19px] font-outfit font-light text-[13px] leading-none text-white whitespace-nowrap overflow-hidden text-center" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
                                    School for the Tech Evolution
                                </div>
                                {/* Main title (341 × 80) */}
                                <div className="w-[341px] h-[80px] font-outfit font-normal text-[32px] leading-none tracking-[-0.02em] text-white text-center" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>
                                    Be Part of <br />What&apos;s Next in Tech
                                </div>
                            </div>

                            {/* CTA Button (107 × 40) */}
                            <div className="w-[207px] h-[40px] rounded-[10px] border-[0.87px] border-solid border-transparent px-[18px] py-[14px] flex items-center justify-center gap-[8px] box-border relative shrink-0 rotate-0 opacity-100">
                                <Image
                                    src="/photos/Tech/Button Container (2).svg"
                                    alt="I&apos;m Ready"
                                    width={107}
                                    height={40}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>

                        {/* ── Bust image (230 × 271) ── */}
                        <div className="absolute w-[230px] h-[270.94px] top-[210.84px] left-[131.5px] z-[3]">
                            <Image
                                src="/photos/Tech/freepik__a-closeup-profile-shot-shows-a-dark-metallic-bust-__44477 (1) 1.png"
                                alt="Tech Bust"
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>

                        {/* ── Info block (125 × 90) ── */}
                        <div className="absolute w-[125px] h-[90px] top-[362.95px] left-[14.5px] z-[4]">
                            <div className="absolute w-[60px] h-[24px] text-[9px] top-0 left-0 font-outfit font-normal leading-[1.1] text-white flex items-center">
                                Practical <br /> Tech Skills
                            </div>
                            <div className="absolute pointer-events-none w-[110px] h-[15px] top-[12px] left-0">
                                <Image src="/photos/Tech/Vector 3 (1).svg" alt="Vector 1" fill style={{ objectFit: "cover" }} />
                            </div>
                            <div className="absolute pointer-events-none w-[8px] h-[8px] top-[3px] left-[100px]">
                                <Image src="/photos/Tech/Arrow 2.svg" alt="Arrow 2" width={13} height={13} style={{ objectFit: "contain" }} />
                            </div>
                            <div className="absolute w-[70px] h-[24px] font-outfit font-normal text-[9px] leading-none text-white flex items-center top-[44px] left-0">
                                Cohort <br /> Learning
                            </div>
                            <div className="absolute pointer-events-none w-[110px] h-[15px] top-[60px] left-0">
                                <Image src="/photos/Tech/Vector 3.svg" alt="Vector 3" fill style={{ objectFit: "cover" }} />
                            </div>
                            <div className="absolute pointer-events-none w-[8px] h-[8px] top-[52px] left-[100px] rotate-0">
                                <Image src="/photos/Tech/Arrow 1.svg" alt="Arrow 1" width={13} height={13} style={{ objectFit: "contain" }} />
                            </div>
                        </div>

                        {/* ── Mobile Stats Bar (345 × 174) ── */}
                        <div className="absolute w-[345px] h-[174px] top-[468.95px] left-[14.5px] rounded-[20px] px-[40px] py-[20px] gap-[40px] box-border flex items-center justify-center z-[5] border border-transparent bg-[#A3A3A3]/[.15] backdrop-blur-[51.4px] tech-hero-stats-border">
                            <div className="w-[235px] h-[134px] flex flex-col gap-[10px]">
                                <div className="w-[220px] h-[38px] flex gap-[10px] items-center opacity-100 rotate-0">
                                    <Image src="/photos/Tech/200+.svg" alt="200+" width={72} height={22} style={{ objectFit: "contain" }} priority />
                                    <span className="flex items-center h-[23px] font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100 w-[138px]">Students Learned</span>
                                </div>
                                <div className="w-[231px] h-[38px] flex gap-[11px] items-center opacity-100 rotate-0">
                                    <Image src="/photos/Tech/100-percent.svg" alt="100%" width={70} height={22} style={{ objectFit: "contain" }} priority />
                                    <span className="flex items-center h-[23px] font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100 w-[150px]">Placement Support</span>
                                </div>
                                <div className="w-[235px] h-[38px] flex gap-[8px] items-center opacity-100 rotate-0">
                                    <Image src="/photos/Tech/500+.svg" alt="500+" width={73} height={22} style={{ objectFit: "contain" }} priority />
                                    <span className="flex items-center h-[23px] font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100 w-[154px]">Projects Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Mobile Background Image (below hero, mobile only) ── */}
            {/* <div className="block md:hidden w-full">
                <Image
                    src="/photos/Tech/Image.png"
                    alt="Tech Background"
                    width={1442}
                    height={200}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    priority
                />
            </div>*/}
        </>
    );
}