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
    // Mobile content positioning (Figma values) — required for all cards
    mobileContentTop: number;
    mobileContentLeft: number;
    mobileContentW: number;
    mobileContentGap: number;
    // Per-element width overrides within the mobile content container (optional)
    mobileHeadingW?: number;
    mobileParagraphW?: number;
    // Mobile image positioning — optional. When absent the original imageWrapClassName
    // handles mobile; when present a separate absolutely-positioned image is used on mobile.
    mobileImgW?: number;
    mobileImgH?: number;
    mobileImgTop?: number;
    mobileImgLeft?: number;
    mobileImgStyle?: React.CSSProperties;
};

const PROGRAMS: ProgramCard[] = [
    {
        id: "creative-design",
        bg: "#FF5C00",
        badge: { mode: "Online", duration: "6 Months" },
        title: "Creative Design and\nCommunication",
        description:
            "This offline flagship course helps you learn design and also gives you a chance to work on real projects through internships.",
        button: { bg: "#8F56FF", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/seo/09dc2ab4736f03590e12a5a8084a79c961b2f925.webp",
        imageAlt: "Creative Design and Communication",
        imageWrapClassName:
            "absolute bottom-[-48px] right-[-24px] z-[1] w-[252px] h-[300px] lg:bottom-[-80px] lg:right-[-40px] lg:w-[420px] lg:h-[500px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-right-bottom",
        contentWrapClassName: "w-full max-w-[192px] lg:max-w-[320px] text-left",
        titleMaxWidthClassName: "max-w-[176px] lg:max-w-[294px]",
        descriptionMaxWidthClassName: "max-w-[176px] lg:max-w-[294px]",
        href: "/design-school/courses/program-1",
        // Mobile image: keep original imageWrapClassName (no mobileImg* fields)
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
            "Learn the core tools and techniques of modern graphic design, perfect for beginners and career-switchers who prefer learning from home.",
        button: { bg: "#FF5C00", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/60b47d2800c7e3eca0f8d38692662a973f3b73b0.webp",
        imageAlt: "AI Integrated Graphic Design",
        imageWrapClassName:
            "absolute bottom-[-90px] left-[-48px] z-[1] w-[264px] h-[300px] lg:bottom-[-150px] lg:left-[-80px] lg:w-[440px] lg:h-[500px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-left-bottom",
        contentWrapClassName: "ml-auto w-full max-w-[192px] lg:max-w-[320px] text-left",
        titleMaxWidthClassName: "max-w-[165px] lg:max-w-[277px]",
        descriptionMaxWidthClassName: "max-w-[165px] lg:max-w-[277px]",
        href: "/design-school/courses/ai-graphic-design",
        // Mobile image: keep original imageWrapClassName (no mobileImg* fields)
        mobileContentTop: 37.08,
        mobileContentLeft: 141,
        mobileContentW: 188,
        mobileContentGap: 10,
        mobileHeadingW: 210,
    },
    {
        id: "video-edit",
        bg: "#2592FF",
        badge: { mode: "Online", duration: "3 Months" },
        title: "AI Integrated\nVideo Editing\nMastery",
        description:
            "Editing is a form of storytelling. This module explores how visuals, audio, and cuts combine to sustain attention and convey meaning.",
        button: { bg: "#29C76B", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/72a77144b3092dffcf6470686297c0e74e448b83.webp",
        imageAlt: "AI Integrated Video Editing Mastery",
        imageWrapClassName:
            "absolute bottom-[-60px] left-[-60px] z-[1] w-[318px] h-[336px] lg:bottom-[-100px] lg:left-[-100px] lg:w-[530px] lg:h-[560px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-left-bottom",
        contentWrapClassName: "mt-auto ml-auto w-full max-w-[152px] lg:max-w-[258px] text-left",
        titleMaxWidthClassName: "max-w-[145px] lg:max-w-[248px]",
        descriptionMaxWidthClassName: "max-w-[145px] lg:max-w-[248px]",
        href: "/design-school/courses/program-5",
        mobileImgW: 216.703125,
        mobileImgH: 280.9114685058594,
        mobileImgTop: 67.19,
        mobileImgLeft: -55.02,
        mobileContentTop: 120.55,
        mobileContentLeft: 160.37,
        mobileContentW: 170.1171875,
        mobileContentGap: 10.47,
    },
    {
        id: "branding",
        bg: "#FF5659",
        badge: { mode: "Online", duration: "4 Weeks" },
        title: "Branding and\nIdentity Design",
        description:
            "Master the art of brand storytelling, logo design, and visual identity, ideal for designers who want to specialise in branding fast.",
        button: { bg: "#8F56FF", fg: "#FFFFFF" },
        imageSrc: "/photos/schools/design/4bb434c3142cc5e13672d6cf063a4a96bdff02c0.webp",
        imageAlt: "Branding and Identity Design",
        imageWrapClassName:
            "absolute top-0 right-[-60px] z-[1] w-[348px] h-[258px] lg:right-[-100px] lg:w-[580px] lg:h-[430px] pointer-events-none select-none",
        imageObjectClassName: "object-contain object-right-top",
        contentWrapClassName: "mt-auto w-full max-w-[194px] lg:max-w-[330px] text-left",
        titleMaxWidthClassName: "max-w-[188px] lg:max-w-[320px]",
        descriptionMaxWidthClassName: "max-w-[188px] lg:max-w-[320px]",
        href: "/design-school/courses/program-3",
        mobileImgW: 366.40625,
        mobileImgH: 176.0089569091797,
        mobileImgTop: -17.06,
        mobileImgLeft: 101,
        mobileContentTop: 159.34,
        mobileContentLeft: 15.7,
        mobileContentW: 170.1171875,
        mobileContentGap: 10,
        mobileParagraphW: 230,
    },
];

const BADGE_CSS = `
.uiux-explore-badge-pill {
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
.uiux-explore-badge-pill .badge-text {
    font-weight: 500;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0;
    color: #000000;
    white-space: nowrap;
}
.uiux-explore-badge-pill .badge-divider {
    flex-shrink: 0;
    width: 0;
    height: 12px;
    border-left: 1.65px solid;
    align-self: center;
}
@media (min-width: 1024px) {
    .uiux-explore-badge-pill {
        height: 38px;
        padding: 8px 12px;
        gap: 7px;
        border-radius: 80px;
        border-width: 1px;
        min-width: unset;
    }
    .uiux-explore-badge-pill .badge-text { font-size: 14px; }
    .uiux-explore-badge-pill .badge-divider { height: 12px; border-left-width: 2px; }
}
@media (min-width: 1280px) {
    .uiux-explore-badge-pill {
        height: 45px;
        padding: 10px 16px;
        gap: 10px;
        border-radius: 121px;
        border-width: 1px;
        min-width: 191px;
    }
    .uiux-explore-badge-pill .badge-text { font-size: 18px; }
    .uiux-explore-badge-pill .badge-divider { height: 13.1px; border-left-width: 2.91px; }
}
`;

function ExploreBadge({ mode, duration, accent }: { mode: string; duration: string; accent: string }) {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: BADGE_CSS }} />
            <div className="uiux-explore-badge-pill" style={{ borderColor: accent }}>
                <span className="badge-text" style={{ fontFamily: vc }}>{mode}</span>
                <span className="badge-divider" style={{ borderColor: accent }} aria-hidden />
                <span className="badge-text" style={{ fontFamily: vc }}>{duration}</span>
            </div>
        </>
    );
}

