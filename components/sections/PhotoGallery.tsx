"use client"

import React from "react"
import Image from "next/image"

// ── Card data — real event images ───────────────────────────────────────────
const CARDS: { src?: string; alt: string; bg: string }[] = [
    { src: "/photos/main/events/DSC05453 1.png", alt: "Event photo 1", bg: "#1E2A5E" },
    { src: "/photos/main/events/DSC09981.JPG", alt: "Event photo 2", bg: "#2D3E7F" },
    { src: "/photos/main/events/DD7455A9-4DB5-4195-A12F-41757CA2DD94.webp", alt: "Event photo 3", bg: "#3A50B0" },
    { src: "/photos/main/events/Rectangle 14.png", alt: "Event photo 4", bg: "#4A62D1" },
    { src: "/photos/main/events/DSC04963 1.png", alt: "Event photo 5", bg: "#1E2A5E" },
    { src: "/photos/main/events/DSC08138 1.png", alt: "Event photo 6", bg: "#2D3E7F" },
    { src: "/photos/main/events/Rectangle 10.png", alt: "Event photo 7", bg: "#2D3E7F" },
    { src: "/photos/main/events/Rectangle 12.png", alt: "Event photo 8", bg: "#3A50B0" },
]

// Duplicate for seamless infinite loop
const TRACK = [...CARDS, ...CARDS]

export function PhotoGallery() {
    return (
        <section
            id="photo-gallery"
            className="w-full h-[354px] flex justify-center overflow-hidden relative max-[1024px]:h-[330px] max-md:h-[225px]"
        >
            {/* CSS keyframes */}
            <style>{`
                @keyframes photo-marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .photo-marquee-track {
                    animation: photo-marquee 38s linear infinite;
                    will-change: transform;
                    /* pause on hover so users can look at a card */
                }
                .photo-marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="w-full section-4k mx-auto h-[354px] relative shadow-[0px_4px_4px_0px_#00000040] max-[1024px]:h-[310px] max-[1024px]:w-[95%] max-[1024px]:max-w-[1100px] max-md:h-[203px] max-md:-top-[0.91px] max-md:max-w-full overflow-hidden">

                {/* Scrolling track — doubled list so it loops without a jump */}
                <div className="photo-marquee-track flex gap-[16px] h-full w-max px-0 py-0 max-md:gap-[13.67px]">
                    {TRACK.map((card, index) => (
                        <div
                            key={index}
                            className="flex-none w-[440px] h-full rounded-[20px] relative overflow-hidden max-[1024px]:w-[380px] max-md:w-[252px] max-md:rounded-[11.47px]"
                            style={{ backgroundColor: card.bg }}
                        >
                            {card.src && (
                                <Image
                                    src={card.src}
                                    alt={card.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width:768px) 252px, (max-width:1024px) 380px, 440px"
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Left + right edge fade */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(89.96deg,_#01051C_0.03%,_rgba(0,0,0,0)_39.57%,_rgba(0,0,0,0)_72.75%,_#01051C_101.57%)]" />
            </div>
        </section>
    )
}
