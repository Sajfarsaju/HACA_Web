"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { getPublicBackendBase } from "@/lib/placements-api"

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getYouTubeId(url: string): string | null {
    const patterns = [
        /[?&]v=([^&\s]+)/,
        /youtu\.be\/([^?&\s]+)/,
        /embed\/([^?&\s]+)/,
        /shorts\/([^?&\s]+)/,
    ]
    for (const p of patterns) {
        const m = url.match(p)
        if (m) return m[1]
    }
    return null
}

// ─── Static fallback (used when no videos are configured in admin) ────────────

const STATIC_CARDS = [
    { src: "/photos/main/thumbnail 1.webp", youtubeId: null },
    { src: "/photos/main/thumbnail 2.webp", youtubeId: null },
    { src: "/photos/main/thumbnail 3.webp", youtubeId: null },
]

type CardData = { src: string; youtubeId: string | null }

// Build a seamless marquee track: duplicate enough cards then double for -50% loop
function buildTrack(cards: CardData[]): CardData[] {
    const minCards = 9
    const reps = Math.max(3, Math.ceil(minCards / cards.length))
    const half = Array.from({ length: reps }, () => cards).flat()
    return [...half, ...half]
}

// ─── Component ────────────────────────────────────────────────────────────────

export function AboutFounderInsightsSection() {
    const [cards, setCards] = useState<CardData[]>(STATIC_CARDS)

    useEffect(() => {
        fetch(`${getPublicBackendBase()}/api/founder-videos?category=founder`)
            .then((r) => (r.ok ? r.json() : null))
            .then((data: { videos?: { youtubeUrl: string }[] } | null) => {
                if (data?.videos && data.videos.length > 0) {
                    const fetched: CardData[] = data.videos.map((v) => {
                        const id = getYouTubeId(v.youtubeUrl)
                        return {
                            src: id
                                ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
                                : "/photos/main/thumbnail 1.webp",
                            youtubeId: id,
                        }
                    })
                    setCards(fetched)
                }
            })
            .catch(() => {})
    }, [])

    const [playingIdx, setPlayingIdx] = useState<number | null>(null)
    const sectionRef = useRef<HTMLElement>(null)
    const track = buildTrack(cards)

    useEffect(() => {
        if (playingIdx === null) return

        const handlePointerDown = (event: PointerEvent) => {
            const target = event.target
            if (!(target instanceof Node)) return

            const cardNodes = sectionRef.current?.querySelectorAll("[data-founder-card]")
            if (!cardNodes) return

            for (const card of cardNodes) {
                if (card.contains(target)) return
            }

            setPlayingIdx(null)
        }

        document.addEventListener("pointerdown", handlePointerDown)
        return () => document.removeEventListener("pointerdown", handlePointerDown)
    }, [playingIdx])

    return (
        <section
            ref={sectionRef}
            className="w-full section-4k mx-auto bg-[#000210] py-[40px] flex flex-col items-center gap-[clamp(30px,4vw,50px)] px-[clamp(20px,4vw,60px)]"
        >
            {/* Heading */}
            <h2 className="w-full max-w-[1320px] font-rethink font-medium text-[clamp(26px,2.2vw,36px)] leading-[34px] text-white m-0 max-md:max-w-[335px] max-md:font-semibold max-md:leading-[110%] max-md:text-center">
                Founder Insights &amp; Industry Talks
            </h2>

            <style>{`
                @keyframes founder-insights-marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .founder-insights-track {
                    animation: founder-insights-marquee 120s linear infinite;
                    will-change: transform;
                }
                .founder-insights-track:hover {
                    animation-play-state: paused;
                }
                .founder-insights-track.has-playing {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Infinite auto-scroll track */}
            <div className="w-screen max-w-none overflow-hidden pb-2 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
                <div
                    className={`founder-insights-track flex flex-row items-stretch gap-[clamp(12.18px,2vw,25.88px)] w-max${playingIdx !== null ? " has-playing" : ""}`}
                >
                    {track.map((card, i) => {
                        const isPlaying = playingIdx === i

                        return (
                            <article
                                key={i}
                                data-founder-card
                                className="relative flex-shrink-0 w-[clamp(258.55px,38vw,549.42px)] aspect-[549.42/301.88] rounded-[clamp(7.76px,1.2vw,16.49px)] border border-[#232D6B] overflow-hidden bg-[#10152F] max-md:border-[0.78px] md:border-[1px]"
                                onClick={() => {
                                    if (!card.youtubeId) return
                                    setPlayingIdx(isPlaying ? null : i)
                                }}
                                style={{ cursor: card.youtubeId ? "pointer" : "default" }}
                            >
                                {isPlaying && card.youtubeId ? (
                                    /* ── Playing state: YouTube iframe fills the card ── */
                                    <iframe
                                        src={`https://www.youtube.com/embed/${card.youtubeId}?autoplay=1&rel=0`}
                                        title="YouTube video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full border-0"
                                    />
                                ) : (
                                    /* ── Idle state: thumbnail + play button ── */
                                    <>
                                        <Image
                                            src={card.src}
                                            alt={`Founder insight thumbnail ${(i % cards.length) + 1}`}
                                            fill
                                            className="absolute inset-0 object-cover"
                                            sizes="(max-width: 768px) 260px, (max-width: 1200px) 40vw, 550px"
                                            unoptimized={card.src.startsWith("https://img.youtube.com")}
                                        />
                                        <div className="absolute inset-0 bg-[#10152F]/12" />

                                        {card.youtubeId && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 w-[clamp(30px,3.5vw,50px)] h-[clamp(30px,3.5vw,50px)]">
                                                    <svg
                                                        className="w-[40%] h-[40%] text-white ml-0.5"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
