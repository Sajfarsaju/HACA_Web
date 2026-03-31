"use client"

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

// Repeat to keep the marquee feeling infinite
const TRACK = Array(6).fill(LOGOS).flat()

export function AboutRecognitionSection() {
    return (
        <section className="w-full section-4k mx-auto bg-[#000210] px-[clamp(20px,4vw,60px)] py-[40px] flex flex-col items-center gap-[30px]">
            {/* First container: heading + paragraph */}
            <div className="w-full max-w-[1320px] flex flex-col items-center gap-[20px] max-md:max-w-[335px]">
                <h2 className="w-full font-rethink font-semibold text-[clamp(26px,2.4vw,36px)] leading-[clamp(30px,2.2vw,34px)] text-center text-white m-0">
                    Recognition, Media &amp; Awards
                </h2>
                <p className="w-full font-rethink font-medium text-[clamp(16px,1.25vw,20px)] leading-[clamp(28px,2.1vw,34px)] text-center text-[#A7ADBE] m-0">
                    HACA’s work in skill-based education has been recognised across leading platforms.
                </p>
            </div>

            {/* Second container: heading + logos (like PressLogos) */}
            <div className="w-full max-w-[1320px] flex flex-col items-center gap-[10px]">
                <h3 className="w-full font-rethink font-medium text-[20px] leading-[34px] text-center text-white m-0 max-md:max-w-[335px]">
                    Featured On:
                </h3>

                <style>{`
                    @keyframes about-recognition-marquee {
                        0%   { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .about-recognition-track {
                        animation: about-recognition-marquee 34s linear infinite;
                        will-change: transform;
                    }
                    .about-recognition-track:hover {
                        animation-play-state: paused;
                    }
                `}</style>

                <div className="w-screen max-w-none overflow-hidden opacity-80 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
                    <div className="about-recognition-track flex flex-row items-center justify-start gap-[clamp(20px,5vw,40px)] max-md:gap-[clamp(15px,6vw,27.12px)] w-max">
                        {TRACK.map((logo, idx) => (
                            <div key={`${logo.key}-${idx}`} className={logo.wrapperClass}>
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
            </div>

            {/* Third container: Award heading + SVG */}
            <div className="w-full max-w-[1320px] flex flex-col items-center gap-[clamp(10px,2vw,30px)]">
                <h3 className="w-full font-rethink font-medium text-[clamp(20px,1.7vw,24px)] leading-[34px] text-center text-white m-0 max-md:max-w-[335px]">
                    Award:
                </h3>
                <div className="flex items-center justify-center w-full max-w-[400px] max-md:max-w-[335px]">
                    <Image
                        src="/photos/main/World-Education-Summit 1.svg"
                        alt="World Education Summit Award"
                        width={200}
                        height={52}
                        className="w-[clamp(260px,22vw,380px)] max-md:w-[200px] h-auto"
                    />
                </div>
            </div>
        </section>
    )
}

