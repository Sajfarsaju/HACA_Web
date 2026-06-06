"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getPublicBackendBase } from "@/lib/placements-api";
import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const VIEW_MORE_HREF = "/marketing-school/success-story";

type CardData = { src: string; youtubeId: string | null; name: string; role: string };

const FALLBACK_CARDS: CardData[] = [
    { src: "/photos/schools/marketing/3e0b6431c0a1ce2edb5d9f2b9cf1935a0298f97d.webp", youtubeId: null, name: "Faseela Usman", role: "Creative Co-ordinator" },
    { src: "/photos/schools/marketing/700659e2027945d5a13c08eb0820dca74b2bce51.webp", youtubeId: null, name: "Shamil",        role: "Digital Marketer" },
    { src: "/photos/schools/marketing/e8f4127c19d1ab67ffbd3ef91b18894f38b5261a.webp", youtubeId: null, name: "Favas",         role: "Performance Marketer" },
];

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

function ViewMoreLink() {
    return (
        <Link
            href={VIEW_MORE_HREF}
            className="group relative inline-flex w-fit shrink-0 cursor-pointer items-center no-underline max-lg:h-[44px] max-lg:gap-[7.33px] max-lg:rounded-full max-lg:bg-white max-lg:pl-[14px] max-lg:pr-0 lg:h-[60px]"
            aria-label="View more learner stories"
        >
            <span className="whitespace-nowrap font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] text-black lg:hidden">
                View More
            </span>
            <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[22px] bg-[#0066FF] p-[13.2px] lg:hidden" aria-hidden>
                <svg width={17.6} height={17.6} viewBox="0 0 24 24" fill="none" className="block text-white">
                    <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            <div className="relative hidden h-[60px] w-fit rounded-[30px] bg-[#E6EFFF] pl-[20px] pr-[76px] transition-colors duration-300 group-hover:bg-[#d6e4ff] lg:block">
                <span className="flex h-full items-center whitespace-nowrap text-black" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}>
                    View More
                </span>
            </div>
            <MarketingCtaArrowCircle size="60" className="pointer-events-none absolute right-0 top-0 hidden lg:block" />
        </Link>
    );
}

function LearnerCard({ card, isPlaying, onPlay }: { card: CardData; isPlaying: boolean; onPlay: () => void }) {
    if (card.youtubeId) {
        return (
            <article
                data-uae-card
                className="flex w-[min(300px,78vw)] flex-col gap-3 sm:w-[min(340px,72vw)] lg:w-[min(400px,28vw)] lg:max-w-[420px]"
                onClick={onPlay}
                style={{ cursor: "pointer" }}
            >
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900">
                    {isPlaying ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${card.youtubeId}?autoplay=1&rel=0`}
                            title="Learner story"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full border-0"
                        />
                    ) : (
                        <>
                            <Image
                                src={card.src}
                                alt="Learner story thumbnail"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 78vw, 400px"
                                unoptimized
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors">
                                <div className="rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center w-[48px] h-[48px]">
                                    <svg className="w-[40%] h-[40%] text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </article>
        );
    }

    return (
        <article data-uae-card className="flex w-[min(300px,78vw)] flex-col gap-3 sm:w-[min(340px,72vw)] lg:w-[min(400px,28vw)] lg:max-w-[420px]">
            <Link
                href={VIEW_MORE_HREF}
                className="block text-inherit no-underline outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-[#0066FF]"
                aria-label={`${card.name}, ${card.role} — learner story`}
            >
                <figure className="m-0">
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100">
                        <Image
                            src={card.src}
                            alt={`${card.name}, ${card.role}, HACA UAE learner story`}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 78vw, 400px"
                        />
                    </div>
                    <figcaption className="mt-3 flex flex-col gap-1 text-left">
                        <span className="font-['Satoshi',sans-serif] text-[clamp(16px,1.8vw,18px)] font-bold leading-tight text-white">
                            {card.name}
                        </span>
                        <span className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,15px)] font-medium leading-snug text-[#FFFFFFB2]">
                            {card.role}
                        </span>
                    </figcaption>
                </figure>
            </Link>
        </article>
    );
}

export function UaeLearnerStoriesSection({
    sectionId,
    headingId,
    heading,
}: {
    sectionId: string;
    headingId: string;
    heading: string;
}) {
    const [cards, setCards] = useState<CardData[]>(FALLBACK_CARDS);
    const [playingIdx, setPlayingIdx] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        fetch(`${getPublicBackendBase()}/api/founder-videos?category=uae`)
            .then((r) => (r.ok ? r.json() : null))
            .then((data: { videos?: { youtubeUrl: string }[] } | null) => {
                if (data?.videos && data.videos.length > 0) {
                    const fetched: CardData[] = data.videos.map((v) => {
                        const id = getYouTubeId(v.youtubeUrl);
                        return {
                            src: id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : FALLBACK_CARDS[0].src,
                            youtubeId: id,
                            name: "",
                            role: "",
                        };
                    });
                    setCards(fetched);
                }
            })
            .catch(() => {});
    }, []);

    useEffect(() => {
        if (playingIdx === null) return;
        const handlePointerDown = (e: PointerEvent) => {
            const target = e.target;
            if (!(target instanceof Node)) return;
            const cardEls = sectionRef.current?.querySelectorAll("[data-uae-card]");
            if (!cardEls) return;
            for (const el of cardEls) {
                if (el.contains(target)) return;
            }
            setPlayingIdx(null);
        };
        document.addEventListener("pointerdown", handlePointerDown);
        return () => document.removeEventListener("pointerdown", handlePointerDown);
    }, [playingIdx]);

    return (
        <section
            ref={sectionRef}
            id={sectionId}
            className="w-full bg-black text-white"
            role="region"
            aria-labelledby={headingId}
        >
            <div className="mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-[40px] px-5 py-[40px] lg:gap-[30px] lg:px-[60px] lg:pb-10 lg:pt-[60px]">
                <header className="flex w-full flex-col items-center gap-4 text-center">
                    <h2
                        id={headingId}
                        className="m-0 max-w-[min(100%,720px)] font-semibold tracking-[-0.03em] text-white [font-family:'Darker_Grotesque',sans-serif] text-[clamp(1.75rem,5.2vw,3.125rem)] leading-[1.05] [text-rendering:geometricPrecision] lg:text-[55px] lg:leading-[1.08]"
                    >
                        {heading}
                    </h2>
                </header>

                <div className="min-w-0 w-full">
                    <ul
                        className="m-0 flex list-none flex-row items-stretch gap-6 overflow-x-auto overflow-y-hidden p-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-[30px]"
                        aria-label="Learner video stories"
                    >
                        {cards.map((card, i) => (
                            <li key={i} className="min-w-0 shrink-0">
                                <LearnerCard
                                    card={card}
                                    isPlaying={playingIdx === i}
                                    onPlay={() => setPlayingIdx(playingIdx === i ? null : i)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex w-full shrink-0 items-center justify-center">
                    <ViewMoreLink />
                </div>
            </div>
        </section>
    );
}
