"use client";

import Image from "next/image";
import { ALT } from "@/lib/image-alt-text";
import { useCallback, useRef, type CSSProperties } from "react";

import { DesignSplitArrowCta } from "./DesignSplitArrowCta";

const FONT = '"VC Nudge Trial Normal", sans-serif' as const;
const HEADING_ID = "graphic-design-calicut-students-work-heading";
const VIEW_PROJECT_ACCENT = "#8F56FF";

const FALLBACK_GRADIENT =
    "linear-gradient(135deg, rgba(143, 86, 255, 0.45) 0%, rgba(255, 146, 86, 0.35) 45%, rgba(37, 146, 255, 0.4) 100%)";

const STUDENT_WORK_PROJECTS = [
    { imageSrc: "/photos/schools/design/program 1 photo.webp" },
    { imageSrc: "/photos/schools/design/program 2 photo.webp" },
    { imageSrc: "/photos/schools/design/program 3 photo.webp" },
    { imageSrc: "/photos/schools/design/program 4 photo.webp" },
    { imageSrc: "/photos/schools/design/program 5 photo.webp" },
] as const;

const TAG_BASE: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "26.867450714111328px",
    minHeight: "26.867450714111328px",
    padding: "4.93px",
    borderRadius: "14.8px",
    fontFamily: FONT,
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "100%",
    textTransform: "capitalize",
    color: "#FFFEFE",
    boxSizing: "border-box",
};

/** Same card as {@link DesignStudentProjectsSection} `StudentProjectCard`. */
function StudentProjectCard({ imageSrc }: { imageSrc: string }) {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing";

    const tagBillboard: CSSProperties = { ...TAG_BASE, backgroundColor: "#FF5659", minWidth: "60.86745071411133px" };
    const tagBranding: CSSProperties = { ...TAG_BASE, backgroundColor: "#8F56FF" };
    const tagVideo: CSSProperties = { ...TAG_BASE, backgroundColor: "#FF5C00", minWidth: "60.86745071411133px" };

    return (
        <article className="flex w-full max-w-[459.55078125px] flex-col overflow-hidden rounded-none border-none bg-transparent gap-[12px] lg:gap-0">
            <div
                className="
                    relative shrink-0 overflow-hidden rounded-none
                    h-[165.3045654296875px] w-[278.515625px]
                    lg:h-[272.7525329589844px] lg:w-[459.55078125px]
                "
                style={{ background: FALLBACK_GRADIENT }}
            >
                <Image
                    src={imageSrc}
                    alt={ALT.studentPortfolio}
                    fill
                    className="relative z-[1] object-cover"
                    sizes="(max-width: 1023px) 279px, 460px"
                />
            </div>

            <div className="flex min-h-[119.69513702392578px] w-full flex-col justify-between gap-[7.89px] px-0 pt-0 lg:min-h-0 lg:gap-[10.83px] lg:px-0 lg:pt-[8px]">
                <div className="mx-0 flex w-full max-w-[335px] flex-col gap-[7.89px] lg:max-w-[390px] lg:gap-[10.83px]">
                    <div
                        className="flex w-full max-w-[335px] flex-col gap-[4.93px] lg:max-w-[390px] lg:min-h-[75.76805114746094px] lg:gap-[6.77px]"
                        style={{ minHeight: "84.93372344970703px" }}
                    >
                        <h3
                            className="m-0 text-[20px] leading-[115%] text-black lg:min-h-[50px] lg:text-[22px]"
                            style={{ fontFamily: FONT, fontWeight: 500, letterSpacing: "0%", minHeight: "46px" }}
                        >
                            The Strategy Behind <br /> Billboard Designs
                        </h3>
                        <p
                            className="m-0 max-w-[393px] text-[14px] leading-[120%] text-black lg:text-[16px]"
                            style={{ fontFamily: FONT, fontWeight: 400, letterSpacing: "0%" }}
                        >
                            {description}
                        </p>
                    </div>

                    <div className="flex min-h-[26.867450714111328px] w-full max-w-[335px] shrink-0 flex-row flex-nowrap items-center gap-[3px] lg:min-h-[30.536104202270508px] lg:w-[239.1444091796875px] lg:max-w-none lg:gap-[6.77px]">
                        <span style={tagBillboard}>Billboard</span>
                        <span style={tagBranding}>Logo &amp; Branding</span>
                        <span style={tagVideo}>Video</span>
                    </div>
                </div>
            </div>
        </article>
    );
}

