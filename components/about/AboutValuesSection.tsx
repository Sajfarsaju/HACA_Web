import Image from "next/image"

export function AboutValuesSection() {
    return (
        <section className="w-full section-4k mx-auto bg-[#000210] px-[clamp(20px,4vw,60px)] py-[40px] flex flex-col items-center gap-[30px]">
            {/* First container: heading + paragraph */}
            <div className="w-full max-w-[1320px] flex flex-col items-center gap-[20px] max-md:max-w-[335px]">
                <h2 className="w-full font-rethink font-medium text-[clamp(26px,2.2vw,36px)] leading-[34px] text-center text-white m-0">
                    Our Values
                </h2>
                {/* Desktop / tablet copy with inline emphasis */}
                <p className="hidden md:block w-full font-rethink font-medium text-[clamp(18px,1.6vw,24px)] leading-[34px] text-left text-white m-0">
                    Making Learning Practical
                    <br />
                    <span className="font-rethink font-medium text-[clamp(16px,1.3vw,20px)] leading-[34px] text-[#A7ADBE]">
                        At HACA, we believe education should reflect how industries actually work. Our programs are designed to help
                        students think, build, execute, and adapt, not just complete a syllabus. Every course is shaped by active
                        professionals, real client requirements, and evolving industry standards.
                    </span>
                </p>
                {/* Mobile: split into title span + body span as per Figma */}
                <div className="flex md:hidden w-full flex-col gap-[6px] items-start">
                    <span className="w-full font-rethink font-semibold text-[20px] leading-[34px] text-left text-white">
                        Making Learning Practical
                    </span>
                    <span className="w-full font-rethink font-medium text-[16px] leading-[28px] text-left text-[#A7ADBE]">
                        At HACA, we believe education should reflect how industries actually work. Our programs are designed to help
                        students think, build, execute, and adapt, not just complete a syllabus. Every course is shaped by active
                        professionals, real client requirements, and evolving industry standards.
                    </span>
                </div>
            </div>

            {/* Second container: two cards (Mission & Vision) */}
            <div className="w-full max-w-[1320px] flex flex-col md:flex-row md:justify-between gap-[clamp(20px,3vw,30px)] max-md:max-w-[335px]">
                {/* Our Mission card */}
                <article className="w-full max-w-[637px] bg-[#000319] border border-[#232D6B] rounded-[19px] px-[clamp(11.83px,1.8vw,21.85px)] py-[clamp(22.19px,3vw,40.97px)] flex flex-row gap-[clamp(10.83px,2vw,20px)]">
                    <div className="flex-shrink-0 flex items-start justify-center">
                        <Image
                            src="/photos/main/our mission.svg"
                            alt="Our mission icon"
                            width={80}
                            height={80}
                            className="w-[clamp(50px,5vw,80px)] h-[clamp(50px,5vw,80px)]"
                        />
                    </div>
                    <div className="flex flex-col gap-[clamp(7.4px,1.2vw,13.66px)] max-w-[593px]">
                        <h3 className="font-manrope font-semibold text-[clamp(20px,2vw,30px)] leading-[100%] tracking-[-0.02em] text-white">
                            Our Mission
                        </h3>
                        <p className="font-manrope font-medium text-[clamp(16px,1.5vw,20px)] leading-[120%] text-[#A7ADBE] max-w-[435px]">
                        To bridge the gap between education and employment by designing practical, experience-led programs aligned with real business needs.
                        </p>
                    </div>
                </article>

                {/* Our Vision card */}
                <article className="w-full max-w-[637px] bg-[#000319] border border-[#232D6B] rounded-[19px] px-[clamp(11.83px,1.8vw,21.85px)] py-[clamp(22.19px,3vw,40.97px)] flex flex-row gap-[clamp(10.83px,2vw,20px)]">
                    <div className="flex-shrink-0 flex items-start justify-center">
                        <Image
                            src="/photos/main/our vision.svg"
                            alt="Our vision icon"
                            width={80}
                            height={80}
                            className="w-[clamp(50px,5vw,80px)] h-[clamp(50px,5vw,80px)]"
                        />
                    </div>
                    <div className="flex flex-col gap-[clamp(7.4px,1.2vw,13.66px)] max-w-[593px]">
                        <h3 className="font-manrope font-semibold text-[clamp(20px,2vw,30px)] leading-[100%] tracking-[-0.02em] text-white">
                            Our Vision
                        </h3>
                        <p className="font-manrope font-medium text-[clamp(16px,1.5vw,20px)] leading-[120%] text-[#A7ADBE] max-w-[435px]">
                        To build a future-ready learning ecosystem where education evolves with industry, and students graduate with confidence, competence, and clarity.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

