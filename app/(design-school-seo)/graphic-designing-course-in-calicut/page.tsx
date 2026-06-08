import Image from "next/image";
import { GraphicDesigningCalicutHeroSection } from "./_sections/GraphicDesigningCalicutHeroSection";
import { GraphicDesigningCalicutStatsSection } from "./_sections/GraphicDesigningCalicutStatsSection";
import { GraphicDesigningCalicutWhatWeHaveSection } from "./_sections/GraphicDesigningCalicutWhatWeHaveSection";
import { GraphicDesigningCalicutFlagshipProgramSection } from "./_sections/GraphicDesigningCalicutFlagshipProgramSection";
import { GraphicDesigningCalicutBecomeSection } from "./_sections/GraphicDesigningCalicutBecomeSection";
import { GraphicDesigningCalicutToolsSection } from "./_sections/GraphicDesigningCalicutToolsSection";
import { GraphicDesigningCalicutExploreProgramsSection } from "./_sections/GraphicDesigningCalicutExploreProgramsSection";
import { GraphicDesigningCalicutWhatSetsApartSection } from "@/components/design/GraphicDesigningCalicutWhatSetsApartSection";
import { GraphicDesigningCalicutFigmaRecognizedSection } from "@/components/design/GraphicDesigningCalicutFigmaRecognizedSection";
import { GraphicDesigningCalicutWhoIsThisCourseForSection } from "@/components/design/GraphicDesigningCalicutWhoIsThisCourseForSection";
import { GraphicDesigningCalicutMentorsSection } from "@/components/design/GraphicDesigningCalicutMentorsSection";
import { GraphicDesigningCalicutBrandsSection } from "@/components/design/GraphicDesigningCalicutBrandsSection";
import { GraphicDesigningCalicutStudentsWorkingSection } from "@/components/design/GraphicDesigningCalicutStudentsWorkingSection";
import { GraphicDesigningCalicutStudentsWorkSection } from "@/components/design/GraphicDesigningCalicutStudentsWorkSection";
import { GraphicDesigningCalicutTestimonialsSection } from "@/components/design/GraphicDesigningCalicutTestimonialsSection";
import { DesignStoriesInsightsSection } from "@/components/design/DesignStoriesInsightsSection";
import { DesignSeoCultureGrid } from "@/components/design/DesignSeoCultureGrid";
import { DesignSchoolFooter } from "@/components/design/DesignSchoolFooter";
import { DesignSeoFaqList } from "@/components/design/DesignSeoFaqList";
import { buildDesignSchoolSeoMetadata } from "@/lib/design-school-seo";
import type { CSSProperties } from "react";
import Link from "next/link";

/**
 * Navbar: `app/(design-school-seo)/layout.tsx` (`DesignSchoolNavbar`).
 */
export const metadata = buildDesignSchoolSeoMetadata("graphic-designing-course-in-calicut");

/** Match typography used on `/design-school` page footer — Figma «VC Nudge Trial Normal Medium» → weight 500 */
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
/** Desktop CTA-section title — Figma: 82px / 120% / 0 letter-spacing */
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

// Put the 3 SVGs here (public/...) and keep these paths as-is.
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

