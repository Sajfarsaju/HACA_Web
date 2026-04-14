import React from "react"

const ACCENT = "#0066FF"

type PlacementCard = {
    id: string
}

const PLACEMENTS: PlacementCard[] = Array.from({ length: 12 }).map((_, i) => ({
    id: `placement-${i + 1}`,
}))

function PlacementDummyCard() {
    return (
        <div
            className="
                relative w-full min-w-0 overflow-hidden bg-white rounded-[7.88px]
                aspect-[243/280]
                md:aspect-auto md:h-[240px] md:w-[208px]
                lg:h-[279.7px] lg:w-[243.35px]
            "
        >
        </div>
    )
}

function ViewMorePill() {
    return (
        <button
            type="button"
            className="
                group inline-flex h-[44px] items-center justify-between rounded-full bg-[#E8F1FF]
                pl-5 pr-1
                font-['Satoshi',sans-serif] text-[14px] font-medium leading-none text-black
                transition-colors duration-300 ease-out hover:bg-white/90
            "
        >
            <span className="pr-3">View More</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0066FF] transition-colors group-hover:bg-[#015AFF]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-white">
                    <path
                        d="M5 12h14m0 0-6-6m6 6-6 6"
                        stroke="currentColor"
                        strokeWidth={2.25}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
        </button>
    )
}

export function MarketingPlacementsSection() {
    return (
        <section
            id="marketing-placements"
            className="w-full bg-black opacity-100"
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
                        <p className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,16px)] font-medium leading-none tracking-normal text-white">
                            Placements
                        </p>
                    </div>
                    <h2
                        id="marketing-placements-heading"
                        className="
                            w-full min-w-0 max-w-full text-left font-semibold tracking-normal text-white
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,4.8vw,3.125rem)] leading-[1.05]
                            lg:ml-auto lg:flex lg:max-w-[min(100%,720px)] lg:justify-end lg:text-left lg:leading-[1.08]
                        "
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

                {/* md+: 2-row horizontal scroller (top from right, bottom from left) */}
                <div
                    className="
                        hidden w-full min-w-0 overflow-x-auto overflow-y-hidden md:block
                        [scrollbar-width:none] [-ms-overflow-style:none]
                        [&::-webkit-scrollbar]:hidden
                    "
                >
                    <div className="flex w-max flex-col gap-y-5 py-2 sm:gap-y-7 lg:gap-y-8">
                        <div className="flex w-max flex-row-reverse gap-x-4 sm:gap-x-6 lg:gap-x-8">
                            {PLACEMENTS.slice(0, Math.ceil(PLACEMENTS.length / 2)).map((card) => (
                                <PlacementDummyCard key={card.id} />
                            ))}
                        </div>
                        <div className="flex w-max flex-row gap-x-4 sm:gap-x-6 lg:gap-x-8">
                            {PLACEMENTS.slice(Math.ceil(PLACEMENTS.length / 2)).map((card) => (
                                <PlacementDummyCard key={card.id} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center pt-2">
                    <ViewMorePill />
                </div>
            </div>
        </section>
    )
}

