import Image from "next/image";
import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "marketing-wayanad-courses-heading";
const SUB_HEADING_ID = "marketing-wayanad-courses-subheading";

const CALENDAR_SVG = "/photos/schools/marketing/CalendarDots.svg";
const CLOCK_SVG = "/photos/schools/marketing/Clock.svg";

type CourseDatum = {
    pill: string;
    title: string;
    description: string;
    features?: readonly string[];
    schedule?: { days: string; time: string } | null;
    comingSoon?: boolean;
    hideCta?: boolean;
};

const COURSES: readonly CourseDatum[] = [
    {
        pill: "Online | 5 Months",
        title: "5 Months Online Digital Marketing Course",
        description:
            "Learn from home through live sessions with mentor guidance.",
        features: [
            "Interactive live classes",
            "Projects and assignments",
            "Dedicated mentor support",
            "Recorded session access",
            "Industry tools and practical platforms",
        ],
        schedule: { days: "Monday to Friday", time: "8 PM to 10 PM" },
    },
    {
        pill: "Offline | 6 Months",
        title: "5+1 Months Offline Digital Marketing Course at Calicut Campus",
        description:
            "Experience practical learning with direct mentor interaction and collaborative activities.",
        features: [
            "5 Months Core Learning + 1 Month Specialisation",
            "AI integrated learning approach",
            "Project-based assignments",
            "Collaborative learning environment",
            "Career preparation support",
        ],
        schedule: { days: "Monday to Friday", time: "10:30 AM to 4 PM" },
    },
    {
        pill: "Online | 2 Months",
        title: "2 Month Online Performance Marketing Mastery Course",
        description:
            "Learn advanced paid campaign strategies across Google, Facebook and Instagram.",
        schedule: null,
    },
    {
        pill: "Coming Soon",
        title: "2 Month Online Content Creation & Social Media Mastery Course",
        description:
            "Learn content strategy, audience growth and platform engagement techniques.",
        schedule: null,
        comingSoon: true,
        hideCta: true,
    },
];

const INTRO_BLOCK = {
    heading: "Learn Your Way With Flexible Batch Options",
} as const;

const BETWEEN_BLOCK = {
    heading: "Marketing School Mastery Series",
    body: "Specialised programs for learners looking to develop focused expertise.",
} as const;

function ScheduleRow({ iconSrc, label }: { iconSrc: string; label: string }) {
    return (
        <div className="flex h-6 w-full max-w-[255px] items-center gap-[10px] lg:max-w-[560px]">
            <div className="relative h-6 w-6 shrink-0" aria-hidden>
                <Image src={iconSrc} alt="" fill className="object-contain" sizes="24px" />
            </div>
            <p
                className="m-0 min-w-0 text-[16px] font-normal leading-[150%] tracking-[-0.05em] text-black"
                style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 400 }}
            >
                {label}
            </p>
        </div>
    );
}

