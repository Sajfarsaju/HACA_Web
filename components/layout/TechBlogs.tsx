"use client";

import Image from "next/image";

export function TechBlogs() {
    return (
        <section
            className="w-full relative overflow-hidden flex flex-col items-center justify-center bg-transparent min-h-[600px] py-[80px] px-[24px]"
        >
            {/* 1️⃣ Large Purple Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1300px] blur-[316px] opacity-50 z-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(
                            ellipse at center,
                            rgba(132, 0, 255, 0.95) 0%,
                            rgba(132, 0, 255, 0.75) 20%,
                            rgba(132, 0, 255, 0.55) 40%,
                            rgba(132, 0, 255, 0.35) 55%,
                            rgba(132, 0, 255, 0.15) 70%,
                            rgba(132, 0, 255, 0.05) 80%,
                            transparent 90%
                        )
                    `,
                }}
            />

            {/* 2️⃣ Top Fade */}
            <div
                className="absolute left-0 right-0 top-0 h-[200px] lg:h-[300px] z-[5] pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, #111111 0%, rgba(17,17,17,0.7) 30%, rgba(17,17,17,0.4) 60%, rgba(17,17,17,0) 100%)",
                }}
            />

            {/* 3️⃣ Vignette */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    background: "radial-gradient(circle at center, transparent 40%, #111111 85%)",
                }}
            />

            {/* 4️⃣ Bottom Fade */}
            <div
                className="absolute left-0 right-0 bottom-0 h-[200px] lg:h-[300px] z-[5] pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, rgba(17,17,17,0) 0%, rgba(17,17,17,0.4) 40%, rgba(17,17,17,0.7) 70%, #111111 100%)",
                }}
            />

            {/* 5️⃣ Cinematic Flare */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] blur-[150px] opacity-15 z-[6] pointer-events-none"
                style={{
                    background: `
                        linear-gradient(130.61deg, #FF5600 60.66%, #694AFF 80.7%),
                        linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))
                    `,
                }}
            />

            {/* Main Content Row */}
            <div
                className="z-10 w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[110px] relative px-2 lg:px-10"
            >
                {/* Left: Title + Arrows */}
                <div className="flex flex-col items-center lg:items-start gap-5 shrink-0">
                    <h2
                        className="font-outfit font-normal text-[clamp(36px,6vw,56px)] leading-none tracking-[-0.02em] text-[#FFFFFF] text-center lg:text-left"
                    >
                        <span className="block">Stories from</span>
                        <span className="block">the Other</span>
                        <span className="block">Side of</span>
                        <span className="block">&apos;Start&apos;</span>
                    </h2>

                    {/* Arrow Controls */}
                    <div className="flex gap-4">
                        <div
                            className="w-[33.48px] h-[33.48px] rounded-full border-[0.72px] border-[#FFFFFF] flex items-center justify-center bg-[#000000] shrink-0 rotate-90 opacity-30"
                        >
                            <Image src="/photos/schools/tech/Arrow_FAQ.svg" alt="arrow left" width={12} height={12} className="brightness-0 invert" />
                        </div>
                        <div
                            className="w-[33.48px] h-[33.48px] rounded-full border-[0.72px] border-[#FFFFFF] flex items-center justify-center bg-[#000000] shrink-0 -rotate-90"
                        >
                            <Image src="/photos/schools/tech/Arrow_FAQ.svg" alt="arrow right" width={12} height={12} className="brightness-0 invert" />
                        </div>
                    </div>
                </div>

                {/* Center: Feedback Card */}
                <div
                    className="w-full max-w-[447px] shrink-0 rounded-[22px] border border-transparent shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-[12px] flex items-center justify-center relative overflow-hidden"
                    style={{
                        aspectRatio: "447.75 / 485",
                        background: `
                            linear-gradient(#111111, #111111) padding-box,
                            linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%) border-box
                        `,
                        WebkitBackdropFilter: "blur(12px)",
                    }}
                >
                    {/* Glass Overlay */}
                    <div
                        className="absolute inset-0 rounded-[22px] -z-10"
                        style={{
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%)",
                        }}
                    />

                    {/* Quote Top Left */}
                    <div className="absolute top-[8%] left-[9%]">
                        <Image src="/photos/schools/tech/blogQuote.svg" alt="quote" width={48} height={48} />
                    </div>

                    {/* Testimonial Content */}
                    <div className="w-[85%] flex items-center justify-center">
                        <p className="font-outfit font-normal text-[clamp(14px,1.5vw,20px)] leading-[150%] tracking-normal text-[#FFFFFF]">
                            Tech school Made the best change in my life, where i learn coding from basics where i never knew how to do coding.
                            Mentors in the academy is good that they help in every part of the design.
                            Tech school Made the best change in my life, where i learn coding from basics where i never knew how to do coding.
                            Mentors in the academy is good that they help in every part of the design.
                        </p>
                    </div>
                </div>

                {/* Right: Person Image Placeholder */}
                <div
                    className="w-full max-w-[309px] lg:shrink-0 rounded-[22px] border border-white/5 overflow-hidden flex items-center justify-center bg-[#ffffff08]"
                    style={{
                        aspectRatio: "309 / 318",
                    }}
                >
                    <p className="text-[#333333] text-[14px]">Person Image Placeholder</p>
                    {/* <Image src="/photos/schools/tech/person-blog.png" alt="Success Story" fill className="object-cover" /> */}
                </div>
            </div>
        </section>
    );
}
