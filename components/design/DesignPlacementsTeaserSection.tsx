"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PLACEHOLDERS = Array.from({ length: 5 }, (_, i) => i);

export function DesignPlacementsTeaserSection() {
    const font = '"VC Nudge Trial Normal", sans-serif';
    const serif = '"IvyPresto Display", serif';

    const sectionRef  = useRef<HTMLElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [shift,    setShift]    = useState(0);
    const [rightPad, setRightPad] = useState(20);

    // Measure section paddings — updates on resize
    useEffect(() => {
        const measure = () => {
            if (!sectionRef.current) return;
            const cs = getComputedStyle(sectionRef.current);
            setRightPad(parseFloat(cs.paddingRight) || 20);
        };
        measure();
        window.addEventListener("resize", measure, { passive: true });
        return () => window.removeEventListener("resize", measure);
    }, []);

    // Shift container left as user scrolls right — consumes left padding so no dead space
    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;
        const update = () => {
            const pad = sectionRef.current
                ? parseFloat(getComputedStyle(sectionRef.current).paddingLeft)
                : 20;
            setShift(Math.min(el.scrollLeft, pad));
        };
        update();
        el.addEventListener("scroll", update, { passive: true });
        return () => el.removeEventListener("scroll", update);
    }, []);

    // Initial position: fully scrolled right, then peek left so user knows to scroll left
    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;
        let t1: ReturnType<typeof setTimeout>;
        let t2: ReturnType<typeof setTimeout>;
        let t3: ReturnType<typeof setTimeout>;
        t1 = setTimeout(() => {
            el.scrollLeft = el.scrollWidth - el.clientWidth;
            t2 = setTimeout(() => {
                el.scrollTo({ left: el.scrollLeft - 90, behavior: "smooth" });
                t3 = setTimeout(() => {
                    el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: "smooth" });
                }, 750);
            }, 200);
        }, 500);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#FCFCFC]"
            style={{
                paddingTop: "clamp(30px, 4.17vw, 60px)",
                paddingBottom: "clamp(30px, 4.17vw, 60px)",
                paddingLeft: "clamp(20px, 4.17vw, 60px)",
                paddingRight: "clamp(20px, 4.17vw, 60px)",
            }}
        >
            <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-[30px] lg:gap-[60px]">
                {/* Heading */}
                <div className="w-full lg:flex lg:justify-end">
                    <h2
                        className="hidden lg:block m-0 text-[#000000] text-left"
                        style={{ fontFamily: font, fontWeight: 500, fontSize: "50px", lineHeight: "115%", width: "575px" }}
                    >
                        The Next Name On This
                        <br />
                        List{" "}
                        <span
                            className="relative inline-block"
                            style={{ fontFamily: serif, fontWeight: 300, fontStyle: "italic", paddingBottom: "14px" }}
                        >
                            Could Be Yours
                            <span
                                className="pointer-events-none absolute"
                                style={{
                                    left: "50%",
                                    top: "calc(100% - 12px)",
                                    transform: "translateX(-50%)",
                                    width: "296px",
                                    height: "12px",
                                }}
                                aria-hidden="true"
                            >
                                <Image src="/photos/schools/design/Vector (9).svg" alt="" fill className="object-contain" />
                            </span>
                        </span>
                    </h2>

                    <h2
                        className="lg:hidden m-0 text-[#000000] text-right"
                        style={{ fontFamily: font, fontWeight: 500, fontSize: "34px", lineHeight: "115%" }}
                    >
                        The Next Name
                        <br />
                        On This List
                        <br />
                        <span
                            className="relative inline-block"
                            style={{ fontFamily: serif, fontWeight: 300, fontStyle: "italic", paddingBottom: "10px" }}
                        >
                            Could Be Yours
                            <span
                                className="pointer-events-none absolute"
                                style={{
                                    left: "50%",
                                    top: "calc(100% - 8px)",
                                    transform: "translateX(-50%)",
                                    width: "214px",
                                    height: "8.675676345825195px",
                                }}
                                aria-hidden="true"
                            >
                                <Image src="/photos/schools/design/Vector (9).svg" alt="" fill className="object-contain" />
                            </span>
                        </span>
                    </h2>
                </div>

                {/* Cards (placeholder gradients) */}
                <div
                    style={{
                        marginLeft: `-${shift}px`,
                        width: `calc(100% + ${shift}px + ${rightPad}px)`,
                    }}
                >
                    <div
                        ref={scrollerRef}
                        className="placementsScroller flex overflow-x-auto overflow-y-hidden"
                        style={{
                            gap: "clamp(1.05px, 0.122vw, 1.76px)",
                            WebkitOverflowScrolling: "touch",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            width: "100%",
                            paddingRight: `${rightPad}px`,
                        }}
                    >
                        {PLACEHOLDERS.map((i) => (
                            <div
                                key={i}
                                className="shrink-0"
                                style={{
                                    width: "clamp(199.1592254638672px, 23.183vw, 333.83917236328125px)",
                                    height: "clamp(227.5354766845703px, 26.487vw, 381.4046325683594px)",
                                    borderRadius: "14px",
                                    background:
                                        "linear-gradient(135deg, rgba(255,92,0,0.25) 0%, rgba(105,74,255,0.25) 50%, rgba(41,199,107,0.25) 100%)",
                                    border: "1px solid rgba(0,0,0,0.08)",
                                }}
                            />
                        ))}
                    </div>

                    <style jsx>{`
                        .placementsScroller::-webkit-scrollbar {
                            display: none;
                            width: 0;
                            height: 0;
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
}

