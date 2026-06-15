"use client";

import Image from "next/image"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { getPublicBackendBase } from "@/lib/placements-api"

const ACCENT = "#0066FF"

type CultureAbsTileProps = {
    src: string
    alt: string
    left: number
    top: number
    width: number
    height: number
    priority?: boolean
    radius?: number
}

function CultureAbsTile({ src, alt, left, top, width, height, priority, radius = 10 }: CultureAbsTileProps) {
    return (
        <div
            className="absolute overflow-hidden bg-[#E9E9E9]"
            style={{ left, top, width, height, borderRadius: radius }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                quality={100}
                sizes={`${Math.ceil(width)}px`}
                className="object-cover"
                priority={priority}
                unoptimized={src.startsWith("http")}
            />
        </div>
    )
}

// Slot-to-static-fallback map (slots 0-8 in order of desktop layout)
const STATIC_FALLBACK: Record<number, string> = {
    0: "/photos/schools/marketing/culture/rectangle-34.webp",
    1: "/photos/schools/marketing/culture/rectangle-36.webp",
    2: "/photos/schools/marketing/culture/rectangle-39.webp",
    3: "/photos/schools/marketing/culture/rectangle-41.webp",
    4: "/photos/schools/marketing/culture/rectangle-35.webp",
    5: "/photos/schools/marketing/culture/rectangle-40.webp",
    6: "/photos/schools/marketing/culture/rectangle-38.webp",
    7: "/photos/schools/marketing/culture/rectangle-37.webp",
    8: "/photos/schools/marketing/culture/rectangle-42.webp",
}

export function MarketingCultureSection() {
    const desktopViewportRef = useRef<HTMLDivElement | null>(null)
    const [desktopScale, setDesktopScale] = useState(1)
    const [photoMap, setPhotoMap] = useState<Map<number, string>>(new Map())

    const mobileViewportRef = useRef<HTMLDivElement | null>(null)
    const [mobileScale, setMobileScale] = useState(1)

    // Desktop: don't subtract any extra gutter beyond the section padding.
    const desktopGutterPx = useMemo(() => 0, [])

    useEffect(() => {
        const el = desktopViewportRef.current
        if (!el) return

        const BASE_WIDTH = 1320

        const compute = () => {
            const available = el.clientWidth - desktopGutterPx * 2
            const next = Math.min(1, Math.max(0.5, available / BASE_WIDTH))
            setDesktopScale(next)
        }

        compute()

        const ro = new ResizeObserver(() => compute())
        ro.observe(el)
        return () => ro.disconnect()
    }, [desktopGutterPx])

    useEffect(() => {
        const el = mobileViewportRef.current
        if (!el) return

        // Mobile mosaic was authored in pixels; scale it to the available width
        // (inside the section padding) so large phones don't show extra side gaps.
        const BASE_W = 343
        const MIN_S = 0.85
        const MAX_S = 1.35

        const compute = () => {
            const available = el.clientWidth
            const next = Math.min(MAX_S, Math.max(MIN_S, available / BASE_W))
            setMobileScale(next)
        }

        compute()
        const ro = new ResizeObserver(() => compute())
        ro.observe(el)
        return () => ro.disconnect()
    }, [])

    useEffect(() => {
        fetch(`${getPublicBackendBase()}/api/culture-photos?school=${encodeURIComponent("Marketing School")}`)
            .then((r) => (r.ok ? r.json() : null))
            .then((data: { photos?: { slotIndex: number; imageUrl: string }[] } | null) => {
                if (data?.photos && data.photos.length > 0) {
                    const map = new Map<number, string>()
                    for (const p of data.photos) map.set(p.slotIndex, p.imageUrl)
                    setPhotoMap(map)
                }
            })
            .catch(() => {})
    }, [])

    // API photo takes priority; fall back to static local file
    const p = (slot: number) => photoMap.get(slot) ?? STATIC_FALLBACK[slot]

    return (
        <section
            id="marketing-culture"
            className="w-full"
            aria-labelledby="marketing-culture-heading"
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
                    <div className="flex shrink-0 items-center gap-[clamp(10px,1.5vw,14px)] lg:pt-2">
                        <span
                            className="h-[10px] w-[10px] shrink-0 rounded-full lg:h-3 lg:w-3"
                            style={{ backgroundColor: ACCENT }}
                            aria-hidden
                        />
                        <p
                            className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,16px)] font-medium leading-none tracking-normal"
                            style={{ color: "var(--cy-text, #FFFFFF)", transition: "color 0.55s ease" }}
                        >
                            Culture
                        </p>
                    </div>

                    <h2
                        id="marketing-culture-heading"
                        className="
                            w-full min-w-0 max-w-full text-left font-semibold tracking-normal
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,4.8vw,3.125rem)] leading-[1.05]
                            lg:ml-auto lg:flex lg:max-w-[min(100%,720px)] lg:justify-end lg:text-left lg:leading-[1.08]
                        "
                        style={{ color: "var(--cy-text, #FFFFFF)", transition: "color 0.55s ease" }}
                    >
                        <span className="inline-block text-left">
                            <span className="block">The Energy Here Feels</span>
                            <span className="block">Different</span>
                        </span>
                    </h2>
                </header>

                {/* Mosaic dummy cards (desktop) + simple stack (mobile) */}
                <div className="w-full min-w-0">
                    {/* Mobile layout: exact pixel sizes/positions */}
                    <div className="md:hidden">
                        <div ref={mobileViewportRef} className="w-full min-w-0">
                            <div
                                className="relative min-w-0"
                                style={{
                                    width: 343 * mobileScale,
                                    height: 372 * mobileScale,
                                }}
                            >
                                <div
                                    className="relative"
                                    style={{
                                        width: 343,
                                        height: 372,
                                        transform: `scale(${mobileScale})`,
                                        transformOrigin: "top left",
                                    }}
                                >
                                <CultureAbsTile
                                    src={p(0)}
                                    alt="Culture moment"
                                    left={0}
                                    top={3.74}
                                    width={167.6248}
                                    height={243.2933}
                                    radius={5.35}
                                    priority
                                />
                                <CultureAbsTile
                                    src={p(1)}
                                    alt="Culture moment"
                                    left={174.05}
                                    top={0}
                                    width={168.9459}
                                    height={116.1503}
                                    radius={5.35}
                                />
                                <CultureAbsTile
                                    src={p(4)}
                                    alt="Culture moment"
                                    left={174.05}
                                    top={126.71}
                                    width={168.9459}
                                    height={118.4967}
                                    radius={5.35}
                                />
                                <CultureAbsTile
                                    src={p(6)}
                                    alt="Culture moment"
                                    left={0.42}
                                    top={253.42}
                                    width={106.5174}
                                    height={116.5669}
                                    radius={5.35}
                                />
                                <CultureAbsTile
                                    src={p(7)}
                                    alt="Culture moment"
                                    left={114.57}
                                    top={253.99}
                                    width={228.1715}
                                    height={116.5669}
                                    radius={5.35}
                                />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tablet (md..lg): scaled desktop mosaic */}
                    <div className="hidden w-full min-w-0 md:flex md:justify-center lg:hidden">
                        <div className="w-full max-w-[768px] min-w-0">
                            <div className="mx-auto w-[1320px] md:[zoom:0.58]">
                                <div className="relative w-[1320px]" style={{ height: 693 }}>
                                    <CultureAbsTile src={p(0)} alt="Culture moment" left={0} top={0} width={313.4869} height={455} priority />
                                    <CultureAbsTile src={p(1)} alt="Culture moment" left={333.41} top={0} width={423.5743} height={217} />
                                    <CultureAbsTile src={p(2)} alt="Culture moment" left={776.9} top={0} width={207.5933} height={217} />
                                    <CultureAbsTile src={p(3)} alt="Culture moment" left={1004.42} top={0} width={315.5838} height={335} />
                                    <CultureAbsTile src={p(4)} alt="Culture moment" left={333.41} top={238} width={315.5838} height={217} />
                                    <CultureAbsTile src={p(5)} alt="Culture moment" left={668.91} top={238} width={315.5838} height={455} />
                                    <CultureAbsTile src={p(6)} alt="Culture moment" left={0} top={475} width={199.2057} height={218} />
                                    <CultureAbsTile src={p(7)} alt="Culture moment" left={222.27} top={475} width={426.7196} height={218} />
                                    <CultureAbsTile src={p(8)} alt="Culture moment" left={1004.42} top={358} width={315.5838} height={335} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop: exact pixel-perfect mosaic from Figma */}
                    <div className="hidden w-full min-w-0 lg:flex lg:justify-center">
                        <div ref={desktopViewportRef} className="flex w-full min-w-0 justify-center overflow-visible">
                            <div
                                className="cultureMosaic w-[1320px]"
                                style={{
                                    transform: `scale(${desktopScale})`,
                                    transformOrigin: "top center",
                                }}
                            >
                                <div className="relative h-[693px] w-[1320px]">
                                    <CultureAbsTile src={p(0)} alt="Culture moment" left={0} top={0} width={313.4869} height={455} priority />
                                    <CultureAbsTile src={p(1)} alt="Culture moment" left={333.41} top={0} width={423.5743} height={217} />
                                    <CultureAbsTile src={p(2)} alt="Culture moment" left={776.9} top={0} width={207.5933} height={217} />
                                    <CultureAbsTile src={p(3)} alt="Culture moment" left={1004.42} top={0} width={315.5838} height={335} />
                                    <CultureAbsTile src={p(4)} alt="Culture moment" left={333.41} top={238} width={315.5838} height={217} />
                                    <CultureAbsTile src={p(5)} alt="Culture moment" left={668.91} top={238} width={315.5838} height={455} />
                                    <CultureAbsTile src={p(6)} alt="Culture moment" left={0} top={475} width={199.2057} height={218} />
                                    <CultureAbsTile src={p(7)} alt="Culture moment" left={222.27} top={475} width={426.7196} height={218} />
                                    <CultureAbsTile src={p(8)} alt="Culture moment" left={1004.42} top={358} width={315.5838} height={335} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (min-width: 1024px) {
                    #marketing-culture .cultureMosaic {
                        --cultureGutter: clamp(12px, 2vw, 28px);
                        transform: scale(
                            min(
                                1,
                                calc((min(1320px, 100%) - (2 * var(--cultureGutter))) / 1320)
                            )
                        );
                    }
                }
            `}</style>
        </section>
    )
}
