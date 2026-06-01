"use client"

import React from "react"
import Image from "next/image"

// ── Card data — real event images ───────────────────────────────────────────
const CARDS: { src?: string; alt: string; bg: string }[] = [
    { src: "/photos/main/events/DSC05453 1.webp", alt: "Event photo 1", bg: "#1E2A5E" },
    { src: "/photos/main/events/DSC09981.webp", alt: "Event photo 2", bg: "#2D3E7F" },
    { src: "/photos/main/events/DD7455A9-4DB5-4195-A12F-41757CA2DD94.webp", alt: "Event photo 3", bg: "#3A50B0" },
    { src: "/photos/main/events/Rectangle 14.webp", alt: "Event photo 4", bg: "#4A62D1" },
    { src: "/photos/main/events/DSC04963 1.webp", alt: "Event photo 5", bg: "#1E2A5E" },
    { src: "/photos/main/events/DSC08138 1.webp", alt: "Event photo 6", bg: "#2D3E7F" },
    { src: "/photos/main/events/Rectangle 10.webp", alt: "Event photo 7", bg: "#2D3E7F" },
    { src: "/photos/main/events/Rectangle 12.webp", alt: "Event photo 8", bg: "#3A50B0" },
]

/** Pattern: two landscape (456×307) + one portrait (180×307); same height 307 at max scale */
function isPortraitSlot(index: number) {
    return index % 3 === 2
}

const TRACK = [...CARDS, ...CARDS]

export function PhotoGallery() {
    return (
        <section
            id="photo-gallery"
            className="w-full flex justify-center overflow-hidden relative h-[354px] max-[1024px]:h-[330px] max-md:h-[225px]"
        >
            <style>{`
                @keyframes photo-marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .photo-marquee-track {
                    animation: photo-marquee 38s linear infinite;
                    will-change: transform;
                }
                .photo-marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="w-full section-4k mx-auto h-full relative shadow-[0px_4px_4px_0px_#00000040] max-[1024px]:w-[95%] max-[1024px]:max-w-[1100px] max-[900px]:w-full max-md:w-screen max-md:max-w-none max-md:left-1/2 max-md:-translate-x-1/2 overflow-hidden flex items-center">
                
                {/* Wrapper that exactly matches the height of the photos */}
                <div className="relative w-full h-[307px] max-[1024px]:h-[280px] max-md:h-[180px] flex items-center">
                    
                    <div className="photo-marquee-track flex gap-[16px] h-full items-center w-max px-0 py-0 max-md:gap-[13.67px]">
                        {TRACK.map((card, index) => {
                            const portrait = isPortraitSlot(index)
                            return (
                                <div
                                    key={index}
                                    className={
                                        portrait
                                            ? "flex-none relative overflow-hidden rounded-[12px] h-[307px] w-auto aspect-[180/307] max-[1024px]:h-[280px] max-[1024px]:aspect-[180/307] max-md:h-[180px] max-md:aspect-[180/307]"
                                            : "flex-none relative overflow-hidden rounded-[12px] h-[307px] w-auto aspect-[456/307] max-[1024px]:h-[280px] max-[1024px]:aspect-[456/307] max-md:h-[180px] max-md:aspect-[456/307]"
                                    }
                                    style={{ backgroundColor: card.bg }}
                                >
                                    {card.src && (
                                        <Image
                                            src={card.src}
                                            alt={card.alt}
                                            fill
                                            priority={index < 8}
                                            className="object-cover rounded-[12px]"
                                            sizes={
                                                portrait
                                                    ? "(max-width: 768px) 106px, (max-width: 1024px) 164px, 180px"
                                                    : "(max-width: 768px) 267px, (max-width: 1024px) 415px, 456px"
                                            }
                                        />
                                    )}
                                </div>
                            )
                        })}
                    </div>

                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(89.96deg,_#01051C_0.03%,_rgba(0,0,0,0)_39.57%,_rgba(0,0,0,0)_72.75%,_#01051C_101.57%)] max-[900px]:-inset-x-px max-[900px]:bg-[linear-gradient(90deg,_#01051C_0%,_rgba(1,5,28,0)_36%,_rgba(1,5,28,0)_64%,_#01051C_100%)]" />
                </div>
            </div>
        </section>
    )
}
