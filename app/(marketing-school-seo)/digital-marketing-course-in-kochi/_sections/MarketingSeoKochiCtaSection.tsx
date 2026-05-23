import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "marketing-seo-kochi-cta-heading";

const BODY_COPY =
    "The skills you learn today can lead to exciting career opportunities, freelance projects, or even help you build something of your own. Start now and give your future a stronger direction.";

function ReserveSpotCta() {
    return (
        <Link
            href="/contact"
            className="group relative inline-flex h-[60px] w-fit shrink-0 cursor-pointer items-center no-underline"
            aria-label="Book your seat today — digital marketing course in Kochi"
        >
            <div className="relative flex h-[60px] w-fit items-center rounded-[30px] bg-[#E6EFFF] pl-[20px] pr-[76px] transition-colors duration-300 group-hover:bg-[#d6e4ff]">
                <span className="whitespace-nowrap text-black" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}>
                    Book Your Seat Today
                </span>
            </div>
            <MarketingCtaArrowCircle className="absolute right-0 top-0" size="60" />
        </Link>
    );
}

export function MarketingSeoKochiCtaSection() {
    return (
        <section id="marketing-seo-kochi-cta" className="w-full bg-black text-white opacity-100" role="region" aria-labelledby={HEADING_ID}>
            <div className="mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col items-center justify-center min-h-[292px] gap-[60px] px-5 py-5 lg:min-h-[458px] lg:px-20 lg:py-10">
                <div className="flex w-full max-w-[335px] flex-col items-center gap-5 text-center lg:max-w-[1322px] lg:min-h-[378px] lg:justify-center">
                    <div className="flex w-full max-w-[335px] flex-col items-center gap-5 text-center lg:w-full lg:max-w-none">
                        <h2
                            id={HEADING_ID}
                            className="m-0 w-full max-w-[268px] text-center font-semibold tracking-[-0.01em] text-white [font-family:'Darker_Grotesque',sans-serif] text-[36px] leading-[1.1] [text-rendering:geometricPrecision] lg:mx-auto lg:w-fit lg:max-w-none lg:text-[68px]"
                        >
                            <span className="block lg:whitespace-nowrap">Your Next Big Opportunity</span>
                            <span className="block lg:whitespace-nowrap">Could Start Here</span>
                        </h2>
                        <p className="m-0 w-full font-normal leading-[1.5] tracking-normal text-[#FFFFFFE5] [font-family:'Satoshi',sans-serif] text-[16px] lg:max-w-[500px]">
                            {BODY_COPY}
                        </p>
                        <ReserveSpotCta />
                    </div>
                </div>
            </div>
        </section>
    );
}
