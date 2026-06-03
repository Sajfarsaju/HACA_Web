import { PlacementCtaDecorativeStars } from "@/components/marketing/PlacementCtaDecorativeStars";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "marketing-seo-kannur-exclusive-benefits-heading";

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
            aria-label="Join now — marketing course in Kannur"
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
            <PlacementCtaDecorativeStars />
            <div className="relative z-10 mx-auto flex w-full max-w-[min(900px,100%)] flex-col items-center gap-5 text-center sm:gap-[30px]">
                <p
                    className="
                        m-0 font-semibold tracking-[-0.05em] text-white [font-family:'Darker_Grotesque',sans-serif]
                        text-[clamp(1.5rem,5.2vw,2.5rem)] leading-[1.1] [text-rendering:geometricPrecision]
                        lg:text-[clamp(2.25rem,4vw,3.5rem)] lg:leading-[1.08]
                    "
                >
                    Why Follow Trends When You Can Build Them?
                </p>
                <p
                    className="m-0 max-w-[min(560px,100%)] text-[16px] font-normal leading-[150%] tracking-[-0.05em] text-white/95"
                    style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
                >
                    Marketing becomes meaningful when you create, experiment, and execute.
                </p>
                <JoinLeadCta />
            </div>
        </div>
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
                        More Than Just A Course
                    </h2>
                    
                </header>

                <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4 lg:grid lg:min-h-[740px] lg:grid-cols-3 lg:gap-4">
                    <BenefitCardShell
                        hasBottomImage
                        gridClass="lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:min-h-[488px] lg:gap-5"
                        className="min-h-0 gap-5 lg:gap-5"
                    >
                        <CardTitle>Learner Scholarship Fund — ₹1 Crore</CardTitle>
                        <CardBody>
                            Get a chance to earn scholarships, making your learning journey easier and more affordable.
                        </CardBody>
                        <LearnMoreLink
                            href="/contact"
                            ariaLabel="Learn more about the Learner Scholarship Fund"
                            className="mt-0"
                        />
                        <CardImage src={marketingAsset(SCHOLARSHIP_CARD_IMAGE)} alt="Learner Scholarship Fund promotional visual" />
                    </BenefitCardShell>

                    <BenefitCardShell gridClass="lg:col-start-2 lg:row-start-1 lg:min-h-[236px]" className="gap-2 lg:gap-2">
                        <CardTitle>100% Scholarship</CardTitle>
                        <CardBody>
                            We believe talent deserves a chance – full scholarships to support deserving students. (Scholarship for Physically Disabled &amp; Backward Class Students)
                        </CardBody>
                    </BenefitCardShell>

                    <BenefitCardShell gridClass="lg:col-start-3 lg:row-start-1 lg:min-h-[236px]" className="gap-2 lg:gap-2">
                        <CardTitle>E-Cell: Launch Your Entrepreneurial Dream</CardTitle>
                        <CardBody>
                            Got a startup idea? Our Entrepreneurship Cell gives you the tools and guidance to make it real.
                        </CardBody>
                    </BenefitCardShell>

                    <BenefitCardShell gridClass="lg:col-start-2 lg:row-start-2 lg:min-h-[236px]" className="gap-2 lg:gap-2">
                        <CardTitle>TGIF: Learning Meets Fun</CardTitle>
                        <CardBody>
                            Join exciting events, games, and networking sessions that recharge and inspire.
                        </CardBody>
                    </BenefitCardShell>

                    <BenefitCardShell
                        hasBottomImage
                        gridClass="lg:col-start-3 lg:row-start-2 lg:row-span-2 lg:min-h-[488px] lg:gap-5"
                        className="gap-5 lg:gap-5"
                    >
                        <CardTitle>Brand War: Compete, Create, Conquer</CardTitle>
                        <CardBody>
                            Put your skills to the test by building standout brand campaigns and win big.
                        </CardBody>
                        <LearnMoreLink href="/contact" ariaLabel="Learn more about Brand War" className="mt-0" />
                        <CardImage src={marketingAsset(BRAND_WAR_CARD_IMAGE)} alt="Brand War team challenge" />
                    </BenefitCardShell>

                    <BenefitCardShell
                        gridClass="lg:col-span-2 lg:col-start-1 lg:row-start-3 lg:min-h-[200px]"
                        className="gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
                    >
                        <div className="flex min-w-0 flex-1 flex-col gap-2 lg:gap-2">
                            <CardTitle>HACA X Community</CardTitle>
                            <CardBody>
                                Stay connected with mentors, alumni, and industry leaders long after your course ends.
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
