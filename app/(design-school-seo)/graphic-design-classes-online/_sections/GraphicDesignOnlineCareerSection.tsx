import { Fragment } from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const CAREER_ROWS = [
    ["Graphic Designer", "Visual Designer", "Social Media Designer"],
    ["Creative Designer", "Brand Support Designer", "Content Designer"],
    ["Freelance Graphic Designer", "Junior Visual Artist", "Marketing Design Associate"],
] as const;

const ALL_CAREERS = CAREER_ROWS.flat();

function CareerPill({ label }: { label: string }) {
    return (
        <span
            className="inline-flex items-center justify-center rounded-full px-4 py-3 text-center text-[14px] font-medium leading-[110%] text-white lg:px-5 lg:text-[16px]"
            style={{ fontFamily: vc, backgroundColor: "#FF5C00" }}
        >
            {label}
        </span>
    );
}

function PillDot() {
    return (
        <span
            className="hidden h-[6px] w-[6px] shrink-0 rounded-full bg-black/20 lg:block"
            aria-hidden
        />
    );
}

export function GraphicDesignOnlineCareerSection() {
    return (
        <section className="w-full bg-white" aria-labelledby="gd-online-career-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 lg:px-[60px] lg:py-[60px]">
                <div className="flex w-full flex-col items-center gap-8 lg:gap-[50px]">
                    <h2
                        id="gd-online-career-heading"
                        className="m-0 w-full max-w-[700px] text-center text-black"
                        style={{
                            fontFamily: vc,
                            fontWeight: 600,
                            fontSize: "clamp(26px, 3.5vw, 45px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Career Opportunities After Completing This Course
                    </h2>

                    {/* Mobile: single column */}
                    <div className="flex w-full flex-col items-center gap-3 lg:hidden">
                        {ALL_CAREERS.map((label) => (
                            <CareerPill key={label} label={label} />
                        ))}
                    </div>

                    {/* Desktop: rows */}
                    <div className="hidden w-full flex-col items-center gap-4 lg:flex">
                        {CAREER_ROWS.map((row) => (
                            <div key={row.join("-")} className="flex flex-wrap items-center justify-center gap-3">
                                {row.map((label, i) => (
                                    <Fragment key={label}>
                                        {i > 0 && <PillDot />}
                                        <CareerPill label={label} />
                                    </Fragment>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
