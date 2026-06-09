"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";
import { getPublicBackendBase } from "@/lib/placements-api";

const HEADING_ID = "marketing-career-wins-heading";
const VIEW_MORE_HREF = "/marketing-school/success-story";
const THUMB_1 = "/photos/schools/marketing/3e0b6431c0a1ce2edb5d9f2b9cf1935a0298f97d.webp";
const THUMB_2 = "/photos/schools/marketing/700659e2027945d5a13c08eb0820dca74b2bce51.webp";
const THUMB_3 = "/photos/schools/marketing/e8f4127c19d1ab67ffbd3ef91b18894f38b5261a.webp";
const INTRO_COPY =
    "From fresh graduates landing dream roles to professionals doubling their income, our alumni show what's possible. They started exactly where you are and now create the campaigns you see every day.";

type ApiVideo = { _id: string; youtubeUrl: string; name: string; designation: string; order: number };

function getYouTubeId(url: string): string | null {
    const patterns = [/[?&]v=([^&\s]+)/, /youtu\.be\/([^?&\s]+)/, /embed\/([^?&\s]+)/, /shorts\/([^?&\s]+)/];
    for (const p of patterns) { const m = url.match(p); if (m) return m[1]; }
    return null;
}

function MobileViewMoreArrow() {
    return (
        <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[22px] bg-[#0066FF] p-[13.2px] lg:hidden" aria-hidden>
            <svg width={17.6} height={17.6} viewBox="0 0 24 24" fill="none" className="block shrink-0 text-white">
                <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );
}

function CareerWinsViewMoreLink() {
    return (
        <Link
            href={VIEW_MORE_HREF}
            className="group relative inline-flex w-fit shrink-0 cursor-pointer items-center no-underline max-lg:h-[44px] max-lg:gap-[7.33px] max-lg:rounded-full max-lg:bg-[#E8F1FF] max-lg:pl-[14px] max-lg:pr-0 lg:h-[60px]"
            aria-label="View more alumni success stories"
        >
            <span className="whitespace-nowrap font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] tracking-normal text-black lg:hidden">
                View More
            </span>
            <MobileViewMoreArrow />
            <div className="relative hidden h-[60px] w-fit rounded-[30px] bg-[#E6EFFF] pl-[20px] pr-[76px] transition-colors duration-300 group-hover:bg-[#d6e4ff] lg:block">
                <span className="flex h-full items-center whitespace-nowrap text-black" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}>
                    View More
                </span>
            </div>
            <MarketingCtaArrowCircle size="60" className="pointer-events-none absolute right-0 top-0 hidden lg:block" />
        </Link>
    );
}

function StaticCard({ name, role, thumbSrc, thumbFit }: { name: string; role: string; thumbSrc: string; thumbFit: "cover" | "contain" }) {
    return (
        <article className="flex w-[min(300px,78vw)] flex-col gap-3 sm:w-[min(340px,72vw)] lg:w-[min(400px,28vw)] lg:max-w-[420px]">
            <Link href={VIEW_MORE_HREF} className="block text-inherit no-underline outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-[#0066FF]" aria-label={`${name}, ${role} — alumni success story`}>
                <figure className="m-0">
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100">
                        <Image src={thumbSrc} alt={`${name}, ${role}, HACA Marketing School alumni`} fill className={thumbFit === "contain" ? "object-contain object-center" : "object-cover object-center"} sizes="(max-width: 1024px) 78vw, 400px" />
                    </div>
                    <figcaption className="mt-3 flex flex-col gap-1 text-left">
                        <span className="font-['Satoshi',sans-serif] text-[clamp(16px,1.8vw,18px)] font-bold leading-tight text-black">{name}</span>
                        <span className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,15px)] font-medium leading-snug text-[#6B6B6B]">{role}</span>
                    </figcaption>
                </figure>
            </Link>
        </article>
    );
}

