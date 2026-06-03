import Image from "next/image";
import React from "react";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

type Row = {
    title: string;
    description: string;
    lineColor: string;
    icon: React.ReactNode;
};

const ROWS: Row[] = [
    {
        title: "Multidisciplinary\nCreative Learning",
        description:
            "Instead of learning one design skill, you'll explore graphic design, motion graphics, branding, UI/UX, and video editing together in one creative ecosystem.",
        lineColor: "#FF5659",
        icon: (
            <Image src="/photos/schools/design/Vector (3).svg" alt="" aria-hidden="true" width={50} height={50} className="h-full w-full object-contain" />
        ),
    },
    {
        title: "Learn Through\nReal Projects",
        description:
            "We focus heavily on practical execution. Every module includes hands-on projects designed to improve your creative thinking and industry readiness.",
        lineColor: "#29C76B",
        icon: (
            <Image src="/photos/schools/design/Vector (4).svg" alt="" aria-hidden="true" width={50} height={50} className="h-full w-full object-contain" />
        ),
    },
    {
        title: "Mentorship from\nIndustry Designers",
        description:
            "Learn directly from professionals who actively work in agencies, branding studios, and digital companies.",
        lineColor: "#2592FF",
        icon: (
            <Image src="/photos/schools/design/Vector (7).svg" alt="" aria-hidden="true" width={50} height={50} className="h-full w-full object-contain" />
        ),
    },
    {
        title: "Portfolio-Focused\nTraining",
        description:
            "Your portfolio matters more than certificates in the design industry. That's why we help you build strong portfolio projects from day one.",
        lineColor: "#8F56FF",
        icon: (
            <Image src="/photos/schools/design/seo/creativity dsn 1.svg" alt="" aria-hidden="true" width={50} height={50} className="h-full w-full object-contain" />
        ),
    },
    {
        title: "Creative Learning\nPlatform",
        description:
            "Our EdTech platform helps you access projects, assignments, resources, and learning support anytime.",
        lineColor: "#FF5C00",
        icon: (
            <Image src="/photos/schools/design/Vector (5).svg" alt="" aria-hidden="true" width={50} height={50} className="h-full w-full object-contain" />
        ),
    },
    {
        title: "Internship\nOpportunities",
        description:
            "Students get opportunities to work on real projects and gain industry experience through internships and collaborations.",
        lineColor: "#F2C94C",
        icon: (
            <Image src="/photos/schools/design/Vector (6).svg" alt="" aria-hidden="true" width={50} height={50} className="h-full w-full object-contain" />
        ),
    },
    {
        title: "Placement &\nCareer Support",
        description:
            "From resume building to mock interviews and portfolio reviews, we help you prepare for creative job opportunities across Kerala and beyond.",
        lineColor: "#FF5CCF",
        icon: (
            <Image src="/photos/schools/design/Vector (4).svg" alt="" aria-hidden="true" width={50} height={50} className="h-full w-full object-contain" />
        ),
    },
    {
        title: "Flexible EMI\nOptions",
        description:
            "We believe creativity should not stop because of financial limitations. Easy EMI options are available for eligible students.",
        lineColor: "#29C76B",
        icon: (
            <Image src="/photos/schools/design/seo/creativity dsn 2.svg" alt="" aria-hidden="true" width={60} height={59} className="h-full w-full object-contain" />
        ),
    },
];

export function GraphicDesigningKeralaWhyChooseSection() {
    return (
        <section className="w-full bg-white" aria-label="Why students choose our graphic designing course in Kerala">
            <div
                className="mx-auto w-full max-w-[1440px] box-border"
                style={{
                    padding: "clamp(30px,2.78vw,40px) clamp(20px,4.17vw,60px) clamp(40px,4.17vw,60px)",
                }}
            >
                <div className="flex w-full flex-col gap-[40px] lg:gap-[50px]">
                    <div className="flex w-full max-w-[900px] flex-col gap-3">
                        <h2 className="m-0 text-black">
                            <span
                                className="lg:hidden"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "35px",
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                <span className="block">Why Students Choose Our Graphic</span>
                                <span className="block">Designing Course in Kerala</span>
                            </span>
                            <span
                                className="hidden lg:block"
                                style={{
                                    fontFamily: vc,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "45px",
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                <span className="block whitespace-nowrap">Why Students Choose Our Graphic</span>
                                <span className="block">Designing Course in Kerala</span>
                            </span>
                        </h2>
                    </div>

                    <div className="w-full flex flex-col gap-[26px] lg:gap-[34px]">
                        {ROWS.map((row, idx) => (
                            <div key={idx} className="w-full flex flex-col gap-[18px] lg:gap-[24px]">
                                <div className="w-full flex flex-col gap-[16px] lg:flex-row lg:items-center lg:justify-between lg:gap-[24px]">
                                    <div className="flex items-start gap-[18px] lg:gap-[50px]">
                                        <div className="relative shrink-0 w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" aria-hidden="true">
                                            {row.icon}
                                        </div>

                                        <h3
                                            className="m-0 whitespace-pre-line text-black"
                                            style={{
                                                fontFamily: vc,
                                                fontWeight: 500,
                                                lineHeight: "115%",
                                                fontSize: "clamp(20px, 2.1vw, 30px)",
                                            }}
                                        >
                                            {row.title}
                                        </h3>
                                    </div>

                                    <p
                                        className="m-0 text-black/70"
                                        style={{
                                            fontFamily: vc,
                                            fontWeight: 500,
                                            letterSpacing: "0%",
                                            lineHeight: "120%",
                                            fontSize: "clamp(14px, 1.25vw, 18px)",
                                            maxWidth: 485,
                                        }}
                                    >
                                        {row.description}
                                    </p>
                                </div>

                                <div className="w-full border-t" style={{ borderColor: row.lineColor }} aria-hidden="true" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
