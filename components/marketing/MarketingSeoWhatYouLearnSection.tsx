const HEADING_ID = "marketing-calicut-what-you-learn-heading";

const MODULES = [
    {
        title: "Advanced SEO",
        body: "Learn to rank websites using keywords, on-page, technical SEO, and AI-driven search (AEO & GEO).",
    },
    {
        title: "Google Ads & Performance Marketing",
        body: "Create and optimise ad campaigns that generate real leads and sales.",
    },
    {
        title: "Meta Ads & Social Media Marketing",
        body: "Run high-performing campaigns on Instagram and Facebook with the right targeting.",
    },
    {
        title: "Content Marketing & Copywriting",
        body: "Write content that attracts attention and drives action.",
    },
    {
        title: "E-commerce & Shopify Marketing",
        body: "Build and grow online stores, from setup to scaling sales.",
    },
    {
        title: "Influencer Marketing",
        body: "Plan campaigns, collaborate with influencers, and track results.",
    },
    {
        title: "Website Development",
        body: "Create conversion-focused websites and landing pages.",
    },
    {
        title: "AI Tools & Automation",
        body: "Use AI tools to automate tasks and improve efficiency.",
    },
    {
        title: "Analytics & Data Tracking",
        body: "Track performance using tools like Google Analytics and make smarter decisions.",
    },
] as const;

export function MarketingSeoWhatYouLearnSection() {
    return (
        <section className="w-full bg-black text-white" aria-labelledby={HEADING_ID}>
            <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[30px] px-[clamp(16px,4.16vw,60px)] pb-[10px] pt-[10px] md:px-[clamp(24px,5vw,48px)] lg:gap-[60px] lg:px-[60px] lg:pb-10 lg:pt-5">
                {/* Heading + intro */}
                <div className="flex w-full flex-col gap-[10px] lg:mx-0 lg:max-w-[1320px] lg:min-h-[81px] lg:flex-row lg:items-start lg:justify-between lg:gap-[30px]">
                    <h2
                        id={HEADING_ID}
                        className="m-0 max-w-[345px] font-semibold text-white [text-rendering:geometricPrecision] lg:max-w-[350px]"
                        style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                    >
                        <span className="block text-[36px] leading-[95%] tracking-[0] lg:hidden">What You&apos;ll Learn</span>
                        <span className="hidden text-[55px] leading-[110%] tracking-[-0.01em] lg:block">What You&apos;ll Learn</span>
                    </h2>
                    <p
                        className="m-0 max-w-[345px] text-[16px] font-medium leading-[150%] tracking-[-0.05em] text-[#FFFFFFB2] lg:max-w-[523px] lg:text-[18px]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                    >
                        This digital marketing course in Calicut is designed to give you real and usable skills. Every module focuses on helping you
                        understand, apply, and confidently execute what you learn in real-world scenarios.
                    </p>
                </div>

                {/* Module cards: 3×3 desktop, zigzag mobile */}
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
                                    className={
                                        zigzagRight
                                            ? "m-0 max-w-[196px] text-[16px] font-normal leading-[120%] tracking-[0] text-[#FFFFFFB2] lg:max-w-[364px]"
                                            : "m-0 max-w-[196px] text-[16px] font-normal leading-[120%] tracking-[0] text-[#FFFFFFB2] lg:max-w-[364px]"
                                    }
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
