"use client";

import Image from "next/image";
import { TECH_PROJECTS_HERO_DESC } from "./copy";

type ProjectCategory = "all" | "web-application" | "automation";
type SortOrder = "latest" | "oldest";

interface TechProjectsHeaderSectionProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
    category: ProjectCategory;
    onCategoryChange: (value: ProjectCategory) => void;
    sortOrder: SortOrder;
    onSortOrderChange: (value: SortOrder) => void;
}

export function TechProjectsHeaderSection({
    searchQuery,
    onSearchChange,
    category,
    onCategoryChange,
    sortOrder,
    onSortOrderChange,
}: TechProjectsHeaderSectionProps) {
    const currentCategoryLabel =
        category === "all" ? "All" : category === "web-application" ? "Web Application" : "Automation";

    const cycleCategory = () => {
        if (category === "all") onCategoryChange("web-application");
        else if (category === "web-application") onCategoryChange("automation");
        else onCategoryChange("all");
    };

    return (
        <div className="flex flex-col w-full">
            {/* Mobile heading + description */}
            <section className="tech-courses-header-section tech-courses-header-mobile-only">
                <h1 className="tech-courses-hero-heading">Student Projects</h1>
                <p className="tech-courses-hero-desc">
                    {TECH_PROJECTS_HERO_DESC}
                </p>
            </section>

            {/* Mobile-only search + filters */}
            <div className="tech-projects-toolbar-mobile w-full flex justify-center">
                <div
                    className="tech-projects-toolbar-mobile-inner"
                    style={{ width: 345, maxWidth: "100%", height: 95, display: "flex", flexDirection: "column", gap: 15 }}
                >
                    {/* Search input — mobile */}
                    <div
                        className="tech-projects-toolbar-mobile-search"
                        style={{
                            width: 345,
                            height: 40,
                            paddingTop: 4.77,
                            paddingRight: 9.54,
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
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder="Search projects"
                            style={{
                                flex: 1,
                                border: "none",
                                outline: "none",
                                background: "transparent",
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 400,
                                fontSize: 14,
                                lineHeight: "100%",
                                color: "#FFFFFF",
                            }}
                        />
                    </div>

                    {/* Filters row: category + sort */}
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
                        {/* Category pill — cycles between All / Web Application / Automation */}
                        <button
                            type="button"
                            className="tech-projects-toolbar-mobile-all"
                            onClick={cycleCategory}
                            style={{
                                width: 120,
                                height: 40,
                                padding: "9.54px 17.88px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 10,
                                borderRadius: 8.94,
                                boxSizing: "border-box",
                                background: "#D9D9D91A",
                                border: "none",
                                cursor: "pointer",
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
                                {currentCategoryLabel}
                            </span>
                            <div style={{ width: 17.92, height: 17.92, position: "relative" }}>
                                <Image
                                    src="/photos/Tech/iconamoon_arrow-up-2-light.svg"
                                    alt=""
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </button>

                        {/* Sort pill: Latest / Oldest */}
                        <div
                            className="tech-projects-toolbar-mobile-sort"
                            style={{
                                height: 40,
                                padding: "9.54px 20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                                borderRadius: 8.94,
                                boxSizing: "border-box",
                                background: "#D9D9D91A",
                            }}
                        >
                            <button
                                type="button"
                                onClick={() => onSortOrderChange("latest")}
                                style={{
                                    border: "none",
                                    background: "transparent",
                                    padding: 0,
                                    cursor: "pointer",
                                    fontFamily: "'Outfit', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 14,
                                    lineHeight: "100%",
                                    color: sortOrder === "latest" ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                                }}
                            >
                                Latest
                            </button>
                            <span
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 14,
                                    lineHeight: "100%",
                                    color: "rgba(255,255,255,0.5)",
                                }}
                            >
                                |
                            </span>
                            <button
                                type="button"
                                onClick={() => onSortOrderChange("oldest")}
                                style={{
                                    border: "none",
                                    background: "transparent",
                                    padding: 0,
                                    cursor: "pointer",
                                    fontFamily: "'Outfit', sans-serif",
                                    fontWeight: 400,
                                    fontSize: 14,
                                    lineHeight: "100%",
                                    color: sortOrder === "oldest" ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                                }}
                            >
                                Oldest
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop + tablet toolbar */}
            <div
                className="tech-projects-toolbar"
                style={{
                    width: "100%",
                    maxWidth: 1440,
                    paddingLeft: "clamp(20px, 4vw, 60px)",
                    paddingRight: "clamp(20px, 4vw, 60px)",
                    display: "flex",
                    justifyContent: "center",
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
                    {/* Desktop search */}
                    <div
                        className="tech-projects-toolbar-search"
                        style={{
                            width: 260,
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
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder="Search projects"
                            style={{
                                flex: 1,
                                border: "none",
                                outline: "none",
                                background: "transparent",
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: "100%",
                                color: "#FFFFFF",
                            }}
                        />
                    </div>

                    {/* Category filters */}
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
                        <button
                            type="button"
                            onClick={() => onCategoryChange("all")}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 400,
                                fontSize: 18,
                                lineHeight: "100%",
                                textAlign: "left",
                                background: "transparent",
                                color: category === "all" ? "#FFFFFF" : "#A7A7A7",
                                padding: "4px 8px",
                                height: 30,
                                boxSizing: "border-box",
                                flexShrink: 0,
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            All
                        </button>
                        <div style={{ width: 1, height: 22, position: "relative", flexShrink: 0, display: "flex", alignItems: "center" }}>
                            <Image src="/photos/Tech/Vector 4.svg" alt="" fill style={{ objectFit: "cover" }} />
                        </div>
                        <button
                            type="button"
                            onClick={() => onCategoryChange("web-application")}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 400,
                                fontSize: 18,
                                lineHeight: "100%",
                                textAlign: "center",
                                color: category === "web-application" ? "#FFFFFF" : "#A7A7A7",
                                padding: "4px 8px",
                                whiteSpace: "nowrap",
                                height: 30,
                                boxSizing: "border-box",
                                flexShrink: 0,
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                            }}
                        >
                            Web Application
                        </button>
                        <div style={{ width: 1, height: 22, position: "relative", flexShrink: 0, display: "flex", alignItems: "center" }}>
                            <Image src="/photos/Tech/Vector 4.svg" alt="" fill style={{ objectFit: "cover" }} />
                        </div>
                        <button
                            type="button"
                            onClick={() => onCategoryChange("automation")}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 400,
                                fontSize: 18,
                                lineHeight: "100%",
                                textAlign: "left",
                                color: category === "automation" ? "#FFFFFF" : "#A7A7A7",
                                padding: "4px 8px",
                                height: 30,
                                boxSizing: "border-box",
                                flexShrink: 0,
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                            }}
                        >
                            Automation
                        </button>
                    </div>

                    {/* Sort: Latest / Oldest */}
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
                            gap: 24,
                            background: "#D9D9D91A",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            boxShadow: "0px 4px 12px 0px #00000040",
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => onSortOrderChange("latest")}
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 400,
                                fontSize: 20,
                                lineHeight: "100%",
                                textAlign: "center",
                                color: sortOrder === "latest" ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                                padding: "0 8px",
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                            }}
                        >
                            Latest
                        </button>
                        <div style={{ width: 1, height: 22, position: "relative", flexShrink: 0 }}>
                            <Image src="/photos/Tech/Vector 4.svg" alt="" fill style={{ objectFit: "cover" }} />
                        </div>
                        <button
                            type="button"
                            onClick={() => onSortOrderChange("oldest")}
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 400,
                                fontSize: 20,
                                lineHeight: "100%",
                                textAlign: "center",
                                color: sortOrder === "oldest" ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                                padding: "0 8px",
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                            }}
                        >
                            Oldest
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

