const HEADING_ID = "marketing-kochi-what-you-learn-heading";

const MODULES = [
    { title: "Search Engine Optimization + AI Search", body: "Understand on page SEO, off page SEO, technical SEO, keyword research, AEO and GEO strategies." },
    { title: "Google Ads and Performance Marketing", body: "Create campaigns designed to generate traffic, leads and measurable results." },
    { title: "Meta Ads and Social Media Marketing", body: "Learn audience targeting and campaign optimization across Instagram and Facebook." },
    { title: "Content Marketing and Copywriting", body: "Learn how content attracts attention and encourages action." },
    { title: "Ecommerce and Shopify Marketing", body: "Understand how online stores grow using campaigns and digital strategies." },
    { title: "Influencer Marketing", body: "Learn campaign planning, creator collaborations and performance tracking." },
    { title: "Website Design and Development", body: "Create websites and landing pages that support business goals." },
    { title: "AI Tools and Automation", body: "Use modern AI tools that help improve speed and productivity." },
    { title: "Analytics and Performance Tracking", body: "Understand reports and campaign performance using analytics tools." },
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
                        <span className="block text-[36px] leading-[95%] tracking-[0] lg:hidden">Skills You&apos;ll Learn in HACA&apos;s AI-Integrated Digital Marketing Course</span>
                        <span className="hidden text-[55px] leading-[110%] tracking-[-0.01em] lg:block">Skills You&apos;ll Learn in HACA&apos;s AI-Integrated Digital Marketing Course</span>
                    </h2>
                    <p
                        className="m-0 max-w-[345px] text-[16px] font-medium leading-[150%] tracking-[-0.05em] text-[#FFFFFFB2] lg:max-w-[523px] lg:text-[18px]"
                        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                    >
                        Our advanced AI-integrated Digital Marketing Course helps students, professionals, freelancers, entrepreneurs, and career switchers build practical digital marketing skills through live projects, assignments, and hands-on activities designed for real industry opportunities.
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
