import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Success Stories | HACA",
    description: "They studied across our schools. Now they're building creative careers across agencies, brands, and studios.",
}

const schools = [
    {
        name: "Marketing School",
        stories: [
            { id: 1, company: "FintechFlow", title: "Scaling to 1M users in 6 months", content: "By implementing HACA's core architecture, FintechFlow was able to handle massive traffic spikes without a single minute of downtime.", image: "/photos/success-stories/Card1-Desktop.png" },
            { id: 2, company: "GrowthOps", title: "200% ROI on Campaign Automation", content: "Leveraging our marketing tech stack, GrowthOps automated their entire funnel, resulting in a 2x increase in conversion efficiency.", image: "/photos/success-stories/Card2-Desktop.png" },
            { id: 3, company: "Brandify", title: "Viral Social Engine", content: "Brandify used our data-driven insights to power a social campaign that reached 5M+ organic impressions in two weeks.", image: "/photos/success-stories/Card3-Desktop.png" },
            { id: 4, company: "MetaScale", title: "Precision Audience Targeting", content: "Implemented advanced analytics for MetaScale, reducing customer acquisition costs by 40% globally.", image: "/photos/success-stories/Card4-Desktop.png" }
        ]
    },
    {
        name: "Design School",
        stories: [
            { id: 5, company: "DesignCore", title: "Reducing page load time by 70%", content: "DesignCore transitioned their entire portfolio to our Next.js foundations, resulting in a significantly better UX.", image: "/photos/success-stories/Card1-Desktop.png" },
            { id: 6, company: "AgencyX", title: "Unified Brand Identity", content: "We helped AgencyX create a cohesive brand language that resonated across 12 countries, increasing brand recognition by 45%.", image: "/photos/success-stories/Card2-Desktop.png" },
            { id: 7, company: "Studio Labs", title: "Next-gen Product Launch", content: "Studio Labs launched their flagship AI product on our platform, achieving 50k signups in the first 24 hours.", image: "/photos/success-stories/Card3-Desktop.png" },
            { id: 8, company: "Creative Connect", title: "Global Talent Network", content: "Built a robust marketplace connecting 100k+ creators with Fortune 500 brands seamlessly.", image: "/photos/success-stories/Card4-Desktop.png" }
        ]
    },
    {
        name: "Tech School",
        stories: [
            { id: 9, company: "CloudScale", title: "Serverless Migration Success", content: "Migrating to a serverless architecture reduced operational costs by 60% while improving global response times.", image: "/photos/success-stories/Card1-Desktop.png" },
            { id: 10, company: "DataViz", title: "Real-time Analytics Dashboard", content: "DataViz now processes 10TB of data daily with sub-second latency using our optimized data pipelines.", image: "/photos/success-stories/Card2-Desktop.png" },
            { id: 11, company: "CyberGuard", title: "Enterprise Security Overhaul", content: "Hardened the core infrastructure for CyberGuard, protecting data for over 10M sensitive user accounts.", image: "/photos/success-stories/Card3-Desktop.png" },
            { id: 12, company: "DevStream", title: "Accelerated CI/CD Workflows", content: "Reduced deployment cycles from days to minutes for DevStream's global engineering team.", image: "/photos/success-stories/Card4-Desktop.png" }
        ]
    }
]

import { Footer } from "@/components/layout/Footer";

export default function SuccessStoryPage() {
    return (
        <div className="w-full bg-transparent overflow-x-hidden md:pt-20 lg:pt-0 flex flex-col justify-between" style={{ minHeight: '2325px' }}>
            {/* Main Content Sections */}
            <div className="flex-grow">
                {/* Header / Intro Section */}
                <section
                    className="w-full flex pt-6 sm:pt-12 md:pt-[100px] lg:pt-[120px] pb-6 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-10 lg:px-[60px] flex-col items-center justify-start gap-8 sm:gap-12 md:gap-[50px] overflow-hidden"
                    style={{
                        height: 'auto',
                        minHeight: '1684px',
                    }}
                >
                    {/* Title Container */}
                    <div
                        className="flex flex-col items-center justify-center text-center gap-[20px] mx-auto text-black"
                        style={{
                            width: '100%',
                            maxWidth: '788px',
                            height: 'auto',
                        }}
                    >
                        <h1
                            className="font-rethink font-bold tracking-[0%] text-[#FFFFFF] m-0 w-[166px] h-[34px] md:w-auto md:h-auto text-[26px] md:text-[58px] leading-[34px] md:leading-[1.2]"
                        >
                            Success Story
                        </h1>
                        <p
                            className="font-rethink font-bold tracking-[0%] text-[#A7ADBE] m-0 w-[349px] h-[51px] md:w-auto md:h-auto text-[14px] md:text-[20px] leading-[17px] md:leading-[34px]"
                        >
                            They studied across our schools. Now they’re building creative careers across agencies, brands, and studios.
                        </p>
                    </div>

                    {/* Content Groups by School */}
                    <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[80px] w-full items-center">
                        {schools.map((school) => (
                            <div key={school.name} className="flex flex-col gap-6 sm:gap-[30px] w-full max-w-[1387px]">
                                {/* School Title - Desktop Only Layout Specs */}
                                <h2
                                    className="font-rethink font-medium tracking-[0%] text-[#FFFFFF] m-0 self-start text-[24px] md:text-[32px] leading-[100%]"
                                    style={{
                                        fontWeight: 500,
                                    }}
                                >
                                    {school.name}
                                </h2>

                                {/* Cards Grid Container */}
                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-4 sm:gap-5 md:gap-6 lg:gap-8"
                                >
                                    {school.stories.map((story) => (
                                        <div
                                            key={story.id}
                                            className="group relative flex flex-col bg-[#0A0C16] overflow-hidden border border-[#232D6B]/30 hover:border-[#232D6B] transition-all duration-500 shadow-2xl w-full min-w-0 aspect-[335/367] rounded-xl sm:rounded-2xl"
                                        >
                                            <div className="relative w-full h-full overflow-hidden flex-1 min-h-0">
                                                <img
                                                    src={story.image}
                                                    alt={story.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Footer inside the height box */}
            <Footer />
        </div>
    )
}

