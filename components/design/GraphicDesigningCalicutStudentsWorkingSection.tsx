"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const FONT = '"VC Nudge Trial Normal", sans-serif' as const;

const HEADING_ID = "graphic-design-calicut-students-working-heading";

/** Figma card frame (~410 × 465) */
const CARD_WIDTH_PX = 409.61407470703125;
const CARD_HEIGHT_PX = 464.624267578125;
const CARD_GAP_PX = 10;
/** One set of four cards; duplicated in the DOM so the strip is wider than common viewports. */
const CARD_INDEXES = [0, 1, 2, 3, 0, 1, 2, 3] as const;

export function GraphicDesigningCalicutStudentsWorkingSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [shift, setShift] = useState(0);
    const dragRef = useRef<{
        pointerId: number;
        startClientX: number;
        startScrollLeft: number;
    } | null>(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const update = () => {
            const pad = sectionRef.current ? parseFloat(getComputedStyle(sectionRef.current).paddingLeft) : 60;
            setShift(Math.min(el.scrollLeft, Number.isFinite(pad) ? pad : 60));
        };
        update();
        el.addEventListener("scroll", update, { passive: true });
        return () => el.removeEventListener("scroll", update);
    }, []);

    const endPointerDrag = useCallback(() => {
        dragRef.current = null;
        const el = scrollRef.current;
        if (el) {
            el.style.removeProperty("cursor");
        }
    }, []);

    const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (e.button !== 0) return;
        if (dragRef.current) return;
        const el = scrollRef.current;
        if (!el) return;
        dragRef.current = {
            pointerId: e.pointerId,
            startClientX: e.clientX,
            startScrollLeft: el.scrollLeft,
        };
        el.style.cursor = "grabbing";
        el.setPointerCapture(e.pointerId);

        const onMove = (ev: PointerEvent) => {
            if (!dragRef.current || ev.pointerId !== dragRef.current.pointerId) return;
            const { startClientX, startScrollLeft } = dragRef.current;
            el.scrollLeft = startScrollLeft - (ev.clientX - startClientX);
        };

        const onUp = (ev: PointerEvent) => {
            if (!dragRef.current || ev.pointerId !== dragRef.current.pointerId) return;
            document.removeEventListener("pointermove", onMove);
            document.removeEventListener("pointerup", onUp);
            document.removeEventListener("pointercancel", onUp);
            try {
                el.releasePointerCapture(ev.pointerId);
            } catch {
                /* already released */
            }
            endPointerDrag();
        };

        document.addEventListener("pointermove", onMove);
        document.addEventListener("pointerup", onUp);
        document.addEventListener("pointercancel", onUp);
    }, [endPointerDrag]);

    return (
        <section
            ref={sectionRef}
            className="box-border flex w-full min-w-0 flex-col bg-white pt-5 lg:min-h-[808.624267578125px] lg:pt-0"
            aria-labelledby={HEADING_ID}
            style={{
                paddingBottom: 60,
                paddingLeft: "clamp(20px, 4.17vw, 60px)",
                paddingRight: "clamp(20px, 0.7vw, 20px)",
            }}
        >
            <div className="mx-auto flex w-full min-h-0 max-w-[1440px] flex-1 flex-col gap-[clamp(32px,5vw,48px)] lg:gap-[40px]">
                <style>{`
                    .gd-calicut-students-cards-scroll {
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }
                    .gd-calicut-students-cards-scroll::-webkit-scrollbar {
                        display: none;
                        width: 0;
                        height: 0;
                    }
                `}</style>

                <header className="mx-auto flex w-full max-w-[min(100%,1040px)] flex-col items-center text-center">
                    <h2 id={HEADING_ID} className="m-0 text-[#000000]">
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
                            <span className="block">Where Our Students Are</span>
                            <span className="block">Working</span>
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
                                textAlign: "center",
                            }}
                        >
                            <span className="block">Where Our Students Are</span>
                            <span className="block">Working</span>
                        </span>
                    </h2>
                    <p
                        className="m-0 mt-[14px] max-w-[min(100%,920px)]"
                        style={{
                            fontFamily: FONT,
                            fontWeight: 400,
                            fontSize: "clamp(14px, 1.9vw, 20px)",
                            lineHeight: "140%",
                            letterSpacing: 0,
                            color: "#000000B2",
                        }}
                    >
                        <span className="block">
                            With strong portfolios, practical exposure, and placement support, our students have
                        </span>
                        <span className="block">stepped into real design roles across different industries.</span>
                    </p>
                </header>

                <div className="mt-auto w-screen max-w-[100vw] min-w-0 shrink-0 [margin-inline:calc(50%-50vw)]">
                    <div
                        className="w-full min-w-0"
                        style={{
                            marginLeft: `-${shift}px`,
                            width: `calc(100% + ${shift}px)`,
                            transition: "margin-left 0.2s ease-out, width 0.2s ease-out",
                        }}
                    >
                        <div className="relative w-full min-w-0">
                            {/*
                              Viewport is width-bounded (w-full min-w-0); inner row is w-max so scrollWidth > clientWidth.
                            */}
                            <div
                                ref={scrollRef}
                                className="gd-calicut-students-cards-scroll w-full min-w-0 cursor-grab overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth select-none"
                                style={{
                                    WebkitOverflowScrolling: "touch",
                                    touchAction: "pan-x",
                                }}
                                aria-label="Employer placeholders — scroll horizontally with wheel, trackpad, or drag"
                                onPointerDown={onPointerDown}
                            >
                                <div
                                    className="flex w-max min-w-0 flex-row flex-nowrap items-stretch"
                                    style={{
                                        gap: CARD_GAP_PX,
                                        paddingLeft: "clamp(20px, 4.17vw, 60px)",
                                        paddingRight: "clamp(28px, 4.17vw, 72px)",
                                    }}
                                >
                                    {CARD_INDEXES.map((idx, i) => (
                                        <div
                                            key={`card-${i}`}
                                            className="box-border shrink-0 bg-[#E8E8E8]"
                                            style={{
                                                width: CARD_WIDTH_PX,
                                                height: CARD_HEIGHT_PX,
                                            }}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
