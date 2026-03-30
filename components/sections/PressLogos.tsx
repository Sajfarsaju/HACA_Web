"use client"

import React from "react"
import Image from "next/image"

function pressLogoSrc(filename: string) {
    // Filenames contain spaces; encode them for a safe URL path.
    return `/photos/main/${encodeURIComponent(filename)}`
}

const LOGOS = [
    {
        key: "toi",
        src: "/photos/main/times of india.svg",
        alt: "Times of India",
        wrapperClass: "flex items-center justify-center w-[clamp(140px,15vw,229.81px)] h-auto max-md:w-[100px]",
        width: 230,
        height: 17,
    },
    {
        key: "mm",
        src: "/photos/main/malayala manorama.svg",
        alt: "Malayala Manorama",
        wrapperClass: "flex items-center justify-center w-[clamp(120px,13vw,192.21px)] h-auto max-md:w-[85px]",
        width: 192,
        height: 18,
    },
    {
        key: "ie",
        src: "/photos/main/indian express.svg",
        alt: "Indian Express",
        wrapperClass: "flex items-center justify-center w-[clamp(120px,13vw,198.46px)] h-auto max-md:w-[90px]",
        width: 198,
        height: 20,
    },
    {
        key: "press-1",
        src: pressLogoSrc("press logos new 1.png"),
        alt: "Press logo 1",
        wrapperClass: "flex items-center justify-center w-[clamp(120px,13vw,210px)] h-auto max-md:w-[90px]",
        width: 164,
        height: 88,
    },
    {
        key: "press-2",
        src: pressLogoSrc("press logos new 2.png"),
        alt: "Press logo 2",
        wrapperClass: "flex items-center justify-center w-[clamp(120px,13vw,210px)] h-auto max-md:w-[90px]",
        width: 2000,
        height: 358,
    },
    {
        key: "press-3",
        src: pressLogoSrc("press logos new 3.png"),
        alt: "Press logo 3",
        wrapperClass: "flex items-center justify-center w-[clamp(120px,13vw,210px)] h-auto max-md:w-[90px]",
        width: 800,
        height: 234,
    },
    {
        key: "press-4",
        src: pressLogoSrc("press logos new 4.png"),
        alt: "Press logo 4",
        wrapperClass: "flex items-center justify-center w-[clamp(120px,13vw,210px)] h-auto max-md:w-[90px]",
        width: 10200,
        height: 1860,
    },
    {
        key: "press-5",
        src: pressLogoSrc("press logos new 5.jpg"),
        alt: "Press logo 5",
        wrapperClass: "flex items-center justify-center w-[clamp(120px,13vw,230px)] h-auto max-md:w-[100px]",
        width: 2681,
        height: 301,
    },
]

// Repeat logos multiple times so the marquee feels visually "infinite"
const TRACK = Array(6)
    .fill(LOGOS)
    .flat()

export function PressLogos() {
    return (
        <section className="w-full h-[91.81px] flex items-center justify-center mx-auto gap-[26px] opacity-100 relative max-md:w-full max-md:h-auto max-md:min-h-[14px] max-md:py-[10px] max-md:px-0 max-md:gap-[15px] max-md:opacity-50">
            <style>{`
                @keyframes press-marquee {
                    0%   { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .press-marquee-track {
                    animation: press-marquee 32s linear infinite;
                    will-change: transform;
                }
                .press-marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="w-full h-auto overflow-hidden opacity-50">
                <div className="press-marquee-track flex items-center gap-[clamp(20px,5vw,68.76px)] max-md:gap-[clamp(15px,6vw,27.12px)] w-max">
                    {TRACK.map((logo, index) => (
                        <div key={`${logo.key}-${index}`} className={logo.wrapperClass}>
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
