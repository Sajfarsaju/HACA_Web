import { Metadata } from "next";
import { schoolData } from "@/lib/schools-data";
import { DesignSchoolNavbar } from "@/components/design/DesignSchoolNavbar";
import { DesignEventCard } from "@/components/design/DesignEventCard";
import { DesignVideoSection } from "@/components/design/DesignVideoSection";
import { DesignPressLogos } from "@/components/design/DesignPressLogos";
import { DesignStatsSection } from "@/components/design/DesignStatsSection";
import { DesignProgramsHeadingSection } from "@/components/design/DesignProgramsHeadingSection";
import { DesignProgramsSection } from "@/components/design/DesignProgramsSection";
import Image from "next/image";
import Link from "next/link";

const school = schoolData.design;

export const metadata: Metadata = {
    title: `${school.title} | HACA`,
    description: school.description,
};

export default function DesignSchoolPage() {
    return (
        <div className="w-full bg-[#FCFCFC] min-h-screen">
            <DesignSchoolNavbar />

            {/* Hero Section */}
            <main className="max-w-[1440px] mx-auto w-full lg:h-[810px] h-auto min-h-[800px] lg:min-h-0 px-4 lg:px-0">
                <section className="relative w-full h-full">
                    {/* Desktop layout: left headline block, center character, right paragraph */}
                    <div className="hidden lg:block absolute top-[35px] right-[clamp(16px,4vw,60px)] w-[308px]">
                        <p
                            className="m-0 text-[#0A0A0A] text-[18px] leading-[28px]"
                            style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 550 }}
                        >
                            From your first concept to your final portfolio, everything here is built to feel hands-on,
                            honest, and creatively alive.
                        </p>
                    </div>

                    <DesignEventCard />

                    <div className="hidden lg:block absolute top-[56px] left-[526px] w-[493px] h-[697.36px]">
                        <Image
                            src="/photos/schools/design/e295061aefa42f0e48724b7d1e97e9c0bccfc93f.webp"
                            alt="Design character"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div className="hidden lg:flex absolute top-[238px] left-[60px] w-[529px] h-[397.49px] flex-col gap-[10px]">
                        {/* Heading block */}
                        <div className="w-[529px] h-[326.93px] rounded-[15px]">
                            <div className="relative w-full h-full">
                                {/* Line 1 */}
                                <div
                                    className="absolute top-0 left-[5px] text-[#050505] leading-none"
                                    style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500, fontSize: 100 }}
                                >
                                    Design
                                </div>

                                {/* Line 2 */}
                                <div
                                    className="absolute top-[79.25px] left-0 text-[#050505] leading-none"
                                    style={{ fontFamily: '"IvyPresto Display", serif', fontWeight: 300, fontStyle: "italic", fontSize: 100 }}
                                >
                                    Your
                                </div>

                                {/* Line 3: photo + word */}
                                <div className="absolute top-[176px] left-[5px] flex items-center gap-[13px]">
                                    <div className="relative w-[179px] h-[83px] rounded-[15px] overflow-hidden">
                                        <Image
                                            src="/photos/schools/design/57d01472fcc68dc28b23f66493f860df1603a284.webp"
                                            alt="Design student"
                                            fill
                                            className="object-cover"
                                            priority={false}
                                        />
                                    </div>
                                    <div
                                        className="text-[#050505] leading-none"
                                        style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500, fontSize: 100 }}
                                    >
                                        Career
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA row */}
                        <div className="flex items-center gap-[5.56px] w-[246.22px] h-[60.56px] group">
                            <Link
                                href="/design-school/courses"
                                className="flex items-center justify-center w-[180.67px] h-[60.56px] rounded-[50px] border-[1.11px] border-[#8F56FF] px-[33.33px] py-[17.78px] bg-transparent transition-colors duration-300 group-hover:bg-[#8F56FF]"
                                style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 550 }}
                            >
                                <span className="text-[#000000] text-[17.78px] leading-none whitespace-nowrap transition-colors duration-300 group-hover:text-white">Join the Club</span>
                            </Link>
                            <Link href="/design-school/courses" className="relative w-[60px] h-[60px] rounded-full bg-[#8F56FF] overflow-hidden shrink-0" aria-label="Join the Club">
                                <div className="absolute top-[13.89px] left-[13.89px] w-[33.33px] h-[33.33px] -translate-x-[45.56px] transition-transform duration-300 group-hover:translate-x-0">
                                    <svg width="33" height="33" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z" fill="white"/>
                                    </svg>
                                </div>
                                <div className="absolute top-[13.89px] left-[13.89px] w-[33.33px] h-[33.33px] transition-transform duration-300 group-hover:translate-x-[46px]">
                                    <svg width="33" height="33" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z" fill="white"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Bottom-left hint */}
                    <div className="absolute left-[16px] top-[762px] lg:left-[60px] lg:top-[752px] flex items-center gap-[3.68px] lg:gap-[5px]">
                        {/* Mobile typography */}
                        <span
                            className="lg:hidden text-[#0A0A0A] text-[10px] leading-[20.61px] whitespace-nowrap"
                            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                        >
                            Keep scrolling, it’s worth it
                        </span>
                        {/* Desktop typography */}
                        <span
                            className="hidden lg:inline text-[#0A0A0A] text-[12px] leading-[28px] whitespace-nowrap"
                            style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 400 }}
                        >
                            Keep scrolling, it’s worth it
                        </span>
                        <div
                            className="relative w-[11.78px] h-[11.78px] lg:w-[16px] lg:h-[16px]"
                        >
                            <Image src="/photos/schools/design/solar_arrow-up-broken (1).svg" alt="" fill className="object-contain" />
                        </div>
                    </div>

                    {/* Mobile / tablet layout */}
                    <div className="lg:hidden relative w-full min-h-[740px]">
                        {/* Paragraph top */}
                        <div className="absolute top-[clamp(50px,13vw,78px)] right-[10px] w-[min(260px,66vw)] text-left">
                            <p
                                className="m-0 text-[#0A0A0A] text-[clamp(13px,3.7vw,15px)] leading-[clamp(20px,4.9vw,24px)]"
                                style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 550 }}
                            >
                                From your first concept to your final portfolio, everything here is built to feel hands-on,
                                honest, and creatively alive.
                            </p>
                        </div>

                        {/* Character image */}
                        <div className="absolute top-[clamp(136px,33vw,182px)] left-[57%] -translate-x-1/2 w-[min(305px,80vw)] h-[min(432px,116vw)]">
                            <Image
                                src="/photos/schools/design/e295061aefa42f0e48724b7d1e97e9c0bccfc93f.webp"
                                alt="Design character"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Heading block */}
                        <div className="absolute top-[clamp(428px,116vw,486px)] left-[16px] right-[16px] w-auto flex flex-col gap-[3.5px]">
                            <div className="relative w-[min(312px,84vw)] h-[min(182px,51vw)] rounded-[7.46px]">
                                <div className="relative w-full h-full">
                                    <div
                                        className="absolute top-0 left-0 text-[#050505] leading-none"
                                        style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500, fontSize: 56 }}
                                    >
                                        Design
                                    </div>

                                    <div
                                        className="absolute top-[46px] left-[0.7px] text-[#050505] leading-none"
                                        style={{ fontFamily: '"IvyPresto Display", serif', fontWeight: 300, fontStyle: "italic", fontSize: 56 }}
                                    >
                                        that
                                    </div>

                                    <div className="absolute top-[96px] left-[0.7px] flex items-center gap-[6px]">
                                        <div className="relative w-[104px] h-[48px] rounded-[7.46px] overflow-hidden">
                                            <Image
                                                src="/photos/schools/design/57d01472fcc68dc28b23f66493f860df1603a284.webp"
                                                alt="Design student"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div
                                            className="text-[#050505] leading-none"
                                            style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500, fontSize: 56 }}
                                        >
                                            Speaks
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA row */}
                            <div className="-mt-[4px] flex items-center gap-[6px] w-[min(258px,86vw)] h-[56px] group">
                                <Link
                                    href="/design-school/courses"
                                    className="flex items-center justify-center w-[190px] h-[56px] rounded-[46px] border-[1px] border-[#8F56FF] px-[30px] py-[15px] bg-transparent transition-colors duration-300 group-hover:bg-[#8F56FF]"
                                    style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 550 }}
                                >
                                    <span className="text-[#000000] text-[18px] leading-none whitespace-nowrap transition-colors duration-300 group-hover:text-white">Join the Club</span>
                                </Link>
                                <Link href="/design-school/courses" className="relative w-[52px] h-[52px] rounded-full bg-[#8F56FF] overflow-hidden shrink-0" aria-label="Join the Club">
                                    <div className="absolute top-[11.5px] left-[11.5px] w-[29px] h-[29px] -translate-x-[40.5px] transition-transform duration-300 group-hover:translate-x-0">
                                        <svg width="29" height="29" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="absolute top-[11.5px] left-[11.5px] w-[29px] h-[29px] transition-transform duration-300 group-hover:translate-x-[40.5px]">
                                        <svg width="29" height="29" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z" fill="white"/>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Video Section */}
            <DesignVideoSection />

            {/* Press logos (Design School specific) */}
            <div className="w-full max-w-[1440px] mx-auto">
                <DesignPressLogos />
            </div>

            {/* Stats section (Design School specific) */}
            <DesignStatsSection />

            {/* Programs heading section (Design School specific) */}
            <DesignProgramsHeadingSection />

            {/* Programs cards section */}
            <DesignProgramsSection />
        </div>
    );
}
