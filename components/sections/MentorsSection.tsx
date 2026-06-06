"use client"

import Image from "next/image"
import { useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import type { PublicMentor } from "@/lib/mentors-api"
import { MentorPhotoFrame } from "@/components/mentors/MentorPhotoFrame"

type DisplayMentor = {
    id: string
    photo: string
    name: string
    position: string
}

const FALLBACK: DisplayMentor[] = [
    { id: "1", photo: "/photos/main/mentor 1.webp", name: "Abu Nabhan", position: "CEO Design School" },
    { id: "2", photo: "/photos/main/mentor 2.webp", name: "Safwan", position: "Branding Mentor" },
    { id: "3", photo: "/photos/main/mentor 3.webp", name: "Pressly", position: "Graphic Design Mentor" },
    { id: "4", photo: "/photos/main/mentor 4.webp", name: "Nanditha", position: "Motion Graphics Mentor" },
]

function toDisplayMentors(mentors: PublicMentor[]): DisplayMentor[] {
    return mentors.map((m) => ({
        id: m._id,
        photo: m.photoUrl,
        name: m.name,
        position: m.designation,
    }))
}

export function MentorsSection({ initialMentors }: { initialMentors?: PublicMentor[] }) {
    const prefersReducedMotion = useReducedMotion()
    const displayMentors = useMemo(() => {
        const fromApi = initialMentors?.length ? toDisplayMentors(initialMentors) : null
        return fromApi && fromApi.length > 0 ? fromApi : FALLBACK
    }, [initialMentors])

    return (
        <section className="w-full max-w-[1440px] mx-auto p-[40px_60px_32px_60px] flex flex-col items-center gap-[36px] overflow-hidden opacity-100 max-md:p-[clamp(20px,5vw,32px)_clamp(16px,5vw,24px)] max-md:gap-[26px] max-md:items-start">
            {/* Header */}
            <div className="w-full max-w-[1320px] flex flex-col items-start gap-[20px] max-md:w-full max-md:gap-[clamp(6px,2.1vw,10px)] max-md:items-center">
                <button type="button" className="inline-flex flex-row items-center gap-[10px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_rgba(0,3,18,0.30),0px_8px_10.9px_0px_rgba(0,3,18,0.12)] p-[8px_8px_8px_16px] rounded-[100px] border border-[rgba(255,255,255,0.12)] cursor-default h-[42px] max-md:h-[32px] max-md:p-[3px_6px_3px_12px] max-md:gap-[6px]" aria-label="Top Mentors">
                    <span className="font-rethink font-medium text-[16px] leading-[100%] text-[#A7ADBE] whitespace-nowrap max-md:text-[13px]">Top Mentors</span>
                    <span className="flex items-center justify-center shrink-0 w-[38px] h-[26px] max-md:w-[24px] max-md:h-[16.42px]" aria-hidden="true">
                        <Image src="/photos/main/blue arrow.svg" alt="" aria-hidden="true" width={38} height={26} className="w-full h-full object-contain" />
                    </span>
                </button>
                <h2 className="font-rethink font-bold text-[42px] leading-[110%] tracking-[0%] text-left text-[#ffffff] m-0 max-md:font-manrope max-md:text-[clamp(20px,5.8vw,24px)] max-md:text-center">
                    Taught by the Top 1%
                </h2>
            </div>

            {/* Cards Grid */}
            <div className="w-full max-w-[1320px] h-[428px] flex justify-between items-center gap-[17.33px] max-md:w-full max-md:max-w-none max-md:h-auto max-md:flex-col max-md:gap-[20px] max-md:items-center">
                {displayMentors.map((mentor, index) => (
                    <motion.div
                        key={mentor.id}
                        className="flex-1 max-w-[317px] h-full flex flex-col gap-[10px] max-md:w-full max-md:max-w-full max-md:h-auto max-md:gap-[10.57px] [&:nth-child(n+3)]:max-md:hidden"
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15, margin: "-48px 0px -32px 0px" }}
                        transition={{ duration: 0.5, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                        <MentorPhotoFrame src={mentor.photo} alt={mentor.name} />
                        <div className="flex flex-col gap-[2px]">
                            <p className="font-outfit font-light text-[14px] leading-[140%] text-[#a3a3a3] m-0 max-md:text-[12px]">{mentor.position}</p>
                            <p className="font-outfit font-medium text-[clamp(18px,2.5vw,24px)] leading-[120%] tracking-[0%] text-[#ffffff] m-0 max-md:text-[clamp(18px,5.3vw,22px)]">{mentor.name}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* View More Button */}
            <div className="flex justify-center">
                <Link
                    href="/mentors"
                    className="group relative inline-flex no-underline w-[198px] h-[55px] rounded-[100px] items-center justify-center bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] px-[24px] max-md:w-[160px] max-md:h-[46px] max-md:px-[18px] max-md:rounded-[82px] overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105 active:scale-97"
                    aria-label="View more mentors"
                >
                    <span className="flex w-full h-full items-center justify-center font-rethink font-medium text-[18px] leading-[27px] text-white whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                        View More Mentors
                    </span>
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-rethink font-medium text-[18px] leading-[27px] text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                        View More Mentors
                    </span>
                </Link>
            </div>
        </section>
    )
}
