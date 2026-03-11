"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export function AboutRecognitionSection() {
    const scrollRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        // Measure original content width before duplicating for seamless loop
        const originalWidth = el.scrollWidth
        if (originalWidth <= el.clientWidth) return

        const children = Array.from(el.children)
        const fragment = document.createDocumentFragment()
        children.forEach((child) => {
            fragment.appendChild(child.cloneNode(true))
        })
        el.appendChild(fragment)

        let frame: number
        let last = performance.now()
        let scrollPos = 0
        const speed = 0.05 // px per ms

        const step = (now: number) => {
            const dt = now - last
            last = now

            scrollPos += speed * dt
            if (scrollPos >= originalWidth) {
                scrollPos -= originalWidth
            }
            el.scrollLeft = scrollPos

            frame = requestAnimationFrame(step)
        }

        frame = requestAnimationFrame(step)
        return () => cancelAnimationFrame(frame)
    }, [])

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
                <div
                    ref={scrollRef}
                    className="w-full max-w-[min(1180px,82vw)] flex flex-row items-center justify-start mx-auto gap-[clamp(20px,5vw,40px)] opacity-80 overflow-x-auto flex-nowrap max-md:max-w-[335px] max-md:gap-[clamp(15px,6vw,27.12px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                >
                    {/* Times of India */}
                    <div className="flex items-center justify-center w-[clamp(140px,15vw,229.81px)] h-auto max-md:w-[115px] shrink-0">
                        <Image
                            src="/photos/main/times of india.svg"
                            alt="Times of India"
                            width={230}
                            height={17}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Malayala Manorama */}
                    <div className="flex items-center justify-center w-[clamp(120px,13vw,192.21px)] h-auto max-md:w-[100px] shrink-0">
                        <Image
                            src="/photos/main/malayala manorama.svg"
                            alt="Malayala Manorama"
                            width={192}
                            height={18}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Indian Express */}
                    <div className="flex items-center justify-center w-[clamp(120px,13vw,198.46px)] h-auto max-md:w-[105px] shrink-0">
                        <Image
                            src="/photos/main/indian express.svg"
                            alt="Indian Express"
                            width={198}
                            height={20}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* TEDx */}
                    <div className="flex items-center justify-center w-[clamp(90px,10vw,150px)] h-auto max-md:w-[75px] shrink-0 opacity-70">
                        <Image
                            src="/photos/main/tedx.svg"
                            alt="TEDx"
                            width={240}
                            height={81}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Josh Talks */}
                    <div className="flex items-center justify-center w-[clamp(80px,9vw,130px)] h-auto max-md:w-[65px] shrink-0">
                        <Image
                            src="/photos/main/josh talks.svg"
                            alt="Josh Talks"
                            width={129}
                            height={81}
                            className="w-full h-auto"
                        />
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

