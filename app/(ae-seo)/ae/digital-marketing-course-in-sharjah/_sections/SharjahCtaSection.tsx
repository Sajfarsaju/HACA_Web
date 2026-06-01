import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "sharjah-cta-heading";

function JoinNowButton() {
    return (
        <Link
            href="/contact"
            className="
                group relative inline-flex h-[44px] w-fit shrink-0 cursor-pointer items-center no-underline
                max-lg:gap-[7.33px] max-lg:rounded-full max-lg:bg-[#E8F1FF] max-lg:pl-[14px] max-lg:pr-0
                lg:h-[60px]
            "
            aria-label="Join now — HACA UAE digital marketing course"
        >
            {/* Mobile button */}
            <span
                className="whitespace-nowrap text-black lg:hidden"
                style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "100%" }}
            >
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

            {/* Desktop button */}
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

export function SharjahCtaSection() {
    return (
        <section className="box-border w-full min-w-0 bg-black" role="region" aria-labelledby={HEADING_ID}>
            <div
                className="
                    box-border mx-auto flex w-full min-w-0 max-w-[1440px] flex-col
                    px-4 pb-[clamp(24px,5vw,40px)] pt-9
                    md:px-[clamp(24px,5vw,48px)] md:pt-[clamp(28px,4vw,40px)]
                    lg:p-[60px]
                "
            >
                {/* Blue CTA card */}
                <div
                    className="
                        relative mx-auto flex w-full max-w-[1320px] min-w-0 flex-col
                        items-center justify-center overflow-hidden rounded-[20px] bg-[#0066FF]
                        min-h-[514px] px-5 py-10
                        lg:min-h-[340px] lg:px-12 lg:py-20
                    "
                >
                    {/* Decorative corner SVGs */}
                    <img
                        src="/photos/schools/marketing/placements/placement-cta-star-tr.svg"
                        alt=""
                        width={297}
                        height={301}
                        className="pointer-events-none absolute right-0 top-0 h-auto w-[min(297px,60%)] select-none max-sm:w-[min(180px,50%)]"
                        aria-hidden
                    />
                    <img
                        src="/photos/schools/marketing/placements/placement-cta-star-bl.svg"
                        alt=""
                        width={246}
                        height={250}
                        className="pointer-events-none absolute bottom-0 left-0 h-auto w-[min(246px,55%)] select-none max-sm:w-[min(160px,45%)]"
                        aria-hidden
                    />

                    {/* Content */}
                    <div className="relative z-10 flex w-full max-w-[min(700px,100%)] flex-col items-center gap-[10px] text-center lg:gap-5">
                        <h2
                            id={HEADING_ID}
                            className="
                                m-0 font-semibold text-white [font-family:'Darker_Grotesque',sans-serif]
                                [text-rendering:geometricPrecision] tracking-[-0.05em]
                                text-[clamp(1.875rem,7vw,3rem)] leading-[1.05]
                                lg:text-[clamp(2.5rem,4vw,3.5rem)] lg:leading-[1.08]
                            "
                        >
                            Take The First Step Towards A Future In Digital Marketing
                        </h2>
                        <p
                            className="m-0 text-[16px] font-normal leading-[150%] tracking-[-0.03em] text-white/90 lg:text-[18px]"
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                        >
                            Learn through practical implementation, project-based experiences, and industry-guided sessions designed to help you build confidence and job-ready skills.
                        </p>
                        <JoinNowButton />
                    </div>
                </div>
            </div>
        </section>
    );
}
