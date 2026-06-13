"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getPublicBackendBase } from "@/lib/placements-api";

const FONT = '"VC Nudge Trial Normal", sans-serif' as const;

type MentorEntry = {
    id: string;
    name: string;
    role: string;
    photoSrc: string;
};

const FALLBACK_MENTORS: MentorEntry[] = [
    {
        id: "nanditha",
        name: "Nanditha",
        role: "Motion Graphics Mentor",
        photoSrc: "/photos/schools/design/nanditha.webp",
    },
    {
        id: "ashif",
        name: "Ashif",
        role: "Graphic Design Mentor",
        photoSrc: "/photos/schools/design/ashif.webp",
    },
    {
        id: "nabhan",
        name: "Nabhan",
        role: "Founder Design School",
        photoSrc: "/photos/schools/design/nabhan.webp",
    },
    {
        id: "pressly",
        name: "Pressly",
        role: "Branding Mentor",
        photoSrc: "/photos/schools/design/pressly.webp",
    },
    {
        id: "faheem",
        name: "Faheem",
        role: "Motion Graphics Mentor",
        photoSrc: "/photos/schools/design/faheem.webp",
    },
];

const HEADING_ID = "ui-ux-calicut-mentors-heading";

const STUDIO_BACKDROP = "#D8D8D8" as const;

function MentorFigure({ mentor }: { mentor: MentorEntry }) {
    const alt = `${mentor.name}, ${mentor.role} at HACA Design School, Calicut`;
    const normalizeWhiteBackdrop = mentor.name.toLowerCase() === "ashif";

    return (
        <figure
            className="relative m-0 shrink-0 overflow-hidden border-0 bg-[#E0E0E0]
                h-[242.1px] w-[175.4348px]
                lg:h-[556.83px] lg:w-[403.5px]"
        >
            <div className="absolute inset-0 overflow-hidden">
                {normalizeWhiteBackdrop ? (
                    <>
                        <div className="absolute inset-0 z-0" style={{ backgroundColor: STUDIO_BACKDROP }} aria-hidden />
                        <Image
                            src={mentor.photoSrc}
                            alt={alt}
                            fill
                            className="object-cover object-center mix-blend-multiply"
                            sizes="(max-width: 1024px) 180px, 410px"
                            unoptimized={mentor.photoSrc.startsWith("http")}
                        />
                    </>
                ) : (
                    <Image src={mentor.photoSrc} alt={alt} fill className="object-cover object-center" sizes="(max-width: 1024px) 180px, 410px" unoptimized={mentor.photoSrc.startsWith("http")} />
                )}
            </div>

            <figcaption
                className="absolute bottom-0 left-0 box-border"
                style={{
                    left: "clamp(12px, 4.5vw, 38px)",
                    bottom: "clamp(12px, 3vw, 36px)",
                    right: "clamp(8px, 2vw, 24px)",
                    textShadow:
                        "0 1px 2px rgba(0,0,0,0.85), 0 2px 16px rgba(0,0,0,0.55), 0 0 1px rgba(0,0,0,0.9)",
                }}
            >
                <p
                    className="m-0"
                    style={{
                        fontFamily: FONT,
                        fontWeight: 500,
                        fontSize: "clamp(10px, 2.8vw, 18px)",
                        lineHeight: "120%",
                        letterSpacing: "-0.02em",
                        color: "#FFFFFFB2",
                    }}
                >
                    {mentor.role}
                </p>
                <p
                    className="m-0 mt-[2px] lg:mt-[6px]"
                    style={{
                        fontFamily: FONT,
                        fontWeight: 500,
                        fontSize: "clamp(16px, 5vw, 36px)",
                        lineHeight: "110%",
                        letterSpacing: "-0.02em",
                        color: "#FFFFFF",
                    }}
                >
                    {mentor.name}
                </p>
            </figcaption>
        </figure>
    );
}

export function UiUxDesignCalicutMentorsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const desktopScrollerRef = useRef<HTMLUListElement | null>(null);
    const mobileScrollerRef = useRef<HTMLUListElement | null>(null);
    const [desktopAtStart, setDesktopAtStart] = useState(true);
    const [desktopShift, setDesktopShift] = useState(0);
    const [mobileShift, setMobileShift] = useState(0);
    const [mentors, setMentors] = useState<MentorEntry[]>(FALLBACK_MENTORS);

    useEffect(() => {
        fetch(`${getPublicBackendBase()}/api/mentors?school=${encodeURIComponent("Design School")}`)
            .then((r) => r.ok ? r.json() : null)
            .then((data: { mentors?: Array<{ _id: string; name: string; designation: string; photoUrl: string }> } | null) => {
                if (data?.mentors && data.mentors.length > 0) {
                    setMentors(
                        data.mentors.map((m) => ({
                            id: m._id,
                            name: m.name,
                            role: m.designation,
                            photoSrc: m.photoUrl,
                        }))
                    );
                }
            })
            .catch(() => {});
    }, []);

    useEffect(() => {
        const el = desktopScrollerRef.current;
        if (!el) return;
        const update = () => {
            const pad = sectionRef.current ? parseFloat(getComputedStyle(sectionRef.current).paddingLeft) : 60;
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
            const pad = sectionRef.current ? parseFloat(getComputedStyle(sectionRef.current).paddingLeft) : 20;
            setMobileShift(Math.min(el.scrollLeft, pad));
        };
        update();
        el.addEventListener("scroll", update, { passive: true });
        return () => el.removeEventListener("scroll", update);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#FCFCFC]"
            aria-labelledby={HEADING_ID}
            style={{
                paddingTop: "clamp(30px, 4.17vw, 60px)",
                paddingBottom: "clamp(30px, 4.17vw, 60px)",
                paddingLeft: "clamp(20px, 4.17vw, 60px)",
                paddingRight: "clamp(20px, 0.7vw, 20px)",
            }}
        >
            <div className="mx-auto w-full max-w-[1440px]">
                <div className="flex flex-col gap-[24px] lg:gap-[40px]">
                    <h2 id={HEADING_ID} className="m-0 max-w-[min(100%,920px)] text-left text-[#000000]">
                        <span
                            className="lg:hidden"
                            style={{
                                fontFamily: FONT,
                                fontWeight: 500,
                                fontStyle: "normal",
                                fontSize: "35px",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Learn from Industry Mentors
                        </span>
                        <span
                            className="hidden lg:inline"
                            style={{
                                fontFamily: FONT,
                                fontWeight: 500,
                                fontStyle: "normal",
                                fontSize: "45px",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Learn from Industry Mentors
                        </span>
                    </h2>

                    <div className="w-full">
                        {/* Desktop */}
                        <div
                            className="hidden lg:block"
                            style={{
                                marginLeft: `-${desktopShift}px`,
                                width: `calc(100% + ${desktopShift}px)`,
                                transition: "margin-left 0.2s ease-out, width 0.2s ease-out",
                            }}
                        >
                            <div className="relative w-full">
                                <ul
                                    ref={desktopScrollerRef}
                                    className="uiux-calicut-mentors-scroller flex list-none flex-row gap-[2px] overflow-x-auto overflow-y-hidden scroll-smooth p-0 m-0"
                                    style={{
                                        WebkitOverflowScrolling: "touch",
                                        scrollbarWidth: "none",
                                        msOverflowStyle: "none",
                                        marginRight: "-20px",
                                        paddingRight: "20px",
                                    }}
                                    aria-label="UI/UX design mentors"
                                >
                                    {mentors.map((m) => (
                                        <li key={m.id} className="shrink-0">
                                            <MentorFigure mentor={m} />
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    type="button"
                                    aria-label={desktopAtStart ? "Scroll mentors right" : "Scroll mentors left"}
                                    onClick={() => {
                                        const el = desktopScrollerRef.current;
                                        if (!el) return;
                                        el.scrollTo({
                                            left: desktopAtStart ? el.scrollWidth : 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className="absolute top-1/2 z-10"
                                    style={{
                                        right: desktopAtStart ? 0 : undefined,
                                        left: desktopAtStart ? undefined : 0,
                                        width: "clamp(64px, 5.694vw, 82px)",
                                        height: "clamp(64px, 5.694vw, 82px)",
                                        transform: `translateY(-50%) rotate(${desktopAtStart ? 0 : 180}deg)`,
                                        transformOrigin: "center",
                                    }}
                                >
                                    <Image
                                        src="/photos/schools/design/Frame 2131331135.svg"
                                        alt="" aria-hidden="true"
                                        fill
                                        className="object-contain"
                                        priority={false}
                                    />
                                </button>

                                <style jsx>{`
                                    .uiux-calicut-mentors-scroller::-webkit-scrollbar {
                                        display: none;
                                        width: 0;
                                        height: 0;
                                    }
                                `}</style>
                            </div>
                        </div>

                        {/* Mobile */}
                        <div
                            className="lg:hidden"
                            style={{
                                marginLeft: `-${mobileShift}px`,
                                width: `calc(100% + ${mobileShift}px)`,
                            }}
                        >
                            <ul
                                ref={mobileScrollerRef}
                                className="uiux-calicut-mentors-scroller-mobile m-0 flex list-none flex-row gap-[0.87px] overflow-x-auto overflow-y-hidden p-0"
                                style={{
                                    width: "100%",
                                    WebkitOverflowScrolling: "touch",
                                    paddingBottom: "6px",
                                    marginRight: "-20px",
                                    paddingRight: "20px",
                                }}
                                aria-label="UI/UX design mentors"
                            >
                                {mentors.map((m) => (
                                    <li key={m.id} className="shrink-0">
                                        <MentorFigure mentor={m} />
                                    </li>
                                ))}
                            </ul>
                            <style jsx>{`
                                .uiux-calicut-mentors-scroller-mobile::-webkit-scrollbar {
                                    display: none;
                                    width: 0;
                                    height: 0;
                                }
                            `}</style>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
