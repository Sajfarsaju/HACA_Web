"use client";

import { useId, useState } from "react";

type FaqItem = {
    id: string;
    q: string;
    plusColor: string;
    a: string;
};

const FAQ_ITEMS: FaqItem[] = [
    {
        id: "gd-calicut-faq-1",
        q: "What makes this graphic designing course in Calicut different?",
        plusColor: "#8F56FF",
        a: "You work through studio-style briefs with mentor feedback—not only tool walkthroughs—so you learn layout, typography, and visual problem solving while building portfolio-ready pieces.",
    },
    {
        id: "gd-calicut-faq-2",
        q: "Do you teach software only, or creative thinking too?",
        plusColor: "#FF5C00",
        a: "Both. Industry-standard tools support the craft, but projects are built around ideas, hierarchy, composition, and iteration so your judgement improves alongside technical speed.",
    },
    {
        id: "gd-calicut-faq-3",
        q: "Can I join if I have no design background?",
        plusColor: "#2592FF",
        a: "Yes. Many learners start from scratch. We scaffold fundamentals first, then move into branding, campaigns, and richer visual systems as your confidence grows.",
    },
    {
        id: "gd-calicut-faq-4",
        q: "What roles can I aim for after the course?",
        plusColor: "#29C76B",
        a: "Common paths include graphic designer, visual designer, branding assistant, presentation designer, and freelance visual work—supported by a portfolio shaped around real deliverables.",
    },
    {
        id: "gd-calicut-faq-5",
        q: "What is the learning environment like?",
        plusColor: "#F25555",
        a: "Expect clear deadlines, critiques, and checkpoints in a collaborative studio rhythm—space to revise work until it feels intentional rather than rushed template output.",
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

export function DesignSeoFaqList({ font }: { font: string }) {
    const [openId, setOpenId] = useState<string | null>(null);
    const baseId = useId();

    return (
        <div className="flex w-full min-w-0 flex-col gap-[26px] lg:gap-[65px]">
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
                                    min-w-0 max-w-[241px] font-medium leading-[120%] tracking-normal text-[#0A0A0A]
                                    text-[14px] align-middle lg:max-w-[853px] lg:flex-1 lg:text-[22px]
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
                                    className="m-0 max-w-none pb-5 font-['Satoshi',sans-serif] text-[15px] font-normal leading-relaxed text-[#0A0A0A]/85 lg:max-w-[853px] lg:pb-6 lg:text-[16px]"
                                >
                                    {item.a}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
