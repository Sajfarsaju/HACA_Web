import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "marketing-seo-exclusive-benefits-heading";

const SCHOLARSHIP_CARD_IMAGE = "Group 41771.webp";
const BRAND_WAR_CARD_IMAGE = "Frame 79.webp";

function marketingAsset(filename: string) {
    return `/photos/schools/marketing/${encodeURIComponent(filename)}`;
}

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

function JoinLeadCta() {
    return (
        <Link
            href="/contact"
            className="
                group relative inline-flex h-[44px] w-fit shrink-0 cursor-pointer items-center no-underline
                max-lg:gap-[7.33px] max-lg:rounded-full max-lg:bg-[#E8F1FF] max-lg:pl-[14px] max-lg:pr-0
                lg:h-[60px]
            "
            aria-label="Join now — marketing course in Calicut"
        >
            <span className="whitespace-nowrap text-black lg:hidden" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "100%" }}>
                Join Now
            </span>
            <span
                className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[22px] p-[13.2px] lg:hidden"
                style={{ backgroundColor: "#000000" }}
                aria-hidden
            >
                <svg width={17.6} height={17.6} viewBox="0 0 24 24" fill="none" className="block text-white">
                    <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            <div className="relative hidden h-[60px] w-fit rounded-[30px] bg-[#E6EFFF] pl-[20px] pr-[76px] transition-colors duration-300 group-hover:bg-[#d6e4ff] lg:block">
                <span
                    className="flex h-full items-center whitespace-nowrap text-black"
                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}
                >
                    Join Now
                </span>
            </div>
            <MarketingCtaArrowCircle
                size="60"
                background="#000000"
                className="pointer-events-none absolute right-0 top-0 hidden lg:block"
            />
        </Link>
    );
}

function LeadDecisionPanel() {
    return (
        <div
            className="
                relative mx-auto flex w-full max-w-[min(100%,520px)] min-w-0 flex-col items-center justify-center
                overflow-hidden rounded-[20px] bg-[#0066FF] px-5 py-10 sm:max-w-[1320px] sm:px-8 sm:py-12
                lg:min-h-[500px] lg:px-12 lg:py-14
            "
        >
            <img
                src="/photos/schools/marketing/placements/placement-cta-star-tr.svg"
                alt=""
                width={297}
                height={301}
                className="pointer-events-none absolute right-0 top-0 h-auto w-[min(297px,72%)] max-sm:w-[min(200px,58%)] select-none"
                aria-hidden
            />
            <img
                src="/photos/schools/marketing/placements/placement-cta-star-bl.svg"
                alt=""
                width={246}
                height={250}
                className="pointer-events-none absolute bottom-0 left-0 h-auto w-[min(246px,68%)] max-sm:w-[min(180px,55%)] select-none"
                aria-hidden
            />
            <div className="relative z-10 mx-auto flex w-full max-w-[min(900px,100%)] flex-col items-center gap-5 text-center sm:gap-[30px]">
                <p
                    className="
                        m-0 font-semibold tracking-[-0.05em] text-white [font-family:'Darker_Grotesque',sans-serif]
                        text-[clamp(1.5rem,5.2vw,2.5rem)] leading-[1.1] [text-rendering:geometricPrecision]
                        lg:text-[clamp(2.25rem,4vw,3.5rem)] lg:leading-[1.08]
                    "
                >
                    Why Follow the Crowd When You Can Lead?
                </p>
                <p
                    className="m-0 max-w-[min(560px,100%)] text-[16px] font-normal leading-[150%] tracking-[-0.05em] text-white/95"
                    style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
                >
                    Theory is cool, but real marketing magic happens when you&apos;re in the driver&apos;s seat.
                </p>
                <JoinLeadCta />
            </div>
        </div>
    );
}

type BenefitCardShellProps = {
    children: ReactNode;
    className?: string;
    /** Desktop grid placement (Tailwind grid utilities) */
    gridClass: string;
    /** Image bleeds to card sides and sits flush on the bottom edge */
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
        <div
            className="
                relative mt-auto -mx-[30px] w-[calc(100%+60px)] shrink-0 overflow-hidden
                aspect-[16/10] lg:aspect-[5/3]
            "
        >
            <Image src={src} alt={alt} fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 420px" />
        </div>
    );
}

/**
 * Calicut SEO — exclusive benefits masonry + placement-style blue CTA.
 */
