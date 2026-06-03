"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type MentorCard = {
    id: string;
    name: string;
    designation: string;
    photoSrc: string;
    filterColor: string;
};

const FILTER_COLORS = ["#FF5C00", "#29C76B", "#8F56FF", "#2592FF", "#FF5659"];

const FALLBACK_MENTORS: MentorCard[] = [
    { id: "nanditha", name: "Nanditha", designation: "Motion Graphics Mentor", photoSrc: "/photos/schools/design/nanditha.webp", filterColor: "#FF5C00" },
    { id: "ashif", name: "Ashif", designation: "Motion Graphics Mentor", photoSrc: "/photos/schools/design/ashif.webp", filterColor: "#29C76B" },
    { id: "nabhan", name: "Nabhan", designation: "Motion Graphics Mentor", photoSrc: "/photos/schools/design/nabhan.webp", filterColor: "#8F56FF" },
    { id: "pressly", name: "Pressly", designation: "Motion Graphics Mentor", photoSrc: "/photos/schools/design/pressly.webp", filterColor: "#2592FF" },
    { id: "faheem", name: "Faheem", designation: "Motion Graphics Mentor", photoSrc: "/photos/schools/design/faheem.webp", filterColor: "#FF5659" },
];

/** Desktop mentor cards layout — matches `lg:w-[403.5px]` + `gap-[2px]` in `DesignMentorsSection`. */
const MENTOR_DESKTOP_CARD_WIDTH_PX = 403.5;
const MENTOR_DESKTOP_CARD_GAP_PX = 2;
/** Horizontal centre of gutter between the 3rd and 4th cards (matches Figma stacking). */
const MENTOR_DESKTOP_ARROW_GAP_CENTER_X =
    3 * MENTOR_DESKTOP_CARD_WIDTH_PX +
    (2 + 0.5) * MENTOR_DESKTOP_CARD_GAP_PX;

