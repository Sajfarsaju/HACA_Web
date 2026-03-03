"use client"

import Image from "next/image"
import { motion, LayoutGroup } from "framer-motion"
import { useState, useCallback } from "react"

/* ── Testimonial card data with content ── */
const testimonials = [
    { id: 0, gradient: "linear-gradient(135deg, #0d1a4a 0%, #1a4fff22 100%)", quote: "The my dream job. The portfolio projects were exactly what recruiters wanted my dream job. The portfolio projects were exactly what recruiters wanted digital marketing classes were practical, up to date, and easy to follow. The mentors were incredibly supportive, and the mock interviews really boosted my confidence.", name: "Nadha Faizallllll", role: "Digital Marketer" },
    { id: 1, gradient: "linear-gradient(135deg, #000319 0%, #25317D55 100%)", quote: "HACA's design school gave me the skills to land my dream job. The portfolio projects were exactly what recruiters wanted to my dream job. The portfolio projects were exactly what recruiters wanted see.", name: "Priya Sharma", role: "UI/UX Designer" },
    { id: 2, gradient: "linear-gradient(135deg, #0d1a4a 0%, #1a4fff22 100%)", quote: "I switched from a non-tech background to a developer role in 6 months. The tech school curriculum is intense but worth every my dream job. The portfolio projects were exactly what recruiters wanted hour.", name: "Arjun Mehta", role: "Full Stack Developer" },
    { id: 3, gradient: "linear-gradient(135deg, #000319 0%, #25317D55 100%)", quote: "The finance courses helped me understand real-world analysis. Now I work at a leading investment my dream job. The portfolio projects were exactly what recruiters wanted firm.", name: "Sneha Reddy", role: "Financial Analyst" },
    { id: 4, gradient: "linear-gradient(135deg, #0d1a4a 0%, #1a4fff22 100%)", quote: "Best decision I made for my career. The placement support and industry connections opened doors I never my dream job. The portfolio projects were exactly what recruiters wanted thought possible.", name: "Rahul Kumar", role: "Marketing Manager" },
]

function mod(n: number, m: number) { return ((n % m) + m) % m }

/* Card inner content - shared across left, center, right */
function TestimonialCardContent({ t }: { t: (typeof testimonials)[0] }) {
    return (
        <div className="w-full h-full relative overflow-hidden max-md:p-[16px] max-md:flex max-md:flex-col max-md:gap-[10px]">
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

/* Spring for layout animation - whole card moves */
const LAYOUT_SPRING = {
    type: "spring" as const,
    stiffness: 260,
    damping: 26,
}

export function TestimonialsSection() {
    const [active, setActive] = useState(0)
    const total = testimonials.length
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)

    const leftIdx = mod(active - 1, total)
    const rightIdx = mod(active + 1, total)

    const prev = useCallback(() => setActive(a => mod(a - 1, total)), [total])
    const next = useCallback(() => setActive(a => mod(a + 1, total)), [total])

    const minSwipeDistance = 50

    const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
    const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
    const onTouchEnd = () => {
        if (touchStart === null || touchEnd === null) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe) next()
        if (isRightSwipe) prev()
        setTouchStart(null)
        setTouchEnd(null)
    }

    return (
        <section className="w-full bg-[#000210] py-[36px] px-0 flex flex-col items-center gap-[36px] box-border overflow-hidden max-md:py-[20px] max-md:gap-[26px]" aria-label="Testimonials">

            {/* ─── Header ─── */}
            <motion.div
                className="w-full section-4k mx-auto px-[60px] box-border flex flex-col items-center gap-[20px] max-md:px-[20px] max-md:gap-[7.97px]"
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

                {/* Carousel: LayoutGroup + layoutId — whole card (border, gradient, content) physically moves */}
                <LayoutGroup id="testimonials-carousel">
                    <div
                        className="w-full overflow-x-clip overflow-y-visible flex flex-row items-center justify-center py-[20px] px-0 box-border touch-pan-y"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div className="flex flex-row items-center justify-center gap-[22px] max-md:gap-[12px] min-w-0 w-full overflow-visible">
                            {/* LEFT slot - same responsive size as right (847×325 from Figma) */}
                            <div
                                className="cursor-pointer select-none shrink-0 w-[clamp(200px,59vw,847px)] h-[clamp(180px,22.6vw,325px)] rounded-[clamp(14px,1.9vw,27px)] overflow-hidden max-md:w-[60px] max-md:h-[min(205.32px,calc((100vw-40px)*0.613))] max-md:rounded-[10.6px] max-md:-translate-x-[40%]"
                                onClick={prev}
                                role="button"
                                tabIndex={0}
                                aria-label="Previous testimonial"
                                onKeyDown={e => e.key === "Enter" && prev()}
                            >
                                <motion.div
                                    layout
                                    layoutId={`tst-card-${leftIdx}`}
                                    initial={false}
                                    animate={{ opacity: 0.4, scale: 0.95 }}
                                    transition={LAYOUT_SPRING}
                                    className="w-full h-full rounded-[inherit] border-[clamp(0.7px,0.11vw,1.64px)] border-[#25317D] box-border overflow-hidden max-md:border-[0.53px]"
                                >
                                    <TestimonialCardContent t={testimonials[leftIdx]} />
                                </motion.div>
                            </div>

                            {/* CENTER slot */}
                            <div className="flex-none w-[clamp(280px,72vw,1037px)] h-[clamp(220px,27.6vw,398px)] rounded-[clamp(14px,2.3vw,33px)] overflow-hidden max-md:w-[min(335px,calc(100vw-40px))] max-md:h-[min(205.32px,calc((100vw-40px)*0.613))] max-md:rounded-[10.6px]">
                                <motion.div
                                    layout
                                    layoutId={`tst-card-${active}`}
                                    initial={false}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={LAYOUT_SPRING}
                                    className="w-full h-full rounded-[inherit] border-[clamp(0.7px,0.11vw,1.64px)] border-[#25317D] box-border overflow-hidden max-md:border-[0.53px]"
                                >
                                    <TestimonialCardContent t={testimonials[active]} />
                                </motion.div>
                            </div>

                            {/* RIGHT slot - same responsive size as left (847×325 from Figma) */}
                            <div
                                className="cursor-pointer select-none shrink-0 w-[clamp(200px,59vw,847px)] h-[clamp(180px,22.6vw,325px)] rounded-[clamp(14px,1.9vw,27px)] overflow-hidden max-md:w-[60px] max-md:h-[min(205.32px,calc((100vw-40px)*0.613))] max-md:rounded-[10.6px] max-md:translate-x-[40%]"
                                onClick={next}
                                role="button"
                                tabIndex={0}
                                aria-label="Next testimonial"
                                onKeyDown={e => e.key === "Enter" && next()}
                            >
                                <motion.div
                                    layout
                                    layoutId={`tst-card-${rightIdx}`}
                                    initial={false}
                                    animate={{ opacity: 0.4, scale: 0.95 }}
                                    transition={LAYOUT_SPRING}
                                    className="w-full h-full rounded-[inherit] border-[clamp(0.7px,0.11vw,1.64px)] border-[#25317D] box-border overflow-hidden max-md:border-[0.53px]"
                                >
                                    <TestimonialCardContent t={testimonials[rightIdx]} />
                                </motion.div>
                            </div>
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
