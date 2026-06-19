import Image from "next/image";
import { ALT } from "@/lib/image-alt-text";
import React from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;
const FONT_FIGMA = '"IvyPresto Display", serif';

type Row = {
    title: string;
    description: string;
    iconSrc: string;
    iconW?: number;
    iconH?: number;
};

const ROWS: Row[] = [
    {
        title: "Creative EdTech\nPlatform",
        description:
            "Our platform is designed for creative learners, making it easy to access lessons, tools, and projects that help you grow as a designer.",
        iconSrc: "/photos/schools/design/Vector (5).svg",
    },
    {
        title: "Taught by Designers,\nfor Designers",
        description:
            "Learn from real designers who have worked in the industry. They understand the challenges and will guide you with real-world insights.",
        iconSrc: "/photos/schools/design/Vector (7).svg",
    },
    {
        title: "Portfolio First\nApproach",
        description:
            "From day one, you'll be building a portfolio full of your best work. This will be your ticket to impressing future employers or clients.",
        iconSrc: "/photos/schools/design/seo/creativity dsn 1.svg",
    },
    {
        title: "Learning Through\nCreative Practices",
        description: "We believe in learning by doing. You'll get hands-on experience with real design projects, not just theory.",
        iconSrc: "/photos/schools/design/Vector (4).svg",
    },
    {
        title: "Learning Beyond\nTools",
        description:
            "It's not just about software. At Design School, we teach you to think like a designer and understand the bigger picture behind every project.",
        iconSrc: "/photos/schools/design/Vector (3).svg",
    },
    {
        title: "Placement Support\nand Job Assistance",
        description:
            "We provide resume-building assistance, mock interviews, and job placement support to help you kick-start your career in designing.",
        iconSrc: "/photos/schools/design/Vector (6).svg",
    },
    {
        title: "Mentors with real\nindustry experience",
        description:
            "Learn directly from designers who've worked on real projects, handled real clients, and know exactly what it takes to succeed.",
        iconSrc: "/photos/schools/design/seo/creativity dsn 2.svg",
        iconW: 60,
        iconH: 59,
    },
];

const LINE_COLOR = "#14BCFF";
const ICON_FILTER = "brightness(0) saturate(100%) invert(67%) sepia(54%) saturate(765%) hue-rotate(163deg) brightness(104%)";

const BLOCK_IMAGES = [
    "/photos/schools/design/Blocks.svg",
    "/photos/schools/design/Blocks%20(1).svg",
    "/photos/schools/design/Blocks%20(2).svg",
    "/photos/schools/design/Blocks%20(3).svg",
] as const;

const CORNER_SQUARES = {
    tl: "#F24E1E",
    tr: "#1ABCFE",
    bl: "#A259FF",
    br: "#0ACF83",
} as const;

function Corners({ size }: { size: number }) {
    const o = -size;
    return (
        <>
            <span className="pointer-events-none absolute z-20" style={{ width: size, height: size, background: CORNER_SQUARES.tl, top: o, left: o }} aria-hidden />
            <span className="pointer-events-none absolute z-20" style={{ width: size, height: size, background: CORNER_SQUARES.tr, top: o, right: o }} aria-hidden />
            <span className="pointer-events-none absolute z-20" style={{ width: size, height: size, background: CORNER_SQUARES.bl, bottom: o, left: o }} aria-hidden />
            <span className="pointer-events-none absolute z-20" style={{ width: size, height: size, background: CORNER_SQUARES.br, bottom: o, right: o }} aria-hidden />
        </>
    );
}

