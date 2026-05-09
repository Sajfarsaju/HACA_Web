"use client";

import type { CSSProperties } from "react";
import { useId, useState } from "react";

type FaqItem = {
    id: string;
    q: string;
    plusColor: string;
    a: string;
};

// Same items as `DesignFaqSection` (Design School).
const FAQ_ITEMS: FaqItem[] = [
    {
        id: "design-faq-1",
        q: "What makes HACA design school different from others?",
        plusColor: "#8F56FF",
        a: "We combine studio-style projects, mentor feedback, and real briefs—not just slides and tool demos—so you learn to think visually, present ideas clearly, and build a portfolio that reflects how you solve problems.",
    },
    {
        id: "design-faq-2",
        q: "Do you focus only on tools or also on creative thinking?",
        plusColor: "#FF5C00",
        a: "Both. Tools support the work, but assignments are built around ideas, restraint, typography, composition, and iteration so your creative judgement grows alongside technical skill.",
    },
    {
        id: "design-faq-3",
        q: "Do I need a design background to join?",
        plusColor: "#2592FF",
        a: "No. Many students start fresh. Curiosity and consistency matter most; we scaffold fundamentals before moving into more advanced craft and branding projects.",
    },
    {
        id: "design-faq-4",
        q: "What kind of roles can I move into after joining these creative courses?",
        plusColor: "#29C76B",
        a: "Graduates often pursue paths like graphic designer, visual designer, branding assistant, presentation designer, freelance visual work, or further specialisation after building a credible body of projects.",
    },
    {
        id: "design-faq-5",
        q: "What kind of learning environment can I expect?",
        plusColor: "#F25555",
        a: "Expect a calm, critique-friendly studio vibe: deadlines, checkpoints, collaborative reviews, and space to rework ideas until they feel deliberate—not rushed template output.",
    },
];

function FaqPlus({ color, open, size }: { color: string; open: boolean; size: number }) {
    return (
        <span className="inline-flex shrink-0 items-center justify-center transition-transform duration-200 ease-out" style={{ width: size, height: size }} aria-hidden>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={open ? "rotate-45" : ""}>
                <path d="M12 5v14M5 12h14" stroke={color} strokeWidth="2" strokeLinecap="round" />
            </svg>
        </span>
    );
}

export function DesignSeoFaqList({ font }: { font: string }) {
    const [openId, setOpenId] = useState<string | null>(null);
    const baseId = useId();

    const fontStyle: CSSProperties = { fontFamily: font };

    return (
        <div className="flex w-full min-w-0 justify-center md:justify-start">
            <div className="flex w-full min-w-0 max-w-[335px] flex-col gap-[26px] md:max-w-none lg:max-w-[794px] lg:gap-[59.45px]">
                {FAQ_ITEMS.map((item) => {
                    const open = openId === item.id;
                    return (
                        <div key={item.id} className="w-full border-b border-black/12">
                            <button
                                type="button"
                                className="
                                    flex w-full min-w-0 justify-between gap-x-4 pb-5 text-left
                                    lg:h-[70px] lg:gap-x-[40px] lg:pb-0 lg:pt-0 lg:items-center
                                "
                                onClick={() => setOpenId((p) => (p === item.id ? null : item.id))}
                                aria-expanded={open}
                                aria-controls={`${baseId}-${item.id}-panel`}
                            >
                                <span
                                    className="
                                        min-w-0 max-w-[241px] font-medium leading-[120%] tracking-normal text-[#0A0A0A]
                                        text-[14px] align-middle lg:max-w-none lg:flex-1 lg:text-[22px]
                                    "
                                    style={fontStyle}
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
                                className={["grid transition-[grid-template-rows] duration-300 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"].join(" ")}
                            >
                                <div className="overflow-hidden">
                                    <p className="m-0 max-w-none pb-5 font-['Satoshi',sans-serif] text-[15px] font-normal leading-relaxed text-[#0A0A0A]/85 lg:pb-6 lg:text-[16px]">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

