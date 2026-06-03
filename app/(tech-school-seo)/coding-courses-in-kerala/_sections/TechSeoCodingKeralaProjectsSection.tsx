import { TECH_SEO_PAGE_BG } from "@/lib/tech-school-seo";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "coding-kerala-projects-heading";

const MAJOR_PROJECTS = [
    {
        id: "social-media",
        title: "MERN Social Media Platform",
        description: "Build authentication systems, profiles, messaging, feeds, comments and deployment workflows.",
        accentColor: "#6949FF",
    },
    {
        id: "ecommerce",
        title: "AI-Powered E-Commerce Platform",
        description: "Create an advanced application with AI Chatbot Support, Smart Product Search, Payment Gateway Integration, Admin Automation Features, and Deployment Ready Architecture.",
        accentColor: "#FF5600",
    },
] as const;

const MINI_PROJECTS = [
    "Website Clone using HTML and CSS",
    "JavaScript CRUD Application",
    "React CRUD Platform",
    "REST API Project",
    "MongoDB Integration Project",
] as const;

const PANEL_STYLE = {
    backgroundColor: "rgba(217,217,217,0.08)",
    border: "1px solid rgba(105,73,255,0.2)",
} as const;

export function TechSeoCodingKeralaProjectsSection() {
    return (
        <section
            className="mx-auto box-border w-full max-w-[1440px] bg-transparent"
            aria-labelledby={HEADING_ID}
        >
            <div className="box-border flex w-full flex-col gap-[30px] px-4 py-5 lg:gap-[50px] lg:px-[60px] lg:py-10">
                <h2
                    id={HEADING_ID}
                    className="m-0 w-full font-manrope text-[26px] font-semibold leading-[120%] tracking-[-0.02em] text-white lg:max-w-[800px] lg:text-[40px]"
                >
                    Build Projects That Employers Actually Want to See
                </h2>

                {/* Major Projects */}
                <div className="flex w-full flex-col gap-4 lg:gap-5">
                    <h3 className="m-0 font-manrope text-[18px] font-semibold leading-[120%] text-[#A78BFF] lg:text-[22px]">
                        Major Portfolio Projects
                    </h3>
                    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
                        {MAJOR_PROJECTS.map((project) => (
                            <article
                                key={project.id}
                                className="relative flex flex-col gap-4 overflow-hidden rounded-[18px] p-5 lg:p-6"
                                style={{
                                    ...PANEL_STYLE,
                                    borderLeft: `3px solid ${project.accentColor}`,
                                }}
                            >
                                <h4
                                    className="m-0 font-manrope text-[18px] font-semibold leading-[120%] text-white lg:text-[20px]"
                                >
                                    {project.title}
                                </h4>
                                <p className="m-0 font-manrope text-[13px] font-normal leading-[150%] text-[#C6C6C6B2] lg:text-[15px]">
                                    {project.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Mini Projects */}
                <div className="flex w-full flex-col gap-4 lg:gap-5">
                    <h3 className="m-0 font-manrope text-[18px] font-semibold leading-[120%] text-[#A78BFF] lg:text-[22px]">
                        Mini Projects
                    </h3>
                    <div className="flex w-full flex-wrap gap-3">
                        {MINI_PROJECTS.map((project) => (
                            <span
                                key={project}
                                className="inline-flex items-center gap-2 rounded-full border border-[#6949FF40] bg-[#6949FF14] px-4 py-2.5 font-manrope text-[13px] font-medium text-white lg:text-[14px]"
                            >
                                <span
                                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6949FF]"
                                    aria-hidden
                                />
                                {project}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
