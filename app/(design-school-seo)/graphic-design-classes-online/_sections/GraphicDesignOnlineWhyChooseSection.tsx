const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const WHY_ITEMS = [
    "Beginner-friendly learning structure",
    "Learn industry tools with guided support",
    "Step-by-step design training",
    "AI-powered creative workflows",
    "Portfolio development from day one",
    "Real projects instead of repetitive exercises",
    "Learn from practising designers",
    "Placement support and freelance guidance",
    "Flexible EMI options available",
    "Lifetime access to learning resources",
] as const;

export function GraphicDesignOnlineWhyChooseSection() {
    return (
        <section className="w-full bg-white" aria-labelledby="gd-online-why-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 lg:px-[60px] lg:py-[60px]">
                <div className="flex w-full flex-col gap-8 lg:gap-[50px]">
                    <h2
                        id="gd-online-why-heading"
                        className="m-0 w-full max-w-[700px] text-black"
                        style={{
                            fontFamily: vc,
                            fontWeight: 600,
                            fontSize: "clamp(26px, 3.5vw, 45px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Why Students Choose Our Online Graphic Design Course
                    </h2>

                    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-5">
                        {WHY_ITEMS.map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3 rounded-2xl border border-black/08 bg-[#FCFCFC] px-5 py-4"
                                style={{ borderColor: "rgba(0,0,0,0.08)" }}
                            >
                                <span
                                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF5C00]"
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
