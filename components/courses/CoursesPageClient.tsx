"use client"

import { useState } from "react"
import { CourseCategoryFilter } from "@/components/courses/CourseCategoryFilter"
import { CourseCardsGrid } from "@/components/courses/CourseCardsGrid"

export function CoursesPageClient() {
    const [activeCategory, setActiveCategory] = useState<string>("all")

    return (
        <section className="w-full section-4k mx-auto flex flex-col items-center gap-[36px] pt-6 sm:pt-12 md:pt-20 lg:pt-[120px] pb-12 sm:pb-16 md:pb-20 lg:pb-[80px] px-4 sm:px-6 md:px-10 lg:px-[60px]">
            {/* Heading container */}
            <div className="w-full max-w-[788px] mx-auto flex flex-col gap-[clamp(20px,2.5vw,20px)] max-md:gap-[20px]">
                <h1 className="w-full font-rethink font-bold text-[clamp(26px,4vw,54px)] leading-[34px] text-center text-white m-0">
                    Courses
                </h1>
                <p className="w-full font-rethink font-bold text-[clamp(14px,1.4vw,20px)] leading-[clamp(17px,2.1vw,34px)] text-center text-[#A7ADBE] m-0">
                    We offer practical upskilling courses in digital marketing, tech, finance, and design.
                    Explore your options below, choose the path that fits your goals, and start building the
                    career you’ve been thinking about.
                </p>
            </div>

            {/* Courses filter + cards container */}
            <div className="w-full flex flex-col items-center gap-[36px]">
                <CourseCategoryFilter value={activeCategory} onChange={setActiveCategory} />
                <CourseCardsGrid activeCategory={activeCategory} />
            </div>
        </section>
    )
}

