const HEADING_ID = "marketing-kerala-prepare-industry-heading";

const PHASES = [
    {
        phase: "Phase - 1",
        title: "Foundations",
        description: "Understand how digital marketing really works. No jargon, just clarity.",
    },
    {
        phase: "Phase - 2",
        title: "Skill Building",
        description: "Learn advanced SEO, ads, content, copy, and AI platforms with guided practice.",
    },
    {
        phase: "Phase - 3",
        title: "Execution",
        description: "Work on live campaigns, handle budgets, and make decisions.",
    },
    {
        phase: "Phase - 4",
        title: "Internship & Specialisation",
        description: "Pick your strength and go deeper with real brand work.",
    },
    {
        phase: "Phase - 5",
        title: "Career Launch",
        description: "Portfolio, interviews, placements, and your first role.",
    },
] as const;

function PhasePill({ label }: { label: string }) {
    return (
        <span
            className="inline-flex h-[34px] w-fit items-center rounded-[20px] bg-[#015AFF] px-[10px] py-[6px] text-[16px] font-bold leading-[100%] text-white"
            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 700 }}
        >
            {label}
        </span>
    );
}

export function MarketingSeoPrepareIndustrySection() {
    return (
        <section className="w-full bg-white text-black" aria-labelledby={HEADING_ID}>
            <div className="mx-auto box-border flex w-full max-w-[1440px] flex-col gap-[30px] px-5 py-[30px] lg:px-[60px] lg:py-10">
                <header className="mx-auto flex w-full max-w-[1320px] flex-col gap-[10px] text-center">
                    <h2
                        id={HEADING_ID}
                        className="m-0 font-semibold text-[36px] leading-[95%] tracking-[-0.01em] text-black [text-rendering:geometricPrecision] lg:text-[55px] lg:leading-[110%]"
                        style={{ fontFamily: "Darker Grotesque, sans-serif", fontWeight: 600 }}
                    >
                        How We Prepare You for the Real Industry
                    </h2>
                    <p
                        className="m-0 text-[16px] font-medium leading-[140%] tracking-[-0.05em] text-[#000000B2] lg:leading-[150%]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                    >
                        You don&apos;t just jump into everything at once. Your learning is structured in a way that builds
                        confidence first, then skills, then real execution.
                    </p>
                </header>

                <ol className="m-0 mx-auto flex w-full max-w-[1320px] list-none flex-col gap-10 p-0">
                    {PHASES.map((item) => (
                        <li key={item.phase} className="flex w-full flex-col gap-5">
                            <article className="flex w-full max-w-[335px] flex-col gap-[10px] lg:max-w-[443px]">
                                <div className="flex w-fit max-w-full flex-col gap-[10px]">
                                    <PhasePill label={item.phase} />
                                    <h3
                                        className="m-0 text-left text-[26px] font-semibold leading-[110%] tracking-[-0.01em] text-black lg:text-[40px]"
                                        style={{ fontFamily: "Darker Grotesque, sans-serif", fontWeight: 600 }}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                                <p
                                    className="m-0 text-left text-[14px] font-medium leading-[150%] tracking-[-0.05em] text-[#000000B2] lg:text-[16px]"
                                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                                >
                                    {item.description}
                                </p>
                            </article>
                            <hr className="m-0 h-0 w-full max-w-[335px] border-0 border-t border-solid border-black lg:max-w-[1320px]" />
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
