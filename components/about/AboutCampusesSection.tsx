"use client"

import Image from "next/image"

export function AboutCampusesSection() {
    return (
        <section className="w-full section-4k mx-auto bg-[#000210] px-[clamp(20px,4vw,60px)] py-[40px] flex flex-col md:flex-row justify-between items-stretch gap-[30px]">
            {/* Left: Heading + Paragraph */}
            <div className="w-full max-w-[584px] flex flex-col gap-[20px] max-md:max-w-[335px]">
                <h2 className="w-full font-rethink font-semibold text-[clamp(26px,3vw,36px)] leading-[clamp(28px,2.3vw,34px)] text-white m-0 text-left max-md:text-[26px] max-md:leading-[110%]">
                    Our Campuses &amp; Global Presence
                </h2>
                <p className="w-full font-rethink font-medium text-[clamp(16px,1.25vw,20px)] leading-[clamp(28px,2.1vw,34px)] text-[#A7ADBE] m-0">
                    HACA operates from its flagship campus in Calicut, India, with an international campus in Dubai, UAE, supported by
                    flexible online and hybrid learning options.
                    <br />
                    
                    Our learners come from across India, UAE, Pakistan, Thailand, Philippines, Nepal, Iran, the US, and the UK.
                </p>
            </div>

            {/* Right: Two photos with fixed aspect ratios */}
            <div className="w-full max-w-[714px] flex flex-row justify-between items-start gap-[10px] py-[10px] max-md:max-w-[345px] max-md:gap-[4.83px] max-md:py-[4.83px] max-md:mx-auto">
                {/* Photo 1 */}
                <div className="relative w-[clamp(164px,23.6vw,340px)] aspect-[340/380] rounded-[23.43px] overflow-hidden bg-[#10152F] max-md:rounded-[11.32px]">
                    <Image
                        src="/photos/main/DSC08759.webp"
                        alt="HACA campus in Calicut"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 164px, (max-width: 1200px) 23.6vw, 340px"
                    />
                </div>

                {/* Photo 2 */}
                <div className="relative w-[clamp(164px,23.6vw,340px)] aspect-[340/380] rounded-[23.43px] overflow-hidden bg-[#10152F] max-md:rounded-[11.32px] mt-[24px] max-md:mt-[16px]">
                    <Image
                        src="/photos/main/IMG_0122.webp"
                        alt="HACA campus in Dubai"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 164px, (max-width: 1200px) 23.6vw, 340px"
                    />
                </div>
            </div>
        </section>
    )
}

