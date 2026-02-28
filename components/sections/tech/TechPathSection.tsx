import Image from "next/image";

const COURSES = [
    {
        title: "Advanced Data Analytics with AI",
        duration: "5 Months + 1 Month Project",
        location: "Offline/Online",
        description: "Learn how to turn raw data into powerful insights using Python, Power BI, and AI-driven analytics. You'll explore how machine learning enhances decision-making and business intelligence.",
        bgImage: "/photos/Tech/Rectangle 2.svg",
        titleWidth: "325px"
    },
    {
        title: "Advanced Python Django with GenAI",
        duration: "5 Months + 1 Month Project",
        location: "Offline",
        description: "Master backend development through real-world Django projects integrated with AI tools. You'll learn to build web applications that automate, analyse, and adapt intelligently.",
        bgImage: "/photos/Tech/Rectangle 2 (1).svg",
        titleWidth: "325px"
    },
    {
        title: "Data Science with Gen AI",
        duration: "5 months + 1 month project",
        location: "Offline/Online",
        description: "A hands-on data science program covering Python, statistics, machine learning, and Generative AI. Work with real datasets and build practical projects aligned with industry roles.",
        bgImage: "/photos/Tech/Rectangle 3.svg",
        titleWidth: "255px"
    },
    {
        title: "n8n for AI agents & Automation",
        duration: "6 Weeks",
        location: "Online",
        description: "Learn how to build no-code and low-code automations that save time and money. You'll connect tools like Slack, Google Sheets, and APIs using workflows.",
        bgImage: "/photos/Tech/Rectangle 3 (1).svg",
        titleWidth: "325px"
    },
    {
        title: "Applied AI for Beginners",
        duration: "4 Weeks",
        location: "Online",
        description: "A fast, practical introduction to how AI actually works with practical insights on technology. You'll explore tools like ChatGPT, n8n, and automation workflows to solve real tasks.",
        bgImage: "/photos/Tech/Rectangle 3 (2).svg",
        titleWidth: "325px"
    },
    {
        title: "Dashboard Mastery in Power BI + Excel Course",
        duration: "6 Weeks",
        location: "Online",
        description: "A fast, practical introduction to how AI actually works with practical insights on technology. You'll explore tools like ChatGPT, n8n, and automation workflows to solve real tasks.",
        bgImage: "/photos/Tech/Rectangle 3 (3).svg",
        titleWidth: "341px"
    }
];

