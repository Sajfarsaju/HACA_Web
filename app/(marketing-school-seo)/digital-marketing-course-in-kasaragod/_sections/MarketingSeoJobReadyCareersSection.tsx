import Image from "next/image";

const HEADING_ID = "marketing-seo-kasaragod-job-ready-careers-heading";

const SUBTITLE = "Career Paths After Our Digital Marketing Course in Kasaragod";
const INTRO =
    "Digital marketing opens doors to opportunities across industries. With practical training, real projects, and hands-on experience, you'll be ready to explore multiple career paths like:";

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
        id: "social-media-executive",
        title: "Social Media Executive",
        description:
            "Manage social platforms, create engaging content, interact with audiences, and help brands grow online.",
        iconFile: "Social Media Manager.svg",
        mobileOrder: 1,
        desktopOrder: 1,
    },
    {
        id: "content-marketing-specialist",
        title: "Content Marketing Specialist",
        description:
            "Create meaningful content through blogs, videos, campaigns, and digital storytelling strategies.",
        iconFile: "Content Marketer.svg",
        mobileOrder: 2,
        desktopOrder: 2,
    },
    {
        id: "seo-executive",
        title: "Search Engine Optimization Executive",
        description: "Improve website visibility on search engines and help businesses reach the right audience organically.",
        iconFile: "SEO Specialist.svg",
        mobileOrder: 3,
        desktopOrder: 3,
    },
    {
        id: "marketing-data-analyst",
        title: "Marketing Data Analyst",
        description: "Track campaign performance, interpret insights, and help brands make smarter marketing decisions.",
        iconFile: "Digital Marketing Analyst.svg",
        mobileOrder: 4,
        desktopOrder: 4,
    },
    {
        id: "email-campaign-specialist",
        title: "Email Campaign Specialist",
        description: "Design and manage targeted email campaigns that increase engagement and customer retention.",
        iconFile: "Email Marketing Specialist.svg",
        mobileOrder: 5,
        desktopOrder: 5,
    },
    {
        id: "performance-marketing-executive",
        title: "Performance Marketing Executive",
        description: "Handle paid campaigns across search engines and social platforms with a focus on measurable growth.",
        iconFile: "PPC Specialist  Performance Marketer.svg",
        mobileOrder: 6,
        desktopOrder: 6,
    },
    {
        id: "digital-marketing-lead",
        title: "Digital Marketing Lead",
        description: "Coordinate campaigns, oversee marketing activities, and develop strategies for brand growth.",
        iconFile: "Digital Marketing Manager.svg",
        mobileOrder: 7,
        desktopOrder: 7,
    },
    {
        id: "online-store-marketing-specialist",
        title: "Online Store Marketing Specialist",
        description: "Support businesses in growing their online sales through campaigns, promotions, and optimization techniques.",
        iconFile: "E-commerce Marketer.svg",
        mobileOrder: 8,
        desktopOrder: 8,
    },
    {
        id: "creator-partnership-strategist",
        title: "Creator & Partnership Strategist",
        description: "Build collaborations with creators and influencers to expand brand reach and engagement.",
        iconFile: "Influencer Marketing Specialist.svg",
        mobileOrder: 9,
        desktopOrder: 9,
    },
    {
        id: "brand-communication-strategist",
        title: "Brand Communication Strategist",
        description:
            "Develop campaign ideas and creative concepts that strengthen brand identity.",
        iconFile: "Creative Strategist.svg",
        mobileOrder: 10,
        desktopOrder: 10,
    },
    {
        id: "web-solutions-developer",
        title: "Web Solutions Developer",
        description: "Create and manage websites that support marketing goals and improve user experience.",
        iconFile: "Website Developer.svg",
        mobileOrder: 11,
        desktopOrder: 11,
    },
    {
        id: "content-copy-specialist",
        title: "Content & Copy Specialist",
        description: "Craft compelling content and messaging that connects with audiences and drives action.",
        iconFile: "Copywriter.svg",
        mobileOrder: 12,
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
            </article>
        </li>
    );
}

export function MarketingSeoJobReadyCareersSection() {
    return (
        <section
            id="marketing-seo-kasaragod-job-ready-careers"
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
                        Get Job Ready Skills in Just 5 Months
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
                    <p
                        className="
                            m-0 w-full max-w-[335px] font-normal text-[#000000B2]
                            text-[15px] leading-[1.4] tracking-normal
                            [font-family:'Satoshi',sans-serif]
                            lg:max-w-[800px] lg:text-[17px]
                        "
                    >
                        {INTRO}
                    </p>
                </header>

                <ul
                    className="
                        m-0 flex w-full min-w-0 list-none flex-col gap-5 p-0
                        lg:mx-auto lg:grid lg:max-w-[1320px] lg:grid-cols-4 lg:gap-4
                    "
                    aria-label="Digital marketing career paths after HACA Kasaragod course"
                >
                    {CAREERS.map((career) => (
                        <CareerPathCard key={career.id} career={career} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
