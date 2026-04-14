"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const PLACEMENTS = [
    "/photos/schools/tech/placements/IMG_20260205_135110_480.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135132_304.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135156_730.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135237_626.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135304_434.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135329_601.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135354_480.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135421_019.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135441_651.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135511_739.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135540_651.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135602_603.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135623_589.jpg",
    "/photos/schools/tech/placements/IMG_20260205_135657_154.jpg",
] as const;

/* ── Responsive card sizing (same approach as TechYoutube) ── */
function getCardSizes(width: number) {
    if (width < 360) {
        // Very small mobile: single card only, nearly full-width
        const centerW = width - 48;
        return { centerW, centerH: centerW * 1.4, sideW: 0, sideH: 0, gap: 0, showSide: false };
    } else if (width < 480) {
        // Mobile: center card + side peeks (so left/right cards are visible)
        const centerW = Math.min(260, width - 80);
        const sideW = Math.max(140, Math.floor(centerW * 0.62));
        return { centerW, centerH: centerW * 1.4, sideW, sideH: sideW * 1.14, gap: 14, showSide: true };
    } else if (width < 768) {
        // Large mobile: center card + side peek
        const centerW = Math.min(260, width - 80);
        return { centerW, centerH: centerW * 1.4, sideW: 160, sideH: 160 * 1.14, gap: 16, showSide: true };
    } else if (width < 1024) {
        // Tablet
        const centerW = Math.min(300, width - 240);
        return { centerW, centerH: centerW * 1.4, sideW: 210, sideH: 210 * 1.14, gap: 22, showSide: true };
    } else if (width < 1280) {
        // Small desktop
        return { centerW: 360, centerH: 504, sideW: 260, sideH: 364, gap: 28, showSide: true };
    } else {
        // Full desktop
        return { centerW: 410.67, centerH: 575.66, sideW: 299.51, sideH: 419.84, gap: 30.3, showSide: true };
    }
}

/* ── Circular offset utility ── */
function getOffset(index: number, active: number, total: number) {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
}

