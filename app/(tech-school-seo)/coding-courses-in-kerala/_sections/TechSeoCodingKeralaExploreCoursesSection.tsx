import Link from "next/link";

import { TECH_SEO_PAGE_BG } from "@/lib/tech-school-seo";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "coding-kerala-explore-heading";

const BORDER_GRADIENT =
    "linear-gradient(96.19deg, rgba(255, 255, 255, 0.12) 4.9%, rgba(143, 55, 255, 0.07) 97.48%)";

const COURSES = [
    {
        id: "data-analytics",
        title: "Advanced Data Analytics with AI",
        duration: "6-Month",
        mode: "Offline/Online",
        format: "Project-based Learning",
        description: "Learn Excel, SQL, Power BI, dashboards, business analytics and AI-assisted data workflows.",
        href: "/data-analytics-course-in-kerala",
    },
    {
        id: "python-django",
        title: "Advanced Python Django with Gen AI",
        duration: "5-Month",
        mode: "Offline/Online",
        format: "Project-based Learning",
        description: "Learn Python development, backend systems, APIs, automation and AI integrations.",
        href: "/python-course-in-calicut",
    },
    {
        id: "dashboard",
        title: "Dashboard Mastery with Excel + Power BI",
        duration: "6 Weeks",
        mode: "Online",
        format: "Hands-On Sessions",
        description: "Master business dashboards, data storytelling, reporting and visual analytics.",
        href: "/data-analytics-course-in-kerala",
    },
] as const;

function CourseCard({ course }: { course: (typeof COURSES)[number] }) {
    return (
        /* Gradient border wrapper — 1px padding acts as the border */
        <div
            className="h-full rounded-[20px] p-[1px]"
            style={{ background: BORDER_GRADIENT }}
        >
            <article
                className="relative flex h-full flex-col gap-[16px] overflow-hidden rounded-[19px] p-[20px] lg:p-[24px]"
                style={{ backgroundColor: "#11062D" }}
            >
                {/* Purple glow blob — bottom-right corner */}
                <div
                    className="pointer-events-none absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 rounded-full"
                    style={{
                        width: "300px",
                        height: "300px",
                        background: "#8F37FF59",
                        filter: "blur(137.6px)",
                    }}
                    aria-hidden
                />

                {/* Content above the glow */}
                <div className="relative z-10 flex flex-1 flex-col gap-[16px]">
                    {/* Tags row */}
                    <p className="m-0 font-manrope text-[12px] font-normal leading-[100%] text-white/60">
                        {course.duration}&nbsp;&nbsp;•&nbsp;&nbsp;{course.mode}&nbsp;&nbsp;•&nbsp;&nbsp;{course.format}
                    </p>

                    {/* Title */}
                    <h3 className="m-0 font-manrope text-[22px] font-semibold leading-[120%] text-white lg:text-[26px]">
                        {course.title}
                    </h3>

                    {/* Description */}
                    <p className="m-0 flex-1 font-manrope text-[14px] font-normal leading-[150%] text-white/60">
                        {course.description}
                    </p>

                    {/* CTA */}
                    <Link
                        href={course.href}
                        className="mt-auto inline-flex w-fit items-center justify-center rounded-[12px] bg-[#6949FF] px-[20px] py-[12px] font-manrope text-[14px] font-semibold leading-[100%] text-white no-underline transition-opacity hover:opacity-80"
                    >
                        Know More
                    </Link>
                </div>
            </article>
        </div>
    );
}

export function TechSeoCodingKeralaExploreCoursesSection() {
    return (
        <section
            className="mx-auto w-full max-w-[1440px]"
            style={{ backgroundColor: TECH_SEO_PAGE_BG }}
            aria-labelledby={HEADING_ID}
        >
            <div className="flex flex-col items-center gap-[30px] px-5 py-10 lg:gap-[50px] lg:px-[60px] lg:py-[60px]">

                {/* Heading + subtitle */}
                <div className="flex flex-col items-center gap-[12px]">
                    <h2
                        id={HEADING_ID}
                        className="m-0 max-w-[340px] text-center font-manrope text-[26px] font-semibold leading-[120%] text-white lg:max-w-[700px] lg:text-[40px]"
                    >
                        Explore Other AI-Powered Coding Courses in Kerala at Tech School
                    </h2>
                    <p className="m-0 text-center font-manrope text-[14px] font-normal leading-[140%] text-[#C6C6C6B2] lg:text-[16px]">
                        We offer multiple beginner to advanced programs based on your career goals.
                    </p>
                </div>

                {/* Cards — horizontal scroll on mobile, 3-col grid on desktop */}
                <div className="flex w-full items-stretch gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
                    {COURSES.map((course) => (
                        <div key={course.id} className="w-[75vw] shrink-0 lg:w-auto">
                            <CourseCard course={course} />
                        </div>
                    ))}
                </div>
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
