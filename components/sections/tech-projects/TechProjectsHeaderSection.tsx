"use client";

import Image from "next/image";

/**
 * Header: "Student Projects" + description + search bar row (30px below description).
 * Search bar is desktop-only via .tech-projects-toolbar.
 */
export function TechProjectsHeaderSection() {
    return (
        <div className="flex flex-col w-full">
            <section className="tech-courses-header-section tech-courses-header-mobile-only">
                <h1 className="tech-courses-hero-heading">Student Projects</h1>
                <p className="tech-courses-hero-desc">
                    Every project you see below started as an idea in class and grew into something worth showing off.
                </p>
            </section>

            {/* Mobile-only search bar row: appears directly under heading + description */}
            <div className="tech-projects-toolbar-mobile w-full flex justify-center">
                <div className="tech-projects-toolbar-mobile-inner" style={{ width: 345, maxWidth: "100%", height: 95, display: "flex", flexDirection: "column", gap: 15 }}>
                    {/* Search pill — gradient border via .tech-projects-toolbar-mobile-search */}
                    <div
                        className="tech-projects-toolbar-mobile-search"
                        style={{
                            width: 345,
                            height: 40,
                            paddingTop: 4.77,
                            paddingRight: 47.69,
                            paddingBottom: 4.77,
                            paddingLeft: 9.54,
                            borderRadius: 8.94,
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            boxSizing: "border-box",
                            background: "rgba(42, 42, 42, 0.95)",
                        }}
                    >
                        <div style={{ width: 20, height: 20, position: "relative", flexShrink: 0 }}>
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
                                fontSize: 16,
                                lineHeight: "100%",
                                color: "#9a9a9a",
                            }}
                        >
                            Search
                        </span>
                    </div>

                    {/* Filters row: All ▼  |  Latest | Oldest */}
                    <div
                        className="tech-projects-toolbar-mobile-filters"
                        style={{
                            width: 345,
                            height: 40,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 12,
                        }}
                    >
                        {/* All + arrow — gradient border via .tech-projects-toolbar-mobile-all */}
                        <div
                            className="tech-projects-toolbar-mobile-all"
                            style={{
                                width: 80,
                                height: 40,
                                paddingTop: 9.54,
                                paddingRight: 17.88,
                                paddingBottom: 9.54,
                                paddingLeft: 17.88,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 10,
                                borderRadius: 8.94,
                                boxSizing: "border-box",
                                background: "#D9D9D91A",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 14,
                                    lineHeight: "100%",
                                    color: "#FFFFFF",
                                }}
                            >
                                All
                            </span>
                            <div
                                style={{
                                    width: 17.92,
                                    height: 17.92,
                                    position: "relative",
                                }}
                            >
                                <Image
                                    src="/photos/Tech/iconamoon_arrow-up-2-light.svg"
                                    alt=""
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>

                        {/* Latest | Oldest pill — gradient border via .tech-projects-toolbar-mobile-sort */}
                        <div
                            className="tech-projects-toolbar-mobile-sort"
                            style={{
                                height: 40,
                                paddingTop: 9.54,
                                paddingBottom: 9.54,
                                paddingLeft: 20,
                                paddingRight: 20,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                                borderRadius: 8.94,
                                boxSizing: "border-box",
                                background: "#D9D9D91A",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 14,
                                    lineHeight: "100%",
                                    color: "#FFFFFF",
                                }}
                            >
                                Latest
                            </span>
                            <span
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 14,
                                    lineHeight: "100%",
                                    color: "rgba(255,255,255,0.5)",
                                }}
                            >
                                | Oldest
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop + tablet search bar row — 30px gap from description above */}
            <div
                className="tech-projects-toolbar"
                style={{
                    width: "100%",
                    maxWidth: 1440,
                    paddingLeft: "clamp(20px, 4vw, 60px)",
                    paddingRight: "clamp(20px, 4vw, 60px)",
                    display: "flex",
                    justifyContent: "center",
                    // marginTop: 10,
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: 1320,
                        height: 52,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div
                        className="tech-projects-toolbar-search"
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
                        className="tech-projects-toolbar-filters"
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
                        className="tech-projects-toolbar-sort"
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
