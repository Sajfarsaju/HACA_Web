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
    imageSrc?: string;
    imageAlt?: string;
    hideImage?: boolean;
    imageWrapClassName: string;
    imageWrapStyle?: React.CSSProperties;
    imageObjectClassName: string;
    imageStyle?: React.CSSProperties;
    contentWrapClassName: string;
    cardBodyClassName?: string;
    buttonWrapClassName?: string;
    titleMaxWidthClassName?: string;
    descriptionMaxWidthClassName?: string;
    href: string;
    // Mobile positioning (Figma values)
    mobileImgW: number;
    mobileImgH: number;
    mobileImgTop: number;
    mobileImgLeft: number;
    mobileContentTop: number;
    mobileContentLeft: number;
    mobileContentW: number;
    mobileContentGap: number;
    mobileImgWrapStyle?: React.CSSProperties;
    mobileHeadingW?: number;
    mobileParagraphW?: number;
};

const IMG_1309 = `/photos/schools/design/09dc2ab4736f03590e12a5a8084a79c961b2f925 (1).webp`;

/** Four program cards; creative-design uses Figma image placement (IMG_1309 on the right). */
const PROGRAMS: ProgramCard[] = [
    {
        id: "creative-design",
        bg: "#FF5C00",
        badge: { mode: "Online", duration: "6 Months" },
        title: "Creative Design and\nCommunication",
        description:
            "This offline flagship CDC course supports you in learning graphic design, video editing, UI/UX, and more, while also offering opportunities to work on real projects through a one-month internship opportunity.",
        button: { bg: "#29C76B", fg: "#FFFFFF" },
        imageSrc: IMG_1309,
        imageAlt: "Creative Design and Communication",
        imageWrapClassName: [
            "pointer-events-none absolute z-[1] select-none opacity-100",
            "top-[clamp(96px,30.2%,182.68px)] left-[clamp(16px,34.53%,221px)]",
            "h-auto w-[min(400px,62.5%)] aspect-[400/405.39]",
            "lg:top-[182.68px] lg:left-[221px] lg:h-[405.3878173828125px] lg:w-[400px] lg:aspect-auto",
        ].join(" "),
        imageObjectClassName: "h-full w-full object-contain object-bottom",
        contentWrapClassName: "w-full max-w-[min(380px,70%)] text-left",
        cardBodyClassName: "flex min-h-0 flex-1 flex-col gap-4",
        titleMaxWidthClassName: "max-w-[340px] lg:max-w-[380px]",
        descriptionMaxWidthClassName: "max-w-[280px]",
        href: "/design-school/courses/creative-design",
        mobileImgW: 250,
        mobileImgH: 260.36,
        mobileImgTop: 115,
        mobileImgLeft: 155,
        mobileContentTop: 49.73,
        mobileContentLeft: 15.7,
        mobileContentW: 170.1171875,
        mobileContentGap: 10.47,
        mobileHeadingW: 280,
    },
    {
        id: "ai-graphic",
        bg: "#8F56FF",
        badge: { mode: "Online", duration: "3 Months" },
        title: "AI Integrated\nGraphic Design",
        description:
            "Discover the fundamentals of contemporary graphic design in this online course, perfect for beginners and those looking to switch careers, all from the comfort of your home.",
        button: { bg: "#FF5C00", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/60b47d2800c7e3eca0f8d38692662a973f3b73b0.webp",
        imageAlt: "AI Integrated Graphic Design",
        imageWrapClassName:
            "absolute bottom-[-90px] left-[-48px] z-[1] w-[264px] h-[300px] lg:bottom-[-150px] lg:left-[-80px] lg:w-[440px] lg:h-[500px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-left-bottom",
        contentWrapClassName: "ml-auto w-full max-w-[192px] lg:max-w-[320px] text-left",
        buttonWrapClassName: "ml-auto w-full max-w-[192px] lg:max-w-[320px]",
        titleMaxWidthClassName: "max-w-[168px] lg:max-w-[280px]",
        descriptionMaxWidthClassName: "max-w-[168px] lg:max-w-[280px]",
        href: "/design-school/courses/ai-graphic-design",
        mobileImgW: 240,
        mobileImgH: 353.705810546875,
        mobileImgTop: 123.08,
        mobileImgLeft: -41.86,
        mobileContentTop: 37.08,
        mobileContentLeft: 141,
        mobileContentW: 188,
        mobileContentGap: 10,
    },
    {
        id: "uiux",
        bg: "#29C76B",
        badge: { mode: "Online", duration: "3 Months" },
        title: "UI/UX Design +\nAI Program",
        description:
            "Learn how to create intuitive digital experiences by exploring design thinking, wireframing, and prototyping, perfect for aspiring app and web designers.",
        button: { bg: "#2592FF", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/efaa9dd8679f63c251e45143e7c74c5afcb821ae.webp",
        imageAlt: "UI/UX Design + AI Program",
        imageWrapClassName:
            "absolute bottom-[-132px] right-[-220px] z-[1] w-[372px] h-[396px] lg:bottom-[-220px] lg:right-[-320px] lg:w-[620px] lg:h-[660px] pointer-events-none select-none",
        imageWrapStyle: { transform: "scaleX(-1)" },
        imageObjectClassName: "object-contain object-right-bottom",
        contentWrapClassName: "w-full max-w-[198px] lg:max-w-[330px] text-left",
        titleMaxWidthClassName: "max-w-[180px] lg:max-w-[300px]",
        descriptionMaxWidthClassName: "max-w-[186px] lg:max-w-[310px]",
        href: "/design-school/courses/program-4",
        mobileImgW: 212,
        mobileImgH: 404.71,
        mobileImgTop: 78,
        mobileImgLeft: 185,
        mobileContentTop: 56.73,
        mobileContentLeft: 11.7,
        mobileContentW: 170.1171875,
        mobileContentGap: 10,
    },
    {
        id: "branding",
        bg: "#FF5659",
        badge: { mode: "Online", duration: "4 Weeks" },
        title: "Branding and\nIdentity Design",
        description:
            "Quickly master brand storytelling, logo creation, and visual identity development in this focused online bootcamp, ideal for designers aiming to specialise in branding.",
        button: { bg: "#8F56FF", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/4bb434c3142cc5e13672d6cf063a4a96bdff02c0.webp",
        imageAlt: "Branding and Identity Design",
        imageWrapClassName:
            "absolute top-0 right-[-60px] z-[1] w-[348px] h-[258px] lg:right-[-100px] lg:w-[580px] lg:h-[430px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-right-top",
        cardBodyClassName: "flex min-h-0 flex-1 flex-col gap-3",
        contentWrapClassName: "mt-auto w-full max-w-[198px] lg:max-w-[330px] text-left",
        titleMaxWidthClassName: "max-w-[192px] lg:max-w-[320px]",
        descriptionMaxWidthClassName: "max-w-[192px] lg:max-w-[320px]",
        href: "/design-school/courses/program-3",
        mobileImgW: 366.40625,
        mobileImgH: 176.0089569091797,
        mobileImgTop: -17.06,
        mobileImgLeft: 101,
        mobileContentTop: 159.34,
        mobileContentLeft: 15.7,
        mobileContentW: 230,
        mobileContentGap: 10,
    },
];

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

// Mobile badge pill — Figma: 114.22×26.47px, top:12.96, left:13.49
function MobileBadgePill({ mode, duration, accent }: { mode: string; duration: string; accent: string }) {
    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                width: 114.21875,
                height: 26.46875,
                paddingTop: 5.23,
                paddingBottom: 5.23,
                paddingLeft: 8.38,
                paddingRight: 8.38,
                gap: 5.23,
                borderRadius: 63.34,
                border: `0.52px solid ${accent}`,
                backgroundColor: "#ffffff",
                whiteSpace: "nowrap",
                flexShrink: 0,
                boxSizing: "border-box",
            }}
        >
            <span style={{ fontFamily: vc, fontWeight: 500, fontSize: 12, lineHeight: "100%", letterSpacing: 0, color: "#000000", flex: 1, textAlign: "center" }}>{mode}</span>
            <span style={{ width: 0, height: 10, borderLeft: `0.52px solid ${accent}`, flexShrink: 0, alignSelf: "center" }} aria-hidden />
            <span style={{ fontFamily: vc, fontWeight: 500, fontSize: 12, lineHeight: "100%", letterSpacing: 0, color: "#000000", flex: 1, textAlign: "center" }}>{duration}</span>
        </div>
    );
}

