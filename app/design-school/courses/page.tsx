import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { DesignSchoolNavbar } from "@/components/design/DesignSchoolNavbar";
import { DesignSchoolIntroAnimation } from "@/components/design/DesignSchoolIntroAnimation";

export const metadata: Metadata = {
    title: "Design School Courses | HACA",
    description: "Design School courses.",
};

const vcNudge = { fontFamily: '"VC Nudge Trial Normal", sans-serif' } as const;

const overviewCreativeDesign = (
    <>
        <span className="block">
            In this six-month program, you&apos;ll explore how designers think, plan, and build creative work that solves
            real communication problems. The learning experience is structured around projects that reflect how work
            happens in design studios, marketing teams, and creative agencies. In the final phase of the program, students
            take part in a one-month internship where they work on real projects inside a structured environment. This
            helps bridge the gap between learning and actual industry work.
        </span>
        <span className="block mt-3 min-[1440px]:mt-4">
            By the end of the course, you&apos;ll build a strong portfolio and gain the confidence needed to enter the
            creative industry.
        </span>
    </>
);

const learnCreative = [
    "Understanding how visual communication works",
    "Foundations of layout, typography, and colour",
    "Creative thinking and concept development",
    "Designing for digital platforms and print media",
    "Working with real creative briefs",
    "Understanding the workflow used in creative agencies",
    "Developing visual storytelling skills",
    "Creating structured design presentations",
    "Building a professional design portfolio",
];

const careerCreative = [
    "Graphic Designer",
    "Visual Designer",
    "Creative Designer",
    "Brand Designer",
    "Social Media Designer",
    "Junior Art Director",
    "UI UX Designer",
    "Video Editor",
    "Motion Graphic Artist",
    "Illustration Artist",
];

/** Row 2 — AI Integrated Graphic Design */
const overviewAiGraphic = (
    <>
        <span className="block">
            The program focuses on helping students understand design principles before focusing on tools. The course also
            helps students understand how AI tools can support ideation, speed up design tasks, and improve creative
            output. Through guided assignments and practical exercises, students learn how to structure layouts, choose
            colours, and organise visual elements so that messages are clear and engaging.
        </span>
        <span className="block mt-3 min-[1440px]:mt-4">
            By the end of the program, students create a collection of design projects that demonstrate their ability to
            design visual content used in marketing, branding, and digital communication.
        </span>
    </>
);
const learnAiGraphic = [
    "Core design principles and layout basics",
    "Typography and colour usage",
    "Image editing and composition",
    "Designing for marketing and social media",
    "Introduction to AI-assisted design",
    "Introduction to logo design",
    "LinkedIn masterclass",
    "Portfolio building support",
];
const careerAiGraphic = [
    "Graphic Designer",
    "Social Media Designer",
    "Visual Content Creator",
    "Marketing Designer",
    "Freelance Graphic Designer",
];

/** Row 3 — Branding & Identity (screenshot copy) */
const overviewBranding = (
    <>
        <span className="block">
            The course explores how logos, colours, typography, and visual style come together to create a consistent
            brand identity. Practical assignments guide students through the process of creating their own branding project.
        </span>
        <span className="block mt-3 min-[1440px]:mt-4">
            By the end of the course, students complete a brand identity project that demonstrates their understanding of
            visual branding.
        </span>
    </>
);
const learnBranding = [
    "Branding fundamentals and strategy",
    "Research and concept development",
    "Logo design process",
    "Building visual identity systems",
    "Brand guidelines creation",
    "Client communication and portfolio work",
];
const careerBranding = [
    "Brand Designer",
    "Identity Designer",
    "Graphic Designer",
    "Visual Branding Specialist",
    "Freelance Brand Designer",
];

