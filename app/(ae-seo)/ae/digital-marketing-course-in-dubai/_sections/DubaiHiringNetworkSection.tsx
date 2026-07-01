import { AeHiringLogoGrid } from "@/components/ae/AeHiringLogoGrid";

const HEADING_ID = "dubai-hiring-network-heading";

export function DubaiHiringNetworkSection() {
    return (
        <section className="w-full bg-black text-white" aria-labelledby={HEADING_ID}>
            <div className="mx-auto box-border flex w-full max-w-[1440px] min-h-0 flex-col gap-[30px] px-[clamp(16px,4.16vw,60px)] py-[10px] md:px-[clamp(24px,5vw,48px)] lg:min-h-[454px] lg:flex-row lg:items-start lg:justify-between lg:gap-0 lg:px-[60px] lg:py-10">

                {/* Left: heading + paragraph */}
                <div className="mx-auto flex w-full max-w-[335px] flex-col gap-5 lg:mx-0 lg:max-w-[600px] lg:gap-5">
                    <h2
                        id={HEADING_ID}
                        className="m-0 max-w-[600px] font-semibold tracking-[-0.01em] text-white [text-rendering:geometricPrecision]"
                        style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                    >
                        <span className="flex flex-col text-center text-[36px] leading-[95%] lg:hidden">
                            <span className="block">Exclusive Industry</span>
                            <span className="block">Partnerships with</span>
                            <span className="block">Leading Brands</span>
                        </span>
                        <span className="hidden flex-col text-left text-[55px] leading-[110%] lg:flex">
                            <span className="block">Exclusive Industry Partnerships</span>
                            <span className="block">with Leading Brands</span>
                        </span>
                    </h2>

                    <p
                        className="m-0 w-full max-w-[335px] min-h-[72px] text-center text-[16px] font-medium leading-[150%] tracking-[-0.05em] text-[#FFFFFFB2] lg:max-w-[538px] lg:min-h-[54px] lg:text-left lg:text-[18px]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                    >
                        HACA&apos;s hiring ecosystem connects learners with agencies, startups, ecommerce brands,
                        healthcare companies and growing businesses across Dubai, Abu Dhabi, Sharjah and nearby
                        regions. Students looking for a digital marketing course with placement assistance in Dubai
                        get access to portfolio guidance, career preparation and networking opportunities like:
                    </p>
                </div>

                <p className="sr-only">
                    Logos shown represent a selection of brands and organizations our graduates have been placed with or collaborated with.
                </p>

                <AeHiringLogoGrid />

            </div>
        </section>
    );
}
