"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useCallback, useEffect } from "react"

/* ── Testimonial card data ── */
const testimonials = [
    { id: 0, gradient: "linear-gradient(135deg, #0d1a4a 0%, #1a4fff22 100%)", quote: "The digital marketing classes were practical, up to date, and easy to follow. The mentors were incredibly supportive, and the mock interviews really boosted my confidence.", name: "Nadha Faizal", role: "Digital Marketer" },
    { id: 1, gradient: "linear-gradient(135deg, #000319 0%, #25317D55 100%)", quote: "HACA's design school gave me the skills to land my dream job. The portfolio projects were exactly what recruiters wanted to see.", name: "Priya Sharma", role: "UI/UX Designer" },
    { id: 2, gradient: "linear-gradient(135deg, #0d1a4a 0%, #1a4fff22 100%)", quote: "I switched from a non-tech background to a developer role in 6 months. The tech school curriculum is intense but worth every hour.", name: "Arjun Mehta", role: "Full Stack Developer" },
    { id: 3, gradient: "linear-gradient(135deg, #000319 0%, #25317D55 100%)", quote: "The finance courses helped me understand real-world analysis. Now I work at a leading investment firm.", name: "Sneha Reddy", role: "Financial Analyst" },
    { id: 4, gradient: "linear-gradient(135deg, #0d1a4a 0%, #1a4fff22 100%)", quote: "Best decision I made for my career. The placement support and industry connections opened doors I never thought possible.", name: "Rahul Kumar", role: "Marketing Manager" },
]

function mod(n: number, m: number) { return ((n % m) + m) % m }

function getOffset(index: number, active: number, total: number) {
    let diff = index - active
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
}

/* Card inner content */
function TestimonialCardContent({ t }: { t: (typeof testimonials)[0] }) {
    return (
        <div className="w-full h-full relative overflow-hidden max-md:p-[16px] max-md:flex max-md:flex-col max-md:gap-[10px]">
            <div
                className="pointer-events-none absolute inset-[1px] rounded-[inherit]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(to right, rgba(51,85,170,0.14) 0, rgba(51,85,170,0.14) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(to bottom, rgba(51,85,170,0.14) 0, rgba(51,85,170,0.14) 1px, transparent 1px, transparent 28px)",
                    backgroundBlendMode: "screen",
                    backgroundPosition: "right top",
                    WebkitMaskImage: "linear-gradient(to bottom left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 100%)",
                    maskImage: "linear-gradient(to bottom left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 100%)",
                }}
            />
            <Image
                src="/photos/main/inverter coma.svg"
                alt="Quote mark"
                width={210}
                height={142}
                className="absolute top-[4%] left-[2.97%] w-[clamp(32px,5vw,70px)] h-auto pointer-events-none select-none block max-md:static max-md:w-[clamp(28px,10vw,44px)]"
                aria-hidden="true"
            />
            <p className="absolute top-[34.03%] left-[4.75%] w-[90.5%] font-rethink font-medium text-[clamp(12px,1.4vw,20px)] leading-[100%] tracking-[-0.02em] text-[#ffffff] m-0 max-md:static max-md:w-full max-md:text-[12px]">
                {t.quote}
            </p>
            <div className="absolute top-[73.46%] left-[4.75%] flex flex-col gap-[clamp(2px,0.3vw,5px)] max-md:static max-md:mt-auto">
                <h3 className="font-rethink font-semibold text-[clamp(14px,1.6vw,24px)] leading-[100%] tracking-[-0.02em] text-[#ffffff] m-0">{t.name}</h3>
                <span className="font-manrope font-normal text-[clamp(9px,1.1vw,16px)] leading-[100%] tracking-[-0.02em] text-[#A7ADBE] m-0">{t.role}</span>
            </div>
        </div>
    )
}

const AUTO_PLAY_INTERVAL = 3000

