"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const FAQ_DATA: Array<{ question: string; answer: string; answerNode?: React.ReactNode }> = [
    {
        question: "Do I need a tech background or prior coding experience to begin?",
        answer: "No, it doesn't matter whether you have a tech background or prior coding experience. You'll be trained from scratch and guided step-by-step to build industry-relevant skills."
    },
    {
        question: "Do you offer placement support after course completion?",
        answer: "We provide assured placement assistance to all our graduates, including resume building, mock interviews, access to our network of hiring partners, and portfolio development."
    },
    {
        question: "What is cohort-based learning, and how does it work here?",
        answer: "Cohort-based learning means you'll learn alongside a small group of peers. You'll collaborate on projects, brainstorm ideas, solve problems, and receive personalised learning support with direct mentor feedback."
    },
    {
        question: "Are these courses available online or offline?",
        answer: "",
        answerNode: (
            <span>
                We offer both online and offline options to fit your lifestyle.<br /><br />
                <span className="italic">
                    <strong className="not-italic font-semibold">Online:</strong> Join live sessions from anywhere with flexible scheduling, perfect if you&apos;re working or prefer remote learning.<br /><br />
                    <strong className="not-italic font-semibold">Offline:</strong> Attend in-person classes at our campus for an immersive, hands-on experience with direct access to mentors and peers.
                </span>
            </span>
        ),
    },
    {
        question: "How do I showcase my work after the course?",
        answer: "By the end of your program, you'll have a solid portfolio with real-world projects and GitHub code. This portfolio becomes your proof of skill, essential for job interviews, freelance opportunities, and career advancement."
    }
];

export function TechFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const animated   = useRef(false);

    // ── Premium entrance animation ──────────────────────────────────────────
    useEffect(() => {
        const container = sectionRef.current;
        if (!container) return;

        const cards = container.querySelectorAll<HTMLElement>("[data-faq-card]");

        // Hide immediately — no flash
        gsap.set(cards, { opacity: 0, y: 48, filter: "blur(10px)", scale: 0.97 });

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated.current) {
                    animated.current = true;
                    gsap.to(cards, {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        scale: 1,
                        duration: 0.75,
                        ease: "power3.out",
                        stagger: 0.1,
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.08 }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section
            ref={sectionRef}
            className="w-full relative overflow-hidden md:overflow-visible flex flex-col items-center justify-center pt-3 pb-8 px-6 md:py-16 md:px-10 lg:p-0 lg:h-[862px] min-h-[400px] bg-transparent opacity-100"
        >
            {/* Center Gradient Glow — Desktop/Tablet */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220%] max-w-[1400px] aspect-[1/1] min-w-[900px] opacity-80 z-0 pointer-events-none">
                <Image src="/photos/schools/tech/Group 54.svg" alt="" aria-hidden="true" fill className="object-contain object-center" />
            </div>

            {/* Mobile Background */}
            <div
                className="md:hidden absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{
                    maskImage: "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
                }}
            >
                <Image src="/photos/Tech/Group 23 (2).svg" alt="" aria-hidden="true" fill className="object-cover object-top" />
            </div>

            {/* Cinematic Flare — Desktop/Tablet */}
            <div
                className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] blur-[150px] opacity-15 z-[6] pointer-events-none"
                style={{
                    background: `
                        linear-gradient(130.61deg, #FF5600 60.66%, #694AFF 80.7%),
                        linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))
                    `,
                }}
            />

            <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[19px] relative lg:px-[60px] z-10">

                {/* Side Title */}
                <div className="w-full lg:w-1/3">
                    <h2 className="font-outfit font-normal text-[clamp(30px,4vw,56px)] leading-[110%] tracking-[-0.2px] text-[#FFFFFF] w-full max-w-[800px] flex flex-col text-center lg:text-left mx-auto lg:mx-0">
                        <span>Confused?</span>
                        <span>Curious? Let&apos;s clear it out</span>
                    </h2>
                </div>

                {/* Accordion */}
                <div className="w-full max-w-[843.64px] h-auto flex flex-col gap-6 items-center lg:items-end">
                    {FAQ_DATA.map((item, index) => (
                        <div
                            key={index}
                            data-faq-card
                            className="w-full max-w-[771px] rounded-[19.39px] border border-white/10 backdrop-blur-[10px] p-[24px] transition-colors duration-300 hover:bg-[rgba(255,255,255,0.08)]"
                            style={{
                                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
                            }}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between text-left"
                            >
                                <span className="font-outfit font-normal text-[14px] md:text-[22px] leading-[110%] tracking-normal text-[#FFFFFF]">
                                    {item.question}
                                </span>
                                <div
                                    className="w-[clamp(20px,4vw,33.48px)] h-[clamp(20px,4vw,33.48px)] rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                                    style={{
                                        border: openIndex === index ? "0.72px solid #000000" : "0.72px solid #FFFFFF",
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
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    openIndex === index ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="font-outfit font-normal text-[12px] md:text-[16px] leading-[128%] tracking-normal text-[#FFFFFF] whitespace-pre-line">
                                    {item.answerNode ?? item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
