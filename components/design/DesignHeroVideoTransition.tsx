"use client";

import { useRef, useState, useEffect } from "react";
import { useTransform, motion, useMotionValue } from "framer-motion";
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

// Photo center from hero top: heading(238) + line3(176) + half photo(41.5)
const PHOTO_CENTER_Y = 455.5;
// Photo start position within hero
const PHOTO_TOP      = 414;   // = 238 + 176
const PHOTO_HEIGHT   = 83;
const PHOTO_WIDTH_PCT = 12.43; // 179px / 1440px
const PHOTO_LEFT_PCT  = 4.51;  // 65px / 1440px

const HERO_HEIGHT    = 810;
const VIDEO_HEIGHT   = 674;
// Animation plays over exactly HERO_HEIGHT px of scroll so that at progress=1
// the morphed element sits at top=HERO_HEIGHT inside the sticky div,
// which is the exact viewport position of the video section rendered just below.
const SCROLL_RANGE   = HERO_HEIGHT; // 810

interface Props { src?: string; }

export function DesignHeroVideoTransition({ src }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef     = useRef<HTMLVideoElement>(null);
    const videoRef2    = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const scrollY          = useMotionValue(0);
    const containerTopRef  = useRef(0);
    const vhRef            = useRef(900);

    // ── Measure container position and viewport height ──────────────────────
    useEffect(() => {
        const measure = () => {
            vhRef.current = window.innerHeight;
            if (!containerRef.current) return;
            let top = 0, node: HTMLElement | null = containerRef.current;
            while (node) { top += node.offsetTop; node = node.offsetParent as HTMLElement | null; }
            containerTopRef.current = top;
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    // ── Universal scroll listener (handles both window and element scroll) ──
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

    // ── Progress 0→1 ────────────────────────────────────────────────────────
    // Starts when the photo is at viewport center (sticky kicks in).
    // SCROLL_RANGE = 810px so progress=1 when the sticky div has advanced
    // exactly HERO_HEIGHT px — placing the morphed element at top=810 within
    // the sticky, which matches the viewport position of the video section
    // rendered in normal flow immediately after this scroll container.
    const progress = useTransform(scrollY, v => {
        const stickyOffset = Math.max(0, vhRef.current / 2 - PHOTO_CENTER_Y);
        const animStart    = Math.max(0, containerTopRef.current - stickyOffset);
        return Math.max(0, Math.min(1, (v - animStart) / SCROLL_RANGE));
    });

    // ── Morph values ─────────────────────────────────────────────────────────
    // Photo starts at its heading position; ends at HERO_HEIGHT (= top of video section)
    const imgTop    = useTransform(progress, [0, 1], [PHOTO_TOP,              HERO_HEIGHT]);
    const imgHeight = useTransform(progress, [0, 1], [PHOTO_HEIGHT,           VIDEO_HEIGHT]);
    const imgLeft   = useTransform(progress, [0, 1], [`${PHOTO_LEFT_PCT}%`,  "0%"]);
    const imgWidth  = useTransform(progress, [0, 1], [`${PHOTO_WIDTH_PCT}%`, "100%"]);
    const imgRadius = useTransform(progress, [0, 1], [15,                     0]);

    // Keep photo layer visible until near-end so there is never a transparency gap
    const photoOpacity = useTransform(progress, [0.6, 1.0], [1, 0]);
    const videoOpacity = useTransform(progress, [0.5, 0.9], [0, 1]);
    const heroOpacity  = useTransform(progress, [0.2, 0.8], [1, 0]);

    const toggle = (ref: React.RefObject<HTMLVideoElement | null>) => {
        const v = ref.current;
        if (!v) return;
        playing ? v.pause() : v.play();
        setPlaying(!playing);
    };

    const vcFont = '"VC Nudge Trial Normal", sans-serif';
    // Container is exactly tall enough: hero + scroll range + 60px hold
    const containerH = HERO_HEIGHT + SCROLL_RANGE + 60;
    // Sticky pins when photo center hits viewport center
    const stickyTop  = `max(0px, calc(50vh - ${PHOTO_CENTER_Y}px))`;

    return (
        <>
            {/* ════════════════════════════════════════════════════════════
                DESKTOP
            ════════════════════════════════════════════════════════════ */}
            <div className="hidden lg:block">

                {/* Scroll container — sticky hero lives here */}
                <div
                    ref={containerRef}
                    className="relative w-full bg-[#FCFCFC]"
                    style={{ height: `${containerH}px` }}
                >
                    {/* Sticky hero — NO overflow-hidden so morph element can exit bottom */}
                    <div
                        className="sticky w-full"
                        style={{ top: stickyTop, height: `${HERO_HEIGHT}px` }}
                    >
                        <div className="relative w-full max-w-[1440px] mx-auto h-full">

                            {/* Event card — always static */}
                            <DesignEventCard />

                            {/* Hero text + character — fades out */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none"
                                style={{ opacity: heroOpacity }}
                            >
                                <div className="absolute top-[35px] right-[clamp(16px,4vw,60px)] w-[308px]">
                                    <p className="m-0 text-[#0A0A0A] text-[18px] leading-[28px]"
                                       style={{ fontFamily: vcFont, fontWeight: 550 }}>
                                        From your first concept to your final portfolio, everything here
                                        is built to feel hands-on, honest, and creatively alive.
                                    </p>
                                </div>

                                <div className="absolute top-[56px] left-[526px] w-[493px] h-[697.36px]">
                                    <Image
                                        src="/photos/schools/design/e295061aefa42f0e48724b7d1e97e9c0bccfc93f.webp"
                                        alt="Design character" fill className="object-contain" priority
                                    />
                                </div>

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
                                            {/* Spacer holds layout; animated element overlays this slot */}
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
                            </motion.div>

                            {/* ── Morphing element ──────────────────────────────────────
                                Starts at photo position in heading line 3.
                                Ends at top=HERO_HEIGHT (= exactly where the video section
                                starts in the viewport, since the video is rendered right
                                after this scroll container).
                            ─────────────────────────────────────────────────────────── */}
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
                                {/* Photo layer */}
                                <motion.div className="absolute inset-0" style={{ opacity: photoOpacity }}>
                                    <Image
                                        src="/photos/schools/design/57d01472fcc68dc28b23f66493f860df1603a284.webp"
                                        alt="Design student" fill className="object-cover" priority
                                    />
                                </motion.div>

                                {/* Video overlay — fades in, matches what the video section shows */}
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
                MOBILE — static hero + static video (no animation)
            ════════════════════════════════════════════════════════════ */}
            <div className="lg:hidden">
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
                            <div className="absolute top-[clamp(136px,33vw,182px)] left-[57%] -translate-x-1/2 w-[min(305px,80vw)] h-[min(432px,116vw)]">
                                <Image src="/photos/schools/design/e295061aefa42f0e48724b7d1e97e9c0bccfc93f.webp"
                                       alt="Design character" fill className="object-contain" priority />
                            </div>
                            <div className="absolute top-[clamp(428px,116vw,486px)] left-[16px] right-[16px] flex flex-col gap-[3.5px]">
                                <div className="relative w-[min(312px,84vw)] h-[min(182px,51vw)] rounded-[7.46px]">
                                    <div className="relative w-full h-full">
                                        <div className="absolute top-0 left-0 text-[#050505] leading-none"
                                             style={{ fontFamily: vcFont, fontWeight: 500, fontSize: 56 }}>Design</div>
                                        <div className="absolute top-[46px] left-[0.7px] text-[#050505] leading-none"
                                             style={{ fontFamily: '"IvyPresto Display", serif', fontWeight: 300, fontStyle: "italic", fontSize: 56 }}>that</div>
                                        <div className="absolute top-[96px] left-[0.7px] flex items-center gap-[6px]">
                                            <div className="relative w-[104px] h-[48px] rounded-[7.46px] overflow-hidden">
                                                <Image src="/photos/schools/design/57d01472fcc68dc28b23f66493f860df1603a284.webp"
                                                       alt="Design student" fill className="object-cover" />
                                            </div>
                                            <div className="text-[#050505] leading-none"
                                                 style={{ fontFamily: vcFont, fontWeight: 500, fontSize: 56 }}>Speaks</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="-mt-[4px] flex items-center gap-[6px] w-[min(258px,86vw)] h-[56px] group">
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
                <section className="relative w-full h-[254px] overflow-hidden cursor-pointer" onClick={() => toggle(videoRef2)}>
                    <Image src="/photos/schools/design/57d01472fcc68dc28b23f66493f860df1603a284.webp"
                           alt="" fill className="object-cover" />
                    {src && (
                        <video ref={videoRef2} src={src}
                               className="absolute inset-0 w-full h-full object-cover" playsInline loop />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center"
                         style={{ backgroundColor: "#00000066" }}>
                        <button className="transition-transform duration-200 hover:scale-110 focus:outline-none"
                                aria-label={playing ? "Pause" : "Play"}>
                            {playing ? <PauseIcon size={52} /> : <PlayIcon size={52} />}
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
