import Image from "next/image";
import Link from "next/link";

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
        <section className="w-full relative overflow-visible flex flex-col items-center bg-transparent" id="tech-paths">

            {/* Local style for the mobile gradient border mask and tablet purple gradient extension */}
            <style>{`
                /* Tablet: purple gradient from title to bottom text same as desktop */
                @media (max-width: 1023px) {
                    .tech-path-gradient-mask {
                        mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 3%, black 6%, black 88%, rgba(0,0,0,0.4) 95%, transparent 100%),
                            radial-gradient(ellipse 75% 90% at 50% 50%, black 0%, black 12%, rgba(0,0,0,0.9) 28%, rgba(0,0,0,0.6) 48%, rgba(0,0,0,0.25) 70%, transparent 100%) !important;
                        -webkit-mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 3%, black 6%, black 88%, rgba(0,0,0,0.4) 95%, transparent 100%),
                            radial-gradient(ellipse 75% 90% at 50% 50%, black 0%, black 12%, rgba(0,0,0,0.9) 28%, rgba(0,0,0,0.6) 48%, rgba(0,0,0,0.25) 70%, transparent 100%) !important;
                    }
                }
                /* Mobile only: full-height vertical fade — gradient spans from section title to bottom text */
                @media (max-width: 767px) {
                    .tech-path-gradient-mask {
                        mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 3%, black 6%, black 94%, rgba(0,0,0,0.5) 97%, transparent 100%) !important;
                        -webkit-mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 3%, black 6%, black 94%, rgba(0,0,0,0.5) 97%, transparent 100%) !important;
                        mask-composite: unset !important;
                        -webkit-mask-composite: unset !important;
                    }
                }
                /* Single gradient border for ≤1024px — parent wrapper only */
                @media (max-width: 1024px) {
                    .tech-path-card-border::before {
                        content: "";
                        position: absolute;
                        inset: 0;
                        border-radius: 22px;
                        padding: 1px;
                        background: linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%);
                        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                        -webkit-mask-composite: xor;
                        mask-composite: exclude;
                        pointer-events: none;
                        z-index: 2;
                    }
                    /* Inner container: flush to card edge, overflow:hidden clips SVG */
                    .tech-path-card-border .tech-path-card-inner {
                        inset: 0 !important;
                        border-radius: 22px !important;
                        overflow: hidden !important;
                        clip-path: none !important;
                        -webkit-clip-path: none !important;
                    }
                    /* Scale the bg image so its baked-in SVG stroke bleeds OUTSIDE overflow:hidden — only CSS border visible */
                    .tech-path-card-border .tech-path-card-inner img {
                        transform: scale(1.06) !important;
                        transform-origin: center center !important;
                    }
                }

                /* Desktop 1440px+ and 4K: slightly shorter band with softer bottom fade (mirror of tablet feel) */
                @media (min-width: 1024px) {
                    .tech-path-card-border::before {
                        content: "";
                        position: absolute;
                        inset: 0;
                        border-radius: 22px;
                        padding: 1px;
                        background:
                            linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                            linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%);
                        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                        -webkit-mask-composite: xor;
                        mask-composite: exclude;
                        pointer-events: none;
                        z-index: 2;
                    }
                    /* Hide the baked-in SVG stroke so only one border is visible */
                    .tech-path-card-border .tech-path-card-inner img {
                        transform: scale(1.06) !important;
                        transform-origin: center center !important;
                    }
                    .tech-path-gradient-mask {
                        mask-image:
                            linear-gradient(
                                to bottom,
                                transparent 0%,
                                rgba(0,0,0,0.3) 4%,
                                black 10%,
                                black 85%,
                                rgba(0,0,0,0.6) 92%,
                                rgba(0,0,0,0.15) 96%,
                                transparent 100%
                            ),
                            radial-gradient(
                                ellipse 75% 86% at 50% 50%,
                                black 0%,
                                black 12%,
                                rgba(0,0,0,0.9) 28%,
                                rgba(0,0,0,0.6) 48%,
                                rgba(0,0,0,0.25) 70%,
                                transparent 100%
                            );
                        -webkit-mask-image:
                            linear-gradient(
                                to bottom,
                                transparent 0%,
                                rgba(0,0,0,0.3) 4%,
                                black 10%,
                                black 85%,
                                rgba(0,0,0,0.6) 92%,
                                rgba(0,0,0,0.15) 96%,
                                transparent 100%
                            ),
                            radial-gradient(
                                ellipse 75% 86% at 50% 50%,
                                black 0%,
                                black 12%,
                                rgba(0,0,0,0.9) 28%,
                                rgba(0,0,0,0.6) 48%,
                                rgba(0,0,0,0.25) 70%,
                                transparent 100%
                            );
                    }
                }
            `}</style>

            {/* Background gradients — purple spans from section title to bottom promo text */}
            <div
                className="tech-path-gradient-mask absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-0 min-h-[calc(100%+400px)] max-lg:min-h-[calc(100%+400px)] max-md:min-h-[calc(100%+220px)]"
                style={{
                    maskImage: `
                        linear-gradient(
                            to bottom,
                            transparent 0%,
                            rgba(0,0,0,0.4) 3%,
                            black 6%,
                            black 85%,
                            rgba(0,0,0,0.6) 92%,
                            rgba(0,0,0,0.15) 96%,
                            transparent 100%
                        ),
                        radial-gradient(
                            ellipse 75% 90% at 50% 50%,
                            black 0%,
                            black 12%,
                            rgba(0,0,0,0.9) 28%,
                            rgba(0,0,0,0.6) 48%,
                            rgba(0,0,0,0.25) 70%,
                            transparent 100%
                        )
                    `,
                    WebkitMaskImage: `
                        linear-gradient(
                            to bottom,
                            transparent 0%,
                            rgba(0,0,0,0.4) 3%,
                            black 6%,
                            black 85%,
                            rgba(0,0,0,0.6) 92%,
                            rgba(0,0,0,0.15) 96%,
                            transparent 100%
                        ),
                        radial-gradient(
                            ellipse 75% 90% at 50% 50%,
                            black 0%,
                            black 12%,
                            rgba(0,0,0,0.9) 28%,
                            rgba(0,0,0,0.6) 48%,
                            rgba(0,0,0,0.25) 70%,
                            transparent 100%
                        )
                    `,
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1312px] max-w-[calc(100vw+200px)] min-w-full h-full min-h-[2500px] opacity-100">
                    <Image src="/photos/Tech/Gradient2.1.svg" alt="" fill className="object-cover object-center" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1300px] max-w-[calc(100vw+200px)] min-w-full h-full min-h-[2500px] opacity-[0.87]">
                    <Image src="/photos/Tech/Ellipse 156.svg" alt="" fill className="object-cover object-center" />
                </div>
                <div className="absolute top-[850px] left-1/2 -translate-x-1/2 w-[715px] max-w-[90vw] h-[935px] rotate-[-164.21deg] opacity-100 max-md:hidden">
                    <Image src="/photos/Tech/Ellipse 4.svg" alt="" fill className="object-cover object-center" />
                </div>
                {/* Mobile-only: orange gradient at center of card 1 */}
                <div className="hidden max-md:block absolute top-[430px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[400px] rotate-[-164.21deg] opacity-90 pointer-events-none">
                    <Image src="/photos/Tech/Ellipse 4.svg" alt="" fill className="object-contain object-center" />
                </div>
                {/* Mobile-only: orange gradient at center of card 5 */}
                <div className="hidden max-md:block absolute top-[1704px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[400px] rotate-[-164.21deg] opacity-90 pointer-events-none">
                    <Image src="/photos/Tech/Ellipse 4.svg" alt="" fill className="object-contain object-center" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto py-[40px] px-[60px] flex flex-col gap-[60px] max-lg:px-[40px] max-md:py-[40px] max-md:px-[20px] max-md:gap-[30px] max-md:items-center max-sm:px-[16px]">

                {/* Header */}
                <div className="flex flex-col gap-[20px] items-center text-center w-full max-w-[1349px] mx-auto pt-[60px] max-md:pt-[40px] max-md:max-w-full">
                    <h2 className="font-outfit font-normal text-[60px] leading-[1.03] tracking-[-0.02em] text-white max-w-[722px] m-0 max-md:text-[40px] max-md:leading-[1.1]">
                        Choose Your Path.<br />We&apos;ll Guide You Through It.
                    </h2>
                    <p className="font-outfit font-normal text-[24px] leading-[1.4] tracking-[-0.2px] text-[#A7A7A7] max-w-[1203px] m-0 max-md:text-[16px] max-md:leading-[1.3]">
                        Each course is packed with real-world skills and AI integration to help you build smarter, faster, and better.
                    </p>
                </div>

                {/* Course Grid */}
                <div className="w-full max-w-[1320px] mx-auto">
                    <div className="grid grid-cols-2 gap-[60px] max-lg:gap-[40px] max-md:grid-cols-1 max-md:gap-[24px] max-md:max-w-[500px] max-md:mx-auto max-sm:max-w-full">
                        {COURSES.map((course, idx) => (
                            <div key={idx} className="tech-path-card-border relative w-full min-h-[394px] rounded-[22px] flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:brightness-[1.1] group max-lg:min-h-[360px] max-md:min-h-[313px] max-md:border-transparent max-md:bg-transparent max-md:backdrop-blur-[12px]">
                                {/* Clip layer: bg sits inside border; on ≤1024px clip-path insets so SVG stroke never touches edge */}
                                <div className="tech-path-card-inner absolute inset-0 overflow-hidden rounded-[22px] z-0">
                                    <Image
                                        src={course.bgImage}
                                        alt=""
                                        fill
                                        className="object-cover pointer-events-none opacity-80 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                                    />
                                </div>

                                <div className="relative z-10 flex flex-col flex-1 justify-between gap-[40px] p-[24px] max-md:p-[20px] max-md:gap-[16px] max-md:z-[2]">
                                    {/* Top row: title + duration — wraps on tablet so duration has room */}
                                    <div className="flex justify-between items-start gap-[12px] max-lg:flex-wrap max-lg:gap-3 max-md:gap-3">
                                        <h3
                                            className="font-outfit font-medium text-[32px] leading-[1.2] tracking-[-0.2px] text-white m-0 max-lg:text-[26px] max-lg:min-w-0 max-lg:flex-1 max-lg:max-w-[calc(100%-120px)] max-md:text-[20px] max-md:flex-1 max-md:min-w-0 max-md:max-w-full"
                                            style={{ maxWidth: "min(325px, 100%)" }}
                                        >
                                            {course.title}
                                        </h3>
                                        <div className="flex flex-col items-end text-right shrink-0 min-w-0 w-full max-w-[50%] max-lg:w-full max-lg:max-w-full max-md:max-w-full">
                                            <span className="font-outfit font-normal text-[14px] leading-tight text-[#E8FFEE] max-lg:text-[13px] max-md:text-[12px]">Duration</span>
                                            <span className="font-outfit font-normal text-[20px] leading-tight text-[#E8FFEE] mt-[4px] max-lg:text-[16px] max-lg:leading-[1.3] max-md:text-[13px] max-md:leading-[1.35] break-words text-right">{course.duration}</span>
                                            <span className="font-outfit font-normal text-[14px] leading-tight text-[#E8FFEE] mt-[4px] max-lg:text-[13px] max-md:text-[12px] text-right">{course.location}</span>
                                        </div>
                                    </div>

                                    {/* Bottom: description + button */}
                                    <div className="flex flex-col gap-[30px] mt-auto max-md:gap-[20px] max-md:mt-0">
                                        <p className="font-outfit font-light text-[16px] leading-[1.3] text-white max-w-[85%] m-0 max-lg:text-[15px] max-md:text-[14px] max-md:leading-[1.35] max-md:max-w-full">{course.description}</p>
                                        <div className="flex justify-start max-md:mt-0">
                                            <Link
                                                href="/contact"
                                                className="group relative flex h-[44px] w-[123px] items-center justify-center overflow-hidden rounded-[10px] bg-white px-[20px] text-black shadow-[0px_2px_5px_0px_#00000040] transition-transform duration-200 ease-out hover:scale-105 max-md:h-[40px] max-md:w-[119px] max-md:rounded-[8px] max-md:px-[18px]"
                                            >
                                                <span className="flex h-full w-full items-center justify-center whitespace-nowrap font-outfit text-[16px] font-semibold leading-[16px] text-black transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                                    Know More
                                                </span>
                                                <span className="pointer-events-none absolute inset-0 flex items-center justify-center whitespace-nowrap font-outfit text-[16px] font-semibold leading-[16px] text-black translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                                                    Know More
                                                </span>
                                            </Link>
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
                        <Link
                            href="/contact"
                            className="group relative w-[186px] h-[44px] rounded-[8px] flex items-center justify-center overflow-hidden bg-white text-[#111111] transition-transform duration-200 ease-out hover:scale-105 max-md:w-[186px] max-md:h-[44px]"
                        >
                            <span className="flex w-full h-full items-center justify-center font-outfit font-semibold text-[14px] leading-none text-[#111111] transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                Claim Free Course
                            </span>
                            <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-outfit font-semibold text-[14px] leading-none text-[#111111] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                                Claim Free Course
                            </span>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
