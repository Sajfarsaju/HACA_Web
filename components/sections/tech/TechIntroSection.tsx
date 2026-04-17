"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

// ── Description split into words ─────────────────────────────────────────────
// Kept as separate paragraphs so the <br/><br/> gap is preserved in the render.
const WORDS_P1 = `HACA Tech School is where the next generation of tech creators come to learn, build, and launch their careers. We teach the skills that companies actually want today: AI tools, Python, Django, data analytics, automation, and hands-on project experience.`.split(" ");

const WORDS_P2 = `In just a few years, we\u2019ve trained over 250 students, guided them through 500+ projects, and provided 100% placement support to help them step confidently into the tech world.`.split(" ");

const TOTAL_WORDS = WORDS_P1.length + WORDS_P2.length;

/* ─────────────────────────────────────────
   TechIntroSection
   Matches Figma spec:
     Outer wrapper  1440 × 1391  (max-width, scrollable)
     Inner row      1322 × 380   gap 143px, left 62px
       Left col     438 × 179.6  gap 20px
         Heading    438 × 112
         Icon row   438 × 47.6   gap 17.46px
       Right col    668 × 380
───────────────────────────────────────────*/

const TECH_ICONS: { src: string; alt: string; innerW: number; innerH: number; innerTop?: number; innerLeft?: number }[] = [
    {
        src: "/photos/Tech/vscode-icons_file-type-firebase.svg",
        alt: "Firebase",
        innerW: 47.6,
        innerH: 47.6,
    },
    {
        src: "/photos/Tech/devicon_git.svg",
        alt: "Git",
        innerW: 46.95,
        innerH: 46.95,
        innerTop: 0.33,
        innerLeft: 0.33,
    },
    {
        src: "/photos/Tech/Vector.svg",
        alt: "Tech",
        innerW: 39.67,
        innerH: 38.69,
        innerTop: 3.97,
        innerLeft: 3.97,
    },
    {
        src: "/photos/Tech/Mask group.svg",
        alt: "Mask Group",
        innerW: 47.61,
        innerH: 47.36,
        innerTop: 0.12,
        innerLeft: 0,
    },
    {
        src: "/photos/Tech/devicon_slack.svg",
        alt: "Slack",
        innerW: 47.6,
        innerH: 47.6,
    },
    {
        src: "/photos/Tech/material-icon-theme_python.svg",
        alt: "Python",
        innerW: 47.6,
        innerH: 47.6,
    },
    {
        src: "/photos/Tech/logos_postman-icon.svg",
        alt: "Postman",
        innerW: 47.6,
        innerH: 47.6,
    },
];

