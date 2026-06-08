import { MarketingFeatureIcon } from "@/components/marketing/MarketingFeatureIcon";

const TITLE_ID = "marketing-india-smarter-learn-title";

type FeatureItem = {
    titleLines: readonly [string, string];
    description: string;
    iconSrc: string;
};

const FEATURES: FeatureItem[] = [
    {
        titleLines: ["Live Projects &", "Industry Activities"],
        description: "Apply concepts through practical projects designed around real business situations.",
        iconSrc: "/photos/schools/marketing/features/Student.svg",
    },
    {
        titleLines: ["Learn From", "Experienced Mentors"],
        description: "Receive guidance from professionals actively working in the digital marketing industry.",
        iconSrc: "/photos/schools/marketing/features/Handshake.svg",
    },
    {
        titleLines: ["Career Development", "Support"],
        description: "Build resumes, portfolios, interview confidence, and job readiness.",
        iconSrc: "/photos/schools/marketing/features/Globe.svg",
    },
    {
        titleLines: ["Learn By", "Doing"],
        description: "Implement strategies rather than simply learning theories.",
        iconSrc: "/photos/schools/marketing/features/Laptop.svg",
    },
    {
        titleLines: ["One-to-One", "Mentorship"],
        description: "Get personalised guidance throughout your learning journey.",
        iconSrc: "/photos/schools/marketing/features/Browsers.svg",
    },
    {
        titleLines: ["Guest Sessions &", "Industry Insights"],
        description: "Stay informed about current trends, technologies, and opportunities.",
        iconSrc: "/photos/schools/marketing/features/Lightbulb.svg",
    },
    {
        titleLines: ["Build A", "Professional Portfolio"],
        description: "Showcase your work through practical projects completed during the program.",
        iconSrc: "/photos/schools/marketing/features/Users.svg",
    },
    {
        titleLines: ["Flexible Payment", "Options"],
        description: "Choose learner-friendly payment plans designed to support your growth.",
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
                        <header className="mx-auto flex w-full max-w-[335px] flex-col gap-4 text-center lg:max-w-[934px] lg:gap-5">
                            <h2
                                id={TITLE_ID}
                                className="m-0 mx-auto w-full max-w-[335px] text-center font-semibold text-[36px] leading-[95%] tracking-[-0.01em] text-black [font-family:'Darker_Grotesque',sans-serif] [text-rendering:geometricPrecision] lg:max-w-[934px] lg:text-[55px] lg:leading-[110%]"
                                style={{ fontWeight: 600 }}
                            >
                                <span className="flex flex-col lg:hidden">
                                    <span className="block">Learn with the Best Digital</span>
                                    <span className="block">Marketing Institute Online</span>
                                </span>
                                <span className="hidden lg:inline">
                                    Learn with the Best Digital Marketing Institute Online
                                </span>
                            </h2>
                            <p
                                className="m-0 text-[16px] font-medium leading-[140%] tracking-[-0.05em] text-black/70 lg:text-[18px] lg:leading-[150%]"
                                style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                            >
                                HACA&apos;s hands-on, learn-by-doing method enables students to build practical digital
                                marketing experience from day one.
                            </p>
                        </header>

                        <div className="mt-[clamp(28px,4.5vw,48px)] w-full min-w-0">
                            <ul className="m-0 grid w-full list-none grid-cols-1 items-start justify-items-stretch gap-x-6 gap-y-10 p-0 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4 lg:justify-items-start lg:gap-x-10 lg:gap-y-[clamp(48px,8vw,142px)]">
                                {FEATURES.map((item) => (
                                    <li
                                        key={item.titleLines.join(" ")}
                                        className="flex w-full min-w-0 max-w-none flex-col items-start text-left sm:max-w-none lg:w-fit lg:max-w-none"
                                    >
                                        <div className="mb-3 shrink-0 max-sm:mb-2.5 lg:mb-5">
                                            <FeatureIcon item={item} />
                                        </div>
                                        <h3 className="mb-2 w-full min-w-0 text-left font-bold tracking-normal text-black [font-family:'Darker_Grotesque',sans-serif] max-sm:mb-2 max-sm:text-[1.125rem] max-sm:leading-[1.05] sm:text-xl sm:leading-[100%] lg:mb-2.5 lg:w-auto lg:text-2xl">
                                            {item.titleLines[0]}
                                            <br aria-hidden />
                                            {item.titleLines[1]}
                                        </h3>
                                        <p className="m-0 w-full min-w-0 max-w-none text-left font-medium tracking-normal text-black/75 font-['Satoshi',sans-serif] max-sm:text-[0.8125rem] max-sm:leading-[130%] sm:text-[0.9375rem] sm:leading-[125%] lg:w-auto lg:text-base lg:leading-[120%]">
                                            {item.description}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
