import { HiringPartnersGrid } from "@/components/marketing/HiringPartnersGrid";
import { KOLLAM_LOGOS } from "@/lib/hiring-partners";

const HEADING_ID = "marketing-kollam-agency-heading";
const SUB_HEADING_ID = "marketing-kollam-agency-subheading";


export function MarketingSeoAgencyKollamIntroSection() {
    return (
        <section
            className="w-full bg-black text-white"
            aria-labelledby={HEADING_ID}
        >
            <div className="relative mx-auto box-border flex w-full max-w-[1440px] min-h-0 flex-col gap-[30px] px-[clamp(16px,4.16vw,60px)] py-[10px] md:px-[clamp(24px,5vw,48px)] lg:min-h-[454px] lg:flex-row lg:items-start lg:justify-between lg:gap-0 lg:px-[60px] lg:py-10">
                <div className="mx-auto flex w-full max-w-[335px] flex-col gap-5 lg:mx-0 lg:max-w-[600px] lg:gap-5">
                    <h2
                        id={HEADING_ID}
                        className="m-0 max-w-[600px] font-semibold tracking-[-0.01em] text-white [text-rendering:geometricPrecision]"
                        style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                    >
                        <span className="flex flex-col text-center text-[36px] leading-[95%] lg:hidden">
                            <span className="block">Connect With Hiring</span>
                            <span className="block">Opportunities Near</span>
                            <span className="block">Kollam</span>
                        </span>
                        <span className="hidden flex-col text-left text-[55px] leading-[110%] lg:flex">
                            <span className="block">Connect With Hiring</span>
                            <span className="block">Opportunities Near Kollam</span>
                        </span>
                    </h2>

                    <p
                        className="m-0 w-full max-w-[335px] min-h-[72px] text-center text-[16px] font-medium leading-[150%] tracking-[-0.05em] text-[#FFFFFFB2] lg:max-w-[538px] lg:min-h-[54px] lg:text-left lg:text-[18px]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                    >
                        HACA helps learners build industry-ready skills while creating pathways to internship and placement opportunities. Students from Kollam, Karunagappally, Kottarakkara, Chavara, Punalur, Kundara, and nearby areas can access career support and connect with hiring networks across agencies, startups, and growing businesses.
                    </p>
                </div>

                <p className="sr-only">
                    Logos shown represent a selection of brands and organizations students may work with during the
                    internship phase of the digital marketing course in Kollam.
                </p>

                <div className="mx-auto flex w-full max-w-[335px] flex-col gap-[10px] lg:contents">
                    <h3
                        id={SUB_HEADING_ID}
                        className="
                            m-0 w-full text-center text-[14px] font-medium leading-[150%] tracking-[-0.05em] text-white
                            [font-family:'Satoshi',sans-serif]
                            lg:pointer-events-none lg:absolute lg:right-0 lg:top-0 lg:z-[1] lg:box-border lg:max-w-[400px] lg:pr-[clamp(16px,2.5vw,48px)] lg:text-right lg:text-[18px]
                        "
                    >
                        Hiring partners from the Kollam region and nearby locations include:
                    </h3>

                    <div className="w-full shrink-0 lg:mx-0 lg:mt-[clamp(48px,5vw,56px)] lg:w-[680px] lg:max-w-[680px]">
                    <HiringPartnersGrid logos={KOLLAM_LOGOS} />
                    </div>
                </div>
            </div>
        </section>
    );
}
