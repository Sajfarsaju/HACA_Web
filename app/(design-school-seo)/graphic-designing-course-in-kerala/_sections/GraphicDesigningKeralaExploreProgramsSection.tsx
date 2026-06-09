"use client";


import Image from "next/image";
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
    imageWrapClassName: string;
    imageObjectClassName: string;
    imageStyle?: React.CSSProperties;
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
            "Build a strong visual foundation while learning modern creative workflows with AI-assisted design practices.",
        button: { bg: "#FF5C00", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/60b47d2800c7e3eca0f8d38692662a973f3b73b0.webp",
        imageAlt: "AI Integrated Graphic Design",
        imageWrapClassName:
            "absolute z-[1] bottom-0 left-0 lg:bottom-[-80px] lg:left-[-50px] xl:bottom-[-150px] xl:left-[-80px] w-[300px] sm:w-[360px] lg:w-[300px] xl:w-[440px] h-[300px] sm:h-[380px] lg:h-[340px] xl:h-[500px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-left-bottom",
        contentWrapClassName: "ml-auto w-full max-w-[155px] lg:max-w-[210px] xl:max-w-[320px] text-left",
        titleMaxWidthClassName: "max-w-[150px] lg:max-w-[190px] xl:max-w-[280px]",
        descriptionMaxWidthClassName: "max-w-[150px] lg:max-w-[190px] xl:max-w-[280px]",
        href: "/design-school/courses/ai-graphic-design",
    },
    {
        id: "video-edit",
        bg: "#2592FF",
        badge: { mode: "Online", duration: "3 Months" },
        title: "AI Integrated\nVideo Editing",
        description:
            "Learn editing, storytelling, pacing, transitions, and cinematic workflows for social media and commercial content.",
        button: { bg: "#29C76B", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/72a77144b3092dffcf6470686297c0e74e448b83.webp",
        imageAlt: "AI Integrated Video Editing Mastery",
        imageWrapClassName:
            "absolute z-[1] bottom-[-60px] left-[-60px] sm:bottom-[-80px] sm:left-[-80px] lg:bottom-[-80px] lg:left-[-80px] xl:bottom-[-100px] xl:left-[-100px] w-[320px] sm:w-[400px] lg:w-[360px] xl:w-[530px] h-[320px] sm:h-[420px] lg:h-[380px] xl:h-[560px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-left-bottom",
        contentWrapClassName: "mt-auto ml-auto w-full max-w-[120px] lg:max-w-[170px] xl:max-w-[260px] text-left",
        titleMaxWidthClassName: "max-w-[115px] lg:max-w-[165px] xl:max-w-[250px]",
        descriptionMaxWidthClassName: "max-w-[115px] lg:max-w-[165px] xl:max-w-[250px]",
        href: "/design-school/courses/program-5",
    },
    {
        id: "uiux",
        bg: "#29C76B",
        badge: { mode: "Online", duration: "3 Months" },
        title: "UI/UX Design +\nAI Program",
        description:
            "Design user-friendly apps and websites through wireframing, prototyping, and design thinking practices.",
        button: { bg: "#2592FF", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/efaa9dd8679f63c251e45143e7c74c5afcb821ae.webp",
        imageAlt: "UI/UX Design + AI Program",
        imageWrapClassName:
            "absolute z-[1] bottom-[-130px] right-[-200px] sm:bottom-[-150px] sm:right-[-240px] lg:bottom-[-180px] lg:right-[-240px] xl:bottom-[-220px] xl:right-[-280px] w-[350px] sm:w-[520px] lg:w-[440px] xl:w-[620px] h-[350px] sm:h-[540px] lg:h-[470px] xl:h-[660px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-right-bottom",
        imageStyle: { transform: "scaleX(-1)" },
        contentWrapClassName: "w-full max-w-[155px] lg:max-w-[220px] xl:max-w-[330px] text-left",
        titleMaxWidthClassName: "max-w-[150px] lg:max-w-[200px] xl:max-w-[300px]",
        descriptionMaxWidthClassName: "max-w-[150px] lg:max-w-[200px] xl:max-w-[310px]",
        href: "/design-school/courses/program-4",
    },
    {
        id: "branding",
        bg: "#FF5659",
        badge: { mode: "Online", duration: "4 Weeks" },
        title: "Branding &\nIdentity Design",
        description:
            "Learn logo systems, visual storytelling, brand strategy, and identity creation for modern brands.",
        button: { bg: "#8F56FF", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/4bb434c3142cc5e13672d6cf063a4a96bdff02c0.webp",
        imageAlt: "Branding and Identity Design",
        imageWrapClassName:
            "absolute z-[1] top-0 right-[-60px] sm:right-[-80px] lg:right-[-80px] xl:right-[-100px] w-[340px] sm:w-[440px] lg:w-[390px] xl:w-[580px] h-[280px] sm:h-[360px] lg:h-[280px] xl:h-[430px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-right-top",
        contentWrapClassName: "mt-auto w-full max-w-[155px] lg:max-w-[220px] xl:max-w-[330px] text-left",
        titleMaxWidthClassName: "max-w-[150px] lg:max-w-[210px] xl:max-w-[320px]",
        descriptionMaxWidthClassName: "max-w-[150px] lg:max-w-[210px] xl:max-w-[320px]",
        href: "/design-school/courses/program-3",
    },
] as const;

const BADGE_CSS = `
.kerala-explore-badge-pill {
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    height: 34px;
    padding: 8px 12px;
    gap: 8px;
    border-radius: 63.34px;
    border: 0.52px solid;
    background: #ffffff;
    white-space: nowrap;
    width: fit-content;
}
.kerala-explore-badge-pill .badge-text {
    font-weight: 500;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0;
    color: #000000;
    white-space: nowrap;
}
.kerala-explore-badge-pill .badge-divider {
    flex-shrink: 0;
    width: 0;
    height: 12px;
    border-left: 1.65px solid;
    align-self: center;
}
@media (min-width: 1024px) {
    .kerala-explore-badge-pill {
        height: 38px;
        padding: 8px 12px;
        gap: 7px;
        border-radius: 80px;
        border-width: 1px;
        min-width: unset;
    }
    .kerala-explore-badge-pill .badge-text { font-size: 14px; }
    .kerala-explore-badge-pill .badge-divider { height: 12px; border-left-width: 2px; }
}
@media (min-width: 1280px) {
    .kerala-explore-badge-pill {
        height: 45px;
        padding: 10px 16px;
        gap: 10px;
        border-radius: 121px;
        border-width: 1px;
        min-width: 191px;
    }
    .kerala-explore-badge-pill .badge-text { font-size: 18px; }
    .kerala-explore-badge-pill .badge-divider { height: 13.1px; border-left-width: 2.91px; }
}
`;

function ExploreBadge({ mode, duration, accent }: { mode: string; duration: string; accent: string }) {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: BADGE_CSS }} />
            <div className="kerala-explore-badge-pill" style={{ borderColor: accent }}>
                <span className="badge-text" style={{ fontFamily: vc }}>{mode}</span>
                <span className="badge-divider" style={{ borderColor: accent }} aria-hidden />
                <span className="badge-text" style={{ fontFamily: vc }}>{duration}</span>
            </div>
        </>
    );
}

