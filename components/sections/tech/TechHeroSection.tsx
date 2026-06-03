"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TechMenuOverlay } from "@/components/sections/tech/TechMenuOverlay";
import { ENQUIRE_URL } from "@/lib/enquire";

const TECH_INSTAGRAM_URL =
    "https://www.instagram.com/haca.techschool?igsh=ZGd5dnJrNnV0OWhs";
const TECH_YOUTUBE_URL =
    "https://youtube.com/@hacatechschool?si=5Y_pVPbk-xLORtpI";

/* ─────────────────────────────────────────────────────────────────────────────
   The design canvas is 1440 × 1044 px (Figma spec).
   We scale the whole canvas uniformly so it always fills the viewport width,
   then set the outer wrapper's height to match the scaled canvas height.
   This keeps every element's proportions perfect on any desktop screen.
───────────────────────────────────────────────────────────────────────────── */

const DESIGN_W = 1440;
const DESKTOP_HERO_END = 916; // stats box bottom (826 + 90) - hero ends here, no gap
const MOBILE_DESIGN_W = 375;
const MOBILE_DESIGN_H = 706; // nav 63 + content 643

// ── Count-up number animation ─────────────────────────────────────────────────
const STAT_GRADIENT = "linear-gradient(0deg, rgba(247,247,247,0.5), rgba(247,247,247,0.5)), radial-gradient(50.91% 97.54% at 50% 2.46%, #FF5600 0%, #9600FF 100%)";

function CountUp({
    target,
    suffix,
    duration = 1400,
    desktopW,
    desktopH,
    desktopFs,
    mobileW,
    mobileH,
    mobileFs,
    isMobile,
    startAnimation,
}: {
    target: number;
    suffix: string;
    duration?: number;
    desktopW: number;
    desktopH: number;
    desktopFs: number;
    mobileW: number;
    mobileH: number;
    mobileFs: number;
    isMobile: boolean;
    startAnimation: boolean;
}) {
    const [count, setCount] = useState(0);
    const rafRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);
    const w = isMobile ? mobileW : desktopW;
    const h = isMobile ? mobileH : desktopH;
    const fs = isMobile ? mobileFs : desktopFs;

    useEffect(() => {
        if (!startAnimation) return;
        startRef.current = null;
        function step(ts: number) {
            if (startRef.current === null) startRef.current = ts;
            const elapsed = ts - startRef.current;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out quad
            const eased = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        }
        rafRef.current = requestAnimationFrame(step);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [startAnimation, target, duration]);

    return (
        <span
            className="font-outfit font-medium leading-none shrink-0"
            style={{
                minWidth: w,
                minHeight: h,
                fontSize: fs,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                background: STAT_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
            }}
        >
            {count}{suffix}
        </span>
    );
}

const TECH_NAV_LINKS = [
    { href: "/tech-school", label: "Home" },
    { href: "/tech-school/tech-courses", label: "Courses" },
    { href: "/tech-school/tech-projects", label: "Projects" },
    { href: "/success-story", label: "Success Story" },
    { href: "/blog", label: "Blogs" },
] as const;

