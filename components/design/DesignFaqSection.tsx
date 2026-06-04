"use client";

import Image from "next/image";
import { useId, useState, type ReactNode } from "react";

const Q_MARK_SRC = "/photos/schools/design/Group%20(5).svg";

const UNDERLINE_PURPLE_PATH =
    "M264.162 13.4373C260.703 10.5725 256.852 7.67469 250.821 9.03301C245.477 10.2448 240.79 12.3122 235.254 13.2608C226.821 14.6995 218.662 13.4515 210.641 11.6314C201.701 9.60342 192.878 7.993 183.43 7.23978C173.982 6.49129 164.421 5.86885 154.912 5.49382C144.986 5.09988 135.047 5.37089 125.109 5.1755C120.564 5.0841 116.038 4.86035 111.493 5.13926C106.603 5.43866 101.79 6.18401 96.9683 6.75759C92.7959 7.26026 88.5743 7.70619 84.3332 7.82122C79.3126 7.95674 74.3019 7.5896 69.2739 7.69833C58.5486 7.92997 47.865 8.90221 37.228 9.76259C26.162 10.6592 14.8533 11.7071 3.70639 10.894C-1.10342 10.5442 -1.36572 6.03588 3.70639 5.95237C13.9536 5.77273 24.1224 5.44969 34.3157 4.6886C44.2736 3.9401 54.1678 2.98361 64.187 2.63694C74.0003 2.29499 83.7547 2.96784 93.4944 1.94674C103.129 0.935098 112.334 -0.15376 122.143 0.0179994C142.051 0.364669 161.839 0.523817 181.616 2.28238C191.38 3.15063 200.71 4.57355 209.979 6.7103C218.385 8.65165 226.502 10.3566 235.404 8.71153C241.133 7.65104 246.543 5.22907 252.547 4.86979C259.639 4.43961 264.611 7.94257 268.535 11.2706C270.418 12.8716 266.096 15.0398 264.162 13.4373Z";

type FaqItem = {
    id: string;
    q: string;
    plusColor: string;
    a: ReactNode;
};

const designFaqAnswerLinkClass =
    "text-[#0A0A0A] underline underline-offset-[3px] decoration-[#0A0A0A]/35 hover:decoration-[#8F56FF] transition-colors";

const FAQ_ITEMS: FaqItem[] = [
    {
        id: "design-faq-1",
        q: "What is HACA, and how is it different from other institutes?",
        plusColor: "#8F56FF",
        a: (
            <>
                HACA is a practical, job-oriented academy built inside Haris&Co., one of{" "}
                <a
                    href="https://harisand.co/digital-marketing-agency-in-kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={designFaqAnswerLinkClass}
                >
                    Kerala’s leading digital marketing agencies.
                </a>{" "}
                Every course here is designed inside a real agency environment, so instead of just learning theories, you work on live projects, real brands, and hands-on campaigns. That’s what makes HACA one of the most career-focused institutes in Kerala for digital marketing, design, tech, and finance.
            </>
        ),
    },
    {
        id: "design-faq-2",
        q: "Which courses are offered at HACA?",
        plusColor: "#FF5C00",
        a: "We currently have four schools under HACA: Marketing, Design, Tech, and Finance. Each one focuses on building practical, job-ready skills through hands-on training and real-world experience.",
    },
    {
        id: "design-faq-3",
        q: "Are HACA courses beginner-friendly?",
        plusColor: "#2592FF",
        a: "Absolutely. You don’t need prior experience to join. Whether you’re a 12th pass-out, college student, or someone switching careers, our mentors teach everything from scratch with real examples and projects.",
    },
    {
        id: "design-faq-4",
        q: "Does HACA offer online or offline classes?",
        plusColor: "#29C76B",
        a: (
            <>
                HACA offers both offline and online courses, depending on the program. Our offline campuses in{" "}
                <a
                    href="https://harisandcoacademy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={designFaqAnswerLinkClass}
                >
                    Calicut
                </a>{" "}
                and{" "}
                <a href="https://www.haca.ae/" target="_blank" rel="noopener noreferrer" className={designFaqAnswerLinkClass}>
                    Dubai
                </a>{" "}
                are built for hands-on collaboration and real project experience, while select programs are also available online for flexible learning. You can visit the individual school pages to know which courses are offered online and offline.
            </>
        ),
    },
    {
        id: "design-faq-5",
        q: "Which is the best institute for digital marketing, design, and tech courses in Kerala?",
        plusColor: "#F25555",
        a: "If you’re looking for agency-based learning that leads to actual jobs, HACA is among the top-rated choices in Kerala. We’re backed by Haris&Co., have 200+ placement partners, and focus purely on career outcomes, not theory.",
    },
];

function FaqPlus({ color, open, size }: { color: string; open: boolean; size: number }) {
    return (
        <span
            className="inline-flex shrink-0 items-center justify-center transition-transform duration-200 ease-out"
            style={{ width: size, height: size }}
            aria-hidden
        >
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={open ? "rotate-45" : ""}>
                <path d="M12 5v14M5 12h14" stroke={color} strokeWidth="2" strokeLinecap="round" />
            </svg>
        </span>
    );
}