function ViewProjectCta({ mobile }: { mobile: boolean }) {
    const gapPx = mobile ? 4.4 : 5.56;
    const pillW = mobile ? 258.8333435058594 : 277;
    const pillH = mobile ? 50.19047546386719 : 54;
    const bw = mobile ? 0.88 : 1.11;

    return (
        <DesignSplitArrowCta
            href="/design-school/projects"
            accent={VIEW_PROJECT_ACCENT}
            label="View Project"
            ariaLabel="View Project"
            fontFamily={FONT}
            arrowPreset={mobile ? "mobile36" : "desktop"}
            wrapperStyle={{
                width: mobile ? 258.8333435058594 : 304.2221984863281,
                height: mobile ? 50.19047546386719 : 60.5555534362793,
            }}
            dims={{
                gapPx,
                pillWidth: pillW,
                pillHeight: pillH,
                borderWidth: bw,
                radiusPx: 50,
                padX: mobile ? 26.43 : 33.33,
                padY: mobile ? 14.1 : 17.78,
                fontSizePx: mobile ? 16 : 17.78,
                circlePx: mobile ? 47.5714 : 60,
                arrowSvgPx: mobile ? 26 : 33.33,
            }}
        />
    );
}

export function GraphicDesigningCalicutStudentsWorkSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });

    const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== "mouse" || e.button !== 0) return;
        const el = scrollRef.current;
        if (!el) return;
        dragRef.current = { active: true, startX: e.clientX, scrollLeft: el.scrollLeft };
        el.setPointerCapture(e.pointerId);
    }, []);

    const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        const el = scrollRef.current;
        const d = dragRef.current;
        if (!el || !d.active) return;
        el.scrollLeft = d.scrollLeft - (e.clientX - d.startX);
    }, []);

    const endDrag = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        const el = scrollRef.current;
        dragRef.current.active = false;
        if (el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    }, []);

    return (
        <section className="w-full bg-white" aria-labelledby={HEADING_ID}>
            <style>{`
                .gd-calicut-students-work-scroll {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .gd-calicut-students-work-scroll::-webkit-scrollbar {
                    display: none;
                    width: 0;
                    height: 0;
                }
            `}</style>

            <div
                className="
                    mx-auto box-border flex w-full max-w-[1440px] flex-col
                    gap-[30px] px-4 pb-[30px] pt-[30px]
                    lg:gap-[60px] lg:px-[60px] lg:pb-[80px] lg:pt-[60px]
                "
            >
                <div className="flex w-full max-w-[334px] flex-col gap-5 lg:max-w-[798px] lg:gap-[30px]">
                    <div className="flex w-full flex-col gap-[10px]">
                        <h2 id={HEADING_ID} className="m-0 text-black">
                            <span
                                className="lg:hidden"
                                style={{
                                    fontFamily: FONT,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "35px",
                                    lineHeight: "120%",
                                    letterSpacing: 0,
                                }}
                            >
                                Here&apos;s a Look at
                                <br />
                                Our Students&apos; Work
                            </span>
                            <span
                                className="hidden lg:inline"
                                style={{
                                    fontFamily: FONT,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "45px",
                                    lineHeight: "120%",
                                    letterSpacing: 0,
                                }}
                            >
                                Here&apos;s a Look at
                                <br />
                                Our Students&apos; Work
                            </span>
                        </h2>
                        <p className="m-0 text-[#000000B2]">
                            <span
                                className="lg:hidden"
                                style={{
                                    fontFamily: FONT,
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontSize: "14px",
                                    lineHeight: "120%",
                                    letterSpacing: 0,
                                }}
                            >
                                Everything you see here is designed by our students as part of their learning journey.
                            </span>
                            <span
                                className="hidden lg:inline"
                                style={{
                                    fontFamily: FONT,
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    fontSize: "20px",
                                    lineHeight: "120%",
                                    letterSpacing: 0,
                                }}
                            >
                                Everything you see here is designed by our students as part of their learning journey.
                            </span>
                        </p>
                    </div>

                    <div className="lg:hidden">
                        <ViewProjectCta mobile />
                    </div>
                    <div className="hidden lg:block">
                        <ViewProjectCta mobile={false} />
                    </div>
                </div>

                <div className="w-screen max-w-[100vw] min-w-0 [margin-inline:calc(50%-50vw)]">
                    <div
                        ref={scrollRef}
                        className="gd-calicut-students-work-scroll w-full min-w-0 cursor-grab overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth active:cursor-grabbing"
                        style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
                        aria-label="Student project work samples — scroll horizontally"
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={endDrag}
                        onPointerCancel={endDrag}
                    >
                        <div
                            className="
                                flex w-max flex-row flex-nowrap items-stretch
                                gap-[24.24px] pl-4 pr-4
                                lg:gap-10 lg:pl-[60px] lg:pr-[60px]
                            "
                        >
                            {STUDENT_WORK_PROJECTS.map((project) => (
                                <div
                                    key={project.imageSrc}
                                    className="box-border shrink-0 w-[278.515625px] lg:w-[459.55078125px]"
                                >
                                    <StudentProjectCard imageSrc={project.imageSrc} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