export function DesignMentorsSection() {
    const font = '"VC Nudge Trial Normal", sans-serif';
    const serif = '"IvyPresto Display", serif';
    const underlineFill = "#2592FF";
    // Reduced underline widths (as requested)
    const underlineDesktopW = 200;
    const underlineDesktopH = 17;
    const underlineMobileW = 125;
    const underlineMobileH = 10.6;

    const sectionRef       = useRef<HTMLElement>(null);
    const desktopScrollerRef = useRef<HTMLDivElement | null>(null);
    const mobileScrollerRef  = useRef<HTMLDivElement | null>(null);
    const [desktopAtStart, setDesktopAtStart] = useState(true);
    const [desktopShift, setDesktopShift]     = useState(0);
    const [mobileShift, setMobileShift]       = useState(0);
    const [MENTORS, setMENTORS]               = useState<MentorCard[]>([]);

    useEffect(() => {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/mentors?school=Design%20School`;
        fetch(url)
            .then((r) => (r.ok ? r.json() : null))
            .then((data) => {
                setMENTORS(
                    Array.isArray(data?.mentors)
                        ? data.mentors.map((m: { _id: string; name: string; designation: string; photoUrl: string }, i: number) => ({
                              id: m._id,
                              name: m.name,
                              designation: m.designation,
                              photoSrc: m.photoUrl,
                              filterColor: FILTER_COLORS[i % FILTER_COLORS.length],
                          }))
                        : []
                );
            })
            .catch(() => {});
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const desktopStep = useMemo(() => Infinity, []);

    useEffect(() => {
        const el = desktopScrollerRef.current;
        if (!el) return;
        const update = () => {
            const pad = sectionRef.current
                ? parseFloat(getComputedStyle(sectionRef.current).paddingLeft)
                : 60;
            setDesktopShift(Math.min(el.scrollLeft, pad));
            setDesktopAtStart(el.scrollLeft <= 1);
        };
        update();
        el.addEventListener("scroll", update, { passive: true });
        return () => el.removeEventListener("scroll", update);
    }, []);

    useEffect(() => {
        const el = mobileScrollerRef.current;
        if (!el) return;
        const update = () => {
            const pad = sectionRef.current
                ? parseFloat(getComputedStyle(sectionRef.current).paddingLeft)
                : 20;
            setMobileShift(Math.min(el.scrollLeft, pad));
        };
        update();
        el.addEventListener("scroll", update, { passive: true });
        return () => el.removeEventListener("scroll", update);
    }, []);

    if (MENTORS.length === 0) return null;

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#FCFCFC]"
            style={{
                paddingTop: "clamp(30px, 4.17vw, 60px)",
                paddingBottom: "clamp(30px, 4.17vw, 60px)",
                paddingLeft: "clamp(20px, 4.17vw, 60px)",
                paddingRight: "clamp(20px, 0.7vw, 20px)",
            }}
        >
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex flex-col gap-[40px] lg:gap-[60px]">
                    {/* Heading */}
                    <div>
                        <h2
                            className="m-0 text-[#000000] hidden lg:block"
                            style={{
                                fontFamily: font,
                                fontWeight: 500,
                                fontSize: "50px",
                                lineHeight: "115%",
                            }}
                        >
                            Mentors Who Guide, Challenge,
                            <br />
                            and Grow Your{" "}
                            <span
                                className="relative inline-block"
                                style={{
                                    fontFamily: serif,
                                    fontWeight: 300,
                                    fontStyle: "italic",
                                    paddingBottom: "18px",
                                }}
                            >
                                Thinking
                                <span
                                    className="pointer-events-none absolute"
                                    style={{
                                        left: "50%",
                                        top: "calc(100% - 20px)",
                                        transform: "translateX(-50%) rotate(-1.93deg)",
                                        width: `${underlineDesktopW}px`,
                                        height: `${underlineDesktopH}px`,
                                        transformOrigin: "center",
                                    }}
                                    aria-hidden="true"
                                >
                                    <MentorsThinkingUnderline fill={underlineFill} />
                                </span>
                            </span>
                        </h2>

                        <h2
                            className="m-0 text-[#000000] lg:hidden"
                            style={{
                                fontFamily: font,
                                fontWeight: 500,
                                fontSize: "34px",
                                lineHeight: "115%",
                            }}
                        >
                            Mentors Who Guide,
                            <br />
                            Challenge, and Grow
                            <br />
                            Your{" "}
                            <span
                                className="relative inline-block"
                                style={{
                                    fontFamily: serif,
                                    fontWeight: 300,
                                    fontStyle: "italic",
                                    paddingBottom: "14px",
                                }}
                            >
                                Thinking
                                <span
                                    className="pointer-events-none absolute"
                                    style={{
                                        left: "50%",
                                        top: "calc(100% - 14px)",
                                        transform: "translateX(-50%) rotate(-1.93deg)",
                                        width: `${underlineMobileW}px`,
                                        height: `${underlineMobileH}px`,
                                        transformOrigin: "center",
                                    }}
                                    aria-hidden="true"
                                >
                                    <MentorsThinkingUnderline fill={underlineFill} />
                                </span>
                            </span>
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="w-full">
                        {/* Desktop: horizontal row (5 cards, scroll if needed) */}
                        <div
                            className="hidden lg:block"
                            style={{
                                marginLeft: `-${desktopShift}px`,
                                width: `calc(100% + ${desktopShift}px)`,
                                transition: "margin-left 0.2s ease-out, width 0.2s ease-out",
                            }}
                        >
                            <div className="relative w-full">
                                <div
                                    ref={desktopScrollerRef}
                                    className="mentorsScroller flex gap-[2px] overflow-x-auto overflow-y-hidden scroll-smooth"
                                    style={{
                                        WebkitOverflowScrolling: "touch",
                                        scrollbarWidth: "none",
                                        msOverflowStyle: "none",
                                        // Let cards touch the right border, but keep end-space when fully scrolled
                                        marginRight: "-20px",
                                        paddingRight: "20px",
                                    }}
                                >
                                    {MENTORS.map((m) => (
                                        <MentorCardView key={m.id} mentor={m} />
                                    ))}
                                </div>

                                {/* Desktop scroll button */}
                                <button
                                    type="button"
                                    aria-label={desktopAtStart ? "Scroll mentors right" : "Scroll mentors left"}
                                    onClick={() => {
                                        const el = desktopScrollerRef.current;
                                        if (!el) return;
                                        // Scroll fully (start <-> end)
                                        el.scrollTo({
                                            left: desktopAtStart ? el.scrollWidth : 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className="absolute top-1/2 z-10 pointer-events-auto"
                                    style={{
                                        left: MENTOR_DESKTOP_ARROW_GAP_CENTER_X,
                                        width: "clamp(64px, 5.694vw, 81.99998474121125px)",
                                        height: "clamp(64px, 5.694vw, 81.99998474121125px)",
                                        transform: `translate(-50%, -50%) rotate(${desktopAtStart ? 0 : 180}deg)`,
                                        transformOrigin: "center",
                                    }}
                                >
                                    <Image
                                        src="/photos/schools/design/Frame 2131331135.svg"
                                        alt=""
                                        fill
                                        className="object-contain"
                                        priority={false}
                                    />
                                </button>

                                <style jsx>{`
                                    .mentorsScroller::-webkit-scrollbar {
                                        display: none;
                                        width: 0;
                                        height: 0;
                                    }
                                `}</style>
                            </div>
                        </div>

                        {/* Mobile: horizontal scroll */}
                        <div
                            className="lg:hidden"
                            style={{
                                marginLeft: `-${mobileShift}px`,
                                width: `calc(100% + ${mobileShift}px)`,
                            }}
                        >
                            <div
                                ref={mobileScrollerRef}
                                className="flex gap-[0.87px] overflow-x-auto overflow-y-hidden"
                                style={{
                                    width: "100%",
                                    WebkitOverflowScrolling: "touch",
                                    paddingBottom: "6px",
                                    // Let cards touch the right border, but keep end-space when fully scrolled
                                    marginRight: "-20px",
                                    paddingRight: "20px",
                                }}
                            >
                                {MENTORS.map((m) => (
                                    <MentorCardView key={m.id} mentor={m} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/** Reference frame for mobile label placement (matches Figma card). */
const MENTOR_CARD_REF_W = 175.43478393554688
const MENTOR_CARD_REF_H = 242.10000610351562
function MentorCardView({ mentor }: { mentor: MentorCard }) {
    const font = '"VC Nudge Trial Normal", sans-serif';
    const labelLeftPct = (17 / MENTOR_CARD_REF_W) * 100
    const labelWidthPct = (151 / MENTOR_CARD_REF_W) * 100
    const labelBottomPct = ((MENTOR_CARD_REF_H - 198 - 31) / MENTOR_CARD_REF_H) * 100

    return (
        <div className="group relative h-auto w-[min(300px,calc(100vw-40px))] shrink-0 overflow-hidden opacity-100 aspect-[403.5/556.83] lg:w-[403.5px]">
            {/* Photo */}
            <div className="absolute inset-0">
                <Image
                    src={mentor.photoSrc}
                    alt={mentor.name}
                    fill
                    className="object-cover"
                    style={{ opacity: 1 }}
                />
            </div>

            {/* Color filter */}
            <div
                className="absolute inset-0 transition-opacity duration-300 ease-out group-hover:opacity-0"
                style={{
                    backgroundColor: mentor.filterColor,
                    mixBlendMode: "multiply",
                }}
            />

            {/* Name + designation */}
            <div
                className="absolute lg:hidden"
                style={{
                    left: `${labelLeftPct}%`,
                    bottom: `${labelBottomPct}%`,
                    width: `${labelWidthPct}%`,
                }}
            >
                <div
                    className="text-[#6D7792]"
                    style={{
                        fontFamily: font,
                        fontWeight: 500,
                        fontSize: "10px",
                        lineHeight: "100%",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {mentor.designation}
                </div>
                <div
                    className="text-white"
                    style={{
                        marginTop: "2px",
                        fontFamily: font,
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "100%",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {mentor.name}
                </div>
            </div>

            {/* Desktop overlay positions */}
            <div
                className="hidden lg:block absolute"
                style={{
                    left: "38px",
                    top: "456px",
                    width: "202px",
                    height: "64px",
                }}
            >
                <div
                    className="text-[#6D7792]"
                    style={{
                        fontFamily: font,
                        fontWeight: 500,
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {mentor.designation}
                </div>
                <div
                    className="text-white"
                    style={{
                        marginTop: "6px",
                        fontFamily: font,
                        fontWeight: 500,
                        fontSize: "36px",
                        lineHeight: "100%",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {mentor.name}
                </div>
            </div>
        </div>
    );
}

function MentorsThinkingUnderline({ fill }: { fill: string }) {
    return (
        <svg viewBox="0 0 230 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
                d="M14.5902 10.0217C19.8226 7.52508 27.3698 4.33771 36.6457 6.49965C43.6298 8.1232 48.4948 11.1277 55.087 13.0196C69.5962 17.1742 88.1071 17.4757 104.246 16.2048C123.005 14.7312 140.724 11.9951 159.544 10.5283C180.502 8.9064 201.596 8.49302 223.274 9.69588C231.24 10.1367 230.899 5.62886 223.432 4.99429C201.467 3.1242 179.017 3.36183 157.554 4.80351C135.939 6.25425 115.917 10.0483 94.1321 11.1148C83.5504 11.6314 71.5775 11.2235 62.3189 8.54892C55.2879 6.51222 50.3127 3.53245 42.8927 1.67425C26.1235 -2.51629 11.635 1.92521 1.54572 6.59287C-4.48105 9.39153 8.65342 12.8541 14.5902 10.0217Z"
                fill={fill}
            />
        </svg>
    );
}

