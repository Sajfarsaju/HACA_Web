"use client";

import Image from "next/image";

export function TechBlogs() {
    return (
        <section
            className="w-full relative overflow-hidden flex flex-col items-center justify-center"
            style={{
                backgroundColor: "transparent",
                minHeight: "600px",
                padding: "80px 24px",
            }}
        >
            {/* Main Content Row */}
            <div
                style={{ zIndex: 10 }}
                className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[110px] relative px-2 lg:px-10"
            >
                {/* Left: Title + Arrows */}
                <div className="flex flex-col items-center lg:items-start gap-5 flex-shrink-0">
                    <h2
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 400,
                            fontSize: "clamp(36px, 6vw, 56px)",
                            lineHeight: "100%",
                            letterSpacing: "-0.02em",
                            color: "#FFFFFF",
                        }}
                        className="text-center lg:text-left"
                    >
                        <span className="block">Stories from</span>
                        <span className="block">the Other</span>
                        <span className="block">Side of</span>
                        <span className="block">&apos;Start&apos;</span>
                    </h2>

                    {/* Arrow Controls */}
                    <div className="flex gap-4">
                        <div
                            style={{
                                width: "33.48px",
                                height: "33.48px",
                                borderRadius: "50%",
                                border: "0.72px solid #FFFFFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "#000000",
                                flexShrink: 0,
                                transform: "rotate(90deg)",
                                opacity: 0.3,
                            }}
                        >
                            <Image src="/photos/schools/tech/Arrow_FAQ.svg" alt="arrow left" width={12} height={12} className="brightness-0 invert" />
                        </div>
                        <div
                            style={{
                                width: "33.48px",
                                height: "33.48px",
                                borderRadius: "50%",
                                border: "0.72px solid #FFFFFF",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "#000000",
                                flexShrink: 0,
                                transform: "rotate(-90deg)",
                            }}
                        >
                            <Image src="/photos/schools/tech/Arrow_FAQ.svg" alt="arrow right" width={12} height={12} className="brightness-0 invert" />
                        </div>
                    </div>
                </div>

                {/* Center: Feedback Card */}
                <div
                    className="w-full max-w-[447px] flex-shrink-0"
                    style={{
                        aspectRatio: "447.75 / 485",
                        borderRadius: "22px",
                        background: `
                            linear-gradient(#111111, #111111) padding-box,
                            linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%) border-box
                        `,
                        border: "1px solid transparent",
                        boxShadow: "0px 4px 4px 0px #00000040",
                        backdropFilter: "blur(12px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Glass Overlay */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "22px",
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%)",
                            zIndex: -1,
                        }}
                    />

                    {/* Quote Top Left */}
                    <div style={{ position: "absolute", top: "8%", left: "9%" }}>
                        <Image src="/photos/schools/tech/blogQuote.svg" alt="quote" width={48} height={48} />
                    </div>

                    {/* Testimonial Content */}
                    <div
                        className="w-[85%] flex items-center justify-center"
                    >
                        <p
                            style={{
                                fontFamily: "var(--font-outfit)",
                                fontWeight: 400,
                                fontSize: "clamp(14px, 1.5vw, 20px)",
                                lineHeight: "150%",
                                letterSpacing: "0",
                                color: "#FFFFFF",
                            }}
                        >
                            Tech school Made the best change in my life, where i learn coding from basics where i never knew how to do coding.
                            Mentors in the academy is good that they help in every part of the design.
                            Tech school Made the best change in my life, where i learn coding from basics where i never knew how to do coding.
                            Mentors in the academy is good that they help in every part of the design.
                        </p>
                    </div>
                </div>

                {/* Right: Person Image Placeholder */}
                <div
                    className="w-full max-w-[309px] lg:flex-shrink-0"
                    style={{
                        aspectRatio: "309 / 318",
                        background: "rgba(255, 255, 255, 0.03)",
                        borderRadius: "22px",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <p style={{ color: "#333333", fontSize: "14px" }}>Person Image Placeholder</p>
                    {/* <Image src="/photos/schools/tech/person-blog.png" alt="Success Story" fill className="object-cover" /> */}
                </div>
            </div>
        </section>
    );
}