// Mobile enquire button — Figma: 126×40, radius 26.82px, padding 10px, gap 6px
function MobileEnquireButton({ bg, fg }: { bg: string; fg: string }) {
    return (
        <div
            className="inline-flex items-center"
            style={{
                width: 126,
                height: 40,
                borderRadius: 26.82,
                padding: 10,
                gap: 6,
                backgroundColor: bg,
                color: fg,
                boxSizing: "border-box",
                flexShrink: 0,
            }}
        >
            <span
                style={{
                    fontFamily: vc,
                    fontWeight: 500,
                    fontSize: 12,
                    lineHeight: "100%",
                    whiteSpace: "nowrap",
                    flex: 1,
                }}
            >
                Enquire Now
            </span>
            <Image
                src="/photos/schools/design/arrow_cool_down.svg"
                alt=""
                width={14}
                height={14}
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
                "min-h-[340px] lg:min-h-[clamp(420px,42vw,604px)]",
            ].join(" ")}
            style={{ backgroundColor: p.bg }}
        >
            {/* ── Mobile layout (hidden on lg+) ─────────────────────────────── */}

            {/* Mobile badge pill */}
            <div className="lg:hidden absolute pointer-events-none" style={{ top: 12.96, left: 13.49, zIndex: 3 }}>
                <MobileBadgePill mode={p.badge.mode} duration={p.badge.duration} accent={p.bg} />
            </div>

            {/* Mobile image */}
            <div
                className="lg:hidden absolute pointer-events-none select-none"
                style={{
                    top: p.mobileImgTop,
                    left: p.mobileImgLeft,
                    width: p.mobileImgW,
                    height: p.mobileImgH,
                    zIndex: 1,
                    ...p.imageWrapStyle,
                    ...p.mobileImgWrapStyle,
                }}
                aria-hidden
            >
                <Image
                    src={p.imageSrc ?? ""}
                    alt=""
                    fill
                    className={p.imageObjectClassName}
                    sizes="240px"
                />
            </div>

            {/* Mobile content: heading + paragraph + button */}
            <div
                className="lg:hidden absolute flex flex-col"
                style={{
                    top: p.mobileContentTop,
                    left: p.mobileContentLeft,
                    width: p.mobileContentW,
                    gap: p.mobileContentGap,
                    zIndex: 2,
                }}
            >
                <h3
                    style={{
                        margin: 0,
                        fontFamily: vc,
                        fontWeight: 500,
                        fontStyle: "normal",
                        fontSize: 22,
                        lineHeight: "110%",
                        letterSpacing: "-0.02em",
                        color: "#ffffff",
                        whiteSpace: "pre-line",
                        ...(p.mobileHeadingW ? { width: p.mobileHeadingW } : {}),
                    }}
                >
                    {titleLines.join("\n")}
                </h3>

                <p
                    style={{
                        margin: 0,
                        fontFamily: vc,
                        fontWeight: 400,
                        fontStyle: "normal",
                        fontSize: 12,
                        lineHeight: "120%",
                        letterSpacing: "-0.03em",
                        color: "rgba(255,255,255,0.85)",
                        ...(p.mobileParagraphW ? { width: p.mobileParagraphW } : {}),
                    }}
                >
                    {p.description}
                </p>

                <MobileEnquireButton bg={p.button.bg} fg={p.button.fg} />
            </div>

            {/* ── Desktop layout (hidden below lg) — unchanged ──────────────── */}

            <div className="hidden lg:flex relative z-[2] flex-1 w-full flex-col gap-4 p-[20px] xl:p-[30px]">
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

                    <div className={[p.buttonWrapClassName ?? "w-max", "pt-2"].filter(Boolean).join(" ")}>
                        <KnowMoreButton />
                    </div>
                </div>
            </div>

            {/* Hover overlay (both breakpoints) */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.10), rgba(0,0,0,0.10))" }}
                aria-hidden
            />

            {/* Desktop image (hidden below lg) */}
            {!p.hideImage && p.imageSrc ? (
                <div
                    className={["hidden lg:block", p.imageWrapClassName].join(" ")}
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
