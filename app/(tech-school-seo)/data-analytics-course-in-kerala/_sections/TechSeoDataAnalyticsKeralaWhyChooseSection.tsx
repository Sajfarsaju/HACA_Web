import Image from "next/image";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "data-analytics-kerala-why-choose-heading";

const WHY_CHOOSE_ITEMS = [
    {
        id: "project-based",
        title: "Project-Based Learning",
        description: "9+1 Mini projects and a real world capstone project",
        icon: "Project-Based Learning.svg",
    },
    {
        id: "curriculum",
        title: "Industry Relevant Curriculum",
        description: "Learn modern analytics tools integrated with AI",
        icon: "Industry Relevant Curriculum.svg",
    },
    {
        id: "cohort",
        title: "Cohort Based Learning",
        description:
            "Learn in small batches of 3-4 students with personalized mentor guidance.",
        icon: "Cohort Based Learning.svg",
    },
    {
        id: "mentorship",
        title: "Expert Mentorship",
        description: "Learn from industry professionals and experienced trainers",
        icon: "Expert Mentorship.svg",
    },
    {
        id: "portfolio",
        title: "Portfolio Development",
        description: "Create projects recruiters actually care about",
        icon: "Portfolio Development.svg",
    },
    {
        id: "placement",
        title: "Placement Support",
        description: "Resume guidance, interview preparation and placement assistance",
        icon: "Placement Support.svg",
    },
    {
        id: "community",
        title: "Community Driven Learning",
        description: "Learn with peers and mentors in an engaging environment",
        icon: "Community Driven Learning.svg",
    },
    {
        id: "future",
        title: "Built for the Future",
        description: "Everything you learn is AI-integrated and aligned with industry trends",
        icon: "Built for the Future.svg",
    },
    {
        id: "emi",
        title: "Easy EMI Options",
        description: "Learn now and pay comfortably with flexible EMI options.",
        icon: "Easy EMI Options.svg",
    },
] as const;

function whyChooseIconSrc(filename: string) {
    return `/photos/Tech/seo/${encodeURIComponent(filename)}`;
}

function WhyChooseCard({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: string;
}) {
    return (
        <article className="box-border mx-auto flex w-full max-w-[343px] min-h-[300px] flex-col gap-5 rounded-[18px] border-[0.4px] border-solid border-[#6949FF] bg-[#FFFFFF1A] p-5 backdrop-blur-[51.4px] lg:mx-0 lg:max-w-[411px] lg:gap-[30px] lg:min-h-[307px] lg:min-w-0">
            <div className="relative h-[60px] w-[60px] shrink-0">
                <Image
                    src={whyChooseIconSrc(icon)}
                    alt="" aria-hidden="true"
                    fill
                    className="object-contain object-left"
                    sizes="60px"
                />
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="m-0 max-w-[256px] font-manrope text-[22px] font-semibold leading-[110%] tracking-[-0.02em] text-white lg:max-w-none lg:text-[26px]">
                    {title}
                </h3>
                <p className="m-0 max-w-[371px] font-manrope text-lg font-medium leading-[110%] text-[#FFFFFFB2] lg:text-xl">
                    {description}
                </p>
            </div>
        </article>
    );
}

export function TechSeoDataAnalyticsKeralaWhyChooseSection() {
    return (
        <section
            className="mx-auto w-full max-w-[1440px] bg-transparent"
            aria-labelledby={HEADING_ID}
        >
            <div className="box-border flex w-full flex-col gap-[30px] px-4 py-5 lg:gap-[60px] lg:px-[60px] lg:py-10">
                <div className="flex w-full max-w-[343px] flex-col gap-[10px] lg:max-w-[1320px]">
                    <h2
                        id={HEADING_ID}
                        className="m-0 w-full font-manrope text-[26px] font-semibold leading-[120%] tracking-[-0.02em] text-white lg:max-w-[705px] lg:text-[40px]"
                    >
                        Why choose HACA Tech School for Data Analytics?
                    </h2>
                    <p className="m-0 w-full font-manrope text-sm font-normal leading-[120%] tracking-[-0.2px] text-[#C6C6C6B2] opacity-50 lg:text-lg lg:leading-[33.6px] lg:opacity-100">
                        Here, we focus on practical and industry-ready learning. These are the things
                        you&apos;ll get:
                    </p>
                </div>

                <div className="grid w-full max-w-[1320px] grid-cols-1 gap-5 lg:grid-cols-3 lg:justify-between lg:gap-x-[43px] lg:gap-y-5">
                    {WHY_CHOOSE_ITEMS.map((item) => (
                        <WhyChooseCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </div>

                <TechSeoSectionBottomRule inset />
            </div>
        </section>
    );
}
