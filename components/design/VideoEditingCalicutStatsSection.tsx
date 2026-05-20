import { Fragment } from "react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "600"],
    display: "swap",
});

const THEME = "#655CC5";

const STATS = [
    {
        value: "500",
        lines: ["Students", "Trained with Real-World Skills"],
    },
    {
        value: "15",
        lines: ["Agency-Based Mentors", "Guiding You"],
    },
    {
        value: "200",
        lines: ["Recruiters and Agencies", "Ready to Hire You"],
    },
] as const;

function StatSeparator() {
    return (
        <span
            className="hidden size-4 shrink-0 rounded-full lg:block"
            style={{ backgroundColor: THEME }}
            aria-hidden
        />
    );
}

function StatItem({ value, lines }: { value: string; lines: readonly [string, string] }) {
    return (
        <div className="flex min-w-0 flex-col items-start text-left">
            <div className="flex items-baseline">
                <span
                    className={`text-[clamp(40px,10vw,60px)] leading-[100%] tracking-normal text-[#000000] ${dmSans.className}`}
                    style={{ fontWeight: 600, fontStyle: "normal" }}
                >
                    {value}
                </span>
                <span
                    className={`text-[clamp(40px,10vw,60px)] leading-[100%] tracking-normal ${dmSans.className}`}
                    style={{ fontWeight: 600, fontStyle: "normal", color: THEME }}
                >
                    +
                </span>
            </div>
            <p
                className={`m-0 mt-2 text-[14px] leading-[125%] tracking-normal text-[#000000] lg:text-[16px] ${dmSans.className}`}
                style={{ fontWeight: 400, fontStyle: "normal" }}
            >
                {lines[0]}
                <br />
                {lines[1]}
            </p>
        </div>
    );
}

export function VideoEditingCalicutStatsSection() {
    return (
        <section className="w-full bg-white" aria-label="Design school achievements">
            <div
                className={[
                    "mx-auto box-border flex w-full max-w-[1440px]",
                    "min-h-0 flex-col gap-10 px-4 py-10",
                    "sm:px-6 sm:py-12",
                    "lg:min-h-[201px] lg:flex-row lg:items-center lg:justify-between lg:gap-8",
                    "lg:px-[60px] lg:py-[50px]",
                ].join(" ")}
            >
                {STATS.map((stat, index) => (
                    <Fragment key={stat.value}>
                        <StatItem value={stat.value} lines={stat.lines} />
                        {index < STATS.length - 1 ? <StatSeparator /> : null}
                    </Fragment>
                ))}
            </div>
        </section>
    );
}
