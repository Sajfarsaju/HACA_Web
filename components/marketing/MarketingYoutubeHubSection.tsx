import React from "react"

const ACCENT = "#0066FF"

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

function ViewMorePill() {
    return (
        <button
            type="button"
            className="
                group inline-flex h-[60px] w-[171px] items-center justify-between gap-[10px]
                rounded-[30px] bg-[#E8F1FF]
                pl-[20px] pr-2
                font-['Satoshi',sans-serif] text-[14px] font-medium leading-none text-black
                transition-colors duration-300 ease-out hover:bg-black/5
            "
        >
            <span className="shrink-0">View More</span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0066FF] transition-colors group-hover:bg-[#015AFF]">
                <ArrowRightIcon className="text-white" />
            </span>
        </button>
    )
}

function PlayBadge() {
    return (
        <div className="pointer-events-none absolute left-1/2 top-1/2 grid h-[58px] w-[78px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[14px] bg-[#FF0000]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden className="translate-x-[1px]">
                <path d="M9 7.5v9l8-4.5-8-4.5Z" fill="white" />
            </svg>
        </div>
    )
}

function YoutubeDummyCard() {
    return (
        <div className="relative w-full min-w-0 overflow-hidden rounded-[20px] bg-[#E9E9E9]">
            <div className="aspect-[16/9] w-full" />
            <PlayBadge />
        </div>
    )
}

export function MarketingYoutubeHubSection() {
    return (
        <section id="marketing-youtube-hub" className="w-full bg-white" aria-labelledby="marketing-youtube-hub-heading">
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col
                    gap-[clamp(18px,3vw,28px)]
                    px-[clamp(16px,4.16vw,60px)]
                    py-[clamp(20px,3vw,40px)]
                "
            >
                <header className="flex w-full min-w-0 flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                    <div className="flex shrink-0 items-center gap-[clamp(10px,1.5vw,14px)] lg:pt-2">
                        <span
                            className="h-[10px] w-[10px] shrink-0 rounded-full lg:h-3 lg:w-3"
                            style={{ backgroundColor: ACCENT }}
                            aria-hidden
                        />
                        <p className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,16px)] font-medium leading-none tracking-normal text-black">
                            Youtube Hub
                        </p>
                    </div>

                    <h2
                        id="marketing-youtube-hub-heading"
                        className="
                            w-full min-w-0 max-w-full text-left font-semibold tracking-normal text-black
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,4.8vw,3.125rem)] leading-[1.05]
                            lg:ml-auto lg:flex lg:max-w-[min(100%,720px)] lg:justify-end lg:text-left lg:leading-[1.08]
                        "
                    >
                        <span className="inline-block text-left">
                            <span className="block">What We Build. How We Think.</span>
                            <span className="block">All on YouTube.</span>
                        </span>
                    </h2>
                </header>

                <div className="grid w-full min-w-0 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    <YoutubeDummyCard />
                    <YoutubeDummyCard />
                    <YoutubeDummyCard />
                </div>

                <div className="flex w-full items-center justify-center pt-1 md:pt-3">
                    <ViewMorePill />
                </div>
            </div>
        </section>
    )
}

