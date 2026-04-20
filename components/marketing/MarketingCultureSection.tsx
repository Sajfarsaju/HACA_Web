import Image from "next/image"
import React from "react"

const ACCENT = "#0066FF"

type CultureTileProps = {
    src: string
    alt: string
    className: string
    priority?: boolean
    sizes?: string
}

function CultureTile({ src, alt, className, priority, sizes }: CultureTileProps) {
    return (
        <div className={`relative w-full min-w-0 overflow-hidden rounded-[10px] bg-[#E9E9E9] ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                quality={100}
                sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
                className="object-cover"
                priority={priority}
            />
        </div>
    )
}

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
            />
        </div>
    )
}

export function MarketingCultureSection() {
    return (
        <section id="marketing-culture" className="w-full bg-white" aria-labelledby="marketing-culture-heading">
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
                            Culture
                        </p>
                    </div>

                    <h2
                        id="marketing-culture-heading"
                        className="
                            w-full min-w-0 max-w-full text-left font-semibold tracking-normal text-black
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,4.8vw,3.125rem)] leading-[1.05]
                            lg:ml-auto lg:flex lg:max-w-[min(100%,720px)] lg:justify-end lg:text-left lg:leading-[1.08]
                        "
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
                        {/* Normalize Figma positions to section padding (baseLeft=16, baseTop=144) */}
                        <div className="mx-auto w-full max-w-[391px] max-[360px]:max-w-[320px]">
                            <div className="relative w-[375px] min-w-0 max-[360px]:[zoom:0.85]" style={{ height: 372 }}>
                                <CultureAbsTile
                                    src="/photos/schools/marketing/culture/rectangle-34.png"
                                    alt="Culture moment"
                                    left={0}
                                    top={3.74}
                                    width={167.6248}
                                    height={243.2933}
                                    radius={5.35}
                                    priority
                                />
                                <CultureAbsTile
                                    src="/photos/schools/marketing/culture/rectangle-36.png"
                                    alt="Culture moment"
                                    left={174.05}
                                    top={0}
                                    width={168.9459}
                                    height={116.1503}
                                    radius={5.35}
                                />
                                <CultureAbsTile
                                    src="/photos/schools/marketing/culture/rectangle-35.png"
                                    alt="Culture moment"
                                    left={174.05}
                                    top={126.71}
                                    width={168.9459}
                                    height={118.4967}
                                    radius={5.35}
                                />
                                <CultureAbsTile
                                    src="/photos/schools/marketing/culture/rectangle-38.png"
                                    alt="Culture moment"
                                    left={0.42}
                                    top={253.42}
                                    width={106.5174}
                                    height={116.5669}
                                    radius={5.35}
                                />
                                <CultureAbsTile
                                    src="/photos/schools/marketing/culture/rectangle-37.png"
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

                    {/* Tablet (md..lg): scaled desktop mosaic */}
                    <div className="hidden w-full min-w-0 md:flex md:justify-center lg:hidden">
                        <div className="w-full max-w-[768px] min-w-0">
                            <div className="mx-auto w-[1320px] md:[zoom:0.58]">
                                <div className="relative w-[1320px]" style={{ height: 693 }}>
                                    <CultureAbsTile
                                        src="/photos/schools/marketing/culture/rectangle-34.png"
                                        alt="Culture moment"
                                        left={0}
                                        top={0}
                                        width={313.4869}
                                        height={455}
                                        priority
                                    />
                                    <CultureAbsTile
                                        src="/photos/schools/marketing/culture/rectangle-36.png"
                                        alt="Culture moment"
                                        left={333.41}
                                        top={0}
                                        width={423.5743}
                                        height={217}
                                    />
                                    <CultureAbsTile
                                        src="/photos/schools/marketing/culture/rectangle-39.png"
                                        alt="Culture moment"
                                        left={776.9}
                                        top={0}
                                        width={207.5933}
                                        height={217}
                                    />
                                    <CultureAbsTile
                                        src="/photos/schools/marketing/culture/rectangle-41.png"
                                        alt="Culture moment"
                                        left={1004.42}
                                        top={0}
                                        width={315.5838}
                                        height={335}
                                    />
                                    <CultureAbsTile
                                        src="/photos/schools/marketing/culture/rectangle-35.png"
                                        alt="Culture moment"
                                        left={333.41}
                                        top={238}
                                        width={315.5838}
                                        height={217}
                                    />
                                    <CultureAbsTile
                                        src="/photos/schools/marketing/culture/rectangle-40.png"
                                        alt="Culture moment"
                                        left={668.91}
                                        top={238}
                                        width={315.5838}
                                        height={455}
                                    />
                                    <CultureAbsTile
                                        src="/photos/schools/marketing/culture/rectangle-38.png"
                                        alt="Culture moment"
                                        left={0}
                                        top={475}
                                        width={199.2057}
                                        height={218}
                                    />
                                    <CultureAbsTile
                                        src="/photos/schools/marketing/culture/rectangle-37.png"
                                        alt="Culture moment"
                                        left={222.27}
                                        top={475}
                                        width={426.7196}
                                        height={218}
                                    />
                                    <CultureAbsTile
                                        src="/photos/schools/marketing/culture/rectangle-42.png"
                                        alt="Culture moment"
                                        left={1004.42}
                                        top={358}
                                        width={315.5838}
                                        height={335}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop: exact pixel-perfect mosaic from Figma */}
                    <div className="hidden w-full min-w-0 lg:flex lg:justify-center">
                        {/* Canvas is 1320px wide; positions are relative to left=60 in Figma */}
                        <div className="relative w-full max-w-[1320px] min-w-0" style={{ height: 693 }}>
                            <CultureAbsTile
                                src="/photos/schools/marketing/culture/rectangle-34.png"
                                alt="Culture moment"
                                left={0}
                                top={0}
                                width={313.4869}
                                height={455}
                                priority
                            />
                            <CultureAbsTile
                                src="/photos/schools/marketing/culture/rectangle-36.png"
                                alt="Culture moment"
                                left={333.41}
                                top={0}
                                width={423.5743}
                                height={217}
                            />
                            <CultureAbsTile
                                src="/photos/schools/marketing/culture/rectangle-39.png"
                                alt="Culture moment"
                                left={776.9}
                                top={0}
                                width={207.5933}
                                height={217}
                            />
                            <CultureAbsTile
                                src="/photos/schools/marketing/culture/rectangle-41.png"
                                alt="Culture moment"
                                left={1004.42}
                                top={0}
                                width={315.5838}
                                height={335}
                            />
                            <CultureAbsTile
                                src="/photos/schools/marketing/culture/rectangle-35.png"
                                alt="Culture moment"
                                left={333.41}
                                top={238}
                                width={315.5838}
                                height={217}
                            />
                            <CultureAbsTile
                                src="/photos/schools/marketing/culture/rectangle-40.png"
                                alt="Culture moment"
                                left={668.91}
                                top={238}
                                width={315.5838}
                                height={455}
                            />
                            <CultureAbsTile
                                src="/photos/schools/marketing/culture/rectangle-38.png"
                                alt="Culture moment"
                                left={0}
                                top={475}
                                width={199.2057}
                                height={218}
                            />
                            <CultureAbsTile
                                src="/photos/schools/marketing/culture/rectangle-37.png"
                                alt="Culture moment"
                                left={222.27}
                                top={475}
                                width={426.7196}
                                height={218}
                            />
                            <CultureAbsTile
                                src="/photos/schools/marketing/culture/rectangle-42.png"
                                alt="Culture moment"
                                left={1004.42}
                                top={358}
                                width={315.5838}
                                height={335}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

