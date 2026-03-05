"use client";

import Image from "next/image";

export function TechGlobalLearning() {
    return (
        <section
            className="flex flex-col items-center relative px-6 overflow-hidden py-8 md:py-[80px] lg:py-[140px] gap-4 md:gap-8 lg:gap-[40px] min-h-[400px] md:min-h-[700px] lg:min-h-[1123.84px] w-full bg-transparent opacity-100"
        >
            {/* ✅ Main Purple Radial Glow */}
            <div
                className="absolute md:block hidden md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[1600px] md:h-[1000px] left-1/2 -translate-x-1/2 top-[192px] w-[373.17px] h-[244px] z-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(
                            ellipse 55% 40% at 50% 50%,
                            rgba(168, 85, 247, 0.90) 0%,
                            rgba(147, 51, 234, 0.80) 25%,
                            rgba(109, 40, 217, 0.60) 50%,
                            rgba(67, 20, 140, 0.30) 75%,
                            rgba(17, 17, 17, 0) 100%
                        )
                    `,
                    filter: "blur(clamp(60px, 15vw, 220px))",
                    maskImage: "linear-gradient(to bottom, black 0%, black calc(100% - 5px), transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black calc(100% - 5px), transparent 100%)",
                }}
            />
            <div
                className="absolute md:hidden block left-1/2 -translate-x-1/2 top-[192px] w-[373.17px] h-[244px] z-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(
                            ellipse 75% 45% at 50% 45%,
                            rgba(186, 104, 255, 0.95) 10%,
                            rgba(168, 85, 247, 0.9) 25%,
                            rgba(147, 51, 234, 0.8) 45%,
                            rgba(109, 40, 217, 0.60) 60%,
                            rgba(67, 20, 140, 0.35) 80%,
                            rgba(17, 17, 17, 0) 100%
                        )
                    `,
                    filter: "blur(clamp(80px, 18vw, 260px))",
                    maskImage: "linear-gradient(to bottom, black 0%, black calc(100% - 5px), transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black calc(100% - 5px), transparent 100%)",
                }}
            />



            {/* ✅ Center Flare */}
            <div
                className="absolute hidden md:block left-[70%] top-[70%] lg:left-[65%] lg:top-[70%] -translate-x-1/2 -translate-y-1/2 md:w-[600px] md:h-[600px] max-md:left-[46px] max-md:top-[192px] max-md:w-[373.17px] max-md:h-[244px] max-md:translate-x-0 max-md:translate-y-0 opacity-30 z-0 pointer-events-none"
                style={{
                    background: `
                        linear-gradient(130.61deg, #FF5600 37.66%, #694AFF 40.7%),
                        linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))
                    `,
                    filter: "blur(clamp(40px, 10vw, 180px))",
                }}
            />

            {/* Mobile Flare */}
            <div
                className="absolute md:hidden block left-[80%] -translate-x-1/2 w-[373.17px] h-[244px] top-[50%] opacity-30 z-0 pointer-events-none"
                style={{
                    background: `
                        linear-gradient(130.61deg, #FF5600 3.66%, #694AFF 40.7%),
                        linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))
                    `,
                    filter: "blur(clamp(40px, 10vw, 180px))",
                }}
            />



            {/* Title & Subtitle Container (zIndex 10) */}
            <div className="w-full max-w-[1440px] flex flex-col items-center z-10 gap-6 md:gap-10 lg:gap-[40px]">
                <h2 className="font-outfit font-normal text-[clamp(30px,4.5vw,60px)] leading-[110%] tracking-[-0.2px] text-[#FFFFFF] text-center capitalize w-full max-w-[clamp(341px,60vw,938px)] m-0">
                    Learning Across Continents
                </h2>

                <p className="font-outfit font-normal text-[clamp(14px,1.8vw,24px)] leading-[110%] tracking-[-0.2px] text-[#A7A7A7] text-center w-full max-w-[clamp(341px,80vw,1128px)] m-0">
                    Today, students from around the world, including India, Pakistan, Sharjah, Dubai, Bangladesh and more are joining HACA Tech School, making it a truly global learning hub.
                </p>
            </div>

            {/* Map Section (zIndex 10) */}
            <div
                className="w-full max-w-[1000px] h-auto min-h-[clamp(300px,45vw,653.84px)] relative flex items-center justify-center opacity-100 z-10 mt-[-20px] md:mt-10 lg:mt-[40px] md:w-full min-[375px]:w-[373.17px] min-[375px]:h-[244px]"
            >

                {/* Main World Map Images (Responsive) */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {/* Desktop Version */}
                    <div className="hidden md:block w-full h-full">
                        <Image
                            src="/photos/schools/tech/World Map.png"
                            alt="Global Learning World Map"
                            width={1000}
                            height={654}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    {/* Mobile Version */}
                    <div className="md:hidden w-full h-full">
                        <Image
                            src="/photos/schools/tech/World MapMobile.svg"
                            alt="Global Learning World Map Mobile"
                            width={327}
                            height={343}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
