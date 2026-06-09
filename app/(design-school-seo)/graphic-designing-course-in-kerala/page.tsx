import Image from "next/image";
import { GraphicDesigningKeralaHeroSection } from "./_sections/GraphicDesigningKeralaHeroSection";
import { GraphicDesigningKeralaStatsSection } from "./_sections/GraphicDesigningKeralaStatsSection";
import { GraphicDesigningKeralaWhatWeHaveSection } from "./_sections/GraphicDesigningKeralaWhatWeHaveSection";
import { GraphicDesigningKeralaFlagshipProgramSection } from "./_sections/GraphicDesigningKeralaFlagshipProgramSection";
import { GraphicDesigningKeralaBecomeSection } from "./_sections/GraphicDesigningKeralaBecomeSection";
import { GraphicDesigningKeralaToolsSection } from "./_sections/GraphicDesigningKeralaToolsSection";
import { GraphicDesigningKeralaExploreProgramsSection } from "./_sections/GraphicDesigningKeralaExploreProgramsSection";
import { GraphicDesigningKeralaWhyChooseSection } from "./_sections/GraphicDesigningKeralaWhyChooseSection";
import { GraphicDesigningCalicutFigmaRecognizedSection } from "@/components/design/GraphicDesigningCalicutFigmaRecognizedSection";
import { GraphicDesigningKeralaWhoIsThisForSection } from "./_sections/GraphicDesigningKeralaWhoIsThisForSection";
import { GraphicDesigningCalicutMentorsSection } from "@/components/design/GraphicDesigningCalicutMentorsSection";
import { GraphicDesigningCalicutBrandsSection } from "@/components/design/GraphicDesigningCalicutBrandsSection";
import { GraphicDesigningCalicutStudentsWorkingSection } from "@/components/design/GraphicDesigningCalicutStudentsWorkingSection";
import { GraphicDesigningCalicutStudentsWorkSection } from "@/components/design/GraphicDesigningCalicutStudentsWorkSection";
import { GraphicDesigningCalicutTestimonialsSection } from "@/components/design/GraphicDesigningCalicutTestimonialsSection";
import { DesignStoriesInsightsSection } from "@/components/design/DesignStoriesInsightsSection";
import { DesignSeoCultureGrid } from "@/components/design/DesignSeoCultureGrid";
import { DesignSchoolFooter } from "@/components/design/DesignSchoolFooter";
import { DesignSeoFaqList, type FaqItem } from "@/components/design/DesignSeoFaqList";
import { buildDesignSchoolSeoMetadata } from "@/lib/design-school-seo";
import type { CSSProperties } from "react";
import Link from "next/link";

export const metadata = buildDesignSchoolSeoMetadata("graphic-designing-course-in-kerala");

const DESIGN_HEADING_FONT = '"VC Nudge Trial Normal", sans-serif';
const DESIGN_SERIF_FONT = '"IvyPresto Display", serif';

const DESIGN_SEO_JOIN_TITLE_MOBILE_STYLE: CSSProperties = {
    fontFamily: DESIGN_HEADING_FONT,
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: 35,
    lineHeight: "120%",
    letterSpacing: 0,
    color: "#000000",
};

const DESIGN_SEO_JOIN_TITLE_DESKTOP_STYLE: CSSProperties = {
    fontFamily: DESIGN_HEADING_FONT,
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: 82,
    lineHeight: "120%",
    letterSpacing: 0,
    verticalAlign: "middle",
    color: "#000000",
};

const LIVE_IT_SVG = "/photos/schools/design/seo/live-it.svg";
const CREATE_IT_SVG = "/photos/schools/design/seo/create-it.svg";
const OWN_IT_SVG = "/photos/schools/design/seo/own-it.svg";

const ARROW_PATH =
    "M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z";

