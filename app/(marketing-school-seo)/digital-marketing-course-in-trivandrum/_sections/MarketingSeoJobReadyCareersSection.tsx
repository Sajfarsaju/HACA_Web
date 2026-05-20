import Image from "next/image";

const HEADING_ID = "marketing-seo-trivandrum-job-ready-careers-heading";

const SUBTITLE = "Careers After Our Digital Marketing Course in Trivandrum";

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
    {
        id: "social-media-manager",
        title: "Social Media Manager",
        description:
            "Plan, create, and post content on social media. Engage with followers and track results.",
        iconFile: "Social Media Manager.svg",
        mobileOrder: 11,
        desktopOrder: 1,
    },
    {
        id: "content-marketer",
        title: "Content Marketer",
        description:
            "Write blogs, create videos, and share valuable content to attract and retain customers.",
        iconFile: "Content Marketer.svg",
        mobileOrder: 1,
        desktopOrder: 2,
    },
    {
        id: "seo-specialist",
        title: "SEO Specialist",
        description: "Improve website rankings on Google by using the right keywords and strategies.",
        iconFile: "SEO Specialist.svg",
        mobileOrder: 2,
        desktopOrder: 3,
    },
    {
        id: "digital-marketing-analyst",
        title: "Digital Marketing Analyst",
        description: "Study data from campaigns and suggest ways to get better results.",
        iconFile: "Digital Marketing Analyst.svg",
        mobileOrder: 3,
        desktopOrder: 4,
    },
    {
        id: "email-marketing-specialist",
        title: "Email Marketing Specialist",
        description: "Send targeted emails to get leads, keep customers, and boost sales.",
        iconFile: "Email Marketing Specialist.svg",
        mobileOrder: 4,
        desktopOrder: 5,
    },
    {
        id: "ppc-specialist",
        title: "PPC Specialist / Performance Marketer",
        description: "Run and manage paid ads on Google and social media for the best ROI.",
        iconFile: "PPC Specialist  Performance Marketer.svg",
        mobileOrder: 5,
        desktopOrder: 6,
    },
    {
        id: "digital-marketing-manager",
        title: "Digital Marketing Manager",
        description: "Oversee all digital marketing work, manage teams, and plan strategies.",
        iconFile: "Digital Marketing Manager.svg",
        mobileOrder: 6,
        desktopOrder: 7,
    },
    {
        id: "ecommerce-marketer",
        title: "E-commerce Marketer",
        description: "Promote and sell products online by improving listings and running campaigns.",
        iconFile: "E-commerce Marketer.svg",
        mobileOrder: 12,
        desktopOrder: 8,
    },
    {
        id: "influencer-marketing-specialist",
        title: "Influencer Marketing Specialist",
        description: "Work with influencers to promote products and track campaign success.",
        iconFile: "Influencer Marketing Specialist.svg",
        mobileOrder: 7,
        desktopOrder: 9,
    },
    {
        id: "creative-strategist",
        title: "Creative Strategist",
        description:
            "Come up with fresh marketing ideas and creative campaigns that connect with people.",
        iconFile: "Creative Strategist.svg",
        mobileOrder: 8,
        desktopOrder: 10,
    },
    {
        id: "website-developer",
        title: "Website Developer",
        description: "Build and maintain websites so they look good and work well.",
        iconFile: "Website Developer.svg",
        mobileOrder: 9,
        desktopOrder: 11,
    },
    {
        id: "copywriter",
        title: "Copywriter",
        description: "Write catchy and persuasive content to attract and engage readers.",
        iconFile: "Copywriter.svg",
        mobileOrder: 10,
        desktopOrder: 12,
    },
];

function orderClasses(mobile: number, desktop: number) {
    return `order-${mobile} lg:order-${desktop}`;
}

function CareerPathCard({ career }: { career: CareerCard }) {
    return (
        <li className={`min-w-0 ${orderClasses(career.mobileOrder, career.desktopOrder)}`}>
            <article className="box-border flex h-[200px] w-full flex-col gap-2 rounded-xl border border-[#FFFFFF33] bg-[#E6EFFF] p-4">
                <CareerCardContent career={career} />
            </article>
        </li>
    );
}

function CareerCardContent({ career }: { career: CareerCard }) {
    return (
        <div className="flex min-h-0 w-full flex-1 flex-col gap-2 lg:max-w-[286px]">
            <div className="relative h-6 w-6 shrink-0">
                <Image
                    src={marketingIconSrc(career.iconFile)}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain object-left"
                    aria-hidden
                />
            </div>
            <h3
                className="
                    m-0 text-left font-semibold leading-[1.5] tracking-normal text-black
                    [font-family:'Darker_Grotesque',sans-serif] text-[22px]
                "
            >
                {career.title}
            </h3>
            <p
                className="
                    m-0 text-left font-normal leading-[1.2] tracking-[-0.05em] text-[#000000B2]
                    [font-family:'Satoshi',sans-serif] text-[16px]
                "
            >
                {career.description}
            </p>
        </div>
    );
}

export function MarketingSeoJobReadyCareersSection() {
    return (
        <section
            id="marketing-seo-trivandrum-job-ready-careers"
            className="w-full bg-white text-black opacity-100"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-6 py-5
                    px-[clamp(16px,4.16vw,60px)] md:px-[clamp(24px,5vw,48px)]
                    lg:min-h-[915px] lg:gap-[30px] lg:px-[60px] lg:py-10
                "
            >
                <header
                    className="
                        mx-auto flex w-full flex-col items-center gap-[10px] text-center
                        lg:max-w-[1320px] lg:px-0
                    "
                >
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 w-full max-w-[335px] font-semibold tracking-[-0.05em] text-black
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[36px] leading-[0.95] [text-rendering:geometricPrecision]
                            lg:max-w-[667px] lg:text-[55px] lg:leading-[1.1] lg:tracking-[-0.01em]
                        "
                    >
                        <span className="lg:hidden">
                            Develop the Skills That Make You
                            <br />
                            Job-Ready in 6 Months
                        </span>
                        <span className="hidden lg:inline">
                            Develop the Skills That Make You
                            <br />
                            Job-Ready in 6 Months
                        </span>
                    </h2>
                    <p
                        className="
                            m-0 w-full max-w-[335px] font-medium text-black
                            text-[18px] leading-[1.2] tracking-normal
                            [font-family:'Satoshi',sans-serif]
                            lg:max-w-[800px] lg:text-[24px] lg:leading-[1.1] lg:tracking-[-0.01em]
                        "
                    >
                        {SUBTITLE}
                    </p>
                </header>

                <ul
                    className="
                        m-0 flex w-full min-w-0 list-none flex-col gap-5 p-0
                        lg:mx-auto lg:grid lg:max-w-[1320px] lg:grid-cols-4 lg:gap-4
                    "
                    aria-label="Digital marketing career paths after HACA Trivandrum course"
                >
                    {CAREERS.map((career) => (
                        <CareerPathCard key={career.id} career={career} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