export default function GraphicDesigningCourseInCalicutPage() {
    return (
        <>
            <GraphicDesigningCalicutHeroSection />
            <GraphicDesigningCalicutStatsSection />
            <GraphicDesigningCalicutWhatWeHaveSection />
            <GraphicDesigningCalicutFlagshipProgramSection />
            <GraphicDesigningCalicutBecomeSection />
            <GraphicDesigningCalicutToolsSection />
            <GraphicDesigningCalicutExploreProgramsSection />
            <GraphicDesigningCalicutWhatSetsApartSection />
            <GraphicDesigningCalicutFigmaRecognizedSection />
            <GraphicDesigningCalicutWhoIsThisCourseForSection />
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
                    {/* Title + subtitle */}
                    <div className="w-full flex flex-col items-center text-center gap-[10px] lg:gap-[16px] lg:h-[140px]">
                        {/* Mobile title */}
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
                            Collabs &amp; Creative
                            <br />
                            Events
                        </h2>

                        {/* Desktop title */}
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
                            Design Culture, Collabs
                            <br />
                            &amp; Creative Events
                        </h2>

                        {/* Subtitle */}
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
                            <span className="lg:hidden">Workshops, design sessions, collaborations, and community events.</span>
                            <span className="hidden lg:inline" style={{ fontSize: 20 }}>
                                Workshops, design sessions, collaborations, and community events.
                            </span>
                        </p>
                    </div>

                    {/* Cards */}
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
                                    Here’s What Most People Ask
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
                                    Here’s What Most People Ask
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="w-full flex justify-center md:justify-start lg:justify-end">
                        <div className="w-full md:max-w-none lg:w-[clamp(520px,55vw,794px)] lg:min-h-[557.9268188476562px]">
                            <DesignSeoFaqList font={DESIGN_HEADING_FONT} />
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
                                    Don’t just <br />
                                    learn design.
                                </span>
                                <span className="hidden lg:inline-block" style={DESIGN_SEO_JOIN_TITLE_DESKTOP_STYLE}>
                                    Don’t just learn design.
                                </span>
                            </h2>

                            {/* 3-box group */}
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
                                        style={{
                                            paddingTop: 16.33,
                                            paddingRight: 12.24,
                                            paddingBottom: 16.33,
                                            paddingLeft: 12.24,
                                            gap: 16.33,
                                        }}
                                    >
                                        <Image
                                            src={LIVE_IT_SVG}
                                            alt=""
                                            aria-hidden
                                            width={49}
                                            height={48}
                                            className="block w-[48.97581481933594px] h-[48.18134307861328px]"
                                        />
                                        <span style={{ fontFamily: DESIGN_HEADING_FONT, fontWeight: 500, lineHeight: "120%" }}>
                                            <span className="lg:hidden" style={{ fontSize: 35 }}>
                                                Live it.
                                            </span>
                                            <span className="hidden lg:inline" style={{ fontSize: 56 }}>
                                                Live it.
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-center text-white w-[244.78900146484375px] h-[82.98680114746094px] lg:w-[337.78900146484375px] lg:h-[99.65054321289062px]"
                                    style={{ backgroundColor: "#2FA75C" }}
                                >
                                    <div
                                        className="flex items-center justify-center w-full h-full"
                                        style={{
                                            paddingTop: 16.33,
                                            paddingRight: 12.24,
                                            paddingBottom: 16.33,
                                            paddingLeft: 12.24,
                                            gap: 16.33,
                                        }}
                                    >
                                        <Image
                                            src={CREATE_IT_SVG}
                                            alt=""
                                            aria-hidden
                                            width={49}
                                            height={50}
                                            className="block w-[48.97581481933594px] h-[50.33625793457031px]"
                                        />
                                        <span style={{ fontFamily: DESIGN_HEADING_FONT, fontWeight: 500, lineHeight: "120%" }}>
                                            <span className="lg:hidden" style={{ fontSize: 35 }}>
                                                Create it.
                                            </span>
                                            <span className="hidden lg:inline" style={{ fontSize: 56 }}>
                                                Create it.
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-center text-white w-[209.78900146484375px] h-[87.1561508178711px] lg:w-[280.78900146484375px] lg:h-[99.65054321289062px]"
                                    style={{ backgroundColor: "#3349EF" }}
                                >
                                    <div
                                        className="flex items-center justify-center w-full h-full"
                                        style={{
                                            paddingTop: 16.33,
                                            paddingRight: 12.24,
                                            paddingBottom: 16.33,
                                            paddingLeft: 12.24,
                                            gap: 16.33,
                                        }}
                                    >
                                        <Image
                                            src={OWN_IT_SVG}
                                            alt=""
                                            aria-hidden
                                            width={49}
                                            height={55}
                                            className="block w-[48.97581481933594px] h-[54.50560760498047px]"
                                        />
                                        <span style={{ fontFamily: DESIGN_HEADING_FONT, fontWeight: 500, lineHeight: "120%" }}>
                                            <span className="lg:hidden" style={{ fontSize: 35 }}>
                                                Own it.
                                            </span>
                                            <span className="hidden lg:inline" style={{ fontSize: 56 }}>
                                                Own it.
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p
                            className="m-0 w-full max-w-[335px] lg:max-w-[888.2645874023438px] lg:whitespace-nowrap"
                            style={{
                                fontFamily: DESIGN_HEADING_FONT,
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: "120%",
                                textAlign: "center",
                                color: "#000000B2",
                            }}
                        >
                            Join Design School by HACA and Build a Creative Career That Stands Out
                        </p>

                        <JoinNowButton />
                    </div>
                </div>
            </section>
            <DesignSchoolFooter font={DESIGN_HEADING_FONT} serif={DESIGN_SERIF_FONT} />
        </>
    );
}
