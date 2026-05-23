import { TECH_SEO_PAGE_BG } from "@/lib/tech-school-seo";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

type LearnModule = {
    id: string;
    title: string;
    description: string;
    topicsLabel: string;
    bullets: readonly string[];
    variant?: "default" | "capstone";
};

const LEARN_MODULES: readonly LearnModule[] = [
    {
        id: "module-1",
        title: "Module 1: Getting Started with Data Analytics",
        description: "Start with the foundations of analytics and understand why data matters.",
        topicsLabel: "You'll learn:",
        bullets: [
            "What Data Analytics is and why businesses rely on it",
            "Types of data and analytics",
            "Key concepts explained simply",
            "How AI is transforming analytics workflows",
            "Real examples of AI powered analytics in action",
        ],
    },
    {
        id: "module-2",
        title: "Module 2: Python for Data Analytics",
        description: "Build a strong coding foundation from scratch.",
        topicsLabel: "Topics include:",
        bullets: [
            "Python fundamentals",
            "Variables, operators and data types",
            "Conditions, loops and functions",
            "Object-Oriented Programming concepts",
            "File handling and exceptions",
            "Jupyter Notebook setup",
            "OpenAI API and Hugging Face basics",
            "Mini project included",
        ],
    },
    {
        id: "module-3",
        title: "Module 3: Python Libraries for Analytics",
        description: "Learn the tools analysts use every day.",
        topicsLabel: "Topics include:",
        bullets: [
            "NumPy for fast data calculations",
            "Pandas for cleaning and analysis",
            "Matplotlib and Seaborn for visualization",
            "Exploratory Data Analysis techniques",
            "AI powered tools for cleaning and visualizing data",
        ],
    },
    {
        id: "module-4",
        title: "Module 4: MySQL",
        description: "Learn how databases work and how analysts extract valuable insights.",
        topicsLabel: "Topics include:",
        bullets: [
            "Database basics and RDBMS concepts",
            "MySQL Workbench setup",
            "SQL queries and filtering",
            "Sorting and grouping data",
            "Joins and string functions",
            "Stored procedures and views",
            "Using AI to generate smarter SQL",
        ],
    },
    {
        id: "module-5",
        title: "Module 5: Advanced Excel",
        description: "Master one of the most used tools in analytics.",
        topicsLabel: "Topics include:",
        bullets: [
            "Excel fundamentals to dashboards",
            "Data formatting and filtering",
            "VLOOKUP, HLOOKUP and Index Match",
            "Pivot tables and charts",
            "Macros and automation",
            "AI assisted Excel analysis",
        ],
    },
    {
        id: "module-6",
        title: "Module 6: Statistics Made Simple",
        description: "Understand the math behind smart decisions.",
        topicsLabel: "Topics include:",
        bullets: [
            "Descriptive and inferential statistics",
            "Mean, median and mode",
            "Histograms, scatterplots and boxplots",
            "Probability concepts",
            "Normal distribution",
            "Confidence intervals and Central Limit Theorem",
            "AI in statistical analysis",
        ],
    },
    {
        id: "module-7",
        title: "Module 7: Power BI",
        description: "Turn business data into powerful insights.",
        topicsLabel: "Topics include:",
        bullets: [
            "Power BI basics",
            "Importing and cleaning data",
            "Data modeling techniques",
            "DAX formulas simplified",
            "Dashboard creation",
            "AI-generated insights",
            "Real world projects",
        ],
    },
    {
        id: "module-8",
        title: "Module 8: Tableau",
        description: "Learn to tell stories through data visualization.",
        topicsLabel: "Topics include:",
        bullets: [
            "Connecting data sources",
            "Charts, filters and parameters",
            "Dual-axis visualisations",
            "Dashboard creation",
            "Forecasting techniques",
            "Tableau Public publishing",
            "AI-assisted workflows",
        ],
    },
    {
        id: "module-9",
        title: "Module 9: AI Tools for Analytics",
        description: "Discover how AI can automate your analytics workflow.",
        topicsLabel: "Topics include:",
        bullets: [
            "AI powered cleaning tools",
            "Smart reporting and dashboard tools",
            "Predictive and prescriptive analytics",
            "Finding hidden patterns with AI",
            "Ethical use of AI in data analytics",
        ],
    },
    {
        id: "capstone",
        title: "Capstone Project",
        description: "Bring together everything you've learned.",
        topicsLabel: "You will:",
        bullets: [
            "Clean and analyze a complete dataset",
            "Generate AI powered insights",
            "Build interactive dashboards",
            "Present findings using Power BI or Tableau",
            "Showcase a complete real world analytics solution",
        ],
        variant: "capstone",
    },
];