export function MarketingSeoExclusiveBenefitsSection() {
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
                {/* Intro — desktop: space-between row; mobile: stack gap 10 */}
                <header
                    className="
                        mx-auto flex w-full max-w-[1320px] flex-col gap-[10px]
                        lg:min-h-[72px] lg:flex-row lg:items-start lg:justify-between lg:gap-10
                    "
                >
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 max-w-[min(602px,100%)] text-left font-semibold tracking-[-0.05em] text-white
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(2rem,8vw,3.4375rem)] leading-[110%] [text-rendering:geometricPrecision]
                            lg:text-[55px]
                        "
                    >
                        Exclusive Benefits You Can&apos;t Miss
                    </h2>
                    <p
                        className="
                            m-0 max-w-[min(335px,100%)] shrink-0 text-center text-[16px] font-normal leading-[150%] tracking-[-0.05em] text-[#FFFFFFB2]
                            lg:ml-auto lg:max-w-[226px] lg:text-right
                        "
                        style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
                    >
                        Scholarships, clubs, events, and insider programs that take your learning beyond the classroom.
                    </p>
                </header>

                {/* Masonry — mobile: single column stack; lg+: 3×3 grid with spans */}
                <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4 lg:grid lg:min-h-[740px] lg:grid-cols-3 lg:gap-4">
                    {/* 1 — Learner Scholarship Fund (tall, image) */}
                    <BenefitCardShell
                        hasBottomImage
                        gridClass="lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:min-h-[488px] lg:gap-5"
                        className="min-h-0 gap-5 lg:gap-5"
                    >
                        <CardTitle>Learner Scholarship Fund — ₹1 Crore</CardTitle>
                        <CardBody>
                            A dedicated fund to support serious learners—because cost should never block ambition when you
                            show up and do the work.
                        </CardBody>
                        <LearnMoreLink
                            href="/contact"
                            ariaLabel="Learn more about the Learner Scholarship Fund"
                            className="mt-0"
                        />
                        <CardImage src={marketingAsset(SCHOLARSHIP_CARD_IMAGE)} alt="Learner Scholarship Fund promotional visual" />
                    </BenefitCardShell>

                    {/* 2 — 100% Scholarship */}
                    <BenefitCardShell gridClass="lg:col-start-2 lg:row-start-1 lg:min-h-[236px]" className="gap-2 lg:gap-2">
                        <CardTitle>100% Scholarship</CardTitle>
                        <CardBody>
                            Deserving students can access full support based on merit and consistency—so talent leads, not
                            tuition slips.
                        </CardBody>
                    </BenefitCardShell>

                    {/* 3 — E-Cell (top right) */}
                    <BenefitCardShell gridClass="lg:col-start-3 lg:row-start-1 lg:min-h-[236px]" className="gap-2 lg:gap-2">
                        <CardTitle>E-Cell: Launch Your Entrepreneurial Dream</CardTitle>
                        <CardBody>
                            Our Entrepreneurship Cell helps you turn ideas into execution—pitch practice, founder talks, and
                            real startup energy.
                        </CardBody>
                    </BenefitCardShell>

                    {/* 4 — TGIF */}
                    <BenefitCardShell gridClass="lg:col-start-2 lg:row-start-2 lg:min-h-[236px]" className="gap-2 lg:gap-2">
                        <CardTitle>TGIF: Learning Meets Fun</CardTitle>
                        <CardBody>
                            Friday sessions that mix workshops, networking, and creative challenges—because community
                            accelerates growth.
                        </CardBody>
                    </BenefitCardShell>

                    {/* 5 — Brand War (tall, image) */}
                    <BenefitCardShell
                        hasBottomImage
                        gridClass="lg:col-start-3 lg:row-start-2 lg:row-span-2 lg:min-h-[488px] lg:gap-5"
                        className="gap-5 lg:gap-5"
                    >
                        <CardTitle>Brand War: Compete, Create, Conquer</CardTitle>
                        <CardBody>
                            A high-energy brand challenge where teams build campaigns, defend ideas, and learn how agencies
                            really pitch.
                        </CardBody>
                        <LearnMoreLink href="/contact" ariaLabel="Learn more about Brand War" className="mt-0" />
                        <CardImage src={marketingAsset(BRAND_WAR_CARD_IMAGE)} alt="Brand War team challenge" />
                    </BenefitCardShell>

                    {/* 6 — HACA X Community (wide) */}
                    <BenefitCardShell
                        gridClass="lg:col-span-2 lg:col-start-1 lg:row-start-3 lg:min-h-[200px]"
                        className="gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
                    >
                        <div className="flex min-w-0 flex-1 flex-col gap-2 lg:gap-2">
                            <CardTitle>HACA X Community</CardTitle>
                            <CardBody>
                                Stay connected with mentors, alumni, and peers—office-hour style support that continues long
                                after class ends.
                            </CardBody>
                        </div>
                        <LearnMoreLink href="/contact" ariaLabel="Learn more about HACA X Community" className="lg:mt-0" />
                    </BenefitCardShell>
                </div>

                <LeadDecisionPanel />
            </div>
        </section>
    );
}
