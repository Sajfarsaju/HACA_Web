"use client";

import Image from "next/image";
import React from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const TOOLS = [
    { key: "ps", icon: "/photos/schools/design/tools/photoshop.svg", labelTop: "Adobe", labelBottom: "Photoshop" },
    { key: "pr", icon: "/photos/schools/design/tools/premiere.svg", labelTop: "Adobe", labelBottom: "Premiere Pro" },
    { key: "figma", icon: "/photos/schools/design/tools/figma.svg", labelTop: "", labelBottom: "Figma" },
    { key: "ai", icon: "/photos/schools/design/tools/illustrator.svg", labelTop: "Adobe", labelBottom: "Illustrator" },
    { key: "ae", icon: "/photos/schools/design/tools/after-effects.svg", labelTop: "Adobe", labelBottom: "After Effects" },
] as const;

type Tool = (typeof TOOLS)[number];

function ToolItem({ t, className }: { t: Tool; className?: string }) {
    const isFigma = t.key === "figma";
    return (
        <div
            className={["flex items-center gap-4", className].filter(Boolean).join(" ")}
        >
            <Image
                src={t.icon}
                alt=""
                aria-hidden
                width={56}
                height={56}
                className="shrink-0"
                style={{ width: "clamp(44px, 14vw, 56px)", height: "clamp(44px, 14vw, 56px)" }}
            />
            <div
                className="flex h-[56px] flex-col justify-center"
                style={{
                    fontFamily: vc,
                    fontWeight: 700,
                    fontStyle: "normal",
                    fontSize: "clamp(16px, 4.2vw, 18px)",
                    lineHeight: "115%",
                    color: "#000000",
                }}
            >
                {isFigma ? (
                    <span>{t.labelBottom}</span>
                ) : (
                    <>
                        <span>{t.labelTop}</span>
                        <span>{t.labelBottom}</span>
                    </>
                )}
            </div>
        </div>
    );
}

export function GraphicDesigningCalicutToolsSection() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto box-border w-full max-w-[1440px] px-4 py-12 sm:px-6 lg:px-[60px] lg:py-[80px]">
                <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-[88px]">
                    {/* Left copy */}
                    <div className="flex w-full max-w-[420px] flex-col gap-3">
                        <h2
                            className="m-0 text-black"
                            style={{
                                fontFamily: vc,
                                fontWeight: 700,
                                fontStyle: "normal",
                                fontSize: "clamp(28px, 3.2vw, 45px)",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Master These
                            <br />
                            Essential Tools
                        </h2>
                        <p
                            className="m-0 max-w-[360px]"
                            style={{
                                fontFamily: vc,
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "20px",
                                lineHeight: "120%",
                                color: "#000000B2",
                            }}
                        >
                            <span className="hidden lg:inline">
                                Learn the industry&apos;s best design tools. In
                                <br />
                                this course, you&apos;ll get hands-on
                                <br />
                                experience with:
                            </span>
                            <span className="lg:hidden" style={{ fontSize: "clamp(14px, 4.2vw, 16px)" }}>
                                Learn the industry&apos;s best design tools. In this
                                <br />
                                course, you&apos;ll get hands-on experience with:
                            </span>
                        </p>
                    </div>

                    {/* Tools grid */}
                    <div className="w-full">
                        {/* Mobile/tablet: simple responsive grid. Desktop: exact 2-row layout with Figma centered between rows. */}
                        <div
                            className={[
                                "grid w-full max-w-[520px] mx-auto items-center lg:hidden",
                                // Mobile like screenshot: 2 columns for first 4, then Figma centered below
                                "grid-cols-2",
                                "gap-x-10 gap-y-8",
                                // 320px tuning
                                "max-[360px]:max-w-[304px] max-[360px]:gap-x-6 max-[360px]:gap-y-6",
                            ].join(" ")}
                        >
                            <ToolItem t={TOOLS[0]} />
                            <ToolItem t={TOOLS[1]} />
                            <ToolItem t={TOOLS[3]} />
                            <ToolItem t={TOOLS[4]} />
                            <ToolItem t={TOOLS[2]} className="col-span-2 justify-center" />
                        </div>

                        <div
                            className="hidden w-full items-center lg:grid"
                            style={{
                                gridTemplateColumns: "auto auto auto",
                                columnGap: 88,
                                rowGap: 34,
                            }}
                        >
                            <ToolItem t={TOOLS[0]} className="col-start-1 row-start-1" />
                            <ToolItem t={TOOLS[1]} className="col-start-2 row-start-1" />
                            <ToolItem t={TOOLS[3]} className="col-start-1 row-start-2" />
                            <ToolItem t={TOOLS[4]} className="col-start-2 row-start-2" />
                            {/* Figma: right column, centered between the two rows */}
                            <ToolItem t={TOOLS[2]} className="col-start-3 row-start-1 row-span-2 self-center" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

