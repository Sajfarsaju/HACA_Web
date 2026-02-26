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
            style={{
                backgroundColor: "transparent",
                opacity: 1,
            }}
            className="w-full relative overflow-hidden flex flex-col items-center justify-center py-8 px-6 md:py-16 md:px-10 lg:p-0 lg:h-[862px] min-h-[400px]"
        >
            {/* 2️⃣ Top Fade Overlay (zIndex 5) - Cinematic transition from previous section */}
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    background: `
                        linear-gradient(
                            to bottom,
                            #111111 0%,
                            rgba(17, 17, 17, 0.7) 30%,
                            rgba(17, 17, 17, 0.4) 60%,
                            rgba(17, 17, 17, 0) 100%
                        )
                    `,
                    zIndex: 5,
                    pointerEvents: "none",
                }}
                className="h-[150px] md:h-[200px] lg:h-[300px]"
            />

            {/* 3️⃣ Dark Edge Fade / Vignette (zIndex 1) */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `
                        radial-gradient(circle at center, transparent 40%, #111111 85%)
                    `,
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            />

            {/* 3️⃣ Bottom Fade Overlay (zIndex 5) - Cinematic transition to next section */}
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        linear-gradient(
                            to bottom,
                            rgba(17, 17, 17, 0) 0%,
                            rgba(17, 17, 17, 0.4) 40%,
                            rgba(17, 17, 17, 0.7) 70%,
                            #111111 100%
                        )
                    `,
                    zIndex: 5,
                    pointerEvents: "none",
                }}
                className="h-[150px] md:h-[200px] lg:h-[300px]"
            />

            {/* 1️⃣ Large Purple Glow - Desktop/Tablet Only */}
            <div
                style={{
                    position: "absolute",
                    top: "65%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "1800px",
                    height: "1300px",
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
                    filter: "blur(316px)",
                    opacity: 0.5,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
                className="hidden md:block"
            />

            {/* 4️⃣ Cinematic Flare Gradient - Desktop/Tablet Only */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "400px",
                    height: "300px",
                    background: `
                        linear-gradient(130.61deg, #FF5600 60.66%, #694AFF 80.7%),
                        linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))
                    `,
                    filter: "blur(150px)",
                    opacity: 0.15,
                    zIndex: 6,
                    pointerEvents: "none",
                }}
                className="hidden md:block"
            />

            {/* 📱 Mobile FAQ Gradients - Centered behind accordion */}
            <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-40">
                    <Image
                        src="/photos/schools/tech/FaqMobileGradientMain.svg"
                        alt="FAQ Mobile Glow Main"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-30">
                    <Image
                        src="/photos/schools/tech/FaqMobileGradientSub.svg"
                        alt="FAQ Mobile Glow Sub"
                        fill
                        className="object-contain"
                    />
                </div>
                {/* 🎯 Mobile Center Flare */}
                {/* <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]"
                    style={{
                        background: `
                            linear-gradient(130.61deg, #FF5600 37.66%, #694AFF 80.7%),
                            linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))
                        `,
                        filter: "blur(100px)",
                        opacity: 0.2,
                    }}
                /> */}
            </div>

            <div
                style={{ zIndex: 10 }}
                className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-[19px] relative lg:px-[60px]"
            >
                {/* Side Title */}
                <div className="w-full lg:w-1/3">
                    <h2
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 400,
                            fontSize: "clamp(30px, 4vw, 56px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.2px",
                            color: "#FFFFFF",
                            width: "100%",
                            maxWidth: "800px",
                            display: "flex",
                            flexDirection: "column",
                        }}
                        className="text-center lg:text-left mx-auto lg:mx-0"
                    >
                        <span>Confused?</span>
                        <span>Curious? Let's clear it out</span>
                    </h2>
                </div>

                {/* Accordion Container */}
                <div
                    style={{
                        width: "100%",
                        maxWidth: "843.64px",
                        height: "auto",
                    }}
                    className="flex flex-col gap-6 items-center lg:items-end"
                >
                    {FAQ_DATA.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                width: "100%",
                                maxWidth: "771px",
                                borderRadius: "19.39px",
                                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(10px)",
                                padding: "24px",
                                transition: "all 0.3s ease",
                            }}
                            className="group hover:bg-[rgba(255,255,255,0.08)]"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between text-left transition-all duration-300"
                            >
                                <span
                                    style={{
                                        fontFamily: "var(--font-outfit)",
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        lineHeight: "110%",
                                        letterSpacing: "0%",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {item.question}
                                </span>
                                <div
                                    style={{
                                        width: "clamp(20px, 4vw, 33.48px)",
                                        height: "clamp(20px, 4vw, 33.48px)",
                                        borderRadius: "50%",
                                        border: openIndex === index
                                            ? `clamp(0.3px, 0.1vw, 0.72px) solid #000000`
                                            : `clamp(0.3px, 0.1vw, 0.72px) solid #FFFFFF`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: openIndex === index ? "#FFFFFF" : "#000000",
                                        transition: "all 0.3s ease",
                                        transform: openIndex === index ? "rotate(0deg)" : "rotate(180deg)",
                                        flexShrink: 0,
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
                                <p
                                    style={{
                                        fontFamily: "var(--font-outfit)",
                                        fontWeight: 400,
                                        fontSize: "12px",
                                        lineHeight: "128%",
                                        letterSpacing: "0%",
                                        color: "#FFFFFF",
                                    }}
                                >
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
