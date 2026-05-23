import Image from "next/image";

const HEADING_ID = "marketing-palakkad-agency-heading";

const PARTNER_LOGO_FILES = [
    "Frame 15.svg",
    "Frame 17.svg",
    "Frame 18.svg",
    "Frame 24.svg",
    "image 1.svg",
    "image 2.svg",
    "image 5.svg",
    "image.svg",
    "Rectangle.svg",
] as const;

function partnerLogoSrc(filename: (typeof PARTNER_LOGO_FILES)[number]) {
    return `/photos/schools/marketing/${encodeURIComponent(filename)}`;
}

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
                    <div className="box-border overflow-hidden rounded-none border-[0.46px] border-[#B2B2B24D] lg:border-[0.93px]">
                        <div
                            className="grid h-[184.227px] w-full grid-cols-3 grid-rows-3 lg:h-[373.953px]"
                            role="list"
                            aria-label="Hiring partner logos connected to Palakkad learners"
                        >
                            {PARTNER_LOGO_FILES.map((filename, index) => {
                                const col = index % 3;
                                const row = Math.floor(index / 3);
                                const showRight = col < 2;
                                const showBottom = row < 2;
                                return (
                                    <div
                                        key={filename}
                                        role="listitem"
                                        className={[
                                            "relative flex min-h-0 min-w-0 items-center justify-center bg-black px-2 py-2 lg:px-4 lg:py-4",
                                            showRight ? "border-r-[0.46px] border-[#B2B2B24D] lg:border-r-[0.93px]" : "",
                                            showBottom ? "border-b-[0.46px] border-[#B2B2B24D] lg:border-b-[0.93px]" : "",
                                        ].join(" ")}
                                    >
                                        <Image
                                            src={partnerLogoSrc(filename)}
                                            alt=""
                                            width={160}
                                            height={48}
                                            className="h-auto max-h-[15px] w-auto max-w-[min(100px,28vw)] object-contain object-center brightness-0 invert lg:max-h-[31px] lg:max-w-[129px]"
                                            sizes="(max-width: 1023px) 100px, 130px"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
