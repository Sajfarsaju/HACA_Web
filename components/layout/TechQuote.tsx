"use client";

/**
 * Centered layout:
 * The three words are wrapped in a container that has the exact Figma width (1050.22px).
 * This container is centered within the section.
 * The words scale proportionally using vw-based scaling relative to the original 1440px design.
 */
export function TechQuote() {
    return (
        <section
            style={{
                backgroundColor: "transparent",
                width: "100%",
                opacity: 1,
                position: "relative",
                overflow: "visible",
            }}
            className="flex flex-col items-center justify-center min-h-[120px] lg:h-[330.25px] py-6 lg:py-[60px] px-6"
        >
            {/* 
                Main Quote Container:
                Centers the staggered words as a single unit.
            */}
            <div
                style={{
                    width: "clamp(300px, 72.93vw, 1050.22px)",
                    position: "relative",
                    flexShrink: 0,
                }}
                className="h-[120px] md:h-[160px] lg:h-[210.25px]"
            >
                {/* "Be" — Regular 54px @ 1440px */}
                <span
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 400,
                        fontSize: "clamp(18px, 3.75vw, 54px)",
                        lineHeight: "130%",
                        letterSpacing: "0%",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                    }}
                >
                    Be
                </span>

                {/* "Technically" — SemiBold 135px @ 1440px */}
                <span
                    style={{
                        position: "absolute",
                        top: "clamp(20px, 2.45vw, 35.25px)",
                        left: 0,
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 600,
                        fontSize: "clamp(42px, 9.375vw, 135px)",
                        lineHeight: "130%",
                        letterSpacing: "0%",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                    }}
                >
                    Technically
                </span>

                {/* "Awesome" — SemiBold 90px @ 1440px */}
                <span
                    style={{
                        position: "absolute",
                        top: "clamp(4px, 0.42vw, 6px)",
                        right: 0,
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 600,
                        fontSize: "clamp(28px, 6.25vw, 90px)",
                        lineHeight: "130%",
                        letterSpacing: "0%",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                    }}
                >
                    Awesome
                </span>
            </div>
        </section>
    );
}
