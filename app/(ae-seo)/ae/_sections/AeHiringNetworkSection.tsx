import Image from "next/image";

const HEADING_ID = "ae-hiring-network-heading";

const PARTNER_LOGOS = [
    { file: "tcs.svg",            alt: "TCS – Tata Consultancy Services" },
    { file: "arada.svg",          alt: "ARADA" },
    { file: "med7.svg",           alt: "MED7 Healthcare Group" },
    { file: "danube.svg",         alt: "Danube" },
    { file: "flipkart.svg",       alt: "Flipkart" },
    { file: "hotpack.svg",        alt: "Hotpack" },
    { file: "francis-alukkas.svg",alt: "Francis Alukkas" },
    { file: "walkaroo.svg",       alt: "Walkaroo" },
    { file: "popees.svg",         alt: "Popees Baby Care" },
] as const;

export function AeHiringNetworkSection() {
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
                            <span className="block">HACA&apos;s Growing Digital</span>
                            <span className="block">Marketing Hiring</span>
                            <span className="block">Network</span>
                        </span>
                        <span className="hidden flex-col text-left text-[55px] leading-[110%] lg:flex">
                            <span className="block">HACA&apos;s Growing Digital</span>
                            <span className="block">Marketing Hiring Network</span>
                        </span>
                    </h2>

                    <p
                        className="m-0 w-full max-w-[335px] min-h-[72px] text-center text-[16px] font-medium leading-[150%] tracking-[-0.05em] text-[#FFFFFFB2] lg:max-w-[538px] lg:min-h-[54px] lg:text-left lg:text-[18px]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                    >
                        Our hiring and industry network spans businesses, startups, agencies,
                        ecommerce brands, healthcare companies, and growing organizations
                        across cities like Dubai, Abu Dhabi, Sharjah, and beyond.
                    </p>
                </div>

                <p className="sr-only">
                    Logos shown represent a selection of brands and organizations our graduates have been placed with or collaborated with.
                </p>

                {/* Right: 3×3 logo grid */}
                <div className="w-full shrink-0 lg:mx-0 lg:mt-0 lg:w-[680px] lg:max-w-[680px]">
                    <div className="box-border overflow-hidden rounded-none border-[0.46px] border-[#B2B2B24D] lg:border-[0.93px]">
                        <div
                            className="grid h-[184.227px] w-full grid-cols-3 grid-rows-3 lg:h-[373.953px]"
                            role="list"
                            aria-label="Hiring partner logos"
                        >
                            {PARTNER_LOGOS.map(({ file, alt }, index) => {
                                const col = index % 3;
                                const row = Math.floor(index / 3);
                                const showRight  = col < 2;
                                const showBottom = row < 2;
                                return (
                                    <div
                                        key={file}
                                        role="listitem"
                                        className={[
                                            "relative flex min-h-0 min-w-0 items-center justify-center bg-black px-2 py-2 lg:px-4 lg:py-4",
                                            showRight  ? "border-r-[0.46px] border-[#B2B2B24D] lg:border-r-[0.93px]" : "",
                                            showBottom ? "border-b-[0.46px] border-[#B2B2B24D] lg:border-b-[0.93px]" : "",
                                        ].join(" ")}
                                    >
                                        <Image
                                            src={`/photos/ae/${file}`}
                                            alt={alt}
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
