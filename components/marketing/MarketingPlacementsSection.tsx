"use client";

import { PlacementCtaDecorativeStars } from "@/components/marketing/PlacementCtaDecorativeStars";
import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle"
import { PlacementCardMedia } from "@/components/success-story/PlacementCardMedia"
import { ENQUIRE_URL } from "@/lib/enquire"
import type { MarketingPlacementItem } from "@/lib/marketing-placements"

const ACCENT = "#0066FF"

function PlacementCard({ item }: { item: MarketingPlacementItem }) {
    return (
        <div
            className="
                relative w-full min-w-0 overflow-hidden bg-[#E8F1FF] rounded-[7.88px]
                aspect-[243/280]
                md:aspect-auto md:h-[240px] md:w-[208px]
                lg:h-[279.7px] lg:w-[243.35px]
            "
        >
            <PlacementCardMedia
                imageUrl={item.imageUrl}
                alt={item.title ?? "Marketing school placement student"}
                className="absolute inset-0 h-full w-full"
            />
        </div>
    )
}

/** Mobile (max-lg): same metrics as marketing courses Know More — 44px row, 16px Satoshi 500, 44×44 circle, gap 7.33px, pad 13.2px. */
function MobilePlacementCtaArrow({ variant }: { variant: "join" | "view" }) {
    const bg = variant === "join" ? "#000000" : "#0066FF"
    return (
        <span
            className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[22px] p-[13.2px] lg:hidden"
            style={{ backgroundColor: bg }}
            aria-hidden
        >
            <svg
                width={17.6}
                height={17.6}
                viewBox="0 0 24 24"
                fill="none"
                className="block shrink-0 text-white"
            >
                <path
                    d="M5 12h14m0 0-6-6m6 6-6 6"
                    stroke="currentColor"
                    strokeWidth={2.25}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </span>
    )
}

function JoinNowPill() {
    return (
        <Link
            href={ENQUIRE_URL}
            className="
                group relative inline-flex w-fit shrink-0 cursor-pointer items-center no-underline
                max-lg:h-[44px] max-lg:gap-[7.33px] max-lg:rounded-full max-lg:bg-[#E8F1FF] max-lg:pl-[14px] max-lg:pr-0
                lg:h-[60px]
            "
            aria-label="Join now — enquire"
        >
            <span className="whitespace-nowrap text-black lg:hidden font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] tracking-normal">
                Join Now
            </span>
            <MobilePlacementCtaArrow variant="join" />

            <div className="relative hidden h-[60px] w-fit rounded-[30px] bg-[#E6EFFF] pl-[20px] pr-[76px] transition-colors duration-300 group-hover:bg-[#d6e4ff] lg:block">
                <span
                    className="flex h-full items-center whitespace-nowrap text-black"
                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}
                >
                    Join Now
                </span>
            </div>
            <MarketingCtaArrowCircle
                size="60"
                background="#000000"
                className="pointer-events-none absolute right-0 top-0 hidden lg:block"
            />
        </Link>
    )
}

function ViewMorePill() {
    return (
        <Link
            href="/marketing-school/success-story"
            className="
                group relative inline-flex w-fit shrink-0 cursor-pointer items-center no-underline
                max-lg:h-[44px] max-lg:gap-[7.33px] max-lg:rounded-full max-lg:bg-[#E8F1FF] max-lg:pl-[14px] max-lg:pr-0
                lg:h-[60px]
            "
            aria-label="View more placement success stories"
        >
            <span className="whitespace-nowrap text-black lg:hidden font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] tracking-normal">
                View More
            </span>
            <MobilePlacementCtaArrow variant="view" />

            <div className="relative hidden h-[60px] w-fit rounded-[30px] bg-[#E6EFFF] pl-[20px] pr-[76px] transition-colors duration-300 group-hover:bg-[#d6e4ff] lg:block">
                <span
                    className="flex h-full items-center whitespace-nowrap text-black"
                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}
                >
                    View More
                </span>
            </div>
            <MarketingCtaArrowCircle size="60" className="pointer-events-none absolute right-0 top-0 hidden lg:block" />
        </Link>
    )
}

function PlacementsDecisionCard() {
    return (
        <div
            className="
                relative mx-auto flex w-full max-w-[min(100%,520px)] h-[413px] min-w-0 flex-col items-center justify-center
                overflow-hidden rounded-[20px] bg-[#0066FF]
                px-5 py-10 sm:px-8 sm:py-12
                sm:max-w-[1320px] sm:h-auto
                lg:h-[500px] lg:min-h-[500px] lg:px-12 lg:py-0
            "
        >
            <PlacementCtaDecorativeStars />
            <div className="relative z-10 mx-auto flex w-full max-w-[min(1320px,100%)] flex-col items-center gap-5 sm:gap-[30px] text-center">
                <p
                    className="
                        font-semibold tracking-normal text-white [font-family:'Darker_Grotesque',sans-serif]
                        text-[clamp(1.375rem,5vw,2.5rem)] leading-[1.12] sm:leading-[1.1]
                        lg:h-[138px] lg:w-[min(1320px,100%)] lg:text-[70px] lg:leading-[0.98] lg:text-center
                    "
                >
                    <span>
                        You&apos;re Only One Decision Away
                        <br />
                        from a Different Future
                    </span>
                </p>
                <JoinNowPill />
            </div>
        </div>
    )
}

export function MarketingPlacementsSection({ items }: { items: MarketingPlacementItem[] }) {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const [isDark, setIsDark] = useState(false);
    useMotionValueEvent(scrollYProgress, "change", (v) => setIsDark(v > 0.08));
    const colorTransition = { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const };

    useEffect(() => {
        window.dispatchEvent(new CustomEvent("marketing-page-color", { detail: { isDark } }))
    }, [isDark])

    return (
        <section
            ref={sectionRef}
            id="marketing-placements"
            className="w-full opacity-100"
            aria-labelledby="marketing-placements-heading"
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col
                    gap-[clamp(18px,3vw,28px)]
                    px-[clamp(16px,4.16vw,60px)]
                    py-[clamp(20px,3vw,40px)]
                "
            >
                <header className="flex w-full min-w-0 flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                    <div className="flex shrink-0 items-center gap-[clamp(10px,1.5vw,14px)] lg:pt-1">
                        <span
                            className="h-[10px] w-[10px] shrink-0 rounded-full lg:h-3 lg:w-3"
                            style={{ backgroundColor: ACCENT }}
                            aria-hidden
                        />
                        <motion.p
                            className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,16px)] font-medium leading-none tracking-normal"
                            animate={{ color: isDark ? "#FFFFFF" : "#000000" }}
                            transition={colorTransition}
                        >
                            Placements
                        </motion.p>
                    </div>
                    <motion.h2
                        id="marketing-placements-heading"
                        className="
                            w-full min-w-0 max-w-full text-left font-semibold tracking-normal
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,4.8vw,3.125rem)] leading-[1.05]
                            lg:ml-auto lg:flex lg:max-w-[min(100%,720px)] lg:justify-end lg:text-left lg:leading-[1.08]
                        "
                        animate={{ color: isDark ? "#FFFFFF" : "#000000" }}
                        transition={colorTransition}
                    >
                        <span className="inline-block text-left">
                            <span className="block whitespace-nowrap">
                                Your Name Could Be the Next on
                            </span>
                            <span className="block">Our Success List</span>
                        </span>
                    </motion.h2>
                </header>

                {/* Mobile: fixed 2×2 grid */}
                <div className="grid w-full min-w-0 grid-cols-2 gap-4 md:hidden">
                    {items.slice(0, 4).map((card) => (
                        <PlacementCard key={card._id} item={card} />
                    ))}
                </div>

                {/* md+: 2-row horizontal scroller */}
                <div
                    className="
                        hidden w-full min-w-0 overflow-x-auto overflow-y-hidden md:block
                        [scrollbar-width:none] [-ms-overflow-style:none]
                        [&::-webkit-scrollbar]:hidden
                    "
                >
                    <div className="flex w-max flex-col gap-y-5 py-2 sm:gap-y-7 lg:gap-y-8">
                        <div className="flex w-max flex-row-reverse gap-x-4 sm:gap-x-6 lg:gap-x-8">
                            {items.slice(0, Math.ceil(items.length / 2)).map((card) => (
                                <PlacementCard key={card._id} item={card} />
                            ))}
                        </div>
                        <div className="flex w-max flex-row gap-x-4 sm:gap-x-6 lg:gap-x-8">
                            {items.slice(Math.ceil(items.length / 2)).map((card) => (
                                <PlacementCard key={card._id} item={card} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hidden w-full justify-center lg:flex">
                    <ViewMorePill />
                </div>

                <PlacementsDecisionCard />

                <div className="flex w-full items-center justify-center pt-1 max-md:pt-5 md:pt-3 lg:hidden">
                    <ViewMorePill />
                </div>
            </div>
        </section>
    )
}
