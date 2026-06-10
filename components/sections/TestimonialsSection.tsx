"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useCallback, useEffect } from "react"

/* ── Testimonial card data ── */
/** Shared card surface — border applied on the carousel wrapper; grill pattern unchanged in `TestimonialCardContent`. */
const TESTIMONIAL_CARD_BG = "#000319"

type TestimonialItem = {
    id: string | number;
    quote: string;
    name: string;
    role: string;
    photoUrl?: string | null;
}



function mod(n: number, m: number) { return ((n % m) + m) % m }

function getOffset(index: number, active: number, total: number) {
    let diff = index - active
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
}

/* Card inner content */
function TestimonialCardContent({ t }: { t: TestimonialItem }) {
    return (
        <div className="w-full h-full relative overflow-hidden max-md:p-0">
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
            {/* Opening quote — desktop: left edge aligned with body copy (Figma); mobile unchanged */}
            <Image
                src="/photos/main/inverter coma.svg"
                alt=""
                width={210}
                height={142}
                className="pointer-events-none select-none absolute left-[4.75%] top-[4%] block h-auto w-[clamp(32px,5vw,70px)] max-md:left-[16.21px] max-md:top-[10px] max-md:w-[clamp(26px,7.2vw,36px)]"
                aria-hidden="true"
            />
            <p
                className="absolute top-[34.03%] left-[4.75%] w-[90.5%] font-rethink font-medium text-[clamp(12px,1.4vw,20px)] leading-[100%] tracking-[-0.02em] text-[#ffffff] m-0 max-md:left-[16.21px] max-md:top-[43.23px] max-md:h-[76.73px] max-md:w-[min(302.58px,calc(100%-32.42px))] max-md:overflow-y-auto max-md:font-semibold max-md:text-[clamp(13px,3.85vw,14px)] max-md:leading-[100%] max-md:tracking-[-0.02em]"
            >
                {t.quote}
            </p>
            <div className="absolute top-[73.46%] left-[4.75%] flex items-center gap-[clamp(6px,0.8vw,12px)] max-md:left-[16.21px] max-md:top-[138px] max-md:bottom-auto">
                {t.photoUrl && (
                    <div className="relative shrink-0 rounded-full overflow-hidden border border-white/20"
                        style={{ width: "clamp(32px,3.2vw,46px)", height: "clamp(32px,3.2vw,46px)" }}>
                        <Image src={t.photoUrl} alt={t.name} fill className="object-cover" unoptimized />
                    </div>
                )}
                <div className="flex flex-col gap-[clamp(2px,0.3vw,5px)]">
                    <h3 className="font-rethink font-semibold text-[clamp(14px,1.6vw,24px)] leading-[100%] tracking-[-0.02em] text-[#ffffff] m-0 max-md:text-[clamp(14px,4vw,16px)] max-md:leading-[100%] max-md:tracking-[-0.02em]">
                        {t.name}
                    </h3>
                    <span className="font-manrope font-normal text-[clamp(9px,1.1vw,16px)] leading-[100%] tracking-[-0.02em] text-[#A7ADBE] m-0 max-md:text-[clamp(11px,3.2vw,13px)] max-md:leading-[100%] max-md:tracking-[-0.02em]">
                        {t.role}
                    </span>
                </div>
            </div>
        </div>
    )
}

