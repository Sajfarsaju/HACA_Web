"use client";

import Link from "next/link";
import React from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

type ProgramCard = {
    id: string;
    bg: string;
    badge: { mode: string; duration: string };
    title: string;
    description: string;
    button: { bg: string; fg: string };
    imageSrc: string;
    imageAlt: string;
    // wrapper decides anchor + crop box; inner uses object-fit
    imageWrapClassName: string;
    imageObjectClassName: string;
    imageStyle?: React.CSSProperties;
    // layout control to match screenshot
    contentWrapClassName: string;
    titleMaxWidthClassName?: string;
    descriptionMaxWidthClassName?: string;
    href: string;
};

const PROGRAMS: ProgramCard[] = [
    {
        id: "ai-graphic",
        bg: "#8F56FF",
        badge: { mode: "Online", duration: "3 Months" },
        title: "AI Integrated\nGraphic Design",
        description:
            "Build a strong foundation in visual design that supports any creative role. This module focuses on clarity, structure, and making intentional design decisions.",
        button: { bg: "#FF5C00", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/seo/60b47d2800c7e3eca0f8d38692662a973f3b73b0.png",
        imageAlt: "AI Integrated Graphic Design",
        imageWrapClassName:
            "absolute bottom-0 left-0 w-[240px] sm:w-[280px] lg:w-[330px] h-[240px] sm:h-[300px] lg:h-[380px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-bottom object-left",
        contentWrapClassName: "ml-auto w-full max-w-[300px] lg:max-w-[320px] text-left",
        titleMaxWidthClassName: "max-w-[260px] lg:max-w-[280px]",
        descriptionMaxWidthClassName: "max-w-[280px]",
        href: "/design-school/courses/ai-graphic-design",
    },
    {
        id: "video-edit",
        bg: "#2592FF",
        badge: { mode: "Online", duration: "3 Months" },
        title: "AI Integrated\nVideo Editing\nMastery",
        description:
            "Editing is more than cutting clips. Learn how visuals, sound, and timing come together to tell a story and keep viewers engaged.",
        button: { bg: "#29C76B", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/seo/72a77144b3092dffcf6470686297c0e74e448b83.png",
        imageAlt: "AI Integrated Video Editing Mastery",
        // Slight zoom like screenshot: use object-cover within a tighter box.
        imageWrapClassName:
            "absolute bottom-0 left-0 w-[260px] sm:w-[320px] lg:w-[410px] h-[260px] sm:h-[330px] lg:h-[440px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-bottom object-left",
        contentWrapClassName: "ml-auto w-full max-w-[320px] lg:max-w-[340px] text-left",
        titleMaxWidthClassName: "max-w-[310px]",
        descriptionMaxWidthClassName: "max-w-[300px]",
        href: "/design-school/courses/program-5",
    },
    {
        id: "uiux",
        bg: "#29C76B",
        badge: { mode: "Online", duration: "3 Months" },
        title: "UI/UX Design +\nAI Program",
        description:
            "Learn to design digital experiences that are simple, functional, and user-friendly. This module covers design thinking, wireframing, and prototyping for apps and websites.",
        button: { bg: "#2592FF", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/seo/efaa9dd8679f63c251e45143e7c74c5afcb821ae.png",
        imageAlt: "UI/UX Design + AI Program",
        imageWrapClassName:
            "absolute bottom-0 right-0 w-[260px] sm:w-[320px] lg:w-[380px] h-[260px] sm:h-[330px] lg:h-[410px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-bottom object-right",
        imageStyle: { transform: "scaleX(-1)" },
        contentWrapClassName: "w-full max-w-[330px] text-left",
        titleMaxWidthClassName: "max-w-[300px]",
        descriptionMaxWidthClassName: "max-w-[310px]",
        href: "/design-school/courses/program-4",
    },
    {
        id: "branding",
        bg: "#FF5659",
        badge: { mode: "Online", duration: "4 Weeks" },
        title: "Branding and\nIdentity Design",
        description:
            "Understand how brands are built from the ground up. Learn logo design, visual identity, and storytelling for designers who want to specialise in branding.",
        button: { bg: "#8F56FF", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/seo/4bb434c3142cc5e13672d6cf063a4a96bdff02c0.png",
        imageAlt: "Branding and Identity Design",
        // Top-right like screenshot; keep it tucked in.
        imageWrapClassName:
            "absolute top-0 right-0 w-[280px] sm:w-[360px] lg:w-[460px] h-[220px] sm:h-[270px] lg:h-[320px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-top object-right",
        contentWrapClassName: "mt-auto w-full max-w-[330px] text-left",
        titleMaxWidthClassName: "max-w-[320px]",
        descriptionMaxWidthClassName: "max-w-[320px]",
        href: "/design-school/courses/program-3",
    },
] as const;

function ExploreBadge({ mode, duration }: { mode: string; duration: string }) {
    return (
        <div className="inline-flex items-center gap-2 rounded-[999px] bg-white/90 px-3 py-2">
            <span style={{ fontFamily: vc, fontWeight: 500, fontSize: 12, lineHeight: "100%", color: "#000000" }}>
                {mode}
            </span>
            <span className="h-[14px] w-px bg-black/40" aria-hidden />
            <span style={{ fontFamily: vc, fontWeight: 500, fontSize: 12, lineHeight: "100%", color: "#000000" }}>
                {duration}
            </span>
        </div>
    );
}

function EnquireButton({ bg, fg }: { bg: string; fg: string }) {
    return (
        <div className="inline-flex items-center rounded-[999px] pl-4 pr-2 py-2" style={{ backgroundColor: bg, color: fg }}>
            <span style={{ fontFamily: vc, fontWeight: 500, fontSize: 14, lineHeight: "100%" }}>Enquire Now</span>
            <span
                className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
                aria-hidden
            >
                <span className="text-[18px] leading-none" style={{ color: fg }}>
                    →
                </span>
            </span>
        </div>
    );
}

function ProgramCardView(p: ProgramCard) {
    const titleLines = p.title.split("\n");
    return (
        <Link
            href={p.href}
            className={[
                "group relative block w-full overflow-hidden",
                "rounded-[19.17px]",
                "mx-auto max-w-[640px]",
                "lg:h-[603.8338623046875px] lg:w-[640px]",
            ].join(" ")}
            style={{ backgroundColor: p.bg }}
        >
            <div className="relative z-[2] flex h-full min-h-[360px] w-full flex-col gap-4 p-5 sm:p-6 lg:p-[30px]">
                <ExploreBadge mode={p.badge.mode} duration={p.badge.duration} />

                <div className={["flex w-full flex-col gap-3", p.contentWrapClassName].join(" ")}>
                    <h3
                        className={["m-0 text-white", p.titleMaxWidthClassName ?? ""].join(" ").trim()}
                        style={{
                            fontFamily: vc,
                            fontWeight: 600,
                            fontStyle: "normal",
                            fontSize: "clamp(22px, 2.4vw, 34px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                            whiteSpace: "pre-line",
                        }}
                    >
                        {titleLines.join("\n")}
                    </h3>

                    <p
                        className={["m-0 text-white/85", p.descriptionMaxWidthClassName ?? ""].join(" ").trim()}
                        style={{
                            fontFamily: vc,
                            fontWeight: 400,
                            fontSize: 13,
                            lineHeight: "120%",
                        }}
                    >
                        {p.description}
                    </p>

                    <div className="pt-2">
                        <EnquireButton bg={p.button.bg} fg={p.button.fg} />
                    </div>
                </div>
            </div>

            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.10), rgba(0,0,0,0.10))" }}
                aria-hidden
            />

            <div className={[p.imageWrapClassName, "z-[1] overflow-hidden"].join(" ")} aria-hidden>
                <img
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    className={["h-full w-full", p.imageObjectClassName].join(" ")}
                    style={p.imageStyle}
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </Link>
    );
}

export function GraphicDesigningCalicutExploreProgramsSection() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto box-border w-full max-w-[1440px] px-4 py-10 sm:px-6 lg:px-[60px] lg:py-[40px]">
                <div className="flex w-full flex-col items-center gap-10 lg:gap-[60px]">
                    <div className="flex w-full max-w-[880px] flex-col items-center gap-4">
                        <h2
                            className="m-0 text-center text-black"
                            style={{
                                fontFamily: vc,
                                fontWeight: 500,
                                fontStyle: "normal",
                                fontSize: "clamp(28px, 3.2vw, 45px)",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Explore More
                            <br />
                            Design Programs
                        </h2>

                        <p
                            className="m-0 text-center"
                            style={{
                                fontFamily: vc,
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "20px",
                                lineHeight: "120%",
                                letterSpacing: "0",
                                color: "#000000B2",
                            }}
                        >
                            Whether you want to go all-in or start with one skill, there’s something that fits. At Design
                            School, you’ll find multiple programs designed for different goals, schedules, and interests.
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8">
                            {PROGRAMS.map((p) => (
                                <ProgramCardView key={p.id} {...p} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

