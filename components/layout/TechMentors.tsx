"use client";
import React from "react";
import Image from "next/image";

// ── Mentors Card ──────────────────────────────────────────────────────────
function MentorCard({
    imgSrc,
    name,
    role,
    isCenter,
}: {
    imgSrc: string;
    name: string;
    role: string;
    isCenter?: boolean;
}) {
    // Responsive Figma-proportioned dimensions
    const cardWidth = isCenter ? "clamp(260px, 28vw, 396px)" : "clamp(220px, 24vw, 346px)";
    const cardHeight = isCenter ? "clamp(330px, 35vw, 495px)" : "clamp(290px, 30vw, 431px)";

    // Naming box specs
    const boxHeight = 109;
    const boxPadding = "20px 24px";
    const boxGap = "8px";
    const boxBorderWidth = "0.89px";
    const boxRadius = "19.58px";

    return (
        <div
            style={{
                width: cardWidth,
                height: cardHeight,
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                transition: "all 0.5s ease",
                flexShrink: 0,
                boxShadow: isCenter ? "0 0 40px rgba(132, 0, 255, 0.2)" : "none",
            }}
        >
            {/* Gradient border ring — same as WhyChoose cards */}
            <div
                style={{
                    position: "absolute", inset: 0, borderRadius: "24px",
                    padding: "1px",
                    background: `linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), linear-gradient(135deg, rgba(255,86,0,${isCenter ? "0.6" : "0.3"}) 0%, rgba(132,0,255,${isCenter ? "0.8" : "0.45"}) 100%)`,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor", maskComposite: "exclude",
                    pointerEvents: "none", zIndex: 3,
                    transition: "all 0.5s ease",
                }}
            />
            <Image
                src={imgSrc}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 30vw"
            />
            {/* 
                Naming Box / Information Area 
                Rendered for all cards with a vibrant purple cinematic glass effect
            */}
            {/* Overlay Gradient for Text Readability — soft blue-purple fade */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 45%, rgba(70, 20, 200, 0.25) 100%)",
                    zIndex: 1,
                }}
            />

            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: `${boxHeight}px`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: boxGap,
                    padding: boxPadding,
                    borderBottomLeftRadius: boxRadius,
                    borderBottomRightRadius: boxRadius,
                    borderTop: `${boxBorderWidth} solid rgba(140, 100, 255, 0.2)`,
                    backdropFilter: "blur(28px)",
                    zIndex: 2,
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                    <h4
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 400,
                            fontSize: isCenter ? "26px" : "22px",
                            lineHeight: "100%",
                            color: "#FFFFFF",
                            margin: 0,
                            textAlign: "center",
                        }}
                    >
                        {name}
                    </h4>
                    <p
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 400,
                            fontSize: isCenter ? "18px" : "16px",
                            lineHeight: "100%",
                            color: "#FFFFFF",
                            margin: 0,
                            textAlign: "center",
                        }}
                    >
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
}

// ── Arrow Icon Component ─────────────────────────────────────────────────
const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
    <div
        style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            background: "rgba(17, 17, 17, 0.4)",
        }}
        className="hover:bg-white/10"
    >
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: direction === "left" ? "rotate(0deg)" : "rotate(180deg)" }}
        >
            <path d="M15 18l-6-6 6-6" />
        </svg>
    </div>
);

// ── Main TechMentors Component ──────────────────────────────────────────
export function TechMentors() {
    return (
        <section
            className="w-full flex flex-col items-center relative overflow-hidden"
            style={{
                height: "auto",
                minHeight: "828px",
                backgroundColor: "transparent",
                paddingTop: "clamp(20px, 10vw, 140px)",
                paddingBottom: "80px",
                paddingLeft: "clamp(16px, 4vw, 60px)",
                paddingRight: "clamp(16px, 4vw, 60px)",
                gap: "60px",
            }}
        >


            {/* ── Foreground Content ─────────────────────────────────────────── */}
            <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: "60px", width: "100%" }}>
                {/* Header Content */}
                <div className="flex flex-col items-center gap-6 text-center max-w-[938px]">
                    <h2
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 400,
                            fontSize: "clamp(32px, 5vw, 60px)",
                            lineHeight: "62px",
                            letterSpacing: "-0.02em",
                            color: "#FFFFFF",
                            margin: 0,
                            textTransform: "capitalize",
                        }}
                    >
                        Your Mentors
                    </h2>
                    <p
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 400,
                            fontSize: "clamp(16px, 2vw, 24px)",
                            lineHeight: "33.6px",
                            letterSpacing: "-0.2px",
                            color: "#A7A7A7",
                            margin: 0,
                            maxWidth: "800px",
                        }}
                    >
                        You’ll learn from people who’ve built products, written code, and solved real problems.
                    </p>
                </div>

                {/* Staggered Mentors Cards */}
                <div
                    style={{
                        width: "100%",
                        maxWidth: "1164px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "clamp(12px, 2.5vw, 32px)",
                        flexWrap: "nowrap",
                    }}
                >
                    {/* Left Card */}
                    <div style={{ alignSelf: "center" }}>
                        <MentorCard
                            imgSrc="/photos/schools/tech/Testimonial Card1.png"
                            name="Muhammad Sajfar"
                            role="MERN Stack Mentor & Developer"
                        />
                    </div>

                    {/* Center Highlighted Card */}
                    <div style={{ alignSelf: "center" }}>
                        <MentorCard
                            imgSrc="/photos/schools/tech/Testimonial Card2.png"
                            name="Mohammed Nazil K"
                            role="Tech Researcher & Mentor"
                            isCenter={true}
                        />
                    </div>

                    {/* Right Card */}
                    <div style={{ alignSelf: "center" }} className="max-md:self-center">
                        <MentorCard
                            imgSrc="/photos/schools/tech/Testimonial Card3.png"
                            name="Radhika E K"
                            role="Python Mentor"
                        />
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div style={{ display: "flex", gap: "16px", marginTop: "12px" }}>
                    <ArrowIcon direction="left" />
                    <ArrowIcon direction="right" />
                </div>
            </div>
        </section>
    );
}
