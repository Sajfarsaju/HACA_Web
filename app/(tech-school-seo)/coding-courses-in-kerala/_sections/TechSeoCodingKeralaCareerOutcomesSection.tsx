import { Fragment } from "react";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "coding-kerala-career-outcomes-heading";

const PILL_ROWS = [
    ["Full Stack Developer", "MERN Stack Developer", "AI Application Developer"],
    ["Frontend Developer", "Backend Developer", "Software Engineer"],
    ["Freelance Web Developer", "Technical Product Builder"],
] as const;

const ALL_PILLS = PILL_ROWS.flat();

function CareerOutcomePill({ label }: { label: string }) {
    return (
        <span className="inline-flex w-fit max-w-full items-center justify-center rounded-[20px] bg-[#6949FF] px-[10px] py-[10px] text-center font-manrope text-base font-medium leading-[100%] tracking-[-0.02em] text-white lg:text-xl">
            {label}
        </span>
    );
}

function PillDot() {
    return (
        <span
            className="hidden h-[6px] w-[6px] shrink-0 rounded-full bg-white lg:block"
            aria-hidden
        />
    );
}

function PillRow({ items }: { items: readonly string[] }) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-[10px]">
            {items.map((label, index) => (
                <Fragment key={label}>
                    {index > 0 ? <PillDot /> : null}
                    <CareerOutcomePill label={label} />
                </Fragment>
            ))}
        </div>
    );
}

export function TechSeoCodingKeralaCareerOutcomesSection() {
    return (
        <section
            className="mx-auto box-border flex w-full max-w-[1440px] flex-col items-center bg-transparent"
            aria-labelledby={HEADING_ID}
        >
            <div className="flex w-full max-w-[343px] flex-col items-center gap-[30px] px-4 py-5 lg:max-w-[1320px] lg:gap-[60px] lg:px-[60px] lg:py-10">
                <h2
                    id={HEADING_ID}
                    className="m-0 w-full text-center font-manrope text-[26px] font-semibold leading-[120%] tracking-[-0.02em] text-white lg:max-w-[921px] lg:text-[40px]"
                >
                    Career Opportunities You Can Explore After Completing the Course
                </h2>

                <div className="flex w-full flex-col items-center gap-5 lg:hidden">
                    {ALL_PILLS.map((label) => (
                        <CareerOutcomePill key={label} label={label} />
                    ))}
                </div>

                <div className="hidden w-full flex-col items-center gap-5 lg:flex">
                    {PILL_ROWS.map((row) => (
                        <PillRow key={row.join("-")} items={row} />
                    ))}
                </div>
            </div>

            <TechSeoSectionBottomRule inset />
        </section>
    );
}
