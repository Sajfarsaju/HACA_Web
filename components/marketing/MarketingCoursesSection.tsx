import React from "react"
import Link from "next/link"

type CourseRow = {
    /** Duration pill: `mode | duration` (e.g. Online | 5 Months). Omit `duration` for a single label. */
    pill: { mode: string; duration?: string }
    titleLines: readonly string[]
    titleMobile: string
    descriptionLines: readonly [string, string, string]
    group?: "main" | "mastery"
    href: string
}

const ACCENT = "#0066FF"

const COURSES: CourseRow[] = [
    {
        pill: { mode: "Offline", duration: "5 Months + 1 Month Internship" },
        titleLines: ["Basic to Advanced AI-", "integrated Digital", "Marketing Program"],
        titleMobile: "Basic to Advanced AI-integrated Digital Marketing Program",
        descriptionLines: [
            "his includes",
            "5 months of advanced training with the latest AI tools, plus 1 month focused",
            "internship on a special skill.",
        ],
        group: "main",
        href: "/marketing-school/courses#course-basic-advanced-offline",
    },
    {
        pill: { mode: "Online", duration: "5 Months" },
        titleLines: ["Basic to Advanced AI-", "integrated Digital", "Marketing Program"],
        titleMobile: "Basic to Advanced AI-integrated Digital Marketing Program",
        descriptionLines: [
            "Study from home with live classes covering the same advanced training,",
            "practical projects and AI tools. This course is perfect if you're working or busy",
            "during the day.",
        ],
        group: "main",
        href: "/marketing-school/courses#course-basic-advanced-online",
    },
    {
        pill: { mode: "Online", duration: "2 Months" },
        titleLines: ["Performance Marketing", "Mastery"],
        titleMobile: "Performance Marketing Mastery",
        descriptionLines: [
            "Specialise in running high-ROI ad campaigns across Google, Facebook,",
            "Instagram and more. Perfect for those who want to master paid ads in less",
            "time.",
        ],
        group: "mastery",
        href: "/marketing-school/courses#course-performance-marketing",
    },
    {
        pill: { mode: "Coming Soon" },
        titleLines: ["Content Creation & Social", "Media Mastery Course"],
        titleMobile: "Content Creation & Social Media Mastery Course",
        descriptionLines: [
            "Learn how to grow, engage, and monetise audiences on platforms like",
            "Instagram, LinkedIn, YouTube, and Facebook with proven strategies and",
            "content planning.",
        ],
        group: "mastery",
        href: "/marketing-school/courses#course-content-social-media",
    },
]

