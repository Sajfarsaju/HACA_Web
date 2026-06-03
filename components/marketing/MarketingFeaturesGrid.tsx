"use client"

import { MarketingFeatureIcon } from "@/components/marketing/MarketingFeatureIcon";

type FeatureItem = {
    /** Exactly two lines — must match Figma line breaks */
    titleLines: readonly [string, string]
    /** Exactly three lines — must match Figma line breaks */
    descriptionLines: readonly [string, string, string]
    iconSrc: string
}

const FEATURES: FeatureItem[] = [
    {
        titleLines: ["Flexible EMI", "Options"],
        descriptionLines: [
            "Along with full career guidance,",
            "we also offer flexible EMI options",
            "to make learning accessible.",
        ],
        iconSrc: "/photos/schools/marketing/features/tdesign_money.svg",
    },
    {
        titleLines: ["Learn by Doing, Not", "Just Listening"],
        descriptionLines: [
            "Run ads, build SEO websites,",
            "create content, test ideas and",
            "learn by actually doing it.",
        ],
        iconSrc: "/photos/schools/marketing/features/Laptop.svg",
    },
    {
        titleLines: ["Hands-On Projects, Real", "Campaigns"],
        descriptionLines: [
            "You will work on real campaigns",
            "that give you real results you",
            "can show in interviews.",
        ],
        iconSrc: "/photos/schools/marketing/features/Student.svg",
    },
    {
        titleLines: ["Learn From Industry", "Expert Mentors"],
        descriptionLines: [
            "Your mentors are marketers,",
            "strategists, founders, and",
            "creators.",
        ],
        iconSrc: "/photos/schools/marketing/features/Handshake.svg",
    },
    {
        titleLines: ["One-on-One", "Mentorship"],
        descriptionLines: [
            "If you get stuck, someone is",
            "always there to guide you",
            "one-on-one.",
        ],
        iconSrc: "/photos/schools/marketing/features/Browsers.svg",
    },
    {
        titleLines: ["Build a Real", "Portfolio"],
        descriptionLines: [
            "By the time you finish, you'll",
            "have projects that recruiters",
            "actually want to see.",
        ],
        iconSrc: "/photos/schools/marketing/features/Users.svg",
    },
    {
        titleLines: ["Guest Sessions &", "Industry Talks"],
        descriptionLines: [
            "Learn tips, tricks, and real",
            "stories from people working in",
            "top companies.",
        ],
        iconSrc: "/photos/schools/marketing/features/Lightbulb.svg",
    },
    {
        titleLines: ["Full Career", "Support"],
        descriptionLines: [
            "We help you polish your",
            "resume, prepare for interviews,",
            "and connect with companies.",
        ],
        iconSrc: "/photos/schools/marketing/features/Globe.svg",
    },
]

function FeatureIcon({ item }: { item: FeatureItem }) {
    return <MarketingFeatureIcon src={item.iconSrc} />;
}

export function MarketingFeaturesGrid() {
    return (
        <div className="box-border w-full min-w-0 max-w-full px-0">
            <ul
                className="
                    m-0 grid w-full list-none grid-cols-1 items-start justify-items-stretch gap-x-6 gap-y-10 p-0
                    sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14
                    lg:grid-cols-4 lg:justify-items-start lg:gap-x-[40px] lg:gap-y-[142px]
                "
            >
                {FEATURES.map((item, idx) => (
                    <li
                        key={item.titleLines.join(" ")}
                        className={[
                            "flex w-full min-w-0 flex-col items-start text-left max-sm:w-fit lg:w-fit",
                            /* Mobile: zig-zag — alternate left/right alignment without extra side gaps */
                            idx % 2 === 0
                                ? "max-sm:justify-self-start max-sm:max-w-[220px] sm:max-w-none"
                                : [
                                      "max-sm:justify-self-end max-sm:self-start",
                                      "max-sm:max-w-[220px]",
                                      "sm:ml-0 sm:max-w-none",
                                  ].join(" "),
                            "lg:max-w-none",
                        ].join(" ")}
                    >
                        <div className="mb-3 shrink-0 max-sm:mb-2.5 lg:mb-5">
                            <FeatureIcon item={item} />
                        </div>
                        <h3
                            className="
                                mb-2 w-full min-w-0 text-left font-bold tracking-normal                                [font-family:'Darker_Grotesque',sans-serif]
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
                                m-0 w-full min-w-0 max-w-none text-left font-medium tracking-normal                                font-['Satoshi',sans-serif]
                                max-sm:text-[0.8125rem] max-sm:leading-[130%]
                                sm:text-[0.9375rem] sm:leading-[125%]
                                lg:w-auto lg:text-base lg:leading-[120%]
                            "
                        >
                            {item.descriptionLines[0]}
                            <br aria-hidden />
                            {item.descriptionLines[1]}
                            <br aria-hidden />
                            {item.descriptionLines[2]}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