function CardBottomRightGlow({
    desktopCenter = false,
}: {
    desktopCenter?: boolean;
}) {
    return (
        <span
            className={`pointer-events-none absolute z-0 h-[300px] w-[300px] -bottom-24 ${
                desktopCenter
                    ? "-right-24 lg:-bottom-36 lg:left-1/2 lg:right-auto lg:h-[420px] lg:w-[420px] lg:-translate-x-1/2"
                    : "-right-24"
            }`}
            style={{
                background:
                    "radial-gradient(circle at center, #8F37FF59 0%, rgba(143, 55, 255, 0.22) 28%, rgba(143, 55, 255, 0.1) 48%, rgba(143, 55, 255, 0.04) 62%, transparent 72%)",
            }}
            aria-hidden
        />
    );
}

function LearnModuleCard({ module }: { module: LearnModule }) {
    const isCapstone = module.variant === "capstone";

    if (isCapstone) {
        return (
            <article
                className="relative flex min-h-[374px] w-full flex-col gap-5 overflow-hidden rounded-[22px] p-5 shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-[12px] lg:col-span-3 lg:h-[250px] lg:min-h-[250px] lg:max-w-[1320px] lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-[60px] lg:py-5"
                style={{ backgroundColor: TECH_SEO_PAGE_BG }}
            >
                <CardBottomRightGlow desktopCenter />

                <div className="relative z-[1] flex w-full max-w-[303px] flex-col gap-2.5 lg:max-w-[342px] lg:shrink-0">
                    <h3 className="m-0 font-manrope text-2xl font-semibold leading-[120%] text-white lg:text-[30px]">
                        Capstone Project
                    </h3>
                    <p className="m-0 text-center font-manrope text-base font-normal leading-[100%] text-[#FFFFFFB2] lg:text-left lg:text-lg">
                        Bring together everything you&apos;ve learned.
                    </p>
                </div>

                <div className="relative z-[1] flex w-full flex-col gap-2.5 lg:ml-auto lg:w-fit lg:max-w-[480px] lg:shrink-0 lg:self-center">
                    <p className="m-0 font-manrope text-base font-semibold leading-[120%] text-[#FFFFFFB2]">
                        {module.topicsLabel}
                    </p>
                    <ul className="m-0 flex list-none flex-col gap-2 p-0">
                        {module.bullets.map((bullet) => (
                            <li
                                key={bullet}
                                className="m-0 font-manrope text-base font-normal leading-[120%] text-[#FFFFFFB2] before:mr-1.5 before:font-light before:content-['•']"
                            >
                                {bullet}
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        );
    }

    return (
        <article
            className="relative flex min-h-[374px] w-full flex-col gap-5 overflow-hidden rounded-[22px] p-5 shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-[12px]"
            style={{ backgroundColor: TECH_SEO_PAGE_BG }}
        >
            <CardBottomRightGlow />

            <div className="relative z-[1] flex w-full max-w-[371px] flex-col gap-2.5 lg:max-w-none">
                <h3 className="m-0 font-manrope text-xl font-semibold leading-[120%] text-white lg:text-[22px]">
                    {module.title}
                </h3>
                <p className="m-0 font-manrope text-base font-normal leading-[120%] text-[#FFFFFFB2] lg:text-lg">
                    {module.description}
                </p>
            </div>

            <div className="relative z-[1] flex w-full max-w-[371px] flex-col gap-2.5 lg:max-w-none">
                <p className="m-0 font-manrope text-base font-semibold leading-[120%] text-[#FFFFFFB2]">
                    {module.topicsLabel}
                </p>
                <ul className="m-0 flex list-none flex-col gap-2 p-0">
                    {module.bullets.map((bullet) => (
                        <li
                            key={bullet}
                            className="m-0 font-manrope text-base font-normal leading-[120%] text-[#FFFFFFB2] before:mr-1.5 before:font-light before:content-['•']"
                        >
                            {bullet}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export function TechSeoDataAnalyticsKeralaWhatYouLearnSection() {
    return (
        <section
            className="mx-auto w-full max-w-[1440px] bg-transparent"
            aria-labelledby="data-analytics-kerala-what-you-learn-heading"
        >
            <div className="box-border flex w-full flex-col gap-[30px] px-[clamp(16px,4.16vw,60px)] py-5 md:gap-[30px] lg:gap-[60px] lg:py-5">
                <h2
                    id="data-analytics-kerala-what-you-learn-heading"
                    className="m-0 mx-auto w-full max-w-[303px] text-center font-manrope text-[26px] font-semibold leading-[120%] text-white lg:max-w-[624px] lg:text-[40px]"
                >
                    What You&apos;ll Learn in HACA&apos;s Data Analytics Course
                </h2>

                <div className="box-border grid w-full grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-5">
                    {LEARN_MODULES.map((module) => (
                        <LearnModuleCard key={module.id} module={module} />
                    ))}
                </div>

                <div className="lg:hidden">
                    <TechSeoSectionBottomRule inset />
                </div>
            </div>
        </section>
    );
}
