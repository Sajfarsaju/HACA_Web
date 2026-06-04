import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "marketing-kerala-cta-heading";

const BODY_LINE_1 =
    "Each skill you master now is a stepping stone to real-world results.";
const BODY_LINE_2 = "Don't wait, your career is calling.";

function ReservePlaceCta() {
    return (
        <Link
            href="/enquire"
            className="group relative inline-flex h-[60px] w-fit shrink-0 cursor-pointer items-center no-underline"
            aria-label="Reserve your place today — digital marketing course in Kerala"
        >
            <div className="relative flex h-[60px] w-fit items-center rounded-[30px] bg-[#E6EFFF] pl-[20px] pr-[76px] transition-colors duration-300 group-hover:bg-[#d6e4ff]">
                <span
                    className="whitespace-nowrap text-black"
                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}
                >
                    Reserve Your Place Today
                </span>
            </div>
            <MarketingCtaArrowCircle className="absolute right-0 top-0" size="60" />
        </Link>
    );
}

/**
 * Kerala SEO — closing CTA (“Ready to Go Beyond Learning?”).
 */
export function MarketingSeoKeralaCtaSection() {
    return (
        <section
            id="marketing-kerala-cta"
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
                    <div className="flex w-full max-w-[335px] flex-col items-center gap-5 lg:max-w-[720px]">
                        <h2
                            id={HEADING_ID}
                            className="
                                m-0 w-full max-w-[335px] font-semibold tracking-[-0.01em] text-white
                                [font-family:'Darker_Grotesque',sans-serif]
                                text-[36px] leading-[1.1] [text-rendering:geometricPrecision]
                                lg:max-w-[720px] lg:text-[68px]
                            "
                        >
                            <span className="block">Ready to Go</span>
                            <span className="block">Beyond Learning?</span>
                        </h2>

                        <p
                            className="
                                m-0 w-full font-normal leading-[1.5] tracking-normal text-[#FFFFFFE5]
                                [font-family:'Satoshi',sans-serif] text-[16px]
                                lg:max-w-[560px] lg:text-[18px]
                            "
                        >
                            {BODY_LINE_1}
                            <br className="hidden lg:block" />
                            {BODY_LINE_2}
                        </p>

                        <ReservePlaceCta />
                    </div>
                </div>
            </div>
        </section>
    );
}
