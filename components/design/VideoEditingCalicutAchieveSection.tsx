import { Fragment } from "react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["500"],
    display: "swap",
});

const THEME = "#655CC5";
const MUTED = "#00000099";
const DOT = "#00000033";
const SWITZER = '"Switzer", sans-serif';

const ACHIEVEMENTS = [
    "A polished video editing portfolio",
    "Real-world project experience",
    "Strong command of pro editing tools",
    "A client-ready ad film",
    "Course certificate from HACA",
    "Clear roadmap to freelance or full-time roles",
    "Experience using AI in editing workflows",
    "A creative community that supports you",
] as const;

const DESKTOP_ROWS: ReadonlyArray<ReadonlyArray<(typeof ACHIEVEMENTS)[number]>> = [
    [ACHIEVEMENTS[0], ACHIEVEMENTS[1], ACHIEVEMENTS[2]],
    [ACHIEVEMENTS[3], ACHIEVEMENTS[4], ACHIEVEMENTS[5]],
    [ACHIEVEMENTS[6], ACHIEVEMENTS[7]],
];

function SeparatorDot() {
    return (
        <span
            className="size-2 shrink-0 rounded-full"
            style={{ backgroundColor: DOT }}
            aria-hidden
        />
    );
}

function AchievementTag({ label }: { label: string }) {
    return (
        <span
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-[16px] px-6 text-center text-[16px] leading-[125%] tracking-normal text-white"
            style={{
                backgroundColor: THEME,
                fontFamily: SWITZER,
                fontWeight: 500,
                fontStyle: "normal",
            }}
        >
            {label}
        </span>
    );
}

function MobileAchievementTag({ label }: { label: string }) {
    return (
        <span
            className="inline-flex h-[48px] w-max shrink-0 items-center justify-center whitespace-nowrap rounded-[14px] px-5 text-center text-[13px] leading-none tracking-normal text-white sm:px-[22px] sm:text-[14px]"
            style={{
                backgroundColor: THEME,
                fontFamily: SWITZER,
                fontWeight: 500,
                fontStyle: "normal",
            }}
        >
            {label}
        </span>
    );
}

function PillRow({ items }: { items: readonly string[] }) {
    return (
        <div className="flex max-w-full flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {items.map((label, index) => (
                <Fragment key={label}>
                    {index > 0 ? <SeparatorDot /> : null}
                    <AchievementTag label={label} />
                </Fragment>
            ))}
        </div>
    );
}

export function VideoEditingCalicutAchieveSection() {
    return (
        <section className="w-full bg-white" aria-labelledby="video-calicut-achieve-heading">
            <div
                className={[
                    "mx-auto box-border flex w-full max-w-[1440px] flex-col items-center",
                    "gap-8 px-4 py-[30px]",
                    "lg:min-h-[470px] lg:gap-[40px] lg:px-[60px] lg:py-[60px]",
                ].join(" ")}
            >
                {/* Heading block */}
                <header className="flex w-full max-w-[965px] flex-col items-center gap-4 text-center lg:gap-5">
                    <h2
                        id="video-calicut-achieve-heading"
                        className={`m-0 w-full text-[clamp(26px,6.5vw,45px)] leading-[120%] tracking-[-0.02em] text-[#000000] ${dmSans.className}`}
                        style={{ fontWeight: 500, fontStyle: "normal" }}
                    >
                        What You&apos;ll Achieve During This Course
                    </h2>
                    <p
                        className={`m-0 w-full max-w-[965px] text-[15px] leading-[100%] tracking-normal sm:text-[16px] lg:min-h-[46px] lg:text-[18px] ${dmSans.className}`}
                        style={{ fontWeight: 500, fontStyle: "normal", color: MUTED }}
                    >
                        At Design School, the focus goes beyond software training. You&apos;ll build
                        real creative skills, practical experience, and a portfolio designed for the
                        modern content industry.
                    </p>
                </header>

                {/* Tags — 1014×190, 20px row gap */}
                <div
                    className="flex w-full max-w-[1014px] flex-col items-center justify-center gap-5 lg:min-h-[190px] lg:gap-5"
                >
                    {/* Desktop: 3 + 3 + 2 rows with grey dots */}
                    <div className="hidden w-full flex-col items-center gap-5 lg:flex">
                        {DESKTOP_ROWS.map((row) => (
                            <PillRow key={row[0]} items={row} />
                        ))}
                    </div>

                    {/* Mobile: one tag per row, single line of text inside each tag */}
                    <ul className="m-0 flex w-full max-w-[343px] list-none flex-col items-center gap-[18px] p-0 lg:hidden">
                        {ACHIEVEMENTS.map((label) => (
                            <li key={label} className="flex w-full justify-center">
                                <MobileAchievementTag label={label} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
