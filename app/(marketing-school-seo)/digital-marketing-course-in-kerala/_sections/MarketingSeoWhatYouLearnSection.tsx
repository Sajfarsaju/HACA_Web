const HEADING_ID = "marketing-kerala-what-you-learn-heading";

const MODULES = [
    {
        title: "Advanced SEO",
        body: "Master technical SEO, keyword research, on-page optimisation, link building, and AI-powered search strategies that drive real organic growth.",
    },
    {
        title: "Google Ads & Performance Marketing",
        body: "Run paid campaigns that generate leads and sales. Learn targeting, budgeting, and optimisation with real campaign structures.",
    },
    {
        title: "Meta Ads & Social Media Marketing",
        body: "Create and scale campaigns on Instagram and Facebook. Learn audience targeting, creatives, and performance tracking.",
    },
    {
        title: "Content Marketing & Copywriting",
        body: "Learn how to write content that people actually read and act on. From blogs to ad copies, understand what drives conversions.",
    },
    {
        title: "E-commerce & Shopify Marketing",
        body: "Build and grow online stores. Learn product setup, conversion optimisation, and how to run ads for e-commerce brands.",
    },
    {
        title: "Influencer Marketing",
        body: "Plan campaigns with influencers, manage collaborations, and track real results.",
    },
    {
        title: "Website Development",
        body: "Create websites and landing pages that are built to convert, not just look good.",
    },
    {
        title: "AI Tools & Automation (AEO, GEO)",
        body: "Learn how to use AI in marketing. Automate tasks, optimise for AI-driven search, and build smarter workflows.",
    },
    {
        title: "Analytics & Data Tracking",
        body: "Understand what's working and what's not. Learn to use data to improve campaigns and make better decisions.",
    },
] as const;

export function MarketingSeoWhatYouLearnSection() {
    return (
        <section className="w-full bg-black text-white" aria-labelledby={HEADING_ID}>
            <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[30px] px-[clamp(16px,4.16vw,60px)] pb-[10px] pt-[10px] md:px-[clamp(24px,5vw,48px)] lg:gap-[60px] lg:px-[60px] lg:pb-10 lg:pt-5">
                <div className="flex w-full flex-col gap-[10px] lg:mx-0 lg:max-w-[1320px] lg:flex-row lg:items-end lg:justify-between lg:gap-[60px]">
                    <h2
                        id={HEADING_ID}
                        className="m-0 max-w-[345px] shrink-0 font-semibold text-white [text-rendering:geometricPrecision] lg:max-w-[min(720px,58%)]"
                        style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                    >
                        <span className="flex flex-col text-[36px] leading-[95%] tracking-[0] lg:hidden">
                            <span className="block">What You&apos;ll Learn in This</span>
                            <span className="block">Digital Marketing Course</span>
                            <span className="block">in Kerala</span>
                        </span>
                        <span className="hidden flex-col text-[55px] leading-[110%] tracking-[-0.01em] lg:flex">
                            <span className="block">What You&apos;ll Learn in This Digital</span>
                            <span className="block">Marketing Course in Kerala</span>
                        </span>
                    </h2>
                    <p
                        className="m-0 mt-2 max-w-[345px] text-[16px] leading-[140%] tracking-[0] text-[#FFFFFFB2] lg:m-0 lg:max-w-[420px] lg:text-[18px] lg:leading-[150%]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 400 }}
                    >
                        500+ hours of practical, AI-integrated training across the most in-demand digital marketing skills — from SEO and paid ads to AI automation and web development.
                    </p>
                </div>

                <div className="flex w-full flex-col gap-10 lg:mx-0 lg:max-w-[1320px] lg:grid lg:grid-cols-3 lg:gap-[60px]">
                    {MODULES.map((mod, index) => {
                        const zigzagRight = index % 2 === 1;
                        return (
                            <article
                                key={mod.title}
                                className={
                                    zigzagRight
                                        ? "flex max-w-[345px] flex-col gap-[10px] max-lg:ml-auto max-lg:items-start max-lg:text-left lg:max-w-[364px] lg:items-start lg:text-left"
                                        : "flex max-w-[345px] flex-col gap-[10px] max-lg:mr-auto max-lg:items-start max-lg:text-left lg:max-w-[364px]"
                                }
                            >
                                <h3
                                    className="m-0 max-w-[233px] font-bold text-[24px] leading-none tracking-[0] text-white lg:max-w-[364px] lg:leading-[100%]"
                                    style={{ fontFamily: "Darker Grotesque, sans-serif", fontWeight: 700 }}
                                >
                                    {mod.title}
                                </h3>
                                <p
                                    className="m-0 max-w-[196px] text-[16px] font-normal leading-[120%] tracking-[0] text-[#FFFFFFB2] lg:max-w-[364px]"
                                    style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 400 }}
                                >
                                    {mod.body}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
