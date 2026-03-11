"use client"

type Course = {
    id: number
    title: string
    categorySlug: string
    category: string
    mode: "Offline" | "Online"
    trainingSummary: string
}

const COURSES: Course[] = [
    {
        id: 1,
        title: "Basic to Advanced AI-Integrated Digital Marketing Course",
        categorySlug: "marketing",
        category: "Digital Marketing",
        mode: "Offline",
        trainingSummary: "6 Months Training · 1 Month Internship",
    },
    {
        id: 2,
        title: "Creative Design and Communication",
        categorySlug: "design",
        category: "Design",
        mode: "Offline",
        trainingSummary: "5 Months Training · 1 Month Internship",
    },
    {
        id: 3,
        title: "Advanced Data Analytics with AI",
        categorySlug: "tech",
        category: "Tech",
        mode: "Offline",
        trainingSummary: "5 Months Training · 1 Month Project",
    },
    {
        id: 4,
        title: "Advance Practical Accounting & Financial Intelligence",
        categorySlug: "finance",
        category: "Finance",
        mode: "Online",
        trainingSummary: "6 Months Training",
    },
    // Duplicate patterns to form 4 rows × 3 columns
    {
        id: 5,
        title: "Basic to Advanced AI-Integrated Digital Marketing Course",
        categorySlug: "marketing",
        category: "Digital Marketing",
        mode: "Offline",
        trainingSummary: "6 Months Training · 1 Month Internship",
    },
    {
        id: 6,
        title: "Creative Design and Communication",
        categorySlug: "design",
        category: "Design",
        mode: "Offline",
        trainingSummary: "5 Months Training · 1 Month Internship",
    },
    {
        id: 7,
        title: "Advanced Data Analytics with AI",
        categorySlug: "tech",
        category: "Tech",
        mode: "Offline",
        trainingSummary: "5 Months Training · 1 Month Project",
    },
    {
        id: 8,
        title: "Advance Practical Accounting & Financial Intelligence",
        categorySlug: "finance",
        category: "Finance",
        mode: "Online",
        trainingSummary: "6 Months Training",
    },
    {
        id: 9,
        title: "Basic to Advanced AI-Integrated Digital Marketing Course",
        categorySlug: "marketing",
        category: "Digital Marketing",
        mode: "Offline",
        trainingSummary: "6 Months Training · 1 Month Internship",
    },
    {
        id: 10,
        title: "Creative Design and Communication",
        categorySlug: "design",
        category: "Design",
        mode: "Offline",
        trainingSummary: "5 Months Training · 1 Month Internship",
    },
    {
        id: 11,
        title: "Advanced Data Analytics with AI",
        categorySlug: "tech",
        category: "Tech",
        mode: "Offline",
        trainingSummary: "5 Months Training · 1 Month Project",
    },
    {
        id: 12,
        title: "Advance Practical Accounting & Financial Intelligence",
        categorySlug: "finance",
        category: "Finance",
        mode: "Online",
        trainingSummary: "6 Months Training",
    },
]

function filterCourses(items: Course[], activeCategory: string) {
    if (activeCategory === "all") return items
    return items.filter((c) => c.categorySlug === activeCategory)
}

export function CourseCardsGrid({ activeCategory }: { activeCategory: string }) {
    const filtered = filterCourses(COURSES, activeCategory)

    return (
        <div className="w-full flex flex-col gap-[26px] px-4 sm:px-6 md:px-10 lg:px-[60px] pb-[60px]">
            {/* Tablet & desktop: 2 columns on tablet, 3 on large screens */}
            <div className="hidden md:grid w-full max-w-[1320px] mx-auto grid-cols-2 lg:grid-cols-3 gap-[26px]">
                {filtered.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>

            {/* Mobile: 1 column */}
            <div className="md:hidden w-full flex flex-col items-center gap-[20px]">
                {filtered.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    )
}

function CourseCard({ course }: { course: Course }) {
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
            <button
                type="button"
                className="mt-auto inline-flex items-center justify-center w-full max-w-[239px] px-5 py-[14px] rounded-[100px] font-rethink font-medium text-[16px] sm:text-[18px] leading-[27px] text-white whitespace-nowrap"
                style={{
                    background: "linear-gradient(180deg, #4C75FF 0%, #1A4FFF 100%)",
                }}
            >
                View Course Breakdown
            </button>
        </article>
    )
}