// Mobile badge pill — Figma: 114.22×26.47, padding 5.23px/8.38px, gap 5.23px, top:12.96, left:13.49
function MobileBadgePill({ mode, duration, accent }: { mode: string; duration: string; accent: string }) {
    return (
        <div style={{
            display: "inline-flex",
            alignItems: "center",
            boxSizing: "border-box",
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
        }}>
            <span style={{ fontFamily: '"Switzer", sans-serif', fontWeight: 500, fontSize: 12, lineHeight: "100%", letterSpacing: 0, color: "#000000", flex: 1, textAlign: "center" }}>{mode}</span>
            <span style={{ width: 0, height: 10, borderLeft: `0.52px solid ${accent}`, flexShrink: 0, alignSelf: "center" }} aria-hidden />
            <span style={{ fontFamily: '"Switzer", sans-serif', fontWeight: 500, fontSize: 12, lineHeight: "100%", letterSpacing: 0, color: "#000000", flex: 1, textAlign: "center" }}>{duration}</span>
        </div>
    );
}

// Desktop button (unchanged)
function KnowMoreButton({ bg, fg }: { bg: string; fg: string }) {
    return (
        <div className="inline-flex items-center rounded-[999px] pl-4 pr-2 py-2" style={{ backgroundColor: bg, color: fg }}>
            <span style={{ fontFamily: vc, fontWeight: 500, fontSize: 14, lineHeight: "100%", whiteSpace: "nowrap" }}>Know More</span>
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

// Mobile button — Figma: 126×40, radius 26.82px, padding 10px, gap 6px
function MobileKnowMoreButton({ bg, fg }: { bg: string; fg: string }) {
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
                Know More
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
    const hasSpecificMobileImg = p.mobileImgTop !== undefined;

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
            {/* ── Image ─────────────────────────────────────────────────────────
                Cards with mobileImgTop: separate mobile (lg:hidden) + desktop (hidden lg:block).
                Cards without: single element using imageWrapClassName for both breakpoints. */}

            {hasSpecificMobileImg ? (
                <>
                    {/* Mobile image at Figma-specified position */}
                    <div
                        className="lg:hidden absolute pointer-events-none select-none"
                        style={{
                            top: p.mobileImgTop,
                            left: p.mobileImgLeft,
                            width: p.mobileImgW,
                            height: p.mobileImgH,
                            zIndex: 1,
                        }}
                        aria-hidden
                    >
                        <Image
                            src={p.imageSrc}
                            alt=""
                            fill
                            className={p.imageObjectClassName}
                            style={p.mobileImgStyle ?? p.imageStyle}
                            sizes="240px"
                        />
                    </div>
                    {/* Desktop image */}
                    <div className={["hidden lg:block", p.imageWrapClassName].join(" ")} aria-hidden>
                        <Image
                            src={p.imageSrc}
                            alt={p.imageAlt}
                            fill
                            className={p.imageObjectClassName}
                            style={p.imageStyle}
                            sizes="(max-width: 1024px) 360px, 440px"
                        />
                    </div>
                </>
            ) : (
                /* Original imageWrapClassName handles both mobile and desktop */
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
            )}

            {/* ── Mobile badge — Figma position: top:12.96, left:13.49 ─────────── */}
            <div
                className="lg:hidden absolute pointer-events-none"
                style={{ top: 12.96, left: 13.49, zIndex: 3 }}
            >
                <MobileBadgePill mode={p.badge.mode} duration={p.badge.duration} accent={p.bg} />
            </div>

            {/* ── Mobile content: heading + paragraph + button (hidden on lg+) ─ */}
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
                        ...(p.mobileHeadingW !== undefined ? { width: p.mobileHeadingW } : {}),
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
                        ...(p.mobileParagraphW !== undefined ? { width: p.mobileParagraphW } : {}),
                    }}
                >
                    {p.description}
                </p>

                <MobileKnowMoreButton bg={p.button.bg} fg={p.button.fg} />
            </div>

            {/* ── Desktop content (hidden below lg) — unchanged ─────────────── */}
            <div className="hidden lg:flex relative z-[2] flex-1 w-full flex-col gap-4 p-[20px] xl:p-[30px]">
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
                        <KnowMoreButton bg={p.button.bg} fg={p.button.fg} />
                    </div>
                </div>
            </div>

            {/* Hover overlay (both breakpoints) */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.10), rgba(0,0,0,0.10))" }}
                aria-hidden
            />
        </Link>
    );
}

export function UiUxDesignCalicutExploreProgramsSection() {
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
                                Explore More Creative Paths
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
                                Explore More Creative Paths
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
                            At Design School by HACA, we offer multiple creative programs designed for different goals, career paths, and learning styles.
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
