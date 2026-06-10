"use client";

import type { PanInfo } from "framer-motion";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

const FONT = '"VC Nudge Trial Normal", sans-serif';
const SERIF = '"IvyPresto Display", serif';

type Testimonial = { id: string; quote: string; name: string };

const FALLBACK_ITEMS: Testimonial[] = [
    {
        id: "1",
        quote:
            "HACA is more than just a design school — it's a space where creativity finds direction and imagination meets discipline. The faculty here are not only talented professionals but also incredibly supportive mentors who encourage pushing boundaries and thinking beyond trends.",
        name: "CK Ajmal Ali",
    },
    {
        id: "2",
        quote:
            "The hands-on projects and critique sessions changed how I see design. I left with a portfolio I was proud to show and clarity on where I want to grow next.",
        name: "Student name",
    },
    {
        id: "3",
        quote:
            "Between studio time and mentor feedback, it never felt theoretical. Every week pushed my craft forward in a way online tutorials never did.",
        name: "Student name",
    },
];

type StackOrder = [number, number, number];
const INITIAL_ORDER: StackOrder = [0, 1, 2];

// ── Animation configs ────────────────────────────────────────────────────────

/** Normal deck transition: all cards glide to their depth slot. */
function deckTransition(reducedMotion: boolean) {
    if (reducedMotion) return { duration: 0.06 } as const;
    const glide = { type: "spring" as const, stiffness: 260, damping: 26, mass: 0.85 };
    const turn  = { type: "spring" as const, stiffness: 190, damping: 22, mass: 0.65 };
    const fast  = { duration: 0.38, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };
    return {
        left: glide, top: glide, right: glide, bottom: glide,
        width: glide, height: glide, scale: glide,
        rotate: turn,
        opacity: fast, boxShadow: fast,
        // Normal cards snap zIndex immediately — they're not being "thrown"
        zIndex: { duration: 0 },
        // y always springs back to 0 for non-departing cards
        y: glide,
    };
}

/**
 * Departing card transition: card "lifts" above the deck (y arc + scale pop),
 * stays visually on top (delayed zIndex snap), then settles at the back slot.
 */
function departingTransition(reducedMotion: boolean) {
    if (reducedMotion) return { duration: 0.06 } as const;
    const glide = { type: "spring" as const, stiffness: 240, damping: 26, mass: 0.9 };
    const turn  = { type: "spring" as const, stiffness: 180, damping: 22, mass: 0.65 };
    const fast  = { duration: 0.42, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };
    // Arc keyframe timing: [start, lift-peak at 28%, settle at 100%]
    const arc   = { duration: 0.54, ease: "easeInOut" as const, times: [0, 0.28, 1] as [number, number, number] };
    return {
        left: glide, top: glide, right: glide, bottom: glide,
        width: glide, height: glide,
        rotate: turn,
        opacity: fast, boxShadow: fast,
        // Keep departing card ON TOP for 260 ms so it visibly flies over the deck
        // before snapping behind. Without this delay the card immediately drops
        // under the other cards and slides from behind, which looks wrong.
        zIndex: { delay: 0.26, duration: 0 },
        // Lift arc: card briefly rises above deck then descends to back slot
        y: arc,
        scale: arc,
    };
}