function VideoCard({ video }: { video: ApiVideo }) {
    const [playing, setPlaying] = useState(false);
    const videoId = getYouTubeId(video.youtubeUrl);
    const thumb = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";

    return (
        <article className="flex w-[min(300px,78vw)] flex-col gap-3 sm:w-[min(340px,72vw)] lg:w-[min(400px,28vw)] lg:max-w-[420px]">
            <figure className="m-0">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900">
                    {playing && videoId ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                            title={`${video.name} – career win`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 h-full w-full border-0"
                        />
                    ) : (
                        <button
                            type="button"
                            onClick={() => setPlaying(true)}
                            className="group absolute inset-0 flex h-full w-full items-center justify-center"
                            aria-label={`Play ${video.name}'s story`}
                        >
                            {thumb && (
                                <Image src={thumb} alt={`${video.name} thumbnail`} fill className="object-cover object-center" sizes="(max-width: 1024px) 78vw, 400px" unoptimized />
                            )}
                            <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-200 group-hover:scale-110">
                                <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
                                    <path d="M5 3l14 9-14 9V3z" fill="#0066FF" />
                                </svg>
                            </span>
                        </button>
                    )}
                </div>
                <figcaption className="mt-3 flex flex-col gap-1 text-left">
                    <span className="font-['Satoshi',sans-serif] text-[clamp(16px,1.8vw,18px)] font-bold leading-tight text-black">{video.name}</span>
                    <span className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,15px)] font-medium leading-snug text-[#6B6B6B]">{video.designation}</span>
                </figcaption>
            </figure>
        </article>
    );
}

export function MarketingCareerWinsSection() {
    const [videos, setVideos] = useState<ApiVideo[] | null>(null);

    const load = useCallback(async () => {
        try {
            const base = getPublicBackendBase();
            const res = await fetch(`${base}/api/marketing-career-wins`, { cache: "no-store" });
            if (!res.ok) throw new Error("fetch failed");
            const data = await res.json();
            setVideos(data.videos ?? []);
        } catch {
            setVideos([]);
        }
    }, []);

    useEffect(() => { load(); }, [load]);

    const showDynamic = videos !== null && videos.length > 0;

    return (
        <section
            id="marketing-career-wins"
            className="w-full bg-white text-black"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div className="mx-auto box-border flex w-full min-w-0 max-w-[1440px] min-h-[649.88px] flex-col gap-[100px] p-5 lg:min-h-[699px] lg:gap-[30px] lg:px-[60px] lg:pb-10 lg:pt-[60px]">
                <header className="flex w-full flex-col items-center gap-4 text-center lg:gap-5">
                    <h2
                        id={HEADING_ID}
                        className="m-0 max-w-[min(100%,720px)] font-semibold tracking-[-0.03em] text-black [font-family:'Darker_Grotesque',sans-serif] text-[clamp(1.75rem,5.2vw,3.125rem)] leading-[1.05] [text-rendering:geometricPrecision] lg:text-[55px] lg:leading-[1.08]"
                    >
                        {showDynamic ? "Career Wins You’ll Want to Hear About" : "Alumni Who’ve Made It Big"}
                    </h2>
                    <p className="m-0 max-w-[min(100%,640px)] min-w-0 font-normal leading-[1.55] text-[#4A4A4A] text-[clamp(15px,2vw,17px)] [font-family:'Satoshi',sans-serif] lg:mx-auto lg:w-full lg:max-w-[912px] lg:font-medium lg:text-[17px] lg:leading-[1.5] lg:tracking-[-0.02em] lg:text-center xl:text-[18px]">
                        {INTRO_COPY}
                    </p>
                </header>

                <div className="min-w-0 w-full lg:flex-1 lg:min-h-0">
                    <ul
                        className="m-0 flex list-none flex-row items-stretch gap-6 overflow-x-auto overflow-y-hidden p-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-[30px]"
                        aria-label="Alumni success story videos"
                    >
                        {showDynamic ? (
                            videos.map((v) => (
                                <li key={v._id} className="min-w-0 shrink-0">
                                    <VideoCard video={v} />
                                </li>
                            ))
                        ) : (
                            <>
                                <li className="min-w-0 shrink-0"><StaticCard name="Faseela Usman" role="Creative Co-ordinator" thumbSrc={THUMB_1} thumbFit="cover" /></li>
                                <li className="min-w-0 shrink-0"><StaticCard name="Shamil" role="Digital Marketer" thumbSrc={THUMB_2} thumbFit="contain" /></li>
                                <li className="min-w-0 shrink-0"><StaticCard name="Favas" role="Performance Marketer" thumbSrc={THUMB_3} thumbFit="cover" /></li>
                            </>
                        )}
                    </ul>
                </div>

                <div className="flex w-full shrink-0 items-center justify-center">
                    <CareerWinsViewMoreLink />
                </div>
            </div>
        </section>
    );
}