export function TestimonialsSection() {
    const [active, setActive] = useState(0)
    const total = testimonials.length
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)

    const prev = useCallback(() => setActive(a => mod(a - 1, total)), [total])
    const next = useCallback(() => setActive(a => mod(a + 1, total)), [total])

    /* Auto-play — resets on every active change */
    useEffect(() => {
        const timer = setInterval(() => setActive(a => mod(a + 1, total)), AUTO_PLAY_INTERVAL)
        return () => clearInterval(timer)
    }, [active, total])

    /* Touch swipe */
    const minSwipeDistance = 50
    const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
    const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
    const onTouchEnd = () => {
        if (touchStart === null || touchEnd === null) return
        const distance = touchStart - touchEnd
        if (distance > minSwipeDistance) next()
        else if (distance < -minSwipeDistance) prev()
        setTouchStart(null)
        setTouchEnd(null)
    }

    // These mirror the clamp values used in the original layout
    const centerHalf = "calc(clamp(280px,72vw,1037px) / 2)"
    const sideHalf   = "calc(clamp(200px,59vw,847px) / 2)"
    const cardGap    = "22px"

    return (
        <section
            className="w-full bg-[#000210] py-[36px] px-0 flex flex-col items-center gap-[36px] box-border overflow-hidden max-md:py-[20px] max-md:gap-[26px]"
            aria-label="Testimonials"
        >
            {/* ─── Header ─── */}
            <motion.div
                className="w-full section-4k mx-auto px-[60px] box-border flex flex-col items-center gap-[20px] max-md:px-[20px] max-md:gap-[7.97px]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <button
                    className="bg-transparent border-none p-0 cursor-pointer w-[185px] h-[64px] flex items-center shrink-0 transition-transform duration-200 hover:scale-104 active:scale-96 max-md:w-[131.7px] max-md:h-auto"
                    aria-label="Testimonials label"
                >
                    <Image src="/photos/main/testimonials.svg" alt="Testimonials" width={185} height={64} className="w-full h-auto block" priority />
                </button>
                <h2 className="font-rethink font-bold text-[32px] leading-[110%] text-[#ffffff] m-0 text-center w-full max-md:text-[22px] max-md:max-w-[317px]">
                    Hear How Others Made it Happen
                </h2>
            </motion.div>

            {/* ─── Carousel ─── */}
            <div className="w-full flex flex-col items-center gap-[20px]">
                <div
                    className="w-full overflow-x-clip overflow-y-visible touch-pan-y"
                    style={{ height: "clamp(220px, 27.6vw, 418px)" }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div className="relative w-full h-full flex items-center justify-center">
                        {testimonials.map((t, i) => {
                            const offset = getOffset(i, active, total)
                            const isCenter = offset === 0
                            const isVisible = Math.abs(offset) <= 1

                            // translateX as CSS calc — same logic as TechMentors
                            let tx = "0px"
                            if (offset === 1)   tx = `calc(${centerHalf} + ${cardGap} + ${sideHalf})`
                            if (offset === -1)  tx = `calc(-1 * (${centerHalf} + ${cardGap} + ${sideHalf}))`
                            if (offset > 1)     tx = `calc(${centerHalf} + ${cardGap} + ${sideHalf} + 100vw)`
                            if (offset < -1)    tx = `calc(-1 * (${centerHalf} + ${cardGap} + ${sideHalf} + 100vw))`

                            const cardW         = isCenter ? "clamp(280px,72vw,1037px)"  : "clamp(200px,59vw,847px)"
                            const cardH         = isCenter ? "clamp(220px,27.6vw,398px)" : "clamp(180px,22.6vw,325px)"
                            const borderRadius  = isCenter ? "clamp(14px,2.3vw,33px)"    : "clamp(14px,1.9vw,27px)"

                            return (
                                <div
                                    key={t.id}
                                    onClick={() => {
                                        if (offset === -1) prev()
                                        if (offset === 1)  next()
                                    }}
                                    role={isCenter ? undefined : "button"}
                                    tabIndex={isCenter ? undefined : 0}
                                    aria-label={offset === -1 ? "Previous testimonial" : offset === 1 ? "Next testimonial" : undefined}
                                    onKeyDown={e => {
                                        if (e.key === "Enter") {
                                            if (offset === -1) prev()
                                            if (offset === 1)  next()
                                        }
                                    }}
                                    className="absolute"
                                    style={{
                                        width: cardW,
                                        height: cardH,
                                        borderRadius,
                                        border: "clamp(0.7px,0.11vw,1.64px) solid #25317D",
                                        background: t.gradient,
                                        overflow: "hidden",
                                        boxSizing: "border-box",
                                        cursor: isCenter ? "default" : "pointer",
                                        zIndex: isCenter ? 2 : 1,
                                        opacity: isCenter ? 1 : isVisible ? 0.4 : 0,
                                        transform: `translateX(${tx}) scale(${isCenter ? 1 : 0.95})`,
                                        pointerEvents: isVisible ? "auto" : "none",
                                        transition:
                                            "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease, width 0.5s ease, height 0.5s ease",
                                    }}
                                >
                                    <TestimonialCardContent t={t} />
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* ─── Navigation buttons ─── */}
                <div className="flex flex-row items-center gap-[10px] max-md:gap-[6.67px]">
                    <button
                        className="w-[clamp(40px,4.2vw,60px)] h-[clamp(40px,4.2vw,60px)] bg-transparent border-none p-0 cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-90 max-md:w-[40px] max-md:h-[40px]"
                        onClick={prev}
                        aria-label="Previous testimonial"
                    >
                        <Image src="/photos/main/left arrow.svg" alt="Previous" width={60} height={60} className="w-full h-full object-contain block" />
                    </button>
                    <button
                        className="w-[clamp(40px,4.2vw,60px)] h-[clamp(40px,4.2vw,60px)] bg-transparent border-none p-0 cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-90 max-md:w-[40px] max-md:h-[40px]"
                        onClick={next}
                        aria-label="Next testimonial"
                    >
                        <Image src="/photos/main/right arrow.svg" alt="Next" width={60} height={60} className="w-full h-full object-contain block" />
                    </button>
                </div>
            </div>
        </section>
    )
}