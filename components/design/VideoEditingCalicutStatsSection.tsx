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
        desktopLines: ["Students", "Trained with Real-World Skills"] as const,
        mobileLines: ["Students Trained", "with Real-World Skills"] as const,
    },
    {
        value: "15",
        desktopLines: ["Agency-Based Mentors", "Guiding You"] as const,
        mobileLines: ["Agency-Based", "Mentors Guiding You"] as const,
    },
    {
        value: "200",
        desktopLines: ["Recruiters and Agencies", "Ready to Hire You"] as const,
        mobileLines: ["Recruiters and Agencies", "Ready to Hire You"] as const,
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

function StatNumber({ value }: { value: string }) {
    return (
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
    );
}

function StatLines({ lines }: { lines: readonly [string, string] }) {
    return (
        <p
            className={`m-0 mt-2 text-[14px] leading-[125%] tracking-normal text-[#000000] lg:text-[16px] ${dmSans.className}`}
            style={{ fontWeight: 400, fontStyle: "normal" }}
        >
            {lines[0]}
            <br />
            {lines[1]}
        </p>
    );
}

function StatBlock({ value, lines }: { value: string; lines: readonly [string, string] }) {
    return (
        <div className="flex min-w-0 flex-col items-start text-left">
            <StatNumber value={value} />
            <StatLines lines={lines} />
        </div>
    );
}

export function VideoEditingCalicutStatsSection() {
    return (
        <section className="w-full bg-white" aria-label="Design school achievements">
            <div
                className={[
                    "mx-auto box-border w-full max-w-[1440px]",
                    "px-4 py-10 sm:px-6 sm:py-12",
                    "lg:min-h-[201px] lg:px-[60px] lg:py-[50px]",
                ].join(" ")}
            >
                {/* Mobile: zig-zag — left, right, left; text left-aligned inside each block */}
                <div className="flex flex-col gap-12 lg:hidden">
                    {STATS.map((stat, index) => (
                        <div
                            key={stat.value}
                            className={[
                                "max-w-[min(100%,280px)]",
                                index === 1 ? "ml-auto w-max self-end" : "w-full self-start",
                            ].join(" ")}
                        >
                            <StatBlock value={stat.value} lines={stat.mobileLines} />
                        </div>
                    ))}
                </div>

                {/* Desktop: unchanged horizontal row */}
                <div className="hidden w-full items-center justify-between gap-8 lg:flex">
                    {STATS.map((stat, index) => (
                        <Fragment key={stat.value}>
                            <StatBlock value={stat.value} lines={stat.desktopLines} />
                            {index < STATS.length - 1 ? <StatSeparator /> : null}
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
