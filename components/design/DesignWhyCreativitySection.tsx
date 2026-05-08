"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Row = {
    title: string;
    description: string;
    lineColor: string;
    iconSrc: string;
};

const ROWS: Row[] = [
    {
        title: "Multidisciplinary\nCreative Space",
        description:
            "We offer courses both online and in-person within a dynamic creative environment, letting you explore all areas of design and beyond.",
        lineColor: "#FF5659",
        iconSrc: "/photos/schools/design/Vector (3).svg",
    },
    {
        title: "Learning Through\nCreative Practices",
        description:
            "Our platform is tailored for creative learners, providing easy access to lessons, tools, and projects that help you grow as a designer.",
        lineColor: "#29C76B",
        iconSrc: "/photos/schools/design/Vector (4).svg",
    },
    {
        title: "Creative EdTech\nPlatform",
        description:
            "We emphasise learning by doing. You’ll get hands-on experience through real design projects rather than just theory.",
        lineColor: "#2592FF",
        iconSrc: "/photos/schools/design/Vector (5).svg",
    },
    {
        title: "Placement Support\nand Job Assistance",
        description:
            "We help you prepare for your career with resume support, mock interviews, and job placement assistance so you can step confidently into the design world.",
        lineColor: "#8F56FF",
        iconSrc: "/photos/schools/design/Vector (6).svg",
    },
    {
        title: "Taught by Designers,\nfor Designers",
        description:
            "Learn directly from experienced designers who have worked in the industry. They know the challenges and will guide you with practical, real-world insights.",
        lineColor: "#FF5C00",
        iconSrc: "/photos/schools/design/Vector (7).svg",
    },
];

const SPIN_DUR     = 0.7;                                          // one full spin
const COOLDOWN     = 1;                                            // pause after last icon before cycle repeats
const REPEAT_DELAY = (ROWS.length - 1) * SPIN_DUR + COOLDOWN;     // 4*0.7+1 = 3.8 s

