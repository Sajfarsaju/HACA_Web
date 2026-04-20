"use client";

import React from "react"

const ACCENT = "#0066FF"

type PlacementCard = {
    id: string
}

const PLACEMENTS: PlacementCard[] = Array.from({ length: 24 }).map((_, i) => ({
    id: `placement-${i + 1}`,
}))

function PlacementDummyCard() {
    return (
        <div
            className="relative w-full min-w-0 overflow-hidden rounded-[7.88px] bg-white aspect-[243/280] md:aspect-auto md:h-[240px] md:w-[208px] lg:h-[279.7px] lg:w-[243.35px]"
        >
        </div>
    )
}

function PlacementsMarqueeRow({
    direction = "left",
    speedSeconds = 34,
    placements,
}: {
    direction?: "left" | "right"
    speedSeconds?: number
    placements: PlacementCard[]
}) {
    // Duplicate for seamless looping; animation moves -50% across the track.
    const items = [...placements, ...placements]

    return (
        <div
            className="w-full min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
            <div
                className={[
                    "placements-marquee-track flex w-max items-stretch",
                    direction === "right" ? "placements-marquee-track-reverse" : "",
                    "gap-x-4 sm:gap-x-6 lg:gap-x-8",
                ]
                    .filter(Boolean)
                    .join(" ")}
                style={{ ["--placementsMarqueeDuration" as any]: `${speedSeconds}s` }}
                aria-hidden="true"
            >
                {items.map((card, idx) => (
                    <PlacementDummyCard key={`${card.id}-${idx}`} />
                ))}
            </div>
        </div>
    )
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
            <path
                d="M5 12h14m0 0-6-6m6 6-6 6"
                stroke="currentColor"
                strokeWidth={2.25}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function JoinNowPill() {
    return (
        <button
            type="button"
            className="group inline-flex h-[60px] w-[166px] items-center justify-between rounded-full bg-[#E8F1FF] pl-6 pr-1 font-['Satoshi',sans-serif] text-[14px] font-medium leading-none text-black transition-colors duration-300 ease-out hover:bg-white/90"
        >
            <span className="pr-3">Join Now</span>
            <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-black transition-colors group-hover:bg-neutral-900">
                <ArrowRightIcon className="text-white" />
            </span>
        </button>
    )
}

function ViewMorePill() {
    return (
        <button
            type="button"
            className="group inline-flex h-[60px] w-[171px] items-center justify-between gap-[10px] rounded-[30px] bg-[#E8F1FF] pl-[20px] pr-2 font-['Satoshi',sans-serif] text-[14px] font-medium leading-none text-black transition-colors duration-300 ease-out hover:bg-white/90"
        >
            <span className="shrink-0">View More</span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0066FF] transition-colors group-hover:bg-[#015AFF]">
                <ArrowRightIcon className="text-white" />
            </span>
        </button>
    )
}

function PlacementsDecisionCard() {
    return (
        <div
            className="relative mx-auto flex w-full min-w-0 max-w-[1320px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#0066FF] px-5 py-10 sm:px-8 sm:py-12 lg:h-[500px] lg:min-h-[500px] lg:px-12 lg:py-0"
        >
            <img
                src="/photos/schools/marketing/placements/placement-cta-star-tr.svg"
                alt=""
                width={297}
                height={301}
                className="pointer-events-none absolute right-0 top-0 h-auto w-[min(297px,72%)] max-sm:w-[min(200px,58%)] select-none"
                aria-hidden
            />
            <img
                src="/photos/schools/marketing/placements/placement-cta-star-bl.svg"
                alt=""
                width={246}
                height={250}
                className="pointer-events-none absolute bottom-0 left-0 h-auto w-[min(246px,68%)] max-sm:w-[min(180px,55%)] select-none"
                aria-hidden
            />
            <div className="relative z-10 mx-auto flex w-full max-w-[min(1320px,100%)] flex-col items-center gap-[30px] text-center">
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

export function MarketingPlacementsSection() {
    return (
        <section
            id="marketing-placements"
            className="w-full bg-black opacity-100"
            aria-labelledby="marketing-placements-heading"
        >
            <style>{`
                @keyframes placements-marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .placements-marquee-track {
                    animation: placements-marquee var(--placementsMarqueeDuration, 34s) linear infinite;
                    will-change: transform;
                }
                .placements-marquee-track-reverse {
                    animation-direction: reverse;
                }
                @media (prefers-reduced-motion: reduce) {
                    .placements-marquee-track {
                        animation: none;
                        transform: none;
                    }
                }
            `}</style>

            <div
                className="mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-[clamp(18px,3vw,28px)] px-[clamp(16px,4.16vw,60px)] py-[clamp(20px,3vw,40px)]"
            >
                <header className="flex w-full min-w-0 flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                    <div className="flex shrink-0 items-center gap-[clamp(10px,1.5vw,14px)] lg:pt-1">
                        <span
                            className="h-[10px] w-[10px] shrink-0 rounded-full lg:h-3 lg:w-3"
                            style={{ backgroundColor: ACCENT }}
                            aria-hidden
                        />
                        <p className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,16px)] font-medium leading-none tracking-normal text-white">
                            Placements
                        </p>
                    </div>
                    <h2
                        id="marketing-placements-heading"
                        className="w-full min-w-0 max-w-full text-left font-semibold tracking-normal text-white [font-family:'Darker_Grotesque',sans-serif] text-[clamp(1.75rem,4.8vw,3.125rem)] leading-[1.05] lg:ml-auto lg:flex lg:max-w-[min(100%,720px)] lg:justify-end lg:text-left lg:leading-[1.08]"
                    >
                        <span className="inline-block text-left">
                            <span className="block whitespace-nowrap">
                                Your Name Could Be the Next on
                            </span>
                            <span className="block">Our Success List</span>
                        </span>
                    </h2>
                </header>

                {/* Mobile: fixed 2×2 grid (no horizontal scroll) — matches screenshot */}
                <div className="grid w-full min-w-0 grid-cols-2 gap-4 md:hidden">
                    {PLACEMENTS.slice(0, 4).map((card) => (
                        <PlacementDummyCard key={card.id} />
                    ))}
                </div>

                {/* md+: 2-row infinite auto marquee (top rightward, bottom leftward) */}
                <div className="hidden w-full min-w-0 flex-col gap-y-5 py-2 md:flex sm:gap-y-7 lg:gap-y-8">
                    <PlacementsMarqueeRow
                        direction="right"
                        speedSeconds={36}
                        placements={PLACEMENTS.slice(0, Math.ceil(PLACEMENTS.length / 2))}
                    />
                    <PlacementsMarqueeRow
                        direction="left"
                        speedSeconds={32}
                        placements={PLACEMENTS.slice(Math.ceil(PLACEMENTS.length / 2))}
                    />
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

