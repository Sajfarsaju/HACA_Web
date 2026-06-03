"use client";

import { MarketingFeatureIcon } from "@/components/marketing/MarketingFeatureIcon";
import React from "react";

const TITLE_ID = "marketing-seo-malappuram-smarter-learn-title";

type FeatureItem = {
    titleLines: readonly [string, string];
    description: string;
    iconSrc: string;
};

const FEATURES: FeatureItem[] = [
    {
        titleLines: ["Live Projects", "and Activities"],
        description: "Work on real campaigns and gain hands-on experience that prepares you for actual industry roles.",
        iconSrc: "/photos/schools/marketing/features/Student.svg",
    },
    {
        titleLines: ["Industry", "Mentors"],
        description: "Learn from marketers with real industry experience, not just trainers reading slides.",
        iconSrc: "/photos/schools/marketing/features/Handshake.svg",
    },
    {
        titleLines: ["Full Career", "Support"],
        description: "Resume building, mock interviews, and placement support to help you get hired.",
        iconSrc: "/photos/schools/marketing/features/Globe.svg",
    },
    {
        titleLines: ["Learn Through", "Execution"],
        description: "Run ads, build websites, and create campaigns from the very first week.",
        iconSrc: "/photos/schools/marketing/features/Laptop.svg",
    },
    {
        titleLines: ["One-to-One", "Mentor Support"],
        description: "Get personalised feedback and guidance tailored to your learning pace.",
        iconSrc: "/photos/schools/marketing/features/Browsers.svg",
    },
    {
        titleLines: ["Guest Sessions", "and Industry Talks"],
        description: "Stay ahead with the latest trends and insider knowledge from industry professionals.",
        iconSrc: "/photos/schools/marketing/features/Lightbulb.svg",
    },
    {
        titleLines: ["Portfolio", "Development"],
        description: "Build a portfolio of real projects that shows employers what you can do.",
        iconSrc: "/photos/schools/marketing/features/Users.svg",
    },
    {
        titleLines: ["Flexible EMI", "Options"],
        description: "Flexible EMI plans to make learning accessible for everyone.",
        iconSrc: "/photos/schools/marketing/features/tdesign_money.svg",
    },
];

function FeatureIcon({ item }: { item: FeatureItem }) {
    return <MarketingFeatureIcon src={item.iconSrc} />;
}

export function MarketingSeoSmarterLearnSection() {
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
                            Why Learners Prefer HACA
                        </h2>
                        <p
                            className="m-0 text-[16px] font-medium leading-[140%] tracking-normal text-black/70 lg:text-[18px] lg:leading-[150%]"
                            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                        >
                            HACA follows a learning approach where students from Malappuram practice from day one.
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
