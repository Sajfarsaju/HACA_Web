"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getPublicBackendBase } from "@/lib/placements-api";
import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const ACCENT = "#0066FF";
const MARKETING_YOUTUBE_URL = "https://youtube.com/@haca.marketingschool";

const FALLBACK_CARDS = [
    { src: "/photos/schools/marketing/3e0b6431c0a1ce2edb5d9f2b9cf1935a0298f97d.webp", youtubeId: null },
    { src: "/photos/schools/marketing/700659e2027945d5a13c08eb0820dca74b2bce51.webp", youtubeId: null },
    { src: "/photos/schools/marketing/e8f4127c19d1ab67ffbd3ef91b18894f38b5261a.webp", youtubeId: null },
];

type Card = { src: string; youtubeId: string | null };

function getYouTubeId(url: string): string | null {
    const patterns = [
        /[?&]v=([^&\s]+)/,
        /youtu\.be\/([^?&\s]+)/,
        /embed\/([^?&\s]+)/,
        /shorts\/([^?&\s]+)/,
    ];
    for (const p of patterns) {
        const m = url.match(p);
        if (m) return m[1];
    }
    return null;
}

function MobileHubViewMoreArrow() {
    return (
        <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[22px] bg-[#0066FF] p-[13.2px] lg:hidden" aria-hidden>
            <svg width={17.6} height={17.6} viewBox="0 0 24 24" fill="none" className="block shrink-0 text-white">
                <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );
}

function ViewMorePill() {
    return (
        <a
            href={MARKETING_YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-fit shrink-0 cursor-pointer items-center no-underline max-lg:h-[44px] max-lg:gap-[7.33px] max-lg:rounded-full max-lg:bg-[#E8F1FF] max-lg:pl-[14px] max-lg:pr-0 lg:h-[60px]"
            aria-label="View more on HACA Marketing School YouTube"
        >
            <span className="whitespace-nowrap text-black lg:hidden font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] tracking-normal">View More</span>
            <MobileHubViewMoreArrow />
            <div className="relative hidden h-[60px] w-fit rounded-[30px] bg-[#E6EFFF] pl-[20px] pr-[76px] transition-colors duration-300 group-hover:bg-[#d6e4ff] lg:block">
                <span className="flex h-full items-center whitespace-nowrap text-black" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}>View More</span>
            </div>
            <MarketingCtaArrowCircle size="60" className="pointer-events-none absolute right-0 top-0 hidden lg:block" />
        </a>
    );
}

function VideoCard({ card, isPlaying, onClick }: { card: Card; isPlaying: boolean; onClick: () => void }) {
    return (
        <div
            className="relative flex-none overflow-hidden bg-transparent w-[min(553px,85vw)] lg:w-[553px] lg:h-[306.1628112792969px]"
            style={{ borderRadius: "8.09px", cursor: card.youtubeId ? "pointer" : "default" }}
            onClick={card.youtubeId ? onClick : undefined}
        >
            <div className="relative aspect-[553/306.1628112792969] w-full lg:aspect-auto lg:h-full">
                {isPlaying && card.youtubeId ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${card.youtubeId}?autoplay=1&rel=0`}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                    />
                ) : (
                    <>
                        <Image
                            src={card.src}
                            alt="YouTube video thumbnail"
                            fill
                            className="object-cover object-center"
                            sizes="(min-width: 1024px) 553px, (min-width: 768px) 50vw, 85vw"
                            unoptimized={card.src.startsWith("https://img.youtube.com")}
                        />
                        {card.youtubeId && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors">
                                <div className="rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center w-[48px] h-[48px]">
                                    <svg className="w-[40%] h-[40%] text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export function MarketingYoutubeHubSection() {
    const [cards, setCards] = useState<Card[]>(FALLBACK_CARDS);
    const [playingIdx, setPlayingIdx] = useState<number | null>(null);

    useEffect(() => {
        fetch(`${getPublicBackendBase()}/api/founder-videos?category=marketing-school`)
            .then((r) => (r.ok ? r.json() : null))
            .then((data: { videos?: { youtubeUrl: string }[] } | null) => {
                if (data?.videos && data.videos.length > 0) {
                    const fetched: Card[] = data.videos.map((v) => {
                        const id = getYouTubeId(v.youtubeUrl);
                        return {
                            src: id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : FALLBACK_CARDS[0].src,
                            youtubeId: id,
                        };
                    });
                    setCards(fetched);
                }
            })
            .catch(() => {});
    }, []);

    return (
        <section id="marketing-youtube-hub" className="w-full" aria-labelledby="marketing-youtube-hub-heading">
            <div className="mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-[clamp(18px,3vw,28px)] px-[clamp(16px,4.16vw,60px)] py-[clamp(20px,3vw,40px)]">
                <header className="flex w-full min-w-0 flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                    <div className="flex shrink-0 items-center gap-[clamp(10px,1.5vw,14px)] lg:pt-2">
                        <span className="h-[10px] w-[10px] shrink-0 rounded-full lg:h-3 lg:w-3" style={{ backgroundColor: ACCENT }} aria-hidden />
                        <p className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,16px)] font-medium leading-none tracking-normal" style={{ color: "var(--mp-text, #ffffff)", transition: "color 0.55s ease" }}>
                            Youtube Hub
                        </p>
                    </div>
                    <h2
                        id="marketing-youtube-hub-heading"
                        className="w-full min-w-0 max-w-full text-left font-semibold tracking-normal [font-family:'Darker_Grotesque',sans-serif] text-[clamp(1.75rem,4.8vw,3.125rem)] leading-[1.05] lg:ml-auto lg:flex lg:max-w-[min(100%,720px)] lg:justify-end lg:text-left lg:leading-[1.08]"
                        style={{ color: "var(--mp-text, #ffffff)", transition: "color 0.55s ease" }}
                    >
                        <span className="inline-block text-left">
                            <span className="block lg:hidden">What We Build. How We</span>
                            <span className="block lg:hidden">Think. All on YouTube.</span>
                            <span className="hidden lg:block">What We Build. How We Think.</span>
                            <span className="hidden lg:block">All on YouTube.</span>
                        </span>
                    </h2>
                </header>

                <div
                    className="flex w-full min-w-0 flex-row items-stretch gap-6 overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-[45.83px]"
                    aria-label="YouTube thumbnails"
                >
                    {cards.map((card, i) => (
                        <VideoCard
                            key={i}
                            card={card}
                            isPlaying={playingIdx === i}
                            onClick={() => setPlayingIdx(playingIdx === i ? null : i)}
                        />
                    ))}
                </div>

                <div className="flex w-full items-center justify-center pt-1 md:pt-3">
                    <ViewMorePill />
                </div>
            </div>
        </section>
    );
}
