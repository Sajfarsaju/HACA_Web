import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "dubai-exclusive-benefits-heading";

const CARD1_IMAGE = "/photos/schools/ae/Group 41771 (1).webp";
const CARD2_IMAGE = "/photos/schools/ae/Frame 79 (1).webp";

function LearnMoreLink({ href, ariaLabel, className = "" }: { href: string; ariaLabel: string; className?: string }) {
    return (
        <Link
            href={href}
            className={[
                "group relative mt-auto flex h-[60px] w-[182px] shrink-0 cursor-pointer items-center no-underline",
                className,
            ].join(" ")}
            aria-label={ariaLabel}
        >
            <div className="absolute left-0 top-0 flex h-[60px] w-[177px] items-center rounded-[30px] bg-[#E6EFFF] pl-[20px] transition-colors duration-300 group-hover:bg-[#d6e4ff]">
                <span
                    className="whitespace-nowrap text-black"
                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}
                >
                    Learn More
                </span>
            </div>
            <MarketingCtaArrowCircle className="absolute right-0 top-0" size="60" />
        </Link>
    );
}

type BenefitCardShellProps = {
    children: ReactNode;
    className?: string;
    gridClass: string;
    hasBottomImage?: boolean;
};

function BenefitCardShell({ children, className = "", gridClass, hasBottomImage = false }: BenefitCardShellProps) {
    return (
        <div
            className={[
                "flex min-h-0 w-full flex-col rounded-[16px] bg-[#151718] shadow-[0px_4px_4px_0px_#00000040]",
                hasBottomImage ? "overflow-hidden p-[30px] pb-0" : "p-[30px]",
                "gap-5 lg:min-h-0",
                gridClass,
                className,
            ].join(" ")}
        >
            {children}
        </div>
    );
}

function CardTitle({ children }: { children: ReactNode }) {
    return (
        <h3
            className="
                m-0 w-full text-[24px] font-medium leading-[95%] tracking-[-0.01em] text-white
                [font-family:'Darker_Grotesque',sans-serif] [text-rendering:geometricPrecision]
                lg:text-[30px] lg:leading-[120%]
            "
        >
            {children}
        </h3>
    );
}

function CardBody({ children }: { children: ReactNode }) {
    return (
        <p
            className="
                m-0 w-full text-[14px] font-normal leading-[150%] tracking-[-0.02em] text-[#FFFFFFB2]
                [font-family:'Satoshi',sans-serif]
                lg:text-[16px] lg:leading-[120%] lg:tracking-[-0.05em]
            "
        >
            {children}
        </p>
    );
}

function CardImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="mt-auto -mx-[30px] w-[calc(100%+60px)] shrink-0 overflow-hidden">
            <Image
                src={src}
                alt={alt}
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 420px"
                className="w-full h-auto block"
            />
        </div>
    );
}

