import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { GraphicDesigningCalicutFigmaRecognizedSection } from "@/components/design/GraphicDesigningCalicutFigmaRecognizedSection";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

const vc = '"VC Nudge Trial Normal", sans-serif' as const;
const SWITZER = '"Switzer", sans-serif';

const SIDE_TEXT_COLOR = "#00000099";

const seoIcon = (file: string) =>
    `/photos/schools/design/seo/${encodeURIComponent(file)}`;

type Row = {
    title: string;
    description: string;
    iconSrc: string;
};

const ROWS: Row[] = [
    {
        title: "Creative EdTech Platform",
        description:
            "Our learning platform is built for creative minds, giving you easy access to lessons, tools, projects, recordings, and resources that support your growth step by step.",
        iconSrc: seoIcon("Vector.svg"),
    },
    {
        title: "Taught by Industry Creators",
        description:
            "Learn directly from top video editors and creative professionals who've worked on real brands, campaigns, and client projects. Get practical insights that go beyond classroom theory.",
        iconSrc: seoIcon("Vector (1).svg"),
    },
    {
        title: "Portfolio-First Learning Approach",
        description:
            "From the beginning, you'll work on projects that help you build a strong portfolio, so by the end of the course, you'll already have work worth showcasing to clients and recruiters.",
        iconSrc: seoIcon("Vector (2).svg"),
    },
    {
        title: "Learn Through Real Creative Practice",
        description:
            "We believe creativity grows through action. That's why you'll spend more time creating, experimenting, and working on practical projects instead of just listening to theory.",
        iconSrc: seoIcon("Abstract 232.svg"),
    },
    {
        title: "Learning Beyond Just Software",
        description:
            "At Design School by HACA, you'll learn storytelling, creative thinking, design communication, and how to approach projects like a real creative professional.",
        iconSrc: seoIcon("Vector (3).svg"),
    },
    {
        title: "Placement Support & Career Guidance",
        description:
            "Get career guidance, freelance direction, portfolio reviews, and placement support from the HACA creative team.",
        iconSrc: seoIcon("Vector (4).svg"),
    },
    {
        title: "Flexible EMI Options Available",
        description:
            "We offer easy EMI options to make learning more accessible, so you can focus on building your creative career without financial pressure.",
        iconSrc: seoIcon("Group.svg"),
    },
];

const DIVIDER_COLOR = "#655CC5";

function RowDivider() {
    return (
        <div
            className="w-full border-t border-solid"
            style={{ borderWidth: "1px", borderColor: DIVIDER_COLOR }}
            aria-hidden
        />
    );
}

function DifferentRow({ row }: { row: Row }) {
    return (
        <div className="flex w-full flex-col gap-[18px] lg:gap-[24px]">
            <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                <div className="flex min-w-0 items-center gap-[18px] lg:shrink-0 lg:gap-[50px]">
                    <div
                        className="relative h-10 w-10 shrink-0 lg:h-[50px] lg:w-[50px]"
                        aria-hidden
                    >
                        <Image
                            src={row.iconSrc}
                            alt=""
                            width={50}
                            height={50}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <h3
                        className="m-0 min-w-0 text-left text-black"
                        style={{
                            fontFamily: vc,
                            fontWeight: 500,
                            fontSize: "clamp(20px, 2.1vw, 30px)",
                            lineHeight: "115%",
                            letterSpacing: "0",
                        }}
                    >
                        {row.title}
                    </h3>
                </div>

                <p
                    className={[
                        dmSans.className,
                        "m-0 w-full min-w-0 text-left lg:ml-auto lg:w-[485px] lg:max-w-[485px] lg:shrink-0",
                    ].join(" ")}
                    style={{
                        fontWeight: 400,
                        fontStyle: "normal",
                        fontSize: "clamp(15px, 1.25vw, 18px)",
                        lineHeight: "28px",
                        letterSpacing: "0",
                        color: SIDE_TEXT_COLOR,
                    }}
                >
                    {row.description}
                </p>
            </div>

            <RowDivider />
        </div>
    );
}

export function VideoEditingCalicutWhatMakesDifferentSection() {
    return (
        <div className="flex w-full flex-col gap-6 bg-white lg:gap-0">
            <section
                className="w-full bg-white"
                aria-labelledby="video-editing-different-heading"
            >
                <div className="mx-auto box-border w-full max-w-[1440px] px-4 pt-4 pb-10 sm:px-6 sm:pt-6 lg:px-[60px] lg:pt-6 lg:pb-[60px]">
                    <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10 lg:gap-[80px]">
                    <header className="mx-auto flex w-full max-w-[343px] flex-col items-center text-center lg:max-w-none">
                        <h2
                            id="video-editing-different-heading"
                            className="m-0 w-full text-black"
                        >
                            {/* Mobile — 3 lines (Switzer 35px) */}
                            <span
                                className="mx-auto flex w-full flex-col items-center lg:hidden"
                                style={{
                                    fontFamily: SWITZER,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "clamp(30px, 8.75vw, 35px)",
                                    lineHeight: 1.15,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                <span className="whitespace-nowrap">What Makes HACA&apos;s</span>
                                <span className="whitespace-nowrap">Video Editing Course</span>
                                <span className="whitespace-nowrap">Different?</span>
                            </span>

                            {/* Desktop — 2 lines (VC Nudge 45px) */}
                            <span
                                className="mx-auto hidden w-full flex-col items-center lg:flex"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "45px",
                                    lineHeight: 1.1,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                <span className="whitespace-nowrap">
                                    What Makes HACA&apos;s Video Editing
                                </span>
                                <span className="whitespace-nowrap">Course Different?</span>
                            </span>
                        </h2>
                    </header>

                    <div className="flex w-full flex-col gap-[26px] lg:gap-[34px]">
                        {ROWS.map((row) => (
                            <DifferentRow key={row.title} row={row} />
                        ))}
                    </div>
                    </div>
                </div>
            </section>

            <GraphicDesigningCalicutFigmaRecognizedSection />
        </div>
    );
}
