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
        title: "Multidisciplinary\nCreative Space",
        description:
            "It’s a space to explore all sides of design. Learn UI/UX, graphic designing, branding, video editing, and more in a creatively charged environment.",
        lineColor: "#FF5659",
        icon: (
            <Image src="/photos/schools/design/Vector (3).svg" alt="" width={50} height={50} className="h-full w-full object-contain" />
        ),
    },
    {
        title: "Learning Through\nCreative Practices",
        description: "We believe in learning by doing. You’ll get hands-on experience with real design projects, not just theory.",
        lineColor: "#29C76B",
        icon: (
            <Image src="/photos/schools/design/Vector (4).svg" alt="" width={50} height={50} className="h-full w-full object-contain" />
        ),
    },
    {
        title: "Creative EdTech\nPlatform",
        description:
            "Our platform is designed for creative learners, making it easy to access lessons, tools, and projects that help you grow as a designer.",
        lineColor: "#2592FF",
        icon: (
            <Image src="/photos/schools/design/Vector (5).svg" alt="" width={50} height={50} className="h-full w-full object-contain" />
        ),
    },
    {
        title: "Placement Support\nand Job Assistance",
        description:
            "We provide resume-building assistance, mock interviews, and job placement support to help you kick-start your career in graphic design.",
        lineColor: "#8F56FF",
        icon: (
            <Image src="/photos/schools/design/Vector (6).svg" alt="" width={50} height={50} className="h-full w-full object-contain" />
        ),
    },
    {
        title: "Taught by Designers,\nfor Designers",
        description:
            "Learn from real designers who have worked in the industry. They understand the challenges and will guide you with real-world insights.",
        lineColor: "#FF5C00",
        icon: (
            <Image src="/photos/schools/design/Vector (7).svg" alt="" width={50} height={50} className="h-full w-full object-contain" />
        ),
    },
    {
        title: "Portfolio First\nApproach",
        description:
            "From day one, you’ll be building a portfolio full of your best work. This will be your ticket to impressing future employers or clients.",
        lineColor: "#F2C94C",
        icon: (
            <Image
                src="/photos/schools/design/seo/creativity dsn 1.svg"
                alt=""
                width={50}
                height={50}
                className="h-full w-full object-contain"
            />
        ),
    },
    {
        title: "Easy EMI Options\nAvailable",
        description:
            "Flexible EMI options are available, so you can focus on learning without worrying about upfront costs because we believe money should not stop your creativity.",
        lineColor: "#FF5CCF",
        icon: (
            <Image
                src="/photos/schools/design/seo/creativity dsn 2.svg"
                alt=""
                width={60}
                height={59}
                className="h-full w-full object-contain"
            />
        ),
    },
];

export function GraphicDesigningCalicutWhatSetsApartSection() {
    return (
        <section className="w-full bg-white" aria-label="What sets our graphic designing course apart in Calicut">
            <div
                className="mx-auto w-full max-w-[1440px] box-border"
                style={{
                    padding: "clamp(30px,2.78vw,40px) clamp(20px,4.17vw,60px) clamp(40px,4.17vw,60px)",
                }}
            >
                <div className="flex w-full flex-col gap-[40px] lg:gap-[50px]">
                    <div className="flex w-full max-w-[900px] flex-col gap-3">
                        <h2
                            className="m-0 text-black"
                            style={{
                                fontFamily: vc,
                                fontWeight: 500,
                                lineHeight: "115%",
                                fontSize: "clamp(30px, 3.3vw, 50px)",
                                letterSpacing: "0%",
                            }}
                        >
                            <span className="block sm:whitespace-nowrap">What Sets Our Graphic Designing Course</span>
                            <span className="block">Apart in Calicut</span>
                        </h2>

                        <p
                            className="m-0 text-black/60"
                            style={{
                                fontFamily: vc,
                                fontWeight: 400,
                                fontSize: "clamp(14px, 1.4vw, 16px)",
                                lineHeight: "120%",
                            }}
                        >
                            You won’t just learn how to design, you’ll learn how to think like a designer. That’s what makes
                            us stand out from other graphic designing institutes in Calicut.
                        </p>
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