export function TestimonialsSection() {
    const [testimonials, setTestimonials] = useState<TestimonialItem[]>([])
    const [loaded, setLoaded] = useState(false)
    const [active, setActive] = useState(0)
    const total = testimonials.length
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"
        fetch(`${backendUrl}/api/testimonials?school=HACA`)
            .then((r) => r.json())
            .then((data) => {
                const list: TestimonialItem[] = (data.testimonials || []).map(
                    (t: { _id: string; quote: string; name: string; role: string; photoUrl?: string | null }) => ({
                        id: t._id,
                        quote: t.quote,
                        name: t.name,
                        role: t.role,
                        photoUrl: t.photoUrl ?? null,
                    })
                )
                setTestimonials(list)
                setLoaded(true)
            })
            .catch(() => setLoaded(true))
    }, [])

    const prev = useCallback(() => setActive(a => mod(a - 1, total)), [total])
    const next = useCallback(() => setActive(a => mod(a + 1, total)), [total])

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)")
        const update = () => setIsMobile(mq.matches)
        update()
        mq.addEventListener("change", update)
        return () => mq.removeEventListener("change", update)
    }, [])

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

    if (!loaded || testimonials.length === 0) return null

    return (
        <section
            className="w-full bg-[#000210] py-[36px] px-0 flex flex-col items-center gap-[36px] box-border overflow-hidden max-md:py-[20px] max-md:px-[clamp(16px,5vw,24px)] max-md:gap-[26px]"
            aria-label="Testimonials"
        >
            {/* ─── Header ─── */}
            <motion.div
                className="w-full section-4k mx-auto px-[60px] box-border flex flex-col items-center gap-[20px] max-md:px-0 max-md:gap-[7.97px]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <button type="button" className="inline-flex flex-row items-center gap-[10px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_rgba(0,3,18,0.30),0px_8px_10.9px_0px_rgba(0,3,18,0.12)] p-[8px_8px_8px_16px] rounded-[100px] border border-[rgba(255,255,255,0.12)] cursor-default h-[42px] max-md:h-[32px] max-md:p-[3px_6px_3px_12px] max-md:gap-[6px]" aria-label="Testimonials">
                    <span className="font-rethink font-medium text-[16px] leading-[100%] text-[#A7ADBE] whitespace-nowrap max-md:text-[13px]">Testimonials</span>
                    <span className="flex items-center justify-center shrink-0 w-[38px] h-[26px] max-md:w-[24px] max-md:h-[16.42px]" aria-hidden="true">
                        <Image src="/photos/main/blue arrow.svg" alt="" aria-hidden="true" width={38} height={26} className="w-full h-full object-contain" />
                    </span>
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
                            const shouldShowCard = isMobile ? isCenter : isVisible

                            // translateX as CSS calc — same logic as TechMentors
                            let tx = "0px"
                            if (offset === 1)   tx = `calc(${centerHalf} + ${cardGap} + ${sideHalf})`
                            if (offset === -1)  tx = `calc(-1 * (${centerHalf} + ${cardGap} + ${sideHalf}))`
                            if (offset > 1)     tx = `calc(${centerHalf} + ${cardGap} + ${sideHalf} + 100vw)`
                            if (offset < -1)    tx = `calc(-1 * (${centerHalf} + ${cardGap} + ${sideHalf} + 100vw))`

                            const cardW         = isMobile ? "100%" : isCenter ? "clamp(280px,72vw,1037px)"  : "clamp(200px,59vw,847px)"
                            const cardH         = isCenter ? "clamp(220px,27.6vw,398px)" : "clamp(180px,22.6vw,325px)"
                            const borderRadius  = isCenter ? "clamp(14px,2.3vw,33px)"    : "clamp(14px,1.9vw,27px)"

                            return (
                                <div
                                    key={t.id}
                                    onClick={() => {
                                        if (offset === -1) prev()
                                        if (offset === 1)  next()
                                    }}
                                    role={!isMobile && !isCenter ? "button" : undefined}
                                    tabIndex={!isMobile && !isCenter ? 0 : undefined}
                                    aria-label={!isMobile && offset === -1 ? "Previous testimonial" : !isMobile && offset === 1 ? "Next testimonial" : undefined}
                                    onKeyDown={e => {
                                        if (isMobile) return
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
                                        border: "1.64px solid #25317D",
                                        background: TESTIMONIAL_CARD_BG,
                                        overflow: "hidden",
                                        boxSizing: "border-box",
                                        cursor: isCenter ? "default" : "pointer",
                                        zIndex: isCenter ? 2 : 1,
                                        opacity: isCenter ? 1 : shouldShowCard ? 0.4 : 0,
                                        transform: `translateX(${tx}) scale(${isCenter ? 1 : 0.95})`,
                                        pointerEvents: shouldShowCard ? "auto" : "none",
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