export function DubaiExclusiveBenefitsSection() {
    return (
        <section className="box-border w-full min-w-0 bg-black text-white" role="region" aria-labelledby={HEADING_ID}>
            <div
                className="
                    box-border mx-auto flex w-full min-w-0 max-w-[1440px] flex-col gap-[30px]
                    px-5 pb-[clamp(24px,5vw,40px)] pt-9
                    md:px-[clamp(24px,5vw,48px)] md:pt-[clamp(28px,4vw,40px)]
                    lg:gap-[60px] lg:p-[60px]
                "
            >
                {/* Heading */}
                <header className="mx-auto flex w-full max-w-[1320px] flex-col gap-[10px]">
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 max-w-[min(602px,100%)] text-left font-semibold tracking-[-0.05em] text-white
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(2rem,8vw,3.4375rem)] leading-[110%] [text-rendering:geometricPrecision]
                            lg:text-[55px]
                        "
                    >
                        Additional Benefits Included For Learners
                    </h2>
                </header>

                {/* Grid */}
                <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4 lg:grid lg:min-h-[740px] lg:grid-cols-3 lg:gap-4">

                    {/* 1 — 4000 AED Worth (tall, image) */}
                    <BenefitCardShell
                        hasBottomImage
                        gridClass="lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:min-h-[488px] lg:gap-5"
                        className="min-h-0 gap-5 lg:gap-5"
                    >
                        <CardTitle>4000 AED Worth of Modules &amp; Short Courses</CardTitle>
                        <CardBody>
                            Boost your professional journey with specialized modules, AI-integrated learning,
                            practical assignments, and career-focused training.
                        </CardBody>
                        <LearnMoreLink
                            href="/contact"
                            ariaLabel="Learn more about 4000 AED Worth of Modules & Short Courses"
                            className="mt-0"
                        />
                        <CardImage src={CARD1_IMAGE} alt="HACA students at graduation ceremony" />
                    </BenefitCardShell>

                    {/* 2 — Practical Assignments */}
                    <BenefitCardShell gridClass="lg:col-start-2 lg:row-start-1 lg:min-h-[236px]" className="gap-2 lg:gap-2">
                        <CardTitle>Practical Assignments &amp; Real Projects</CardTitle>
                        <CardBody>
                            Each core module includes hands-on assignments where students apply skills to real tasks.
                            In the final month, students complete a full project, conduct audits, and present their work.
                        </CardBody>
                    </BenefitCardShell>

                    {/* 3 — 7+ Industry Certifications */}
                    <BenefitCardShell gridClass="lg:col-start-3 lg:row-start-1 lg:min-h-[236px]" className="gap-2 lg:gap-2">
                        <CardTitle>7+ Industry Certifications</CardTitle>
                        <CardBody>
                            Earn globally recognized certifications while building practical skills and a job-ready portfolio.
                        </CardBody>
                    </BenefitCardShell>

                    {/* 4 — 1 Year Access */}
                    <BenefitCardShell gridClass="lg:col-start-2 lg:row-start-2 lg:min-h-[236px]" className="gap-2 lg:gap-2">
                        <CardTitle>1 Year Access to Recorded Sessions</CardTitle>
                        <CardBody>
                            Revisit lessons anytime and continue learning with long-term access to session recordings.
                        </CardBody>
                    </BenefitCardShell>

                    {/* 5 — Live Events (tall, image) */}
                    <BenefitCardShell
                        hasBottomImage
                        gridClass="lg:col-start-3 lg:row-start-2 lg:row-span-2 lg:min-h-[488px] lg:gap-5"
                        className="gap-5 lg:gap-5"
                    >
                        <CardTitle>Live Events &amp; Industry Activities</CardTitle>
                        <CardBody>
                            Learn beyond classrooms through Brand War, TGIF (Debate Room, Agency Files, Purple Cow),
                            Founder Interview activities, and two guest sessions every month.
                        </CardBody>
                        <LearnMoreLink href="/contact" ariaLabel="Learn more about Live Events & Industry Activities" className="mt-0" />
                        <CardImage src={CARD2_IMAGE} alt="HACA live industry event and student activities" />
                    </BenefitCardShell>

                    {/* 6 — Lifetime Community (wide) */}
                    <BenefitCardShell
                        gridClass="lg:col-span-2 lg:col-start-1 lg:row-start-3 lg:min-h-[200px]"
                        className="gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
                    >
                        <div className="flex min-w-0 flex-1 flex-col gap-2 lg:gap-2">
                            <CardTitle>Lifetime Community Membership</CardTitle>
                            <CardBody>
                                Stay connected and grow with our professional network, mentorship community, and industry ecosystem.
                            </CardBody>
                        </div>
                        <LearnMoreLink href="/contact" ariaLabel="Learn more about Lifetime Community Membership" className="lg:mt-0" />
                    </BenefitCardShell>

                </div>
            </div>
        </section>
    );
}
