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

            {/* Two cards: Vision (left) + Mission (right), same max width as before */}
            <div className="w-full max-w-[1320px] flex flex-col md:flex-row md:justify-between gap-[clamp(20px,3vw,30px)] max-md:max-w-[335px]">
                {/* Our Vision — left */}
                <article className="w-full max-w-[637px] min-w-0 bg-[#000319] border border-[#232D6B] rounded-[19px] px-[clamp(11.83px,1.8vw,21.85px)] py-[clamp(22.19px,3vw,40.97px)] flex flex-col items-start gap-[clamp(12px,1.6vw,24px)]">
                    <Image
                        src="/photos/main/our vision.svg"
                        alt="Our vision icon"
                        width={80}
                        height={80}
                        className="shrink-0 w-[clamp(48px,4.5vw,80px)] h-[clamp(48px,4.5vw,80px)] object-contain"
                    />
                    <h3 className="w-full font-manrope font-semibold text-[clamp(18px,1.85vw,30px)] leading-[110%] tracking-[-0.02em] text-white text-left m-0">
                        Our Vision
                    </h3>
                    <p className="w-full min-w-0 font-manrope font-medium text-[clamp(14px,1.35vw,20px)] leading-[1.28] md:leading-[1.35] text-[#A7ADBE] text-left m-0">
                        To build a future-ready learning ecosystem where education evolves with industry, and students graduate with
                        confidence, competence, and clarity.
                    </p>
                </article>

                {/* Our Mission — right */}
                <article className="w-full max-w-[637px] min-w-0 bg-[#000319] border border-[#232D6B] rounded-[19px] px-[clamp(11.83px,1.8vw,21.85px)] py-[clamp(22.19px,3vw,40.97px)] flex flex-col items-start gap-[clamp(12px,1.6vw,24px)]">
                    <Image
                        src="/photos/main/our mission.svg"
                        alt="Our mission icon"
                        width={80}
                        height={80}
                        className="shrink-0 w-[clamp(48px,4.5vw,80px)] h-[clamp(48px,4.5vw,80px)] object-contain"
                    />
                    <h3 className="w-full font-manrope font-semibold text-[clamp(18px,1.85vw,30px)] leading-[110%] tracking-[-0.02em] text-white text-left m-0">
                        Our Mission
                    </h3>
                    <p className="w-full min-w-0 font-manrope font-medium text-[clamp(14px,1.35vw,20px)] leading-[1.28] md:leading-[1.35] text-[#A7ADBE] text-left m-0">
                        To bridge the gap between education and employment by designing practical, experience-led programs aligned with
                        real business needs.
                    </p>
                </article>
            </div>
        </section>
    )
}
