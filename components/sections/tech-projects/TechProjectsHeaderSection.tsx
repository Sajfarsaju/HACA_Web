"use client";

import Image from "next/image";

/**
 * Header: "Student Projects" + description + search bar row (30px below description).
 * Search bar is desktop-only via .tech-projects-toolbar.
 */
export function TechProjectsHeaderSection() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 30,
                width: "100%",
            }}
        >
            <section className="tech-courses-header-section tech-courses-header-mobile-only">
                <h1 className="tech-courses-hero-heading">Student Projects</h1>
                <p className="tech-courses-hero-desc">
                    Every project you see below started as an idea in class and grew into something worth showing off.
                </p>
            </section>

            {/* Desktop-only search bar row — 30px gap from description above */}
            <div
                className="tech-projects-toolbar"
                style={{
                    width: "100%",
                    maxWidth: 1440,
                    paddingLeft: 60,
                    paddingRight: 60,
                    display: "flex",
                    justifyContent: "center",
                    // marginTop: 10,
                }}
            >
                <div
                    style={{
                        width: 1320,
                        height: 52,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            width: 201,
                            height: 52,
                            borderRadius: 12,
                            paddingLeft: 16,
                            paddingRight: 16,
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            background: "rgba(42, 42, 42, 0.95)",
                            border: "1px solid rgba(255, 86, 0, 0.5)",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            boxSizing: "border-box",
                        }}
                    >
                        <div style={{ width: 24, height: 24, position: "relative", flexShrink: 0 }}>
                            <Image
                                src="/photos/Tech/material-symbols_search.svg"
                                alt=""
                                fill
                                style={{ objectFit: "contain", opacity: 0.8 }}
                            />
                        </div>
                        <span
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 400,
                                fontSize: 20,
                                lineHeight: "100%",
                                color: "#9a9a9a",
                            }}
                        >
                            Search
                        </span>
                    </div>

                    <div
                        style={{
                            width: 542,
                            height: 52,
                            borderRadius: 15,
                            paddingTop: 16,
                            paddingRight: 30,
                            paddingBottom: 16,
                            paddingLeft: 30,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 12,
                            background: "#D9D9D91A",
                            border: "1px solid rgba(255, 86, 0, 0.5)",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            boxShadow: "0px 4px 12px 0px #00000040",
                            boxSizing: "border-box",
                        }}
                    >
                        <span
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 400,
                                fontSize: 24,
                                lineHeight: "100%",
                                textAlign: "left",
                                background: "transparent",
                                color: "#FFFFFF",
                                padding: "4px 12px",
                                height: 30,
                                boxSizing: "border-box",
                                flexShrink: 0,
                            }}
                        >
                            All
                        </span>
                        <div style={{ width: 1, height: 22, position: "relative", flexShrink: 0, display: "flex", alignItems: "center" }}>
                            <Image src="/photos/Tech/Vector 4.svg" alt="" fill style={{ objectFit: "cover" }} />
                        </div>
                        <span
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 400,
                                fontSize: 24,
                                lineHeight: "100%",
                                textAlign: "center",
                                color: "#A7A7A7",
                                padding: "4px 12px",
                                whiteSpace: "nowrap",
                                height: 30,
                                boxSizing: "border-box",
                                flexShrink: 0,
                            }}
                        >
                            Web Application
                        </span>
                        <div style={{ width: 1, height: 22, position: "relative", flexShrink: 0, display: "flex", alignItems: "center" }}>
                            <Image src="/photos/Tech/Vector 4.svg" alt="" fill style={{ objectFit: "cover" }} />
                        </div>
                        <span
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 400,
                                fontSize: 24,
                                lineHeight: "100%",
                                textAlign: "left",
                                color: "#A7A7A7",
                                padding: "4px 12px",
                                height: 30,
                                boxSizing: "border-box",
                                flexShrink: 0,
                            }}
                        >
                            Automation
                        </span>
                    </div>

                    <div
                        style={{
                            minWidth: 200,
                            height: 52,
                            borderRadius: 15,
                            paddingTop: 16,
                            paddingRight: 30,
                            paddingBottom: 16,
                            paddingLeft: 30,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 38,
                            background: "#D9D9D91A",
                            border: "1px solid rgba(255, 86, 0, 0.5)",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            boxShadow: "0px 4px 12px 0px #00000040",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 400,
                                fontSize: 24,
                                lineHeight: "100%",
                                textAlign: "center",
                                color: "#FFFFFF",
                                padding: "0 8px",
                            }}
                        >
                            Latest
                        </span>
                        <div style={{ width: 1, height: 22, position: "relative", flexShrink: 0 }}>
                            <Image src="/photos/Tech/Vector 4.svg" alt="" fill style={{ objectFit: "cover" }} />
                        </div>
                        <span
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 400,
                                fontSize: 24,
                                lineHeight: "100%",
                                textAlign: "center",
                                color: "rgba(255,255,255,0.5)",
                                padding: "0 8px",
                            }}
                        >
                            Oldest
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
