"use client"

import React from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

type WhyCard = { id: string; heading: string; paragraph: string }

const allCards: WhyCard[] = [
    {
        id: "mentors",
        heading: "Mentors Who\nWork in the Field",
        paragraph:
            "Our mentors are the professionals who work in marketing, design, coding, and finance every day. They share what they've learned from real experience.",
    },
    {
        id: "practical-theory",
        heading: "90% Practical,\n10% Theory",
        paragraph:
            "We don't just talk about concepts, we make you do them. You'll learn by working on real projects, solving real problems, and creating real results.",
    },
    {
        id: "placement",
        heading: "100% Assured\nPlacement Support",
        paragraph:
            "We help you build your resume, prepare for interviews, and connect you with top companies that hire from HACA.",
    },
    {
        id: "real-clients",
        heading: "Work with\nReal Clients",
        paragraph:
            "Get a one-month internship with real brands and clients, gain real experience before you even graduate.",
    },
    {
        id: "flexible",
        heading: "Flexible Learning\nOptions",
        paragraph:
            "Attend classes on campus or join online from anywhere. Choose between online or offline classes. Learn in a way that fits your schedule.",
    },
    {
        id: "emi",
        heading: "Easy EMI\nOptions",
        paragraph:
            "Pay your course fee in simple monthly installments. With flexible EMI plans, you can invest in your future without financial pressure.",
    },
    {
        id: "space",
        heading: "Friendly & Comfortable\nLearning Space",
        paragraph:
            "Supportive environment where students feel relaxed, confident, and open to ask anything.",
    },
    {
        id: "portfolio",
        heading: "Portfolio-First\nTraining",
        paragraph:
            "Every student graduates with a strong, job-ready portfolio built through real projects, whether in Digital Marketing, Design, Finance, or Tech.",
    },
]

/** Time each set of four cards stays visible before crossfading to the other set */
const ROTATE_MS = 5000
const CROSSFADE_DURATION_S = 0.45