const CONTENT_VARIANTS = {
    enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 28 : -28, filter: "blur(10px)" }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit:  (dir: number) => ({ opacity: 0, y: dir > 0 ? -20 : 20, filter: "blur(8px)" }),
};
const CONTENT_TRANSITION = {
    duration: 0.52,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

// ── Layer specs ──────────────────────────────────────────────────────────────

const STACK_H = 412.8087463378906;
const FRONT_W = 897.0787963867188;
const DESKTOP_STAGE_W = 215.25 + 718.03 + 24;

const DESKTOP_LAYER = [
    { w: FRONT_W,  h: STACK_H,  left: 0,      top: 0,     rotate: 0, z: 42, shadow: "0 14px 40px rgba(0,0,0,0.09)", scale: 1    },
    { w: 828.21,   h: 372.38,   left: 94.72,  top: -1.59, rotate: 2, z: 24, shadow: "0 8px 28px rgba(0,0,0,0.06)",  scale: 0.99 },
    { w: 769.18,   h: 346.44,   left: 164.83, top: -3.38, rotate: 4, z: 12, shadow: "0 6px 20px rgba(0,0,0,0.05)",  scale: 0.98 },
] as const;

const MOBILE_H = 195.17462158203125;

const MOBILE_LAYER = [
    { top: 0,  left: 0,  right: 0,  bottom: 0, rotate: 0,   z: 42, shadow: "0 10px 28px rgba(0,0,0,0.09)", scale: 1    },
    { top: -3, left: 6,  right: 6,  bottom: 2, rotate: 3.2, z: 24, shadow: "0 6px 18px rgba(0,0,0,0.06)",  scale: 0.99 },
    { top: -6, left: 12, right: 12, bottom: 4, rotate: 6,   z: 12, shadow: "0 4px 14px rgba(0,0,0,0.05)",  scale: 0.98 },
] as const;

// ── Accent assets ──────────────────────────────────────────────────────────────

const UNDERLINE_SRC = "/photos/schools/design/Vector (12).svg";
const HEART_SRC = "/photos/schools/design/Vector (13).svg";

/** “Learned Here” underline — −180° (`rotate-180`). Pulled up with `-translate-y`. Mobile wider than Figma 180×6 for legibility. */
const UNDERLINE_MOBILE_W = 216;
const UNDERLINE_MOBILE_H = 9;

function LearnedHereUnderline({ className }: { className?: string }) {
    return (
        <span
            className={
                className ??
                    "pointer-events-none absolute left-1/2 top-full -translate-x-1/2 -translate-y-[26px] lg:-translate-y-[32px]"
            }
            aria-hidden
        >
            <span className="inline-block shrink-0 rotate-180 lg:hidden">
                <span
                    className="relative block max-w-none overflow-hidden"
                    style={{ width: `${UNDERLINE_MOBILE_W}px`, height: `${UNDERLINE_MOBILE_H}px` }}
                >
                    <Image
                        src={UNDERLINE_SRC}
                        alt="" aria-hidden="true"
                        fill
                        unoptimized
                        sizes={`${UNDERLINE_MOBILE_W}px`}
                        className="object-fill object-center"
                    />
                </span>
            </span>
            <span className="hidden shrink-0 rotate-180 lg:inline-block">
                <span className="relative block max-w-none overflow-hidden" style={{ width: "269px", height: "14px" }}>
                    <Image src={UNDERLINE_SRC} alt="" aria-hidden="true" fill unoptimized sizes="269px" className="object-fill object-center" />
                </span>
            </span>
        </span>
    );
}

/** Figma heart −10.48°; desktop ~117×118, mobile ~40×40. */
function HeartAccent({ className }: { className?: string }) {
    return (
        <span
            className={["relative inline-flex shrink-0 items-center justify-center", className ?? ""].join(" ")}
            style={{ transform: "rotate(-10.48deg)" }}
            aria-hidden
        >
            <Image
                src={HEART_SRC}
                alt="" aria-hidden="true"
                width={118}
                height={122}
                className="object-contain lg:hidden"
                style={{ width: "40.00000032983248px", height: "40.1783183549845px" }}
            />
            <Image
                src={HEART_SRC}
                alt="" aria-hidden="true"
                width={118}
                height={122}
                className="hidden object-contain lg:block"
                style={{ width: "117.16603947931273px", height: "117.68835546262355px" }}
            />
        </span>
    );
}

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d={dir === "left" ? "M19 12H5m0 0 6-6m-6 6 6 6" : "M5 12h14m0 0-6-6m6 6-6 6"} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// ── Nav button ───────────────────────────────────────────────────────────────

function NavArrow({ dir, onClick, label }: { dir: "left" | "right"; onClick: () => void; label: string }) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            aria-label={label}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 520, damping: 28 }}
            className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full border border-[#8F56FF] bg-white text-[#8F56FF] shadow-[0_1px_4px_rgba(0,0,0,0.08)] hover:opacity-90 lg:h-[52px] lg:w-[52px]"
        >
            <ArrowIcon dir={dir} />
        </motion.button>
    );
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function depthOf(order: StackOrder, itemIndex: number) {
    return order.indexOf(itemIndex) as 0 | 1 | 2;
}

