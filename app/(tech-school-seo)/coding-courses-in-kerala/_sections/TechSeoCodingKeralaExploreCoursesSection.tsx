import Link from "next/link";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "coding-kerala-explore-heading";

const COURSES = [
    {
        id: "data-analytics",
        title: "Advanced Data Analytics with AI",
        duration: "6-Month",
        mode: "Offline/Online",
        format: "Project-based Learning",
        description: "Learn Excel, SQL, Power BI, dashboards, business analytics and AI-assisted data workflows.",
        href: "/data-analytics-course-in-kerala",
        accentColor: "#6949FF",
    },
    {
        id: "python-django",
        title: "Advanced Python Django with Gen AI",
        duration: "5-Month",
        mode: "Offline/Online",
        format: "Project-based Learning",
        description: "Learn Python development, backend systems, APIs, automation and AI integrations.",
        href: "/python-course-in-calicut",
        accentColor: "#FF5600",
    },
    {
        id: "dashboard",
        title: "Dashboard Mastery with Excel + Power BI",
        duration: "6 Weeks",
        mode: "Online",
        format: "Hands-On Sessions",
        description: "Master business dashboards, data storytelling, reporting and visual analytics.",
        href: "/data-analytics-course-in-kerala",
        accentColor: "#29C76B",
    },
    {
        id: "applied-ai",
        title: "Applied AI – 4-Week Intensive Program",
        duration: "4 Weeks",
        mode: "Online",
        format: "Hands-On Sessions",
        description: "Explore AI foundations, automation thinking, prompting, design workflows, data analytics, and agent logic.",
        href: "/data-analytics-course-in-kerala",
        accentColor: "#2592FF",
    },
] as const;

export function TechSeoCodingKeralaExploreCoursesSection() {
    return (
        <section
            className="mx-auto box-border w-full max-w-[1440px] bg-transparent"
            aria-labelledby={HEADING_ID}
        >
            <div className="box-border flex w-full flex-col gap-[30px] px-4 py-5 lg:gap-[50px] lg:px-[60px] lg:py-10">
                <div className="flex w-full flex-col gap-2.5">
                    <h2
                        id={HEADING_ID}
                        className="m-0 w-full font-manrope text-[26px] font-semibold leading-[120%] tracking-[-0.02em] text-white lg:max-w-[900px] lg:text-[40px]"
                    >
                        Explore Other AI-Powered Coding Courses in Kerala at Tech School
                    </h2>
                    <p className="m-0 font-manrope text-sm font-normal leading-[140%] text-[#C6C6C6B2] lg:text-base">
                        We offer multiple beginner to advanced programs based on your career goals.
                    </p>
                </div>

                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                    {COURSES.map((course) => (
                        <article
                            key={course.id}
                            className="flex flex-col gap-4 overflow-hidden rounded-[18px]"
                            style={{
                                backgroundColor: "rgba(217,217,217,0.06)",
                                border: "1px solid rgba(105,73,255,0.18)",
                            }}
                        >
                            <div
                                className="h-1.5 w-full"
                                style={{ backgroundColor: course.accentColor }}
                            />
                            <div className="flex flex-1 flex-col gap-3 px-5 pb-5">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span
                                        className="rounded-full px-2.5 py-1 font-manrope text-[11px] font-semibold text-white"
                                        style={{ backgroundColor: course.accentColor }}
                                    >
                                        {course.duration}
                                    </span>
                                    <span className="font-manrope text-[11px] text-[#C6C6C6B2]">
                                        {course.mode} · {course.format}
                                    </span>
                                </div>
                                <h3 className="m-0 font-manrope text-[16px] font-semibold leading-[125%] text-white lg:text-[17px]">
                                    {course.title}
                                </h3>
                                <p className="m-0 flex-1 font-manrope text-[13px] font-normal leading-[150%] text-[#C6C6C6B2] lg:text-[14px]">
                                    {course.description}
                                </p>
                                <Link
                                    href={course.href}
                                    className="mt-1 inline-flex w-fit items-center gap-1.5 font-manrope text-[13px] font-semibold no-underline transition-opacity hover:opacity-80 lg:text-[14px]"
                                    style={{ color: course.accentColor }}
                                >
                                    Know More →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
