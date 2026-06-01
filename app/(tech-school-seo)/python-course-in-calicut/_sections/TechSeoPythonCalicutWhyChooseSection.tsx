import Image from "next/image";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "python-calicut-why-choose-heading";

const WHY_CHOOSE_ITEMS = [
    {
        id: "beginner-friendly",
        title: "Beginner Friendly Curriculum",
        description: "No coding background? We'll start from scratch and guide you step by step.",
        icon: "Industry Relevant Curriculum.svg",
    },
    {
        id: "cohort",
        title: "Structured Cohort Learning",
        description:
            "Work in groups of 5–6 learners, collaborate on projects, and grow together.",
        icon: "Cohort Based Learning.svg",
    },
    {
        id: "ai-integrated",
        title: "AI Integrated Training",
        description:
            "From AI agents to intelligent workflows and smart applications, every project includes an AI layer.",
        icon: "Built for the Future.svg",
    },
    {
        id: "project-based",
        title: "Project-Based Learning",
        description: "Work on multiple projects and build a final AI-powered full-stack application.",
        icon: "Project-Based Learning.svg",
    },
    {
        id: "flexibility",
        title: "Offline & Online Flexibility",
        description:
            "Join us at our Calicut campus or attend online from anywhere.",
        icon: "Portfolio Development.svg",
    },
    {
        id: "career",
        title: "Career Focused",
        description: "Resume building, mock interviews, and job referrals included.",
        icon: "Placement Support.svg",
    },
    {
        id: "community",
        title: "Community Driven Learning",
        description: "Learn with peers and mentors in an engaging environment.",
        icon: "Community Driven Learning.svg",
    },
    {
        id: "emi",
        title: "Easy EMI Options",
        description: "Learn now and pay comfortably with flexible EMI options.",
        icon: "Easy EMI Options.svg",
    },
    {
        id: "industry",
        title: "Industry Exposure",
        description:
            "Guest talks and business development sessions to help you think like a techpreneur.",
        icon: "Expert Mentorship.svg",
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
                    alt=""
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

export function TechSeoPythonCalicutWhyChooseSection() {
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
                        Why choose HACA Tech School for Python Django with Gen AI?
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