export function DesignWhyCreativitySection() {
    const font = '"VC Nudge Trial Normal", sans-serif';
    const serif = '"IvyPresto Display", serif';
    const underlineW = "clamp(200px, 24.236vw, 349px)";
    const underlineH = "clamp(12.261973198333923px, 1.485vw, 21.39714399880051px)";
    const decoW = "clamp(40.00000025737364px, 4.933vw, 71.03475997854625px)";
    const decoH = "clamp(39.24771906356837px, 4.840vw, 69.69880721116121px)";

    return (
        <section
            className="w-full bg-[#FCFCFC]"
            style={{
                padding: "clamp(30px,2.78vw,40px) clamp(20px,4.17vw,60px) clamp(40px,4.17vw,60px)",
            }}
        >
            <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-[60px] lg:gap-[70px]">
                {/* Heading */}
                <div>
                    {/* Desktop heading (underline + top-right anchored to "Environment") */}
                    <h2
                        className="hidden lg:block m-0 text-[#000000] text-[50px]"
                        style={{
                            fontFamily: font,
                            fontWeight: 500,
                            lineHeight: "115%",
                            letterSpacing: "0%",
                        }}
                    >
                        Why{" "}
                        <span style={{ fontFamily: serif, fontWeight: 300, fontStyle: "italic" }}>
                            Creativity
                        </span>
                        <br />
                        Flourishes in the Right{" "}
                        <span className="relative inline-block z-0">
                            Environment

                            {/* Top-right decoration */}
                            <span
                                className="pointer-events-none absolute -z-10 lg:[--decoTop:-26px] lg:[--decoRight:-26px] xl:[--decoTop:-34px] xl:[--decoRight:-34px]"
                                style={{
                                    top: "var(--decoTop, -34px)",
                                    right: "var(--decoRight, -34px)",
                                    width: decoW,
                                    height: decoH,
                                    transform: "rotate(-12.46deg)",
                                    transformOrigin: "center",
                                }}
                                aria-hidden="true"
                            >
                                <Image src="/photos/schools/design/Group.svg" alt="" fill className="object-contain" />
                            </span>

                            {/* Underline */}
                            <span
                                className="pointer-events-none absolute"
                                style={{
                                    top: "calc(100% - 2px)",
                                    left: "50%",
                                    transform: "translateX(-50%) rotate(-1.88deg)",
                                    width: underlineW,
                                    height: underlineH,
                                    transformOrigin: "center",
                                }}
                                aria-hidden="true"
                            >
                                <Image src="/photos/schools/design/Vector (8).svg" alt="" fill className="object-contain" />
                            </span>
                        </span>
                    </h2>

                    {/* Mobile heading (underline anchored to "Environment", top-right anchored to "the") */}
                    <h2
                        className="lg:hidden m-0 text-[#000000] text-[34px]"
                        style={{
                            fontFamily: font,
                            fontWeight: 500,
                            lineHeight: "115%",
                            letterSpacing: "0%",
                        }}
                    >
                        Why{" "}
                        <span style={{ fontFamily: serif, fontWeight: 300, fontStyle: "italic" }}>
                            Creativity
                        </span>
                        <br />
                        Flourishes in{" "}
                        <span className="relative inline-block z-0">
                            the
                            {/* Top-right decoration (mobile: on "the") */}
                            <span
                                className="pointer-events-none absolute -z-10"
                                style={{
                                    top: "-8px",
                                    right: "-22px",
                                    width: decoW,
                                    height: decoH,
                                    transform: "rotate(-12.46deg)",
                                    transformOrigin: "center",
                                }}
                                aria-hidden="true"
                            >
                                <Image src="/photos/schools/design/Group.svg" alt="" fill className="object-contain" />
                            </span>
                        </span>
                        <br />
                        Right{" "}
                        <span className="relative inline-block">
                            Environment
                            {/* Underline (mobile: under "Environment") */}
                            <span
                                className="pointer-events-none absolute"
                                style={{
                                    top: "calc(100% - 1px)",
                                    left: "50%",
                                    transform: "translateX(-50%) rotate(-1.88deg)",
                                    width: underlineW,
                                    height: underlineH,
                                    transformOrigin: "center",
                                }}
                                aria-hidden="true"
                            >
                                <Image src="/photos/schools/design/Vector (8).svg" alt="" fill className="object-contain" />
                            </span>
                        </span>
                    </h2>
                </div>

                {/* Table-like rows */}
                <div className="w-full flex flex-col gap-[60px] lg:gap-[80px]">
                    {ROWS.map((row, idx) => (
                        <motion.div
                            key={idx}
                            className="w-full flex flex-col gap-[30px] lg:gap-[40px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25 }}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.18 } },
                            }}
                        >
                            {/* inner row — left + right slide in from opposite sides */}
                            <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[24px]">
                                {/* left: icon + heading */}
                                <motion.div
                                    className="flex items-start gap-[30px] lg:gap-[50px]"
                                    variants={{
                                        hidden: { opacity: 0, x: -48, filter: "blur(10px)" },
                                        visible: {
                                            opacity: 1, x: 0, filter: "blur(0px)",
                                            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                                        },
                                    }}
                                >
                                    <motion.div
                                        className="relative shrink-0 w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
                                        animate={{ rotate: [0, 360] }}
                                        transition={{
                                            duration: SPIN_DUR,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                            repeatDelay: REPEAT_DELAY,
                                            delay: idx * SPIN_DUR,
                                        }}
                                    >
                                        <Image
                                            src={row.iconSrc}
                                            alt=""
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>

                                    <h3
                                        className="m-0 text-[#000000] whitespace-pre-line text-[26px] lg:text-[30px]"
                                        style={{
                                            fontFamily: font,
                                            fontWeight: 500,
                                            lineHeight: "115%",
                                        }}
                                    >
                                        {row.title}
                                    </h3>
                                </motion.div>

                                {/* right: paragraph */}
                                <motion.p
                                    className="m-0 text-[#0A0A0A] text-[16px] lg:text-[18px] leading-[120%] lg:leading-[28px]"
                                    style={{
                                        fontFamily: font,
                                        fontWeight: 500,
                                        letterSpacing: "0%",
                                        maxWidth: "485px",
                                    }}
                                    variants={{
                                        hidden: { opacity: 0, x: 48, filter: "blur(10px)" },
                                        visible: {
                                            opacity: 1, x: 0, filter: "blur(0px)",
                                            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                                        },
                                    }}
                                >
                                    {row.description}
                                </motion.p>
                            </div>

                            {/* divider — scan-line draw from left */}
                            <motion.div
                                className="w-full border-t"
                                style={{ borderColor: row.lineColor, transformOrigin: "left center" }}
                                variants={{
                                    hidden: { scaleX: 0, opacity: 0.3 },
                                    visible: {
                                        scaleX: 1, opacity: 1,
                                        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                                    },
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