function EnquireButton({ bg, fg }: { bg: string; fg: string }) {
    return (
        <div className="inline-flex items-center rounded-[999px] pl-4 pr-2 py-2" style={{ backgroundColor: bg, color: fg }}>
            <span style={{ fontFamily: vc, fontWeight: 500, fontSize: 14, lineHeight: "100%", whiteSpace: "nowrap" }}>Enquire Now</span>
            <Image
                className="ml-2"
                src="/photos/schools/design/arrow_cool_down.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden
            />
        </div>
    );
}

function ProgramCardView(p: ProgramCard) {
    const titleLines = p.title.split("\n");
    return (
        <Link
            href={p.href}
            className={[
                "group relative flex flex-col w-full overflow-hidden",
                "rounded-[19.17px]",
                "w-full lg:mx-auto lg:max-w-[640px]",
                "min-h-[316px] lg:min-h-[clamp(420px,42vw,604px)]",
            ].join(" ")}
            style={{ backgroundColor: p.bg }}
        >
            <div className="relative z-[2] flex flex-1 w-full flex-col gap-4 p-[20px] xl:p-[30px]">
                <ExploreBadge mode={p.badge.mode} duration={p.badge.duration} accent={p.bg} />

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
                        style={{ fontFamily: vc, fontWeight: 400, fontSize: 13, lineHeight: "120%" }}
                    >
                        {p.description}
                    </p>

                    <div className="pt-2 w-max">
                        <EnquireButton bg={p.button.bg} fg={p.button.fg} />
                    </div>
                </div>
            </div>

            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.10), rgba(0,0,0,0.10))" }}
                aria-hidden
            />

            <div className={p.imageWrapClassName} aria-hidden>
                <Image
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    fill
                    className={p.imageObjectClassName}
                    style={p.imageStyle}
                    sizes="(max-width: 1024px) 360px, 440px"
                />
            </div>
        </Link>
    );
}

export function GraphicDesigningKeralaExploreProgramsSection() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto box-border w-full max-w-[1440px] px-4 py-10 sm:px-6 lg:px-[clamp(24px,4.17vw,60px)] lg:py-[40px]">
                <div className="flex w-full flex-col items-center gap-10 lg:gap-[60px]">
                    <div className="flex w-full max-w-[880px] flex-col items-center gap-4">
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
                                Explore More Creative Programs
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
                                Explore More Creative Programs
                            </span>
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
                            Not everyone learns the same way. That&apos;s why we offer focused programs for different creative goals and schedules.
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="grid w-full grid-cols-1 justify-items-center gap-[30px] sm:grid-cols-2 sm:gap-[30px] lg:gap-[clamp(16px,1.67vw,24px)]">
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
