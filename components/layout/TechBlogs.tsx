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

const MOBILE_TEXT_LIMIT  = 150;
const DESKTOP_TEXT_LIMIT = 280;

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

// ── Read More text — expands in place, card stays fixed height (scrollable) ──
function ReadMoreText({ text, limit, textStyle }: {
    text: string;
    limit: number;
    textStyle?: React.CSSProperties;
}) {
    const [expanded, setExpanded] = useState(false);
    const isLong = text.length > limit;
    const displayed = !isLong || expanded ? text : text.slice(0, limit).trimEnd() + "…";

    return (
        <div>
            <p style={{ margin: 0, ...textStyle }}>{displayed}</p>
            {isLong && (
                <button
                    type="button"
                    onClick={() => setExpanded(e => !e)}
                    style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        marginTop: "8px",
                        cursor: "pointer",
                        fontFamily: "var(--font-outfit)",
                        fontSize: textStyle?.fontSize ?? "14px",
                        fontWeight: 500,
                        color: "#A78BFA",
                        display: "inline-block",
                    }}
                >
                    {expanded ? "Read less" : "Read more"}
                </button>
            )}
        </div>
    );
}

// ── Letter avatar (shared fallback) ─────────────────────────────────────────
function LetterAvatar({ name, size, fontSize }: { name: string; size: number; fontSize: number }) {
    const letter = name.trim().charAt(0).toUpperCase();
    return (
        <div
            className="flex items-center justify-center font-semibold text-white shrink-0"
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #FF5600 0%, #694AFF 100%)",
                fontFamily: "var(--font-outfit)",
                fontSize,
            }}
            aria-label={name}
        >
            {letter}
        </div>
    );
}

// ── Mobile avatar (40px) with image + letter fallback ───────────────────────
function MobileAvatar({ slide }: { slide: Slide }) {
    const [error, setError] = useState(false);

    if (!slide.image || error) {
        return <LetterAvatar name={slide.name} size={40} fontSize={16} />;
    }
    return (
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden relative shrink-0">
            <Image
                src={slide.image}
                alt={slide.name}
                fill
                className="object-cover"
                onError={() => setError(true)}
            />
        </div>
    );
}

// ── Desktop person card content with image + letter fallback ─────────────────
function PersonCard({ slide }: { slide: Slide }) {
    const [error, setError] = useState(false);
    const showFallback = !slide.image || error;

    return (
        <div className="flex flex-col items-center gap-4 z-10 px-4">
            {showFallback ? (
                <LetterAvatar name={slide.name} size={120} fontSize={44} />
            ) : (
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden relative shrink-0">
                    <Image
                        src={slide.image!}
                        alt={slide.name}
                        fill
                        className="object-cover"
                        onError={() => setError(true)}
                    />
                </div>
            )}
            <span className="font-outfit text-white text-[15px] font-medium text-center">{slide.name}</span>
            <span className="font-outfit text-[#A7A7A7] text-[13px] text-center">{slide.subtitle}</span>
        </div>
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
                <div className="relative max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-[20px] min-w-0 lg:shrink-0 lg:w-[clamp(360px,32vw,447px)]">

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
                            /* ── Fixed heights — card never grows; inner text scrolls ── */
                            className="w-full max-w-[343px] h-[369.16px] rounded-[17.57px] lg:w-full lg:max-w-[clamp(360px,32vw,447px)] lg:h-[clamp(390px,34.7vw,485px)] lg:rounded-[22px] lg:shrink-0 relative z-10"
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
                                    zIndex: 1,
                                    pointerEvents: "none",
                                }}
                            />

                            {/* Quote icon */}
                            <div style={{ position: "absolute", top: "8%", left: "9%", zIndex: 6, pointerEvents: "none" }}>
                                <Image src="/photos/schools/tech/blogQuote.svg" alt="quote" width={48} height={48} />
                            </div>

                            {/* ── Desktop: scrollable text fills card ── */}
                            <div
                                className="hidden lg:flex flex-col relative z-[2] h-full w-full"
                                style={{ paddingTop: "80px", paddingBottom: "36px" }}
                            >
                                <div
                                    className="w-[85%] mx-auto flex-1 overflow-y-auto"
                                    style={{
                                        scrollbarWidth: "thin",
                                        scrollbarColor: "rgba(167,139,250,0.3) transparent",
                                    }}
                                >
                                    <ReadMoreText
                                        key={`desktop-text-${index}`}
                                        text={slide.text}
                                        limit={DESKTOP_TEXT_LIMIT}
                                        textStyle={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: "clamp(14px, 1.5vw, 20px)", lineHeight: "150%", color: "#FFFFFF" }}
                                    />
                                </div>
                            </div>

                            {/* ── Mobile: text scrolls, avatar pinned to bottom ── */}
                            <div
                                className="lg:hidden absolute inset-0 flex flex-col px-[8%]"
                                style={{ paddingTop: "88px", paddingBottom: "16px" }}
                            >
                                {/* Scrollable text area */}
                                <div
                                    className="flex-1 overflow-y-auto"
                                    style={{
                                        scrollbarWidth: "thin",
                                        scrollbarColor: "rgba(167,139,250,0.3) transparent",
                                    }}
                                >
                                    <ReadMoreText
                                        key={`mobile-text-${index}`}
                                        text={slide.text}
                                        limit={MOBILE_TEXT_LIMIT}
                                        textStyle={{ fontFamily: "var(--font-outfit)", fontWeight: 400, fontSize: "14px", lineHeight: "150%", color: "#FFFFFF" }}
                                    />
                                </div>

                                {/* Avatar — always visible at the bottom */}
                                <div className="flex items-center shrink-0 mt-[10px]" style={{ gap: "10px" }}>
                                    <MobileAvatar key={`mob-avatar-${index}`} slide={slide} />
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
                        className="hidden lg:flex w-full max-w-[clamp(220px,22vw,309px)] shrink-0 items-center justify-center min-w-0 relative flex-col gap-4"
                        style={{
                            aspectRatio: "309 / 318",
                            background: "rgba(255, 255, 255, 0.03)",
                            borderRadius: "22px",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                        }}
                    >
                        <PersonCard key={`person-card-${index}`} slide={slide} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
