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
    imageSrc?: string;
    imageAlt?: string;
    hideImage?: boolean;
    imageWrapClassName: string;
    imageWrapStyle?: React.CSSProperties;
    imageObjectClassName: string;
    imageStyle?: React.CSSProperties;
    contentWrapClassName: string;
    cardBodyClassName?: string;
    titleMaxWidthClassName?: string;
    descriptionMaxWidthClassName?: string;
    href: string;
};

const IMG_1309 = `/photos/schools/design/seo/${encodeURIComponent("IMG_1309 (1) 1.png")}`;

/** Four program cards; creative-design uses Figma image placement (IMG_1309 on the right). */
const PROGRAMS: ProgramCard[] = [
    {
        id: "creative-design",
        bg: "#FF5C00",
        badge: { mode: "Online", duration: "6 Months" },
        title: "Creative Design and\nCommunication",
        description:
            "This offline flagship CDC course supports you in learning graphic design, video editing, UI/UX, and more, while also offering opportunities to work on real projects through a one-month internship opportunity.",
        imageSrc: IMG_1309,
        imageAlt: "Creative Design and Communication",
        imageWrapClassName: [
            "pointer-events-none absolute z-[1] select-none opacity-100",
            "top-[clamp(96px,30.2%,182.68px)] left-[clamp(16px,34.53%,221px)]",
            "h-auto w-[min(400px,62.5%)] aspect-[400/405.39]",
            "lg:top-[182.68px] lg:left-[221px] lg:h-[405.3878173828125px] lg:w-[400px] lg:aspect-auto",
        ].join(" "),
        imageObjectClassName: "h-full w-full object-contain object-bottom",
        contentWrapClassName: "w-full max-w-[min(280px,52%)] text-left",
        cardBodyClassName: "flex min-h-0 flex-1 flex-col justify-between gap-4",
        titleMaxWidthClassName: "max-w-[260px] lg:max-w-[280px]",
        descriptionMaxWidthClassName: "max-w-[280px]",
        href: "/design-school/courses/creative-design",
    },
    {
        id: "ai-graphic",
        bg: "#8F56FF",
        badge: { mode: "Online", duration: "3 Months" },
        title: "AI Integrated\nGraphic Design",
        description:
            "Discover the fundamentals of contemporary graphic design in this online course, perfect for beginners and those looking to switch careers, all from the comfort of your home.",
        imageSrc: "/photos/schools/design/seo/60b47d2800c7e3eca0f8d38692662a973f3b73b0.png",
        imageAlt: "AI Integrated Graphic Design",
        imageWrapClassName:
            "absolute bottom-0 left-0 lg:-bottom-[80px] lg:-left-[50px] xl:-bottom-[150px] xl:-left-[80px] w-[300px] sm:w-[360px] lg:w-[300px] xl:w-[440px] h-[300px] sm:h-[380px] lg:h-[340px] xl:h-[500px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-bottom object-left",
        contentWrapClassName: "ml-auto w-full max-w-[155px] lg:max-w-[210px] xl:max-w-[320px] text-left",
        titleMaxWidthClassName: "max-w-[150px] lg:max-w-[190px] xl:max-w-[280px]",
        descriptionMaxWidthClassName: "max-w-[150px] lg:max-w-[190px] xl:max-w-[280px]",
        href: "/design-school/courses/ai-graphic-design",
    },
    {
        id: "uiux",
        bg: "#29C76B",
        badge: { mode: "Online", duration: "3 Months" },
        title: "UI/UX Design +\nAI Program",
        description:
            "Learn how to create intuitive digital experiences by exploring design thinking, wireframing, and prototyping, perfect for aspiring app and web designers.",
        imageSrc: "/photos/schools/design/seo/efaa9dd8679f63c251e45143e7c74c5afcb821ae.png",
        imageAlt: "UI/UX Design + AI Program",
        imageWrapClassName:
            "absolute -bottom-[130px] -right-[160px] sm:-bottom-[150px] sm:-right-[200px] lg:-bottom-[180px] lg:-right-[200px] xl:-bottom-[220px] xl:-right-[240px] w-[350px] sm:w-[520px] lg:w-[440px] xl:w-[620px] h-[350px] sm:h-[540px] lg:h-[470px] xl:h-[660px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-bottom object-right",
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
        title: "Branding and\nIdentity Design",
        description:
            "Quickly master brand storytelling, logo creation, and visual identity development in this focused online bootcamp, ideal for designers aiming to specialise in branding.",
        imageSrc: "/photos/schools/design/seo/4bb434c3142cc5e13672d6cf063a4a96bdff02c0.png",
        imageAlt: "Branding and Identity Design",
        imageWrapClassName:
            "absolute top-0 -right-[60px] sm:-right-[80px] lg:-right-[80px] xl:-right-[100px] w-[340px] sm:w-[440px] lg:w-[390px] xl:w-[580px] h-[280px] sm:h-[360px] lg:h-[280px] xl:h-[430px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-top object-right",
        contentWrapClassName: "mt-auto w-full max-w-[155px] lg:max-w-[220px] xl:max-w-[330px] text-left",
        titleMaxWidthClassName: "max-w-[150px] lg:max-w-[210px] xl:max-w-[320px]",
        descriptionMaxWidthClassName: "max-w-[150px] lg:max-w-[210px] xl:max-w-[320px]",
        href: "/design-school/courses/program-3",
    },
] as const;

