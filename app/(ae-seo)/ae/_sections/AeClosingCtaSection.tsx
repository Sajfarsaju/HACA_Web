import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "ae-closing-cta-heading";

const BODY_COPY =
    "Join an AI-integrated learning experience built around practical skills, real projects, and career growth across the UAE and GCC.";

function BookSeatCta() {
    return (
        <Link
            href="/enquire"
            className="group relative inline-flex h-[60px] w-fit shrink-0 cursor-pointer items-center no-underline"
            aria-label="Book your seat today — digital marketing course in UAE"
        >
            <div className="relative flex h-[60px] w-fit items-center rounded-[30px] bg-white pl-[20px] pr-[76px] transition-colors duration-300 group-hover:bg-neutral-100">
                <span
                    className="whitespace-nowrap text-black"
                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}
                >
                    Book Your Seat Today
                </span>
            </div>
            <MarketingCtaArrowCircle className="absolute right-0 top-0" size="60" />
        </Link>
    );
}

export function AeClosingCtaSection() {
    return (
        <section
            id="ae-closing-cta"
            className="w-full bg-black text-white"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col items-center justify-center
                    min-h-[292px] gap-[40px] px-5 py-10
                    lg:min-h-[458px] lg:px-20 lg:py-10
                "
            >
                <div className="flex w-full max-w-[335px] flex-col items-center gap-5 text-center lg:max-w-[700px]">
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 w-full font-semibold tracking-[-0.01em] text-white
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[38px] leading-[1.1] [text-rendering:geometricPrecision]
                            lg:text-[68px] lg:leading-[1.05]
                        "
                    >
                        <span className="block">Your Next Opportunity</span>
                        <span className="block">Could Start Here</span>
                    </h2>

                    <p
                        className="
                            m-0 w-full font-normal leading-[1.5] tracking-normal text-[#FFFFFFE5]
                            [font-family:'Satoshi',sans-serif] text-[16px]
                            lg:text-[18px] lg:max-w-[500px]
                        "
                    >
                        {BODY_COPY}
                    </p>

                    <BookSeatCta />
                </div>
            </div>
        </section>
    );
}
