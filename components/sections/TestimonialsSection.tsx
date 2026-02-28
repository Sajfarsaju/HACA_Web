"use client"

import Image from "next/image"
import { motion, LayoutGroup } from "framer-motion"
import { useState } from "react"

/* ── Dummy card data — replace content later ── */
const testimonials = [
    { id: 0, gradient: "linear-gradient(135deg, #0d1a4a 0%, #1a4fff22 100%)" },
    { id: 1, gradient: "linear-gradient(135deg, #000319 0%, #25317D55 100%)" },
    { id: 2, gradient: "linear-gradient(135deg, #0d1a4a 0%, #1a4fff22 100%)" },
    { id: 3, gradient: "linear-gradient(135deg, #000319 0%, #25317D55 100%)" },
    { id: 4, gradient: "linear-gradient(135deg, #0d1a4a 0%, #1a4fff22 100%)" },
]

function mod(n: number, m: number) { return ((n % m) + m) % m }

/* Spring transition shared across all card layout animations */
const CARD_SPRING = {
    type: "spring" as const,
    stiffness: 260,
    damping: 26,
    mass: 0.9,
}

export function TestimonialsSection() {
    const [active, setActive] = useState(0)
    const total = testimonials.length

    const leftIdx = mod(active - 1, total)
    const rightIdx = mod(active + 1, total)

    const prev = () => setActive(a => mod(a - 1, total))
    const next = () => setActive(a => mod(a + 1, total))

    return (
        <section className="w-full bg-[#000210] py-[36px] px-0 flex flex-col items-center gap-[36px] box-border overflow-hidden max-md:py-[20px] max-md:gap-[26px]" aria-label="Testimonials">

            {/* ─── Header ─── */}
            <motion.div
                className="w-full max-w-[1440px] px-[60px] box-border flex flex-col items-center gap-[20px] max-md:px-[20px] max-md:gap-[7.97px]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <button className="bg-transparent border-none p-0 cursor-pointer w-[185px] h-[64px] flex items-center shrink-0 transition-transform duration-200 hover:scale-104 active:scale-96 max-md:w-[131.7px] max-md:h-auto" aria-label="Testimonials label">
                    <Image
                        src="/photos/main/testimonials.svg"
                        alt="Testimonials"
                        width={185}
                        height={64}
                        className="w-full h-auto block"
                        priority
                    />
                </button>
                <h2 className="font-rethink font-bold text-[32px] leading-[110%] text-[#ffffff] m-0 text-center w-full max-md:text-[22px] max-md:max-w-[317px]">Hear How Others Made it Happen</h2>
            </motion.div>

            {/* ─── Carousel area ─── */}
            <div className="w-full flex flex-col items-center gap-[20px]">

                {/*
          LayoutGroup makes all layoutId animations in this tree share
          the same coordinate space, enabling the true "cards slide together"
          effect: clicking next grows the right card to center while
          the center shrinks and slides left — no card stays static.
        */}
                <LayoutGroup id="testimonials-carousel">
                    <div className="w-full overflow-hidden flex flex-row items-center justify-center py-[20px] px-0 box-border">

                        {/* LEFT slot — dim peek, click to go back */}
                        <div
                            className="cursor-pointer select-none shrink-0 w-[clamp(80px,12vw,200px)] h-[clamp(170px,22.6vw,325px)] rounded-[clamp(16px,2vw,27px)] overflow-hidden mr-[clamp(8px,1.5vw,20px)] max-md:hidden"
                            onClick={prev}
                            role="button"
                            tabIndex={0}
                            aria-label="Previous testimonial"
                            onKeyDown={e => e.key === "Enter" && prev()}
                        >
                            <motion.div
                                layout
                                layoutId={`tst-card-${leftIdx}`}
                                className="w-full h-full bg-[#000319] border-[clamp(0.7px,0.11vw,1.64px)] border-[#25317D] rounded-[inherit] box-border overflow-hidden max-md:border-[0.53px]"
                                style={{ background: testimonials[leftIdx].gradient }}
                                animate={{ opacity: 0.4, scale: 0.95 }}
                                transition={CARD_SPRING}
                            />
                        </div>

                        {/* CENTER slot — active, full size */}
                        <div className="flex-none w-[clamp(280px,72vw,1037px)] h-[clamp(220px,27.6vw,398px)] rounded-[clamp(14px,2.3vw,33px)] overflow-hidden max-md:w-[min(335px,calc(100vw-40px))] max-md:h-[min(205.32px,calc((100vw-40px)*0.613))] max-md:rounded-[10.6px]">
                            <motion.div
                                layout
                                layoutId={`tst-card-${active}`}
                                className="w-full h-full bg-[#000319] border-[clamp(0.7px,0.11vw,1.64px)] border-[#25317D] rounded-[inherit] box-border overflow-hidden max-md:border-[0.53px]"
                                style={{ background: testimonials[active].gradient }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={CARD_SPRING}
                            >
                                {/* Real Content Block */}
                                <div className="w-full h-full relative overflow-hidden max-md:p-[16px] max-md:flex max-md:flex-col max-md:gap-[10px]">
                                    {/* Quote SVG */}
                                    <Image
                                        src="/photos/main/inverter coma.svg"
                                        alt="Quote mark"
                                        width={210}
                                        height={142}
                                        className="absolute -top-[9.68%] left-[2.97%] w-[20.25%] h-auto pointer-events-none select-none block max-md:static max-md:w-[clamp(40px,12vw,60px)]"
                                        aria-hidden="true"
                                    />

                                    {/* Paragraph */}
                                    <p className="absolute top-[34.03%] left-[4.75%] w-[90.5%] font-rethink font-semibold text-[clamp(14px,1.8vw,26px)] leading-[100%] tracking-[-0.02em] text-[#ffffff] m-0 max-md:static max-md:w-full max-md:text-[14px]">
                                        The digital marketing classes were practical, up to date, and easy to follow. The mentors were incredibly supportive, and the mock interviews really boosted my confidence.
                                    </p>

                                    {/* Author Lockup */}
                                    <div className="absolute top-[73.46%] left-[4.75%] flex flex-col gap-[clamp(2px,0.3vw,5px)] max-md:static max-md:mt-auto">
                                        <h3 className="font-rethink font-semibold text-[clamp(16px,2.08vw,30px)] leading-[100%] tracking-[-0.02em] text-[#ffffff] m-0">Nadha Faizal</h3>
                                        <span className="font-manrope font-medium text-[clamp(10px,1.38vw,20px)] leading-[100%] tracking-[-0.02em] text-[#A7ADBE] m-0">Digital Marketer</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT slot — dim peek, click to go forward */}
                        <div
                            className="cursor-pointer select-none shrink-0 w-[clamp(80px,12vw,200px)] h-[clamp(170px,22.6vw,325px)] rounded-[clamp(16px,2vw,27px)] overflow-hidden ml-[clamp(8px,1.5vw,20px)] max-md:hidden"
                            onClick={next}
                            role="button"
                            tabIndex={0}
                            aria-label="Next testimonial"
                            onKeyDown={e => e.key === "Enter" && next()}
                        >
                            <motion.div
                                layout
                                layoutId={`tst-card-${rightIdx}`}
                                className="w-full h-full bg-[#000319] border-[clamp(0.7px,0.11vw,1.64px)] border-[#25317D] rounded-[inherit] box-border overflow-hidden max-md:border-[0.53px]"
                                style={{ background: testimonials[rightIdx].gradient }}
                                animate={{ opacity: 0.4, scale: 0.95 }}
                                transition={CARD_SPRING}
                            />
                        </div>

                    </div>
                </LayoutGroup>

                {/* ─── Navigation buttons ─── */}
                <div className="flex flex-row items-center gap-[10px] max-md:gap-[6.67px]">
                    <button className="w-[clamp(40px,4.2vw,60px)] h-[clamp(40px,4.2vw,60px)] bg-transparent border-none p-0 cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-90 max-md:w-[40px] max-md:h-[40px]" onClick={prev} aria-label="Previous testimonial">
                        <Image
                            src="/photos/main/left arrow.svg"
                            alt="Previous"
                            width={60}
                            height={60}
                            className="w-full h-full object-contain block"
                        />
                    </button>
                    <button className="w-[clamp(40px,4.2vw,60px)] h-[clamp(40px,4.2vw,60px)] bg-transparent border-none p-0 cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-90 max-md:w-[40px] max-md:h-[40px]" onClick={next} aria-label="Next testimonial">
                        <Image
                            src="/photos/main/right arrow.svg"
                            alt="Next"
                            width={60}
                            height={60}
                            className="w-full h-full object-contain block"
                        />
                    </button>
                </div>

            </div>
        </section>
    )
}
