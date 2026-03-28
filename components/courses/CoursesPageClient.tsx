"use client"

import { useState } from "react"
import { CourseCategoryFilter } from "@/components/courses/CourseCategoryFilter"
import { CourseCardsGrid } from "@/components/courses/CourseCardsGrid"

export function CoursesPageClient() {
    const [activeCategory, setActiveCategory] = useState<string>("all")

    return (
        <section className="w-full section-4k mx-auto flex flex-col items-center gap-[36px] pt-6 sm:pt-12 md:pt-20 lg:pt-[120px] pb-12 sm:pb-16 md:pb-20 lg:pb-[80px] px-4 sm:px-6 md:px-10 lg:px-[60px]">
            {/* Heading */}
            <h1 className="font-rethink font-bold text-[26px] sm:text-[32px] md:text-[42px] lg:text-[58px] leading-[34px] sm:leading-[40px] md:leading-[48px] lg:leading-[34px] tracking-[0] text-center text-white max-w-[788px] mx-auto">
                Courses
            </h1>

            {/* Intro paragraph */}
            <p className="font-rethink font-bold text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] leading-[27px] sm:leading-[30px] md:leading-[32px] lg:leading-[34px] tracking-[0] text-center text-[#A7ADBE] max-w-[1096px] mx-auto">
                We offer practical upskilling courses in digital marketing, tech, finance, and design.
                Explore your options below, choose the path that fits your goals, and start building the
                career you’ve been thinking about.
            </p>

            {/* Courses filter + cards container */}
            <div className="w-full flex flex-col items-center gap-[36px]">
                <CourseCategoryFilter value={activeCategory} onChange={setActiveCategory} />
                <CourseCardsGrid activeCategory={activeCategory} />
            </div>
        </section>
    )
}

