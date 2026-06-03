import Image from "next/image";
import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "dubai-learning-formats-heading";

const CALENDAR_SVG = "/photos/schools/marketing/CalendarDots.svg";
const CLOCK_SVG    = "/photos/schools/marketing/Clock.svg";

type BatchSchedule = { days: string; time: string };

type BatchDatum = {
    id: string;
    title: string;
    description: string;
    schedules: readonly BatchSchedule[];
};

const BATCHES: readonly BatchDatum[] = [
    {
        id: "morning",
        title: "Online Morning Weekday Batch",
        description:
            "Start your day with mentor-led live sessions designed around practical learning, AI tools, and hands-on assignments.",
        schedules: [
            { days: "Monday to Thursday", time: "10:30 AM — 12:30 PM" },
        ],
    },
    {
        id: "night",
        title: "Online Night Weekday Batch",
        description:
            "Perfect for working professionals and students looking to upskill after work hours while gaining the same practical exposure and project experience.",
        schedules: [
            { days: "Monday to Thursday", time: "8:00 PM — 10:00 PM" },
        ],
    },
    {
        id: "hybrid",
        title: "Hybrid Weekend Batch",
        description:
            "Enjoy flexible learning with online sessions during weekdays and in-person practical exposure on weekends.",
        schedules: [
            { days: "Friday & Saturday (Online)", time: "8 PM — 10 PM" },
            { days: "Sunday (Offline)",           time: "11 AM — 5 PM" },
        ],
    },
] as const;

function IconText({ iconSrc, label }: { iconSrc: string; label: string }) {
    return (
        <div className="flex items-center gap-[10px]">
            <div className="relative h-6 w-6 shrink-0" aria-hidden>
                <Image src={iconSrc} alt="" aria-hidden="true" fill className="object-contain" sizes="24px" />
            </div>
            <span
                className="text-[16px] font-normal leading-[150%] tracking-[-0.05em] text-black"
                style={{ fontFamily: "Satoshi, sans-serif", letterSpacing: "-0.05em" }}
            >
                {label}
            </span>
        </div>
    );
}

function ScheduleBlock({ schedules }: { schedules: readonly BatchSchedule[] }) {
    if (schedules.length === 1) {
        return (
            <div className="flex flex-col gap-[6px]">
                <IconText iconSrc={CALENDAR_SVG} label={schedules[0].days} />
                <IconText iconSrc={CLOCK_SVG}    label={schedules[0].time} />
            </div>
        );
    }

    /* Multiple schedules */
    return (
        <>
            {/* Mobile — vertical stack, untouched */}
            <div className="flex flex-col gap-[10px] lg:hidden">
                {schedules.map((s) => (
                    <div key={s.days} className="flex flex-col gap-[6px]">
                        <IconText iconSrc={CALENDAR_SVG} label={s.days} />
                        <IconText iconSrc={CLOCK_SVG}    label={s.time} />
                    </div>
                ))}
            </div>

            {/* Desktop — auto-sized 2-col grid: [📅 day (qualifier)] [🕐 time] per row */}
            <div className="hidden lg:grid lg:grid-cols-[auto_auto] lg:items-center lg:gap-x-8 lg:gap-y-[12px]">
                {schedules.map((s) => (
                    <div key={s.days} className="contents">
                        <IconText iconSrc={CALENDAR_SVG} label={s.days} />
                        <IconText iconSrc={CLOCK_SVG}    label={s.time} />
                    </div>
                ))}
            </div>
        </>
    );
}

function BatchCard({ batch }: { batch: BatchDatum }) {
    return (
        <article
            className="flex w-full flex-col justify-between gap-6 rounded-[16px] bg-[#E8F1FF] p-8 text-black lg:h-[440px] lg:gap-0 lg:p-[40px]"
            aria-label={batch.title}
        >
            {/* Upper block */}
            <div className="flex flex-col gap-5">
                <h3
                    className="m-0 text-[32px] font-semibold leading-[90%] tracking-[-0.01em] text-black [text-rendering:geometricPrecision] lg:text-[40px]"
                    style={{ fontFamily: "Darker Grotesque, sans-serif", letterSpacing: "-0.01em" }}
                >
                    {batch.title}
                </h3>

                <p
                    className="m-0 text-[16px] font-normal leading-[120%] text-black/75"
                    style={{ fontFamily: "Satoshi, sans-serif", letterSpacing: "-0.05em" }}
                >
                    {batch.description}
                </p>

                <ScheduleBlock schedules={batch.schedules} />
            </div>

            {/* CTA */}
            <Link
                href="/contact"
                className="group relative flex h-[60px] w-[194px] shrink-0 cursor-pointer items-center no-underline"
                aria-label={`Enquire now about: ${batch.title}`}
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
        </article>
    );
}

export function DubaiLearningFormatsSection() {
    return (
        <section className="w-full bg-white text-black" aria-labelledby={HEADING_ID}>
            <div className="mx-auto box-border flex w-full max-w-[1440px] flex-col gap-[30px] px-[clamp(16px,4.16vw,60px)] py-[30px] lg:gap-[60px] lg:p-[60px]">

                {/* Heading + description */}
                <div className="flex flex-col gap-3 lg:max-w-[900px]">
                    <h2
                        id={HEADING_ID}
                        className="m-0 text-[36px] font-semibold leading-[95%] tracking-[0] text-black [text-rendering:geometricPrecision] lg:text-[clamp(40px,3.7vw,55px)] lg:leading-[105%] lg:tracking-[-0.02em]"
                        style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                    >
                        Choose a Learning Style That Works for You
                    </h2>
                    <p
                        className="m-0 text-[16px] font-medium leading-[150%] tracking-[-0.03em] text-black/70"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                    >
                        Online, hybrid &amp; flexible learning formats that works with your schedule. Whether you prefer online weekday
                        sessions or a hybrid weekend setup, every option follows the same AI-integrated,
                        practical approach with live classes, projects, assignments, and mentor support.
                    </p>
                </div>

                {/* 3-column card grid — gap 20px on desktop */}
                <div
                    className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    role="list"
                    aria-label="Available learning batch formats"
                >
                    {BATCHES.map((batch) => (
                        <div key={batch.id} role="listitem">
                            <BatchCard batch={batch} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