export function TechPlacementsSection() {
    return (
        <section className="w-full relative overflow-visible" id="tech-placements">
            {/* Local style for gradient border masks */}
            <style>{`
                .tech-placements-glass-side::before {
                    content: "";
                    position: absolute;
                    inset: -0.67px;
                    border-radius: inherit;
                    padding: 0.67px;
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: destination-out;
                    mask-composite: exclude;
                    pointer-events: none;
                }
                .tech-placements-glass-center::before {
                    content: "";
                    position: absolute;
                    inset: -0.92px;
                    border-radius: inherit;
                    padding: 0.92px;
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: destination-out;
                    mask-composite: exclude;
                    pointer-events: none;
                }
                /* Purple glow */
                .tech-placements-glow {
                    background: radial-gradient(
                        ellipse 55% 55% at 50% 58%,
                        rgba(132, 0, 255, 0.32) 0%,
                        rgba(132, 0, 255, 0.14) 25%,
                        rgba(132, 0, 255, 0.05) 50%,
                        rgba(132, 0, 255, 0.01) 70%,
                        transparent 85%
                    );
                }
                /* Mentor-style gradient mask — same as TechMentors */
                .tech-placements-mentor-gradient {
                    mask-image: radial-gradient(
                        ellipse 82% 78% at 50% 50%,
                        black 0%, black 18%,
                        rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.55) 46%,
                        rgba(0,0,0,0.32) 60%, rgba(0,0,0,0.14) 74%,
                        rgba(0,0,0,0.05) 86%, transparent 94%
                    );
                    -webkit-mask-image: radial-gradient(
                        ellipse 82% 78% at 50% 50%,
                        black 0%, black 18%,
                        rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.55) 46%,
                        rgba(0,0,0,0.32) 60%, rgba(0,0,0,0.14) 74%,
                        rgba(0,0,0,0.05) 86%, transparent 94%
                    );
                }
                @media (min-width: 1024px) {
                    .tech-placements-mentor-gradient {
                        mask-image:
                            linear-gradient(to bottom, transparent 0%, transparent 22%, rgba(0,0,0,0.08) 28%, rgba(0,0,0,0.28) 35%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.82) 48%, black 55%),
                            linear-gradient(to top, transparent 0%, rgba(0,0,0,0.06) 20%, rgba(0,0,0,0.24) 36%, rgba(0,0,0,0.52) 52%, black 64%),
                            radial-gradient(ellipse 82% 78% at 50% 50%, black 0%, black 18%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.55) 46%, rgba(0,0,0,0.32) 60%, rgba(0,0,0,0.16) 74%, rgba(0,0,0,0.04) 86%, transparent 96%);
                        -webkit-mask-image:
                            linear-gradient(to bottom, transparent 0%, transparent 22%, rgba(0,0,0,0.08) 28%, rgba(0,0,0,0.28) 35%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.82) 48%, black 55%),
                            linear-gradient(to top, transparent 0%, rgba(0,0,0,0.06) 20%, rgba(0,0,0,0.24) 36%, rgba(0,0,0,0.52) 52%, black 64%),
                            radial-gradient(ellipse 82% 78% at 50% 50%, black 0%, black 18%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.55) 46%, rgba(0,0,0,0.32) 60%, rgba(0,0,0,0.16) 74%, rgba(0,0,0,0.04) 86%, transparent 96%);
                        mask-composite: intersect;
                        -webkit-mask-composite: source-in;
                    }
                }
            `}</style>

            {/* Background layers */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-visible min-h-[400px]">
                <div className="absolute inset-0 tech-placements-glow" aria-hidden />
                <div
                    className="tech-placements-mentor-gradient absolute left-1/2 -translate-x-1/2 top-[40px] w-[120%] pointer-events-none max-md:top-[30px]"
                    style={{ aspectRatio: "1440 / 1203", minHeight: "800px" }}
                >
                    <Image
                        src="/photos/Tech/mentorsGradient.svg"
                        alt=""
                        fill
                        className="object-contain object-center"
                        sizes="120vw"
                        aria-hidden
                    />
                </div>
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto py-[40px] px-[60px] flex flex-col items-center gap-[60px] max-md:max-w-[700px] max-md:pt-[40px] max-md:px-[31.6px] max-md:pb-[40px] max-md:gap-[19.44px]">
                {/* Header */}
                <div className="w-full max-w-[1228px] flex flex-col items-center gap-[20px] text-center max-md:w-[337px] max-md:gap-[10px]">
                    <h2 className="m-0 font-outfit font-normal text-[60px] leading-[62px] tracking-[-0.02em] text-white max-md:text-[32px] max-md:leading-[38px]">
                        <span className="block max-md:hidden">Placements We&apos;re Proud Of</span>
                        <span className="hidden max-md:block">Placements We&apos;re <br /> Proud Of</span>
                    </h2>

                    {/* Desktop Subheadings */}
                    <div className="flex flex-col items-center gap-[10px] max-md:hidden">
                        <p className="m-0 font-outfit font-normal text-[30px] leading-[33.6px] tracking-[-0.2px] text-white">
                            Over 80% of Tech School students come from non-IT backgrounds.
                        </p>
                        <p className="m-0 font-outfit font-normal text-[24px] leading-[33.6px] tracking-[-0.2px] text-[#A7A7A7] max-w-[1228px]">
                            Career switchers, fresh graduates, and professionals from other fields have successfully moved into tech with the right skills, projects, and mentorship.
                        </p>
                    </div>

                    {/* Mobile Subheading */}
                    <div className="hidden max-md:block max-md:w-[319px] max-md:mx-auto max-md:font-outfit max-md:font-normal max-md:text-[14px] max-md:leading-[20px] max-md:text-[#A7A7A7]">
                        <p className="m-0">Our students graduate job-ready, equipped with portfolio-worthy projects, AI expertise, and industry-relevant experience.</p>
                    </div>
                </div>

                {/* Carousel */}
                <PlacementsCarousel />
            </div>
        </section>
    );
}

function PlacementsCarousel() {
    const [active, setActive] = useState(0);
    const [windowWidth, setWindowWidth] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth : 1280
    );

    const handleResize = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    const total = PLACEMENTS.length;

    // Auto-scroll every 3 seconds; resets when `active` changes (including manual clicks)
    useEffect(() => {
        const timer = setInterval(() => {
            setActive((i) => (i + 1) % total);
        }, 3000);
        return () => clearInterval(timer);
    }, [active, total]);

    const { centerW, centerH, sideW, sideH, gap, showSide } = getCardSizes(windowWidth);

    return (
        <>
            {/* Carousel Stage */}
            <div
                className="w-full relative flex items-center justify-center overflow-visible"
                style={{ height: `${centerH + 40}px` }}
            >
                {PLACEMENTS.map((src, i) => {
                    const offset = getOffset(i, active, total);
                    const isCenter = offset === 0;
                    const isVisible = showSide ? Math.abs(offset) <= 1 : isCenter;

                    const cardW = isCenter ? centerW : sideW;
                    const cardH = isCenter ? centerH : sideH;

                    // Horizontal positioning — same logic as TechYoutube
                    let translateX = 0;
                    if (offset !== 0) {
                        const centerHalf = centerW / 2;
                        const sideHalf = sideW / 2;
                        translateX = offset > 0
                            ? centerHalf + gap + sideHalf + (offset - 1) * (sideW + gap)
                            : -(centerHalf + gap + sideHalf) + (offset + 1) * (sideW + gap);
                    }

                    return (
                        <div
                            key={i}
                            className={`absolute overflow-hidden cursor-default ${isCenter ? "z-[2]" : "z-[1]"} ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
                            style={{
                                width: `${cardW}px`,
                                height: `${cardH}px`,
                                borderRadius: isCenter ? "20.18px" : "14.72px",
                                transform: `translateX(${translateX}px) scale(${isCenter ? 1 : 0.96})`,
                                opacity: isCenter ? 1 : isVisible ? 0.55 : 0,
                                transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease, width 0.5s ease, height 0.5s ease, box-shadow 0.5s ease",
                            }}
                        >
                            {/* Glass backdrop card */}
                            <div
                                className={isCenter ? "tech-placements-glass-center" : "tech-placements-glass-side"}
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    width: "100%",
                                    height: isCenter ? "87.4%" : "87.5%",
                                    borderRadius: "inherit",
                                    background: "#D9D9D91A",
                                    backdropFilter: isCenter ? "blur(11.07px)" : "blur(8.07px)",
                                    boxShadow: isCenter
                                        ? "0px 3.69px 3.69px rgba(0,0,0,0.40)"
                                        : "0px 2.69px 2.69px rgba(0,0,0,0.40)",
                                }}
                            />

                            {/* Image */}
                            <div
                                className="absolute top-0 left-0 w-full overflow-hidden"
                                style={{
                                    height: "100%",
                                    borderRadius: "inherit",
                                }}
                            >
                                <Image
                                    src={src}
                                    fill
                                    alt="Placement Story"
                                    className="object-cover"
                                    sizes={isCenter ? "(max-width: 768px) 80vw, 411px" : "(max-width: 768px) 40vw, 300px"}
                                />
                            </div>

                            {/* Gradient border glow on center card */}
                            {isCenter && (
                                <div
                                    className="absolute inset-[-1.07px] pointer-events-none"
                                    style={{
                                        boxShadow: "0px 0px 60px rgba(255, 86, 0, 0.15), 0px 0px 20px rgba(105, 74, 255, 0.1)",
                                        borderRadius: "inherit",
                                        padding: "1.07px",
                                        background: "linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%)",
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        maskComposite: "exclude",
                                    }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
