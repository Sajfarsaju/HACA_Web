const vc = '"VC Nudge Trial Normal", sans-serif' as const;

type CurriculumItem = { id: string; title: string; description: string };
type CurriculumGroup = { id: string; category: string; items: CurriculumItem[] };

const CURRICULUM: CurriculumGroup[] = [
    {
        id: "foundations",
        category: "Design Foundations",
        items: [
            {
                id: "intro-design",
                title: "Introduction to Design & Visual Communication",
                description: "Understand how visuals influence communication and why good design goes beyond aesthetics.",
            },
            {
                id: "core-principles",
                title: "Core Design Principles",
                description: "Learn balance, hierarchy, contrast, spacing, and alignment through practical design activities.",
            },
            {
                id: "layout-composition",
                title: "Layout & Composition Techniques",
                description: "Discover how to organise visual elements to improve communication and readability.",
            },
            {
                id: "typography",
                title: "Typography & Visual Hierarchy",
                description: "Understand fonts, structure, and attention flow to make your designs feel intentional.",
            },
            {
                id: "colour-theory",
                title: "Colour Theory for Digital Design",
                description: "Learn how colour influences perception and improves visual storytelling.",
            },
        ],
    },
    {
        id: "creative-skills",
        category: "Creative Skills",
        items: [
            {
                id: "image-manipulation",
                title: "Image Manipulation & Composition",
                description: "Learn how to work with visuals creatively and create polished design outputs.",
            },
            {
                id: "social-media-design",
                title: "Social Media & Marketing Design",
                description: "Create graphics used in real campaigns while understanding audience behaviour and content formats.",
            },
        ],
    },
    {
        id: "bonus",
        category: "Bonus Learning",
        items: [
            {
                id: "logo-design",
                title: "Introduction to Logo Design",
                description: "Understand the thinking process behind visual identity creation.",
            },
            {
                id: "linkedin-branding",
                title: "LinkedIn Personal Branding Masterclass",
                description: "Learn how to present yourself professionally and build an online presence.",
            },
            {
                id: "portfolio-dev",
                title: "Portfolio Development Guidance",
                description: "Get support while selecting and showcasing your strongest work.",
            },
            {
                id: "community-access",
                title: "Lifetime Community Access",
                description: "Continue learning and stay connected with resources and updates.",
            },
        ],
    },
];

function CategoryLabel({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-[10px]">
            <span
                className="shrink-0 rounded-full bg-[#29C76B]"
                style={{ width: "4px", height: "22px" }}
                aria-hidden
            />
            {/* mobile: 24px / desktop: 30px — weight 500 / line-height 115% */}
            <span
                className="text-black text-[24px] lg:text-[30px]"
                style={{ fontFamily: vc, fontWeight: 500, lineHeight: "115%" }}
            >
                {label}
            </span>
        </div>
    );
}

function CurriculumCard({ group }: { group: CurriculumGroup }) {
    return (
        <div
            className="w-full overflow-hidden rounded-[20px]"
            style={{ backgroundColor: "#0D0D0D", padding: "20px" }}
        >
            {/* gap: 25px between items, no dividers */}
            <div className="flex flex-col gap-[25px]">
                {group.items.map((item) => (
                    <div key={item.id} className="flex flex-col gap-[6px]">
                        {/* title: mobile 20px / desktop 22px — weight 500 / line-height 115% */}
                        <p
                            className="m-0 text-white text-[20px] lg:text-[22px]"
                            style={{ fontFamily: vc, fontWeight: 500, lineHeight: "115%" }}
                        >
                            {item.title}
                        </p>
                        {/* description: 16px / weight 400 / line-height 115% — same on all screens */}
                        <p
                            className="m-0 text-white/60"
                            style={{ fontFamily: vc, fontWeight: 400, fontSize: "16px", lineHeight: "115%" }}
                        >
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function GraphicDesignOnlineCurriculumSection() {
    const [foundations, creativeSkills, bonus] = CURRICULUM;

    return (
        <section className="w-full bg-white" aria-labelledby="gd-online-curriculum-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 lg:px-[60px] lg:py-[60px]">
                <div className="flex w-full flex-col items-center gap-[40px] lg:gap-[50px]">

                    {/* Heading + subtitle — centered */}
                    <div className="flex flex-col items-center gap-[12px] text-center">
                        <h2
                            id="gd-online-curriculum-heading"
                            className="m-0 text-center text-black"
                            style={{
                                fontFamily: vc,
                                fontWeight: 600,
                                fontSize: "clamp(30px, 4.5vw, 60px)",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            <span className="lg:hidden">
                                What You&apos;ll Learn in<br />This Online Graphic<br />Designing Course
                            </span>
                            <span className="hidden lg:inline">
                                What You&apos;ll Learn in This Online<br />Graphic Designing Course
                            </span>
                        </h2>
                        <p
                            className="m-0 max-w-[680px] text-center text-black/60"
                            style={{ fontFamily: vc, fontWeight: 400, fontSize: "16px", lineHeight: "155%" }}
                        >
                            This course focuses on helping you understand how visual communication works before jumping into tools. You&apos;ll gradually move from fundamentals to practical creative execution.
                        </p>
                    </div>

                    {/* Mobile — all groups stacked */}
                    <div className="flex w-full flex-col gap-[24px] lg:hidden">
                        {CURRICULUM.map((group) => (
                            <div key={group.id} className="flex flex-col gap-[14px]">
                                <CategoryLabel label={group.category} />
                                <CurriculumCard group={group} />
                            </div>
                        ))}
                    </div>

                    {/* Desktop — 2 columns */}
                    <div className="hidden w-full gap-[30px] lg:grid lg:grid-cols-2">
                        {/* Left: Design Foundations — self-center aligns it to the mid-point of the right column */}
                        <div className="flex flex-col gap-[18px] self-center">
                            <CategoryLabel label={foundations.category} />
                            <CurriculumCard group={foundations} />
                        </div>

                        {/* Right: Creative Skills + Bonus Learning stacked */}
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[18px]">
                                <CategoryLabel label={creativeSkills.category} />
                                <CurriculumCard group={creativeSkills} />
                            </div>
                            <div className="flex flex-col gap-[18px]">
                                <CategoryLabel label={bonus.category} />
                                <CurriculumCard group={bonus} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
