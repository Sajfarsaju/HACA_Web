const HEADING_ID = "marketing-thrissur-what-you-learn-heading";

const MODULES = [
    { title: "Advanced SEO", body: "Discover how to rank websites through keywords, on-page and off-page optimisation, technical SEO, and AI-powered search (AEO & GEO)." },
    { title: "Google Ads & Performance Marketing", body: "Run paid campaigns that generate leads and sales. Learn audience targeting strategies for festival promotions, seasonal campaigns, retail engagement, and event marketing." },
    { title: "Meta Ads & Social Media Marketing", body: "Create and scale campaigns on Instagram and Facebook. Learn audience targeting, creatives, and performance tracking." },
    { title: "Content Marketing & Copywriting", body: "Learn how to write content that people actually read and act on. From blogs to ad copies, understand what drives conversions." },
    { title: "E-commerce & Shopify Marketing", body: "Help traditional retail businesses expand online using ecommerce strategies, conversion optimization, and paid advertising." },
    { title: "Influencer Marketing", body: "Plan campaigns with influencers, manage collaborations, and track real results." },
    { title: "Website Development", body: "Create websites and landing pages that are built to convert, not just look good." },
    { title: "AI Tools & Automation", body: "Learn how to use AI in marketing. Automate tasks, optimise for AI-driven search, and build smarter workflows." },
    { title: "Analytics & Data Tracking", body: "Understand what's working and what's not. Learn to use data to improve campaigns and make better decisions." },
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
                        <span className="block text-[36px] leading-[95%] tracking-[0] lg:hidden">Skills You&apos;ll Learn at HACA&apos;s AI-Integrated Digital Marketing Program</span>
                        <span className="hidden text-[55px] leading-[110%] tracking-[-0.01em] lg:block">Skills You&apos;ll Learn at HACA&apos;s AI-Integrated Digital Marketing Program</span>
                    </h2>
                    <p
                        className="m-0 max-w-[345px] text-[16px] font-medium leading-[150%] tracking-[-0.05em] text-[#FFFFFFB2] lg:max-w-[523px] lg:text-[18px]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                    >
                        HACA&apos;s AI-integrated curriculum is designed around real industry requirements, practical execution, and modern digital marketing workflows. This digital marketing training in Thrissur is created to equip you with practical, job-ready skills.
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
