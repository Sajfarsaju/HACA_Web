import React from "react"
import Image from "next/image"

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

function YoutubeThumbnailCard({
    src,
    alt,
    priority,
    className,
    fit = "cover",
}: {
    src: string
    alt: string
    priority?: boolean
    className?: string
    fit?: "cover" | "contain"
}) {
    return (
        <div
            className={[
                "relative mx-auto w-full min-w-0 max-w-[553px] overflow-hidden bg-transparent lg:mx-0 lg:h-full lg:max-w-none lg:flex-1",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            style={{ borderRadius: "8.09px" }}
        >
            <div className="relative aspect-[553/306.1628112792969] w-full lg:aspect-auto lg:h-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className={`${fit === "contain" ? "object-contain" : "object-cover"} object-center`}
                    sizes="(min-width: 1024px) 410px, (min-width: 768px) 50vw, 100vw"
                    priority={priority}
                />
            </div>
        </div>
    )
}

export function MarketingYoutubeHubSection() {
    return (
        <section id="marketing-youtube-hub" className="w-full" aria-labelledby="marketing-youtube-hub-heading">
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col
                    gap-[clamp(18px,3vw,28px)]
                    px-[clamp(16px,4.16vw,60px)]
                    py-[clamp(20px,3vw,40px)]
                "
            >
                <header className="flex w-full min-w-0 flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                    <div className="flex shrink-0 items-center gap-[clamp(10px,1.5vw,14px)] lg:pt-2">
                        <span
                            className="h-[10px] w-[10px] shrink-0 rounded-full lg:h-3 lg:w-3"
                            style={{ backgroundColor: ACCENT }}
                            aria-hidden
                        />
                        <p className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,16px)] font-medium leading-none tracking-normal" style={{ color: "var(--cy-text, #000000)", transition: "color 0.55s ease" }}>
                            Youtube Hub
                        </p>
                    </div>

                    <h2
                        id="marketing-youtube-hub-heading"
                        className="
                            w-full min-w-0 max-w-full text-left font-semibold tracking-normal
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,4.8vw,3.125rem)] leading-[1.05]
                            lg:ml-auto lg:flex lg:max-w-[min(100%,720px)] lg:justify-end lg:text-left lg:leading-[1.08]
                        "
                        style={{ color: "var(--cy-text, #000000)", transition: "color 0.55s ease" }}
                    >
                        <span className="inline-block text-left">
                            <span className="block lg:hidden">What We Build. How We</span>
                            <span className="block lg:hidden">Think. All on YouTube.</span>
                            <span className="hidden lg:block">What We Build. How We Think.</span>
                            <span className="hidden lg:block">All on YouTube.</span>
                        </span>
                    </h2>
                </header>

                <div className="mx-auto flex w-full min-w-0 flex-col items-center gap-6 lg:h-[306.1628112792969px] lg:w-[1320px] lg:flex-row lg:items-stretch lg:justify-between lg:gap-[45.83px]">
                    <YoutubeThumbnailCard
                        className="hidden lg:block"
                        src="/images/youtube-hub/rectangle-43.png"
                        alt="YouTube video thumbnail 1"
                    />
                    <YoutubeThumbnailCard
                        className="lg:flex-none lg:h-[306.1628112792969px] lg:w-[553px]"
                        src="/images/youtube-hub/rectangle-44.png"
                        alt="YouTube video thumbnail 2"
                        fit="contain"
                        priority
                    />
                    <YoutubeThumbnailCard className="hidden lg:block" src="/images/youtube-hub/rectangle-58.png" alt="YouTube video thumbnail 3" />
                </div>

                <div className="flex w-full items-center justify-center pt-1 md:pt-3">
                    <ViewMorePill />
                </div>
            </div>
        </section>
    )
}

