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
            className={`relative rounded-[24px] overflow-hidden transition-all duration-500 ease-in-out shrink-0 ${isCenter
                ? "w-[clamp(260px,28vw,396px)] h-[clamp(330px,35vw,495px)] shadow-[0_0_40px_rgba(132,0,255,0.2)]"
                : "w-[clamp(220px,24vw,346px)] h-[clamp(290px,30vw,431px)]"
                }`}
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
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(70,20,200,0.25)_100%)] z-[1]" />

            <div
                className="absolute bottom-0 left-0 right-0 flex flex-col justify-center border-t border-[rgba(140,100,255,0.2)] backdrop-blur-[28px] z-[2]"
                style={{
                    height: `${boxHeight}px`,
                    gap: boxGap,
                    padding: boxPadding,
                    borderBottomLeftRadius: boxRadius,
                    borderBottomRightRadius: boxRadius,
                    background: "linear-gradient(135deg, rgba(180,120,255,0.18) 0%, rgba(132,80,255,0.12) 50%, rgba(100,50,200,0.08) 100%)",
                }}
            >
                <div className="flex flex-col gap-[8px] w-full">
                    <h4 className={`font-outfit font-normal leading-none text-[#FFFFFF] m-0 text-center ${isCenter ? "text-[26px]" : "text-[22px]"}`}>
                        {name}
                    </h4>
                    <p className={`font-outfit font-normal leading-none text-[#FFFFFF] m-0 text-center ${isCenter ? "text-[18px]" : "text-[16px]"}`}>
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
        className="w-[48px] h-[48px] rounded-full border border-white/20 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out bg-[#111111]/40 hover:bg-white/10"
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
        <section className="w-full flex flex-col items-center relative overflow-hidden h-auto min-h-[828px] bg-transparent pt-0 lg:pt-[20px] xl:pt-[60px] pb-[80px] px-[clamp(16px,4vw,60px)] gap-[60px]">

            {/* Local mask — tablet gradient; from 1024px: soft top fade so gradient closes before subtitle */}
            <style>{`
                .tech-mentors-gradient {
                    mask-image: radial-gradient(
                        ellipse 82% 78% at 50% 50%,
                        black 0%,
                        black 18%,
                        rgba(0, 0, 0, 0.85) 30%,
                        rgba(0, 0, 0, 0.55) 46%,
                        rgba(0, 0, 0, 0.32) 60%,
                        rgba(0, 0, 0, 0.14) 74%,
                        rgba(0, 0, 0, 0.05) 86%,
                        transparent 94%
                    );
                    -webkit-mask-image: radial-gradient(
                        ellipse 82% 78% at 50% 50%,
                        black 0%,
                        black 18%,
                        rgba(0, 0, 0, 0.85) 30%,
                        rgba(0, 0, 0, 0.55) 46%,
                        rgba(0, 0, 0, 0.32) 60%,
                        rgba(0, 0, 0, 0.14) 74%,
                        rgba(0, 0, 0, 0.05) 86%,
                        transparent 94%
                    );
                }

                /* From 1024px: gradient fully closed at top until subtitle, then soft transition down and up (softer bottom fade) */
                @media (min-width: 1024px) {
                    .tech-mentors-gradient {
                        mask-image:
                            /* top gate: keep gradient off the very top, start around subtitle */ 
                            linear-gradient(
                                to bottom,
                                transparent 0%,
                                transparent 22%,
                                rgba(0, 0, 0, 0.08) 28%,
                                rgba(0, 0, 0, 0.28) 35%,
                                rgba(0, 0, 0, 0.55) 42%,
                                rgba(0, 0, 0, 0.82) 48%,
                                black 55%
                            ),
                            /* bottom gate: soften fade-out before section bottom */
                            linear-gradient(
                                to top,
                                transparent 0%,
                                rgba(0, 0, 0, 0.06) 20%,
                                rgba(0, 0, 0, 0.24) 36%,
                                rgba(0, 0, 0, 0.52) 52%,
                                black 64%
                            ),
                            radial-gradient(
                                ellipse 82% 78% at 50% 50%,
                                black 0%,
                                black 18%,
                                rgba(0, 0, 0, 0.85) 30%,
                                rgba(0, 0, 0, 0.55) 46%,
                                rgba(0, 0, 0, 0.32) 60%,
                                rgba(0, 0, 0, 0.16) 74%,
                                rgba(0, 0, 0, 0.04) 86%,
                                transparent 96%
                            );
                        -webkit-mask-image:
                            linear-gradient(
                                to bottom,
                                transparent 0%,
                                transparent 22%,
                                rgba(0, 0, 0, 0.08) 28%,
                                rgba(0, 0, 0, 0.28) 35%,
                                rgba(0, 0, 0, 0.55) 42%,
                                rgba(0, 0, 0, 0.82) 48%,
                                black 55%
                            ),
                            linear-gradient(
                                to top,
                                transparent 0%,
                                rgba(0, 0, 0, 0.06) 20%,
                                rgba(0, 0, 0, 0.24) 36%,
                                rgba(0, 0, 0, 0.52) 52%,
                                black 64%
                            ),
                            radial-gradient(
                                ellipse 82% 78% at 50% 50%,
                                black 0%,
                                black 18%,
                                rgba(0, 0, 0, 0.85) 30%,
                                rgba(0, 0, 0, 0.55) 46%,
                                rgba(0, 0, 0, 0.32) 60%,
                                rgba(0, 0, 0, 0.16) 74%,
                                rgba(0, 0, 0, 0.04) 86%,
                                transparent 96%
                            );
                        mask-composite: intersect;
                        -webkit-mask-composite: source-in;
                    }
                }

                /* 4K (≥1920px): same as 1440px — subtitle to card bottom, reduced width, ends at card edges */
                @media (min-width: 1920px) {
                    .tech-mentors-gradient {
                        mask-image: linear-gradient(to bottom, transparent 0%, transparent 22%, rgba(0,0,0,0.08) 28%, rgba(0,0,0,0.28) 35%, rgba(0,0,0,0.55) 42%, black 50%),
                            linear-gradient(to top, transparent 0%, rgba(0,0,0,0.15) 18%, rgba(0,0,0,0.45) 32%, black 48%),
                            radial-gradient(ellipse 68% 65% at 50% 50%, black 0%, black 18%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.55) 46%, rgba(0,0,0,0.32) 60%, rgba(0,0,0,0.12) 74%, transparent 90%);
                        -webkit-mask-image: linear-gradient(to bottom, transparent 0%, transparent 22%, rgba(0,0,0,0.08) 28%, rgba(0,0,0,0.28) 35%, rgba(0,0,0,0.55) 42%, black 50%),
                            linear-gradient(to top, transparent 0%, rgba(0,0,0,0.15) 18%, rgba(0,0,0,0.45) 32%, black 48%),
                            radial-gradient(ellipse 68% 65% at 50% 50%, black 0%, black 18%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.55) 46%, rgba(0,0,0,0.32) 60%, rgba(0,0,0,0.12) 74%, transparent 90%);
                        mask-composite: intersect;
                        -webkit-mask-composite: source-in;
                    }
                }
            `}</style>

            {/* mentorsGradient.svg — mobile: taller; tablet/lg/xl: subtitle→cards; 4K: same as 1440px, constrained */}
            <div
                className="tech-mentors-gradient absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[36%] md:top-[40%] w-[120%] min-h-[900px] md:min-h-[820px] min-[1920px]:max-w-[1400px] min-[1920px]:w-[85%] min-[1920px]:min-h-[750px] z-0 pointer-events-none"
                style={{
                    aspectRatio: "1440 / 1203",
                }}
            >
                <Image
                    src="/photos/Tech/mentorsGradient.svg"
                    alt=""
                    fill
                    className="object-contain object-center"
                    sizes="100vw"
                    aria-hidden
                />
            </div>

            {/* ── Foreground Content ─────────────────────────────────────────── */}
            <div className="relative z-10 flex flex-col items-center gap-[60px] w-full">
                {/* Header Content */}
                <div className="flex flex-col items-center gap-6 text-center max-w-[938px]">
                    <h2 className="font-outfit font-normal text-[clamp(32px,5vw,60px)] leading-[62px] tracking-[-0.02em] text-[#FFFFFF] m-0 capitalize">
                        Your Mentors
                    </h2>
                    <p className="font-outfit font-normal text-[clamp(16px,2vw,24px)] leading-[33.6px] tracking-[-0.2px] text-[#A7A7A7] m-0 max-w-[800px]">
                        You’ll learn from people who’ve built products, written code, and solved real problems.
                    </p>
                </div>

                {/* Staggered Mentors Cards */}
                <div className="w-full max-w-[1164px] flex flex-row items-center justify-center gap-[clamp(12px,2.5vw,32px)] flex-nowrap">
                    {/* Left Card */}
                    <div className="self-center">
                        <MentorCard
                            imgSrc="/photos/schools/tech/Testimonial Card1.png"
                            name="Muhammad Sajfar"
                            role="MERN Stack Mentor & Developer"
                        />
                    </div>

                    {/* Center Highlighted Card */}
                    <div className="self-center">
                        <MentorCard
                            imgSrc="/photos/schools/tech/Testimonial Card2.png"
                            name="Mohammed Nazil K"
                            role="Tech Researcher & Mentor"
                            isCenter={true}
                        />
                    </div>

                    {/* Right Card */}
                    <div className="self-center max-md:self-center">
                        <MentorCard
                            imgSrc="/photos/schools/tech/Testimonial Card3.png"
                            name="Radhika E K"
                            role="Python Mentor"
                        />
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-[16px] mt-[12px]">
                    <ArrowIcon direction="left" />
                    <ArrowIcon direction="right" />
                </div>
            </div>
        </section>
    );
}