function rotateDeckForward(order: StackOrder): StackOrder  { return [order[1], order[2], order[0]]; }
function rotateDeckBackward(order: StackOrder): StackOrder { return [order[2], order[0], order[1]]; }

/** Collapsed quote cap: mobile matches card snippet; desktop ~8 lines at 24px / 115% leading. */
const QUOTE_COLLAPSED_MAX: Record<"mobile" | "desktop", string> = {
    mobile: "6.75rem",
    desktop: "14rem",
};

function ExpandableTestimonialQuote({ quote, variant }: { quote: string; variant: "mobile" | "desktop" }) {
    const [expanded, setExpanded] = useState(false);
    const [overflowsCollapsed, setOverflowsCollapsed] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        if (expanded) return;
        const el = textRef.current;
        if (!el) return;
        const id = requestAnimationFrame(() => {
            const overflow = el.scrollHeight > Math.ceil(el.clientHeight) + 1;
            setOverflowsCollapsed(overflow);
        });
        return () => cancelAnimationFrame(id);
    }, [quote, variant, expanded]);

    const paragraphStyle =
        variant === "mobile"
            ? {
                  fontFamily: FONT,
                  fontWeight: 400 as const,
                  fontSize: "14px",
                  lineHeight: "120%",
                  letterSpacing: "0.02em",
              }
            : {
                  fontFamily: FONT,
                  fontWeight: 400 as const,
                  fontSize: "24px",
                  lineHeight: "114.99999999999999%",
                  letterSpacing: "0.02em",
              };

    const collapsedMax = { maxHeight: QUOTE_COLLAPSED_MAX[variant] };

    return (
        <div
            className={[
                "flex w-full flex-col items-center gap-1",
                expanded ? "min-h-0 max-h-full flex-1 overflow-y-auto" : "",
            ].join(" ")}
        >
            <p
                ref={textRef}
                className={[
                    "m-0 w-full text-center align-middle text-black",
                    variant === "mobile" ? "text-pretty" : "max-w-full text-pretty",
                    expanded ? "min-h-0 overflow-visible" : "overflow-hidden",
                ].join(" ")}
                style={{ ...paragraphStyle, ...(expanded ? {} : collapsedMax) }}
            >
                {quote}
            </p>
            {overflowsCollapsed && (
                <button
                    type="button"
                    className="m-0 shrink-0 cursor-pointer border-0 bg-transparent p-0 text-center text-black/75 underline decoration-from-font underline-offset-[3px] hover:text-black"
                    style={{
                        fontFamily: FONT,
                        fontWeight: 500,
                        fontSize: variant === "mobile" ? "12px" : "14px",
                        lineHeight: variant === "mobile" ? "120%" : "114.99999999999999%",
                        letterSpacing: variant === "mobile" ? "0.02em" : 0,
                    }}
                    aria-expanded={expanded}
                    onClick={() => setExpanded((v) => !v)}
                >
                    {expanded ? "Read less" : "Read more"}
                </button>
            )}
        </div>
    );
}

// ── Desktop card stack ───────────────────────────────────────────────────────

