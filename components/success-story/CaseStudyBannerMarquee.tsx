import Image from "next/image"
import Link from "next/link"
import type { CaseStudy } from "@/lib/case-study-data"

function buildLoop<T>(items: T[], minCount = 8): T[] {
    if (items.length === 0) return []
    const reps = Math.max(2, Math.ceil(minCount / items.length))
    const looped = Array.from({ length: reps }, () => items).flat()
    return [...looped, ...looped]
}

function BannerCard({ item, tabIndex }: { item: CaseStudy; tabIndex?: number }) {
    return (
        <Link
            href={`/case-studies/${item.slug}`}
            tabIndex={tabIndex}
            className="group relative h-[140px] w-[240px] shrink-0 overflow-hidden rounded-[10px] border border-[#232D6B]/30 bg-[#0A0C16] transition-colors duration-300 hover:border-[#232D6B] sm:h-[170px] sm:w-[290px] lg:h-[220px] lg:w-[380px]"
            aria-label={`Read case study: ${item.title}`}
        >
            <Image
                src={item.bannerUrl || "/photos/main/blog cover.webp"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 290px, 380px"
                unoptimized={Boolean(item.bannerUrl?.startsWith("http"))}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span className="absolute bottom-0 left-0 right-0 line-clamp-2 p-3 font-rethink text-[13px] font-semibold leading-[1.3] text-white sm:text-[15px]">
                {item.title}
            </span>
        </Link>
    )
}

export function CaseStudyBannerMarquee({ items }: { items: CaseStudy[] }) {
    const withBanners = items.filter((item) => item.bannerUrl)
    if (withBanners.length === 0) return null

    const loop = buildLoop(withBanners, 8)

    return (
        <div className="w-full">
            <style>{`
                @keyframes cs-banner-marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .cs-banner-track {
                    animation: cs-banner-marquee 38s linear infinite;
                    will-change: transform;
                }
                .cs-banner-track:hover {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .cs-banner-track { animation: none; transform: none; }
                }
            `}</style>
            <div className="relative w-full overflow-x-hidden">
                <div className="cs-banner-track flex w-max flex-row gap-4 sm:gap-5 lg:gap-6">
                    {loop.map((item, i) => (
                        <BannerCard key={`${item.id}-${i}`} item={item} tabIndex={i < withBanners.length ? 0 : -1} />
                    ))}
                </div>
            </div>
        </div>
    )
}