/** Row 4 — UI/UX Design + AI */
const overviewUiUx = (
    <>
        <span className="block">
            The course focuses on how designers understand user needs, organise information, and create intuitive layouts
            for websites and apps. Students work through practical design exercises that help them learn how digital
            products are planned before development begins.
        </span>
        <span className="block mt-3 min-[1440px]:mt-4">
            AI is integrated throughout the process to assist in research, ideation, and design optimization, that help
            designers speed up workflows and explore creative directions. By the end of the course, students complete
            interface design projects that demonstrate their understanding of user experience and digital product design.
        </span>
    </>
);
const learnUiUx = [
    "Introduction to Design & UX",
    "Introduction to FigJam & Project Assignment",
    "Understanding Stakeholders & Design Strategy",
    "Competitor Analysis & User Research",
    "User Persona & User Flow",
    "Information Architecture & Wireframing",
    "Introduction to UI Design & Figma",
    "Mobile App UI Design (Low-Fidelity to High-Fidelity)",
    "Mobile App UI Design (Prototyping & Interactions)",
    "Website Landing Page UI Design (Low-Fidelity to High-Fidelity)",
    "Website UI Design (Prototyping & Interactions)",
    "How to Build a Portfolio & Submission Guidelines",
];
const careerUiUx = [
    "UI Designer",
    "UX Designer",
    "Product Designer",
    "Web Interface Designer",
    "Junior UX Researcher",
];

/** Row 5 — AI Integrated Video Editing */
const overviewVideo = (
    <>
        <span className="block">
            The program focuses on editing techniques, pacing, visual flow, and sound design. Each module includes
            practical assignments where students edit different types of content, such as social media videos, promotional
            edits, and storytelling formats. Students are also introduced to AI-powered editing tools that help streamline
            workflows, enhance visuals, and improve editing efficiency.
        </span>
        <span className="block mt-3 min-[1440px]:mt-4">
            By the end of the course, students understand how to edit videos that feel polished, purposeful, and engaging.
        </span>
    </>
);
const learnVideo = [
    "Editing fundamentals and storytelling",
    "Video flow, pacing, and structure",
    "Audio editing and sound design",
    "Colour grading basics",
    "Social media and promotional video editing",
    "AI video generation and tool learning",
    "Motion graphics",
    "Portfolio creation",
];
const careerVideo = [
    "Video Editor",
    "Content Editor",
    "Social Media Video Creator",
    "Motion Graphics Assistant",
    "Freelance Video Editor",
];

function BulletList({ items, bulletColor }: { items: string[]; bulletColor: string }) {
    return (
        <ul className="m-0 p-0 list-none flex flex-col gap-[6px] min-[1300px]:gap-[10px] min-w-0 w-full">
            {items.map((text, i) => (
                <li key={i} className="flex gap-[10px] items-start min-w-0">
                    <span
                        className="mt-[6px] shrink-0 rounded-full"
                        style={{ width: 7, height: 7, backgroundColor: bulletColor }}
                        aria-hidden
                    />
                    <span
                        className="min-w-0 flex-1 text-[14px] md:text-[16px] leading-[110%] text-black break-words [overflow-wrap:anywhere]"
                        style={{ ...vcNudge, fontWeight: 400, verticalAlign: "middle" }}
                    >
                        {text}
                    </span>
                </li>
            ))}
        </ul>
    );
}

type CourseCardProps = {
    cardBg: string;
    leftBg: string;
    badgePipeColor: string;
    bulletColor: string;
    buttonBg: string;
    imageSrc: string;
    imageSrcMobile: string;
    imageObjectPosition?: string;
    mobileImageBox?: { left: number; top: number; width: number; height: number };
    desktopImageBox1440?: { left: number; top: number; width: number; height: number };
    titleBoxLg?: { left: number; top: number; width: number; height: number };
    badgeLeft: string;
    badgeRight: string;
    title: ReactNode;
    overview: ReactNode;
    learnItems: string[];
    careerItems: string[];
};

