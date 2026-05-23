const HEADING_ID = "marketing-wayanad-what-you-learn-heading";

const MODULES = [
    {
        title: "Search Engine Optimization + AI Search Learning",
        body: "Understand on page SEO, off page SEO, technical SEO, keyword research and AI-focused strategies including AEO and GEO.",
    },
    {
        title: "Google Ads & Performance Marketing",
        body: "Build campaigns designed to improve traffic, leads and business growth.",
    },
    {
        title: "Meta Ads & Social Media Marketing",
        body: "Learn audience targeting and campaign optimisation strategies for Facebook and Instagram.",
    },
    {
        title: "Content Marketing & Copywriting",
        body: "Understand how strategic content attracts attention and improves engagement.",
    },
    {
        title: "Ecommerce & Shopify Marketing",
        body: "Learn digital growth methods used by online businesses and ecommerce brands.",
    },
    {
        title: "Influencer Marketing",
        body: "Understand campaign planning, creator partnerships and performance analysis.",
    },
    {
        title: "Website Design & Development",
        body: "Create websites and landing pages designed around business objectives.",
    },
    {
        title: "AI Tools & Workflow Automation",
        body: "Use AI-powered tools that simplify work and improve productivity.",
    },
    {
        title: "Analytics & Performance Tracking",
        body: "Learn reporting and campaign measurement using analytics platforms.",
    },
] as const;

export function MarketingSeoWhatYouLearnSection() {
    return (
        <section className="w-full bg-black text-white" aria-labelledby={HEADING_ID}>
            <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[30px] px-[clamp(16px,4.16vw,60px)] pb-[10px] pt-[10px] md:px-[clamp(24px,5vw,48px)] lg:gap-[60px] lg:px-[60px] lg:pb-10 lg:pt-5">
                <div className="flex w-full flex-col gap-[10px] lg:mx-0 lg:max-w-[1320px] lg:min-h-[81px] lg:flex-row lg:items-start lg:justify-between lg:gap-[30px]">
                    <h2
                        id={HEADING_ID}
                        className="m-0 max-w-[345px] font-semibold text-white [text-rendering:geometricPrecision] lg:max-w-[767px] lg:shrink-0"
                        style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                    >
                        <span className="block text-[36px] leading-[95%] tracking-[0] lg:hidden">Skills You&apos;ll Develop Inside HACA&apos;s Digital Marketing Course in Wayanad</span>
                        <span className="hidden text-[55px] leading-[110%] tracking-[-0.01em] lg:block">Skills You&apos;ll Develop Inside HACA&apos;s Digital Marketing Course in Wayanad</span>
                    </h2>
                    <p
                        className="m-0 max-w-[345px] text-[16px] font-medium leading-[150%] tracking-[-0.05em] text-[#FFFFFFB2] lg:max-w-[523px] lg:text-[18px]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                    >
                        This advanced Digital Marketing Course combines practical assignments and implementation-focused learning, making it suitable for learners looking for a job-oriented Digital Marketing Course after 12th or graduation.
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
                                    className="m-0 max-w-[233px] font-bold text-[24px] leading-none tracking-[0] text-white lg:leading-[100%]"
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
