"use client";

import { useState } from "react";
import Image from "next/image";

const FAQ_DATA = [
    {
        question: "Which course should I start with as a beginner?",
        answer: "Start with Applied AI for Beginners or Advanced Data Analytics with AI. They’re perfect entry points."
    },
    {
        question: "Do you offer placement support after course completion?",
        answer: "Yes, we provide assured placement assistance, including resume reviews, mock interviews, and access to our network of hiring partners. Plus, the projects you complete during your cohort sessions become part of your portfolio, giving you proof of skill when applying for jobs."
    },
    {
        question: "What is cohort-based learning, and how does it work here?",
        answer: "Cohort-based learning means you’ll learn together with a small group of peers. You’ll brainstorm, build projects, solve problems, and get direct mentor feedback."
    },
    {
        question: "Are these courses available online or offline?",
        answer: "Both options are available. You can join our online tech courses if you prefer flexible learning, or attend classes offline at our campus for a more immersive experience."
    },
    {
        question: "How do I showcase my work after the course?",
        answer: "You’ll build a portfolio with your projects and GitHub code, perfect for job interviews and freelance work."
    }
];

export function TechFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            className="w-full relative overflow-hidden flex flex-col items-center justify-center py-8 px-6 md:py-16 md:px-10 lg:p-0 lg:h-[862px] min-h-[400px] bg-transparent opacity-100"
        >
            {/* 2️⃣ Top Fade Overlay (zIndex 5) - Cinematic transition from previous section */}
            <div
                className="absolute inset-x-0 top-0 h-[150px] md:h-[200px] lg:h-[300px] z-[5] pointer-events-none"
                style={{
                    background: `linear-gradient(to bottom, #111111 0%, rgba(17, 17, 17, 0.7) 30%, rgba(17, 17, 17, 0.4) 60%, rgba(17, 17, 17, 0) 100%)`,
                }}
            />

            {/* 3️⃣ Dark Edge Fade / Vignette (zIndex 1) */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    background: `radial-gradient(circle at center, transparent 40%, #111111 85%)`,
                }}
            />

            {/* 3️⃣ Bottom Fade Overlay (zIndex 5) - Cinematic transition to next section */}
            <div
                className="absolute inset-x-0 bottom-0 h-[150px] md:h-[200px] lg:h-[300px] z-[5] pointer-events-none"
                style={{
                    background: `linear-gradient(to bottom, rgba(17, 17, 17, 0) 0%, rgba(17, 17, 17, 0.4) 40%, rgba(17, 17, 17, 0.7) 70%, #111111 100%)`,
                }}
            />

            {/* 1️⃣ Large Purple Glow - Desktop/Tablet Only */}
            <div
                className="hidden md:block absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1300px] blur-[316px] opacity-50 z-0 pointer-events-none"
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

            {/* 4️⃣ Cinematic Flare Gradient - Desktop/Tablet Only */}
            <div
                className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] blur-[150px] opacity-15 z-[6] pointer-events-none"
                style={{
                    background: `
                        linear-gradient(130.61deg, #FF5600 60.66%, #694AFF 80.7%),
                        linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))
                    `,
                }}
            />

            <div
                className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[19px] relative lg:px-[60px] z-10"
            >
                {/* Side Title */}
                <div className="w-full lg:w-1/3">
                    <h2 className="font-outfit font-normal text-[clamp(30px,4vw,56px)] leading-[110%] tracking-[-0.2px] text-[#FFFFFF] w-full max-w-[800px] flex flex-col text-center lg:text-left mx-auto lg:mx-0">
                        <span>Confused?</span>
                        <span>Curious? Let&apos;s clear it out</span>
                    </h2>
                </div>

                {/* Accordion Container */}
                <div
                    className="w-full max-w-[843.64px] h-auto flex flex-col gap-6 items-center lg:items-end"
                >
                    {FAQ_DATA.map((item, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[771px] rounded-[19.39px] border border-white/10 backdrop-blur-[10px] p-[24px] transition-all duration-300 ease-[ease] group hover:bg-[rgba(255,255,255,0.08)]"
                            style={{
                                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
                            }}
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between text-left transition-all duration-300"
                            >
                                <span className="font-outfit font-normal text-[14px] leading-[110%] tracking-normal text-[#FFFFFF]">
                                    {item.question}
                                </span>
                                <div
                                    className="w-[clamp(20px,4vw,33.48px)] h-[clamp(20px,4vw,33.48px)] rounded-full flex items-center justify-center transition-all duration-300 ease-[ease] shrink-0"
                                    style={{
                                        border: openIndex === index ? `clamp(0.3px, 0.1vw, 0.72px) solid #000000` : `clamp(0.3px, 0.1vw, 0.72px) solid #FFFFFF`,
                                        background: openIndex === index ? "#FFFFFF" : "#000000",
                                        transform: openIndex === index ? "rotate(0deg)" : "rotate(180deg)",
                                    }}
                                >
                                    <Image
                                        src="/photos/schools/tech/Arrow_FAQ.svg"
                                        alt="arrow"
                                        width={12}
                                        height={12}
                                        className={openIndex === index ? "brightness-0" : "brightness-0 invert"}
                                    />
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="font-outfit font-normal text-[12px] leading-[128%] tracking-normal text-[#FFFFFF]">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