function CourseCard({
    cardBg,
    leftBg,
    badgePipeColor,
    bulletColor,
    buttonBg,
    imageSrc,
    imageSrcMobile,
    imageObjectPosition,
    mobileImageBox,
    desktopImageBox1440,
    titleBoxLg,
    badgeLeft,
    badgeRight,
    title,
    overview,
    learnItems,
    careerItems,
}: CourseCardProps) {
    return (
        <article
            className="w-full max-w-[1320px] min-h-0 min-w-0 rounded-[20px] flex flex-col gap-[30px] p-[20px] shadow-sm border border-black/5 overflow-hidden box-border max-[360px]:p-[16px] max-[360px]:gap-[24px] min-[1300px]:flex-row min-[1300px]:items-stretch min-[1300px]:gap-[25px] min-[1300px]:pt-[20px] min-[1300px]:pr-[16px] min-[1300px]:pb-[20px] min-[1300px]:pl-[16px] min-[1300px]:min-h-[698px] min-[1440px]:h-[698px] min-[1440px]:overflow-visible"
            style={{ backgroundColor: cardBg }}
        >
            <div
                className="relative w-full max-w-[335px] aspect-[335/337.1406] mx-auto shrink-0 rounded-[10.7px] overflow-hidden [@media(min-width:425px)_and_(max-width:767px)]:w-full [@media(min-width:425px)_and_(max-width:767px)]:max-w-none [@media(min-width:425px)_and_(max-width:767px)]:mx-0 [@media(min-width:425px)_and_(max-width:767px)]:rounded-[20px] [@media(min-width:425px)_and_(max-width:767px)]:aspect-auto [@media(min-width:425px)_and_(max-width:767px)]:h-[420px] md:max-w-none md:mx-0 md:rounded-[20px] [@media(min-width:768px)_and_(max-width:1299px)]:aspect-auto [@media(min-width:768px)_and_(max-width:1299px)]:h-[420px] [@media(min-width:1300px)_and_(max-width:1439px)]:w-full [@media(min-width:1300px)_and_(max-width:1439px)]:max-w-[560px] [@media(min-width:1300px)_and_(max-width:1439px)]:aspect-auto [@media(min-width:1300px)_and_(max-width:1439px)]:h-[560px] [@media(min-width:1300px)_and_(max-width:1439px)]:rounded-[20px] [@media(min-width:1300px)_and_(max-width:1439px)]:mx-0 min-[1440px]:w-[560px] min-[1440px]:max-w-[560px] min-[1440px]:shrink-0 min-[1440px]:h-[620px] min-[1440px]:aspect-auto min-[1440px]:rounded-[20px] min-[1440px]:overflow-hidden"
                style={{ backgroundColor: leftBg }}
            >
                {/* ≤500px badge: stacked (mobile-style) */}
                <div
                    className="absolute z-10 hidden [@media(max-width:500px)]:flex flex-col items-center justify-center rounded-[9.76px] bg-white max-[340px]:scale-90 max-[340px]:origin-top-left"
                    style={{
                        width: "71.0073px",
                        height: "51.356px",
                        top: "18.19px",
                        left: "18.19px",
                        padding: "4.55px 6.5px",
                        gap: "3px",
                        ...vcNudge,
                        fontWeight: 500,
                        fontSize: 14,
                        lineHeight: "100%",
                        color: "#000000",
                    }}
                >
                    <span className="inline-grid w-max justify-items-center">
                        <span>{badgeLeft}</span>
                        <span className="h-[1px] w-full" style={{ backgroundColor: badgePipeColor }} />
                    </span>
                    <span>{badgeRight}</span>
                </div>

                {/* Phablet badge (501–767px): single line */}
                <div
                    className="absolute z-10 hidden [@media(min-width:501px)_and_(max-width:767px)]:flex items-center gap-[6.08px] rounded-[18.23px] bg-white px-[12.15px] py-[8.51px] top-[24px] left-[24px] max-w-[calc(100%-48px)]"
                    style={{ ...vcNudge, fontWeight: 500, fontSize: 14, lineHeight: "100%" }}
                >
                    <span className="text-black">{badgeLeft}</span>
                    <span style={{ color: badgePipeColor }}>|</span>
                    <span className="text-black">{badgeRight}</span>
                </div>

                {/* Tablet badge (768–1299px) */}
                <div
                    className="absolute z-10 hidden [@media(min-width:768px)_and_(max-width:1299px)]:flex items-center gap-[6.08px] rounded-[18.23px] bg-white px-[12.15px] py-[8.51px] top-[24px] left-[24px] max-w-[calc(100%-48px)]"
                    style={{ ...vcNudge, fontWeight: 500, fontSize: 14, lineHeight: "100%" }}
                >
                    <span className="text-black">{badgeLeft}</span>
                    <span style={{ color: badgePipeColor }}>|</span>
                    <span className="text-black">{badgeRight}</span>
                </div>

                {/* >=1300 badge (desktop) */}
                <div
                    className="absolute z-10 hidden min-[1300px]:flex items-center gap-[6.08px] rounded-[18.23px] bg-white px-[12.15px] py-[8.51px] top-[24px] min-[1440px]:top-[34px] left-[24px] min-[1440px]:left-[34px] max-w-[calc(100%-48px)] min-[1440px]:max-w-[calc(100%-68px)]"
                    style={{ ...vcNudge, fontWeight: 500, fontSize: 14, lineHeight: "100%" }}
                >
                    <span className="text-black">{badgeLeft}</span>
                    <span style={{ color: badgePipeColor }}>|</span>
                    <span className="text-black">{badgeRight}</span>
                </div>

                {/* ≤424px: mobile title position */}
                <h2
                    className="absolute z-10 hidden max-[424px]:block text-white text-[22px] leading-[120%] w-[195px] h-[52px] whitespace-normal break-words top-[18.19px] left-[120px] min-[320px]:max-[374px]:left-[110px] max-[360px]:text-[20px] max-[360px]:scale-90 max-[360px]:origin-top-left max-[340px]:text-[18px] max-[340px]:scale-100 max-[340px]:h-[72px] max-[340px]:w-[185px]"
                    style={{ ...vcNudge, fontWeight: 500 }}
                >
                    {title}
                </h2>

                {/* 425–500px: keep title on right (matches phablet reference) */}
                <h2
                    className="absolute z-10 hidden [@media(min-width:425px)_and_(max-width:500px)]:block text-white text-[28px] leading-[120%] top-[24px] right-[24px] w-[min(420px,calc(100%-48px))] text-right"
                    style={{ ...vcNudge, fontWeight: 500 }}
                >
                    {title}
                </h2>

                {/* Phablet title overlay (501–767px): right side */}
                <h2
                    className="absolute z-10 hidden [@media(min-width:501px)_and_(max-width:767px)]:block text-white text-[28px] leading-[120%] top-[24px] right-[24px] w-[min(420px,calc(100%-48px))] text-right"
                    style={{ ...vcNudge, fontWeight: 500 }}
                >
                    {title}
                </h2>

                {/* Tablet title overlay (768–1299px) */}
                <h2
                    className="absolute z-10 hidden [@media(min-width:768px)_and_(max-width:1299px)]:block text-white text-[32px] leading-[120%] top-[24px] right-[24px] w-[min(360px,calc(100%-48px))] text-right"
                    style={{ ...vcNudge, fontWeight: 500 }}
                >
                    {title}
                </h2>

                {/* >=1300: desktop title placement (scaled until 1440) */}
                <h2
                    className="absolute z-10 hidden min-[1300px]:block text-white text-[32px] leading-[120%] top-[24px] min-[1440px]:top-[34px] right-[24px] min-[1440px]:right-auto min-[1440px]:left-[236px] w-[min(420px,calc(100%-48px))] min-[1440px]:w-[min(353px,calc(100%-270px))] text-right min-[1440px]:text-left"
                    style={{ ...vcNudge, fontWeight: 500 }}
                >
                    {title}
                </h2>

                {/* Image: per-Figma on mobile; full-bleed on tablet/desktop */}
                <div className="absolute inset-0">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={imageSrc} />
                        <source media="(min-width: 640px)" srcSet={imageSrc} />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={imageSrcMobile} alt="" className="hidden" />
                    </picture>

                    {/* Mobile (≤424px): position image within the box */}
                    <div className="hidden max-[424px]:block absolute inset-0">
                        <div
                            className="absolute max-[360px]:scale-90 max-[360px]:origin-top-left max-[360px]:-translate-y-[8px] max-[340px]:scale-[0.86] max-[340px]:-translate-y-[12px]"
                            style={
                                mobileImageBox
                                    ? {
                                          left: `${mobileImageBox.left}px`,
                                          top: `${mobileImageBox.top}px`,
                                          width: `${mobileImageBox.width}px`,
                                          height: `${mobileImageBox.height}px`,
                                      }
                                    : { left: "18.19px", top: "76.53px", width: "250.98px", height: "251.1px" }
                            }
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={imageSrcMobile} alt="" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* 425–500: full-width image area (matches widening card); stacked badge/title like mobile */}
                    <div className="hidden [@media(min-width:425px)_and_(max-width:500px)]:flex absolute inset-0 px-[16px] pb-[16px] pt-[84px] items-end justify-center [@media(min-width:425px)_and_(max-width:500px)]:px-[20px]">
                        <div className="w-full min-w-0 h-full min-h-0 flex items-end justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={imageSrc}
                                alt=""
                                className="max-h-full w-full max-w-full object-contain object-bottom"
                            />
                        </div>
                    </div>

                    {/* Phablet (501–767): full-width image row with large PNG */}
                    <div className="hidden [@media(min-width:501px)_and_(max-width:767px)]:flex absolute inset-0 px-[20px] pb-[20px] pt-[84px] items-end justify-center">
                        <div className="w-full min-w-0 h-full min-h-0 flex items-end justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={imageSrc}
                                alt=""
                                className="max-h-full w-full max-w-full object-contain object-bottom"
                            />
                        </div>
                    </div>

                    {/* Tablet (768–1299): center large PNG with safe top space for badge/title */}
                    <div className="hidden [@media(min-width:768px)_and_(max-width:1299px)]:flex absolute inset-0 px-[20px] pb-[20px] pt-[84px] items-center justify-center">
                        <div className="w-full h-full max-w-[460px] max-h-[460px]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={imageSrc} alt="" className="w-full h-full object-contain object-center" />
                        </div>
                    </div>

                    {/* 1300–1439: desktop image fills most of panel */}
                    <div className="hidden [@media(min-width:1300px)_and_(max-width:1439px)]:flex absolute inset-0 px-[24px] pb-[24px] pt-[110px] items-end justify-start">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={imageSrc}
                            alt=""
                            className="w-full h-full max-w-full max-h-full object-contain object-left-bottom"
                            style={imageObjectPosition ? { objectPosition: imageObjectPosition } : undefined}
                        />
                    </div>

                    {/* >=1440: per-Figma desktop image box (per-card) */}
                    <div
                        className="hidden min-[1440px]:block absolute"
                        style={
                            desktopImageBox1440
                                ? {
                                      left: `${desktopImageBox1440.left}px`,
                                      top: `${desktopImageBox1440.top}px`,
                                      width: `${desktopImageBox1440.width}px`,
                                      height: `${desktopImageBox1440.height}px`,
                                  }
                                : { left: "34px", top: "143px", width: "469px", height: "469.22px" }
                        }
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={imageSrc}
                            alt=""
                            className="w-full h-full object-contain object-left-top"
                            style={imageObjectPosition ? { objectPosition: imageObjectPosition } : undefined}
                        />
                    </div>
                </div>
            </div>

            {/* Right column: exact Figma sizing at ≥1440px; stacks below 1440px */}
            <div className="w-full min-w-0 max-w-[335px] mx-auto flex flex-col gap-[30px] min-h-0 overflow-visible [@media(min-width:425px)_and_(max-width:767px)]:max-w-none [@media(min-width:425px)_and_(max-width:767px)]:w-full [@media(min-width:425px)_and_(max-width:767px)]:mx-0 md:max-w-none md:w-full md:mx-0 [@media(min-width:1300px)_and_(max-width:1439px)]:flex-1 [@media(min-width:1300px)_and_(max-width:1439px)]:max-w-none [@media(min-width:1300px)_and_(max-width:1439px)]:mx-0 [@media(min-width:1300px)_and_(max-width:1439px)]:gap-[14px] min-[1440px]:flex-1 min-[1440px]:min-w-0 min-[1440px]:mx-0 min-[1440px]:gap-[14px] min-[1440px]:overflow-visible">
                {/* Top box: 637×242, gap 10 (≥1440px) */}
                <div className="w-full flex flex-col gap-[10px]">
                    <h3
                        className="m-0 text-[20px] md:text-[24px] leading-[100%] text-black"
                        style={{ ...vcNudge, fontWeight: 500 }}
                    >
                        Course Overview
                    </h3>
                    <p
                        className="m-0 text-[14px] [@media(min-width:425px)_and_(max-width:767px)]:text-[16px] md:text-[16px] leading-[100%] min-[1300px]:leading-[150%] text-black break-words [overflow-wrap:anywhere] min-[1300px]:min-h-[198px] min-[1300px]:max-h-none min-[1300px]:overflow-visible min-[1440px]:min-h-0"
                        style={{ ...vcNudge, fontWeight: 400 }}
                    >
                        {overview}
                    </p>
                </div>

                {/* Second box: 637×308 (≥1440px) */}
                <div className="w-full flex flex-col gap-[30px] md:flex-row md:justify-start md:items-start md:gap-[48px] [@media(min-width:1300px)_and_(max-width:1439px)]:flex-row [@media(min-width:1300px)_and_(max-width:1439px)]:justify-start [@media(min-width:1300px)_and_(max-width:1439px)]:gap-[32px] min-[1440px]:flex-row min-[1440px]:justify-between min-[1440px]:items-start min-[1440px]:gap-0 min-[1440px]:w-full min-[1440px]:min-h-[308px] min-[1440px]:overflow-visible">
                    {/* Left: 433×280 (≥1440px), gap 10 */}
                    <div className="w-full min-w-0 flex flex-col gap-[10px] md:flex-none md:w-[433px] md:max-w-[433px] [@media(min-width:1300px)_and_(max-width:1439px)]:flex-1 [@media(min-width:1300px)_and_(max-width:1439px)]:w-auto [@media(min-width:1300px)_and_(max-width:1439px)]:max-w-none min-[1440px]:flex-none min-[1440px]:w-[433px] min-[1440px]:max-w-[433px] min-[1440px]:h-[280px] min-[1440px]:min-h-[280px] min-[1440px]:overflow-hidden">
                        <h4
                            className="m-0 text-[20px] leading-[100%] text-black"
                            style={{ ...vcNudge, fontWeight: 500 }}
                        >
                            What You&apos;ll Learn
                        </h4>
                        <div className="min-[1440px]:h-[242px] min-[1440px]:min-h-[242px] min-[1440px]:overflow-hidden">
                            <BulletList items={learnItems} bulletColor={bulletColor} />
                        </div>
                    </div>
                    {/* Right: 188×308 (≥1440px), gap 10 */}
                    <div className="w-full md:w-[188px] flex flex-col gap-[10px] [@media(min-width:1300px)_and_(max-width:1439px)]:flex-none [@media(min-width:1300px)_and_(max-width:1439px)]:w-[220px] [@media(min-width:1300px)_and_(max-width:1439px)]:max-w-[220px] min-[1440px]:w-[188px] min-[1440px]:max-w-[188px] min-[1440px]:h-[308px] min-[1440px]:min-h-[308px] min-[1440px]:overflow-hidden">
                        <h4
                            className="m-0 text-[20px] leading-[100%] text-black"
                            style={{ ...vcNudge, fontWeight: 500 }}
                        >
                            Career Roles
                        </h4>
                        <div className="min-[1440px]:overflow-hidden">
                            <BulletList items={careerItems} bulletColor={bulletColor} />
                        </div>
                    </div>
                </div>

                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center text-white no-underline self-center mt-0 w-[151.4525px] h-[50px] rounded-[26.82px] px-[14px] gap-[6px] md:w-[170px] md:h-[56px] md:rounded-[30px] md:px-[20px] md:gap-[8px] min-[1300px]:self-start"
                    style={{
                        ...vcNudge,
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: "100%",
                        backgroundColor: buttonBg,
                    }}
                >
                    Enquire Now
                    <span className="md:hidden">
                        <Image
                            src="/photos/schools/design/courses/arrow_cool_down.svg"
                            alt=""
                            width={21.4525}
                            height={21.4525}
                            className="shrink-0 object-contain"
                            aria-hidden
                        />
                    </span>
                    <span className="hidden md:inline-flex">
                        <Image
                            src="/photos/schools/design/courses/arrow_cool_down.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="shrink-0 object-contain"
                            aria-hidden
                        />
                    </span>
                </Link>
            </div>
        </article>
    );
}

