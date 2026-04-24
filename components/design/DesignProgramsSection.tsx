import { DesignProgramCard, type DesignProgramCardProps } from "./DesignProgramCard";
import { DesignPickOneToExploreSection } from "./DesignPickOneToExploreSection";

const DUMMY_TOOLS = Array.from({ length: 10 }, (_, i) => ({ alt: `Tool ${i + 1}` }));

const PROGRAMS: DesignProgramCardProps[] = [
    {
        bgColor: "#FF5C00",
        dividerColor: "#E8651B",
        buttonColor: "#8F56FF",
        mobileCardHeight: 828,
        mode: "Offline",
        duration: "6 Month",
        titleLine1: "Creative Design &",
        titleLine2: "Communication",
        description:
            "This program is designed to help you understand design as a process, not just a set of tools. You'll learn through real projects, guided practice, and internship-style assignments that reflect how the creative industry works.",
        tools: DUMMY_TOOLS,
        photoSrc: "/photos/schools/design/program 1 photo.webp",
        photoConfig: {
            desktop: { top: 100, left: 729, width: 491, height: 628 },
            mobile: { top: 360, width: 390, height: 390 },
        },
        href: "/design-school/courses/creative-design",
        underline: {
            src: "/photos/schools/design/program 1 vector 1.svg",
            desktop: { width: 259.64, height: 25.46, rotation: -0.08 },
            mobile: { width: 132.54, height: 12.996 },
        },
        decoration: {
            src: "/photos/schools/design/program 1 vector 2.svg",
            desktop: { width: 38.55, height: 55.95, rotation: 14.85 },
            mobile: { width: 19.68, height: 28.56 },
            offset: {
                // Move further to top-right (program 1 only)
                desktop: { top: -24, right: -26 },
                mobile: { top: -36, right: -34 },
            },
        },
    },
    {
        bgColor: "#8F56FF",
        dividerColor: "#8F56FF",
        buttonColor: "#FF5659",
        mobileCardHeight: 902,
        mode: "Online",
        duration: "3 Months",
        titleLine1: "AI Integrated",
        titleLine2: "Graphic Design",
        description:
            "Build strong visual foundations that support every creative role. This module focuses on clarity, structure, and intentional design choices.",
        tools: DUMMY_TOOLS,
        photoSrc: "/photos/schools/design/program 2 photo.webp",
        photoConfig: {
            desktop: { top: 55, left: 674, width: 650, height: 724 },
            mobile: { top: 335, width: 440, height: 490 },
        },
        href: "/design-school/courses/ai-graphic-design",
        underline: {
            src: "/photos/schools/design/program 2 vector 1.svg",
            desktop: { width: 205, height: 20, rotation: 0 },
            mobile: { width: 121.11, height: 11.82 },
            anchorPct: 62,
        },
        decoration: {
            src: "/photos/schools/design/program 2 vector 2.svg",
            desktop: { width: 66, height: 62.76, rotation: 0 },
            mobile: { width: 30, height: 28.89 },
            offset: {
                // Slightly left compared to program 1 (less negative right)
                desktop: { right: -2 },
                mobile: { right: -6 },
            },
        },
    },
    {
        bgColor: "#FF5659",
        dividerColor: "#FF5659",
        buttonColor: "#29BA66",
        mobileCardHeight: 828,
        mode: "Online",
        duration: "4 Weeks",
        titleLine1: "Branding & Identity",
        titleLine2: "Design Mastery",
        description:
            "Master the art of brand storytelling, logo design, and visual identity, ideal for designers who want to specialise in branding fast.",
        tools: DUMMY_TOOLS,
        photoSrc: "/photos/schools/design/program 3 photo.webp",
        photoConfig: {
            desktop: { top: -110, left: 620, width: 760, height: 840 },
            // Mobile: match Program 1 (centered + same sizing feel)
            mobile: { top: 360, width: 390, height: 390 },
        },
        href: "/design-school/courses/program-3",
        underline: {
            src: "/photos/schools/design/program 3 vector 1.svg",
            desktop: { width: 229.0, height: 17.0, rotation: -1.93 },
            mobile: { width: 142.8, height: 10.6 },
            // Keep underline under the 2nd line word, slightly right like design
            anchorPct: 66,
        },
        decoration: {
            src: "/photos/schools/design/program 3 vector 2.svg",
            desktop: { width: 67.79, height: 50.07, rotation: -4.21 },
            mobile: { width: 42.27, height: 31.22 },
            offset: {
                desktop: { top: -22, right: -30 },
                mobile: { top: -34, right: -38 },
            },
        },
    },
    {
        bgColor: "#29C76B",
        dividerColor: "#29C76B",
        buttonColor: "#2592FF",
        mobileCardHeight: 828,
        mode: "Online",
        duration: "3 Months",
        titleLine1: "UI/UX Design",
        titleLine2: "+ AI Program",
        description:
            "Build user-friendly digital experiences through design thinking, wireframing, and prototyping, which are ideal for future app and web designers.",
        tools: DUMMY_TOOLS,
        photoSrc: "/photos/schools/design/program 4 photo.webp",
        photoConfig: {
            desktop: { top: 53.19, left: 754, width: 407, height: 668 },
            mobile: { top: 330, left: 63, width: 250, height: 410.32 },
        },
        href: "/design-school/courses/program-4",
        underline: {
            src: "/photos/schools/design/program 4 vector 1.svg",
            desktop: { width: 246.0, height: 19.3793, rotation: 1.85 },
            mobile: { width: 130.0, height: 10.2411 },
            anchorPct: 78,
            offset: { desktop: { y: 4 }, mobile: { y: 3 } },
        },
        decoration: {
            src: "/photos/schools/design/program 4 vector 2.svg",
            desktop: { width: 35.5006, height: 37.5159, rotation: 20.22 },
            mobile: { width: 23.0, height: 24.3061 },
            offset: { desktop: { right: -34 }, mobile: { right: -38 } },
        },
    },
    {
        bgColor: "#2592FF",
        dividerColor: "#2592FF",
        buttonColor: "#FF5C00",
        mobileCardHeight: 900,
        mode: "Online",
        duration: "3 Months",
        titleLine1: "AI Integrated Video",
        titleLine2: "Editing Mastery",
        description:
            "Editing is storytelling. This module focuses on how visuals, sound, and cuts work together to hold attention and deliver meaning.",
        tools: DUMMY_TOOLS,
        photoSrc: "/photos/schools/design/program 5 photo.webp",
        photoConfig: {
            desktop: { top: 78.63, left: 788, width: 420, height: 599.8787841796875 },
            mobile: { top: 384, left: 38, width: 300, height: 428.4848327636719 },
        },
        href: "/design-school/courses/program-5",
        underline: {
            src: "/photos/schools/design/program 5 vector 1.svg",
            desktop: { width: 248.32049643390252, height: 21.790195537783195, rotation: -2.85 },
            mobile: { width: 103.72389255795225, height: 13.465850875002188 },
            anchorPct: 72,
        },
        decoration: {
            src: "/photos/schools/design/program 5 vector 2.svg",
            desktop: { width: 49.026123239136666, height: 71.09472684130627 },
            mobile: { width: 24.000000094118803, height: 34.80335249244244 },
            offset: {
                // Figma: deco ~ top 79.63 / left 693 on canvas — anchored to title block top-right
                desktop: { top: -20, right: -28 },
                mobile: { top: -22, right: -20 },
            },
        },
    },
    {
        bgColor: "#0F3460",
        mobileCardHeight: 828,
        mode: "Online",
        duration: "3 Month",
        titleLine1: "Program Title",
        titleLine2: "Line Two",
        description: "Program description goes here. This will be updated with the actual content for program 6.",
        tools: DUMMY_TOOLS,
        photoSrc: "/photos/schools/design/program 1 photo.webp",
        href: "/design-school/courses/program-6",
    },
];

export function DesignProgramsSection() {
    return (
        <div className="w-full">
            {PROGRAMS.map((program, i) => (
                <div key={i} className={i === 3 ? "max-md:mt-[18px]" : undefined}>
                    {i === 5 ? <DesignPickOneToExploreSection /> : <DesignProgramCard {...program} />}
                </div>
            ))}
        </div>
    );
}
