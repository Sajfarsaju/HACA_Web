"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ARROW_PATH =
    "M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z";

export function DesignStoriesInsightsSection({ font, serif }: { font: string; serif: string }) {
    const cardGradient =
        "linear-gradient(135deg, rgba(143,86,255,0.18) 0%, rgba(37,146,255,0.10) 45%, rgba(255,92,0,0.12) 100%)";

    const sectionRef = useRef<HTMLElement>(null);
    const desktopScrollerRef = useRef<HTMLDivElement | null>(null);
    const mobileScrollerRef = useRef<HTMLDivElement | null>(null);
    const [desktopShift, setDesktopShift] = useState(0);
    const [mobileShift, setMobileShift] = useState(0);
    const [desktopPad, setDesktopPad] = useState(60);
    const [mobilePad, setMobilePad] = useState(20);

    useEffect(() => {
        const el = desktopScrollerRef.current;
        if (!el) return;
        const update = () => {
            const pad = sectionRef.current ? parseFloat(getComputedStyle(sectionRef.current).paddingLeft) : 60;
            setDesktopPad(pad);
            setDesktopShift(Math.min(el.scrollLeft, pad));
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
            setMobilePad(pad);
            setMobileShift(Math.min(el.scrollLeft, pad));
        };
        update();
        el.addEventListener("scroll", update, { passive: true });
        return () => el.removeEventListener("scroll", update);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="design-stories-insights"
            className="
                box-border w-full max-w-[1440px] bg-[#FCFCFC]
                px-5 pb-[30px] pt-[30px]
                lg:px-[60px] lg:pb-[40px] lg:pt-[40px]
            "
        >
            <div className="flex w-full min-w-0 flex-col gap-[50px] lg:gap-[80px]">
                {/* Heading — desktop frame: ~447 × 124 */}
                <div className="w-full min-h-0 lg:min-h-[123.574px] lg:w-[447px] lg:max-w-full">
                    <h2
                        className="m-0 w-full max-w-full text-black"
                        style={{
                            fontFamily: font,
                            fontWeight: 500,
                            fontSize: "34px",
                            lineHeight: "114.99999999999999%",
                        }}
                    >
                    <span className="hidden lg:inline">
                        Stories, Insights, and Life
                        <br />
                        Inside{" "}
                    </span>
                    <span className="lg:hidden">
                        Stories, Insights,
                        <br />
                        and Life Inside <br />
                    </span>
                    <span
                        className="relative inline-block pb-[6px] lg:pb-[12px]"
                        style={{
                            fontFamily: serif,
                            fontWeight: 300,
                            fontStyle: "italic",
                            fontSize: "inherit",
                            lineHeight: "114.99999999999999%",
                        }}
                    >
                        Design School
                        <span
                            className="pointer-events-none absolute left-1/2 top-full -mt-[1px] -translate-x-1/2 lg:hidden"
                            style={{ width: "185px", height: "8px" }}
                            aria-hidden
                        >
                            <Image
                                src="/photos/schools/design/Vector (11).svg"
                                alt=""
                                width={185}
                                height={8}
                                className="object-contain"
                                priority={false}
                            />
                        </span>
                        <span
                            className="pointer-events-none absolute left-1/2 top-full mt-[3px] hidden -translate-x-1/2 lg:block"
                            style={{ width: "279px", height: "15px" }}
                            aria-hidden
                        >
                            <Image
                                src="/photos/schools/design/Vector (11).svg"
                                alt=""
                                width={279}
                                height={15}
                                className="object-contain"
                                priority={false}
                            />
                        </span>
                    </span>
                    <style jsx>{`
                        @media (min-width: 1024px) {
                            h2 {
                                font-size: 50px !important;
                            }
                        }
                    `}</style>
                    </h2>
                </div>

                {/* Videos container + desktop-only button row */}
                <div className="flex w-full min-w-0 flex-col lg:gap-[40px]" style={{ gap: "20.66px" }}>
                    {/* Desktop: mentor-like scrolling (edge-only gaps, touch right border) */}
                    <div
                        className="hidden lg:block"
                        style={{
                            marginLeft: `-${desktopShift}px`,
                            marginRight: `-${desktopPad}px`,
                            width: `calc(100% + ${desktopShift + desktopPad}px)`,
                            transition: "margin-left 0.2s ease-out, width 0.2s ease-out, margin-right 0.2s ease-out",
                        }}
                    >
                        <div
                            ref={desktopScrollerRef}
                            className="storiesScroller flex overflow-x-auto overflow-y-hidden scroll-smooth"
                            style={{
                                width: "100%",
                                gap: "2px",
                                WebkitOverflowScrolling: "touch",
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            {Array.from({ length: 3 }, (_, i) => i).map((i) => (
                                <div
                                    key={i}
                                    className="shrink-0"
                                    style={{
                                        width: "644px",
                                        height: "392.5577697753906px",
                                        borderStyle: "solid",
                                        borderWidth: "1px",
                                        borderColor: "rgba(0,0,0,0.18)",
                                        background: cardGradient,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Mobile: mentor-like scrolling (edge-only gaps, touch right border) */}
                    <div
                        className="lg:hidden"
                        style={{
                            marginLeft: `-${mobileShift}px`,
                            marginRight: `-${mobilePad}px`,
                            width: `calc(100% + ${mobileShift + mobilePad}px)`,
                        }}
                    >
                        <div
                            ref={mobileScrollerRef}
                            className="storiesScroller flex overflow-x-auto overflow-y-hidden"
                            style={{
                                width: "100%",
                                gap: "1.03px",
                                WebkitOverflowScrolling: "touch",
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            {Array.from({ length: 3 }, (_, i) => i).map((i) => (
                                <div
                                    key={i}
                                    className="shrink-0"
                                    style={{
                                        width: "332.6446228027344px",
                                        height: "202.76744079589844px",
                                        borderStyle: "solid",
                                        borderWidth: "0.52px",
                                        borderColor: "rgba(0,0,0,0.18)",
                                        background: cardGradient,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <style jsx>{`
                        .storiesScroller::-webkit-scrollbar {
                            display: none;
                            width: 0;
                            height: 0;
                        }
                    `}</style>

                    {/* Desktop-only button container */}
                    <div className="hidden lg:flex w-full max-w-[1320px] justify-center items-center" style={{ height: "82px" }}>
                        <VisitPageButton font={font} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function VisitPageButton({ font }: { font: string }) {
    const vcFont = font;
    return (
        <div className="flex items-center gap-[5.56px] group">
            <Link
                href="/design-school/blog"
                className="flex items-center justify-center rounded-[50px] border-[1.11px] border-[#8F56FF] bg-transparent transition-colors duration-300 group-hover:bg-[#8F56FF]"
                style={{
                    width: "154.66665649414062px",
                    height: "60.5555534362793px",
                    paddingTop: "17.78px",
                    paddingRight: "33.33px",
                    paddingBottom: "17.78px",
                    paddingLeft: "33.33px",
                    fontFamily: vcFont,
                    fontWeight: 550,
                }}
            >
                <span className="text-[#000000] leading-none whitespace-nowrap transition-colors duration-300 group-hover:text-white" style={{ fontSize: 17.78 }}>
                    Visit Page
                </span>
            </Link>

            <Link
                href="/design-school/blog"
                className="relative rounded-full overflow-hidden shrink-0"
                style={{ width: "60px", height: "60px", backgroundColor: "#8F56FF" }}
                aria-label="Visit Page"
            >
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0 -translate-x-[45.56px]">
                    <svg viewBox="0 0 34 34" fill="none" style={{ width: 33.33, height: 33.33 }}>
                        <path d={ARROW_PATH} fill="white" />
                    </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-[46px]">
                    <svg viewBox="0 0 34 34" fill="none" style={{ width: 33.33, height: 33.33 }}>
                        <path d={ARROW_PATH} fill="white" />
                    </svg>
                </div>
            </Link>
        </div>
    );
}