export default function DesignSchoolCoursesPage() {
    return (
        <div className="w-full bg-[#FCFCFC] min-h-screen">
            <DesignSchoolIntroAnimation />
            <DesignSchoolNavbar />

            <section className="w-full max-w-[375px] [@media(min-width:425px)_and_(max-width:767px)]:max-w-none md:max-w-[1440px] mx-auto h-auto md:h-auto pt-[60px] md:pt-[40px] px-[20px] [@media(min-width:425px)_and_(max-width:767px)]:px-[16px] md:px-8 min-[1300px]:px-[32px] min-[1440px]:px-[40px] md:pb-0 pb-0 flex flex-col gap-[10px] md:gap-[4px] items-center md:items-start lg:items-start [@media(min-width:425px)_and_(max-width:767px)]:items-start md:text-left lg:text-left [@media(min-width:425px)_and_(max-width:767px)]:text-left max-[340px]:text-left">
                <div className="w-full min-[1440px]:max-w-[1280px] min-[1440px]:mx-auto">
                    <h1
                        className="w-full max-w-[329px] h-[94px] md:w-[644px] md:h-[165px] text-[38px] max-[340px]:text-[34px] md:text-[70px] leading-[120%] text-black"
                        style={{ ...vcNudge, fontWeight: 500 }}
                    >
                        <span className="block lg:hidden">
                            <span className="whitespace-nowrap">Explore Our</span>
                            <br />
                            <span className="whitespace-nowrap">
                                <span style={{ fontFamily: '"IvyPresto Display", serif', fontWeight: 300 }} className="italic">
                                    Creative
                                </span>{" "}
                                Programs
                            </span>
                        </span>
                        <span className="hidden lg:block">
                            <span className="whitespace-nowrap">Let&apos;s Find the Right</span>
                            <br />
                            <span className="whitespace-nowrap">
                                <span style={{ fontFamily: '"IvyPresto Display", serif', fontWeight: 300 }} className="italic">
                                    Course
                                </span>{" "}
                                for You
                            </span>
                        </span>
                    </h1>
                </div>
            </section>

            <section className="w-full px-4 md:px-8 min-[1300px]:px-[32px] min-[1440px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:mx-auto pb-[40px] flex flex-col gap-[20px] pt-[10px]">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-[20px]">
                    {/* Row 1 — original Creative Design */}
                    <CourseCard
                        cardBg="#FEF6F1"
                        leftBg="#FF5C00"
                        badgePipeColor="#FF5C00"
                        bulletColor="#FF5C00"
                        buttonBg="#8F56FF"
                        imageSrc="/photos/schools/design/courses/CourseOne.png"
                        imageSrcMobile="/photos/schools/design/courses/CourseOneMobile.png"
                        mobileImageBox={{ left: 18.19, top: 76.53, width: 250.982421875, height: 251.0989990234375 }}
                        desktopImageBox1440={{ left: 34, top: 143, width: 469, height: 469.21783447265625 }}
                        badgeLeft="Offline"
                        badgeRight="6 Month"
                        title={
                            <>
                                Creative Design &amp;
                                <br />
                                Communication
                            </>
                        }
                        overview={overviewCreativeDesign}
                        learnItems={learnCreative}
                        careerItems={careerCreative}
                    />

                    {/* Row 2 — AI Integrated Graphic Design */}
                    <CourseCard
                        cardBg="#F6F2FF"
                        leftBg="#8F56FF"
                        badgePipeColor="#8F56FF"
                        bulletColor="#8F56FF"
                        buttonBg="#FF5659"
                        imageSrc="/photos/schools/design/courses/CourseTwo.png"
                        imageSrcMobile="/photos/schools/design/courses/CourseTwoMobile.png"
                        mobileImageBox={{ left: 20.34, top: 81.6, width: 161.6134033203125, height: 238.8249053955078 }}
                        desktopImageBox1440={{ left: 38, top: 152.49, width: 301.9999694824219, height: 446.28173828125 }}
                        titleBoxLg={{ left: 290, top: 34, width: 301, height: 96 }}
                        badgeLeft="Online"
                        badgeRight="3 Months"
                        title={
                            <>
                                AI Integrated
                                <br />
                                Graphic Design
                            </>
                        }
                        overview={overviewAiGraphic}
                        learnItems={learnAiGraphic}
                        careerItems={careerAiGraphic}
                    />

                    {/* Row 3 — Branding & Identity (screenshot) */}
                    <CourseCard
                        cardBg="#FFF7F7"
                        leftBg="#FF5659"
                        badgePipeColor="#FF5659"
                        bulletColor="#FF5659"
                        buttonBg="#29BA66"
                        imageSrc="/photos/schools/design/courses/CourseThree.png"
                        imageSrcMobile="/photos/schools/design/courses/CourseThreeMobile.png"
                        mobileImageBox={{ left: 18.2, top: 109.17, width: 231.13656616210938, height: 217.26837158203125 }}
                        desktopImageBox1440={{ left: 34, top: 204, width: 431.9148864746094, height: 406 }}
                        titleBoxLg={{ left: 290, top: 34, width: 301, height: 144 }}
                        badgeLeft="Online"
                        badgeRight="4 Weeks"
                        title={
                            <>
                                Branding &amp;
                                <br />
                                Identity Design
                                <br />
                                Mastery
                            </>
                        }
                        overview={overviewBranding}
                        learnItems={learnBranding}
                        careerItems={careerBranding}
                    />

                    {/* Row 4 — UI/UX + AI */}
                    <CourseCard
                        cardBg="#F4FFF9"
                        leftBg="#29C76B"
                        badgePipeColor="#29C76B"
                        bulletColor="#29C76B"
                        buttonBg="#2592FF"
                        imageSrc="/photos/schools/design/courses/CourseFour.png"
                        imageSrcMobile="/photos/schools/design/courses/CourseFourMobile.png"
                        mobileImageBox={{ left: 18.2, top: 120.94, width: 214.05751037597656, height: 201.21405029296875 }}
                        desktopImageBox1440={{ left: 34, top: 226, width: 400, height: 376 }}
                        titleBoxLg={{ left: 322, top: 34, width: 263, height: 96 }}
                        badgeLeft="Online"
                        badgeRight="3 Months"
                        title={
                            <>
                                UI/UX Design
                                <br />
                                + AI Program
                            </>
                        }
                        overview={overviewUiUx}
                        learnItems={learnUiUx}
                        careerItems={careerUiUx}
                    />

                    {/* Row 5 — Video editing */}
                    <CourseCard
                        cardBg="#F4F9FF"
                        leftBg="#2592FF"
                        badgePipeColor="#2592FF"
                        bulletColor="#2592FF"
                        buttonBg="#FF5C00"
                        imageSrc="/photos/schools/design/courses/CourseFive.png"
                        imageSrcMobile="/photos/schools/design/courses/CourseFiveMobile.png"
                        mobileImageBox={{ left: 18.2, top: 120.94, width: 240.814697265625, height: 198.65296936035156 }}
                        imageObjectPosition="left 92%"
                        desktopImageBox1440={{ left: 34, top: 226, width: 450, height: 371.2142028808594 }}
                        titleBoxLg={{ left: 322, top: 34, width: 263, height: 144 }}
                        badgeLeft="Online"
                        badgeRight="3 Months"
                        title={
                            <>
                                AI Integrated
                                <br />
                                Video Editing
                                <br />
                                Mastery
                            </>
                        }
                        overview={overviewVideo}
                        learnItems={learnVideo}
                        careerItems={careerVideo}
                    />
                </div>
            </section>
        </div>
    );
}
