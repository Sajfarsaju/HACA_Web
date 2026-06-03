"use client"

import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"

const ACCENT = "#0066FF"
const CARD_BG = "#E8F1FF"

type Mentor = {
    name: string
    role: string
    imageSrc: string
}

const FALLBACK_MENTORS: Mentor[] = [
    { name: "Hima", role: "Google Ads Mentor", imageSrc: "/photos/schools/marketing/mentors/hima.svg" },
    { name: "Arshad", role: "Business Development Mentor", imageSrc: "/photos/schools/marketing/mentors/arshad.svg" },
    { name: "Jawadha", role: "Social Media Marketing Mentor", imageSrc: "/photos/schools/marketing/mentors/jawadha.svg" },
    { name: "Minhaj", role: "Creative Strategy Mentor", imageSrc: "/photos/schools/marketing/mentors/minhaj.svg" },
]

function MentorCard({ mentor }: { mentor: Mentor }) {
    return (
        <article className="mx-0 flex w-[343px] max-w-[343px] flex-col gap-[10px] max-lg:h-auto sm:mx-auto sm:w-full sm:max-w-[343px] lg:h-auto lg:max-w-[308px]">
            <div
                className="relative w-full overflow-hidden aspect-[308/340] rounded-[16.7px] lg:rounded-[15px]"
                style={{ backgroundColor: CARD_BG }}
            >
                <Image
                    src={mentor.imageSrc}
                    alt={`${mentor.name}, ${mentor.role}`}
                    fill
                    className="object-contain object-bottom"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
            </div>
            <div className="flex min-h-0 flex-col gap-1 text-left">
                <h3
                    className="
                        m-0 font-bold tracking-normal
                        [font-family:'Darker_Grotesque',sans-serif]
                        text-[clamp(1.25rem,2.6vw,1.5rem)] leading-[1.05]
                    "
                >
                    {mentor.name}
                </h3>
                <p className="m-0 font-['Satoshi',sans-serif] text-[clamp(13px,1.4vw,15px)] font-bold leading-snug text-[#6B6B6B]">
                    {mentor.role}
                </p>
            </div>
        </article>
    )
}

const MOBILE_MAX = 639
const IDLE_RESUME_MS = 1600
/** ~72s feel for a wide track; scales with content width */
const AUTO_SCROLL_PX_PER_SEC = 14

