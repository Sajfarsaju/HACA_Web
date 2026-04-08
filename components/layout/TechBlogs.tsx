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
                maskImage: "linear-gradient(to bottom, transparent 0%, black 150px, black calc(100% - 150px), transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 150px, black calc(100% - 150px), transparent 100%)",
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
                        {/* Desktop: 4 lines */}
                        <span className="hidden lg:block">Stories from</span>
                        <span className="hidden lg:block">the Other</span>
                        <span className="hidden lg:block">Side of</span>
                        <span className="hidden lg:block">&apos;Start&apos;</span>
                        {/* Mobile: 2 lines */}
                        <span className="block lg:hidden leading-[1.1] max-w-[343px] mx-auto min-h-[66px]">
                            Stories from the other<br />side of &apos;start&apos;
                        </span>
                    </h2>

                    {/* Arrow Controls (Desktop Only) */}
                    <div className="hidden lg:flex gap-4">
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

                {/* Center: Feedback Card with Mobile Gradient behind it */}
                <div className="flex-shrink-0 relative max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-[20px]">
                    {/* Background Gradient (All screens) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-[250%] max-w-[1400px] aspect-[1/1] min-w-[800px] opacity-90 transition-all duration-700 ease-in-out">
                        <Image src="/photos/schools/tech/Group 54.svg" alt="" fill className="object-contain object-center transition-all duration-700" />
                    </div>

                    <div
                        className="w-full max-w-[343px] h-[369.16px] rounded-[17.57px] lg:w-full lg:max-w-[447px] lg:h-auto lg:aspect-[447.75/485] lg:rounded-[22px] flex-shrink-0 relative z-10"
                        style={{
                            background: "rgba(255, 255, 255, 0.08)",
                            boxShadow: "0px 4px 4px 0px #00000040",
                            backdropFilter: "blur(24px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        {/* Gradient Border Ring */}
                        <div
                            className="rounded-[17.57px] lg:rounded-[22px]"
                            style={{
                                position: "absolute",
                                inset: 0,
                                padding: "1px",
                                background: "linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%)",
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                                pointerEvents: "none",
                                zIndex: 5,
                            }}
                        />

                        {/* Glass Overlay (subtle sheen) */}
                        <div
                            className="rounded-[17.57px] lg:rounded-[22px]"
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%)",
                                zIndex: -1,
                            }}
                        />

                        {/* Quote Top Left */}
                        <div style={{ position: "absolute", top: "8%", left: "9%" }}>
                            <Image src="/photos/schools/tech/blogQuote.svg" alt="quote" width={48} height={48} />
                        </div>

                        {/* Desktop: centered testimonial text */}
                        <div className="hidden lg:flex w-[85%] items-center justify-center">
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
                            </p>
                        </div>

                        {/* Mobile: flex-col layout with guaranteed gaps */}
                        <div
                            className="lg:hidden absolute inset-0 flex flex-col px-[8%]"
                            style={{
                                paddingTop: "88px",
                                paddingBottom: "16px",
                                justifyContent: "space-between",
                            }}
                        >
                            {/* Description */}
                            <p
                                style={{
                                    fontFamily: "var(--font-outfit)",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "150%",
                                    letterSpacing: "0",
                                    color: "#FFFFFF",
                                }}
                            >
                                Tech school Made the best change in my life, where i learn coding from basics where i never knew how to do coding.
                                Mentors in the academy is good that they help in every part of the design.
                                Tech school Made the best change in my life, where i learn coding from basics where i never knew how to do coding.
                            </p>

                            {/* Avatar — always 10px below description, 16px from card bottom */}
                            <div
                                className="flex items-center shrink-0"
                                style={{ gap: "10px", marginTop: "10px" }}
                            >
                                <div className="w-[40px] h-[40px] rounded-full overflow-hidden relative shrink-0 bg-white/10">
                                    {/* <Image src="/photos/schools/tech/person-blog.png" alt="Person" fill className="object-cover" /> */}
                                </div>
                                <div className="flex flex-col justify-center gap-1">
                                    <span className="font-outfit text-white text-[14px] leading-none font-medium">Person Name</span>
                                    <span className="font-outfit text-[#A7A7A7] text-[12px] leading-none">Subtitle</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Arrow Controls (Mobile Only - below card) */}
                    <div className="flex lg:hidden gap-4 z-10">
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

                {/* Right: Person Image Placeholder (Desktop Only) */}
                <div
                    className="hidden lg:flex w-full max-w-[309px] lg:flex-shrink-0 items-center justify-center"
                    style={{
                        aspectRatio: "309 / 318",
                        background: "rgba(255, 255, 255, 0.03)",
                        borderRadius: "22px",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        overflow: "hidden",
                    }}
                >
                    <p style={{ color: "#333333", fontSize: "14px" }}>Person Image Placeholder</p>
                    {/* <Image src="/photos/schools/tech/person-blog.png" alt="Success Story" fill className="object-cover" /> */}
                </div>
            </div>
        </section>
    );
}
