"use client";

import { useId, useState } from "react";

export type FaqItem = {
    id: string;
    q: string;
    plusColor: string;
    a: string;
};

const FAQ_ITEMS: FaqItem[] = [
    {
        id: "gd-calicut-faq-1",
        q: "What is the best graphic designing course in Calicut?",
        plusColor: "#8F56FF",
        a: "The best graphic designing course in Calicut is one that focuses on practical learning, portfolio development, and placement support. Courses like CDC by HACA's Design School cover multiple skills, including graphic design, UI/UX, video editing, and branding, to prepare you for real careers.",
    },
    {
        id: "gd-calicut-faq-2",
        q: "What is the fee for a graphic designing course in Calicut?",
        plusColor: "#FF5C00",
        a: "The fee can vary based on the course and duration. It's best to contact the institute directly for exact details. Many institutes also offer EMI options to make learning more affordable.",
    },
    {
        id: "gd-calicut-faq-3",
        q: "What job roles can I get after completing a graphic designing course?",
        plusColor: "#2592FF",
        a: "After completing a graphic designing course, you can apply for roles such as graphic designer, UI/UX designer, video editor, motion graphics designer, or work as a freelance designer.",
    },
    {
        id: "gd-calicut-faq-4",
        q: "Is graphic design a good career option?",
        plusColor: "#29C76B",
        a: "Yes, graphic design is a growing career in Calicut with increasing demand from agencies, startups, and digital businesses. Skilled designers can find opportunities in both full-time roles and freelance work.",
    },
    {
        id: "gd-calicut-faq-5",
        q: "How long does it take to become a graphic designer?",
        plusColor: "#F25555",
        a: "You can learn the basics in a few months. With consistent practice and real projects, you can become job-ready in around 5 to 6 months.",
    },
    {
        id: "gd-calicut-faq-6",
        q: "Do I need a degree to learn graphic design?",
        plusColor: "#FF5659",
        a: "No, you don't need a degree. What matters most is your skills, portfolio, and how well you can apply what you've learned.",
    },
    {
        id: "gd-calicut-faq-7",
        q: "Can I get a job after completing this course?",
        plusColor: "#29C76B",
        a: "Yes, if you build a strong portfolio and stay consistent, you can apply for entry-level roles or start freelancing.",
    },
    {
        id: "gd-calicut-faq-8",
        q: "How do I start a career in design?",
        plusColor: "#8F56FF",
        a: "Learn from professionals, build a killer portfolio, work on live projects, stay inspired and connected, and apply confidently.",
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

export function DesignSeoFaqList({ font, items }: { font: string; items?: FaqItem[] }) {
    const [openId, setOpenId] = useState<string | null>(null);
    const baseId = useId();
    const list = items ?? FAQ_ITEMS;

    return (
        <div className="flex w-full min-w-0 flex-col gap-[26px] lg:gap-[65px]">
            {list.map((item) => {
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