export function UiUxDesignCalicutWhyChooseSection() {
    return (
        <>
            {/* ── Why choose section ── */}
            <section className="w-full bg-white" aria-label="Why students choose Design School by HACA">
                <div
                    className="mx-auto w-full max-w-[1440px] box-border"
                    style={{
                        padding: "clamp(30px,2.78vw,40px) clamp(20px,4.17vw,60px) clamp(40px,4.17vw,60px)",
                    }}
                >
                    <div className="flex w-full flex-col gap-[40px] lg:gap-[50px]">
                        {/* Heading + subtitle */}
                        <div className="flex w-full flex-col items-center gap-3">
                            <h2 className="m-0 text-center text-black">
                                <span
                                    className="lg:hidden"
                                    style={{
                                        fontFamily: vc,
                                        fontWeight: 500,
                                        fontStyle: "normal",
                                        fontSize: "35px",
                                        lineHeight: "110%",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    Why Students Choose Design School by HACA
                                </span>
                                <span
                                    className="hidden lg:inline"
                                    style={{
                                        fontFamily: vc,
                                        fontWeight: 500,
                                        fontStyle: "normal",
                                        fontSize: "45px",
                                        lineHeight: "110%",
                                        letterSpacing: "-0.02em",
                                        textAlign: "center",
                                    }}
                                >
                                    Why Students Choose Design
                                    <br />
                                    School by HACA
                                </span>
                            </h2>

                            <p
                                className="m-0 text-center text-black/60"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 400,
                                    fontSize: "clamp(14px, 1.4vw, 20px)",
                                    lineHeight: "120%",
                                    maxWidth: 680,
                                }}
                            >
                                At Design School by HACA, you'll learn through real projects, industry mentorship, and portfolio-based
                                training that prepares you for real creative careers.
                            </p>
                        </div>

                        {/* Rows */}
                        <div className="w-full flex flex-col gap-[26px] lg:gap-[34px]">
                            {ROWS.map((row, idx) => (
                                <div key={idx} className="w-full flex flex-col gap-[18px] lg:gap-[24px]">
                                    <div className="w-full flex flex-col gap-[16px] lg:flex-row lg:items-center lg:justify-between lg:gap-[24px]">
                                        <div className="flex items-start gap-[18px] lg:gap-[50px]">
                                            <div
                                                className="relative shrink-0 w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
                                                aria-hidden="true"
                                            >
                                                <Image
                                                    src={row.iconSrc}
                                                    alt="" aria-hidden="true"
                                                    width={row.iconW ?? 50}
                                                    height={row.iconH ?? 50}
                                                    className="h-full w-full object-contain"
                                                    style={{ filter: ICON_FILTER }}
                                                />
                                            </div>

                                            <h3
                                                className="m-0 whitespace-pre-line text-black"
                                                style={{
                                                    fontFamily: vc,
                                                    fontWeight: 500,
                                                    lineHeight: "115%",
                                                    fontSize: "clamp(20px, 2.1vw, 30px)",
                                                }}
                                            >
                                                {row.title}
                                            </h3>
                                        </div>

                                        <p
                                            className="m-0 text-black/70"
                                            style={{
                                                fontFamily: vc,
                                                fontWeight: 500,
                                                letterSpacing: "0%",
                                                lineHeight: "120%",
                                                fontSize: "clamp(14px, 1.25vw, 18px)",
                                                maxWidth: 485,
                                            }}
                                        >
                                            {row.description}
                                        </p>
                                    </div>

                                    <div className="w-full border-t" style={{ borderColor: LINE_COLOR }} aria-hidden="true" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Static Figma recognition section (no animation) ── */}
            <section
                className="
                    w-full bg-[#FCFCFC] px-0
                    max-lg:relative max-lg:w-screen max-lg:max-w-none max-lg:ml-[calc(50%-50vw)] max-lg:mr-[calc(50%-50vw)] max-lg:overflow-x-clip
                "
                aria-label="Recognized by Figma as a Trusted Design School"
            >
                <div
                    className="
                        mx-auto flex h-auto w-full max-w-[1440px] min-h-0 flex-col items-stretch gap-0
                        lg:h-[504.2643127441406px] lg:flex-row lg:gap-0 lg:mx-0 lg:max-w-none
                    "
                >
                    {/* 2×2 static block grid */}
                    <div
                        className="
                            mx-0 grid aspect-square w-full max-w-none shrink-0 grid-cols-2 grid-rows-2 gap-0
                            lg:mx-0 lg:aspect-auto lg:h-[504.2643127441406px] lg:w-[504.2643127441406px] lg:max-w-none
                        "
                    >
                        {BLOCK_IMAGES.map((src, idx) => (
                            <div
                                key={idx}
                                className={[
                                    "relative min-h-0 min-w-0 h-full w-full overflow-hidden lg:h-[252.1321563720703px] lg:w-[252.1321563720703px]",
                                    idx % 2 === 1 ? "-ml-px" : "",
                                    idx >= 2 ? "-mt-px" : "",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                            >
                                <Image
                                    src={src}
                                    alt={ALT.studentPortfolio}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(min-width: 1024px) 252px, 50vw"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Black panel */}
                    <div
                        className="
                            mx-0 -mt-px flex h-[260px] w-full max-w-none shrink-0 flex-col items-center justify-center gap-5 bg-black
                            px-5 py-5
                            lg:mx-0 lg:mt-0 lg:-ml-px lg:h-[503.8576965332031px] lg:flex-1 lg:min-w-0 lg:max-w-none lg:gap-[10px] lg:p-[10px] lg:items-center lg:justify-center
                        "
                    >
                        <div className="flex w-full flex-col items-center justify-center gap-5 lg:h-full lg:gap-[10px]">
                            <div className="relative h-[60px] w-[60px] shrink-0 lg:h-[119.96611785888672px] lg:w-[119.96611785888672px]">
                                <Image
                                    src="/photos/schools/design/skill-icons_figma-dark.svg"
                                    alt="Figma"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div
                                className="
                                    relative flex w-[clamp(280px,86vw,323px)] shrink-0 items-center justify-center
                                    border-[0.8px] border-solid border-white
                                    h-[clamp(70px,21vw,81px)] px-3
                                    lg:h-[clamp(120px,14vw,146px)] lg:w-[clamp(420px,40vw,527px)] lg:border-2 lg:px-6
                                "
                            >
                                {/* Mobile corners */}
                                <span className="contents lg:hidden">
                                    <Corners size={8.015083312988281} />
                                </span>
                                {/* Desktop corners */}
                                <span className="hidden lg:contents">
                                    <Corners size={20} />
                                </span>

                                <p
                                    className="relative z-10 m-0 max-w-[min(100%,479.8644714355469px)] text-center text-[24px] leading-[120%] text-white lg:text-[clamp(30px,3vw,39.99px)]"
                                    style={{ fontFamily: vc, fontWeight: 500, letterSpacing: "0" }}
                                >
                                    Recognized by{" "}
                                    <span style={{ fontFamily: FONT_FIGMA, fontWeight: 300, fontStyle: "italic" }}>
                                        Figma
                                    </span>{" "}
                                    as
                                    <br />
                                    a Trusted Design School
                                    <span
                                        className="pointer-events-none absolute z-30 select-none left-[190px] bottom-[-28px] lg:left-[330px] lg:bottom-[-56px]"
                                        aria-hidden
                                    >
                                        <span className="relative block lg:hidden" style={{ width: 32, height: 32, transform: "rotate(12.65deg)", transformOrigin: "center" }}>
                                            <Image src="/photos/schools/design/lsicon_pointer-filled.svg" alt="" aria-hidden="true" fill className="object-contain" />
                                        </span>
                                        <span className="relative hidden lg:block" style={{ width: 59.999999006541884, height: 59.999999006541884 }}>
                                            <Image src="/photos/schools/design/lsicon_pointer-filled.svg" alt="" aria-hidden="true" fill className="object-contain" />
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