export default function TechHero() {
    const [desktopScale, setDesktopScale] = useState(1);
    const [mobileScale, setMobileScale] = useState(1);
    const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
    const desktopStatsRef = useRef<HTMLDivElement>(null);
    const mobileStatsRef = useRef<HTMLDivElement>(null);
    const desktopStatsVisible = useInView(desktopStatsRef, { once: true, amount: 0.5 });
    const mobileStatsVisible = useInView(mobileStatsRef, { once: true, amount: 0.5 });
    const statsVisible = desktopStatsVisible || mobileStatsVisible;
    const desktopMenuRef = useRef<HTMLDivElement>(null);
    const desktopMenuToggleRef = useRef<HTMLButtonElement>(null);
    const desktopHeroRef = useRef<HTMLDivElement>(null);
    const rafMouseRef = useRef<number | null>(null);

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

    // Premium cursor-reactive gradient motion (desktop only)
    useEffect(() => {
        const el = desktopHeroRef.current;
        if (!el) return;

        const handlePointerMove = (e: PointerEvent) => {
            if (rafMouseRef.current) cancelAnimationFrame(rafMouseRef.current);
            rafMouseRef.current = requestAnimationFrame(() => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const cx = rect.width / 2;
                const cy = rect.height / 2;
                const nx = cx ? (x - cx) / cx : 0; // -1..1
                const ny = cy ? (y - cy) / cy : 0; // -1..1

                // Subtle parallax; keep values bounded to avoid jumpiness
                const mx = Math.max(-1, Math.min(1, nx)) * 42;
                const my = Math.max(-1, Math.min(1, ny)) * 18;
                el.style.setProperty("--hero-mx", `${mx}px`);
                el.style.setProperty("--hero-my", `${my}px`);
                el.style.setProperty("--cursor-x", `${x}px`);
                el.style.setProperty("--cursor-y", `${y}px`);
            });
        };

        const handlePointerLeave = () => {
            el.style.setProperty("--hero-mx", "0px");
            el.style.setProperty("--hero-my", "0px");
        };

        el.addEventListener("pointermove", handlePointerMove);
        el.addEventListener("pointerleave", handlePointerLeave);
        return () => {
            el.removeEventListener("pointermove", handlePointerMove);
            el.removeEventListener("pointerleave", handlePointerLeave);
            if (rafMouseRef.current) cancelAnimationFrame(rafMouseRef.current);
        };
    }, []);

    return (
        <>
            <TechMenuOverlay
                isOpen={isDesktopMenuOpen}
                onClose={() => setIsDesktopMenuOpen(false)}
                navLinks={TECH_NAV_LINKS}
                containerRef={desktopMenuRef}
            />

            {/* Gradient border mask + hero gradient animations */}
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
                    from { opacity: 0; transform: translateY(-12px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .tech-desktop-nav-toggle-open {
                    transform: rotate(90deg);
                }
                @keyframes heroGradOuterD {
                    0%   { transform: rotate(-179.33deg) translate3d(calc(var(--hero-mx, 0px) + 0px), calc(var(--hero-my, 0px) + 0px), 0) scale(1); }
                    50%  { transform: rotate(-179.33deg) translate3d(calc(var(--hero-mx, 0px) + -140px), calc(var(--hero-my, 0px) + 0px), 0) scale(1.04); }
                    100% { transform: rotate(-179.33deg) translate3d(calc(var(--hero-mx, 0px) + 0px), calc(var(--hero-my, 0px) + 0px), 0) scale(1); }
                }
                @keyframes heroGradInnerD {
                    0%   { transform: rotate(-177.88deg) translate3d(calc(var(--hero-mx, 0px) + 0px), calc(var(--hero-my, 0px) + 0px), 0) scale(1); }
                    50%  { transform: rotate(-177.88deg) translate3d(calc(var(--hero-mx, 0px) + 220px), calc(var(--hero-my, 0px) + 0px), 0) scale(1.025); }
                    100% { transform: rotate(-177.88deg) translate3d(calc(var(--hero-mx, 0px) + 0px), calc(var(--hero-my, 0px) + 0px), 0) scale(1); }
                }
                @keyframes heroGradOuterM {
                    0%   { transform: rotate(-179.33deg) translate3d(0px, 0px, 0) scale(1); }
                    50%  { transform: rotate(-179.33deg) translate3d(-34px, 0px, 0) scale(1.03); }
                    100% { transform: rotate(-179.33deg) translate3d(0px, 0px, 0) scale(1); }
                }
                @keyframes heroGradInnerM {
                    0%   { transform: rotate(-177.88deg) translate3d(0px, 0px, 0) scale(1); }
                    50%  { transform: rotate(-177.88deg) translate3d(48px, 0px, 0) scale(1.02); }
                    100% { transform: rotate(-177.88deg) translate3d(0px, 0px, 0) scale(1); }
                }
                .hero-grad-outer-d { animation: heroGradOuterD 14s cubic-bezier(0.22, 1, 0.36, 1) infinite; will-change: transform; }
                .hero-grad-inner-d { animation: heroGradInnerD  9s cubic-bezier(0.22, 1, 0.36, 1) infinite; will-change: transform; }
                .hero-grad-outer-m { animation: heroGradOuterM 14s cubic-bezier(0.22, 1, 0.36, 1) infinite; will-change: transform; }
                .hero-grad-inner-m { animation: heroGradInnerM  9s cubic-bezier(0.22, 1, 0.36, 1) infinite; will-change: transform; }
            `}</style>
            {/* ══════════════════════════════════════════════
                DESKTOP HERO (hidden on mobile <= 768px)
                ══════════════════════════════════════════════ */}
            <div
                ref={desktopHeroRef}
                className="hidden md:block w-full overflow-x-hidden overflow-y-hidden relative z-20 bg-transparent"
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
                    {/* ── TOP GRADIENT (CSS — animated) ── */}
                    <div aria-hidden="true" className="absolute z-0 pointer-events-none"
                        style={{
                            width: "1593.45px",
                            height: "374px",
                            top: 0,
                            left: "-36px",
                            transform: "translateY(-219px)",
                        }}>
                        {/* Outer orange-purple blob */}
                        <div className="hero-grad-outer-d" style={{
                            position: 'absolute', width: '1580.98px', height: '355.6px',
                            top: 0, left: 0, borderRadius: '50%',
                            background: 'linear-gradient(261.66deg, rgba(255,86,0,1) 17.08%, rgba(105,74,255,1) 72.9%)',
                            filter: 'blur(70px) saturate(1.25) contrast(1.03)',
                        }} />
                        {/* Inner white shimmer */}
                        <div className="hero-grad-inner-d" style={{
                            position: 'absolute', width: '981.61px', height: '175.12px',
                            top: '81.3px', left: '266.48px', borderRadius: '50%',
                            background: '#FFFFFF',
                            filter: 'blur(90px) saturate(1.08)',
                            opacity: 0.76,
                        }} />
                    </div>

                    {/* ── HEADER ── */}
                    <motion.header
                        className="absolute w-[1320px] h-[44px] top-[55px] left-[60px] flex justify-between items-center z-[30]"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Logo — left */}
                        <Link href="/tech-school" className="block relative w-[203px] h-[36px] shrink-0">
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
                            {TECH_NAV_LINKS.map(({ href, label }) => {
                                const isHome = href === "/tech-school";
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="flex items-center gap-[6px] font-outfit font-normal text-[16px] leading-[20px] text-white no-underline hover:opacity-90 transition-opacity duration-200"
                                    >
                                        {isHome && (
                                            <span className="w-[6px] h-[6px] rounded-full bg-white flex-shrink-0 self-center" />
                                        )}
                                        <span>{label}</span>
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Right: Let's Connect (md+) / Toggle (mobile) */}
                        <div className="flex items-center shrink-0">
                            {/* Let's Connect button — same animation as hero Get Started */}
                            <Link
                                href={ENQUIRE_URL}
                                className="group relative hidden md:flex w-[118px] h-[44px] rounded-[8px] px-[10px] py-[10px] bg-white text-[#1a1a1a] font-outfit font-semibold text-[14px] leading-none no-underline overflow-hidden"
                            >
                                <span className="absolute inset-0 flex h-[44px] w-full items-center justify-center font-outfit font-semibold text-[14px] leading-none text-[#1a1a1a] transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                    Let&apos;s Connect
                                </span>
                                <span className="pointer-events-none absolute inset-0 flex h-[44px] w-full items-center justify-center font-outfit font-semibold text-[14px] leading-none text-[#1a1a1a] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                                    Let&apos;s Connect
                                </span>
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
                    </motion.header>

                    {/* ── HERO TEXT SECTION ── */}
                    <motion.div
                        className="absolute w-[472px] h-[320px] top-[249px] left-[151px] flex flex-col gap-[6px] z-[5]"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
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

                            {/* Button — 129×44 (md+ hero only), gradient border + radial fill, slide animation */}
                            <motion.div
                                className="w-[129px] h-[44px] shrink-0 rounded-[12px] p-[1px] flex items-center justify-center"
                                style={{
                                    background: "linear-gradient(110.55deg, #CDA4FF 12.15%, #8831F2 115.98%)",
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div
                                    className="w-full h-full rounded-[11px] overflow-hidden flex items-center justify-center"
                                    style={{
                                        background: "radial-gradient(71.34% 136.68% at 50% 14.3%, #927DF7 0%, #694AFF 100%)",
                                    }}
                                >
                                    <Link
                                        href={ENQUIRE_URL}
                                        className="group relative flex w-full h-full overflow-hidden px-5 py-[15px]"
                                    >
                                        <span className="absolute inset-0 flex h-full w-full items-center justify-center font-outfit font-semibold text-[20px] leading-[100%] text-center text-white whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                            I&apos;m Ready
                                        </span>
                                        <span className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center font-outfit font-semibold text-[20px] leading-[100%] text-center text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                                            I&apos;m Ready
                                        </span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* ── HERO IMAGE (bust) ── */}
                    <motion.div
                        className="absolute w-[500px] h-[589px] top-[280.34px] left-[829px] z-[4]"
                        initial={{ opacity: 0, x: 100, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Image
                            src="/photos/Tech/freepik__a-closeup-profile-shot-shows-a-dark-metallic-bust-__44477 (1) 1.webp"
                            alt="Tech Bust"
                            fill
                            style={{ objectFit: "contain" }}
                            priority
                        />
                    </motion.div>

                    {/* ── SOCIAL ICONS (left sidebar) ── */}
                    <motion.div
                        className="absolute w-[36px] h-[157.5px] top-[411px] left-[51px] flex flex-col gap-[24.75px] items-center z-[6]"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                    >
                        {/* Instagram */}
                        <a
                            href={TECH_INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="HACA Tech School on Instagram"
                            className="w-[36px] h-[36px] rounded-[55px] border-[0.38px] border-white/40 opacity-80 flex items-center justify-center p-[9px] hover:opacity-100 transition-opacity"
                        >
                            <Image
                                src="/photos/Tech/Social Icons.svg"
                                alt=""
                                width={18}
                                height={18}
                                style={{ objectFit: "contain" }}
                            />
                        </a>

                        {/* YouTube */}
                        <a
                            href={TECH_YOUTUBE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="HACA Tech School on YouTube"
                            className="w-[36px] h-[36px] rounded-[55px] border-[0.38px] border-white/40 opacity-80 flex items-center justify-center p-[9px] hover:opacity-100 transition-opacity"
                        >
                            <Image
                                src="/photos/Tech/mdi_youtube.svg"
                                alt=""
                                width={18}
                                height={18}
                                style={{ objectFit: "contain" }}
                            />
                        </a>
                    </motion.div>

                    {/* ── COHORT / SKILLS INFO BLOCK ── */}
                    <motion.div
                        className="absolute w-[254.5px] h-[133px] top-[603px] left-[542px] z-[6]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "backOut" }}
                    >
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
                    </motion.div>

                    {/* ── BOTTOM STATS BAR ── */}
                    <motion.div
                        className="absolute w-[1322px] h-[90px] top-[826px] left-[60px] z-[7] rounded-[20px] flex justify-center items-center py-[20px] px-[40px] gap-[80px] border border-transparent bg-[#A3A3A3]/[.15] backdrop-blur-[51.4px] tech-hero-stats-border"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        ref={desktopStatsRef}
                    >
                        {/* Stat 1 */}
                        <div className="flex items-center gap-[12px] relative opacity-100 rotate-0 w-auto h-[50px]">
                            <CountUp target={200} suffix="+" desktopW={96} desktopH={50} desktopFs={40} mobileW={72} mobileH={38} mobileFs={30} isMobile={false} startAnimation={statsVisible} />
                            <span className="flex flex-col justify-center font-outfit font-normal text-[18px] leading-[1.1] tracking-[-0.2px] text-[#F7F7F7] opacity-100 text-left">
                                <span>Students</span>
                                <span>Learned</span>
                            </span>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex items-center gap-[12px] relative opacity-100 rotate-0 w-auto h-[50px]">
                            <CountUp target={100} suffix="%" desktopW={96} desktopH={50} desktopFs={40} mobileW={72} mobileH={38} mobileFs={30} isMobile={false} startAnimation={statsVisible} />
                            <span className="flex flex-col justify-center font-outfit font-normal text-[18px] leading-[1.1] tracking-[-0.2px] text-[#F7F7F7] opacity-100 text-left">
                                <span>Placement</span>
                                <span>Support</span>
                            </span>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex items-center gap-[12px] relative opacity-100 rotate-0 w-auto h-[50px]">
                            <CountUp target={500} suffix="+" desktopW={96} desktopH={50} desktopFs={40} mobileW={72} mobileH={38} mobileFs={30} isMobile={false} startAnimation={statsVisible} />
                            <span className="flex flex-col justify-center font-outfit font-normal text-[18px] leading-[1.1] tracking-[-0.2px] text-[#F7F7F7] opacity-100 text-left">
                                <span>Projects</span>
                                <span>Completed</span>
                            </span>
                        </div>
                    </motion.div>

                </section>
            </div>

            {/* ══════════════════════════════════════════════
                MOBILE HERO (visible only on <= 768px)
                ══════════════════════════════════════════════ */}
            <div
                className="block md:hidden relative w-full bg-[#111111] overflow-x-hidden"
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
                    {/* ── Mobile Top Gradient (CSS — animated) ── */}
                    <div aria-hidden="true" className="absolute z-0 pointer-events-none"
                        style={{ width: '420px', height: '128px', top: 0, left: 0 }}>
                        {/* Outer orange-purple blob */}
                        <div className="hero-grad-outer-m" style={{
                            position: 'absolute', width: '460px', height: '120px',
                            top: '-14px', left: '-70px', borderRadius: '50%',
                            background: 'linear-gradient(261.66deg, rgba(255,86,0,1) 17.08%, rgba(105,74,255,1) 72.9%)',
                            filter: 'blur(30px) saturate(1.28) contrast(1.03)',
                        }} />
                        {/* Inner white shimmer */}
                        <div className="hero-grad-inner-m" style={{
                            position: 'absolute', width: '290px', height: '58px',
                            top: '16px', left: '10px', borderRadius: '50%',
                            background: '#FFFFFF',
                            filter: 'blur(38px) saturate(1.08)',
                            opacity: 0.76,
                        }} />
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
                        <motion.div
                            className="relative w-[373px] h-[184px] pt-[20px] px-[16px] pb-0 flex flex-col items-center gap-[15px] box-border"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
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

                            {/* CTA Button — 107×40, 10px radius, 0.87px gradient border, px 18 (py 12 fits 14px type in 40px frame) */}
                            <motion.div
                                className="w-[107px] h-[40px] shrink-0 rounded-[10px] p-[0.87px] flex items-center justify-center"
                                style={{
                                    background: "linear-gradient(110.55deg, #CDA4FF 12.15%, #8831F2 115.98%)",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div
                                    className="w-full h-full rounded-[9.13px] overflow-hidden flex items-center justify-center"
                                    style={{
                                        background: "radial-gradient(71.34% 136.68% at 50% 14.3%, #927DF7 0%, #694AFF 100%)",
                                    }}
                                >
                                    <Link
                                        href={ENQUIRE_URL}
                                        className="group relative flex h-full w-full items-center justify-center overflow-hidden px-[18px] py-[12px] box-border"
                                    >
                                        <span className="absolute inset-0 flex h-full w-full items-center justify-center font-outfit font-semibold text-[14px] leading-[100%] text-center text-white whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                            I&apos;m Ready
                                        </span>
                                        <span className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center font-outfit font-semibold text-[14px] leading-[100%] text-center text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                                            I&apos;m Ready
                                        </span>
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* ── Bust image (230 × 271) ── */}
                        <motion.div
                            className="absolute w-[230px] h-[270.94px] top-[210.84px] left-[131.5px] z-[3]"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <Image
                                src="/photos/Tech/freepik__a-closeup-profile-shot-shows-a-dark-metallic-bust-__44477 (1) 1.webp"
                                alt="Tech Bust"
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </motion.div>

                        {/* ── Info block (125 × 90) ── */}
                        <motion.div
                            className="absolute w-[125px] h-[90px] top-[362.95px] left-[14.5px] z-[4]"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
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
                        </motion.div>

                        {/* ── Mobile Stats Bar (345 × 174) ── */}
                        <motion.div
                            className="absolute w-[345px] h-[174px] top-[468.95px] left-[14.5px] rounded-[20px] px-[40px] py-[20px] gap-[40px] box-border flex items-center justify-center z-[5] border border-transparent bg-[#A3A3A3]/[.15] backdrop-blur-[51.4px] tech-hero-stats-border"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            ref={mobileStatsRef}
                        >
                            <div className="w-[235px] h-[134px] flex flex-col gap-[10px]">
                                <div className="w-full h-[38px] flex gap-[14px] items-center justify-center opacity-100 rotate-0">
                                    <CountUp target={200} suffix="+" desktopW={96} desktopH={50} desktopFs={40} mobileW={72} mobileH={38} mobileFs={30} isMobile={true} startAnimation={statsVisible} />
                                    <span className="flex items-center h-[23px] font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100 text-center whitespace-nowrap">Students Learned</span>
                                </div>
                                <div className="w-full h-[38px] flex gap-[14px] items-center justify-center opacity-100 rotate-0">
                                    <CountUp target={100} suffix="%" desktopW={96} desktopH={50} desktopFs={40} mobileW={72} mobileH={38} mobileFs={30} isMobile={true} startAnimation={statsVisible} />
                                    <span className="flex items-center h-[23px] font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100 text-center whitespace-nowrap">Placement Support</span>
                                </div>
                                <div className="w-full h-[38px] flex gap-[14px] items-center justify-center opacity-100 rotate-0">
                                    <CountUp target={500} suffix="+" desktopW={96} desktopH={50} desktopFs={40} mobileW={72} mobileH={38} mobileFs={30} isMobile={true} startAnimation={statsVisible} />
                                    <span className="flex items-center h-[23px] font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100 text-center whitespace-nowrap">Projects Completed</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── Mobile Background Image (below hero, mobile only) ── */}
            {/* <div className="block md:hidden w-full">
                <Image
                    src="/photos/Tech/Image.svg"
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