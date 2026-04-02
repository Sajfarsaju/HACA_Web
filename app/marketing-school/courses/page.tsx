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
                <main className="w-full max-w-[1440px] h-auto mx-auto flex flex-col px-[16px] sm:px-[32px] md:px-[60px] pt-[20px] pb-[20px] sm:pt-[30px] sm:pb-[30px] md:pt-[40px] md:pb-[40px] gap-[40px] items-center">
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

                    {/* Basic to Advanced Course Card */}
                    <section className="w-full max-w-[345px] md:max-w-[1320px] h-auto lg:min-h-[584px] p-[20px_16px] md:p-[20px_30px] gap-[20px] bg-[#E6EFFF] rounded-[20px] flex flex-col justify-start items-start transition-all">
                        <div className="flex flex-col gap-[14px] w-full">
                            <h2 
                                className="text-[#000000] m-0 text-left text-[24px] md:text-[44px] leading-[85%] w-full max-w-[313px] md:max-w-[631px] min-h-[52px] md:min-h-[81px] transition-all"
                                style={{ fontFamily: 'Darker Grotesque, sans-serif', fontWeight: 700 }}
                            >
                                Basic to Advanced AI-Integrated Digital Marketing Course
                            </h2>
                            
                            <div className="flex flex-row items-center gap-[10px] w-full max-w-[313px] md:max-w-none h-[19px] md:h-[27px]">
                                <span 
                                    className="text-[#000000] m-0 text-left text-[14px] md:text-[20px] leading-[100%] transition-all shrink-0"
                                    style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}
                                >
                                    Offline
                                </span>
                                
                                <div className="h-[18px] md:h-[27px] w-0 border-l-[2px] border-[#000000] opacity-100 shrink-0"></div>
                                
                                <span 
                                    className="text-[#000000] m-0 text-left text-[14px] md:text-[20px] leading-[100%] transition-all"
                                    style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}
                                >
                                    5 Months Training + 1 Month Internship
                                </span>
                            </div>
                        </div>
                        
                        {/* Course Description Layout */}
                        <div className="flex w-full md:max-w-[1260px] h-auto mt-[4px] md:mt-[8px] mb-[12px] md:mb-[16px] transition-all">
                            <p className="w-full max-w-[313px] md:max-w-none md:min-h-[110px] text-[#000000] text-left text-[16px] leading-[140%] m-0 tracking-[0%]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                                This is our career-focused flagship offline digital marketing program. You’ll start from the basics and move all the way to advanced strategies used by 
                                <br />
                                real agencies and brands today.
                                <br />
                                The course focuses heavily on hands-on learning. You’ll work on live projects, real campaigns, and tools used by professionals. The final one-month
                                <br />
                                internship helps you specialise in a specific skill and gain real work experience before stepping into the industry.
                                <br />
                                AI is integrated throughout the program, so you learn how to use modern AI tools for content creation, ads, analytics, automation, and strategy building.
                            </p>
                        </div>

                        {/* Learning & Career Roles & Button Layout */}
                        <div className="flex flex-col md:flex-row w-full md:max-w-[1260px] h-auto md:min-h-[271px] gap-[24px] md:gap-[30px] transition-all relative">
                            
                            {/* What You'll Learn */}
                            <div className="flex flex-col w-full max-w-[313px] md:max-w-[369px] gap-[10px] transition-all">
                                <h3 
                                    className="text-[#000000] m-0 text-left text-[22px] md:text-[30px] leading-[100%] tracking-[0%] flex items-center font-bold md:min-h-[41px]" 
                                    style={{ fontFamily: 'Darker Grotesque, sans-serif' }}
                                >
                                    What You’ll Learn:
                                </h3>
                                <div className="w-full md:min-h-[176px] transition-all">
                                    <ul className="list-disc pl-[24px] text-[#000000] text-[16px] leading-[100%] flex flex-col gap-[10px] m-0 tracking-[0%] marker:text-[#000000]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
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
                            <div className="flex flex-col w-full max-w-[313px] md:max-w-[369px] gap-[10px] transition-all">
                                <h3 
                                    className="text-[#000000] m-0 text-left text-[22px] md:text-[30px] leading-[100%] tracking-[0%] flex items-center font-bold md:min-h-[41px]" 
                                    style={{ fontFamily: 'Darker Grotesque, sans-serif' }}
                                >
                                    Career Roles:
                                </h3>
                                <div className="w-full md:min-h-[154px] transition-all">
                                    <ul className="list-disc pl-[24px] text-[#000000] text-[16px] leading-[100%] flex flex-col gap-[10px] m-0 tracking-[0%] marker:text-[#000000]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
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

                    {/* Performance Marketing Mastery Course Card */}
                    <section className="w-full max-w-[345px] md:max-w-[1320px] h-auto lg:min-h-[542px] p-[20px_16px] md:p-[20px_30px] gap-[20px] bg-[#E6EFFF] rounded-[20px] flex flex-col justify-start items-start transition-all">
                        <div className="flex flex-col gap-[14px] w-full">
                            <h2 
                                className="text-[#000000] m-0 text-left text-[24px] md:text-[44px] leading-[85%] w-full max-w-[313px] md:max-w-[631px] min-h-[52px] md:min-h-[81px] transition-all"
                                style={{ fontFamily: 'Darker Grotesque, sans-serif', fontWeight: 700 }}
                            >
                                Basic to Advanced AI-Integrated Digital Marketing Course
                            </h2>
                            
                            <div className="flex flex-row items-center gap-[10px] w-full max-w-[313px] md:max-w-none h-[19px] md:h-[27px]">
                                <span 
                                    className="text-[#000000] m-0 text-left text-[14px] md:text-[20px] leading-[100%] transition-all shrink-0"
                                    style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}
                                >
                                    Online (Live Classes)
                                </span>
                                
                                <div className="h-[18px] md:h-[27px] w-0 border-l-[2px] border-[#000000] opacity-100 shrink-0"></div>
                                
                                <span 
                                    className="text-[#000000] m-0 text-left text-[14px] md:text-[20px] leading-[100%] transition-all"
                                    style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}
                                >
                                    5 Months
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex w-full md:max-w-[1260px] h-auto mt-[4px] md:mt-[8px] mb-[12px] md:mb-[16px] transition-all">
                            <p className="w-full max-w-[313px] md:max-w-none md:min-h-[110px] text-[#000000] text-left text-[16px] leading-[140%] m-0 tracking-[0%]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                                This program covers the same advanced curriculum as the offline course, but is designed for learners who prefer studying from home or have work and 
                                <br />
                                daytime commitments.
                                <br />
                                You’ll attend live interactive classes, work on practical assignments, and complete real projects using the latest marketing and AI tools. The focus remains
                                <br />
                                strongly on execution, not theory.
                                <br />
                                This is ideal for working professionals, freelancers, housewives, students, and business owners who want flexibility without compromising on depth or quality.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row w-full md:max-w-[1260px] h-auto md:min-h-[271px] gap-[24px] md:gap-[30px] transition-all relative">
                            
                            <div className="flex flex-col w-full max-w-[313px] md:max-w-[369px] gap-[10px] transition-all">
                                <h3 
                                    className="text-[#000000] m-0 text-left text-[22px] md:text-[30px] leading-[100%] tracking-[0%] flex items-center font-bold md:min-h-[41px]" 
                                    style={{ fontFamily: 'Darker Grotesque, sans-serif' }}
                                >
                                    What You’ll Learn:
                                </h3>
                                <div className="w-full md:min-h-[176px] transition-all">
                                    <ul className="list-disc pl-[24px] text-[#000000] text-[16px] leading-[100%] flex flex-col gap-[10px] m-0 tracking-[0%] marker:text-[#000000]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                                        <li className="pl-[4px]">Complete digital marketing fundamentals</li>
                                        <li className="pl-[4px]">SEO (basics to advanced techniques like AEO and GEO)</li>
                                        <li className="pl-[4px]">Social media and content marketing</li>
                                        <li className="pl-[4px]">Paid ads and campaign optimisation</li>
                                        <li className="pl-[4px]">Marketing analytics and reporting</li>
                                        <li className="pl-[4px]">AI tools for content, ads, and automation</li>
                                        <li className="pl-[4px]">Project-based learning with real use cases</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="flex flex-col w-full max-w-[369px] gap-[10px] transition-all">
                                <h3 
                                    className="text-[#000000] m-0 text-left text-[22px] md:text-[30px] leading-[100%] tracking-[0%] flex items-center font-bold md:min-h-[41px]" 
                                    style={{ fontFamily: 'Darker Grotesque, sans-serif' }}
                                >
                                    Career Roles:
                                </h3>
                                <div className="w-full md:min-h-[154px] transition-all">
                                    <ul className="list-disc pl-[24px] text-[#000000] text-[16px] leading-[100%] flex flex-col gap-[10px] m-0 tracking-[0%] marker:text-[#000000]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                                        <li className="pl-[4px]">Digital Marketer</li>
                                        <li className="pl-[4px]">SEO Specialist</li>
                                        <li className="pl-[4px]">Social Media Strategist</li>
                                        <li className="pl-[4px]">Paid Ads Specialist</li>
                                        <li className="pl-[4px]">Freelance Marketer</li>
                                        <li className="pl-[4px]">Marketing Consultant</li>
                                        <li className="pl-[4px]">AI-enabled Marketing Professional</li>
                                    </ul>
                                </div>
                            </div>

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
                    
                    {/* Performance Marketing Mastery Course Card */}
                    <section className="w-full max-w-[345px] md:max-w-[1320px] h-auto lg:min-h-[498px] p-[20px_16px] md:p-[20px_30px] gap-[20px] bg-[#E6EFFF] rounded-[20px] flex flex-col justify-start items-start transition-all">
                        <div className="flex flex-col gap-[14px] w-full">
                            <h2 
                                className="text-[#000000] m-0 text-left text-[24px] md:text-[44px] leading-[85%] w-full max-w-[313px] md:max-w-[631px] min-h-[52px] md:min-h-[81px] transition-all"
                                style={{ fontFamily: 'Darker Grotesque, sans-serif', fontWeight: 700 }}
                            >
                                Performance Marketing
                                <br />
                                Mastery Course
                            </h2>
                            
                            <div className="flex flex-row items-center gap-[10px] w-full max-w-[313px] md:max-w-none h-[19px] md:h-[27px]">
                                <span 
                                    className="text-[#000000] m-0 text-left text-[14px] md:text-[20px] leading-[100%] transition-all shrink-0"
                                    style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}
                                >
                                    Online
                                </span>
                                
                                <div className="h-[18px] md:h-[27px] w-0 border-l-[2px] border-[#000000] opacity-100 shrink-0"></div>
                                
                                <span 
                                    className="text-[#000000] m-0 text-left text-[14px] md:text-[20px] leading-[100%] transition-all"
                                    style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}
                                >
                                    2 Months
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex w-full md:max-w-[1260px] h-auto mt-[4px] md:mt-[8px] mb-[12px] md:mb-[16px] transition-all">
                            <p className="w-full max-w-[313px] md:max-w-none md:min-h-[110px] text-[#000000] text-left text-[16px] leading-[140%] m-0 tracking-[0%]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                                This course is for people who already work with paid ads and want to get better at it. If you know the basics but want to improve results, reduce wasted spend, and understand what’s really working, this course helps.
                                <br />
                                You’ll learn how to plan ads properly, track results, and improve performance using data and AI tools. The focus is on doing ads the right way, not guessing.
                                <br />
                                This is perfect for working digital marketers, paid ads executives, and freelancers running ad campaigns
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row w-full md:max-w-[1260px] h-auto md:min-h-[271px] gap-[24px] md:gap-[30px] transition-all relative">
                            
                            <div className="flex flex-col w-full max-w-[313px] md:max-w-[369px] gap-[10px] transition-all">
                                <h3 
                                    className="text-[#000000] m-0 text-left text-[22px] md:text-[30px] leading-[100%] tracking-[0%] flex items-center font-bold md:min-h-[41px]" 
                                    style={{ fontFamily: 'Darker Grotesque, sans-serif' }}
                                >
                                    What You’ll Learn:
                                </h3>
                                <div className="w-full md:min-h-[176px] transition-all">
                                    <ul className="list-disc pl-[24px] text-[#000000] text-[16px] leading-[100%] flex flex-col gap-[10px] m-0 tracking-[0%] marker:text-[#000000]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                                        <li className="pl-[4px]">Basics of paid ads (quick recap)</li>
                                        <li className="pl-[4px]">Running Google Ads and Meta Ads</li>
                                        <li className="pl-[4px]">Choosing the right audience and funnel</li>
                                        <li className="pl-[4px]">Writing simple ad copy that converts</li>
                                        <li className="pl-[4px]">Managing budgets and tracking ROI</li>
                                        <li className="pl-[4px]">Understanding reports and improving results</li>
                                        <li className="pl-[4px]">Using AI tools to optimise ads</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="flex flex-col w-full max-w-[369px] gap-[10px] transition-all">
                                <h3 
                                    className="text-[#000000] m-0 text-left text-[22px] md:text-[30px] leading-[100%] tracking-[0%] flex items-center font-bold md:min-h-[41px]" 
                                    style={{ fontFamily: 'Darker Grotesque, sans-serif' }}
                                >
                                    Career Roles:
                                </h3>
                                <div className="w-full md:min-h-[154px] transition-all">
                                    <ul className="list-disc pl-[24px] text-[#000000] text-[16px] leading-[100%] flex flex-col gap-[10px] m-0 tracking-[0%] marker:text-[#000000]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                                        <li className="pl-[4px]">Performance Marketing Expert</li>
                                        <li className="pl-[4px]">Paid Ads Specialist</li>
                                        <li className="pl-[4px]">Media Buyer</li>
                                        <li className="pl-[4px]">Growth Marketer</li>
                                    </ul>
                                </div>
                            </div>

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

                    {/* Content Creation & Social Media Mastery Course Card */}
                    <section className="w-full max-w-[345px] md:max-w-[1320px] h-auto lg:min-h-[518px] p-[20px_16px] md:p-[20px_30px] gap-[20px] bg-[#E6EFFF] rounded-[20px] flex flex-col justify-start items-start transition-all">
                        <div className="flex flex-col gap-[14px] w-full">
                            <h2 
                                className="text-[#000000] m-0 text-left text-[24px] md:text-[44px] leading-[85%] w-full max-w-[313px] md:max-w-[631px] min-h-[52px] md:min-h-[81px] transition-all"
                                style={{ fontFamily: 'Darker Grotesque, sans-serif', fontWeight: 700 }}
                            >
                                Content Creation & Social
                                <br />
                                Media Mastery Course
                            </h2>
                            
                            <div className="flex flex-row items-center gap-[10px] w-full max-w-[313px] md:max-w-none h-[19px] md:h-[27px]">
                                <span 
                                    className="text-[#000000] m-0 text-left text-[14px] md:text-[20px] leading-[100%] transition-all shrink-0"
                                    style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700 }}
                                >
                                    Coming Soon
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex w-full md:max-w-[1260px] h-auto mt-[4px] md:mt-[8px] mb-[12px] md:mb-[16px] transition-all">
                            <p className="w-full max-w-[313px] md:max-w-none md:min-h-[110px] text-[#000000] text-left text-[16px] leading-[140%] m-0 tracking-[0%]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                                This course is best for social media managers, content creators, brand and marketing executives, and people who already handle social media and want better growth and engagement. If you’re posting regularly but not seeing results, this course shows you what to fix.
                                <br />
                                You’ll focus on building, growing, and monetising social media audiences across platforms like Instagram, LinkedIn, YouTube, and Facebook.
                                <br />
                                Also, you’ll learn how content works, how algorithms think, and how to create strategies that drive engagement and business results. The course combines content planning, platform strategy, and practical execution. AI tools are used to save time and improve ideas.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row w-full md:max-w-[1260px] h-auto md:min-h-[271px] gap-[24px] md:gap-[30px] transition-all relative">
                            
                            <div className="flex flex-col w-full max-w-[313px] md:max-w-[369px] gap-[10px] transition-all">
                                <h3 
                                    className="text-[#000000] m-0 text-left text-[22px] md:text-[30px] leading-[100%] tracking-[0%] flex items-center font-bold md:min-h-[41px]" 
                                    style={{ fontFamily: 'Darker Grotesque, sans-serif' }}
                                >
                                    What You’ll Learn:
                                </h3>
                                <div className="w-full md:min-h-[176px] transition-all">
                                    <ul className="list-disc pl-[24px] text-[#000000] text-[16px] leading-[100%] flex flex-col gap-[10px] m-0 tracking-[0%] marker:text-[#000000]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                                        <li className="pl-[4px]">Social media basics</li>
                                        <li className="pl-[4px]">Platform-wise strategies</li>
                                        <li className="pl-[4px]">Planning content in advance</li>
                                        <li className="pl-[4px]">Building brand presence</li>
                                        <li className="pl-[4px]">Growing and engaging audiences</li>
                                        <li className="pl-[4px]">Tracking basic performance</li>
                                        <li className="pl-[4px]">Using AI for content ideas and better results</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="flex flex-col w-full max-w-[369px] gap-[10px] transition-all">
                                <h3 
                                    className="text-[#000000] m-0 text-left text-[22px] md:text-[30px] leading-[100%] tracking-[0%] flex items-center font-bold md:min-h-[41px]" 
                                    style={{ fontFamily: 'Darker Grotesque, sans-serif' }}
                                >
                                    Career Roles:
                                </h3>
                                <div className="w-full md:min-h-[154px] transition-all">
                                    <ul className="list-disc pl-[24px] text-[#000000] text-[16px] leading-[100%] flex flex-col gap-[10px] m-0 tracking-[0%] marker:text-[#000000]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                                        <li className="pl-[4px]">Social Media Manager</li>
                                        <li className="pl-[4px]">Content Strategist</li>
                                        <li className="pl-[4px]">Community Manager</li>
                                        <li className="pl-[4px]">Brand Executive</li>
                                    </ul>
                                </div>
                            </div>

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
