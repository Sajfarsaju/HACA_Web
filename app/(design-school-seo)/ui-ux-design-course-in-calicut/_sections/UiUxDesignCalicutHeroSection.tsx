import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
    "/photos/schools/design/seo/f8ffd321da3ec108d8efb58fc7c6ffe8f2a44f1d.webp";

const FONT = "'Switzer', var(--font-outfit), sans-serif";

const STATS = [
    { number: "500+", label: "Students Trained and Counting" },
    { number: "200+", label: "Recruiters Partnered with Us" },
    { number: "15+", label: "Agency-Based Mentors Guiding You" },
] as const;

const HERO_PARA =
    "At Design School by HACA, we offer a 3-month, industry-focused UI/UX Design Course in Calicut, now available completely online, designed for beginners, aspiring designers, and creative professionals looking to build real-world product design skills.";

function ModePill() {
    return (
        <div className="flex items-center" style={{ gap: 7 }}>
            {/* Green live dot */}
            <span
                className="shrink-0 rounded-full bg-[#009961]"
                style={{ width: 8, height: 8 }}
                aria-hidden
            />
            <span
                style={{
                    fontFamily: FONT,
                    fontWeight: 600,
                    color: "#009961",
                    lineHeight: "100%",
                    letterSpacing: 0,
                }}
                className="text-[12px] lg:text-[16px]"
            >
                Online
            </span>
            <span
                className="select-none text-black"
                style={{ fontFamily: FONT, fontWeight: 400 }}
            >
                &nbsp;|&nbsp;
            </span>
            <span
                style={{
                    fontFamily: FONT,
                    fontWeight: 600,
                    color: "#000000",
                    lineHeight: "100%",
                    letterSpacing: 0,
                }}
                className="text-[12px] lg:text-[16px]"
            >
                3 Months
            </span>
        </div>
    );
}

function HeroButton({
    label,
    href,
    className = "",
}: {
    label: string;
    href: string;
    className?: string;
}) {
    return (
        <Link
            href={href}
            className={[
                "flex items-center gap-[5px] rounded-[20px] bg-[#E7E7E7]",
                "transition-colors duration-200 hover:bg-[#d6d6d6] active:bg-[#c8c8c8]",
                className,
            ].join(" ")}
            style={{ padding: "0 10px" }}
        >
            <span
                className="shrink-0 leading-none"
                style={{ fontSize: 20, color: "#14BCFF" }}
                aria-hidden
            >
                •
            </span>
            <span
                style={{
                    fontFamily: FONT,
                    fontWeight: 500,
                    color: "#000000",
                    lineHeight: "100%",
                    letterSpacing: 0,
                    whiteSpace: "nowrap",
                }}
                className="text-[16px] lg:text-[18px]"
            >
                {label}
            </span>
        </Link>
    );
}

/** Single stat: large number + small label side by side */
function StatItem({
    number,
    label,
    numSize,
    labelSize,
}: {
    number: string;
    label: string;
    numSize: number;
    labelSize: number;
}) {
    return (
        <div className="flex flex-row items-center" style={{ gap: 5 }}>
            <span
                style={{
                    fontFamily: FONT,
                    fontWeight: 500,
                    fontSize: numSize,
                    lineHeight: "100%",
                    color: "#000000",
                    flexShrink: 0,
                }}
            >
                {number}
            </span>
            <span
                style={{
                    fontFamily: FONT,
                    fontWeight: 400,
                    fontSize: labelSize,
                    lineHeight: "120%",
                    color: "#00000080",
                }}
            >
                {label}
            </span>
        </div>
    );
}

function StatsRow() {
    return (
        <>
            {/* ── Desktop: 3 items in a row, no background ── */}
            <div className="hidden lg:flex items-center" style={{ gap: 20 }}>
                {STATS.map((s) => (
                    <StatItem key={s.number} number={s.number} label={s.label} numSize={36} labelSize={14} />
                ))}
            </div>

            {/*
             * ── Mobile: staggered layout ──
             * Outer div owns lg:hidden (no inline display, so Tailwind wins).
             * Inner div owns display:grid (no visibility class, so no conflict).
             *
             *   col-1 row-1 → 500+
             *   col-2 row-1+2 (centered) → 200+
             *   col-1 row-2 → 15+
             */}
            <div className="lg:hidden w-full">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gridTemplateRows: "1fr 1fr 1fr",
                        columnGap: 10,
                        rowGap: 1,
                        minHeight: 160,
                    }}
                >
                    {/* 500+ — row 1, left */}
                    <div style={{ gridColumn: 1, gridRow: 1 }}>
                        <StatItem number="500+" label={STATS[0].label} numSize={35} labelSize={12} />
                    </div>

                    {/* 200+ — row 2, right (top = bottom of 500+) */}
                    <div style={{ gridColumn: 2, gridRow: 2 }}>
                        <StatItem number="200+" label={STATS[1].label} numSize={35} labelSize={12} />
                    </div>

                    {/* 15+ — row 3, left (top = bottom of 200+) */}
                    <div style={{ gridColumn: 1, gridRow: 3 }}>
                        <StatItem number="15+" label={STATS[2].label} numSize={35} labelSize={12} />
                    </div>
                </div>
            </div>
        </>
    );
}

