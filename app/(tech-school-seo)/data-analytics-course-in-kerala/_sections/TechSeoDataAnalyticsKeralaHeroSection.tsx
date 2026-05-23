import Image from "next/image";
import Link from "next/link";

import { TECH_SEO_PAGE_BG } from "@/lib/tech-school-seo";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HERO_PATTERN =
    "/photos/Tech/seo/f889a6b526d3394b21534d414b853cab3287cf14.webp";

const COURSE_INFO_SEGMENTS = [
    { id: "duration", lines: ["5 Months + 1 Month", "Project"] as const },
    { id: "mode", lines: ["Offline/ Online"] as const },
    { id: "learning", lines: ["Project Based", "Learning"] as const },
] as const;

function CourseInfoDivider({ orientation }: { orientation: "vertical" | "horizontal" }) {
    if (orientation === "vertical") {
        return (
            <span
                className="hidden h-[23px] w-[3px] shrink-0 rounded-full bg-[#FFFFFFB2] lg:block"
                aria-hidden
            />
        );
    }

    return (
        <span
            className="block h-[3px] w-[22px] shrink-0 self-start rounded-full bg-[#FFFFFFB2] lg:hidden"
            aria-hidden
        />
    );
}

function CourseInfoSegment({ lines }: { lines: readonly string[] }) {
    const textClass =
        "font-manrope text-[12px] font-medium leading-[110%] text-[#FFFFFFB2] lg:text-[14px]";

    if (lines.length === 1) {
        return <span className={textClass}>{lines[0]}</span>;
    }

    return (
        <span className={`flex flex-col items-start gap-0 ${textClass}`}>
            <span>{lines[0]}</span>
            <span>{lines[1]}</span>
        </span>
    );
}

function CourseInfoPill() {
    return (
        <div className="flex w-auto flex-col items-start gap-[14px] lg:h-[30px] lg:w-auto lg:flex-row lg:items-center lg:gap-5">
            {COURSE_INFO_SEGMENTS.map((segment, index) => (
                <span key={segment.id} className="contents">
                    {index > 0 ? (
                        <>
                            <CourseInfoDivider orientation="horizontal" />
                            <CourseInfoDivider orientation="vertical" />
                        </>
                    ) : null}
                    <CourseInfoSegment lines={segment.lines} />
                </span>
            ))}
        </div>
    );
}

function HeroCtaButton({
    href,
    label,
    variant,
}: {
    href: string;
    label: string;
    variant: "primary" | "secondary";
}) {
    const isPrimary = variant === "primary";

    return (
        <Link
            href={href}
            className={[
                "inline-flex shrink-0 items-center justify-center font-manrope text-[18px] font-semibold leading-[110%] no-underline transition-opacity hover:opacity-90",
                isPrimary
                    ? "h-[46px] rounded-[10px] bg-[#6949FF] px-[18px] py-[14px] text-white lg:h-[52px] lg:rounded-2xl lg:px-5 lg:py-4"
                    : "h-[46px] rounded-[10px] bg-white px-[18px] py-[14px] text-black lg:h-[52px] lg:rounded-2xl lg:px-5 lg:py-4",
            ].join(" ")}
        >
            {label}
        </Link>
    );
}

export function TechSeoDataAnalyticsKeralaHeroSection() {
    return (
        <section
            className="relative mx-auto box-border w-full max-w-[1441px] overflow-x-clip"
            style={{ backgroundColor: TECH_SEO_PAGE_BG }}
            aria-labelledby="data-analytics-kerala-hero-heading"
        >
            <div className="relative flex min-h-[754px] w-full flex-col gap-5 px-4 py-5 md:flex-row md:items-start md:justify-between md:gap-6 md:px-8 lg:min-h-0 lg:flex-col lg:gap-5 lg:overflow-visible lg:px-[60px] lg:pb-0 lg:pt-10">
            <div className="order-2 flex w-full max-w-[343px] flex-col gap-[15px] md:order-1 md:min-w-0 md:max-w-[min(520px,52%)] md:flex-1 md:shrink-0 lg:relative lg:z-10 lg:h-auto lg:w-[620px] lg:max-w-[620px] lg:flex-none lg:gap-[230px]">
                <div className="hidden md:block">
                    <CourseInfoPill />
                </div>

                <div className="flex w-full min-w-0 flex-col gap-4 lg:max-w-[620px] lg:gap-6">
                    <div className="flex w-full min-w-0 flex-col gap-2.5 lg:max-w-[620px] lg:gap-[24.67px]">
                        <p className="m-0 w-full font-manrope text-base font-semibold leading-[110%] text-[#C6C6C6B2] lg:max-w-[620px] lg:whitespace-nowrap lg:text-[26px]">
                            Smarter Data with AI-powered Analytics
                        </p>

                        <h1
                            id="data-analytics-kerala-hero-heading"
                            className="m-0 w-full font-manrope text-[26px] font-semibold leading-[120%] text-white lg:max-w-[620px] lg:overflow-visible lg:text-[50px]"
                        >
                            <span className="lg:block lg:whitespace-nowrap">
                                Introducing HACA&apos;s Advanced
                            </span>
                            <span className="lg:block lg:whitespace-nowrap">Data Analytics Course in Kerala</span>
                        </h1>

                        <p className="m-0 w-full font-manrope text-sm font-semibold leading-[120%] text-[#C6C6C6B2] lg:max-w-[620px] lg:overflow-visible">
                            <span className="lg:block lg:whitespace-nowrap">
                                Join HACA Tech School&apos;s most practical and beginner-friendly Data Analytics
                                Course in Kerala and learn how companies use data, dashboards, automation, and AI
                            </span>
                            <span className="lg:block lg:whitespace-nowrap">
                                to grow faster and make smarter decisions. This course is designed for students,
                                graduates, working professionals, freelancers, and career switchers who want to build
                            </span>
                            <span className="lg:block lg:whitespace-nowrap">
                                a future in tech with one of the most in demand skills today.
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 lg:gap-3">
                        <HeroCtaButton href="/contact" label="Join Now" variant="primary" />
                        <HeroCtaButton
                            href="/contact"
                            label="Get a free consultation"
                            variant="secondary"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile only: course info above pattern (right), labels and dividers left-aligned inside */}
            <div className="order-1 flex w-full flex-col gap-3 md:hidden">
                <div className="flex w-full justify-end">
                    <CourseInfoPill />
                </div>
                <div className="flex w-full justify-center">
                    <Image
                        src={HERO_PATTERN}
                        alt=""
                        width={260}
                        height={250}
                        className="h-[250px] w-[260px] object-contain"
                        priority
                        aria-hidden
                    />
                </div>
            </div>

            {/* Tablet only: pattern on the right, text stays left */}
            <div className="order-2 hidden shrink-0 justify-end md:flex md:items-start lg:hidden">
                <Image
                    src={HERO_PATTERN}
                    alt=""
                    width={360}
                    height={325}
                    className="h-[min(325px,38vw)] w-[min(360px,42vw)] object-contain"
                    priority
                    aria-hidden
                />
            </div>

            {/* Desktop: fixed top-right so nowrap text cannot push it off-screen */}
            <div className="pointer-events-none absolute right-[60px] top-10 z-0 hidden lg:block">
                <Image
                    src={HERO_PATTERN}
                    alt=""
                    width={484}
                    height={436}
                    className="h-[436px] w-[484px] object-contain"
                    priority
                    aria-hidden
                />
            </div>
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
