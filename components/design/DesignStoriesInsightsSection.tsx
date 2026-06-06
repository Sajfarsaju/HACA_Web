"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getPublicBackendBase } from "@/lib/placements-api";
import { DesignSplitArrowCta } from "./DesignSplitArrowCta";

const DESIGN_YOUTUBE_URL = "https://youtube.com/@designschoolhaca";

// ─── Helpers ──────────────────────────────────────────────────────────────────

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

type VideoCard = { youtubeId: string; thumbSrc: string };

// ─── Video card ───────────────────────────────────────────────────────────────

function StoryCard({
    card,
    width,
    height,
    borderWidth,
    radius,
    inView,
    delay,
    isPlaying,
    onClick,
    cardGradient,
}: {
    card: VideoCard | null;
    width: number;
    height: number;
    borderWidth: number;
    radius?: number;
    inView: boolean;
    delay: number;
    isPlaying: boolean;
    onClick: () => void;
    cardGradient: string;
}) {
    return (
        <div
            data-story-card
            className={[
                "relative shrink-0 overflow-hidden transition-all duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                card ? "cursor-pointer" : "",
            ].join(" ")}
            style={{
                transitionDelay: `${delay}ms`,
                width,
                height,
                borderStyle: "solid",
                borderWidth,
                borderColor: "rgba(0,0,0,0.18)",
                background: cardGradient,
                borderRadius: radius,
            }}
            onClick={card ? onClick : undefined}
        >
            {isPlaying && card ? (
                <iframe
                    src={`https://www.youtube.com/embed/${card.youtubeId}?autoplay=1&rel=0`}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                />
            ) : card ? (
                <>
                    <Image
                        src={card.thumbSrc}
                        alt="Design School story"
                        fill
                        className="object-cover"
                        sizes={`${Math.round(width)}px`}
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                            style={{ width: Math.round(height * 0.13), height: Math.round(height * 0.13) }}
                        >
                            <svg
                                style={{ width: "40%", height: "40%", marginLeft: "8%" }}
                                viewBox="0 0 24 24"
                                fill="white"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function DesignStoriesInsightsSection({ font, serif }: { font: string; serif: string }) {
    const cardGradient =
        "linear-gradient(135deg, rgba(143,86,255,0.18) 0%, rgba(37,146,255,0.10) 45%, rgba(255,92,0,0.12) 100%)";

    const sectionRef = useRef<HTMLElement>(null);
    const desktopScrollerRef = useRef<HTMLDivElement | null>(null);
    const mobileScrollerRef = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);
    const [desktopShift, setDesktopShift] = useState(0);
    const [mobileShift, setMobileShift] = useState(0);
    const [desktopPad, setDesktopPad] = useState(60);
    const [mobilePad, setMobilePad] = useState(20);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const [videos, setVideos] = useState<VideoCard[]>([]);
    const [playingIdx, setPlayingIdx] = useState<number | null>(null);

    useEffect(() => {
        fetch(`${getPublicBackendBase()}/api/founder-videos?category=design-school`)
            .then((r) => (r.ok ? r.json() : null))
            .then((data: { videos?: { youtubeUrl: string }[] } | null) => {
                if (data?.videos && data.videos.length > 0) {
                    const cards: VideoCard[] = data.videos.flatMap((v) => {
                        const id = getYouTubeId(v.youtubeUrl);
                        if (!id) return [];
                        return [{ youtubeId: id, thumbSrc: `https://img.youtube.com/vi/${id}/maxresdefault.jpg` }];
                    });
                    if (cards.length > 0) setVideos(cards);
                }
            })
            .catch(() => {});
    }, []);

    // Close playing card when clicking outside
    useEffect(() => {
        if (playingIdx === null) return;
        const handlePointerDown = (e: PointerEvent) => {
            const target = e.target;
            if (!(target instanceof Node)) return;
            const cards = sectionRef.current?.querySelectorAll("[data-story-card]");
            if (!cards) return;
            for (const card of cards) {
                if (card.contains(target)) return;
            }
            setPlayingIdx(null);
        };
        document.addEventListener("pointerdown", handlePointerDown);
        return () => document.removeEventListener("pointerdown", handlePointerDown);
    }, [playingIdx]);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setInView(true);
                obs.disconnect();
            },
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        const el = desktopScrollerRef.current;
        if (!el) return;
        const update = () => {
            const pad = sectionRef.current ? parseFloat(getComputedStyle(sectionRef.current).paddingLeft) : 60;
            setDesktopPad(pad);
            setDesktopShift(Math.min(el.scrollLeft, pad));
            setCanScrollLeft(el.scrollLeft > 2);
            setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
        };
        update();
        el.addEventListener("scroll", update, { passive: true });
        return () => el.removeEventListener("scroll", update);
    }, []);

    useEffect(() => {
        const el = mobileScrollerRef.current;
        if (!el) return;
        const update = () => {
            const pad = sectionRef.current ? parseFloat(getComputedStyle(sectionRef.current).paddingLeft) : 20;
            setMobilePad(pad);
            setMobileShift(Math.min(el.scrollLeft, pad));
        };
        update();
        el.addEventListener("scroll", update, { passive: true });
        return () => el.removeEventListener("scroll", update);
    }, []);

    const scrollDesktopByCards = (dir: -1 | 1) => {
        const el = desktopScrollerRef.current;
        if (!el) return;
        el.scrollBy({ left: dir * (644 + 2), behavior: "smooth" });
    };

    // Show at least 3 placeholder slots; fill with real videos when available
    const desktopCount = Math.max(3, videos.length);
    const mobileCount = Math.max(3, videos.length);

    const cardFor = (i: number): VideoCard | null => videos[i] ?? null;

    return (
        <section
            ref={sectionRef}
            id="design-stories-insights"
            className="
                box-border w-full max-w-[1440px] bg-[#FCFCFC]
                px-5 pb-[30px] pt-[30px]
                lg:px-[60px] lg:pb-[40px] lg:pt-[40px]
            "
        >
            <div className="flex w-full min-w-0 flex-col gap-[50px] lg:gap-[80px]">
                {/* Heading */}
                <div className="w-full min-h-0 lg:min-h-[123.574px] lg:w-[447px] lg:max-w-full">
                    <h2
                        className="m-0 w-full max-w-full text-black"
                        style={{
                            fontFamily: font,
                            fontWeight: 500,
                            fontSize: "34px",
                            lineHeight: "114.99999999999999%",
                        }}
                    >
                        <span className="hidden lg:inline">
                            Stories, Insights, and Life
                            <br />
                            Inside{" "}
                        </span>
                        <span className="lg:hidden">
                            Stories, Insights,
                            <br />
                            and Life Inside <br />
                        </span>
                        <span
                            className="relative inline-block pb-[6px] lg:pb-[12px]"
                            style={{
                                fontFamily: serif,
                                fontWeight: 300,
                                fontStyle: "italic",
                                fontSize: "inherit",
                                lineHeight: "114.99999999999999%",
                            }}
                        >
                            Design School
                            <span
                                className="pointer-events-none absolute left-1/2 top-full -mt-[1px] -translate-x-1/2 lg:hidden"
                                style={{ width: "185px", height: "8px" }}
                                aria-hidden
                            >
                                <Image
                                    src="/photos/schools/design/Vector (11).svg"
                                    alt="" aria-hidden="true"
                                    width={185}
                                    height={8}
                                    className="object-contain"
                                    priority={false}
                                />
                            </span>
                            <span
                                className="pointer-events-none absolute left-1/2 top-full mt-[3px] hidden -translate-x-1/2 lg:block"
                                style={{ width: "279px", height: "15px" }}
                                aria-hidden
                            >
                                <Image
                                    src="/photos/schools/design/Vector (11).svg"
                                    alt="" aria-hidden="true"
                                    width={279}
                                    height={15}
                                    className="object-contain"
                                    priority={false}
                                />
                            </span>
                        </span>
                        <style jsx>{`
                            @media (min-width: 1024px) {
                                h2 {
                                    font-size: 50px !important;
                                }
                            }
                        `}</style>
                    </h2>
                </div>

                {/* Videos container */}
                <div className="flex w-full min-w-0 flex-col lg:gap-[40px]" style={{ gap: "20.66px" }}>
                    {/* Desktop */}
                    <div
                        className="hidden lg:block"
                        style={{
                            marginLeft: `-${desktopShift}px`,
                            marginRight: `-${desktopPad}px`,
                            width: `calc(100% + ${desktopShift + desktopPad}px)`,
                            transition: "margin-left 0.2s ease-out, width 0.2s ease-out, margin-right 0.2s ease-out",
                        }}
                    >
                        <div className="relative w-full">
                            <button
                                type="button"
                                aria-label="Scroll left"
                                onClick={() => scrollDesktopByCards(-1)}
                                disabled={!canScrollLeft}
                                className={[
                                    "absolute left-[14px] top-1/2 z-10 -translate-y-1/2",
                                    "flex items-center justify-center",
                                    "h-[clamp(64px,5.694vw,82px)] w-[clamp(64px,5.694vw,82px)]",
                                    "transition-[transform,opacity] duration-200 ease-out",
                                    "hover:scale-[1.03] active:scale-[0.98]",
                                    "disabled:opacity-40 disabled:hover:scale-100",
                                ].join(" ")}
                            >
                                <span className="relative h-full w-full" style={{ transform: "rotate(180deg)" }}>
                                    <Image src="/photos/schools/design/Frame 2131331135.svg" alt="" aria-hidden="true" fill className="object-contain" priority={false} />
                                </span>
                            </button>

                            <button
                                type="button"
                                aria-label="Scroll right"
                                onClick={() => scrollDesktopByCards(1)}
                                disabled={!canScrollRight}
                                className={[
                                    "absolute right-[14px] top-1/2 z-10 -translate-y-1/2",
                                    "flex items-center justify-center",
                                    "h-[clamp(64px,5.694vw,82px)] w-[clamp(64px,5.694vw,82px)]",
                                    "transition-[transform,opacity] duration-200 ease-out",
                                    "hover:scale-[1.03] active:scale-[0.98]",
                                    "disabled:opacity-40 disabled:hover:scale-100",
                                ].join(" ")}
                            >
                                <span className="relative h-full w-full">
                                    <Image src="/photos/schools/design/Frame 2131331135.svg" alt="" aria-hidden="true" fill className="object-contain" priority={false} />
                                </span>
                            </button>

                            <div
                                ref={desktopScrollerRef}
                                className="storiesScroller flex overflow-x-auto overflow-y-hidden scroll-smooth"
                                style={{ width: "100%", gap: "2px", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {Array.from({ length: desktopCount }, (_, i) => (
                                    <StoryCard
                                        key={i}
                                        card={cardFor(i)}
                                        width={644}
                                        height={392.5577697753906}
                                        borderWidth={1}
                                        inView={inView}
                                        delay={Math.min(i * 90, 240)}
                                        isPlaying={playingIdx === i}
                                        onClick={() => setPlayingIdx(playingIdx === i ? null : i)}
                                        cardGradient={cardGradient}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div
                        className="lg:hidden"
                        style={{
                            marginLeft: `-${mobileShift}px`,
                            marginRight: `-${mobilePad}px`,
                            width: `calc(100% + ${mobileShift + mobilePad}px)`,
                        }}
                    >
                        <div
                            ref={mobileScrollerRef}
                            className="storiesScroller flex overflow-x-auto overflow-y-hidden"
                            style={{ width: "100%", gap: "1.03px", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {Array.from({ length: mobileCount }, (_, i) => (
                                <StoryCard
                                    key={i}
                                    card={cardFor(i)}
                                    width={332.6446228027344}
                                    height={202.76744079589844}
                                    borderWidth={0.52}
                                    inView={inView}
                                    delay={Math.min(i * 90, 240)}
                                    isPlaying={playingIdx === i}
                                    onClick={() => setPlayingIdx(playingIdx === i ? null : i)}
                                    cardGradient={cardGradient}
                                />
                            ))}
                        </div>
                    </div>

                    <style jsx>{`
                        .storiesScroller::-webkit-scrollbar {
                            display: none;
                            width: 0;
                            height: 0;
                        }
                    `}</style>

                    {/* Desktop CTA button */}
                    <div className="hidden lg:flex w-full max-w-[1320px] justify-center items-center" style={{ height: "82px" }}>
                        <VisitPageButton font={font} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function VisitPageButton({ font }: { font: string }) {
    const wrapW = "220.2265625px";
    return (
        <DesignSplitArrowCta
            href={DESIGN_YOUTUBE_URL}
            accent="#8F56FF"
            ariaLabel="Visit Page"
            label="Visit Page"
            fontFamily={font}
            arrowPreset="desktop"
            wrapperStyle={{ width: wrapW, height: "60.5555534362793px" }}
            dims={{
                gapPx: 5.56,
                pillWidth: 154.66665649414062,
                pillHeight: 60.5555534362793,
                borderWidth: 1.11,
                radiusPx: 50,
                padX: 33.33,
                padY: 17.78,
                fontSizePx: 17.78,
                circlePx: 60,
                arrowSvgPx: 33.33,
            }}
        />
    );
}
