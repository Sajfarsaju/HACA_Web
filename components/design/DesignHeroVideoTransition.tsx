"use client";

import { useRef, useState, useEffect } from "react";
import { useTransform, motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { DesignEventCard } from "./DesignEventCard";

const CIRCLE =
    "M90.625 50C90.625 60.7744 86.3449 71.1075 78.7262 78.7262C71.1075 86.3449 60.7744 90.625 50 90.625C39.2256 90.625 28.8925 86.3449 21.2738 78.7262C13.6551 71.1075 9.375 60.7744 9.375 50C9.375 39.2256 13.6551 28.8925 21.2738 21.2738C28.8925 13.6551 39.2256 9.375 50 9.375C60.7744 9.375 71.1075 13.6551 78.7262 21.2738C86.3449 28.8925 90.625 39.2256 90.625 50Z";

function PlayIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <path d={CIRCLE} stroke="white" strokeWidth="3.75" />
            <path d="M68.75 50L40.625 31.25V68.75L68.75 50Z" stroke="white" strokeWidth="3.75" />
        </svg>
    );
}

function PauseIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <path d={CIRCLE} stroke="white" strokeWidth="3.75" />
            <rect x="35" y="32" width="10" height="36" rx="2" fill="white" />
            <rect x="55" y="32" width="10" height="36" rx="2" fill="white" />
        </svg>
    );
}

// ── Desktop constants ─────────────────────────────────────────────────────────
const PHOTO_CENTER_Y  = 455.5;
const PHOTO_TOP       = 414;
const PHOTO_HEIGHT    = 83;
const PHOTO_LEFT_PX   = 65;   // px from inner div left edge (absolute, viewport-independent)
const PHOTO_WIDTH_PX  = 179;  // px
const HERO_HEIGHT     = 810;
const VIDEO_HEIGHT    = 674;
const SCROLL_RANGE    = VIDEO_HEIGHT; // 674

// ── Mobile constants ──────────────────────────────────────────────────────────
const M_HERO_HEIGHT  = 800;
const M_VIDEO_HEIGHT = 254;
const M_PHOTO_HEIGHT = 48;
// M_SCROLL_RANGE = M_VIDEO_HEIGHT mirrors the desktop formula (SCROLL_RANGE = VIDEO_HEIGHT),
// giving gap = M_SCROLL_RANGE + M_HOLD − M_VIDEO_HEIGHT = 254 + 60 − 254 = 60px
const M_SCROLL_RANGE = M_VIDEO_HEIGHT; // 254
const M_HOLD         = 60;

/** Avoid `window` during SSR — `useTransform` may run on the server. */
function viewportInnerWidth(fallback = 390): number {
    if (typeof window === "undefined") return fallback;
    return window.innerWidth || fallback;
}

interface Props { src?: string; }

