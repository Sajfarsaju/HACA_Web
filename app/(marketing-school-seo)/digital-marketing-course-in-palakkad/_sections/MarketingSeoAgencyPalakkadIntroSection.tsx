import { HiringPartnersGrid } from "@/components/marketing/HiringPartnersGrid";
import { PALAKKAD_LOGOS } from "@/lib/hiring-partners";

const HEADING_ID = "marketing-palakkad-agency-heading";


export function MarketingSeoAgencyPalakkadIntroSection() {
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
                            <span className="block">Unlock Hiring Opportunities</span>
                            <span className="block">Around Palakkad</span>
                        </span>
                        <span className="hidden flex-col text-left text-[55px] leading-[110%] lg:flex">
                            <span className="block">Unlock Hiring Opportunities</span>
                            <span className="block">Around Palakkad</span>
                        </span>
                    </h2>

                    <p
                        className="m-0 w-full max-w-[335px] text-center text-[16px] font-medium leading-[150%] tracking-[-0.05em] text-[#FFFFFFB2] lg:max-w-[600px] lg:text-left lg:text-[18px]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                    >
                        Build practical experience while gaining access to career networks, internships and opportunities across agencies, startups and growing businesses. Students from Palakkad, Ottapalam, Pattambi, Mannarkkad, Chittur, Shornur and nearby locations can access placement support and industry networks across startups, agencies and businesses.
                    </p>

                    <p
                        className="m-0 w-full max-w-[335px] text-center text-[14px] font-medium leading-[150%] tracking-[-0.03em] text-[#FFFFFFB2] lg:max-w-[600px] lg:text-left lg:text-[16px]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                    >
                        Hiring partners from Palakkad and nearby areas include:
                    </p>
                </div>

                <p className="sr-only">
                    Logos shown represent hiring partners and organizations connected to learners from Palakkad and nearby regions.
                </p>

                <div className="w-full shrink-0 lg:mx-0 lg:mt-0 lg:w-[680px] lg:max-w-[680px]">
                    <HiringPartnersGrid logos={PALAKKAD_LOGOS} />
                </div>
            </div>
        </section>
    );
}
