import Image from "next/image";
import { Fragment } from "react";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const SECTION_PATTERN =
    "/photos/Tech/seo/51c30d16dd31036ca13820a8a1f177f781b70b1c.webp";

const PILL_ROWS = [
    ["Beginner-friendly learning approach", "AI-integrated curriculum"],
    ["Project-based practical sessions", "Real-world product development"],
    ["Industry-standard tools and workflow", "Portfolio-focused learning"],
    ["Offline and online learning options", "Career guidance and placement support"],
] as const;

const ALL_PILLS = PILL_ROWS.flat();

function DifferentPill({ label }: { label: string }) {
    return (
        <span className="inline-flex w-fit max-w-full items-center justify-center rounded-[20px] bg-[#11062D] px-[10px] py-[10px] text-center font-manrope text-base font-medium leading-[100%] tracking-[-0.02em] text-white lg:text-xl">
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
        <div className="flex flex-nowrap items-center justify-center gap-[10px]">
            {items.map((label, index) => (
                <Fragment key={label}>
                    {index > 0 ? <PillDot /> : null}
                    <DifferentPill label={label} />
                </Fragment>
            ))}
        </div>
    );
}

export function TechSeoCodingKeralaDifferentSection() {
    return (
        <section
            className="mx-auto box-border flex w-full max-w-[1440px] flex-col items-center bg-transparent lg:max-w-[1441px]"
            aria-labelledby="coding-kerala-different-heading"
        >
            <div className="flex w-full max-w-[343px] flex-col items-center gap-[30px] px-4 py-5 lg:max-w-[1320px] lg:gap-[30px] lg:p-[60px]">
                <Image
                    src={SECTION_PATTERN}
                    alt=""
                    width={254}
                    height={239}
                    className="h-[238.5px] w-[238.5px] object-contain lg:h-[239px] lg:w-[254px]"
                    aria-hidden
                />

                <h2
                    id="coding-kerala-different-heading"
                    className="m-0 w-full text-center font-manrope text-[26px] font-semibold leading-[110%] text-white lg:max-w-[921px] lg:text-[40px] lg:leading-[120%]"
                >
                    What Makes HACA Tech School&apos;s MERN + AI Full Stack Program Different?
                </h2>

                <p className="m-0 w-full text-center font-manrope text-sm font-semibold leading-[120%] text-[#C6C6C6B2] lg:max-w-[948px] lg:text-lg">
                    At HACA Tech School, you&apos;ll learn frontend development, backend systems,
                    databases, APIs and AI-powered application development through real projects and
                    practical implementation. Learn how startups and companies build modern software
                    products from scratch.
                </p>

                {/* Mobile: single column, no dots */}
                <div className="flex w-full flex-col items-center gap-5 lg:hidden">
                    {ALL_PILLS.map((label) => (
                        <DifferentPill key={label} label={label} />
                    ))}
                </div>

                {/* Desktop: rows with dots between pills */}
                <div className="hidden w-full max-w-[1200px] flex-col items-center gap-5 lg:flex">
                    {PILL_ROWS.map((row) => (
                        <PillRow key={row.join("-")} items={row} />
                    ))}
                </div>
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