function DurationPill({ mode, duration }: { mode: string; duration?: string }) {
    const detail = duration?.trim()
    return (
        <span
            className="
                inline-flex max-w-full items-center gap-[10px] rounded-full bg-[#E8F1FF] px-[14px] py-[7px]
                font-['Satoshi',sans-serif] text-[clamp(12px,1.1vw,14px)] font-medium leading-none tracking-normal text-black
                transition-[background-color,color] duration-300 ease-out
                lg:group-hover:bg-transparent lg:group-hover:text-white
                lg:group-focus-within:bg-transparent lg:group-focus-within:text-white
            "
        >
            <span className="shrink-0 whitespace-nowrap">{mode}</span>
            {detail ? (
                <>
                    <span
                        className="h-[14px] w-px shrink-0 bg-black opacity-90 transition-colors lg:group-hover:bg-white lg:group-focus-within:bg-white"
                        aria-hidden
                    />
                    <span className="min-w-0 whitespace-normal text-left">{detail}</span>
                </>
            ) : null}
        </span>
    )
}

function CourseRowArrows() {
    return (
        <span
            className="inline-flex shrink-0 items-center justify-center overflow-visible"
            style={{ width: 35.3, height: 41.166 }}
        >
            {/* Exact Figma arrow: 35.3×41.166 px, natural angle −48.67°. Hover rotates +48.67° → points right. */}
            <svg
                width={35.3}
                height={41.166}
                viewBox="0 0 33 31"
                fill="currentColor"
                aria-hidden
                className="
                    origin-center [transform-box:fill-box]
                    text-[#0066FF]
                    transition-[transform,color] duration-300 ease-out
                    group-hover:rotate-[40.67deg] group-hover:text-white
                    group-focus-within:rotate-[40.67deg] group-focus-within:text-white
                "
            >
                <path d="M31.0463 25.2203L32.3732 4.46569C32.4228 3.68739 32.1613 2.9211 31.6462 2.33533C31.1311 1.74957 30.4045 1.39229 29.6262 1.34208L8.8722 0.00604453C8.09389 -0.0440589 7.3277 0.217078 6.74216 0.732013C6.45223 0.986982 6.21539 1.29659 6.04515 1.64315C5.8749 1.98971 5.7746 2.36644 5.74996 2.75183C5.72532 3.13722 5.77683 3.52372 5.90154 3.88927C6.02626 4.25481 6.22174 4.59225 6.47682 4.8823C6.99198 5.46809 7.71864 5.82533 8.49695 5.87544L22.1655 6.75535L0.998772 25.37C0.41315 25.885 0.0561907 26.6116 0.00642165 27.3901C-0.0433474 28.1685 0.218151 28.935 0.73339 29.5209C1.24863 30.1068 1.9754 30.4641 2.75382 30.5142C3.53225 30.5643 4.29857 30.3031 4.88419 29.7881L26.0509 11.1735L25.177 24.8424C25.1513 25.2281 25.202 25.615 25.3263 25.981C25.4506 26.3471 25.646 26.6849 25.9013 26.9752C26.1566 27.2655 26.4667 27.5025 26.8138 27.6725C27.161 27.8426 27.5383 27.9423 27.924 27.9661C28.7023 28.016 29.4684 27.7549 30.054 27.2399C30.6395 26.725 30.9964 25.9986 31.0463 25.2203Z" />
            </svg>
        </span>
    )
}

function KnowMorePill() {
    /** Mobile-only (parent is `lg:hidden`); specs from design — desktop course row uses `CourseRowArrows` instead. */
    return (
        <div
            className="
                inline-flex h-[44px] w-[148.26666259765625px] max-w-full shrink-0 items-center gap-[7.33px] rounded-full bg-[#E8F1FF]
                pl-[14px] pr-0
                transition-[background-color,color] duration-300 ease-out
            "
        >
            <span className="min-w-0 shrink-0 whitespace-nowrap font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] tracking-normal text-black">
                Know More
            </span>
            <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[22px] bg-[#0066FF] p-[13.2px]">
                <svg
                    width={17.6}
                    height={17.6}
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className="block shrink-0 text-white"
                >
                    <path
                        d="M5 12h14m0 0-6-6m6 6-6 6"
                        stroke="currentColor"
                        strokeWidth={2.25}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
        </div>
    )
}

export function MarketingCoursesSection() {
    return (
        <section
            id="marketing-courses"
            className="w-full opacity-100"
            aria-labelledby="marketing-courses-heading"
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-[10px]
                    px-[clamp(16px,4.16vw,60px)]
                    pt-5 pb-10
                    max-lg:min-h-0 lg:min-h-[1070px]
                "
            >
                <header className="flex w-full min-w-0 flex-col gap-5 border-t border-[#3a3a3a] pb-8 pt-6 max-lg:border-t-0 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:border-t-0 lg:pb-12 lg:pt-8">
                    <div className="flex shrink-0 items-center gap-[clamp(10px,1.5vw,14px)] lg:pt-1">
                        <span
                            className="h-[10px] w-[10px] shrink-0 rounded-full lg:h-3 lg:w-3"
                            style={{ backgroundColor: ACCENT }}
                            aria-hidden
                        />
                        <p
                            className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,16px)] font-medium leading-none tracking-normal"
                        >
                            Courses
                        </p>
                    </div>
                    <h2
                        id="marketing-courses-heading"
                        className="
                            w-full min-w-0 max-w-full text-left font-semibold tracking-normal
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.5rem,5vw,3.125rem)] leading-[1.08]
                            lg:ml-auto lg:max-w-[min(100%,720px)] lg:leading-[1.08]
                        "
                    >
                        <span className="lg:hidden">
                            We&apos;ve Career-Focused
                            <br />
                            Programs Just for You
                        </span>
                        <span className="hidden lg:inline">
                            We&apos;ve Career-Focused Programs Just
                            <br />
                            for You
                        </span>
                    </h2>
                </header>

                <div className="flex w-full min-w-0 flex-col">
                    {COURSES.map((course, idx) => (
                        <React.Fragment key={course.titleMobile}>
                            {course.group === "mastery" &&
                                (idx === 2 ||
                                    (idx > 0 && COURSES[idx - 1]?.group !== "mastery")) ? (
                                null
                            ) : null}
                            <article className="course-row group relative border-b border-[#3a3a3a] transition-[border-color] duration-300 ease-out lg:hover:border-transparent lg:focus-within:border-transparent">
                                <Link
                                    href={course.href}
                                    className="
                                    block relative cursor-pointer rounded-[16px] px-0 py-6 no-underline
                                    transition-[background-color,color] duration-300 ease-out
                                    lg:group-hover:bg-[#0066FF] lg:group-focus-within:bg-[#0066FF]
                                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF]
                                    lg:rounded-[20px]
                                    lg:-mx-[clamp(16px,4.16vw,60px)] lg:px-[clamp(16px,4.16vw,60px)]
                                    lg:py-[clamp(22px,3vw,34px)]
                                "
                                >
                                    <div
                                        className="
                                        grid w-full min-w-0 grid-cols-1 gap-6
                                        lg:grid-cols-[minmax(0,42%)_minmax(0,1fr)] lg:items-stretch lg:gap-x-[clamp(32px,4.5vw,56px)]
                                    "
                                    >
                                        <div className="flex min-w-0 flex-col items-start justify-center lg:justify-start lg:self-start">
                                            <DurationPill mode={course.pill.mode} duration={course.pill.duration} />
                                            <h3
                                                className="
                                                course-text mt-4 w-full min-w-0 text-left tracking-normal
                                                transition-colors duration-300 ease-out
                                                [font-family:'Darker_Grotesque',sans-serif]
                                                max-lg:max-w-[min(100%,343px)] max-lg:min-h-[44px] max-lg:text-[26px] max-lg:font-semibold
                                                max-lg:leading-[85%]
                                                lg:mt-[18px] lg:font-bold lg:text-[clamp(1.125rem,4.2vw,2.125rem)] lg:leading-[1.12]
                                                lg:group-hover:text-white lg:group-focus-within:text-white
                                            "
                                            >
                                                <span className="lg:hidden">{course.titleMobile}</span>
                                                <span className="hidden lg:inline">
                                                    {course.titleLines.map((line, i) => (
                                                        <React.Fragment key={`${line}-${i}`}>
                                                            {line}
                                                            {i < course.titleLines.length - 1 ? (
                                                                <><br aria-hidden /></>
                                                            ) : null}
                                                        </React.Fragment>
                                                    ))}
                                                </span>
                                            </h3>
                                        </div>

                                        <div
                                            className="
                                            flex w-full min-w-0 max-w-[min(100%,681.225px)] flex-col items-stretch gap-4
                                            lg:ml-auto lg:h-full lg:min-h-[66px] lg:max-w-[min(100%,681.225px)] lg:justify-end lg:gap-6
                                            lg:pr-[clamp(56px,8vw,88px)]
                                        "
                                        >
                                            <p
                                                className="
                                                course-text m-0 w-full min-w-0 whitespace-pre-line lg:whitespace-normal text-left
                                                font-['Satoshi',sans-serif] text-[16px] font-medium leading-[1.5] tracking-normal
                                                transition-colors duration-300 ease-out
                                                lg:min-h-[72px] lg:max-w-[572px] lg:w-full lg:shrink lg:leading-[1.45]
                                                lg:group-hover:text-white lg:group-focus-within:text-white
                                            "
                                            >
                                                {course.descriptionLines.join("\n")}
                                            </p>
                                            <div className="flex w-full justify-start lg:hidden">
                                                <KnowMorePill />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                {/* Arrow — inside the card padding, right-aligned with the content edge */}
                                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:right-[clamp(16px,4.16vw,60px)] lg:top-auto lg:bottom-[clamp(36px,4.2vw,52px)] lg:flex lg:translate-y-0 lg:items-center">
                                    <CourseRowArrows />
                                </div>
                            </article>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <style>{`
                @media (min-width: 1024px) {
                    #marketing-courses .group:hover .course-text,
                    #marketing-courses .group:focus-within .course-text {
                    color: white !important;
                    }
                }
            `}</style>
        </section>
    )
}
