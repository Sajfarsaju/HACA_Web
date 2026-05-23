const HEADING_ID = "marketing-palakkad-what-you-learn-heading";

const MODULES = [
    {
        title: "Search Engine Optimization + AI Search Systems",
        body: "Understand keyword research, on page SEO, off page SEO, technical SEO, AEO and GEO optimization.",
    },
    {
        title: "Google Ads & Performance Campaigns",
        body: "Create campaigns focused on measurable growth, traffic and conversions.",
    },
    {
        title: "Meta Ads & Social Growth Strategies",
        body: "Learn audience targeting and campaign optimisation techniques.",
    },
    {
        title: "Content Marketing & Strategic Copywriting",
        body: "Create content designed to attract audiences and encourage action.",
    },
    {
        title: "Ecommerce & Shopify Growth",
        body: "Understand online store management and growth strategies.",
    },
    {
        title: "Influencer Marketing",
        body: "Learn creator collaborations, campaign planning and performance analysis.",
    },
    {
        title: "Website Design & Development",
        body: "Build websites and landing pages designed around business goals.",
    },
    {
        title: "AI Tools & Workflow Automation",
        body: "Use modern AI tools to improve productivity and simplify processes.",
    },
    {
        title: "Analytics & Campaign Tracking",
        body: "Understand campaign reports and performance insights.",
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
                        <span className="block text-[36px] leading-[95%] tracking-[0] lg:hidden">Skills You&apos;ll Master Through HACA&apos;s Digital Marketing Course in Palakkad</span>
                        <span className="hidden text-[55px] leading-[110%] tracking-[-0.01em] lg:block">Skills You&apos;ll Master Through HACA&apos;s Digital Marketing Course in Palakkad</span>
                    </h2>
                    <p
                        className="m-0 max-w-[345px] text-[16px] font-medium leading-[150%] tracking-[-0.05em] text-[#FFFFFFB2] lg:max-w-[523px] lg:text-[18px]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                    >
                        This advanced Digital Marketing Course combines practical projects and live implementation to help learners build industry-ready skills. If you&apos;re searching for a job oriented Digital Marketing Course in Palakkad, this curriculum focuses on what businesses actively hire for.
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
