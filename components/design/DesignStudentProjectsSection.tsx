"use client";

import Image from "next/image";
import React, { useRef, useEffect, type CSSProperties } from "react";
import { DesignCulturePhotosSection } from "./DesignCulturePhotosSection";
import { DesignSplitArrowCta } from "./DesignSplitArrowCta";
import { DesignStoriesInsightsSection } from "./DesignStoriesInsightsSection";

const FALLBACK_GRADIENT =
    "linear-gradient(135deg, rgba(143, 86, 255, 0.45) 0%, rgba(255, 146, 86, 0.35) 45%, rgba(37, 146, 255, 0.4) 100%)";

type ProjectCardData = { imageSrc: string };

const STUDENT_PROJECTS: ProjectCardData[] = [
    { imageSrc: "/photos/schools/design/program 1 photo.webp" },
    { imageSrc: "/photos/schools/design/program 2 photo.webp" },
    { imageSrc: "/photos/schools/design/program 3 photo.webp" },
    { imageSrc: "/photos/schools/design/program 4 photo.webp" },
    { imageSrc: "/photos/schools/design/program 5 photo.webp" },
    { imageSrc: "/photos/schools/design/program 1 photo.webp" },
    { imageSrc: "/photos/schools/design/program 2 photo.webp" },
    { imageSrc: "/photos/schools/design/program 3 photo.webp" },
    { imageSrc: "/photos/schools/design/program 4 photo.webp" },
    { imageSrc: "/photos/schools/design/program 5 photo.webp" },
];

