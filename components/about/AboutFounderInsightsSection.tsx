"use client"

import Image from "next/image"

export function AboutFounderInsightsSection() {
    const cards = [
        "/photos/main/thumbnail 1.png",
        "/photos/main/thumbnail 2.png",
        "/photos/main/thumbnail 3.png",
    ]
    const track = Array(6).fill(cards).flat()

    return (
        <section className="w-full section-4k mx-auto bg-[#000210] py-[40px] flex flex-col items-center gap-[clamp(30px,4vw,50px)] px-[clamp(20px,4vw,60px)]">
            {/* Heading */}
            <h2 className="w-full max-w-[1320px] font-rethink font-medium text-[clamp(26px,2.2vw,36px)] leading-[34px] text-white m-0 max-md:max-w-[335px] max-md:font-semibold max-md:leading-[110%] max-md:text-center">
                Founder Insights &amp; Industry Talks
            </h2>

            <style>{`
                @keyframes founder-insights-marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .founder-insights-track {
                    animation: founder-insights-marquee 34s linear infinite;
                    will-change: transform;
                }
                .founder-insights-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Infinite auto-scroll track */}
            <div className="w-screen max-w-none overflow-hidden pb-2 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
                <div className="founder-insights-track flex flex-row items-stretch gap-[clamp(12.18px,2vw,25.88px)] w-max">
                {track.map((thumbnail, i) => (
                    <article
                        key={i}
                        className="relative flex-shrink-0 w-[clamp(258.55px,38vw,549.42px)] aspect-[549.42/301.88] rounded-[clamp(7.76px,1.2vw,16.49px)] border border-[#232D6B] overflow-hidden bg-[#10152F] py-[clamp(16.63px,2.4vw,35.33px)] px-[clamp(8.87px,1.3vw,18.84px)] max-md:border-[0.78px] md:border-[1px]"
                    >
                        {/* Card background thumbnail */}
                        <Image
                            src={thumbnail}
                            alt={`Founder insight thumbnail ${i + 1}`}
                            fill
                            className="absolute inset-0 object-cover"
                            sizes="(max-width: 768px) 260px, (max-width: 1200px) 40vw, 550px"
                        />
                        <div className="absolute inset-0 bg-[#10152F]/12" />

                        {/* Centered play/pause button */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 w-[clamp(30px,3.5vw,50px)] h-[clamp(30px,3.5vw,50px)]">
                                {/* Play triangle */}
                                <svg
                                    className="w-[40%] h-[40%] text-white ml-0.5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </article>
                ))}
                </div>
            </div>
        </section>
    )
}