export function DesignFaqSection({ font, serif }: { font: string; serif: string }) {
    const [openId, setOpenId] = useState<string | null>(null);
    const baseId = useId();

    return (
        <section
            id="design-faq"
            className="box-border w-full max-w-[1440px] bg-[#FCFCFC] px-4 lg:px-[60px]"
            aria-labelledby={`${baseId}-heading`}
        >
            <div
                className="
                    flex w-full min-w-0 flex-col gap-[50px] px-0 pb-[30px] pt-[30px]
                    lg:gap-[80px] lg:pb-10 lg:pt-10
                "
            >
                {/* First container: icon + heading + underline (max 447px layout box) */}
                <div className="mx-auto flex w-full max-w-[min(100%,447px)] flex-col items-center gap-4 lg:gap-5">
                    <div className="relative aspect-[22/46.781] w-[22px] shrink-0 lg:aspect-[38.512/84.004] lg:w-[38.512px] lg:-rotate-[0.86deg]">
                        <Image src={Q_MARK_SRC} alt="" aria-hidden="true" fill className="object-contain object-center" sizes="40px" unoptimized />
                    </div>

                    <h2
                        id={`${baseId}-heading`}
                        className="
                            m-0 w-full max-w-[235px] text-center text-black
                            lg:max-w-full
                        "
                        style={{
                            fontFamily: font,
                            fontWeight: 500,
                            fontSize: "34px",
                            lineHeight: "114.99999999999999%",
                            letterSpacing: "0",
                        }}
                    >
                        <span className="inline-block lg:hidden">
                            A Few Things
                            <br />
                            <span
                                className="relative inline-block pb-1"
                                style={{
                                    fontFamily: serif,
                                    fontWeight: 300,
                                    fontStyle: "italic",
                                    fontSize: "34px",
                                    lineHeight: "114.99999999999999%",
                                }}
                            >
                                Worth Knowing
                                <svg
                                    className="pointer-events-none absolute left-1/2 top-full mt-1 block h-[9px] w-[185px] -translate-x-1/2"
                                    viewBox="0 0 269 14"
                                    fill="none"
                                    aria-hidden
                                >
                                    <path d={UNDERLINE_PURPLE_PATH} fill="#8F56FF" />
                                </svg>
                            </span>
                        </span>
                        <span className="hidden lg:inline">
                            A Few Things{" "}
                            <span
                                className="relative inline-block pb-[2px]"
                                style={{
                                    fontFamily: serif,
                                    fontWeight: 300,
                                    fontStyle: "italic",
                                    fontSize: "34px",
                                    lineHeight: "114.99999999999999%",
                                }}
                            >
                                Worth Knowing
                                <svg
                                    className="pointer-events-none absolute left-1/2 top-[calc(100%+4px)] hidden h-[14px] w-[279px] -translate-x-1/2 lg:block"
                                    viewBox="0 0 269 14"
                                    fill="none"
                                    aria-hidden
                                >
                                    <path d={UNDERLINE_PURPLE_PATH} fill="#8F56FF" />
                                </svg>
                            </span>
                        </span>
                    </h2>
                </div>

                {/* Second container: FAQ list — centered horizontally on desktop */}
                <div className="flex w-full min-w-0 justify-center">
                    <div className="flex w-full min-w-0 max-w-none flex-col gap-[26px] lg:mx-auto lg:max-w-[984px] lg:gap-[65px]">
                        {FAQ_ITEMS.map((item) => {
                            const open = openId === item.id;
                            return (
                                <div key={item.id} className="w-full border-b border-black/12">
                                    <button
                                        type="button"
                                        className="
                                            flex w-full min-w-0 justify-between gap-x-4 pb-5 text-left
                                            lg:h-[70px] lg:gap-x-[101px] lg:pb-0 lg:pt-0 lg:items-center
                                        "
                                        onClick={() => setOpenId((p) => (p === item.id ? null : item.id))}
                                        aria-expanded={open}
                                        aria-controls={`${baseId}-${item.id}-panel`}
                                    >
                                        <span
                                            className="
                                                min-w-0 max-w-[241px] align-middle font-medium leading-[120%] tracking-normal text-[#0A0A0A]
                                                text-[16px] lg:max-w-[853px] lg:flex-1 lg:text-[22px]
                                            "
                                            style={{ fontFamily: font }}
                                        >
                                            {item.q}
                                        </span>
                                        <span className="inline-flex shrink-0 items-center self-start pt-0.5 lg:self-center lg:pt-0">
                                            <span className="lg:hidden">
                                                <FaqPlus color={item.plusColor} open={open} size={20} />
                                            </span>
                                            <span className="hidden lg:inline-flex">
                                                <FaqPlus color={item.plusColor} open={open} size={30} />
                                            </span>
                                        </span>
                                    </button>

                                    <div
                                        id={`${baseId}-${item.id}-panel`}
                                        className={[
                                            "grid transition-[grid-template-rows] duration-300 ease-out",
                                            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                                        ].join(" ")}
                                    >
                                        <div className="overflow-hidden">
                                            <p
                                                className="m-0 max-w-none pb-5 font-['Satoshi',sans-serif] text-[16px] font-normal leading-relaxed text-[#0A0A0A]/85 lg:max-w-[853px] lg:pb-6"
                                            >
                                                {item.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
