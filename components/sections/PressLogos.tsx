"use client"

import React from "react"
import Image from "next/image"

const LOGOS = [
    {
        key: "toi",
        src: "/photos/main/times of india.svg",
        alt: "Times of India",
        wrapperClass: "flex items-center justify-center w-[clamp(140px,15vw,229.81px)] h-auto max-md:w-[115px] shrink-0",
        width: 230,
        height: 17,
    },
    {
        key: "mm",
        src: "/photos/main/malayala manorama.svg",
        alt: "Malayala Manorama",
        wrapperClass: "flex items-center justify-center w-[clamp(120px,13vw,192.21px)] h-auto max-md:w-[100px] shrink-0",
        width: 192,
        height: 18,
    },
    {
        key: "ie",
        src: "/photos/main/indian express.svg",
        alt: "Indian Express",
        wrapperClass: "flex items-center justify-center w-[clamp(120px,13vw,198.46px)] h-auto max-md:w-[105px] shrink-0",
        width: 198,
        height: 20,
    },
    {
        key: "tedx",
        src: "/photos/main/tedx.svg",
        alt: "TEDx",
        wrapperClass: "flex items-center justify-center w-[clamp(90px,10vw,150px)] h-auto max-md:w-[75px] shrink-0 opacity-70",
        width: 240,
        height: 81,
    },
    {
        key: "josh",
        src: "/photos/main/josh talks.svg",
        alt: "Josh Talks",
        wrapperClass: "flex items-center justify-center w-[clamp(80px,9vw,130px)] h-auto max-md:w-[65px] shrink-0",
        width: 129,
        height: 81,
    },
    {
        key: "press_new_1",
        src: "/photos/main/press new 1.svg",
        alt: "Press Logo 1",
        wrapperClass: "flex items-center justify-center w-[clamp(100px,11vw,160px)] h-auto max-md:w-[85px] shrink-0 border border-transparent",
        width: 160,
        height: 40,
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
