"use client";

import React from "react";
import Image from "next/image";

// NOTE: This is intentionally NOT reusing `components/sections/PressLogos.tsx`.
// Design School has its own press logo set.
const LOGOS = [
    {
        key: "dsn_press_1",
        src: "/photos/schools/design/dsn press logo 1.svg",
        alt: "Design press logo 1",
        wrapperClass: "flex items-center justify-center w-[clamp(140px,15vw,229.81px)] h-auto max-md:w-[115px] shrink-0",
        width: 230,
        height: 60,
    },
    {
        key: "dsn_press_2",
        src: "/photos/schools/design/dsn press logo 2.svg",
        alt: "Design press logo 2",
        wrapperClass: "flex items-center justify-center w-[clamp(120px,13vw,192.21px)] h-auto max-md:w-[100px] shrink-0",
        width: 192,
        height: 60,
    },
    {
        key: "dsn_press_3",
        src: "/photos/schools/design/dsn press logo 3.svg",
        alt: "Design press logo 3",
        wrapperClass: "flex items-center justify-center w-[clamp(120px,13vw,198.46px)] h-auto max-md:w-[105px] shrink-0",
        width: 198,
        height: 60,
    },
] as const;

// Repeat logos multiple times so the marquee feels visually "infinite"
const TRACK = Array(6).fill(LOGOS).flat();

export function DesignPressLogos() {
    return (
        <section className="w-full h-[91.81px] flex items-center justify-center mx-auto gap-[26px] opacity-100 relative max-md:w-full max-md:h-auto max-md:min-h-[14px] max-md:py-[10px] max-md:px-0 max-md:gap-[15px]">
            <style>{`
                @keyframes design-press-marquee {
                    0%   { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .design-press-marquee-track {
                    animation: design-press-marquee 32s linear infinite;
                    will-change: transform;
                }
                .design-press-marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="w-full h-auto overflow-hidden">
                <div className="design-press-marquee-track flex items-center gap-[clamp(20px,5vw,68.76px)] max-md:gap-[clamp(15px,6vw,27.12px)] w-max">
                    {TRACK.map((logo, index) => (
                        <div key={`${logo.key}-${index}`} className={logo.wrapperClass}>
                            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="w-full h-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

