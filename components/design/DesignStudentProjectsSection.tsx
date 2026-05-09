"use client";

import Image from "next/image";
import React, { type CSSProperties } from "react";
import { DesignCulturePhotosSection } from "./DesignCulturePhotosSection";
import { DesignSplitArrowCta } from "./DesignSplitArrowCta";
import { DesignStoriesInsightsSection } from "./DesignStoriesInsightsSection";

/** Gradient shown behind / when image is absent (fallback). */
const FALLBACK_GRADIENT =
    "linear-gradient(135deg, rgba(143, 86, 255, 0.45) 0%, rgba(255, 146, 86, 0.35) 45%, rgba(37, 146, 255, 0.4) 100%)";

type ProjectCardData = {
    imageSrc: string;
};

const STUDENT_PROJECTS: ProjectCardData[] = [
    { imageSrc: "/photos/schools/design/program 1 photo.webp" },
    { imageSrc: "/photos/schools/design/program 2 photo.webp" },
    { imageSrc: "/photos/schools/design/program 3 photo.webp" },
    { imageSrc: "/photos/schools/design/program 4 photo.webp" },
];

export function DesignStudentProjectsSection() {
    const font = '"VC Nudge Trial Normal", sans-serif';
    const serif = '"IvyPresto Display", serif';

    return (
        <>
            <section
                className="w-full bg-[#FCFCFC] px-4 lg:px-[clamp(20px,4.17vw,60px)]"
                style={{
                    paddingTop: "clamp(30px, 4.17vw, 60px)",
                    paddingBottom: "clamp(30px, 4.17vw, 60px)",
                }}
            >
                <div className="w-full max-w-[1320px] mx-auto flex flex-col gap-[20px] lg:flex-row lg:gap-[39px]">
                    {/* Left block */}
                    <div className="w-full lg:w-[324px] lg:shrink-0 flex flex-col items-start">
                        <div className="w-[min(336px,100%)] max-lg:h-auto max-lg:aspect-[230/310] max-lg:pl-0 max-lg:pr-[17.62px] max-lg:pt-[32px] lg:aspect-auto lg:w-[324px] lg:h-[487px] lg:px-[17px] lg:pt-[22px] lg:pb-[32px] lg:-ml-[17px]">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/photos/schools/design/Frame 2131331224.svg"
                                    alt=""
                                    fill
                                    className="object-contain object-left lg:object-center"
                                    priority={false}
                                />
                            </div>
                        </div>

                        {/* Desktop CTA (inside left block) */}
                        <div className="hidden lg:flex flex-col gap-[14px] mt-[0px] w-[277px]">
                            <p
                                className="m-0 text-[#313131]"
                                style={{ fontFamily: font, fontWeight: 500, fontSize: "16px", lineHeight: "100%" }}
                            >
                                See more work <br />
                                from our students
                            </p>
                            <JoinClubLikeButton label="View more Projects" />
                        </div>
                    </div>

                    {/* Right cards */}
                    <div className="w-full flex-1 min-w-0 flex flex-col gap-[30px] lg:gap-[50px]">
                        <div className="grid grid-cols-1 gap-[0px] lg:grid-cols-2 lg:gap-[50px] justify-items-center lg:justify-items-start">
                            {STUDENT_PROJECTS.map((project, i) => (
                                <React.Fragment key={`${project.imageSrc}-${i}`}>
                                    <StudentProjectCard imageSrc={project.imageSrc} font={font} />
                                    {i < STUDENT_PROJECTS.length - 1 ? (
                                        <div
                                            role="presentation"
                                            aria-hidden
                                            className="
                                                col-span-full mx-auto my-[30px]
                                                box-border h-0 w-full max-w-[459.55078125px] shrink-0
                                                border-0 border-t border-solid border-black
                                                lg:hidden
                                            "
                                        />
                                    ) : null}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Mobile CTA (bottom of section) */}
                        <div className="lg:hidden w-full flex flex-col items-center gap-[14px]">
                            <p
                                className="m-0 text-[#313131] text-left w-full"
                                style={{ fontFamily: font, fontWeight: 500, fontSize: "16px", lineHeight: "100%" }}
                            >
                                See more work <br />
                                from our students
                            </p>
                            <JoinClubLikeButton label="View moreProjects" isMobile />
                        </div>
                    </div>
                </div>
            </section>

            <DesignCulturePhotosSection font={font} serif={serif} />
            <DesignStoriesInsightsSection font={font} serif={serif} />
        </>
    );
}

const TAG_BASE: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "26.867450714111328px",
    minHeight: "26.867450714111328px",
    padding: "4.93px",
    borderRadius: "14.8px",
    fontFamily: '"VC Nudge Trial Normal", sans-serif',
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "100%",
    textTransform: "capitalize",
    color: "#FFFEFE",
    boxSizing: "border-box",
};

function StudentProjectCard({ imageSrc, font }: { imageSrc: string; font: string }) {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing";

    const tagBillboard: CSSProperties = {
        ...TAG_BASE,
        backgroundColor: "#FF5659",
        minWidth: "60.86745071411133px",
    };
    const tagBranding: CSSProperties = { ...TAG_BASE, backgroundColor: "#8F56FF" };
    const tagVideo: CSSProperties = {
        ...TAG_BASE,
        backgroundColor: "#FF5C00",
        minWidth: "60.86745071411133px",
    };

    return (
        <article
            className="flex h-[338.7525634765625px] w-full max-w-[459.55078125px] flex-col overflow-hidden rounded-none border-none bg-transparent gap-[12px] lg:h-auto lg:gap-0"
        >
            {/* Project photo */}
            <div
                className="relative w-full shrink-0 overflow-hidden rounded-none lg:h-[272.7525329589844px]"
                style={{ height: "198.82916259765625px", background: FALLBACK_GRADIENT }}
            >
                <Image
                    src={imageSrc}
                    alt=""
                    fill
                    className="relative z-[1] object-cover"
                    sizes="(max-width: 1024px) 335px, 460px"
                />
            </div>

            {/* Second container: gap above this block is desktop-only flex gap between photo + content; horizontal pad on lg */}
            <div className="flex min-h-[119.69513702392578px] w-full flex-1 flex-col justify-between gap-[7.89px] px-0 pt-0 lg:min-h-0 lg:flex-none lg:gap-[10.83px] lg:px-0 lg:pt-[8px]">
                <div className="mx-0 flex w-full max-w-[335px] flex-col gap-[7.89px] lg:max-w-[390px] lg:gap-[10.83px]">
                    {/* Heading + paragraph */}
                    <div
                        className="flex w-full max-w-[335px] flex-col gap-[4.93px] lg:max-w-[390px] lg:min-h-[75.76805114746094px] lg:gap-[6.77px]"
                        style={{ minHeight: "84.93372344970703px" }}
                    >
                        <h3
                            className="m-0 text-[20px] leading-[114.99999999999999%] text-black lg:min-h-[50px] lg:text-[22px]"
                            style={{ fontFamily: font, fontWeight: 500, letterSpacing: "0%", minHeight: "46px" }}
                        >
                            The Strategy Behind <br /> Billboard Designs
                        </h3>
                        <p
                            className="m-0 max-w-[393px] text-[14px] leading-[120%] text-black lg:text-[16px]"
                            style={{ fontFamily: font, fontWeight: 400, letterSpacing: "0%" }}
                        >
                            {description}
                        </p>
                    </div>

                    {/* Tag buttons: tighter gap on mobile, spec gap on desktop */}
                    <div className="flex min-h-[26.867450714111328px] w-full max-w-[335px] shrink-0 flex-row flex-nowrap items-center gap-[3px] lg:min-h-[30.536104202270508px] lg:w-[239.1444091796875px] lg:max-w-none lg:gap-[6.77px]">
                        <span style={tagBillboard}>Billboard</span>
                        <span style={tagBranding}>Logo & Branding</span>
                        <span style={tagVideo}>Video</span>
                    </div>
                </div>
            </div>

        </article>
    );
}

const VIEW_PROJECTS_ACCENT = "#8F56FF";

function JoinClubLikeButton({ label, isMobile, href = "/design-school/projects" }: { label: string; isMobile?: boolean; href?: string }) {
    const vcFont = '"VC Nudge Trial Normal", sans-serif';
    const gapPx = isMobile ? 4.4 : 5.56;
    const outerW = isMobile ? "310.8014px" : "342.56px";
    const pillW = isMobile ? 258.8333435058594 : 277;
    const pillH = isMobile ? 50.19047546386719 : 54;
    const bw = isMobile ? 0.88 : 1.11;

    return (
        <DesignSplitArrowCta
            href={href}
            accent={VIEW_PROJECTS_ACCENT}
            label={label}
            ariaLabel={label}
            fontFamily={vcFont}
            arrowPreset={isMobile ? "mobile36" : "desktop"}
            wrapperStyle={{ width: outerW, height: pillH }}
            dims={{
                gapPx,
                pillWidth: pillW,
                pillHeight: pillH,
                borderWidth: bw,
                radiusPx: 50,
                padX: isMobile ? 26.43 : 33.33,
                padY: isMobile ? 14.1 : 17.78,
                fontSizePx: isMobile ? 16 : 17.78,
                circlePx: isMobile ? 47.5714 : 60,
                arrowSvgPx: isMobile ? 26 : 33.33,
            }}
        />
    );
}

