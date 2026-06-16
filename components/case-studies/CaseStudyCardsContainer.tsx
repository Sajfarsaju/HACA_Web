"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronsRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { CaseStudy } from "@/lib/case-study-data"

function filterBySchool(items: CaseStudy[], activeSchool: string) {
    if (activeSchool === "all") return items
    return items.filter((item) => item.schoolSlug === activeSchool)
}

const cardLinkClass =
    "w-full flex flex-col bg-transparent border border-[#25317d] box-border overflow-hidden max-md:w-[min(335px,calc(100vw-40px))] rounded-[clamp(12px,1.2vw,20px)] gap-[clamp(12px,1.2vw,20px)] p-[clamp(6px,0.8vw,10px)] max-md:border-[0.82px] transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C75FF]/80"

export function CaseStudyCardsContainer({ activeSchool = "all", items }: { activeSchool?: string, items: CaseStudy[] }) {
    const filtered = filterBySchool(items, activeSchool)

    return (
        <div className="w-full flex flex-col gap-[clamp(16px,2vw,26px)] px-[clamp(16px,4vw,60px)] pb-[clamp(20px,3vw,40px)]">
            {/* Tablet & desktop: 3 rows × 3 columns, responsive gap and card size */}
            <div className="hidden md:grid w-full max-w-[1320px] mx-auto grid-cols-3 gap-x-[clamp(16px,2vw,26px)] gap-y-[clamp(16px,2vw,26px)]">
                {filtered.map((item, index) => (
                    <div key={item.id} className="min-w-0 w-full">
                        <AnimatedCaseStudyCard item={item} index={index} />
                    </div>
                ))}
            </div>

            {/* Mobile: single column, cards horizontally centered */}
            <div className="md:hidden w-full flex flex-col items-center gap-[clamp(16px,4vw,20px)]">
                {filtered.map((item, index) => (
                    <AnimatedCaseStudyCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </div>
    )
}

function AnimatedCaseStudyCard({
    item,
    index,
}: {
    item: CaseStudy
    index: number
}) {
    const reduceMotion = useReducedMotion()

    if (reduceMotion) {
        return <CaseStudyCard item={item} />
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            <CaseStudyCard item={item} />
        </motion.div>
    )
}

function CaseStudyCard({
    item,
}: {
    item: CaseStudy
}) {
    return (
        <Link
            href={`/case-studies/${item.slug}`}
            className={cardLinkClass}
            aria-label={`Read case study: ${item.title}`}
        >
            {/* Cover image */}
            <div className="relative w-full aspect-[871/514] overflow-hidden shrink-0 rounded-[clamp(12px,1.2vw,20px)]">
                <Image
                    src={item.bannerUrl || "/photos/main/blog cover.webp"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) min(335px, calc(100vw - 40px)), (max-width: 1023px) 33vw, 407px"
                    unoptimized={Boolean(item.bannerUrl?.startsWith("http"))}
                />
            </div>

            {/* Card body: no flex-1 so height is content-only; no mt-auto on link so no gap above button */}
            <div className="w-full flex flex-col gap-[clamp(14px,1.5vw,23px)] px-[clamp(8px,1vw,16px)] pb-[clamp(12px,1.2vw,20px)] pt-0 box-border">
                <div className="flex flex-col gap-[clamp(10px,1vw,16px)]">
                    <div className="flex flex-row items-center justify-between gap-[clamp(6px,0.6vw,10px)]">
                        {item.studentName ? (
                            <span className="font-rethink font-medium leading-[100%] bg-[rgba(255,255,255,0.10)] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_rgba(0,3,18,0.30),0px_8px_10.9px_0px_rgba(0,3,18,0.12)] rounded-[100px] whitespace-nowrap text-[#A7ADBE] text-[clamp(12px,1.1vw,16px)] py-[clamp(5px,0.5vw,8px)] px-[clamp(10px,1vw,16px)]">
                                {item.studentName}
                            </span>
                        ) : <span />}
                        <span className="font-rethink font-medium text-[#6d7792] whitespace-nowrap text-[clamp(12px,1.1vw,16px)] leading-[1.2]">
                            {item.date}
                        </span>
                    </div>
                    <h3 className="font-rethink font-semibold text-white m-0 text-[clamp(14px,1.3vw,20px)] leading-[clamp(21px,1.8vw,30px)]">
                        {item.title}
                    </h3>
                </div>
                <span className="inline-flex items-center gap-1 w-fit pointer-events-none" aria-hidden="true">
                    <span className="font-rethink font-medium text-[#6D7792] whitespace-nowrap text-[clamp(13px,1.2vw,16px)] leading-[100%]">
                        Read full case study
                    </span>
                    <ChevronsRight className="w-4 h-4 text-[#6D7792] shrink-0" strokeWidth={2} />
                </span>
            </div>
        </Link>
    )
}