const BADGE_CSS = `
.explore-badge-pill {
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
.explore-badge-pill .badge-text {
    font-weight: 500;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0;
    color: #000000;
    white-space: nowrap;
}
.explore-badge-pill .badge-divider {
    flex-shrink: 0;
    width: 0;
    height: 12px;
    border-left: 1.65px solid;
    align-self: center;
}
@media (min-width: 1024px) {
    .explore-badge-pill {
        height: 38px;
        padding: 8px 12px;
        gap: 7px;
        border-radius: 80px;
        border-width: 1px;
        min-width: unset;
    }
    .explore-badge-pill .badge-text {
        font-size: 14px;
    }
    .explore-badge-pill .badge-divider {
        height: 12px;
        border-left-width: 2px;
    }
}
@media (min-width: 1280px) {
    .explore-badge-pill {
        height: 45px;
        padding: 10px 16px;
        gap: 10px;
        border-radius: 121px;
        border-width: 1px;
        min-width: 191px;
    }
    .explore-badge-pill .badge-text {
        font-size: 18px;
    }
    .explore-badge-pill .badge-divider {
        height: 13.1px;
        border-left-width: 2.91px;
    }
}
`;

function ExploreBadge({ mode, duration, accent }: { mode: string; duration: string; accent: string }) {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: BADGE_CSS }} />
            <div className="explore-badge-pill" style={{ borderColor: accent }}>
                <span className="badge-text" style={{ fontFamily: vc }}>
                    {mode}
                </span>
                <span className="badge-divider" style={{ borderColor: accent }} aria-hidden />
                <span className="badge-text" style={{ fontFamily: vc }}>
                    {duration}
                </span>
            </div>
        </>
    );
}

function KnowMoreButton() {
    return (
        <div className="inline-flex items-center gap-2 rounded-[8px] bg-white px-4 py-2.5 text-[#000000]">
            <span style={{ fontFamily: vc, fontWeight: 500, fontSize: 14, lineHeight: "100%", whiteSpace: "nowrap" }}>
                Know More
            </span>
            <Image
                src="/photos/schools/design/courses/arrow_outward.svg"
                alt=""
                width={20}
                height={20}
                className="shrink-0"
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
                "group relative block w-full overflow-hidden",
                "rounded-[19.17px]",
                "w-full lg:mx-auto lg:max-w-[640px]",
                "min-h-[316px] lg:min-h-[clamp(420px,42vw,604px)]",
            ].join(" ")}
            style={{ backgroundColor: p.bg }}
        >
            <div className="relative z-[2] flex h-full min-h-[316px] w-full flex-col gap-4 p-[20px] lg:p-[20px] xl:p-[30px]">
                <ExploreBadge mode={p.badge.mode} duration={p.badge.duration} accent={p.bg} />

                <div
                    className={[
                        "flex w-full flex-col",
                        p.cardBodyClassName ?? "gap-3",
                    ].join(" ")}
                >
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
                    </div>

                    <div className="pt-2" style={{ width: "max-content" }}>
                        <KnowMoreButton />
                    </div>
                </div>
            </div>

            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.10), rgba(0,0,0,0.10))" }}
                aria-hidden
            />

            {!p.hideImage && p.imageSrc ? (
                <div
                    className={[p.imageWrapClassName, "relative"].filter(Boolean).join(" ")}
                    style={p.imageWrapStyle}
                    aria-hidden
                >
                    <Image
                        src={p.imageSrc}
                        alt={p.imageAlt ?? ""}
                        fill
                        className={p.imageObjectClassName}
                        style={p.imageStyle}
                        sizes="(max-width: 1024px) 360px, 440px"
                    />
                </div>
            ) : null}
        </Link>
    );
}

export function VideoEditingCalicutExploreProgramsSection() {
    return (
        <section className="w-full bg-white" aria-labelledby="video-calicut-explore-programs">
            <div className="mx-auto box-border w-full max-w-[1440px] px-4 pt-10 pb-4 sm:px-6 sm:pb-6 lg:px-[clamp(24px,4.17vw,60px)] lg:pt-[40px] lg:pb-6">
                <div className="flex w-full flex-col items-center gap-10 lg:gap-[60px]">
                    <div className="flex w-full max-w-[880px] flex-col items-center gap-4">
                        <h2
                            id="video-calicut-explore-programs"
                            className="m-0 text-center text-black"
                        >
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
                                Discover More Creative
                                <br />
                                Courses by HACA
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
                                Discover More Creative
                                <br />
                                Courses by HACA
                            </span>
                        </h2>
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
