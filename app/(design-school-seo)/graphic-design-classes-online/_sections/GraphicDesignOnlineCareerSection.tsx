const vc = '"VC Nudge Trial Normal", sans-serif' as const;

/* Row 1: 5 items, Row 2: 4 items — matches desktop screenshot */
const ROW1 = [
    "Graphic Designer",
    "Visual Designer",
    "Social Media Designer",
    "Creative Designer",
    "Brand Support Designer",
] as const;

const ROW2 = [
    "Content Designer",
    "Freelance Graphic Designer",
    "Junior Visual Artist",
    "Marketing Design Associate",
] as const;

const ALL = [...ROW1, ...ROW2] as const;

export function GraphicDesignOnlineCareerSection() {
    return (
        <section className="w-full bg-white" aria-labelledby="gd-online-career-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 lg:px-[60px] lg:py-[60px]">
                <div className="flex w-full flex-col items-center gap-4 lg:gap-[60px]">

                    {/* Heading */}
                    <h2
                        id="gd-online-career-heading"
                        className="m-0 w-full max-w-[1052px] text-center text-black"
                        style={{
                            fontFamily: vc,
                            fontWeight: 500,
                            fontSize: "clamp(35px, 4.5vw, 60px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Career Opportunities After<br />Completing This Course
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="m-0 -mt-2 max-w-[640px] text-center text-black/60 lg:-mt-8"
                        style={{
                            fontFamily: vc,
                            fontWeight: 400,
                            fontSize: "clamp(14px, 1.4vw, 18px)",
                            lineHeight: "140%",
                        }}
                    >
                        After building your portfolio, you can explore opportunities such as:
                    </p>

                    {/* Mobile: single column stack */}
                    <div className="flex w-full max-w-[1052px] flex-col items-center gap-y-[2px] md:hidden">
                        {ALL.map((role) => (
                            <div
                                key={role}
                                className="inline-flex h-[50px] w-fit items-center justify-center rounded-[20px] bg-black px-4 text-white"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 500,
                                    fontSize: "clamp(14px, 4vw, 16px)",
                                    lineHeight: "120%",
                                    letterSpacing: "-0.01em",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {role}
                            </div>
                        ))}
                    </div>

                    {/* Desktop: two rows — 5 then 4, centred */}
                    <div className="hidden w-full max-w-[1052px] flex-col items-center gap-y-[2px] md:flex">
                        {[ROW1, ROW2].map((row, rowIdx) => (
                            <div
                                // eslint-disable-next-line react/no-array-index-key
                                key={rowIdx}
                                className="flex w-full flex-nowrap items-center justify-center gap-x-[2px]"
                            >
                                {row.map((role) => (
                                    <div
                                        key={role}
                                        className="inline-flex h-[60px] w-fit items-center justify-center rounded-[20px] bg-black px-5 text-white"
                                        style={{
                                            fontFamily: vc,
                                            fontWeight: 500,
                                            fontSize: "clamp(14px, 1.4vw, 20px)",
                                            lineHeight: "120%",
                                            letterSpacing: "-0.01em",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {role}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
