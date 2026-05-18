import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "marketing-seo-calicut-cta-heading";

const BODY_COPY =
    "The skills you build here can open your first job, your first client, or even your own brand. Don't let hesitation hold you back.";

/** Matches navbar Contact Us pill + arrow (`MarketingNavbar` desktop link). */
function ReserveSpotCta() {
    return (
        <Link
            href="/contact"
            className="group relative flex h-[60px] w-[284px] shrink-0 cursor-pointer items-center no-underline"
            aria-label="Reserve your spot now — marketing course in Calicut"
        >
            <div className="absolute left-0 top-0 flex h-[60px] w-[224px] items-center rounded-[30px] bg-[#E6EFFF] pl-[20px] transition-colors duration-300 group-hover:bg-[#d6e4ff]">
                <span
                    className="whitespace-nowrap text-black"
                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}
                >
                    Reserve Your Spot Now!
                </span>
            </div>
            <MarketingCtaArrowCircle className="absolute right-0 top-0" size="60" />
        </Link>
    );
}

/**
 * Calicut SEO — closing CTA (“Ready to See How Far You Can Go?”).
 */
export function MarketingSeoCalicutCtaSection() {
    return (
        <section
            id="marketing-seo-calicut-cta"
            className="w-full bg-black text-white opacity-100"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col items-center justify-center
                    min-h-[292px] gap-[60px] px-5 py-5
                    lg:min-h-[458px] lg:px-20 lg:py-10
                "
            >
                <div
                    className="
                        flex w-full max-w-[335px] flex-col items-center gap-5 text-center
                        lg:max-w-[1322px] lg:min-h-[378px] lg:justify-center
                    "
                >
                    <div className="flex w-full max-w-[335px] flex-col items-center gap-5 lg:max-w-[500px]">
                        <h2
                            id={HEADING_ID}
                            className="
                                m-0 w-full max-w-[268px] font-semibold tracking-[-0.01em] text-white
                                [font-family:'Darker_Grotesque',sans-serif]
                                text-[36px] leading-[1.1] [text-rendering:geometricPrecision]
                                lg:max-w-[500px] lg:text-[68px]
                            "
                        >
                            <span className="block">Ready to See How</span>
                            <span className="block">Far You Can Go?</span>
                        </h2>

                        <p
                            className="
                                m-0 w-full font-normal leading-[1.5] tracking-normal text-[#FFFFFFE5]
                                [font-family:'Satoshi',sans-serif] text-[16px]
                                lg:max-w-[500px]
                            "
                        >
                            {BODY_COPY}
                        </p>

                        <ReserveSpotCta />
                    </div>
                </div>
            </div>
        </section>
    );
}
