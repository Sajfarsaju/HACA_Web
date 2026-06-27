import { HiringPartnersGrid } from "@/components/marketing/HiringPartnersGrid";
import { KERALA_MIX_LOGOS } from "@/lib/hiring-partners";

const HEADING_ID = "marketing-malayalam-agency-heading";


export function MarketingSeoAgencyMalayalamIntroSection() {
    return (
        <section className="w-full bg-black text-white" aria-labelledby={HEADING_ID}>
            <div className="mx-auto box-border flex w-full max-w-[1440px] min-h-0 flex-col gap-[30px] px-[clamp(16px,4.16vw,60px)] py-[10px] md:px-[clamp(24px,5vw,48px)] lg:min-h-[454px] lg:flex-row lg:items-start lg:justify-between lg:gap-0 lg:px-[60px] lg:py-10">
                <div className="mx-auto flex w-full max-w-[335px] flex-col gap-5 lg:mx-0 lg:max-w-[600px] lg:gap-5">
                    <h2
                        id={HEADING_ID}
                        className="m-0 max-w-[600px] font-semibold tracking-[-0.01em] text-white [text-rendering:geometricPrecision]"
                        style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                    >
                        <span className="flex flex-col text-center text-[36px] leading-[95%] lg:hidden">
                            <span className="block">Our Hiring Partners</span>
                        </span>
                        <span className="hidden flex-col text-left text-[55px] leading-[110%] lg:flex">
                            <span className="block">Our Hiring Partners</span>
                        </span>
                    </h2>

                    <p
                        className="m-0 w-full max-w-[335px] min-h-[72px] text-center text-[16px] font-medium leading-[150%] tracking-[-0.05em] text-[#FFFFFFB2] lg:max-w-[538px] lg:min-h-[54px] lg:text-left lg:text-[18px]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                    >
                        HACA follows an agency-style learning approach with live projects, campaign simulations, and
                        practical assignments. With 200+ hiring partners across Kerala, including agencies, startups,
                        and growing businesses, learners gain industry-relevant skills and exposure to real career
                        opportunities.
                    </p>
                </div>

                <p className="sr-only">
                    Logos shown represent a selection of brands and organizations students may work with during the
                    internship phase of the digital marketing course in Malayalam.
                </p>

                <div className="w-full shrink-0 lg:mx-0 lg:mt-0 lg:w-[680px] lg:max-w-[680px]">
                    <HiringPartnersGrid logos={KERALA_MIX_LOGOS} />
                </div>
            </div>
        </section>
    );
}
