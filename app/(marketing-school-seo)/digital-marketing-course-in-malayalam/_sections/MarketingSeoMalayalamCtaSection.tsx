import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "marketing-malayalam-cta-heading";

function BookSeatCta() {
    return (
        <Link
            href="/enquire"
            className="group relative inline-flex h-[60px] w-fit shrink-0 cursor-pointer items-center no-underline"
            aria-label="Book your seat — digital marketing course in Malayalam"
        >
            <div className="relative flex h-[60px] w-fit items-center rounded-[30px] bg-[#E6EFFF] pl-[20px] pr-[76px] transition-colors duration-300 group-hover:bg-[#d6e4ff]">
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

export function MarketingSeoMalayalamCtaSection() {
    return (
        <section
            id="marketing-malayalam-cta"
            className="w-full bg-black text-white opacity-100"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div className="mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col items-center justify-center min-h-[292px] gap-[60px] px-5 py-5 lg:min-h-[458px] lg:px-20 lg:py-10">
                <div className="flex w-full max-w-[335px] flex-col items-center gap-5 text-center lg:max-w-[1322px] lg:min-h-[378px] lg:justify-center">
                    <div className="flex w-full max-w-[335px] flex-col items-center gap-5 lg:max-w-[720px]">
                        <h2
                            id={HEADING_ID}
                            className="m-0 w-full max-w-[335px] font-semibold tracking-[-0.01em] text-white [font-family:'Darker_Grotesque',sans-serif] text-[36px] leading-[1.1] [text-rendering:geometricPrecision] lg:max-w-[720px] lg:text-[68px]"
                        >
                            <span className="block">Your Digital Marketing</span>
                            <span className="block">Career Starts Here</span>
                        </h2>

                        <p
                            className="m-0 w-full font-normal leading-[1.5] tracking-normal text-[#FFFFFFE5] [font-family:'Satoshi',sans-serif] text-[16px] lg:max-w-[640px] lg:text-[18px]"
                        >
                            Don&apos;t let language become a barrier to learning one of the most in-demand skills in the
                            world. Join the best digital marketing institute and gain practical skills, industry exposure,
                            AI-powered knowledge, and career support that help you build a successful future in digital
                            marketing.
                        </p>

                        <BookSeatCta />
                    </div>
                </div>
            </div>
        </section>
    );
}