function DesktopCardStack({
    order, prevOrder, reducedMotion, frontItem, direction, onPrev, onNext, items,
}: {
    order: StackOrder;
    prevOrder: StackOrder;
    reducedMotion: boolean;
    frontItem: Testimonial;
    direction: 1 | -1;
    onPrev: () => void;
    onNext: () => void;
    items: Testimonial[];
}) {
    const tDeck   = deckTransition(reducedMotion);
    const tDepart = departingTransition(reducedMotion);

    return (
        <div
            className="relative mx-auto overflow-visible lg:translate-x-[2px]"
            style={{ width: DESKTOP_STAGE_W, height: STACK_H, perspective: 1400 }}
        >
            {items.map((item, itemIndex) => {
                const depth     = depthOf(order,     itemIndex);
                const prevDepth = depthOf(prevOrder,  itemIndex);
                const L         = DESKTOP_LAYER[depth];
                const isFront   = depth === 0;

                // Card that was at the front (depth 0) and is now being sent to the back (depth 2).
                // This is the "thrown" card — it needs to arc over the deck before landing behind.
                const isDeparting = prevDepth === 0 && depth === 2;

                return (
                    <motion.div
                        key={item.id}
                        animate={isDeparting ? {
                            // Target the back-slot geometry via spring (same as normal)
                            width: L.w, height: L.h,
                            left: L.left, top: L.top,
                            rotate: L.rotate,
                            // zIndex TARGET is the back value; the delayed transition keeps
                            // the card visually on top until it has mostly finished traveling.
                            zIndex: L.z,
                            opacity: 0.86,
                            boxShadow: L.shadow,
                            // Arc: [start, lift-peak, settle] — card floats up then down
                            scale: [1,    1.04,   L.scale],
                            y:     [0,    -28,    0      ],
                        } : {
                            width: L.w, height: L.h,
                            left: L.left, top: L.top,
                            rotate: L.rotate, zIndex: L.z,
                            scale: L.scale, y: 0,
                            opacity: depth === 0 ? 1 : depth === 1 ? 0.93 : 0.86,
                            boxShadow: L.shadow,
                        }}
                        transition={isDeparting ? tDepart : tDeck}
                        style={{
                            position: "absolute",
                            transformOrigin: "bottom left",
                            borderRadius: 17.94,
                            pointerEvents: isFront ? "auto" : "none",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                        }}
                        className="box-border flex flex-col bg-[#F1F1F1] overflow-hidden antialiased"
                        aria-hidden={!isFront}
                    >
                        <div className="pointer-events-none absolute inset-0 rounded-[17.94px] border border-solid border-[#E5E5E5]" aria-hidden />

                        <div className="relative flex min-h-0 flex-1 flex-col px-10 py-10">
                            {/* Back-card hearts (front card's heart is in the overlay) */}
                            {!isFront && (
                                <div
                                    className={[
                                        "pointer-events-none absolute z-10 origin-top-right scale-[0.36] lg:right-8 lg:top-5 lg:scale-[0.4]",
                                        depth === 1 ? "opacity-[0.62] right-7 top-3" : "opacity-0",
                                    ].join(" ")}
                                >
                                    <HeartAccent />
                                </div>
                            )}

                            {/* Back card content — decorative, partially visible through the fan */}
                            {!isFront && (
                                <div className="flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center gap-5 text-center" style={{ paddingTop: 4 }}>
                                    <p
                                        className="m-0 w-full max-w-full overflow-hidden text-pretty text-center align-middle text-black"
                                        style={{
                                            fontFamily: FONT,
                                            fontWeight: 400,
                                            fontSize: "24px",
                                            lineHeight: "114.99999999999999%",
                                            letterSpacing: "0.02em",
                                        }}
                                    >
                                        {item.quote}
                                    </p>
                                    <p
                                        className="m-0 w-full shrink-0 text-center align-middle text-black"
                                        style={{
                                            fontFamily: FONT,
                                            fontWeight: 500,
                                            fontSize: "24px",
                                            lineHeight: "114.99999999999999%",
                                            letterSpacing: 0,
                                        }}
                                    >
                                        ~ {item.name}
                                    </p>
                                </div>
                            )}

                            {depth > 0 && (
                                <div
                                    className="pointer-events-none absolute inset-0 rounded-[17.94px]"
                                    style={{
                                        background: depth === 1
                                            ? "linear-gradient(165deg, transparent 40%, rgba(252,252,252,0.14) 100%)"
                                            : "linear-gradient(165deg, rgba(252,252,252,0.12) 0%, rgba(252,252,252,0.22) 100%)",
                                    }}
                                    aria-hidden
                                />
                            )}
                        </div>
                    </motion.div>
                );
            })}

            {/* Animated text overlay — always covers the front card slot (left:0, top:0, FRONT_W × STACK_H).
                AnimatePresence crossfades the quote text when the front item changes. */}
            <div
                className="pointer-events-none absolute overflow-visible"
                style={{ left: 0, top: 0, width: FRONT_W, height: STACK_H, zIndex: 50, borderRadius: 17.94 }}
            >
                <div className="pointer-events-none absolute right-1 top-[-44px] z-[52] lg:right-4 lg:top-[-54px]">
                    <HeartAccent />
                </div>

                <div className="flex h-full min-h-0 w-full items-center justify-center overflow-hidden rounded-[17.94px] px-10 py-10">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={frontItem.id}
                            custom={direction}
                            variants={CONTENT_VARIANTS}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={CONTENT_TRANSITION}
                            className="pointer-events-auto flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-5 text-center"
                            style={{ paddingTop: 4 }}
                        >
                            <ExpandableTestimonialQuote key={frontItem.id} quote={frontItem.quote} variant="desktop" />
                            <p
                                className="m-0 w-full shrink-0 text-center align-middle text-black"
                                style={{
                                    fontFamily: FONT,
                                    fontWeight: 500,
                                    fontSize: "24px",
                                    lineHeight: "114.99999999999999%",
                                    letterSpacing: 0,
                                }}
                            >
                                ~ {frontItem.name}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Arrows: same box as front card (FRONT_W×STACK_H) so they sit on the top card borders, not full stage width */}
            <div
                className="pointer-events-none absolute left-0 top-0 z-[62] overflow-visible"
                style={{ width: FRONT_W, height: STACK_H }}
            >
                <div className="pointer-events-auto absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <NavArrow dir="left" onClick={onPrev} label="Bring previous testimonial to front" />
                </div>
                <div className="pointer-events-auto absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                    <NavArrow dir="right" onClick={onNext} label="Bring next testimonial to front" />
                </div>
            </div>
        </div>
    );
}

