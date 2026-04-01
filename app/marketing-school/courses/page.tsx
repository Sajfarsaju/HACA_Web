import { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { MarketingNavbar } from "@/components/marketing/MarketingNavbar";

export const metadata: Metadata = {
    title: "Courses | Marketing School | HACA",
    description: "Learn practical digital marketing and AI-powered growth skills through hands-on, career-focused programs built for real-world marketing roles.",
};

export default function MarketingCoursesPage() {
    return (
        <div className="w-full bg-white overflow-x-hidden min-h-screen flex flex-col justify-between text-black">
            <MarketingNavbar />

            <div className="flex-grow flex flex-col items-center w-full">
                <main className="w-full max-w-[1440px] md:h-[2462px] mx-auto flex flex-col px-[16px] sm:px-[32px] md:px-[60px] pt-[20px] pb-[20px] sm:pt-[30px] sm:pb-[30px] md:pt-[40px] md:pb-[40px] gap-[40px] items-center">
                    {/* Hero Header Section */}
                    <section className="w-full max-w-[1320px] h-auto lg:min-h-[110px] gap-[14px] md:gap-[20px] lg:gap-[10px] flex flex-col items-center justify-center transition-all">
                        <h1
                            className="text-[#000000] m-0 text-center text-[36px] sm:text-[48px] lg:text-[68px] leading-[95%] lg:leading-[115%] w-full max-w-[245px] sm:max-w-[350px] lg:max-w-[463px] h-auto transition-all"
                            style={{ fontFamily: 'Darker Grotesque, sans-serif', fontWeight: 600 }}
                        >
                            Courses We Offer
                        </h1>

                        {/* Desktop Subheading */}
                        <p
                            className="hidden md:flex m-0 text-[#000000] text-[16px] leading-none w-full max-w-[1081px] h-auto items-center justify-center text-center transition-all"
                            style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}
                        >
                            Learn practical digital marketing and AI-powered growth skills through hands-on, career-focused programs built for real-world marketing roles.
                        </p>

                        {/* Mobile Subheading */}
                        <p
                            className="block md:hidden m-0 text-[#000000] text-center text-[16px] leading-[95%] w-full max-w-[343px] h-auto mx-auto transition-all"
                            style={{ fontFamily: 'Darker Grotesque, sans-serif', fontWeight: 600 }}
                        >
                            Learn practical digital marketing and AI-powered growth skills through hands-on, career-focused programs built for real-world marketing roles.
                        </p>
                    </section>

                    {/* Course Details Card */}
                    <section className="w-full max-w-[313px] sm:max-w-[700px] md:max-w-[1320px] h-auto lg:min-h-[584px] p-[16px] md:pt-[20px] md:pr-[30px] md:pb-[20px] md:pl-[30px] gap-[14px] md:gap-[20px] bg-[#E6EFFF] rounded-[20px] flex flex-col justify-start items-start transition-all">
                        <h2 
                            className="text-[#000000] m-0 text-left text-[32px] sm:text-[38px] md:text-[44px] leading-[85%] w-full max-w-[313px] sm:max-w-[450px] lg:max-w-[558px] h-auto lg:h-[74px] transition-all"
                            style={{ fontFamily: 'Darker Grotesque, sans-serif', fontWeight: 600 }}
                        >
                            Basic to Advanced AI-Integrated Digital Marketing Course
                        </h2>
                        
                        <div className="flex flex-row flex-wrap items-center gap-[6px] md:gap-[10px] w-full mt-[-4px] md:mt-[0px]">
                            <span 
                                className="text-[#000000] m-0 text-left text-[14px] sm:text-[18px] md:text-[20px] leading-none transition-all shrink-0"
                                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}
                            >
                                Offline
                            </span>
                            
                            <span 
                                className="text-[#000000] text-[16px] sm:text-[20px] md:text-[22px] leading-none opacity-80 shrink-0"
                                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}
                            >
                                |
                            </span>
                            
                            <span 
                                className="text-[#000000] m-0 text-left text-[14px] sm:text-[18px] md:text-[20px] leading-none transition-all"
                                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}
                            >
                                5 Months Training + 1 Month Internship
                            </span>
                        </div>
                        
                        {/* Course Description Layout */}
                        <div className="flex w-full md:max-w-[1260px] h-auto md:h-[110px] mt-[12px] md:mt-[24px] mb-[24px] md:mb-[40px] transition-all">
                            <p className="w-full max-w-[313px] md:max-w-[1091px] h-auto md:h-[110px] text-[#000000] text-left text-[16px] leading-[100%] m-0 tracking-[0%]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                                This is our career-focused flagship offline digital marketing program. You’ll start from the basics and move all the way to advanced strategies used by real agencies and brands today.
                                <br className="hidden md:block"/><br className="hidden md:block"/>
                                <span className="block md:hidden pb-[16px]"></span>
                                The course focuses heavily on hands-on learning. You’ll work on live projects, real campaigns, and tools used by professionals. The final one-month internship helps you specialise in a specific skill and gain real work experience before stepping into the industry.
                                <br className="hidden md:block"/><br className="hidden md:block"/>
                                <span className="block md:hidden pb-[16px]"></span>
                                AI is integrated throughout the program, so you learn how to use modern AI tools for content creation, ads, analytics, automation, and strategy building.
                            </p>
                        </div>

                        {/* Learning & Career Roles & Button Layout */}
                        <div className="flex flex-col md:flex-row w-full md:max-w-[1260px] h-auto md:min-h-[271px] gap-[24px] md:gap-[30px] transition-all relative">
                            
                            {/* What You'll Learn */}
                            <div className="flex flex-col w-full max-w-[313px] md:max-w-[369px] gap-[8px] md:gap-[12px] transition-all">
                                <h3 
                                    className="text-[#000000] m-0 text-left text-[22px] md:text-[30px] leading-[100%] tracking-[0%] flex items-center font-bold md:font-semibold" 
                                    style={{ fontFamily: 'Darker Grotesque, sans-serif' }}
                                >
                                    What You’ll Learn:
                                </h3>
                                <div className="w-full transition-all">
                                    <ul className="list-disc pl-[24px] text-[#000000] text-[16px] leading-[130%] md:leading-[100%] flex flex-col gap-[10px] md:gap-[12px] m-0 tracking-[0%] marker:text-[#000000]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                                        <li className="pl-[4px]">Digital marketing fundamentals</li>
                                        <li className="pl-[4px]">SEO from basics to advanced techniques like AEO and GEO</li>
                                        <li className="pl-[4px]">Social media marketing and content strategy</li>
                                        <li className="pl-[4px]">Performance marketing (Google Ads, Meta Ads)</li>
                                        <li className="pl-[4px]">Email marketing and automation</li>
                                        <li className="pl-[4px]">Website optimisation and landing pages</li>
                                        <li className="pl-[4px]">Analytics and reporting</li>
                                        <li className="pl-[4px]">Using AI tools for marketing tasks</li>
                                        <li className="pl-[4px]">Live projects and internship-based learning</li>
                                    </ul>
                                </div>
                            </div>
                            
                            {/* Career Roles */}
                            <div className="flex flex-col w-full max-w-[369px] gap-[8px] md:gap-[12px] transition-all">
                                <h3 
                                    className="text-[#000000] m-0 text-left text-[22px] md:text-[30px] leading-[100%] tracking-[0%] flex items-center font-bold md:font-semibold" 
                                    style={{ fontFamily: 'Darker Grotesque, sans-serif' }}
                                >
                                    Career Roles:
                                </h3>
                                <div className="w-full transition-all">
                                    <ul className="list-disc pl-[24px] text-[#000000] text-[16px] leading-[130%] md:leading-[100%] flex flex-col gap-[10px] md:gap-[12px] m-0 tracking-[0%] marker:text-[#000000]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                                        <li className="pl-[4px]">Digital Marketing Executive</li>
                                        <li className="pl-[4px]">SEO Executive</li>
                                        <li className="pl-[4px]">Social Media Manager</li>
                                        <li className="pl-[4px]">Performance Marketer</li>
                                        <li className="pl-[4px]">Content Strategist</li>
                                        <li className="pl-[4px]">Marketing Analyst</li>
                                        <li className="pl-[4px]">Digital Marketing Intern</li>
                                        <li className="pl-[4px]">AI-assisted Marketing Specialist</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Enquire Now Button Container */}
                            <div className="flex-1 flex justify-start md:justify-end items-end w-full h-auto mt-[20px] md:mt-0 transition-all">
                                <button className="flex items-center w-[189px] h-[60px] justify-between pl-[20px] bg-[#FFFFFF] rounded-[30px] group hover:opacity-90 transition-opacity shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
                                    <span 
                                        className="text-[#000000] text-[18px] leading-[100%] m-0 tracking-[0%]" 
                                        style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}
                                    >
                                        Enquire Now
                                    </span>
                                    <div className="w-[60px] h-[60px] rounded-[30px] bg-[#015AFF] flex items-center justify-center transition-transform group-hover:translate-x-1 shrink-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </section>
                </main>
            </div>

            <Footer />
        </div>
    );
}
