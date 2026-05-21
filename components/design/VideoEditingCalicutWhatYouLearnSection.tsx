import type { CSSProperties } from "react";
import { DM_Sans, Red_Hat_Display } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    display: "swap",
});

const redHatDisplay = Red_Hat_Display({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

/** Accent bar height matches two-line heading block (mobile 18px / desktop 22px) */
const HEADING_BLOCK_HEIGHT_MOBILE = "calc(18px * 1.1 * 2)";
const HEADING_BLOCK_HEIGHT_DESKTOP = "calc(22px * 1.1 * 2)";

const THEME = "#655CC5";
const MUTED = "#00000099";

const LEARN_ITEMS = [
    {
        titleLines: ["Visual Storytelling That", "Grabs Attention"] as const,
        description: "Learn how to create videos that speak volumes",
        desktop: { width: 251, height: 102 },
    },
    {
        titleLines: ["Expert Video Editing", "Techniques"] as const,
        description:
            "Master the basics of cutting, trimming, transitions, and timing to make your videos flow smoothly.",
        desktop: { width: 228, height: 142 },
    },
    {
        titleLines: ["Sound Editing &", "Designing to Set the Mood"] as const,
        description:
            "Understand how sound effects, background scores, and voiceovers bring your story to life.",
        desktop: { width: 284, height: 142 },
    },
    {
        titleLines: ["Cinematic Colour", "Grading"] as const,
        description:
            "Make your videos visually striking with colour grading that enhances emotion and tone.",
        desktop: { width: 220, height: 142 },
    },
    {
        titleLines: ["Basics of", "Cinematography"] as const,
        description:
            "Learn about camera angles, framing, and lighting because good editing starts with good footage.",
        desktop: { width: 228, height: 142 },
    },
    {
        titleLines: ["AI & Multicam", "Workflows"] as const,
        description:
            "Speed up editing with AI tools and handle multi-camera projects like a pro.",
        desktop: { width: 205, height: 142 },
    },
    {
        titleLines: ["Full Film-Making", "Process"] as const,
        description:
            "From pre-production to production and post-production, gain a comprehensive understanding of how videos are actually created.",
        desktop: { width: 283, height: 142 },
    },
] as const;

function AccentLine() {
    return (
        <div
            className="w-0 shrink-0 self-start border-l-[3px] h-[var(--accent-h-mobile)] lg:h-[var(--accent-h-desktop)]"
            style={
                {
                    borderColor: THEME,
                    "--accent-h-mobile": HEADING_BLOCK_HEIGHT_MOBILE,
                    "--accent-h-desktop": HEADING_BLOCK_HEIGHT_DESKTOP,
                } as CSSProperties
            }
            aria-hidden
        />
    );
}

function LearnItem({
    titleLines,
    description,
    desktopWidth,
    desktopHeight,
}: {
    titleLines: readonly [string, string];
    description: string;
    desktopWidth: number;
    desktopHeight: number;
}) {
    const containerStyle = {
        "--learn-w": `${desktopWidth}px`,
        "--learn-h": `${desktopHeight}px`,
    } as CSSProperties;

    return (
        <article
            className="box-border flex w-full max-w-full shrink-0 flex-col gap-3 lg:w-[var(--learn-w)] lg:min-h-[var(--learn-h)] lg:gap-[14px]"
            style={containerStyle}
        >
            <div className="flex items-start gap-2.5 lg:gap-[12px]">
                <AccentLine />
                <h3
                    className={`m-0 min-w-0 flex-1 break-words text-[18px] leading-[110%] tracking-[-0.02em] text-[#000000] lg:text-[22px] ${dmSans.className}`}
                    style={{ fontWeight: 600, fontStyle: "normal" }}
                >
                    {titleLines[0]}
                    <br />
                    {titleLines[1]}
                </h3>
            </div>
            <p
                className={`m-0 w-full break-words text-left text-[14px] leading-[110%] tracking-normal lg:text-[18px] ${redHatDisplay.className}`}
                style={{ fontWeight: 400, fontStyle: "normal", color: MUTED }}
            >
                {description}
            </p>
        </article>
    );
}

export function VideoEditingCalicutWhatYouLearnSection() {
    const rowOne = LEARN_ITEMS.slice(0, 4);
    const rowTwo = LEARN_ITEMS.slice(4);

    return (
        <section className="w-full bg-white" aria-labelledby="video-calicut-what-you-learn">
            <div
                className={[
                    "mx-auto box-border flex w-full max-w-[1440px] flex-col",
                    "gap-5 px-4 py-[30px]",
                    "max-lg:overflow-x-hidden",
                    "lg:gap-[60px] lg:px-[60px] lg:py-[60px]",
                ].join(" ")}
            >
                <header className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-4 text-center lg:gap-5">
                    <h2
                        id="video-calicut-what-you-learn"
                        className={`m-0 w-full max-w-[343px] text-[26px] leading-[110%] tracking-[-0.02em] text-[#000000] sm:max-w-[400px] sm:text-[30px] lg:max-w-[655px] lg:text-[45px] ${dmSans.className}`}
                        style={{ fontWeight: 500, fontStyle: "normal" }}
                    >
                        <span className="hidden lg:inline">
                            What You&apos;ll Learn in this Video
                            <br />
                            Editing Course in Calicut
                        </span>
                        <span className="lg:hidden">
                            What You&apos;ll Learn in this Video
                            <br />
                            Editing Course in Calicut
                        </span>
                    </h2>
                    <p
                        className={`m-0 w-full max-w-[343px] px-0 text-[14px] leading-[110%] tracking-normal sm:max-w-[400px] sm:text-[16px] lg:max-w-[605px] lg:text-[18px] ${dmSans.className}`}
                        style={{ fontWeight: 400, fontStyle: "normal", color: MUTED }}
                    >
                        At Design School by HACA, editing is more than just software, you&apos;ll learn:
                    </p>
                </header>

                <div className="mx-auto w-full max-w-[1320px] max-lg:min-w-0">
                    <div className="flex w-full min-w-0 flex-col gap-5 lg:hidden">
                        {LEARN_ITEMS.map((item) => (
                            <LearnItem
                                key={item.titleLines[0]}
                                titleLines={item.titleLines}
                                description={item.description}
                                desktopWidth={item.desktop.width}
                                desktopHeight={item.desktop.height}
                            />
                        ))}
                    </div>

                    {/* Desktop: 1320×334 content frame, 50px row gap */}
                    <div className="hidden w-full max-w-[1320px] flex-col gap-[50px] lg:flex lg:min-h-[334px]">
                        {/* Row 1: 1320×142, space-between */}
                        <div className="flex w-full min-h-[142px] items-start justify-between">
                            {rowOne.map((item) => (
                                <LearnItem
                                    key={item.titleLines[0]}
                                    titleLines={item.titleLines}
                                    description={item.description}
                                    desktopWidth={item.desktop.width}
                                    desktopHeight={item.desktop.height}
                                />
                            ))}
                        </div>
                        {/* Row 2: 948×142, 116px gap, centered in 1320 */}
                        <div className="mx-auto flex w-[948px] min-h-[142px] items-start gap-[116px]">
                            {rowTwo.map((item) => (
                                <LearnItem
                                    key={item.titleLines[0]}
                                    titleLines={item.titleLines}
                                    description={item.description}
                                    desktopWidth={item.desktop.width}
                                    desktopHeight={item.desktop.height}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