// ── Mobile card stack ────────────────────────────────────────────────────────

function MobileCardStack({
    order, prevOrder, reducedMotion, frontItem, direction, onPrev, onNext, items,
}: {
    order: StackOrder;
    prevOrder: StackOrder;
    reducedMotion: boolean;
    frontItem: Testimonial;
    direction: 1 | -1;
    onPrev: () => void;
    onNext: () => void;
    items: Testimonial[];
}) {
    const tDeck   = deckTransition(reducedMotion);
    const tDepart = departingTransition(reducedMotion);

    const onDragEnd = useCallback(
        (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
            if (reducedMotion) return;
            const minOffset = 48;
            const minVel = 380;
            if (info.offset.x < -minOffset || info.velocity.x < -minVel) onNext();
            else if (info.offset.x > minOffset || info.velocity.x > minVel) onPrev();
        },
        [onNext, onPrev, reducedMotion]
    );

    return (
        <motion.div
            className="relative mx-auto w-full max-w-[335px] cursor-grab select-none pt-2 active:cursor-grabbing"
            style={{ height: MOBILE_H, perspective: 900 }}
            drag={reducedMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.16}
            dragDirectionLock
            onDragEnd={onDragEnd}
        >
            {items.map((item, itemIndex) => {
                const depth     = depthOf(order,    itemIndex);
                const prevDepth = depthOf(prevOrder, itemIndex);
                const L         = MOBILE_LAYER[depth];
                const isFront   = depth === 0;
                const isDeparting = prevDepth === 0 && depth === 2;

                return (
                    <motion.div
                        key={item.id}
                        animate={isDeparting ? {
                            top: L.top, left: L.left, right: L.right, bottom: L.bottom,
                            rotate: L.rotate,
                            zIndex: L.z,
                            opacity: 0.85,
                            boxShadow: L.shadow,
                            scale: [1,   1.04,  L.scale],
                            y:     [0,   -16,   0      ],
                        } : {
                            top: L.top, left: L.left, right: L.right, bottom: L.bottom,
                            rotate: L.rotate, zIndex: L.z,
                            scale: L.scale, y: 0,
                            opacity: depth === 0 ? 1 : depth === 1 ? 0.92 : 0.85,
                            boxShadow: L.shadow,
                        }}
                        transition={isDeparting ? tDepart : tDeck}
                        style={{
                            position: "absolute",
                            transformOrigin: "bottom right",
                            borderRadius: 13.38,
                            pointerEvents: isFront ? "auto" : "none",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                        }}
                        className="box-border flex flex-col overflow-hidden bg-[#F1F1F1] antialiased"
                        aria-hidden={!isFront}
                    >
                        <div className="pointer-events-none absolute inset-0 rounded-[13.38px] border-[1.12px] border-solid border-[#E5E5E5]" aria-hidden />

                        <div className="relative flex min-h-0 flex-1 flex-col px-[22.31px] py-[40px]">
                            {!isFront && (
                                <div
                                    className={[
                                        "pointer-events-none absolute right-2 top-1 z-10 origin-top-right scale-[0.55]",
                                        depth === 1 ? "opacity-60" : "opacity-0",
                                    ].join(" ")}
                                >
                                    <HeartAccent />
                                </div>
                            )}

                            {!isFront && (
                                <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col justify-center gap-[10px] overflow-hidden text-center">
                                    <p
                                        className="m-0 max-h-[6.75rem] w-full min-h-0 overflow-hidden text-center align-middle text-black"
                                        style={{
                                            fontFamily: FONT,
                                            fontWeight: 400,
                                            fontSize: "14px",
                                            lineHeight: "120%",
                                            letterSpacing: "0.02em",
                                        }}
                                    >
                                        {item.quote}
                                    </p>
                                    <p
                                        className="m-0 shrink-0 text-center align-middle text-black"
                                        style={{
                                            fontFamily: FONT,
                                            fontWeight: 500,
                                            fontSize: "14px",
                                            lineHeight: "120%",
                                            letterSpacing: "0.02em",
                                        }}
                                    >
                                        ~ {item.name}
                                    </p>
                                </div>
                            )}

                            {depth > 0 && (
                                <div
                                    className="pointer-events-none absolute inset-0 rounded-[13.38px]"
                                    style={{
                                        background: depth === 1
                                            ? "linear-gradient(165deg, transparent 45%, rgba(252,252,252,0.16) 100%)"
                                            : "linear-gradient(165deg, rgba(252,252,252,0.1) 0%, rgba(252,252,252,0.24) 100%)",
                                    }}
                                    aria-hidden
                                />
                            )}
                        </div>
                    </motion.div>
                );
            })}

            {/* Content overlay */}
            <div className="pointer-events-none absolute overflow-visible" style={{ inset: 0, zIndex: 50, borderRadius: 13.38 }}>
                <div className="pointer-events-none absolute right-[-2px] top-[-26px] z-[52]">
                    <HeartAccent />
                </div>

                <div className="flex h-full min-h-0 w-full items-center justify-center overflow-hidden rounded-[13.38px] px-[22.31px] py-[40px]">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={frontItem.id}
                            custom={direction}
                            variants={CONTENT_VARIANTS}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={CONTENT_TRANSITION}
                            className="pointer-events-auto flex min-h-0 w-full flex-1 flex-col justify-center gap-[10px] text-center"
                        >
                            <ExpandableTestimonialQuote key={frontItem.id} quote={frontItem.quote} variant="mobile" />
                            <p
                                className="m-0 shrink-0 text-center align-middle text-black"
                                style={{
                                    fontFamily: FONT,
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    lineHeight: "120%",
                                    letterSpacing: "0.02em",
                                }}
                            >
                                ~ {frontItem.name}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}

// ── Main section ─────────────────────────────────────────────────────────────

type DeckFrames = { prev: StackOrder; current: StackOrder };

export function DesignTestimonialsSection() {
    const [items, setItems] = useState<Testimonial[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000";
        fetch(`${backendUrl}/api/testimonials?school=Design+School`)
            .then((r) => r.json())
            .then((data) => {
                const raw = (data.testimonials || []).map(
                    (t: { _id: string; quote: string; name: string }) => ({
                        id: t._id,
                        quote: t.quote,
                        name: t.name,
                    })
                ) as Testimonial[];
                if (raw.length > 0) {
                    // Stack requires exactly 3 items; pad with fallback if fewer
                    const padded = [...raw];
                    while (padded.length < 3) padded.push(FALLBACK_ITEMS[padded.length % FALLBACK_ITEMS.length]);
                    setItems(padded.slice(0, 3));
                }
                setLoaded(true);
            })
            .catch(() => setLoaded(true));
    }, []);

    const reducedMotion = useReducedMotion() ?? false;
    const [deck, setDeck] = useState<DeckFrames>(() => ({
        prev: INITIAL_ORDER,
        current: INITIAL_ORDER,
    }));
    const [direction, setDirection] = useState<1 | -1>(1);

    const order = deck.current;
    const prevOrder = deck.prev;

    const frontItem = items[order[0]];

    const testimonialsRegionLabel = useMemo(
        () => `Testimonials. Top card: ${items[order[0]]?.name ?? ""}.`,
        [order, items]
    );

    const next = useCallback(() => {
        setDirection(1);
        setDeck(({ current }) => ({ prev: current, current: rotateDeckForward(current) }));
    }, []);
    const prevCb = useCallback(() => {
        setDirection(-1);
        setDeck(({ current }) => ({ prev: current, current: rotateDeckBackward(current) }));
    }, []);

    if (!loaded || items.length === 0) return null;

    return (
        <section
            id="design-testimonials"
            className="w-full bg-[#FCFCFC] px-5 pt-[30px] pb-[30px] lg:flex lg:min-h-[604.8087158203125px] lg:items-center lg:justify-center lg:px-0 lg:py-0"
            aria-labelledby="design-testimonials-heading"
            aria-live="polite"
            aria-label={testimonialsRegionLabel}
        >
            <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[50px] lg:gap-[80px]">
                <h2
                    id="design-testimonials-heading"
                    className="m-0 w-full max-w-[335px] text-center text-[34px] leading-[114.99999999999999%] text-black lg:max-w-[474px] lg:text-[50px]"
                    style={{ fontFamily: FONT, fontWeight: 500 }}
                >
                    <span className="block">Words from Those</span>
                    <span className="block">
                        Who{" "}
                        <span
                            className="relative inline-block pb-0 lg:pb-px"
                            style={{ fontFamily: SERIF, fontWeight: 300, fontStyle: "italic", lineHeight: "114.99999999999999%" }}
                        >
                            Learned Here
                            <LearnedHereUnderline />
                        </span>
                    </span>
                </h2>

                <div className="flex w-full min-w-0 flex-col items-stretch justify-center gap-5 overflow-visible px-0 lg:min-h-[412.8087463378906px] lg:px-[60px] lg:py-6">
                    <div className="w-full lg:flex lg:justify-center">
                        <div className="lg:hidden">
                            <MobileCardStack
                                order={order}
                                prevOrder={prevOrder}
                                reducedMotion={reducedMotion}
                                frontItem={frontItem}
                                direction={direction}
                                onPrev={prevCb}
                                onNext={next}
                                items={items}
                            />
                        </div>
                        <div className="hidden lg:block">
                            <DesktopCardStack
                                order={order}
                                prevOrder={prevOrder}
                                reducedMotion={reducedMotion}
                                frontItem={frontItem}
                                direction={direction}
                                onPrev={prevCb}
                                onNext={next}
                                items={items}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