function JoinNowButton() {
    return (
        <>
            {/* Mobile */}
            <div className="flex items-center justify-center gap-[4.4px] group lg:hidden" style={{ width: 178.8333282470703, height: 50.19047546386719 }}>
                <Link
                    href="/enquire"
                    className="flex items-center justify-center rounded-[50px] border bg-transparent transition-colors duration-300 group-hover:bg-[#FF5C00]"
                    style={{
                        width: 131.2619,
                        height: 50.19047546386719,
                        borderColor: "#FF5C00",
                        fontFamily: DESIGN_HEADING_FONT,
                        fontWeight: 550,
                        fontSize: 16,
                        lineHeight: "100%",
                    }}
                >
                    <span className="text-[#000000] leading-none whitespace-nowrap transition-colors duration-300 group-hover:text-white">Join Now</span>
                </Link>
                <Link
                    href="/enquire"
                    className="relative shrink-0 overflow-hidden rounded-full"
                    style={{ width: 47.57143020629883, height: 47.57143020629883, backgroundColor: "#FF5C00" }}
                    aria-label="Join Now"
                >
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0 -translate-x-[36px]">
                        <svg viewBox="0 0 34 34" fill="none" style={{ width: 26, height: 26 }}>
                            <path d={ARROW_PATH} fill="white" />
                        </svg>
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-[36px]">
                        <svg viewBox="0 0 34 34" fill="none" style={{ width: 26, height: 26 }}>
                            <path d={ARROW_PATH} fill="white" />
                        </svg>
                    </span>
                </Link>
            </div>

            {/* Desktop */}
            <div className="hidden items-center justify-center gap-[5.56px] group lg:flex" style={{ width: 214.2222137451172, height: 60.5555534362793 }}>
                <Link
                    href="/enquire"
                    className="flex items-center justify-center rounded-[50px] border-[1.11px] bg-transparent transition-colors duration-300 group-hover:bg-[#FF5C00]"
                    style={{
                        width: 148.6667,
                        height: 60.5555534362793,
                        borderColor: "#FF5C00",
                        fontFamily: DESIGN_HEADING_FONT,
                        fontWeight: 550,
                        fontSize: 17.78,
                        lineHeight: "100%",
                        padding: "17.78px 33.33px",
                    }}
                >
                    <span className="text-[#000000] leading-none whitespace-nowrap transition-colors duration-300 group-hover:text-white">Join Now</span>
                </Link>
                <Link
                    href="/enquire"
                    className="relative shrink-0 overflow-hidden rounded-full"
                    style={{ width: 60, height: 60, backgroundColor: "#FF5C00" }}
                    aria-label="Join Now"
                >
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0 -translate-x-[45.56px]">
                        <svg width="33" height="33" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d={ARROW_PATH} fill="white" />
                        </svg>
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-[46px]">
                        <svg width="33" height="33" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d={ARROW_PATH} fill="white" />
                        </svg>
                    </span>
                </Link>
            </div>
        </>
    );
}

const KERALA_FAQS: FaqItem[] = [
    {
        id: "gd-kerala-faq-1",
        q: "Which is the best graphic designing course in Kerala?",
        plusColor: "#8F56FF",
        a: "The best graphic designing course is one that focuses on practical learning, portfolio development, mentorship, and industry exposure. At Design School by HACA, students learn multiple creative disciplines through hands-on projects and real-world workflows.",
    },
    {
        id: "gd-kerala-faq-2",
        q: "How long does the course take?",
        plusColor: "#FF5C00",
        a: "Our flagship CDC program runs for 5 months, followed by a 1-month internship for practical industry experience.",
    },
    {
        id: "gd-kerala-faq-3",
        q: "Do I need prior experience in design?",
        plusColor: "#2592FF",
        a: "No. This course is beginner-friendly and designed to help students learn from the basics.",
    },
    {
        id: "gd-kerala-faq-4",
        q: "Will I get placement support after the course?",
        plusColor: "#29C76B",
        a: "Yes. We provide placement assistance, portfolio reviews, resume support, mock interviews, and internship opportunities.",
    },
    {
        id: "gd-kerala-faq-5",
        q: "What software tools will I learn?",
        plusColor: "#F25555",
        a: "Students learn Photoshop, Illustrator, After Effects, Premiere Pro, and Figma as part of the curriculum.",
    },
    {
        id: "gd-kerala-faq-6",
        q: "Can I work as a freelancer after completing the course?",
        plusColor: "#FF5659",
        a: "Absolutely. Many students start freelance careers after building strong portfolios and practical project experience.",
    },
    {
        id: "gd-kerala-faq-7",
        q: "Is graphic design a good career option in Kerala?",
        plusColor: "#29C76B",
        a: "Yes. The demand for graphic designers, UI/UX designers, editors, and branding professionals is growing rapidly across agencies, startups, and businesses.",
    },
    {
        id: "gd-kerala-faq-8",
        q: "Will I receive a certificate?",
        plusColor: "#8F56FF",
        a: "Yes. Students receive an industry-recognised certificate after successful completion of the program.",
    },
];

