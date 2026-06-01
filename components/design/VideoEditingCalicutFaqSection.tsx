"use client";

import { DM_Sans } from "next/font/google";
import { useId, useState } from "react";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

const vc = '"VC Nudge Trial Normal", sans-serif' as const;
const ACCENT = "#655CC5";
const HEADING_ID = "video-editing-faq-heading";

type FaqItem = {
    id: string;
    q: string;
    a: string;
};

const FAQ_ITEMS: FaqItem[] = [
    {
        id: "ve-faq-1",
        q: "What career opportunities are available after completing this video editing course?",
        a: "Graduates often move into video editor, motion assistant, social content editor, post-production intern, and freelance creator roles. With a showreel built during the course and placement support from HACA, you can target agencies, brands, studios, and independent clients in Calicut, Kerala, and across India.",
    },
    {
        id: "ve-faq-2",
        q: "Do I need a powerful laptop for this video editing course?",
        a: "A capable laptop helps—especially for Premiere Pro, After Effects, and colour work—but you do not need a top-end machine on day one. We guide you on sensible export settings, proxy workflows, and storage habits so you can learn smoothly. If you are unsure about your device, ask during counselling and we will suggest practical specs.",
    },
    {
        id: "ve-faq-3",
        q: "Is video editing a good career in Kerala and India?",
        a: "Yes. Demand keeps growing for short-form content, brand films, OTT-style edits, wedding and event films, and in-house creative teams. Kerala has a strong creator and agency ecosystem, and remote freelance work lets Calicut-based editors serve clients nationwide when they have solid skills and a portfolio.",
    },
    {
        id: "ve-faq-4",
        q: "Can I learn video editing online from home?",
        a: "You can start from home with structured online options, but this Calicut program is built for hands-on studio learning—live critique, collaborative projects, and mentor access on campus. Many learners combine offline sessions with practice at home; speak to our team if you need flexibility around schedules.",
    },
    {
        id: "ve-faq-5",
        q: "What makes Design School by HACA different from other video editing institutes in Calicut?",
        a: "We teach storytelling and pacing—not only software clicks—with industry mentors, portfolio-first projects, and access to HACA’s wider creative ecosystem (graphic design, motion, UI/UX, and branding). You graduate with work that reads like real client deliverables, plus career guidance rather than a certificate alone.",
    },
];

function FaqPlus({ open, size }: { open: boolean; size: number }) {
    return (
        <span
            className="inline-flex shrink-0 items-center justify-center transition-transform duration-200 ease-out"
            style={{ width: size, height: size }}
            aria-hidden
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                className={open ? "rotate-45" : ""}
            >
                <path
                    d="M12 5v14M5 12h14"
                    stroke={ACCENT}
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        </span>
    );
}

export function VideoEditingCalicutFaqSection() {
    const [openId, setOpenId] = useState<string | null>(null);
    const baseId = useId();

    return (
        <section
            className="w-full bg-white"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    mx-auto box-border flex w-full max-w-[1440px] flex-col
                    gap-[30px] px-4 py-10
                    lg:min-h-[719px] lg:flex-row lg:items-center lg:justify-between
                    lg:gap-10 lg:px-[60px] lg:py-[60px]
                "
            >
                <header className="flex w-full shrink-0 items-center lg:w-[clamp(280px,34vw,500px)]">
                    <h2
                        id={HEADING_ID}
                        className="m-0 w-full text-left text-black"
                        style={{
                            fontFamily: vc,
                            fontWeight: 500,
                            fontStyle: "normal",
                            fontSize: "clamp(35px, 3.2vw, 45px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Here&apos;s What Most Students Ask
                    </h2>
                </header>

                <div className="w-full min-w-0 lg:w-[clamp(520px,55vw,794px)] lg:shrink-0">
                    <div className="flex w-full min-w-0 flex-col gap-[26px] lg:gap-[65px]">
                        {FAQ_ITEMS.map((item) => {
                            const open = openId === item.id;
                            return (
                                <div
                                    key={item.id}
                                    className="w-full border-b-[0.91px] border-solid border-[#000000]"
                                >
                                    <button
                                        type="button"
                                        className="
                                            flex w-full min-w-0 items-center justify-between gap-x-4 pb-5 text-left
                                            lg:h-[70px] lg:gap-x-[101px] lg:pb-0 lg:pt-0
                                        "
                                        onClick={() =>
                                            setOpenId((p) => (p === item.id ? null : item.id))
                                        }
                                        aria-expanded={open}
                                        aria-controls={`${baseId}-${item.id}-panel`}
                                    >
                                        <span
                                            className={[
                                                "min-w-0 flex-1 font-medium leading-[120%] tracking-normal text-[#0A0A0A]",
                                                "text-[14px] lg:text-[22px]",
                                                dmSans.className,
                                            ].join(" ")}
                                        >
                                            {item.q}
                                        </span>
                                        <span className="inline-flex shrink-0 items-center self-center">
                                            <span className="lg:hidden">
                                                <FaqPlus open={open} size={20} />
                                            </span>
                                            <span className="hidden lg:inline-flex">
                                                <FaqPlus open={open} size={30} />
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
                                                className={[
                                                    "m-0 max-w-none pb-5 font-normal leading-relaxed text-[#0A0A0A]/85",
                                                    "text-[15px] lg:max-w-[794px] lg:pb-6 lg:text-[16px]",
                                                    dmSans.className,
                                                ].join(" ")}
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