export function TechIntroSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [revealedCount, setRevealedCount] = useState(0);

    // scrollYProgress: 0 = section top at viewport bottom, 1 = section bottom at viewport top
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Map scroll progress → how many words turn white.
    // Words start revealing when section enters the middle zone and finish
    // when section centre reaches viewport centre (~0.55).
    const wordProgress = useTransform(scrollYProgress, [0.15, 0.6], [0, TOTAL_WORDS]);

    useMotionValueEvent(wordProgress, "change", (v) => {
        setRevealedCount(Math.max(0, Math.min(TOTAL_WORDS, Math.floor(v))));
    });

    return (
        <div
            id="tech-intro-section"
            ref={sectionRef}
            className="w-full px-[62px] pt-[48px] max-[1440px]:px-[40px] max-[1440px]:pt-[40px] max-[1200px]:px-[30px] max-lg:px-[24px] max-md:px-[20px] max-md:pt-[40px] max-[480px]:pt-[30px] max-[375px]:pt-[40px] max-[375px]:pb-[10px] min-[1441px]:px-[min(80px,5vw)] min-[2560px]:max-w-[min(1400px,85vw)] min-[2560px]:mx-auto min-[3840px]:max-w-[min(1400px,75vw)]">
            {/* ── Inner row: left col + right col ── */}
            <div className="w-full flex flex-row items-center justify-center gap-[143px] min-h-[380px] mx-auto max-[1440px]:gap-[80px] max-[1200px]:gap-[50px] max-lg:flex-col max-lg:gap-[40px] max-lg:items-start max-lg:justify-start max-md:gap-[24px] max-[375px]:gap-[20px] min-[2560px]:max-w-[min(1322px,75vw)]">

                {/* ── LEFT COLUMN: Heading + Icon row ── */}
                <div className="relative z-10 flex flex-col gap-[20px] max-md:gap-[12px] flex-[0_0_438px] max-w-[438px] h-[179.61px] justify-center max-[1440px]:flex-[0_0_380px] max-[1440px]:max-w-[380px] max-[1200px]:flex-[0_0_320px] max-[1200px]:max-w-[320px] max-lg:flex-[0_0_auto] max-lg:max-w-full max-lg:w-full max-lg:items-center max-[375px]:flex-none max-[375px]:gap-[12px]">
                    {/* Heading */}
                    <div className="w-[438px] min-h-[112px] max-[1440px]:w-full max-lg:min-h-fit max-md:min-h-fit max-[480px]:min-h-fit max-[375px]:w-[240px] max-[375px]:min-h-[50px] max-[375px]:h-auto max-[375px]:mx-auto max-[375px]:flex max-[375px]:items-center max-[375px]:justify-center max-[375px]:overflow-visible max-lg:flex max-lg:justify-center">
                        <p className="font-outfit font-normal text-[56px] leading-none tracking-[-0.02em] text-white m-0 max-[1440px]:text-[48px] max-[1200px]:text-[40px] max-lg:text-[44px] max-lg:text-center max-md:text-[32px] max-md:leading-[1.1] max-[480px]:text-[24px] max-[375px]:text-[18px] max-[375px]:leading-[1.3] max-[375px]:w-full text-center">
                            A New Ecosystem <br className="hidden max-md:block" /> for Tech Learning
                        </p>
                    </div>

                    {/* Icon Row */}
                    <motion.div
                        className="flex flex-row items-center justify-center gap-[17.46px] w-[438px] h-[47.61px] flex-nowrap max-[1440px]:w-[380px] max-[1440px]:gap-[12px] max-[1200px]:w-[320px] max-[1200px]:gap-[8px] max-lg:w-full max-lg:h-auto max-lg:justify-center max-md:w-full max-md:justify-between max-md:gap-[8px] max-[480px]:gap-[8px] max-[375px]:gap-[4px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {TECH_ICONS.map((icon) => (
                            <motion.div
                                className="w-[47.61px] h-[47.61px] shrink-0 flex items-center justify-center relative overflow-visible max-[1440px]:w-[40px] max-[1440px]:h-[40px] max-[1200px]:w-[32px] max-[1200px]:h-[32px] max-md:w-[32px] max-md:h-[32px] max-[480px]:w-[24px] max-[480px]:h-[24px] max-[375px]:w-[20px] max-[375px]:h-[20px]"
                                key={icon.alt}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.5 },
                                    visible: { opacity: 1, scale: 1 }
                                }}
                            >
                                {/* Width/height set to 48 as a layout hint; actual display size controlled by CSS */}
                                <Image
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ── RIGHT COLUMN: Description ── */}
                <div className="relative z-10 flex-[0_0_668px] max-w-[668px] min-h-[380px] flex items-center max-[1440px]:flex-[1_1_auto] max-[1440px]:max-w-none max-lg:flex-[0_0_auto] max-lg:max-w-full max-lg:w-full max-lg:min-h-fit">
                    <p className="font-outfit font-normal text-[30px] leading-[1.25] tracking-[-1px] m-0 align-middle max-[1440px]:text-[26px] max-[1200px]:text-[22px] max-lg:text-[20px] max-md:text-[18px] max-[480px]:text-[16px] max-[480px]:tracking-normal">
                        {WORDS_P1.map((word, idx) => (
                            <span
                                key={`p1-${idx}`}
                                style={{
                                    color: idx < revealedCount ? "#ffffff" : "#A7A7A7",
                                    transition: "color 0.35s ease",
                                }}
                            >
                                {word}{" "}
                            </span>
                        ))}
                        <br /><br />
                        {WORDS_P2.map((word, idx) => {
                            const globalIdx = WORDS_P1.length + idx;
                            return (
                                <span
                                    key={`p2-${idx}`}
                                    style={{
                                        color: globalIdx < revealedCount ? "#ffffff" : "#A7A7A7",
                                        transition: "color 0.35s ease",
                                    }}
                                >
                                    {word}{" "}
                                </span>
                            );
                        })}
                    </p>
                </div>

            </div>
        </div>
    );
}
