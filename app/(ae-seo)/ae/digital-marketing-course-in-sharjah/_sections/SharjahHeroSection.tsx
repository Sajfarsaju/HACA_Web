import Image from "next/image";
import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const DARKER_GROTESQUE = "'Darker Grotesque', serif";
const SATOSHI = "'Satoshi', var(--font-outfit), sans-serif";
const INTER = "'Inter', 'Satoshi', sans-serif";

function HeroCtaButton({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="relative flex cursor-pointer items-center h-[44px] lg:h-[60px] shrink-0 group no-underline"
        >
            <div className="absolute inset-y-0 left-0 right-[4px] rounded-[22px] bg-[#E6EFFF] transition-colors duration-300 group-hover:bg-[#d6e4ff] lg:right-[5px] lg:rounded-[30px]" />
            <span
                className="relative z-[1] whitespace-nowrap pl-[18px] pr-[50px] text-black lg:pl-[20px] lg:pr-[68px]"
                style={{ fontFamily: SATOSHI, fontWeight: 500, fontSize: "clamp(16px,1.11vw,18px)", lineHeight: "100%" }}
            >
                {label}
            </span>
            <MarketingCtaArrowCircle className="absolute right-0 top-0" />
        </Link>
    );
}

export function SharjahHeroSection() {
    return (
        <section className="w-full bg-white" aria-labelledby="sharjah-hero-heading">
            <div className="mx-auto box-border w-full max-w-[1440px]">
                <div className="flex flex-col gap-[30px] px-4 py-[30px] sm:px-6 md:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-[60px] lg:py-[40px]">

                    {/* ── Left image (desktop) / Bottom image (mobile) ── */}
                    <div className="order-2 w-full lg:order-1 lg:w-[500px] lg:shrink-0">
                        <div
                            className="w-full overflow-hidden"
                            style={{ borderTopLeftRadius: "clamp(42.87px,4.34vw,62.5px)" }}
                        >
                            <Image
                                src="/photos/schools/marketing/Group 46.webp"
                                alt="HACA Digital Marketing students in Sharjah, UAE"
                                width={500}
                                height={620}
                                className="w-full h-auto"
                                sizes="(max-width: 1023px) calc(100vw - 32px), 500px"
                                priority
                            />
                        </div>
                    </div>

                    {/* ── Right text column (desktop) / Top text (mobile) ── */}
                    <div className="order-1 flex w-full flex-col gap-[20px] lg:order-2 lg:min-w-0 lg:flex-1 lg:gap-[30px]">

                        {/* Upper container */}
                        <div className="flex flex-col gap-[20px] lg:gap-[30px]">

                            {/* Course details */}
                            <span
                                style={{
                                    fontFamily: INTER,
                                    fontWeight: 600,
                                    fontSize: "clamp(14px,1.11vw,16px)",
                                    lineHeight: "150%",
                                    letterSpacing: "-0.05em",
                                    color: "#015AFF",
                                }}
                            >
                                4 Months (3 Months Live Classes + 1 Month Project)
                            </span>

                            {/* Subtext */}
                            <p
                                className="m-0"
                                style={{
                                    fontFamily: SATOSHI,
                                    fontWeight: 500,
                                    fontSize: "clamp(16px,1.67vw,24px)",
                                    lineHeight: "28px",
                                    letterSpacing: "0%",
                                    color: "#0A0A0A",
                                }}
                            >
                                How Bright Can Your Future Get?
                            </p>

                            {/* Heading */}
                            <h1
                                id="sharjah-hero-heading"
                                className="m-0"
                                style={{
                                    fontFamily: DARKER_GROTESQUE,
                                    fontWeight: 600,
                                    fontSize: "clamp(42px,4.72vw,68px)",
                                    lineHeight: "105%",
                                    letterSpacing: "-1px",
                                    color: "#171717",
                                }}
                            >
                                Build Real Skills with an AI-Powered Digital Marketing Course in Sharjah
                            </h1>

                            {/* CTA Buttons */}
                            <div className="flex flex-col items-start gap-3 lg:flex-row lg:gap-4">
                                <HeroCtaButton href="/enquire" label="Join Now" />
                                <HeroCtaButton href="/contact" label="Have Questions? Call Now" />
                            </div>
                        </div>

                        {/* Bottom container */}
                        <div className="flex flex-col gap-5">

                            {/* Paragraph */}
                            <p
                                className="m-0"
                                style={{
                                    fontFamily: SATOSHI,
                                    fontWeight: 500,
                                    fontSize: "clamp(14px,1.25vw,18px)",
                                    lineHeight: "120%",
                                    color: "#0A0A0AB2",
                                }}
                            >
                                Learn digital marketing through practical experiences with HACA&apos;s Digital
                                Marketing Certification Course in Sharjah. Gain exposure to SEO, AEO, AI driven
                                marketing tools, Google and Meta advertising, website platforms, and content
                                strategy while building projects that strengthen your portfolio and career readiness.
                            </p>

                            {/* Award badge — image only */}
                            <div className="flex justify-start">
                                <Image
                                    src="/photos/schools/marketing/world summit 2.svg"
                                    alt="elets World Education Summit award"
                                    height={89}
                                    width={70}
                                    style={{ height: "clamp(58px,6.17vw,89px)", width: "auto" }}
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
