import Image from "next/image";

const HEADING_ID = "marketing-seo-malappuram-job-ready-careers-heading";

const SUBTITLE = "Job roles you can pursue after completing HACA's Digital Marketing Course in Malappuram";

function marketingIconSrc(filename: string) {
    return `/photos/schools/marketing/${encodeURIComponent(filename)}`;
}

type CareerCard = {
    id: string;
    title: string;
    description: string;
    iconFile: string;
    mobileOrder: number;
    desktopOrder: number;
};

const CAREERS: CareerCard[] = [
    { id: "social-media-executive", title: "Social Media Executive", description: "Plan, create, and schedule content on social platforms. Grow engagement and track performance.", iconFile: "Social Media Manager.svg", mobileOrder: 11, desktopOrder: 1 },
    { id: "content-marketing-specialist", title: "Content Marketing Specialist", description: "Write blogs, create videos, and develop content that attracts and retains customers.", iconFile: "Content Marketer.svg", mobileOrder: 1, desktopOrder: 2 },
    { id: "seo-executive", title: "SEO Executive", description: "Improve website rankings on search engines by applying on-page, off-page, and technical SEO.", iconFile: "SEO Specialist.svg", mobileOrder: 2, desktopOrder: 3 },
    { id: "marketing-data-analyst", title: "Marketing Data Analyst", description: "Analyse campaign data to uncover insights and improve marketing performance.", iconFile: "Digital Marketing Analyst.svg", mobileOrder: 3, desktopOrder: 4 },
    { id: "email-marketing-specialist", title: "Email Marketing Specialist", description: "Build and send targeted email campaigns to generate leads and nurture customers.", iconFile: "Email Marketing Specialist.svg", mobileOrder: 4, desktopOrder: 5 },
    { id: "performance-marketing-executive", title: "Performance Marketing Executive", description: "Run and optimise paid ad campaigns on Google and social media for measurable ROI.", iconFile: "PPC Specialist  Performance Marketer.svg", mobileOrder: 5, desktopOrder: 6 },
    { id: "digital-marketing-lead", title: "Digital Marketing Lead", description: "Oversee campaigns, manage teams, and drive overall digital marketing strategy.", iconFile: "Digital Marketing Manager.svg", mobileOrder: 6, desktopOrder: 7 },
    { id: "ecommerce-marketing-executive", title: "E-commerce Marketing Executive", description: "Grow online stores through campaigns, product listings, and marketplace strategies.", iconFile: "E-commerce Marketer.svg", mobileOrder: 12, desktopOrder: 8 },
    { id: "influencer-partnership-specialist", title: "Influencer Partnership Specialist", description: "Identify creators, plan collaboration campaigns, and measure influencer marketing results.", iconFile: "Influencer Marketing Specialist.svg", mobileOrder: 7, desktopOrder: 9 },
    { id: "brand-strategist", title: "Brand Strategist", description: "Develop brand positioning, messaging, and campaign ideas that connect with audiences.", iconFile: "Creative Strategist.svg", mobileOrder: 8, desktopOrder: 10 },
    { id: "web-solutions-developer", title: "Web Solutions Developer", description: "Build and manage websites and landing pages that support business and marketing goals.", iconFile: "Website Developer.svg", mobileOrder: 9, desktopOrder: 11 },
    { id: "content-copy-specialist", title: "Content and Copy Specialist", description: "Write persuasive copy and engaging content for ads, websites, emails, and social media.", iconFile: "Copywriter.svg", mobileOrder: 10, desktopOrder: 12 },
];

function CareerPathCard({ career }: { career: CareerCard }) {
    return (
        <li className={`min-w-0 order-${career.mobileOrder} lg:order-${career.desktopOrder}`}>
            <article className="box-border flex h-[200px] w-full flex-col gap-2 rounded-xl border border-[#FFFFFF33] bg-[#E6EFFF] p-4">
                <div className="flex min-h-0 w-full flex-1 flex-col gap-2 lg:max-w-[286px]">
                    <div className="relative h-6 w-6 shrink-0">
                        <Image src={marketingIconSrc(career.iconFile)} alt="" width={24} height={24} className="h-6 w-6 object-contain object-left" aria-hidden />
                    </div>
                    <h3 className="m-0 text-left font-semibold leading-[1.5] tracking-normal text-black [font-family:'Darker_Grotesque',sans-serif] text-[22px]">
                        {career.title}
                    </h3>
                    <p className="m-0 text-left font-normal leading-[1.2] tracking-[-0.05em] text-[#000000B2] [font-family:'Satoshi',sans-serif] text-[16px]">
                        {career.description}
                    </p>
                </div>
            </article>
        </li>
    );
}

export function MarketingSeoJobReadyCareersSection() {
    return (
        <section
            id="marketing-seo-malappuram-job-ready-careers"
            className="w-full bg-white text-black opacity-100"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div className="mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-6 py-5 px-[clamp(16px,4.16vw,60px)] md:px-[clamp(24px,5vw,48px)] lg:min-h-[915px] lg:gap-[30px] lg:px-[60px] lg:py-10">
                <header className="mx-auto flex w-full flex-col items-center gap-[10px] text-center lg:max-w-[1320px] lg:px-0">
                    <h2
                        id={HEADING_ID}
                        className="m-0 w-full max-w-[335px] font-semibold tracking-[-0.05em] text-black [font-family:'Darker_Grotesque',sans-serif] text-[36px] leading-[0.95] [text-rendering:geometricPrecision] lg:max-w-none lg:text-[55px] lg:leading-[1.1] lg:tracking-[-0.01em]"
                    >
                        <span className="lg:hidden">Get Job Ready Skills in Just 5 Months</span>
                        <span className="hidden whitespace-nowrap lg:inline">Get Job Ready Skills in Just 5 Months</span>
                    </h2>
                    <p className="m-0 w-full max-w-[335px] font-medium text-black text-[18px] leading-[1.2] tracking-normal [font-family:'Satoshi',sans-serif] lg:max-w-[800px] lg:text-[24px] lg:leading-[1.1] lg:tracking-[-0.01em]">
                        {SUBTITLE}
                    </p>
                </header>

                <ul
                    className="m-0 flex w-full min-w-0 list-none flex-col gap-5 p-0 lg:mx-auto lg:grid lg:max-w-[1320px] lg:grid-cols-4 lg:gap-4"
                    aria-label="Digital marketing career paths after HACA Malappuram course"
                >
                    {CAREERS.map((career) => (
                        <CareerPathCard key={career.id} career={career} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
