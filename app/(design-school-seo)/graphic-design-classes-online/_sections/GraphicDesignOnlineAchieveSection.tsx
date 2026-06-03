const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const ACHIEVE_ITEMS = [
    "Strong understanding of design fundamentals",
    "Ability to create social media and marketing creatives",
    "Hands-on experience with industry-standard tools",
    "AI-supported design workflow skills",
    "Beginner portfolio for jobs and freelance work",
    "A graphic design certificate online upon successful completion",
] as const;

export function GraphicDesignOnlineAchieveSection() {
    return (
        <section className="w-full bg-white" aria-labelledby="gd-online-achieve-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 lg:px-[60px] lg:py-[60px]">
                <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-[80px]">
                    <div className="flex w-full shrink-0 flex-col gap-3 lg:w-[380px]">
                        <h2
                            id="gd-online-achieve-heading"
                            className="m-0 text-black"
                            style={{
                                fontFamily: vc,
                                fontWeight: 600,
                                fontSize: "clamp(26px, 3.5vw, 45px)",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            What You&apos;ll Achieve by the End of the Course
                        </h2>
                        <p
                            className="m-0 text-[15px] leading-[155%] text-black/55 lg:text-[16px]"
                            style={{ fontFamily: vc }}
                        >
                            After completing one of the best online graphic design courses with certificates, you&apos;ll walk away with:
                        </p>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                        {ACHIEVE_ITEMS.map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3 rounded-2xl bg-[#FCFCFC] px-5 py-4"
                                style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                            >
                                <span
                                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#29C76B]"
                                    aria-hidden
                                >
                                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                                        <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span
                                    className="text-[15px] leading-[140%] text-black lg:text-[16px]"
                                    style={{ fontFamily: vc, fontWeight: 400 }}
                                >
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