export function DesignHeroVideoTransition({ src }: Props) {
    const containerRef           = useRef<HTMLDivElement>(null);
    const mobileContainerRef     = useRef<HTMLDivElement>(null);
    const videoRef               = useRef<HTMLVideoElement>(null);
    const videoRef2              = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying]  = useState(false);

    const scrollY                = useMotionValue(0);
    const containerTopRef        = useRef(0);
    const mobileContainerTopRef  = useRef(0);
    const vhRef                  = useRef(900);

    // Desktop inner div ref — width read at runtime to drive function-based transforms
    const innerDeskRef      = useRef<HTMLDivElement>(null);
    const innerDeskWidthRef = useRef(1440);

    // Measured at runtime so the morph starts exactly on the thumbnail regardless of device width
    const mPhotoRef      = useRef<HTMLDivElement>(null);
    const mPhotoTopRef   = useRef(548);  // px from container top (default for 390px viewport)
    const mPhotoLeftRef  = useRef(32.7); // px from page left
    const mPhotoWidthRef = useRef(104);  // px
    // State copy of the refs — updating this triggers a re-render so the
    // useTransform closures rebuild with correct values before the first scroll.
    const [mPhotoPos, setMPhotoPos] = useState({ top: 548, left: 32.7, width: 104 });

    // Character float + mouse parallax (desktop)
    const charMouseX    = useMotionValue(0);
    const charMouseY    = useMotionValue(0);
    const charParallaxX = useSpring(useTransform(charMouseX, [-1, 1], [-12, 12]), { stiffness: 30, damping: 18 });
    const charParallaxY = useSpring(useTransform(charMouseY, [-1, 1], [-8,   8]), { stiffness: 30, damping: 18 });

    // ── Measure containers + photo thumbnail position ────────────────────────
    useEffect(() => {
        const walk = (el: HTMLElement) => {
            let top = 0, node: HTMLElement | null = el;
            while (node) { top += node.offsetTop; node = node.offsetParent as HTMLElement | null; }
            return top;
        };
        const measure = () => {
            vhRef.current = window.innerHeight;
            if (containerRef.current)       containerTopRef.current      = walk(containerRef.current);
            if (mobileContainerRef.current) mobileContainerTopRef.current = walk(mobileContainerRef.current);
            if (innerDeskRef.current)       innerDeskWidthRef.current    = innerDeskRef.current.offsetWidth;
            if (mPhotoRef.current) {
                const top   = walk(mPhotoRef.current) - mobileContainerTopRef.current;
                const left  = mPhotoRef.current.getBoundingClientRect().left;
                const width = mPhotoRef.current.offsetWidth;
                mPhotoTopRef.current   = top;
                mPhotoLeftRef.current  = left;
                mPhotoWidthRef.current = width;
                setMPhotoPos({ top, left, width });
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    // ── Universal scroll listener ────────────────────────────────────────────
    useEffect(() => {
        const onScroll = (e?: Event) => {
            if (e?.target && e.target !== document && e.target !== window) {
                scrollY.set((e.target as Element).scrollTop);
            } else {
                scrollY.set(window.scrollY);
            }
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        const scrollEls: Element[] = [];
        let el: Element | null = containerRef.current?.parentElement ?? null;
        while (el && el !== document.documentElement) {
            const oy = getComputedStyle(el).overflowY;
            if (oy === "auto" || oy === "scroll") {
                el.addEventListener("scroll", onScroll, { passive: true });
                scrollEls.push(el);
            }
            el = el.parentElement;
        }
        return () => {
            window.removeEventListener("scroll", onScroll);
            scrollEls.forEach(e => e.removeEventListener("scroll", onScroll));
        };
    }, [scrollY]);

    // Mouse tracking for character parallax (desktop only)
    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            charMouseX.set((e.clientX / window.innerWidth)  * 2 - 1);
            charMouseY.set((e.clientY / window.innerHeight) * 2 - 1);
        };
        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, [charMouseX, charMouseY]);

    // ease-in-out cubic: slow start, fast middle, slow end
    const easeInOut = (v: number) =>
        v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2;

    // ── Desktop progress 0 → 1 ───────────────────────────────────────────────
    const rawProgress = useTransform(scrollY, v => {
        const stickyOffset = Math.max(0, vhRef.current / 2 - PHOTO_CENTER_Y);
        const animStart    = Math.max(0, containerTopRef.current - stickyOffset);
        return Math.max(0, Math.min(1, (v - animStart) / SCROLL_RANGE));
    });
    const easedProgress = useTransform(rawProgress, easeInOut);
    const progress = useSpring(easedProgress, { stiffness: 65, damping: 20 });

    // ── Mobile progress 0 → 1 ────────────────────────────────────────────────
    const rawMobileProgress = useTransform(scrollY, v => {
        const animStart = mobileContainerTopRef.current;
        return Math.max(0, Math.min(1, (v - animStart) / M_SCROLL_RANGE));
    });
    const easedMobileProgress = useTransform(rawMobileProgress, easeInOut);
    const mobileProgress = useSpring(easedMobileProgress, { stiffness: 65, damping: 20 });

    // ── Desktop morph transforms ─────────────────────────────────────────────
    const imgTop    = useTransform(progress, [0, 1], [PHOTO_TOP,    HERO_HEIGHT]);
    const imgHeight = useTransform(progress, [0, 1], [PHOTO_HEIGHT, VIDEO_HEIGHT]);
    // px-based so position matches heading on every viewport width (% was wrong on < 1440px)
    const imgLeft  = useTransform(progress, v => `${PHOTO_LEFT_PX * (1 - v)}px`);
    const imgWidth = useTransform(progress, v => `${PHOTO_WIDTH_PX + (innerDeskWidthRef.current - PHOTO_WIDTH_PX) * v}px`);
    const imgRadius    = useTransform(progress, [0, 1], [15,  0]);
    const photoOpacity = useTransform(progress, [0.6, 1.0], [1, 0]);
    const videoOpacity = useTransform(progress, [0.5, 0.9], [0, 1]);

    // ── Mobile morph transforms ───────────────────────────────────────────────
    // Start position is read from mPhotoRef at runtime (measured in useEffect),
    // so the element aligns exactly with the thumbnail on every device width.
    const mImgTop = useTransform(mobileProgress, v =>
        mPhotoPos.top + (M_HERO_HEIGHT - mPhotoPos.top) * v
    );
    const mImgHeight    = useTransform(mobileProgress, [0, 1], [M_PHOTO_HEIGHT, M_VIDEO_HEIGHT]);
    const mImgLeft      = useTransform(mobileProgress, v => {
        const startPct = (mPhotoPos.left / viewportInnerWidth(390)) * 100;
        return `${startPct + (0 - startPct) * v}%`;
    });
    const mImgWidth     = useTransform(mobileProgress, v => {
        const startPct = (mPhotoPos.width / viewportInnerWidth(390)) * 100;
        return `${startPct + (100 - startPct) * v}%`;
    });
    const mImgRadius    = useTransform(mobileProgress, [0, 1], [7.46, 0]);
    const mPhotoOpacity = useTransform(mobileProgress, [0.6, 1.0], [1, 0]);
    const mVideoOpacity = useTransform(mobileProgress, [0.5, 0.9], [0, 1]);

    const toggle = (ref: React.RefObject<HTMLVideoElement | null>) => {
        const v = ref.current;
        if (!v) return;
        playing ? v.pause() : v.play();
        setPlaying(!playing);
    };

    const vcFont = '"VC Nudge Trial Normal", sans-serif';

    // Desktop dims
    const containerH = HERO_HEIGHT + SCROLL_RANGE + 60;
    const stickyTop  = `max(0px, calc(50vh - ${PHOTO_CENTER_Y}px))`;

    // Mobile dims  (800 + 400 + 60 = 1260px)
    const mContainerH = M_HERO_HEIGHT + M_SCROLL_RANGE + M_HOLD;
    const mStickyTop  = "0px";

    return (
        <>
            {/* ════════════════════════════════════════════════════════════
                DESKTOP  (untouched)
            ════════════════════════════════════════════════════════════ */}
            <div className="hidden lg:block">
                <div
                    ref={containerRef}
                    className="relative w-full bg-[#FCFCFC]"
                    style={{ height: `${containerH}px` }}
                >
                    <div
                        className="sticky w-full"
                        style={{ top: stickyTop, height: `${HERO_HEIGHT}px` }}
                    >
                        <div ref={innerDeskRef} className="relative w-full max-w-[1440px] mx-auto h-full">

                            <DesignEventCard />

                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-[35px] right-[clamp(16px,4vw,60px)] w-[308px]">
                                    <p className="m-0 text-[#0A0A0A] text-[18px] leading-[28px]"
                                       style={{ fontFamily: vcFont, fontWeight: 550 }}>
                                        From your first concept to your final portfolio, everything here
                                        is built to feel hands-on, honest, and creatively alive.
                                    </p>
                                </div>

                                <motion.div
                                    className="absolute top-[56px] left-[526px] w-[493px] h-[697.36px]"
                                    style={{ x: charParallaxX, y: charParallaxY }}
                                >
                                    <motion.div
                                        className="w-full h-full"
                                        animate={{ y: [0, -18, 0] }}
                                        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                                    >
                                        <Image
                                            src="/photos/schools/design/e295061aefa42f0e48724b7d1e97e9c0bccfc93f.webp"
                                            alt="Design character" fill className="object-contain" priority
                                        />
                                    </motion.div>
                                </motion.div>

                                <div className="absolute top-[238px] left-[60px] w-[529px] h-[397.49px] flex flex-col gap-[10px]">
                                    <div className="w-[529px] h-[326.93px]">
                                        <div className="relative w-full h-full">
                                            <div className="absolute top-0 left-[5px] text-[#050505] leading-none"
                                                 style={{ fontFamily: vcFont, fontWeight: 500, fontSize: 100 }}>
                                                Design
                                            </div>
                                            <div className="absolute top-[79.25px] left-0 text-[#050505] leading-none"
                                                 style={{ fontFamily: '"IvyPresto Display", serif', fontWeight: 300, fontStyle: "italic", fontSize: 100 }}>
                                                Your
                                            </div>
                                            <div className="absolute top-[176px] left-[5px] flex items-center gap-[13px]">
                                                <div style={{ width: 179, height: 83, flexShrink: 0 }} />
                                                <div className="text-[#050505] leading-none"
                                                     style={{ fontFamily: vcFont, fontWeight: 500, fontSize: 100 }}>
                                                    Career
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-[5.56px] w-[246.22px] h-[60.56px] group pointer-events-auto">
                                        <Link href="/design-school/courses"
                                              className="flex items-center justify-center w-[180.67px] h-[60.56px] rounded-[50px] border-[1.11px] border-[#8F56FF] px-[33.33px] py-[17.78px] bg-transparent transition-colors duration-300 group-hover:bg-[#8F56FF]"
                                              style={{ fontFamily: vcFont, fontWeight: 550 }}>
                                            <span className="text-[#000000] text-[17.78px] leading-none whitespace-nowrap transition-colors duration-300 group-hover:text-white">
                                                Join the Club
                                            </span>
                                        </Link>
                                        <Link href="/design-school/courses"
                                              className="relative w-[60px] h-[60px] rounded-full bg-[#8F56FF] overflow-hidden shrink-0"
                                              aria-label="Join the Club">
                                            <div className="absolute top-[13.89px] left-[13.89px] w-[33.33px] h-[33.33px] -translate-x-[45.56px] transition-transform duration-300 group-hover:translate-x-0">
                                                <svg width="33" height="33" viewBox="0 0 34 34" fill="none">
                                                    <path d="M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <div className="absolute top-[13.89px] left-[13.89px] w-[33.33px] h-[33.33px] transition-transform duration-300 group-hover:translate-x-[46px]">
                                                <svg width="33" height="33" viewBox="0 0 34 34" fill="none">
                                                    <path d="M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z" fill="white"/>
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="absolute left-[60px] top-[752px] flex items-center gap-[5px]">
                                    <span className="text-[#0A0A0A] text-[12px] leading-[28px] whitespace-nowrap"
                                          style={{ fontFamily: vcFont, fontWeight: 400 }}>
                                        Keep scrolling, it's worth it
                                    </span>
                                    <div className="relative w-[16px] h-[16px]">
                                        <Image src="/photos/schools/design/solar_arrow-up-broken (1).svg" alt="" fill className="object-contain" />
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                className="absolute overflow-hidden z-10 bg-[#0a0a0a]"
                                style={{
                                    left:         imgLeft,
                                    top:          imgTop,
                                    width:        imgWidth,
                                    height:       imgHeight,
                                    borderRadius: imgRadius,
                                }}
                            >
                                <motion.div className="absolute inset-0" style={{ opacity: photoOpacity }}>
                                    <Image
                                        src="/photos/schools/design/57d01472fcc68dc28b23f66493f860df1603a284.webp"
                                        alt="Design student" fill className="object-cover" priority
                                    />
                                </motion.div>
                                <motion.div
                                    className="absolute inset-0 cursor-pointer"
                                    style={{ opacity: videoOpacity }}
                                    onClick={() => toggle(videoRef)}
                                >
                                    <Image
                                        src="/photos/schools/design/57d01472fcc68dc28b23f66493f860df1603a284.webp"
                                        alt="" fill className="object-cover"
                                    />
                                    {src && (
                                        <video ref={videoRef} src={src}
                                               className="absolute inset-0 w-full h-full object-cover"
                                               playsInline loop />
                                    )}
                                    <div className="absolute inset-0 flex items-center justify-center"
                                         style={{ backgroundColor: "#00000066" }}>
                                        <button className="transition-transform duration-200 hover:scale-110 focus:outline-none"
                                                aria-label={playing ? "Pause" : "Play"}>
                                            {playing ? <PauseIcon size={100} /> : <PlayIcon size={100} />}
                                        </button>
                                    </div>
                                </motion.div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>

            {/* ════════════════════════════════════════════════════════════
                MOBILE — scroll-driven morph: thumbnail → video section
                ────────────────────────────────────────────────────────
                Scroll container   height = M_HERO_HEIGHT + M_SCROLL_RANGE + M_HOLD
                                          = 800 + 254 + 60 = 1114 px
                Sticky hero        top = 0px (sticks to top on all phones)
                                   height = M_HERO_HEIGHT = 800 px

                Morph trajectory (progress 0 → 1):
                  top:          548 px → 800 px  (travels down to video section)
                  height:        48 px → 254 px
                  width:      26.67% → 100%
                  left:        8.46% → 0%
                  borderRadius:  7.46 → 0

                No overflow-hidden on sticky parent — the morph element exits
                the sticky section's bottom edge at progress=1, sitting exactly
                where the old static 254 px video section was.
            ════════════════════════════════════════════════════════════ */}
            <div className="lg:hidden">
                <div
                    ref={mobileContainerRef}
                    className="relative w-full bg-[#FCFCFC]"
                    style={{ height: `${mContainerH}px` }}
                >
                    {/* Sticky hero — no overflow-hidden */}
                    <div
                        className="sticky w-full"
                        style={{ top: mStickyTop, height: `${M_HERO_HEIGHT}px` }}
                    >
                        <div className="relative w-full h-full">

                            {/* Hero content — no fade, stays fully visible during animation */}
                            <div className="absolute inset-0 pointer-events-none">
                                <main className="max-w-[1440px] mx-auto w-full h-auto min-h-[800px] px-4">
                                    <section className="relative w-full h-full">
                                        <DesignEventCard />

                                        <div className="absolute left-[16px] top-[762px] flex items-center gap-[3.68px]">
                                            <span className="text-[#0A0A0A] text-[10px] leading-[20.61px] whitespace-nowrap"
                                                  style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}>
                                                Keep scrolling, it's worth it
                                            </span>
                                            <div className="relative w-[11.78px] h-[11.78px]">
                                                <Image src="/photos/schools/design/solar_arrow-up-broken (1).svg" alt="" fill className="object-contain" />
                                            </div>
                                        </div>

                                        <div className="relative w-full min-h-[740px]">
                                            <div className="absolute top-[clamp(50px,13vw,78px)] right-[10px] w-[min(260px,66vw)] text-left">
                                                <p className="m-0 text-[#0A0A0A] text-[clamp(13px,3.7vw,15px)] leading-[clamp(20px,4.9vw,24px)]"
                                                   style={{ fontFamily: vcFont, fontWeight: 550 }}>
                                                    From your first concept to your final portfolio, everything here
                                                    is built to feel hands-on, honest, and creatively alive.
                                                </p>
                                            </div>

                                            <div className="absolute top-[clamp(136px,33vw,182px)] left-[57%] w-[min(305px,80vw)] h-[min(432px,116vw)]"
                                                 style={{ transform: "translateX(-50%)" }}>
                                                <motion.div
                                                    className="w-full h-full"
                                                    animate={{ y: [0, -12, 0] }}
                                                    transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }}
                                                >
                                                    <Image src="/photos/schools/design/e295061aefa42f0e48724b7d1e97e9c0bccfc93f.webp"
                                                           alt="Design character" fill className="object-contain" priority />
                                                </motion.div>
                                            </div>

                                            {/* Heading block — thumbnail is a visual spacer;
                                                the morphing element (z-10) overlays it immediately */}
                                            <div className="absolute top-[clamp(428px,116vw,486px)] left-[16px] right-[16px] flex flex-col gap-[3.5px]">
                                                <div className="relative w-[min(312px,84vw)] h-[min(182px,51vw)] rounded-[7.46px]">
                                                    <div className="relative w-full h-full">
                                                        <div className="absolute top-0 left-0 text-[#050505] leading-none"
                                                             style={{ fontFamily: vcFont, fontWeight: 500, fontSize: 56 }}>Design</div>
                                                        <div className="absolute top-[46px] left-[0.7px] text-[#050505] leading-none"
                                                             style={{ fontFamily: '"IvyPresto Display", serif', fontWeight: 300, fontStyle: "italic", fontSize: 56 }}>that</div>
                                                        <div className="absolute top-[96px] left-[0.7px] flex items-center gap-[6px]">
                                                            {/* Spacer matches thumbnail size; morph element sits on top */}
                                                            <div ref={mPhotoRef} className="w-[104px] h-[48px] rounded-[7.46px] shrink-0" />
                                                            <div className="text-[#050505] leading-none"
                                                                 style={{ fontFamily: vcFont, fontWeight: 500, fontSize: 56 }}>Speaks</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="-mt-[4px] flex items-center gap-[6px] w-[min(258px,86vw)] h-[56px] group pointer-events-auto">
                                                    <Link href="/design-school/courses"
                                                          className="flex items-center justify-center w-[190px] h-[56px] rounded-[46px] border-[1px] border-[#8F56FF] px-[30px] py-[15px] bg-transparent transition-colors duration-300 group-hover:bg-[#8F56FF]"
                                                          style={{ fontFamily: vcFont, fontWeight: 550 }}>
                                                        <span className="text-[#000000] text-[18px] leading-none whitespace-nowrap transition-colors duration-300 group-hover:text-white">Join the Club</span>
                                                    </Link>
                                                    <Link href="/design-school/courses"
                                                          className="relative w-[52px] h-[52px] rounded-full bg-[#8F56FF] overflow-hidden shrink-0"
                                                          aria-label="Join the Club">
                                                        <div className="absolute top-[11.5px] left-[11.5px] w-[29px] h-[29px] -translate-x-[40.5px] transition-transform duration-300 group-hover:translate-x-0">
                                                            <svg width="29" height="29" viewBox="0 0 34 34" fill="none">
                                                                <path d="M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z" fill="white"/>
                                                            </svg>
                                                        </div>
                                                        <div className="absolute top-[11.5px] left-[11.5px] w-[29px] h-[29px] transition-transform duration-300 group-hover:translate-x-[40.5px]">
                                                            <svg width="29" height="29" viewBox="0 0 34 34" fill="none">
                                                                <path d="M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z" fill="white"/>
                                                            </svg>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </main>
                            </div>

                            {/* ── Morphing element ─────────────────────────────────────────
                                Starts at the photo thumbnail position inside the heading.
                                At progress=1 it sits at top=M_HERO_HEIGHT (800px) with
                                height=M_VIDEO_HEIGHT (254px) — exactly replacing the old
                                static video section. The sticky parent has no overflow-hidden
                                so the element renders below the sticky section's bottom edge.
                            ─────────────────────────────────────────────────────────────── */}
                            <motion.div
                                className="absolute overflow-hidden z-10 bg-[#0a0a0a]"
                                style={{
                                    left:         mImgLeft,
                                    top:          mImgTop,
                                    width:        mImgWidth,
                                    height:       mImgHeight,
                                    borderRadius: mImgRadius,
                                }}
                            >
                                {/* Photo — visible until 60% progress */}
                                <motion.div className="absolute inset-0" style={{ opacity: mPhotoOpacity }}>
                                    <Image
                                        src="/photos/schools/design/57d01472fcc68dc28b23f66493f860df1603a284.webp"
                                        alt="Design student" fill className="object-cover" priority
                                    />
                                </motion.div>

                                {/* Video — fades in from 50% progress */}
                                <motion.div
                                    className="absolute inset-0 cursor-pointer"
                                    style={{ opacity: mVideoOpacity }}
                                    onClick={() => toggle(videoRef2)}
                                >
                                    <Image
                                        src="/photos/schools/design/57d01472fcc68dc28b23f66493f860df1603a284.webp"
                                        alt="" fill className="object-cover"
                                    />
                                    {src && (
                                        <video ref={videoRef2} src={src}
                                               className="absolute inset-0 w-full h-full object-cover"
                                               playsInline loop />
                                    )}
                                    <div className="absolute inset-0 flex items-center justify-center"
                                         style={{ backgroundColor: "#00000066" }}>
                                        <button className="transition-transform duration-200 hover:scale-110 focus:outline-none"
                                                aria-label={playing ? "Pause" : "Play"}>
                                            {playing ? <PauseIcon size={52} /> : <PlayIcon size={52} />}
                                        </button>
                                    </div>
                                </motion.div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}