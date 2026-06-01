import Image from "next/image";

const HEADING_ID = "dubai-job-ready-careers-heading";

function marketingIconSrc(filename: string) {
    return `/photos/schools/marketing/${encodeURIComponent(filename)}`;
}

type CareerCard = {
    id: string;
    title: string;
    description: string;
    iconFile: string;
};

const CAREERS: CareerCard[] = [
    {
        id: "social-media-manager",
        title: "Social Media Manager",
        description: "Craft and manage engaging campaigns across platforms.",
        iconFile: "Social Media Manager.svg",
    },
    {
        id: "content-marketer",
        title: "Content Marketer",
        description: "Produce blogs, videos, and social media content that captivates.",
        iconFile: "Content Marketer.svg",
    },
    {
        id: "seo-specialist",
        title: "SEO Specialist",
        description: "Optimise websites to rank higher and attract traffic.",
        iconFile: "SEO Specialist.svg",
    },
    {
        id: "digital-marketing-analyst",
        title: "Digital Marketing Analyst",
        description: "Analyse campaign data and maximise ROI.",
        iconFile: "Digital Marketing Analyst.svg",
    },
    {
        id: "email-marketing-specialist",
        title: "Email Marketing Specialist",
        description: "Design targeted campaigns that convert leads into customers.",
        iconFile: "Email Marketing Specialist.svg",
    },
    {
        id: "ppc-specialist",
        title: "PPC Specialist / Performance Marketer",
        description: "Run paid campaigns that deliver measurable results.",
        iconFile: "PPC Specialist  Performance Marketer.svg",
    },
    {
        id: "digital-marketing-manager",
        title: "Digital Marketing Manager",
        description: "Lead marketing teams and develop effective strategies.",
        iconFile: "Digital Marketing Manager.svg",
    },
    {
        id: "ecommerce-marketer",
        title: "E-commerce Marketer",
        description: "Drive online sales through smart campaigns and listing optimisation.",
        iconFile: "E-commerce Marketer.svg",
    },
    {
        id: "influencer-marketing-specialist",
        title: "Influencer Marketing Specialist",
        description: "Collaborate with creators to amplify campaigns.",
        iconFile: "Influencer Marketing Specialist.svg",
    },
    {
        id: "creative-strategist",
        title: "Creative Strategist",
        description: "Develop innovative campaigns that connect with audiences.",
        iconFile: "Creative Strategist.svg",
    },
    {
        id: "website-developer",
        title: "Website Developer",
        description: "Build SEO-friendly, visually appealing websites.",
        iconFile: "Website Developer.svg",
    },
    {
        id: "copywriter",
        title: "Copywriter",
        description: "Write content that engages, persuades, and converts.",
        iconFile: "Copywriter.svg",
    },
];

function CareerPathCard({ career }: { career: CareerCard }) {
    return (
        <li className="min-w-0">
            <article className="box-border flex h-auto w-full flex-col gap-2 rounded-xl border border-[#FFFFFF33] bg-[#E6EFFF] p-4 lg:h-[200px]">
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
                        className="m-0 text-left text-[22px] font-semibold leading-[1.5] tracking-normal text-black [font-family:'Darker_Grotesque',sans-serif]"
                    >
                        {career.title}
                    </h3>
                    <p
                        className="m-0 text-left text-[16px] font-normal leading-[1.2] tracking-[-0.05em] text-[#000000B2] [font-family:'Satoshi',sans-serif]"
                    >
                        {career.description}
                    </p>
                </div>
            </article>
        </li>
    );
}

export function DubaiJobReadyCareersSection() {
    return (
        <section
            id="dubai-job-ready-careers"
            className="w-full bg-white text-black"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div className="mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-6 py-5 px-[clamp(16px,4.16vw,60px)] lg:gap-[30px] lg:px-[60px] lg:py-10">

                <header className="flex w-full flex-col gap-[10px] lg:max-w-[1320px]">
                    <h2
                        id={HEADING_ID}
                        className="m-0 max-w-[335px] font-semibold leading-[0.95] tracking-[-0.05em] text-black [font-family:'Darker_Grotesque',sans-serif] [text-rendering:geometricPrecision] text-[36px] lg:max-w-[667px] lg:text-[55px] lg:leading-[1.1] lg:tracking-[-0.01em]"
                    >
                        Careers Options After Digital Marketing Course in UAE
                    </h2>
                </header>

                <ul
                    className="m-0 flex w-full min-w-0 list-none flex-col gap-5 p-0 lg:mx-auto lg:grid lg:max-w-[1320px] lg:grid-cols-4 lg:gap-4"
                    aria-label="Career paths after HACA UAE digital marketing course"
                >
                    {CAREERS.map((career) => (
                        <CareerPathCard key={career.id} career={career} />
                    ))}
                </ul>

            </div>
        </section>
    );
}
