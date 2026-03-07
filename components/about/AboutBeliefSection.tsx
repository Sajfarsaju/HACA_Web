import Link from "next/link"

export function AboutBeliefSection() {
    return (
        <section className="w-full section-4k mx-auto bg-[#000210] py-[40px] flex flex-col items-center gap-[clamp(30px,3.5vw,44px)] px-[clamp(20px,4vw,60px)]">
            {/* Heading */}
            <h2 className="w-full max-w-[1320px] font-rethink font-medium text-[clamp(26px,2.2vw,36px)] leading-[27px] text-center text-white m-0 max-md:max-w-[335px] max-md:font-semibold max-md:leading-[110%]">
                The Belief That Drives Us
            </h2>

            {/* Paragraph */}
            <p className="w-full max-w-[1320px] font-rethink font-medium text-[clamp(16px,1.4vw,20px)] leading-[125%] text-center text-[#A7ADBE] m-0 max-md:max-w-[335px] max-md:leading-[28px]">
                Dreams don&apos;t get hired. Skills with the right attitude do.
                <br />
                Every school at HACA is designed to unlock a different kind of talent. The only question is: which one&apos;s yours?
            </p>

            {/* Buttons container: row on desktop, column on mobile */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-[clamp(20px,3vw,44px)]">
                {/* Explore Our Courses - primary CTA */}
                <Link
                    href="/schools"
                    className="inline-flex items-center justify-center rounded-[100px] max-md:rounded-[83.64px] bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] text-white font-rethink font-medium text-[clamp(15px,1.25vw,18px)] leading-[clamp(22.58px,1.7vw,27px)] px-[clamp(16.73px,1.5vw,20px)] py-[clamp(11.71px,1.2vw,14px)] w-full max-w-[209px] max-md:max-w-[174.45px] max-md:min-h-[46px] md:min-h-[55px] md:whitespace-nowrap"
                >
                    Explore Our Courses
                </Link>

                {/* Talk to Our Team - secondary */}
                <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-[100px] max-md:rounded-[83.64px] bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] text-white font-rethink font-medium text-[clamp(15px,1.25vw,18px)] leading-[clamp(22.58px,1.7vw,27px)] px-[clamp(16.73px,1.5vw,20px)] py-[clamp(11.71px,1.2vw,14px)] w-full max-w-[178px] max-md:max-w-[149.45px] max-md:min-h-[46px] md:min-h-[55px]"
                >
                    Talk to Our Team
                </Link>
            </div>
        </section>
    )
}