export default function GraphicDesigningCourseInKeralaPage() {
    return (
        <>
            <GraphicDesigningKeralaHeroSection />
            <GraphicDesigningKeralaStatsSection />
            <GraphicDesigningKeralaWhatWeHaveSection />
            <GraphicDesigningKeralaFlagshipProgramSection />
            <GraphicDesigningKeralaToolsSection />
            <GraphicDesigningKeralaBecomeSection />
            <GraphicDesigningKeralaExploreProgramsSection />
            <GraphicDesigningKeralaWhyChooseSection />
            <GraphicDesigningCalicutFigmaRecognizedSection />
            <GraphicDesigningKeralaWhoIsThisForSection />
            <GraphicDesigningCalicutMentorsSection />
            <GraphicDesigningCalicutBrandsSection />
            <GraphicDesigningCalicutStudentsWorkingSection />
            <GraphicDesigningCalicutStudentsWorkSection />
            <GraphicDesigningCalicutTestimonialsSection />

            <div className="w-full bg-[#FCFCFC] flex justify-center">
                <DesignStoriesInsightsSection font={DESIGN_HEADING_FONT} serif={DESIGN_SERIF_FONT} />
            </div>

            <section className="w-full bg-[#FCFCFC] flex justify-center" aria-label="Design culture and events">
                <div
                    className="
                        w-full max-w-[1440px] box-border
                        flex flex-col items-center
                        px-[20px] pt-[30px] pb-[30px]
                        gap-[30px]
                        lg:px-[60px] lg:pt-[60px] lg:pb-[60px]
                        lg:gap-[60px]
                    "
                >
                    <div className="w-full flex flex-col items-center text-center gap-[10px] lg:gap-[16px] lg:h-[140px]">
                        <h2
                            className="m-0 w-full lg:hidden"
                            style={{
                                fontFamily: DESIGN_HEADING_FONT,
                                fontWeight: 500,
                                fontStyle: "normal",
                                fontSize: "35px",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                                color: "#000000",
                            }}
                        >
                            Design Culture,
                            <br />
                            Workshops &amp; Creative
                            <br />
                            Community
                        </h2>

                        <h2
                            className="m-0 hidden w-full max-w-[530px] text-center lg:block"
                            style={{
                                fontFamily: DESIGN_HEADING_FONT,
                                fontWeight: 500,
                                fontStyle: "normal",
                                fontSize: 45,
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                                color: "#000000",
                            }}
                        >
                            Design Culture, Workshops
                            <br />
                            &amp; Creative Community
                        </h2>

                        <p
                            className="m-0 w-full max-w-[335px] lg:max-w-[872px] lg:whitespace-nowrap"
                            style={{
                                fontFamily: DESIGN_HEADING_FONT,
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "#000000B2",
                                lineHeight: "120%",
                                letterSpacing: 0,
                                fontSize: 14,
                                textAlign: "center",
                            }}
                        >
                            <span className="lg:hidden">At Design School, learning goes beyond classrooms.</span>
                            <span className="hidden lg:inline" style={{ fontSize: 20 }}>
                                At Design School, learning goes beyond classrooms.
                            </span>
                        </p>
                    </div>

                    <DesignSeoCultureGrid />
                </div>
            </section>

            <section className="w-full bg-[#FCFCFC] flex justify-center" aria-label="FAQ">
                <div
                    className="
                        w-full max-w-[1440px]
                        flex flex-col
                        px-[20px] py-[30px]
                        gap-[30px]
                        lg:flex-row lg:justify-between
                        lg:px-[60px] lg:py-[60px]
                    "
                >
                    <div className="w-full flex justify-center md:justify-start">
                        <div className="w-full max-w-[500px] md:max-w-none lg:w-[clamp(320px,34vw,500px)] lg:min-h-[108px] flex items-center justify-center md:justify-start">
                            <h2 className="m-0 w-full max-w-[335px] text-left text-black md:max-w-none">
                                <span
                                    className="lg:hidden"
                                    style={{
                                        fontFamily: DESIGN_HEADING_FONT,
                                        fontWeight: 500,
                                        fontStyle: "normal",
                                        fontSize: "35px",
                                        lineHeight: "110%",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    Here&apos;s What Most People Ask
                                </span>
                                <span
                                    className="hidden lg:inline"
                                    style={{
                                        fontFamily: DESIGN_HEADING_FONT,
                                        fontWeight: 500,
                                        fontStyle: "normal",
                                        fontSize: "45px",
                                        lineHeight: "110%",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    Here&apos;s What Most People Ask
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="w-full flex justify-center md:justify-start lg:justify-end">
                        <div className="w-full md:max-w-none lg:w-[clamp(520px,55vw,794px)] lg:min-h-[557.9268188476562px]">
                            <DesignSeoFaqList font={DESIGN_HEADING_FONT} items={KERALA_FAQS} />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="w-full flex justify-center bg-[#FCFCFC] px-6 lg:px-0"
                aria-label="Join the course"
            >
                <div
                    className="
                        flex w-full flex-col items-center justify-center text-center
                        gap-[20px]
                        pt-[30px] pb-[30px]
                        min-h-[555.2255px]
                        lg:pt-[50px] lg:pb-[60px] lg:px-[60px]
                        lg:min-h-0 lg:h-[435.3687px]
                    "
                    style={{ maxWidth: 1440 }}
                >
                    <div
                        className="flex w-full flex-col items-center justify-center gap-[20px]"
                        style={{ width: "100%", maxWidth: 896 }}
                    >
                        <div className="flex w-full flex-col items-center justify-center gap-[20px] lg:gap-[20px]">
                            <h2 className="m-0 w-full lg:flex lg:h-[98px] lg:max-w-[896px] lg:items-center lg:justify-center">
                                <span className="lg:hidden" style={DESIGN_SEO_JOIN_TITLE_MOBILE_STYLE}>
                                    Don&apos;t Just <br />
                                    Learn Design.
                                </span>
                                <span className="hidden lg:inline-block" style={DESIGN_SEO_JOIN_TITLE_DESKTOP_STYLE}>
                                    Don&apos;t Just Learn Design.
                                </span>
                            </h2>

                            <div
                                className="flex w-full flex-col items-center lg:flex-row lg:justify-center"
                                style={{ gap: 8.16, maxWidth: 888.2645874023438 }}
                            >
                                <div
                                    className="flex items-center justify-center text-white w-[198.78900146484375px] h-[80.8318862915039px] lg:w-[264.78900146484375px] lg:h-[99.65054321289062px]"
                                    style={{ backgroundColor: "#776BF1" }}
                                >
                                    <div
                                        className="flex items-center justify-center w-full h-full"
                                        style={{ paddingTop: 16.33, paddingRight: 12.24, paddingBottom: 16.33, paddingLeft: 12.24, gap: 16.33 }}
                                    >
                                        <Image src={LIVE_IT_SVG} alt="" aria-hidden width={49} height={48} className="block w-[48.97581481933594px] h-[48.18134307861328px]" />
                                        <span style={{ fontFamily: DESIGN_HEADING_FONT, fontWeight: 500, lineHeight: "120%" }}>
                                            <span className="lg:hidden" style={{ fontSize: 35 }}>Live it.</span>
                                            <span className="hidden lg:inline" style={{ fontSize: 56 }}>Live it.</span>
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-center text-white w-[244.78900146484375px] h-[82.98680114746094px] lg:w-[337.78900146484375px] lg:h-[99.65054321289062px]"
                                    style={{ backgroundColor: "#2FA75C" }}
                                >
                                    <div
                                        className="flex items-center justify-center w-full h-full"
                                        style={{ paddingTop: 16.33, paddingRight: 12.24, paddingBottom: 16.33, paddingLeft: 12.24, gap: 16.33 }}
                                    >
                                        <Image src={CREATE_IT_SVG} alt="" aria-hidden width={49} height={50} className="block w-[48.97581481933594px] h-[50.33625793457031px]" />
                                        <span style={{ fontFamily: DESIGN_HEADING_FONT, fontWeight: 500, lineHeight: "120%" }}>
                                            <span className="lg:hidden" style={{ fontSize: 35 }}>Create it.</span>
                                            <span className="hidden lg:inline" style={{ fontSize: 56 }}>Create it.</span>
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-center text-white w-[209.78900146484375px] h-[87.1561508178711px] lg:w-[280.78900146484375px] lg:h-[99.65054321289062px]"
                                    style={{ backgroundColor: "#3349EF" }}
                                >
                                    <div
                                        className="flex items-center justify-center w-full h-full"
                                        style={{ paddingTop: 16.33, paddingRight: 12.24, paddingBottom: 16.33, paddingLeft: 12.24, gap: 16.33 }}
                                    >
                                        <Image src={OWN_IT_SVG} alt="" aria-hidden width={49} height={55} className="block w-[48.97581481933594px] h-[54.50560760498047px]" />
                                        <span style={{ fontFamily: DESIGN_HEADING_FONT, fontWeight: 500, lineHeight: "120%" }}>
                                            <span className="lg:hidden" style={{ fontSize: 35 }}>Own it.</span>
                                            <span className="hidden lg:inline" style={{ fontSize: 56 }}>Own it.</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p
                            className="m-0 w-full max-w-[335px] lg:max-w-[888.2645874023438px]"
                            style={{
                                fontFamily: DESIGN_HEADING_FONT,
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: "120%",
                                textAlign: "center",
                                color: "#000000B2",
                            }}
                        >
                            Join the most practical and industry-focused Graphic Designing Course in Kerala and start creating work you&apos;ll genuinely be proud of.
                        </p>

                        <JoinNowButton />
                    </div>
                </div>
            </section>
            <DesignSchoolFooter font={DESIGN_HEADING_FONT} serif={DESIGN_SERIF_FONT} />
        </>
    );
}