export function TechPathSection() {
    return (
        <section className="w-full relative overflow-visible flex flex-col items-center" id="tech-paths">

            {/* Local style for the mobile gradient border mask that is too complex for inline tailwind */}
            <style>{`
                @media (max-width: 767px) {
                    .tech-path-card-mobile-mask::before {
                        content: "";
                        position: absolute;
                        inset: 0;
                        padding: 1px;
                        border-radius: 22px;
                        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                            linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%);
                        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                        -webkit-mask-composite: xor;
                        mask-composite: exclude;
                        pointer-events: none;
                        z-index: 1;
                    }
                }
            `}</style>

            {/* Background elements */}
            <div className="absolute top-0 right-0 left-0 bottom-0 pointer-events-none z-0 overflow-hidden [-mt-[100px]] min-h-[2400px]">
                <div className="absolute top-0 left-[74px] w-[1312px] h-[2249px] opacity-100 max-md:left-0 max-md:w-full max-md:max-w-[100vw]">
                    <Image src="/photos/Tech/Gradient2.1.svg" alt="" fill className="object-cover" />
                </div>
                <div className="absolute top-0 left-[74px] w-[1300px] h-[2249px] opacity-[0.87] max-md:left-0 max-md:w-full max-md:max-w-[100vw]">
                    <Image src="/photos/Tech/Ellipse 156.svg" alt="" fill className="object-cover" />
                </div>
                <div className="absolute top-[300px] left-[264px] w-[715px] h-[935px] rotate-[-164.21deg] opacity-100 max-md:hidden">
                    <Image src="/photos/Tech/Ellipse 4.svg" alt="" fill className="object-cover" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto py-[40px] px-[60px] flex flex-col gap-[60px] max-md:w-full max-md:max-w-full max-md:mx-auto max-md:py-[40px] max-md:px-[20px] max-md:gap-[30px] max-md:items-center">

                {/* Header */}
                <div className="flex flex-col gap-[20px] items-center text-center w-full max-w-[1349px] mx-auto pt-[60px] max-md:max-w-[341px]">
                    <h2 className="font-outfit font-normal text-[60px] leading-[1.03] tracking-[-0.02em] text-white max-w-[722px] m-0 max-md:text-[40px] max-md:leading-[1.1]">
                        Choose Your Path.<br />We&apos;ll Guide You Through It.
                    </h2>
                    <p className="font-outfit font-normal text-[24px] leading-[1.4] tracking-[-0.2px] text-[#A7A7A7] max-w-[1203px] m-0 max-md:text-[16px] max-md:leading-[1.3]">
                        Each course is packed with real-world skills and AI integration to help you build smarter, faster, and better.
                    </p>
                </div>

                {/* Course Grid */}
                <div className="w-full max-w-[1320px] mx-auto max-md:max-w-[341px]">
                    <div className="grid grid-cols-2 gap-[60px] max-md:grid-cols-1 max-md:gap-[20px]">
                        {COURSES.map((course, idx) => (
                            <div key={idx} className="relative w-full min-h-[394px] rounded-[22px] p-[24px] flex flex-col justify-between cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:brightness-[1.1] group max-md:max-w-[341px] max-md:h-[313px] max-md:min-h-[313px] max-md:p-[20px] max-md:border-transparent max-md:bg-transparent max-md:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] max-md:backdrop-blur-[12px] max-md:mx-auto tech-path-card-mobile-mask">
                                {/* BG image */}
                                <Image
                                    src={course.bgImage}
                                    alt=""
                                    fill
                                    className="object-cover absolute inset-0 z-0 pointer-events-none opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                                />

                                <div className="relative z-10 flex flex-col h-full justify-between gap-[40px] max-md:gap-0 max-md:z-[2]">
                                    {/* Top row: title + duration */}
                                    <div className="flex justify-between items-start gap-[16px] max-md:w-full max-md:max-w-[301px] max-md:h-[72px] max-md:min-h-[72px] max-md:gap-0 max-md:opacity-100">
                                        <h3
                                            className="font-outfit font-medium text-[32px] leading-[1.2] tracking-[-0.2px] text-white m-0 max-md:text-[20px] max-md:w-[150px] max-md:!max-w-[150px]"
                                            style={{ maxWidth: course.titleWidth }}
                                        >
                                            {course.title}
                                        </h3>
                                        <div className="flex flex-col items-end text-right min-w-[100px] shrink-0 max-md:w-[90px] max-md:min-w-[90px] max-md:min-h-[72px]">
                                            <span className="font-outfit font-normal text-[14px] leading-none text-[#E8FFEE] max-md:tracking-normal">Duration</span>
                                            <span className="font-outfit font-normal text-[20px] leading-none text-[#E8FFEE] mt-[4px] max-md:text-[14px] max-md:tracking-normal">{course.duration}</span>
                                            <span className="font-outfit font-normal text-[14px] leading-none text-[#E8FFEE] mt-[4px] max-md:tracking-normal">{course.location}</span>
                                        </div>
                                    </div>

                                    {/* Bottom: description + button */}
                                    <div className="flex flex-col gap-[30px] mt-auto max-md:w-full max-md:max-w-[301px] max-md:h-[161px] max-md:justify-between max-md:gap-0 max-md:mt-0 max-md:opacity-100">
                                        <p className="font-outfit font-light text-[16px] leading-[1.3] text-white max-w-[85%] m-0 max-md:text-[14px] max-md:leading-none max-md:tracking-normal max-md:max-w-full">{course.description}</p>
                                        <div className="flex justify-start max-md:w-full max-md:max-w-[301px] max-md:mt-0">
                                            <button className="bg-transparent border-none p-0 cursor-pointer flex items-center transition-transform duration-200 hover:scale-105 max-md:w-[119px] max-md:h-[40px] max-md:rounded-[8px] max-md:overflow-hidden max-md:gap-[53px] max-md:opacity-100 max-md:justify-center">
                                                <Image
                                                    src="/photos/Tech/Link - Regular.svg"
                                                    width={123}
                                                    height={44}
                                                    alt="Know More"
                                                    className="object-contain"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Promo Banner */}
                <div className="w-full max-w-[1320px] mx-auto px-[24px] flex flex-col items-center gap-[20px] text-center max-md:max-w-[375px] max-md:min-h-[311px] max-md:py-[60px] max-md:px-[20px] max-md:rounded-[22px]">
                    <h2 className="font-outfit font-normal text-[60px] leading-[1.03] tracking-[-0.02em] text-white max-w-[910px] m-0 max-md:w-[335px] max-md:min-h-[66px] max-md:text-[30px] max-md:leading-[1.1] max-md:flex max-md:items-center max-md:justify-center">
                        Get an Applied AI Course Worth <br className="block max-md:hidden" /> ₹10,000 for Free
                    </h2>
                    <p className="font-outfit font-normal text-[24px] leading-[1.4] tracking-[-0.2px] text-[#A7A7A7] max-w-[1203px] m-0 max-md:w-[335px] max-md:min-h-[45px] max-md:text-[14px] max-md:leading-[1.1] max-md:flex max-md:items-center max-md:justify-center">
                        Enrol in any flagship program like Data Analytics, Python Django, or Data Science, and get Applied AI for Beginners (₹10,000 value) included at no extra cost.
                    </p>
                    <div className="mt-[10px] max-md:mt-0">
                        <button className="bg-transparent border-none p-0 cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-105 max-md:w-[186px] max-md:h-[44px] max-md:rounded-[8px] max-md:opacity-100">
                            <Image
                                src="/photos/Tech/Button Container.svg"
                                width={186}
                                height={44}
                                alt="Claim Free Course"
                                className="object-contain max-md:max-w-full max-md:max-h-full"
                            />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
