"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import type { Course } from "@/lib/courseCatalog"
import { COURSES } from "@/lib/courseCatalog"
import { CourseBreakdownModal } from "@/components/courses/CourseBreakdownModal"

const BACKEND_URL =
    typeof process !== "undefined" && process.env.NEXT_PUBLIC_BACKEND_URL
        ? process.env.NEXT_PUBLIC_BACKEND_URL
        : "http://localhost:5000"

async function fetchCoursesFromApi(): Promise<Course[]> {
    try {
        const res = await fetch(`${BACKEND_URL}/api/courses`, { cache: "no-store" })
        if (!res.ok) return []
        const data = await res.json()
        const items: Course[] = (data.items ?? []).map(
            (c: Record<string, unknown>, idx: number) => ({
                _id: String(c._id),
                id: typeof c.id === "number" ? c.id : idx + 1,
                title: typeof c.title === "string" ? c.title : String(c.name ?? ""),
                name: typeof c.name === "string" ? c.name : undefined,
                categorySlug: c.categorySlug as Course["categorySlug"],
                category: typeof c.category === "string" ? c.category : "",
                mode: c.mode as Course["mode"],
                trainingSummary: typeof c.trainingSummary === "string" ? c.trainingSummary : "",
                popupHeading: typeof c.popupHeading === "string" ? c.popupHeading : undefined,
                amount: typeof c.amount === "string" ? c.amount : undefined,
                originalAmount: typeof c.originalAmount === "string" ? c.originalAmount : undefined,
                modules: Array.isArray(c.modules)
                    ? (c.modules as Array<{ label: string; title: string; content: string }>).map(
                          (m, i) => ({ ...m, id: i + 1 })
                      )
                    : undefined,
            })
        )
        return items
    } catch {
        return []
    }
}

function filterCourses(items: Course[], activeCategory: string) {
    if (activeCategory === "all") return items
    return items.filter((c) => c.categorySlug === activeCategory)
}

export function CourseCardsGrid({ activeCategory }: { activeCategory: string }) {
    const [courses, setCourses] = useState<Course[]>(COURSES)
    const [breakdownCourse, setBreakdownCourse] = useState<Course | null>(null)

    useEffect(() => {
        fetchCoursesFromApi().then((apiCourses) => {
            if (apiCourses.length > 0) {
                setCourses(apiCourses)
            }
            // else keep static fallback
        })
    }, [])

    const filtered = filterCourses(courses, activeCategory)

    return (
        <>
            <div className="w-full flex flex-col gap-[26px] px-4 sm:px-6 md:px-10 lg:px-[60px] pb-[60px]">
                {/* Tablet & desktop: 2 columns on tablet, 3 on large screens */}
                <div className="hidden md:grid w-full max-w-[1320px] mx-auto grid-cols-2 lg:grid-cols-3 gap-[26px]">
                    {filtered.map((course) => (
                        <CourseCard
                            key={course._id ?? course.id}
                            course={course}
                            onOpenBreakdown={() => setBreakdownCourse(course)}
                        />
                    ))}
                </div>

                {/* Mobile: 1 column */}
                <div className="md:hidden w-full flex flex-col items-center gap-[20px]">
                    {filtered.map((course) => (
                        <CourseCard
                            key={course._id ?? course.id}
                            course={course}
                            onOpenBreakdown={() => setBreakdownCourse(course)}
                        />
                    ))}
                </div>
            </div>

            <CourseBreakdownModal
                key={breakdownCourse?.id ?? "closed"}
                course={breakdownCourse}
                onClose={() => setBreakdownCourse(null)}
            />
        </>
    )
}

function CourseCard({
    course,
    onOpenBreakdown,
}: {
    course: Course
    onOpenBreakdown: () => void
}) {
    return (
        <article className="w-full max-w-[408px] min-h-[300px] flex flex-col gap-[20px] p-[20px] rounded-[20px] border border-[#25317D] bg-[#000319] box-border">
            {/* Top row: category pill + mode */}
            <div className="flex items-center justify-between gap-[10px]">
                <span className="inline-flex items-center px-[12px] py-[6px] rounded-[100px] bg-[rgba(255,255,255,0.08)] text-[#A7ADBE] font-rethink font-medium text-[14px] leading-[20px] w-fit">
                    {course.category}
                </span>
                <span className="font-rethink font-medium text-[12px] leading-[18px] text-[#A7ADBE]">
                    {course.mode}
                </span>
            </div>

            {/* Title */}
            <h3 className="font-rethink font-semibold text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] text-white m-0">
                {course.title}
            </h3>

            {/* Training summary */}
            <p className="font-rethink font-medium text-[14px] sm:text-[16px] leading-[24px] sm:leading-[27px] text-[#A7ADBE] m-0">
                {course.trainingSummary}
            </p>

            {/* CTA button */}
            <motion.button
                type="button"
                onClick={onOpenBreakdown}
                className="group relative mt-auto flex h-[55px] w-full max-w-[239px] cursor-pointer items-center justify-center overflow-hidden rounded-[100px] border-none px-5"
                style={{
                    background: "linear-gradient(180deg, #4C75FF 0%, #1A4FFF 100%)",
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", mass: 1, stiffness: 220.5, damping: 17.14 }}
            >
                <span className="flex h-full w-full items-center justify-center whitespace-nowrap font-rethink text-[18px] font-medium leading-[27px] text-white transition-transform duration-300 ease-out group-hover:-translate-y-full max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                    View Course Breakdown
                </span>
                <span className="pointer-events-none absolute inset-0 flex translate-y-full items-center justify-center whitespace-nowrap font-rethink text-[18px] font-medium leading-[27px] text-white transition-transform duration-300 ease-out group-hover:translate-y-0 max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                    View Course Breakdown
                </span>
            </motion.button>
        </article>
    )
}
