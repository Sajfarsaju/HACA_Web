"use client";
import React from "react";
import Image from "next/image";

export function TechPreneur() {
    return (
        <section
            className="w-full flex flex-col items-center relative"
            style={{
                width: "100%",
                maxWidth: "1460px",
                height: "auto",
                minHeight: "708px",
                backgroundColor: "transparent",
                paddingTop: "clamp(60px, 10vw, 140px)",
                paddingBottom: "clamp(20px, 8vw, 120px)",
                paddingLeft: "clamp(20px, 4vw, 60px)",
                paddingRight: "clamp(20px, 4vw, 60px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "30px",
                margin: "0 auto",
                overflow: "hidden",
            }}
        >
            {/* Main Title */}
            <h2
                style={{
                    width: "100%",
                    maxWidth: "737px",
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 400,
                    fontSize: "clamp(32px, 6vw, 60px)",
                    lineHeight: "1.1",
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                    textAlign: "center",
                    verticalAlign: "middle",
                    margin: 0,
                    zIndex: 2,
                    position: "relative",
                }}
            >
                Your Name Could Be Next in Our Techpreneur List
            </h2>

            {/* SVG Button */}
            <div
                style={{
                    width: "246px",
                    height: "44px",
                    position: "relative",
                    marginTop: "32px",
                    cursor: "pointer",
                    zIndex: 2,
                    flexShrink: 0,
                }}
            >
                <Image
                    src="/photos/schools/tech/Button Container.svg"
                    alt="Join Techpreneur List"
                    width={246}
                    height={44}
                    className="object-contain"
                />
            </div>

            {/* Decorative Group SVG — absolutely positioned, fills bottom of section */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "520px",
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            >
                <Image
                    src="/photos/schools/tech/Group.svg"
                    alt=""
                    fill
                    className="object-contain object-top"
                />
            </div>
        </section>
    );
}
