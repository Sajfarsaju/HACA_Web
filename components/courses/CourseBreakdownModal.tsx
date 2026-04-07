"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useEffect, useState } from "react"
import type { Course, CourseModule } from "@/lib/courseCatalog"
import { formatCourseBadgeLine, getModulesForCourse } from "@/lib/courseCatalog"
import { CourseToolsMarquee } from "@/components/courses/CourseToolsMarquee"

type CourseBreakdownModalProps = {
    course: Course | null
    onClose: () => void
}

export function CourseBreakdownModal({ course, onClose }: CourseBreakdownModalProps) {
    const [openModuleId, setOpenModuleId] = useState<number | null>(null)

    useEffect(() => {
        if (!course) setOpenModuleId(null)
    }, [course])

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        },
        [onClose]
    )

    useEffect(() => {
        if (!course) return
        document.addEventListener("keydown", handleKeyDown)
        const prev = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = prev
        }
    }, [course, handleKeyDown])

    if (!course) return null

    const badgeLine = formatCourseBadgeLine(course)
    const modules = getModulesForCourse(course)

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#000312]/80 backdrop-blur-[6px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-breakdown-title"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-[1162px]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Circular close: centered on panel corner — half outside (Figma-style) */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-0 top-0 z-30 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-[#3d4d8f] bg-[#000319] text-[#E8EAEF] shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition-colors hover:border-[#4c5d9e] hover:bg-[#131839] hover:text-white"
                    aria-label="Close"
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0 opacity-95"
                        aria-hidden
                    >
                        <path
                            d="M18 6L6 18M6 6l12 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                <div
                    className="relative flex max-h-[min(90vh,1421px)] flex-col rounded-[17.62px] border-2 border-[#232D6B] bg-[#000210] overflow-hidden shadow-[0px_8px_40px_rgba(0,0,0,0.45)]"
                >
                <div
                    className="flex min-h-0 flex-1 flex-col gap-[17.62px] overflow-y-auto overscroll-contain pt-[30px] pb-6 sm:pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                {/* Top container */}
                <div className="flex flex-col items-center gap-[17.62px] px-4 sm:px-6 pt-[17.62px] pb-[17.62px] sm:pt-[17.62px] sm:pr-[29.96px] sm:pb-[17.62px] sm:pl-[29.96px]">
                    {/* Badge: training line only, inside frosted pill (no icon) */}
                    <div className="flex w-full max-w-[min(463px,100%)] justify-center">
                        <div className="inline-flex max-w-full items-center justify-center rounded-[20px] sm:rounded-[88.12px] border border-white/10 bg-[#FFFFFF1A] px-[14.1px] py-[7.05px] shadow-[0px_0.88px_0.88px_0px_#0003124D,0px_7.05px_9.61px_0px_#0003121F] backdrop-blur-[5.29px]">
                            <p className="font-rethink font-semibold text-center text-[15px] sm:text-[20px] leading-[1.3] text-[#A7ADBE] m-0 px-1">
                                {badgeLine.includes(" + ") ? (
                                    <>
                                        {badgeLine.split(" + ")[0]}
                                        <br className="sm:hidden" />
                                        <span className="sm:inline-block">
                                            {" + "}
                                            {badgeLine.split(" + ")[1]}
                                        </span>
                                    </>
                                ) : (
                                    badgeLine
                                )}
                            </p>
                        </div>
                    </div>

                    <h2
                        id="course-breakdown-title"
                        className="font-rethink font-bold text-[26px] sm:text-[34px] lg:text-[44px] leading-[110%] tracking-[0] text-center text-white m-0 max-w-[min(802px,100%)] px-1"
                    >
                        {course.title}
                    </h2>
                </div>

                {/* Center: module accordion */}
                <div className="flex flex-col gap-[44px] px-4 sm:px-6 lg:px-8 pb-2">
                    <div className="mx-auto flex w-full max-w-[1102px] flex-col gap-[17.62px]">
                        {modules.map((mod) => (
                            <ModuleCard
                                key={mod.id}
                                mod={mod}
                                isOpen={openModuleId === mod.id}
                                onToggle={() =>
                                    setOpenModuleId((prev) => (prev === mod.id ? null : mod.id))
                                }
                            />
                        ))}
                    </div>
                </div>

                <CourseToolsMarquee />
                <CourseBottomSeatSection />
                </div>
                </div>
            </div>
        </div>
    )
}

