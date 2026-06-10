"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Slide data ──────────────────────────────────────────────────────────────
type Slide = {
    id: string | number;
    text: string;
    name: string;
    subtitle: string;
    image: string | null;
};


// ── Premium card variants — whole card animates as one unit ─────────────────
const cardVariants = {
    enter: (dir: number) => ({
        x: dir > 0 ? 90 : -90,
        opacity: 0,
        scale: 0.94,
        filter: "blur(8px)",
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
    },
    exit: (dir: number) => ({
        x: dir > 0 ? -90 : 90,
        opacity: 0,
        scale: 0.94,
        filter: "blur(8px)",
    }),
} as const;

const enterTransition = { duration: 0.55, ease: "easeOut" } as const;
const exitTransition  = { duration: 0.3,  ease: "easeIn"  } as const;

// ── Arrow Button ────────────────────────────────────────────────────────────
function ArrowBtn({ onClick, disabled, label, isPrev }: {
    onClick: () => void;
    disabled: boolean;
    label: string;
    isPrev?: boolean;
}) {
    return (
        <button
            type="button"
            aria-label={label}
            onClick={onClick}
            disabled={disabled}
            className={`relative bg-transparent border-none p-0 w-[46.67px] h-[46.67px] cursor-pointer transition-opacity duration-200 ease-in-out disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:opacity-30 ${isPrev ? "rotate-[-180deg] opacity-70 hover:opacity-100" : "opacity-100 hover:opacity-80"}`}
        >
            <Image src="/photos/Tech/Active Arowmark.svg" fill alt="" aria-hidden="true" className="object-contain" />
        </button>
    );
}

// ── TechBlogs ───────────────────────────────────────────────────────────────
export function TechBlogs() {
    const [slides, setSlides] = useState<Slide[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [index, setIndex]       = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000";
        fetch(`${backendUrl}/api/testimonials?school=Tech+School`)
            .then((r) => r.json())
            .then((data) => {
                const list: Slide[] = (data.testimonials || []).map(
                    (t: { _id: string; quote: string; name: string; role: string; photoUrl: string | null }) => ({
                        id: t._id,
                        text: t.quote,
                        name: t.name,
                        subtitle: t.role || "",
                        image: t.photoUrl || null,
                    })
                );
                setSlides(list);
                setLoaded(true);
            })
            .catch(() => setLoaded(true));
    }, []);

    const goTo = useCallback((next: number, dir: number) => {
        setDirection(dir);
        setIndex(next);
    }, []);

    const prev = useCallback(() => { if (index > 0)                      goTo(index - 1, -1); }, [index, goTo]);
    const next = useCallback(() => { if (index < slides.length - 1)      goTo(index + 1,  1); }, [index, slides.length, goTo]);

    // Manual navigation only (no auto-advance)

    if (!loaded || slides.length === 0) return null;

    const slide = slides[index];

    return (
        <section
            className="w-full relative overflow-hidden flex flex-col items-center justify-center"
            style={{
                backgroundColor: "transparent",
                minHeight: "600px",
                padding: "80px 24px",
                maskImage: "linear-gradient(to bottom, transparent 0%, black 150px, black calc(100% - 150px), transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 150px, black calc(100% - 150px), transparent 100%)",
            }}
        >
            <div
                style={{ zIndex: 10 }}
                className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[clamp(32px,6vw,110px)] relative px-2 lg:px-[clamp(16px,3vw,40px)] min-w-0"
            >
                {/* ── Left: Title + Arrows (desktop) ── */}
                <div className="flex flex-col items-center lg:items-start gap-5 min-w-0 lg:w-[clamp(260px,24vw,420px)]">
                    <h2
                        className="text-center lg:text-left"
                        style={{
                            fontFamily: "var(--font-outfit)", fontWeight: 400,
                            fontSize: "clamp(36px, 6vw, 56px)", lineHeight: "100%",
                            letterSpacing: "-0.02em", color: "#FFFFFF",
                        }}
                    >
                        <span className="hidden lg:block">Stories from</span>
                        <span className="hidden lg:block">the Other</span>
                        <span className="hidden lg:block">Side of</span>
                        <span className="hidden lg:block">&apos;Start&apos;</span>
                        <span className="block lg:hidden leading-[1.1] max-w-[343px] mx-auto min-h-[66px]">
                            Stories from the other<br />side of &apos;start&apos;
                        </span>
                    </h2>

                    <div className="hidden lg:flex gap-4">
                        <ArrowBtn isPrev onClick={prev} disabled={index === 0}                  label="Previous" />
                        <ArrowBtn        onClick={next} disabled={index === slides.length - 1} label="Next" />
                    </div>
                </div>

                {/* ── Center: animated whole card ── */}
                <div className="relative max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-[20px] min-w-0">

                    {/* Background Gradient — static, not animated */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-[250%] max-w-[1400px] aspect-[1/1] min-w-[800px] opacity-90">
                        <Image src="/photos/schools/tech/Group 54.svg" alt="" aria-hidden="true" fill className="object-contain object-center" />
                    </div>

                    <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                            key={`card-${index}`}
                            custom={direction}
                            variants={cardVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={enterTransition}
                            className="w-full max-w-[343px] h-[369.16px] rounded-[17.57px] lg:w-full lg:max-w-[clamp(360px,32vw,447px)] lg:h-auto lg:aspect-[447.75/485] lg:rounded-[22px] relative z-10"
                            style={{
                                background: "rgba(255, 255, 255, 0.08)",
                                boxShadow: "0px 4px 4px 0px #00000040",
                                backdropFilter: "blur(24px)",
                                overflow: "hidden",
                            }}
                        >
                            {/* Gradient Border Ring */}
                            <div
                                className="rounded-[17.57px] lg:rounded-[22px]"
                                style={{
                                    position: "absolute", inset: 0, padding: "1px",
                                    background: "linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%)",
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                    pointerEvents: "none", zIndex: 5,
                                }}
                            />
                            {/* Glass sheen */}
                            <div
                                className="rounded-[17.57px] lg:rounded-[22px]"
                                style={{
                                    position: "absolute", inset: 0,
                                    background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 100%)",
                                    zIndex: -1,
                                }}
                            />

                            {/* Quote icon */}
                            <div style={{ position: "absolute", top: "8%", left: "9%", zIndex: 6 }}>
                                <Image src="/photos/schools/tech/blogQuote.svg" alt="quote" width={48} height={48} />
                            </div>

                            {/* Desktop text */}
                            <div className="hidden lg:flex w-[85%] mx-auto h-full items-center justify-center">
                                <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: "clamp(14px, 1.5vw, 20px)", lineHeight: "150%", color: "#FFFFFF" }}>
                                    {slide.text}
                                </p>
                            </div>

                            {/* Mobile layout */}
                            <div
                                className="lg:hidden absolute inset-0 flex flex-col px-[8%]"
                                style={{ paddingTop: "88px", paddingBottom: "16px", justifyContent: "space-between" }}
                            >
                                <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: "14px", lineHeight: "150%", color: "#FFFFFF" }}>
                                    {slide.text}
                                </p>
                                <div className="flex items-center shrink-0" style={{ gap: "10px", marginTop: "10px" }}>
                                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden relative shrink-0 bg-white/10">
                                        {slide.image && <Image src={slide.image} alt={slide.name} fill className="object-cover" />}
                                    </div>
                                    <div className="flex flex-col justify-center gap-1">
                                        <span className="font-outfit text-white text-[14px] leading-none font-medium">{slide.name}</span>
                                        <span className="font-outfit text-[#A7A7A7] text-[12px] leading-none">{slide.subtitle}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Arrow Controls — Mobile */}
                    <div className="flex lg:hidden gap-4 z-10">
                        <ArrowBtn isPrev onClick={prev} disabled={index === 0}                  label="Previous" />
                        <ArrowBtn        onClick={next} disabled={index === slides.length - 1} label="Next" />
                    </div>
                </div>

                {/* ── Right: animated whole person card (desktop) ── */}
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={`person-${index}`}
                        custom={direction}
                        variants={cardVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={exitTransition}
                        className="hidden lg:flex w-full max-w-[clamp(220px,22vw,309px)] items-center justify-center min-w-0 relative flex-col gap-4"
                        style={{
                            aspectRatio: "309 / 318",
                            background: "rgba(255, 255, 255, 0.03)",
                            borderRadius: "22px",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                            overflow: "hidden",
                        }}
                    >
                        {slide.image ? (
                            <Image src={slide.image} alt={slide.name} fill className="object-cover" />
                        ) : (
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-[64px] h-[64px] rounded-full bg-white/10" />
                                <span className="font-outfit text-white text-[15px] font-medium">{slide.name}</span>
                                <span className="font-outfit text-[#A7A7A7] text-[13px]">{slide.subtitle}</span>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
