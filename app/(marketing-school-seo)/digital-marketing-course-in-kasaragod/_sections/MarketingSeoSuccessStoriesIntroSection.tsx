import { MarketingPlacementsMarquee } from "@/components/marketing/MarketingPlacementsMarquee";

const HEADING_ID = "marketing-kasaragod-success-stories-heading";

export function MarketingSeoSuccessStoriesIntroSection() {
    return (
        <section
            className="w-full bg-black text-white"
            aria-labelledby={HEADING_ID}
        >            <div className="mx-auto box-border flex w-full max-w-[1440px] flex-col gap-[30px] px-5 py-[10px] lg:px-[60px] lg:pb-[60px] lg:pt-[30px]">
                <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-[30px] lg:min-h-[122px] lg:justify-end">
                    <div className="mx-auto flex w-full max-w-[335px] flex-col gap-5 lg:mx-0 lg:min-h-[122px] lg:max-w-[1320px] lg:flex-row lg:items-end lg:justify-between lg:gap-[30px]">
                        <h2
                            id={HEADING_ID}
                            className="m-0 max-w-[558px] text-center font-semibold tracking-[-0.01em] text-white [text-rendering:geometricPrecision] lg:min-w-0 lg:shrink-0 lg:text-left"
                            style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                        >
                            <span className="flex flex-col text-[36px] leading-[95%] lg:hidden">
                                <span className="block">Learners Are Already</span>
                                <span className="block">Growing Their Careers with HACA</span>
                            </span>
                            <span className="hidden flex-col text-[clamp(28px,3.8vw,55px)] leading-[110%] lg:flex">
                                <span className="block whitespace-nowrap">Learners Are Already</span>
                                <span className="block whitespace-nowrap">Growing Their Careers with HACA</span>
                            </span>
                        </h2>

                        <p
                            className="m-0 w-full max-w-[335px] min-h-[96px] text-center text-[16px] font-medium leading-[150%] tracking-[-0.05em] text-[#FFFFFFB2] lg:max-w-[458px] lg:min-h-0 lg:shrink-0 lg:text-left lg:text-[18px]"
                            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                        >
                            Many students from Kasaragod joined HACA through online and offline learning programs and built
                            careers in SEO, paid advertising, content marketing, performance campaigns and social media
                            management with practical exposure and placement guidance.
                        </p>
                    </div>
                </div>                <MarketingPlacementsMarquee />
            </div>
        </section>
    );
}