function CourseCard({ course }: { course: CourseDatum }) {
    const { pill, title, description, features, schedule, comingSoon, hideCta } = course;

    return (
        <article
            className="flex w-full flex-col gap-5 rounded-[16px] bg-[#E8F1FF] p-10 text-black lg:max-w-[640px]"
            aria-label={title}
        >
            <div className="flex w-full max-w-[255px] flex-col gap-[30px] lg:max-w-[560px] lg:min-h-[344px] min-h-[442px]">
                <span
                    className={`inline-flex h-[34px] w-fit max-w-full shrink-0 items-center gap-[10px] rounded-[20px] px-[10px] py-[6px] text-[16px] font-bold leading-none ${
                        comingSoon ? "bg-[#0066FF] text-white" : "bg-white text-black"
                    }`}
                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700 }}
                >
                    {pill}
                </span>

                <div className="flex w-full flex-col gap-5 lg:min-h-[192px] min-h-[290px]">
                    <h3
                        className="m-0 font-semibold text-[36px] leading-[90%] tracking-[-0.01em] text-black [text-rendering:geometricPrecision] lg:text-[40px]"
                        style={{ fontFamily: "Darker Grotesque, sans-serif", fontWeight: 600 }}
                    >
                        {title}
                    </h3>
                    <p
                        className="m-0 text-[16px] font-normal leading-[120%] tracking-[-0.05em] text-black"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 400 }}
                    >
                        {description}
                    </p>
                    {features && features.length > 0 && (
                        <ul className="m-0 flex list-none flex-col gap-[6px] p-0">
                            {features.map((f) => (
                                <li
                                    key={f}
                                    className="flex items-start gap-2 text-[15px] font-normal leading-[140%] tracking-[-0.03em] text-black"
                                    style={{ fontFamily: "Satoshi, sans-serif" }}
                                >
                                    <span className="mt-[3px] inline-block h-[8px] w-[8px] shrink-0 rounded-full bg-[#0066FF]" aria-hidden />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {schedule ? (
                    <div className="flex w-full max-w-[255px] flex-col gap-[10px] lg:max-w-[560px] lg:min-h-[58px] min-h-[58px]">
                        <ScheduleRow iconSrc={CALENDAR_SVG} label={schedule.days} />
                        <ScheduleRow iconSrc={CLOCK_SVG} label={schedule.time} />
                    </div>
                ) : null}
            </div>

            {!hideCta ? (
                <Link
                    href="/contact"
                    className="group relative flex h-[60px] w-[194px] shrink-0 cursor-pointer items-center no-underline"
                    aria-label={`Enquire now about: ${title}`}
                >
                    <div className="absolute left-0 top-0 flex h-[60px] w-[189px] items-center rounded-[30px] bg-white pl-[20px] shadow-sm transition-colors duration-300 group-hover:bg-[#F5F5F5]">
                        <span
                            className="whitespace-nowrap text-black"
                            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}
                        >
                            Enquire Now
                        </span>
                    </div>
                    <MarketingCtaArrowCircle className="absolute right-0 top-0" size="60" background="#0066FF" />
                </Link>
            ) : null}
        </article>
    );
}

export function MarketingSeoCoursesSection() {
    return (
        <section className="w-full bg-white text-black" aria-labelledby={HEADING_ID}>
            <div className="mx-auto box-border flex w-full max-w-[1440px] flex-col gap-[30px] px-[clamp(16px,4.16vw,60px)] py-[30px] md:px-[clamp(24px,5vw,48px)] lg:gap-[60px] lg:p-[60px]">
                <div className="flex w-full flex-col gap-3 lg:mx-0 lg:max-w-[1320px]">
                    <h2
                        id={HEADING_ID}
                        className="m-0 font-semibold text-[36px] leading-[95%] tracking-[0] text-black [text-rendering:geometricPrecision] lg:whitespace-nowrap lg:text-[clamp(40px,3.7vw,55px)] lg:leading-[150%] lg:tracking-[-0.05em]"
                        style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                    >
                        {INTRO_BLOCK.heading}
                    </h2>
                </div>

                <div className="flex w-full flex-col gap-5 lg:mx-0 lg:max-w-[1320px] lg:grid lg:grid-cols-2 lg:gap-10">
                    <CourseCard course={COURSES[0]} />
                    <CourseCard course={COURSES[1]} />

                    <div className="flex w-full flex-col gap-3 lg:col-span-2" aria-labelledby={SUB_HEADING_ID}>
                        <h3
                            id={SUB_HEADING_ID}
                            className="m-0 font-semibold text-[36px] leading-[95%] tracking-[0] text-black [text-rendering:geometricPrecision] lg:whitespace-nowrap lg:text-[clamp(40px,3.7vw,55px)] lg:leading-[150%] lg:tracking-[-0.05em]"
                            style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                        >
                            {BETWEEN_BLOCK.heading}
                        </h3>
                        <p
                            className="m-0 max-w-[750px] text-[16px] font-medium leading-[150%] tracking-[-0.05em] text-black/70 lg:text-[16px] lg:leading-[125%] lg:tracking-[0]"
                            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                        >
                            {BETWEEN_BLOCK.body}
                        </p>
                    </div>

                    <CourseCard course={COURSES[2]} />
                    <CourseCard course={COURSES[3]} />
                </div>
            </div>
        </section>
    );
}
