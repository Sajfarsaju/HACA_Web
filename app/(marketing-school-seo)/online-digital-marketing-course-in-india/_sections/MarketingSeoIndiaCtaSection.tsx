import Link from "next/link";
import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const SECTION_HEADING_ID = "marketing-india-cta-heading";

export function MarketingSeoIndiaCtaSection() {
    return (
        <section
            className="w-full bg-[#0066FF] text-white"
            aria-labelledby={SECTION_HEADING_ID}
        >
            <div className="mx-auto box-border flex w-full max-w-[1440px] flex-col items-center gap-[clamp(24px,4vw,40px)] px-[clamp(16px,4.16vw,60px)] py-[clamp(40px,6vw,80px)] text-center md:px-[clamp(24px,5vw,48px)] lg:gap-10 lg:px-[60px] lg:py-[80px]">
                <div className="flex w-full flex-col items-center gap-4 lg:gap-6">
                    <h2
                        id={SECTION_HEADING_ID}
                        className="m-0 max-w-[min(860px,100%)] font-semibold text-[clamp(28px,6vw,52px)] leading-[1.05] tracking-[-0.02em] text-white [font-family:'Darker_Grotesque',sans-serif] [text-rendering:geometricPrecision] lg:text-[clamp(40px,3.8vw,60px)] lg:leading-[1.1]"
                    >
                        This Could Be Your Next Big Move
                    </h2>
                    <p
                        className="m-0 max-w-[min(720px,100%)] text-[16px] font-medium leading-[150%] tracking-[-0.03em] text-white/85 lg:text-[18px]"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                    >
                        The skills you build today can create opportunities across jobs, freelancing, entrepreneurship,
                        and business growth. Join HACA&apos;s Online Digital Marketing Course in India and learn through
                        practical projects, expert mentorship, live sessions, and industry-focused training designed for
                        the modern digital world.
                    </p>
                </div>

                <Link
                    href="/enquire"
                    className="group relative flex h-[60px] w-fit shrink-0 cursor-pointer items-center no-underline"
                    aria-label="Book your seat for HACA's online digital marketing course in India"
                >
                    <div className="flex h-[60px] items-center rounded-[30px] bg-white pl-[24px] pr-[72px] transition-colors duration-300 group-hover:bg-[#f0f0f0]">
                        <span
                            className="whitespace-nowrap text-[#0066FF]"
                            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "100%" }}
                        >
                            Book Your Seat Today
                        </span>
                    </div>
                    <MarketingCtaArrowCircle className="absolute right-0 top-0" size="60" background="#000000" />
                </Link>

                <p
                    className="m-0 text-[14px] font-medium leading-none text-white/60 lg:text-[15px]"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                    Apply Now
                </p>
            </div>
        </section>
    );
}
