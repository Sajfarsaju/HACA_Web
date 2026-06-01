import React from "react";

const FONT = "'Switzer', var(--font-outfit), sans-serif";

const MODULES = [
    { count: "01", label: "Introduction to Design Thinking, UX Fundamentals & Stakeholder Understanding" },
    { count: "02", label: "Basics of Design – Colour Theory, Typography & Visual Hierarchy" },
    { count: "03", label: "UX Research Process – Competitor Analysis, User Research & Personas" },
    { count: "04", label: "Design Strategy & Problem Framing" },
    { count: "05", label: "User Flow Mapping & Information Architecture" },
    { count: "06", label: "Low-Fidelity Wireframing & High-Fidelity Wireframing" },
    { count: "07", label: "UI Design Foundations & Figma Essentials" },
    { count: "08", label: "UI Design in Figma" },
    { count: "09", label: "Prototyping & Design Systems + Developer Handoff" },
    { count: "10", label: "Usability Testing – Manual & AI-Assisted Feedback Analysis" },
    { count: "11", label: "AI Tools for UI/UX + Final Case Study & Portfolio Presentation" },
] as const;

const ITEM_W = 376;
const ITEM_GAP = 20;
const TRACK_H = 340;
const LINE_Y = TRACK_H / 2; // 170px
const CONTENT_GAP = 52; // gap between content edge and line (from Figma)

// "above" items: content bottom edge is at LINE_Y - CONTENT_GAP = 118px from top
// CSS bottom = TRACK_H - 118 = 222px
const ABOVE_BOTTOM = TRACK_H - (LINE_Y - CONTENT_GAP);
// "below" items: content top edge is at LINE_Y + CONTENT_GAP = 222px from top
const BELOW_TOP = LINE_Y + CONTENT_GAP;

export function UiUxDesignCalicutCurriculumSection() {
    const trackWidth = MODULES.length * ITEM_W + (MODULES.length - 1) * ITEM_GAP;

    return (
        <section className="w-full bg-white">
            <div
                className="mx-auto w-full max-w-[1440px] box-border flex flex-col lg:px-[60px] lg:py-[80px] px-[16px] py-[20px]"
                style={{ gap: 40 }}
            >
                {/* Heading + Paragraph */}
                <div className="flex flex-col" style={{ gap: 20 }}>
                    <h2
                        className="m-0"
                        style={{
                            fontFamily: FONT,
                            fontWeight: 500,
                            fontSize: "clamp(35px, 3.5vw, 45px)",
                            lineHeight: "120%",
                            letterSpacing: "-0.02em",
                            color: "#000000",
                            maxWidth: 500,
                        }}
                    >
                        What You&apos;ll Learn in this UI UX Design Course
                    </h2>
                    <p
                        className="m-0"
                        style={{
                            fontFamily: FONT,
                            fontWeight: 500,
                            fontSize: "clamp(14px, 1.2vw, 16px)",
                            lineHeight: "120%",
                            letterSpacing: "-0.02em",
                            color: "#000000B2",
                            maxWidth: 634,
                        }}
                    >
                        We keep things simple and structured, helping you learn everything from UI/UX fundamentals to advanced design practices step by step.
                    </p>
                </div>

                {/* Scrollable timeline */}
                <div
                    className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: "none" } as React.CSSProperties}
                >
                    <div style={{ position: "relative", width: trackWidth, height: TRACK_H }}>

                        {/* Horizontal line — from center of first item to center of last item */}
                        <div
                            style={{
                                position: "absolute",
                                top: LINE_Y - 1,
                                left: ITEM_W / 2,
                                width: trackWidth - ITEM_W,
                                height: 2,
                                backgroundColor: "#14BCFF",
                                borderRadius: 20,
                            }}
                        />

                        {/* Items */}
                        <div style={{ display: "flex", gap: ITEM_GAP, height: "100%" }}>
                            {MODULES.map((m, idx) => {
                                const above = idx % 2 === 0;
                                return (
                                    <div
                                        key={m.count}
                                        style={{ width: ITEM_W, flexShrink: 0, position: "relative", height: TRACK_H }}
                                    >
                                        {/* Dot on line */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: LINE_Y - 7,
                                                left: ITEM_W / 2 - 7,
                                                width: 14,
                                                height: 14,
                                                borderRadius: "50%",
                                                backgroundColor: "#14BCFF",
                                                border: "2px solid #14BCFF",
                                            }}
                                        />

                                        {/* Content */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                width: ITEM_W,
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 0,
                                                ...(above
                                                    ? { bottom: ABOVE_BOTTOM }
                                                    : { top: BELOW_TOP }),
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontFamily: FONT,
                                                    fontWeight: 500,
                                                    fontSize: 60,
                                                    lineHeight: "100%",
                                                    letterSpacing: "-0.02em",
                                                    color: "#000000B2",
                                                }}
                                            >
                                                {m.count}
                                            </span>
                                            <p
                                                style={{
                                                    margin: 0,
                                                    fontFamily: FONT,
                                                    fontWeight: 500,
                                                    fontSize: 20,
                                                    lineHeight: "130%",
                                                    letterSpacing: "-0.02em",
                                                    color: "#000000B2",
                                                }}
                                            >
                                                {m.label}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