export function DesignStudentProjectsSection() {
    const font = '"VC Nudge Trial Normal", sans-serif';
    const serif = '"IvyPresto Display", serif';

    const sectionRef = useRef<HTMLElement>(null);
    const rightClipRef = useRef<HTMLDivElement>(null);
    const rightInnerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const iOS =
            /iPad|iPhone|iPod/.test(navigator.userAgent) ||
            (navigator.userAgent.includes("Mac") && navigator.maxTouchPoints > 1);

        let locked = false;
        let savedY = 0;
        let cardTarget = 0;
        let cardCurrent = 0;

        const maxCard = () =>
            rightInnerRef.current && rightClipRef.current
                ? Math.max(0, rightInnerRef.current.scrollHeight - rightClipRef.current.clientHeight)
                : 0;

        // Returns true when the section is in the scroll-capture zone.
        // Direction-aware: scroll-down captures as soon as section top crosses viewport top;
        // scroll-up requires 85%+ of section to be visible (not just the first pixel).
        const inZone = (deltaY: number) => {
            if (!sectionRef.current) return false;
            const r = sectionRef.current.getBoundingClientRect();
            const vh = window.innerHeight;
            if (deltaY > 0) {
                // Scrolling down — section coming from below: lock when top crosses 0
                return r.top <= 0 && r.bottom > 0;
            } else {
                // Scrolling up — section coming from above: only lock when ≥85% visible
                return r.top >= -(vh * 0.15) && r.top <= 0 && r.bottom > 0;
            }
        };

        const lock = () => {
            if (locked) return;
            locked = true;
            savedY = window.scrollY;
            if (iOS) {
                document.body.style.position = "fixed";
                document.body.style.top = `-${savedY}px`;
                document.body.style.width = "100%";
            } else {
                document.body.style.overflow = "hidden";
            }
        };

        const unlock = () => {
            if (!locked) return;
            locked = false;
            if (iOS) {
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                window.scrollTo(0, savedY);
            } else {
                document.body.style.overflow = "";
            }
        };

        const onWheel = (e: WheelEvent) => {
            if (window.innerWidth < 1024) return;
            if (!locked && !inZone(e.deltaY)) return;

            const max = maxCard();
            if (e.deltaY > 0 && cardTarget >= max) { unlock(); return; }
            if (e.deltaY < 0 && cardTarget <= 0) { unlock(); return; }

            lock();
            e.preventDefault();
            cardTarget = Math.max(0, Math.min(max, cardTarget + e.deltaY));
        };

        let prevTouchY = 0;
        const onTouchStart = (e: TouchEvent) => { prevTouchY = e.touches[0].clientY; };
        const onTouchMove = (e: TouchEvent) => {
            if (window.innerWidth < 1024) return;
            const dy = prevTouchY - e.touches[0].clientY;
            prevTouchY = e.touches[0].clientY;
            if (!locked && !inZone(dy)) return;

            const max = maxCard();
            if (dy > 0 && cardTarget >= max) { unlock(); return; }
            if (dy < 0 && cardTarget <= 0) { unlock(); return; }

            lock();
            e.preventDefault();
            cardTarget = Math.max(0, Math.min(max, cardTarget + dy));
        };

        // Reset card position when section scrolls fully out of view (user scrolled back up past it)
        const onScroll = () => {
            if (!sectionRef.current) return;
            const r = sectionRef.current.getBoundingClientRect();
            if (r.top > window.innerHeight) cardTarget = 0;
        };

        window.addEventListener("wheel", onWheel, { passive: false });
        window.addEventListener("touchstart", onTouchStart, { passive: true });
        window.addEventListener("touchmove", onTouchMove, { passive: false });
        window.addEventListener("scroll", onScroll, { passive: true });

        // rAF loop — lerp cardCurrent toward cardTarget
        let rafId = 0;
        const tick = () => {
            cardCurrent += (cardTarget - cardCurrent) * 0.1;
            if (Math.abs(cardTarget - cardCurrent) < 0.25) cardCurrent = cardTarget;
            if (rightInnerRef.current) {
                rightInnerRef.current.style.transform = `translateY(${-cardCurrent}px)`;
            }
            rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(rafId);
            unlock();
        };
    }, []);

    return (
        <>
            {/* ── Desktop: 100vh section, left fixed, right scrolls on wheel ── */}
            <section
                ref={sectionRef}
                className="hidden lg:flex w-full bg-[#FCFCFC]"
                style={{
                    height: "100vh",
                    paddingTop: 60,
                    paddingBottom: 60,
                    paddingLeft: "clamp(20px,4.17vw,60px)",
                    paddingRight: "clamp(20px,4.17vw,60px)",
                }}
            >
                <div className="w-full max-w-[1320px] mx-auto flex flex-row gap-[39px] h-full">

                    {/* Left: static */}
                    <div className="w-[324px] shrink-0 flex flex-col items-start">
                        <div className="w-[324px] h-[487px] px-[17px] pt-[22px] pb-[32px] -ml-[17px]">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/photos/schools/design/Frame 2131331224.svg"
                                    alt=""
                                    fill
                                    className="object-contain object-center"
                                    priority={false}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[14px] w-[277px]">
                            <p
                                className="m-0 text-[#313131]"
                                style={{ fontFamily: font, fontWeight: 500, fontSize: "16px", lineHeight: "100%" }}
                            >
                                See more work <br />from our students
                            </p>
                            <JoinClubLikeButton label="View more Projects" />
                        </div>
                    </div>

                    {/* Right: clips the grid; grid scrolls via translateY */}
                    <div ref={rightClipRef} className="flex-1 min-w-0 h-full overflow-hidden">
                        <div
                            ref={rightInnerRef}
                            className="grid grid-cols-2 gap-x-[50px] gap-y-[50px]"
                            style={{ willChange: "transform" }}
                        >
                            {STUDENT_PROJECTS.map((p, i) => (
                                <StudentProjectCard key={`d-${i}`} imageSrc={p.imageSrc} font={font} />
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* ── Mobile: normal flow ─────────────────────────────────────── */}
            <section
                className="lg:hidden w-full bg-[#FCFCFC] px-4"
                style={{ paddingTop: 30, paddingBottom: 30 }}
            >
                <div className="w-full max-w-[1320px] mx-auto flex flex-col gap-[20px]">
                    <div className="w-full flex flex-col items-start">
                        <div className="w-[min(336px,100%)] aspect-[230/310] pr-[17.62px] pt-[32px]">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/photos/schools/design/Frame 2131331224.svg"
                                    alt=""
                                    fill
                                    className="object-contain object-left"
                                    priority={false}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-0">
                        {STUDENT_PROJECTS.map((p, i) => (
                            <React.Fragment key={`m-${i}`}>
                                <StudentProjectCard imageSrc={p.imageSrc} font={font} />
                                {i < STUDENT_PROJECTS.length - 1 && (
                                    <div
                                        role="presentation"
                                        aria-hidden
                                        className="mx-auto my-[30px] box-border h-0 w-full max-w-[459.55078125px] shrink-0 border-0 border-t border-solid border-black"
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="w-full flex flex-col items-center gap-[14px]">
                        <p
                            className="m-0 text-[#313131] text-left w-full"
                            style={{ fontFamily: font, fontWeight: 500, fontSize: "16px", lineHeight: "100%" }}
                        >
                            See more work <br />from our students
                        </p>
                        <JoinClubLikeButton label="View more Projects" isMobile />
                    </div>
                </div>
            </section>

            <DesignCulturePhotosSection font={font} serif={serif} />
            <DesignStoriesInsightsSection font={font} serif={serif} />
        </>
    );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

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

    const tagBillboard: CSSProperties = { ...TAG_BASE, backgroundColor: "#FF5659", minWidth: "60.86745071411133px" };
    const tagBranding: CSSProperties = { ...TAG_BASE, backgroundColor: "#8F56FF" };
    const tagVideo: CSSProperties = { ...TAG_BASE, backgroundColor: "#FF5C00", minWidth: "60.86745071411133px" };

    return (
        <article className="flex h-[338.7525634765625px] w-full max-w-[459.55078125px] flex-col overflow-hidden rounded-none border-none bg-transparent gap-[12px] lg:h-auto lg:gap-0">
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

            <div className="flex min-h-[119.69513702392578px] w-full flex-1 flex-col justify-between gap-[7.89px] px-0 pt-0 lg:min-h-0 lg:flex-none lg:gap-[10.83px] lg:px-0 lg:pt-[8px]">
                <div className="mx-0 flex w-full max-w-[335px] flex-col gap-[7.89px] lg:max-w-[390px] lg:gap-[10.83px]">
                    <div
                        className="flex w-full max-w-[335px] flex-col gap-[4.93px] lg:max-w-[390px] lg:min-h-[75.76805114746094px] lg:gap-[6.77px]"
                        style={{ minHeight: "84.93372344970703px" }}
                    >
                        <h3
                            className="m-0 text-[20px] leading-[115%] text-black lg:min-h-[50px] lg:text-[22px]"
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