function HeroParagraph() {
    return (
        <>
            {/* Desktop */}
            <p
                className="m-0 hidden lg:block"
                style={{
                    width: 684,
                    fontFamily: FONT,
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "100%",
                    letterSpacing: 0,
                    color: "#00000080",
                }}
            >
                {HERO_PARA}
            </p>

            {/* Mobile */}
            <p
                className="m-0 lg:hidden w-full"
                style={{
                    fontFamily: FONT,
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "100%",
                    letterSpacing: 0,
                    color: "#00000080",
                }}
            >
                {HERO_PARA}
            </p>
        </>
    );
}

export function UiUxDesignCalicutHeroSection() {
    return (
        <section className="w-full bg-white" aria-label="Hero">
            <div
                className={[
                    "mx-auto box-border w-full max-w-[1440px]",
                    /* Mobile: column, text first → image below */
                    "flex flex-col gap-[20px]",
                    "px-[16px] py-[20px]",
                    /* Desktop: row, image left / content right */
                    "lg:flex-row lg:justify-between lg:items-center",
                    "lg:px-[40px] lg:py-[30px] lg:h-[781px]",
                ].join(" ")}
            >
                {/* ── Image ─────────────────────────────────── */}
                {/* Mobile: order-2 (below text) | Desktop: order-1 (left) */}
                <div className="order-2 lg:order-1 flex items-end justify-center">
                    {/* Mobile size */}
                    <Image
                        src={HERO_IMAGE}
                        alt="UI/UX design students working on creative projects at HACA"
                        width={510}
                        height={721}
                        className="block lg:hidden w-[343px] h-auto object-contain"
                        sizes="343px"
                        priority
                    />
                    {/* Desktop size */}
                    <Image
                        src={HERO_IMAGE}
                        alt="UI/UX design students working on creative projects at HACA"
                        width={510}
                        height={721}
                        className="hidden lg:block object-contain h-auto"
                        style={{ width: "clamp(280px, 35vw, 510px)" }}
                        sizes="(max-width: 1280px) 35vw, 510px"
                        priority
                    />
                </div>

                {/* ── Right / Top content ────────────────────── */}
                {/* Mobile: order-1 (top) | Desktop: order-2 (right) */}
                <div
                    className="order-1 lg:order-2 flex flex-col self-center"
                    style={{ gap: 20 }}
                >
                    {/* Inner container: pill + subtitle + heading + buttons */}
                    <div
                        className="flex flex-col"
                        style={{ gap: 10 }}
                    >
                        {/* Desktop inner gap is 20px */}
                        <div className="hidden lg:flex lg:flex-col w-full" style={{ gap: 20, maxWidth: 751 }}>
                            <ModePill />

                            <p
                                className="m-0"
                                style={{
                                    fontFamily: FONT,
                                    fontWeight: 400,
                                    fontSize: 16,
                                    lineHeight: "100%",
                                    color: "#000000",
                                }}
                            >
                                Are you looking to build a strong career in design?
                            </p>

                            <h1
                                className="m-0"
                                style={{
                                    fontFamily: FONT,
                                    fontWeight: 500,
                                    fontSize: 60,
                                    lineHeight: "100%",
                                    letterSpacing: "-0.02em",
                                    color: "#000000",
                                }}
                            >
                                Join HACA&apos;s Career-Ready UI/UX Design Course in Calicut
                            </h1>

                            {/* Buttons row */}
                            <div className="flex items-center" style={{ gap: 20 }}>
                                <HeroButton
                                    label="View Course Details"
                                    href="#course-details"
                                    className="h-[48px]"
                                />
                                <HeroButton
                                    label="Enquire Now"
                                    href="/contact"
                                    className="h-[48px]"
                                />
                            </div>
                        </div>

                        {/* Mobile inner container */}
                        <div className="flex flex-col lg:hidden" style={{ gap: 10 }}>
                            <ModePill />

                            <p
                                className="m-0"
                                style={{
                                    fontFamily: FONT,
                                    fontWeight: 400,
                                    fontSize: 14,
                                    lineHeight: "100%",
                                    color: "#000000",
                                }}
                            >
                                Are you looking to build a strong career in design?
                            </p>

                            <h1
                                className="m-0"
                                style={{
                                    fontFamily: FONT,
                                    fontWeight: 500,
                                    fontSize: 35,
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                    color: "#000000",
                                }}
                            >
                                Join HACA&apos;s Career-Ready UI/UX Design Course in Calicut
                            </h1>

                            {/* Mobile buttons: justify-between, full container width */}
                            <div
                                className="flex items-center justify-between w-full"
                                style={{ height: 41 }}
                            >
                                <HeroButton
                                    label="View Course Details"
                                    href="#course-details"
                                    className="h-[41px]"
                                />
                                <HeroButton
                                    label="Enquire Now"
                                    href="/contact"
                                    className="h-[41px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Stats + Paragraph — desktop only */}
                    <div className="hidden lg:flex lg:flex-col" style={{ gap: 20 }}>
                        <StatsRow />
                        <HeroParagraph />
                    </div>
                </div>

                {/* Stats + Paragraph — mobile only, order-3 (below image) */}
                <div className="order-3 lg:hidden flex flex-col" style={{ gap: 20 }}>
                    <StatsRow />
                    <HeroParagraph />
                </div>
            </div>
        </section>
    );
}
