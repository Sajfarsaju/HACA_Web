const HEADING_ID = "marketing-kasaragod-what-you-learn-heading";

const MODULES = [
    {
        title: "SEO + AI Driven Search Strategies",
        body: "Learn keyword research, on page SEO, off page SEO, technical SEO along with AEO and GEO techniques.",
    },
    {
        title: "Google Ads and Performance Campaigns",
        body: "Create campaigns that focus on leads, conversions and measurable growth.",
    },
    {
        title: "Social Media and Meta Advertising",
        body: "Learn campaign creation, audience targeting and performance optimization.",
    },
    {
        title: "Content Marketing and Conversion Copywriting",
        body: "Understand how strategic content influences audience behavior and actions.",
    },
    {
        title: "Ecommerce and Shopify Growth Strategies",
        body: "Discover how businesses build and scale online stores.",
    },
    {
        title: "Influencer Collaboration Strategy",
        body: "Learn campaign planning, creator partnerships and performance tracking.",
    },
    {
        title: "Website Design and Development",
        body: "Build websites and landing pages designed around business objectives.",
    },
    {
        title: "AI Tools and Workflow Automation",
        body: "Use AI tools to improve productivity and streamline digital tasks.",
    },
    {
        title: "Analytics and Data Insights",
        body: "Learn campaign reporting and performance tracking using analytics tools.",
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
                        <span className="block text-[36px] leading-[95%] tracking-[0] lg:hidden">Skills You&apos;ll Build with HACA&apos;s Digital Marketing Program in Kasaragod</span>
                        <span className="hidden text-[55px] leading-[110%] tracking-[-0.01em] lg:block">Skills You&apos;ll Build with HACA&apos;s Digital Marketing Program in Kasaragod</span>
                    </h2>
                    <p
                        className="m-0 max-w-[345px] text-[16px] font-medium leading-[150%] tracking-[-0.05em] text-[#FFFFFFB2] lg:max-w-[523px] lg:text-[18px]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                    >
                        This AI powered Digital Marketing Course focuses on practical implementation and live projects, making it suitable for anyone searching for a career focused Digital Marketing Course after plus two or graduation.
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
