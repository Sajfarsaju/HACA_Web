"use client";

import { MarketingFeatureIcon } from "@/components/marketing/MarketingFeatureIcon";
import React from "react";

const TITLE_ID = "ae-smarter-learn-title";

type FeatureItem = {
    titleLines: readonly [string, string];
    description: string;
    iconSrc: string;
};

const FEATURES: FeatureItem[] = [
    {
        titleLines: ["Career Support", "at Every Step"],
        description: "Get help with resumes, mock interviews, portfolio guidance, freelancing support, and placement preparation.",
        iconSrc: "/photos/schools/ae/Career Support at Every Step.svg",
    },
    {
        titleLines: ["Flexible EMI", "Options"],
        description: "We offer flexible EMI options through our trusted financing partners like Tabby and Tamara to make learning more accessible.",
        iconSrc: "/photos/schools/ae/Flexible EMI Options.svg",
    },
    {
        titleLines: ["UAE & GCC", "Market Focused"],
        description: "Learn strategies and skills aligned with the latest trends and opportunities across the UAE and GCC market.",
        iconSrc: "/photos/schools/ae/UAE & GCC Market Focused.svg",
    },
    {
        titleLines: ["Learn from", "Industry Experts"],
        description: "Get trained by professionals who actively work in digital marketing and bring real experience into every session.",
        iconSrc: "/photos/schools/ae/Learn from Industry Experts.svg",
    },
    {
        titleLines: ["Dedicated Mentorship", "& Support"],
        description: "Receive personal guidance from mentors and a dedicated course coordinator throughout your learning journey.",
        iconSrc: "/photos/schools/ae/Dedicated Mentorship & Support.svg",
    },
    {
        titleLines: ["Practical", "Learning First"],
        description: "Our course follows a 90% practical and 10% theory approach, so you spend more time applying skills and less time memorizing concepts.",
        iconSrc: "/photos/schools/ae/Practical Learning First.svg",
    },
    {
        titleLines: ["AI Integrated", "Modules"],
        description: "Explore AI tools and automation techniques that make marketing smarter, faster, and more efficient.",
        iconSrc: "/photos/schools/ae/AI Integrated Modules.svg",
    },
    {
        titleLines: ["Build a Portfolio That", "Shows Your Skills"],
        description: "Complete projects throughout the course and create a portfolio that helps you stand out.",
        iconSrc: "/photos/schools/ae/Build a Portfolio That Shows Your Skills.svg",
    },
];

function FeatureIcon({ item }: { item: FeatureItem }) {
    return <MarketingFeatureIcon src={item.iconSrc} />;
}

export function AeSmarterLearnSection() {
    return (
        <section
            className="box-border w-full min-w-0 max-w-full overflow-x-hidden bg-white text-black"
            role="region"
            aria-labelledby={TITLE_ID}
        >
            <div className="w-full pt-[clamp(12px,2vw,24px)] pb-[clamp(16px,2.5vw,36px)]">
                <div className="box-border mx-auto w-full min-w-0 max-w-[1440px] px-5 lg:px-[60px]">
                    <div className="mx-auto w-full min-w-0 max-w-[1320px]">
                        <header className="mx-auto flex w-full max-w-[min(100%,720px)] flex-col gap-4 text-center lg:gap-5">
                            <h2
                                id={TITLE_ID}
                                className="m-0 font-semibold tracking-normal [font-family:'Darker_Grotesque',sans-serif] text-[36px] leading-[95%] text-black [text-rendering:geometricPrecision] lg:text-[clamp(34px,3.4vw,50px)] lg:leading-[115%]"
                            >
                                A Smarter Way to Learn Digital Marketing
                            </h2>
                            <p
                                className="m-0 text-[16px] font-medium leading-[140%] tracking-normal text-black/70 lg:text-[18px] lg:leading-[150%]"
                                style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                            >
                                At HACA, you learn by doing through practical tasks, real projects, and hands-on experience designed for today&apos;s industry.
                            </p>
                        </header>

                        <div className="mt-[clamp(28px,4.5vw,48px)] w-full min-w-0">
                            <div className="box-border w-full min-w-0 max-w-full px-0">
                                <ul
                                    className="
                                        m-0 grid w-full list-none grid-cols-1 items-start justify-items-stretch gap-x-6 gap-y-10 p-0
                                        sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14
                                        lg:grid-cols-4 lg:justify-items-start lg:gap-x-[40px] lg:gap-y-[clamp(48px,8vw,142px)]
                                    "
                                >
                                    {FEATURES.map((item) => (
                                        <li
                                            key={item.titleLines.join(" ")}
                                            className="flex w-full min-w-0 max-w-none flex-col items-start text-left sm:max-w-none lg:w-fit lg:max-w-none"
                                        >
                                            <div className="mb-3 shrink-0 max-sm:mb-2.5 lg:mb-5">
                                                <FeatureIcon item={item} />
                                            </div>
                                            <h3
                                                className="
                                                    mb-2 w-full min-w-0 text-left font-bold tracking-normal text-black [font-family:'Darker_Grotesque',sans-serif]
                                                    max-sm:mb-2 max-sm:text-[1.125rem] max-sm:leading-[1.05]
                                                    sm:text-xl sm:leading-[100%]
                                                    lg:mb-2.5 lg:w-auto lg:text-2xl
                                                "
                                            >
                                                {item.titleLines[0]}
                                                <br aria-hidden />
                                                {item.titleLines[1]}
                                            </h3>
                                            <p
                                                className="
                                                    m-0 w-full min-w-0 max-w-none text-left font-medium tracking-normal text-black/75
                                                    font-['Satoshi',sans-serif]
                                                    max-sm:text-[0.8125rem] max-sm:leading-[130%]
                                                    sm:text-[0.9375rem] sm:leading-[125%]
                                                    lg:w-auto lg:text-base lg:leading-[120%]
                                                "
                                            >
                                                {item.description}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