function CourseBottomSeatSection() {
    return (
        <div className="mx-auto flex w-full max-w-[1163px] flex-col gap-[26.44px] px-[clamp(16px,4vw,29.96px)] pt-[30px] pb-[50px]">
            <div className="mx-auto flex w-full max-w-[1103px] flex-col items-center gap-5">
                <div className="flex w-full max-w-[244px] flex-col items-center gap-[5px] rounded-[12px] px-[10px]">
                    <div className="inline-flex min-h-[37.1px] items-center justify-center rounded-[20px] sm:rounded-[88.12px] border border-white/10 bg-[#FFFFFF1A] px-[14.1px] py-[7.05px] shadow-[0px_0.88px_0.88px_0px_#0003124D,0px_7.05px_9.61px_0px_#0003121F] backdrop-blur-[5.29px]">
                        <span className="font-rethink text-center text-[20px] font-semibold leading-[22.47px] text-[#A7ADBE]">
                            Now at
                        </span>
                    </div>

                    <div className="flex w-full max-w-[224px] flex-col items-center justify-between gap-1">
                        <div className="relative flex h-auto items-center justify-center">
                            <p className="m-0 font-rethink text-center text-[22px] sm:text-[30px] font-semibold leading-[1.2] text-[#A7ADBE]">
                                ₹85,000
                            </p>
                            <span className="pointer-events-none absolute h-0 w-[70px] sm:w-[97.99px] rotate-[-8.5deg] border-t-[2px] sm:border-t-[3px] border-white" />
                        </div>

                        <div className="relative flex h-auto w-full items-center justify-center">
                            <p className="m-0 font-rethink text-center text-[38px] font-bold leading-[1] text-white sm:text-[60px]">
                                ₹80,000
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex w-full max-w-[235px] flex-col items-center gap-[8px] sm:gap-[10px]">
                    <p className="m-0 text-center font-rethink text-[16px] sm:text-[20px] font-semibold leading-[1.2] text-[#A7ADBE]">
                        Pre book your seat @ 499
                    </p>
                    <motion.button
                        type="button"
                        className="group relative flex h-[55px] w-[170px] cursor-pointer items-center justify-center overflow-hidden rounded-[100px] border-none bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] px-5"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", mass: 1, stiffness: 220.5, damping: 17.14 }}
                    >
                        <span className="flex h-full w-full items-center justify-center whitespace-nowrap font-rethink text-[18px] font-medium leading-[27px] text-white transition-transform duration-300 ease-out group-hover:-translate-y-full max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                            Claim your Seat
                        </span>
                        <span className="pointer-events-none absolute inset-0 flex translate-y-full items-center justify-center whitespace-nowrap font-rethink text-[18px] font-medium leading-[27px] text-white transition-transform duration-300 ease-out group-hover:translate-y-0 max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                            Claim your Seat
                        </span>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

function ModuleCard({
    mod,
    isOpen,
    onToggle,
}: {
    mod: CourseModule
    isOpen: boolean
    onToggle: () => void
}) {
    return (
        <div
            className={`w-full rounded-[12px] border-2 bg-[#000319] box-border overflow-hidden transition-colors ${
                isOpen ? "border-[rgba(37,49,125,0.5)]" : "border-[#232D6B]"
            }`}
        >
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full flex-row items-center justify-between gap-4 py-[26.44px] pl-[29.96px] pr-[29.96px] bg-transparent border-none cursor-pointer text-left box-border min-h-0 sm:gap-6"
                aria-expanded={isOpen}
            >
                <div className="flex min-w-0 flex-1 flex-col gap-[8.81px]">
                    <span className="font-manrope font-medium text-[14px] sm:text-[16px] leading-[100%] text-[#A7ADBE]">
                        {mod.label}
                    </span>
                    <span className="font-manrope font-semibold text-[20px] sm:text-[26px] lg:text-[30px] leading-[100%] tracking-[-0.02em] text-[#F2F2F2]">
                        {mod.title}
                    </span>
                </div>
                <span
                    className={`shrink-0 flex h-[26.44px] w-[26.44px] items-center justify-center transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                >
                    <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[26px] w-[26px]"
                    >
                        <path
                            d="M6 9L12 15L18 9"
                            stroke="#A7ADBE"
                            strokeWidth="2.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-[29.96px] pb-[26.44px] pt-0 font-manrope text-[15px] sm:text-[16px] leading-[160%] text-[#A7ADBE]">
                            {mod.content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