function MarketingMentorsMobileMarquee({ mentors }: { mentors: Mentor[] }) {
    const MENTORS = mentors
    const scrollerRef = useRef<HTMLDivElement>(null)
    const pausedByUserRef = useRef(false)
    const rafRef = useRef<number>(0)
    const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const lastTsRef = useRef<number | null>(null)

    useEffect(() => {
        const el = scrollerRef.current
        if (!el) return

        const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)")
        const mqMobile = window.matchMedia(`(max-width: ${MOBILE_MAX}px)`)

        /** Logical scroll in [0, loop half); survives rounding & async scroll events */
        let pos = el.scrollLeft
        /** Last scrollLeft we applied — scroll events that match this are ours, not the user */
        let expectedScrollLeft = el.scrollLeft
        const TOLERANCE_PX = 4

        const halfWidth = () => Math.max(el.scrollWidth / 2, 1)

        const clearIdle = () => {
            if (idleTimerRef.current) {
                clearTimeout(idleTimerRef.current)
                idleTimerRef.current = null
            }
        }

        const scheduleResume = () => {
            clearIdle()
            idleTimerRef.current = setTimeout(() => {
                pausedByUserRef.current = false
                pos = el.scrollLeft
                expectedScrollLeft = el.scrollLeft
            }, IDLE_RESUME_MS)
        }

        const markUserActivity = () => {
            pausedByUserRef.current = true
            scheduleResume()
        }

        const driveScroll = (dtSec: number) => {
            pos += AUTO_SCROLL_PX_PER_SEC * dtSec
            const h = halfWidth()
            while (pos >= h) pos -= h
            el.scrollLeft = pos
            expectedScrollLeft = el.scrollLeft
            pos = expectedScrollLeft
        }

        const onScroll = () => {
            const sl = el.scrollLeft
            const h = halfWidth()

            if (!pausedByUserRef.current && Math.abs(sl - expectedScrollLeft) <= TOLERANCE_PX) {
                expectedScrollLeft = sl
                pos = sl
                return
            }

            markUserActivity()
            pos = sl
            expectedScrollLeft = sl
            if (sl >= h) {
                el.scrollLeft -= h
                pos = el.scrollLeft
                expectedScrollLeft = pos
            }
        }

        const tick = (ts: number) => {
            if (!mqMobile.matches || mqReduce.matches) {
                rafRef.current = requestAnimationFrame(tick)
                return
            }

            const last = lastTsRef.current
            lastTsRef.current = ts
            const dt = last == null ? 0 : Math.min((ts - last) / 1000, 0.05)

            if (!pausedByUserRef.current && dt > 0) {
                driveScroll(dt)
            }

            rafRef.current = requestAnimationFrame(tick)
        }

        const onWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                pos = el.scrollLeft
                expectedScrollLeft = el.scrollLeft
                markUserActivity()
            }
        }

        el.addEventListener("scroll", onScroll, { passive: true })
        el.addEventListener("wheel", onWheel, { passive: true })

        rafRef.current = requestAnimationFrame(tick)

        const onReduceChange = () => {
            if (mqReduce.matches) pausedByUserRef.current = false
        }
        mqReduce.addEventListener("change", onReduceChange)

        return () => {
            cancelAnimationFrame(rafRef.current)
            clearIdle()
            el.removeEventListener("scroll", onScroll)
            el.removeEventListener("wheel", onWheel)
            mqReduce.removeEventListener("change", onReduceChange)
        }
    }, [])

    return (
        <div
            ref={scrollerRef}
            className="
                sm:hidden w-full min-w-0 overflow-y-hidden overflow-x-scroll
                [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                motion-reduce:overflow-x-auto motion-reduce:[-ms-overflow-style:none] motion-reduce:[scrollbar-width:none] motion-reduce:[&::-webkit-scrollbar]:hidden
            "
            aria-label="Mentors"
            style={{
                touchAction: "pan-x",
                WebkitOverflowScrolling: "touch",
            }}
        >
            <div className="flex w-max flex-row items-stretch gap-6">
                {[...MENTORS, ...MENTORS].map((mentor, idx) => (
                    <div key={`${mentor.name}-${idx}`} className="min-w-0 flex-none">
                        <MentorCard mentor={mentor} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export function MarketingMentorsSection() {
    const [MENTORS, setMENTORS] = useState<Mentor[]>([])

    useEffect(() => {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/mentors?school=Marketing%20School`
        fetch(url)
            .then((r) => (r.ok ? r.json() : null))
            .then((data) => {
                setMENTORS(
                    Array.isArray(data?.mentors)
                        ? data.mentors.map((m: { name: string; designation: string; photoUrl: string }) => ({
                              name: m.name,
                              role: m.designation,
                              imageSrc: m.photoUrl,
                          }))
                        : []
                )
            })
            .catch(() => {})
    }, [])

    if (MENTORS.length === 0) return null;

    return (
        <section
            id="marketing-mentors"
            className="w-full opacity-100"
            aria-labelledby="marketing-mentors-heading"
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-7
                    px-[clamp(16px,4.16vw,60px)]
                    pb-10 pt-6
                    lg:gap-9 lg:pb-14 lg:pt-10
                "
            >
                <header className="flex w-full min-w-0 flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                    <div className="flex shrink-0 items-center gap-[clamp(10px,1.5vw,14px)] lg:pt-1">
                        <span
                            className="h-[10px] w-[10px] shrink-0 rounded-full lg:h-3 lg:w-3"
                            style={{ backgroundColor: ACCENT }}
                            aria-hidden
                        />
                        <p
                            className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,16px)] font-medium leading-none tracking-normal"
                                                    >
                            Mentors
                        </p>
                    </div>
                    <h2
                        id="marketing-mentors-heading"
                        className="
                            w-full min-w-0 max-w-full text-left font-semibold tracking-normal
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.05]
                            lg:w-auto lg:ml-auto lg:max-w-[min(100%,640px)] lg:text-left lg:leading-[1.08]
                        "
                                            >
                        The Right People to
                        <br />
                        Learn From
                    </h2>
                </header>

                {/* Mobile: auto-scroll + manual swipe; pauses while user scrolls, resumes after idle */}
                <MarketingMentorsMobileMarquee mentors={MENTORS} />

                {/* sm+: grid (unchanged) */}
                <ul
                    className="
                        hidden sm:grid m-0 w-full list-none p-0
                        sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10
                        lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10
                        xl:grid-cols-4
                    "
                >
                    {MENTORS.map((mentor) => (
                        <li key={mentor.name} className="min-w-0">
                            <MentorCard mentor={mentor} />
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}