export function WhyHacaSection() {
    const [page, setPage] = React.useState(0)
    const [isPaused, setIsPaused] = React.useState(false)

    React.useEffect(() => {
        if (isPaused) return
        const timer = window.setInterval(() => {
            setPage((p) => (p === 0 ? 1 : 0))
        }, ROTATE_MS)
        return () => window.clearInterval(timer)
    }, [isPaused])

    const cards = page === 0 ? allCards.slice(0, 4) : allCards.slice(4, 8)

    return (
        <section className="w-full section-4k min-h-[576px] mx-auto px-[clamp(16px,2.5vw,60px)] py-[clamp(40px,6vw,80px)] flex flex-row justify-between items-center gap-[clamp(16px,2vw,40px)] opacity-100 max-[900px]:flex-col max-[900px]:items-center max-[900px]:min-h-auto max-[900px]:p-[60px_40px] max-[900px]:gap-[36px] max-md:p-[clamp(20px,5vw,40px)_clamp(14px,5vw,24px)] max-md:gap-[clamp(18px,4vw,26px)]">
            {/* ── Left Column ── */}
            <div className="min-w-0 max-w-[453px] flex flex-col items-start text-left gap-[20px] shrink-0 max-[900px]:max-w-full max-[900px]:items-center max-[900px]:text-center max-md:gap-[clamp(8px,2vw,12px)] max-md:w-full">
                {/* Badge */}
                <button className="w-[175px] h-[64px] -ml-[6px] flex items-center justify-center p-0 rounded-[100px] border-none bg-transparent cursor-default max-[900px]:ml-0 max-md:w-[130px] max-md:h-[48px]" aria-label="Why HACA">
                    <Image
                        src="/photos/main/why haca.svg"
                        alt="Why HACA"
                        width={175}
                        height={64}
                        className="w-full h-full object-contain"
                    />
                </button>

                {/* Heading + Paragraph */}
                <div className="flex flex-col items-start text-left gap-[16px] max-[900px]:items-center max-[900px]:text-center max-md:gap-[clamp(10px,3vw,16px)]">
                    <h2 className="font-rethink font-bold text-[clamp(22px,2.5vw,32px)] leading-[110%] tracking-[0%] text-[#ffffff] m-0 max-[900px]:text-[28px] max-md:text-[clamp(20px,5.5vw,26px)] max-md:max-w-full">The &apos;Why&apos; Behind HACA</h2>
                    <p className="font-rethink font-medium text-[clamp(14px,1.5vw,20px)] leading-[140%] tracking-[0%] text-[#A7ADBE] m-0 max-w-[461px] max-[900px]:text-[17px] max-[900px]:max-w-full max-md:text-[clamp(13px,3.5vw,16px)] max-md:text-center">
                        You&apos;ll learn real skills, gain real experience, and get real
                        opportunities, all in one place. That&apos;s what HACA is all about.
                    </p>
                </div>
            </div>

            {/* ── Right: 2×2 Flip Card Grid ── */}
            {/* Note: In tailwind we use group on the parent to accomplish the hover effects for the layers inside. Desktop keeps one grid-level glow; mobile uses three identical radial blobs between each stacked card row (same gradient values as before). */}
            <div className="min-w-0 flex-1 max-w-[644px] relative max-md:rounded-[20px]">
                {/* Mobile-only: same radial gradient repeated in the vertical gaps between the four cards */}
                <div
                    className="pointer-events-none absolute inset-0 z-0 hidden max-md:block rounded-[20px]"
                    aria-hidden
                >
                    {([25, 50, 75] as const).map((pct) => (
                        <div
                            key={pct}
                            className="absolute left-1/2 w-[min(130%,400px)] h-[min(48vw,240px)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,rgba(30,80,255,0.55)_0%,rgba(15,30,120,0.35)_35%,rgba(0,3,25,0.0)_70%)]"
                            style={{ top: `${pct}%` }}
                        />
                    ))}
                </div>
                <div
                    role="group"
                    className="relative z-[1] min-w-0 grid grid-cols-2 gap-[clamp(10px,1.5vw,22px)] rounded-[24px] bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(30,80,255,0.55)_0%,rgba(15,30,120,0.35)_35%,rgba(0,3,25,0.0)_70%)] max-[900px]:flex-none max-[900px]:w-max max-[900px]:max-w-full max-[900px]:gap-[16px] max-[900px]:justify-items-center max-[900px]:mx-auto max-md:grid-cols-1 max-md:gap-[16px] max-md:w-full max-md:rounded-[20px] max-md:bg-transparent max-md:justify-items-center"
                    aria-live="polite"
                    aria-label={page === 0 ? "Why HACA highlights, set 1 of 2" : "Why HACA highlights, set 2 of 2"}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                {cards.map((card, slotIndex) => (
                    <div key={slotIndex} className="relative min-h-0 w-full min-w-0">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: CROSSFADE_DURATION_S,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                className="group w-full h-[clamp(140px,14vw,193px)] rounded-[20px] border border-[rgba(35,45,107,0.8)] bg-[#000319] p-[clamp(14px,1.5vw,20px)] overflow-hidden relative cursor-default shadow-[inset_0_0_30px_rgba(20,60,200,0.07)] max-[900px]:w-full max-[900px]:max-w-[335px] max-[900px]:h-auto max-[900px]:min-h-[193px] max-[900px]:p-[20px] max-[900px]:rounded-[20px] max-[900px]:border max-[900px]:flex max-[900px]:flex-col max-[900px]:justify-start max-[900px]:items-center max-[900px]:mx-auto max-md:max-w-none max-md:w-full max-md:h-auto max-md:min-h-[clamp(172px,44vw,193px)] max-md:p-[clamp(16px,4.5vw,20px)] max-md:rounded-[20px] max-md:border max-md:border-[#232D6B] max-md:shadow-[inset_0_0_30px_rgba(20,60,200,0.06)] max-md:mx-auto"
                            >
                        {/* Grid / grill: #000319 base, very light line grid */}
                        <div
                            className="pointer-events-none absolute inset-[1px] rounded-[18px]"
                            style={{
                                backgroundColor: "#000319",
                                backgroundImage:
                                    "repeating-linear-gradient(to right, rgba(100,130,210,0.055) 0, rgba(100,130,210,0.055) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(to bottom, rgba(100,130,210,0.055) 0, rgba(100,130,210,0.055) 1px, transparent 1px, transparent 28px)",
                                backgroundPosition: "left bottom",
                                WebkitMaskImage:
                                    "linear-gradient(to top right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.9) 72%, rgba(0,0,0,1) 85%)",
                                maskImage:
                                    "linear-gradient(to top right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.9) 72%, rgba(0,0,0,1) 85%)",
                            }}
                        />

                        {/* Gradient border overlay matching Figma radial stroke */}
                        <div
                            className="pointer-events-none absolute inset-0 rounded-[20px] border z-[1]"
                            style={{
                                borderWidth: "1.11px",
                                borderImageSlice: 1,
                                borderImageSource:
                                    "radial-gradient(151.12% 142.53% at 100% -42.64%, rgba(181, 211, 253, 0.3) 0%, rgba(181, 211, 253, 0) 88.4%)",
                            }}
                        />

                        <div className="w-full h-full relative z-[2] flex flex-col justify-end max-[900px]:static max-[900px]:justify-start max-[900px]:items-center max-[900px]:gap-[6px] max-[900px]:h-auto max-[900px]:w-[239px] max-[900px]:max-w-full max-[900px]:min-w-0 max-md:justify-start max-md:gap-[6px] max-md:w-full max-md:max-w-full max-md:min-w-0">
                            {/* Heading layer - visible on tablet/mobile; display:contents removes wrapper on tablet/mobile */}
                            <div className="absolute bottom-0 left-0 w-full min-w-0 shrink-0 transition-transform duration-400 ease-in-out opacity-100 translate-y-0 group-hover:-translate-y-[110%] group-hover:opacity-0 max-[900px]:contents max-md:contents">
                                <h3 className="font-rethink font-semibold text-[clamp(18px,1.8vw,24px)] leading-[110%] tracking-[-0.02em] text-[#ffffff] m-0 max-[900px]:font-semibold max-[900px]:text-[20px] max-[900px]:leading-[110%] max-[900px]:tracking-[-0.02em] max-[900px]:text-center max-md:font-semibold max-md:text-[20px] max-md:leading-[110%] max-md:tracking-[-0.02em] max-md:text-center">
                                    {card.heading.split("\n").map((line, li) => (
                                        <React.Fragment key={li}>
                                            {line}
                                            {li < card.heading.split("\n").length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </h3>
                            </div>
                            {/* Paragraph layer - visible on tablet/mobile; display:contents removes wrapper on tablet/mobile */}
                            <div className="absolute bottom-0 left-0 w-full min-w-0 transition-all duration-400 ease-in-out opacity-0 translate-y-[100%] group-hover:translate-y-0 group-hover:opacity-100 max-[900px]:contents max-md:contents">
                                <p className="font-rethink font-medium text-[clamp(12px,1vw,14px)] leading-[140%] tracking-[-0.02em] text-[#A7ADBE] m-0 break-words max-[900px]:font-medium max-[900px]:text-[14px] max-[900px]:leading-[110%] max-[900px]:tracking-[-0.02em] max-[900px]:text-center max-md:font-medium max-md:text-[14px] max-md:leading-[110%] max-md:tracking-[-0.02em] max-md:text-center">{card.paragraph}</p>
                            </div>
                        </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}
