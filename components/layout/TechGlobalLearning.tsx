"use client";
import Image from "next/image";

const LOCATIONS = [
    { name: "Canada", top: "34%", left: "24%", triangleSide: "left" },
    { name: "Pakistan", top: "35%", left: "75%", triangleSide: "left" },
    { name: "Dubai", top: "42%", left: "53%", triangleSide: "left" },
    { name: "India", top: "48%", left: "77%", triangleSide: "left" },
    { name: "Nigeria", top: "58%", left: "42%", triangleSide: "right" },
    { name: "Bangladesh", top: "61%", left: "85%", triangleSide: "left" },
    { name: "Srilanka", top: "70%", left: "60%", triangleSide: "right" },
    { name: "Philippines", top: "80%", left: "86%", triangleSide: "left" },
];

export function TechGlobalLearning() {
    return (
        <section
            className="flex flex-col items-center relative px-6 overflow-hidden py-8 md:py-[80px] lg:py-[140px] gap-4 md:gap-8 lg:gap-[40px] min-h-[600px] md:min-h-[700px] lg:min-h-[1123.84px] w-full bg-transparent opacity-100"
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
                    maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                }}
            />

            {/* ✅ Mobile Background (using 99.svg) */}
            <div className="md:hidden absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <div className="relative w-full h-[600px] top-[140px]"
                    style={{
                        maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 40%, transparent 90%)",
                        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 40%, transparent 90%)"
                    }}
                >
                    <Image
                        src="/photos/Tech/99.svg"
                        alt=""
                        fill
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

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
                className="w-full max-w-[1000px] h-auto min-h-[clamp(300px,45vw,653.84px)] relative flex items-center justify-center opacity-100 z-10 mt-[20px] sm:mt-10 lg:mt-[40px] md:w-full"
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
                    {/* Mobile Version — Full Screen Width */}
                    <div 
                        className="md:hidden relative overflow-visible"
                        style={{
                            width: "100vw",
                            aspectRatio: "373 / 244",
                            marginInline: "calc(-1 * 1.5rem)" // Negates the parent px-6 padding (1.5rem = 24px)
                        }}
                    >
                        <Image
                            src="/photos/schools/tech/World MapMobile.svg"
                            alt="Global Learning World Map Mobile"
                            width={373}
                            height={244}
                            className="object-contain w-full h-full"
                        />

                        {/* Mobile Locations */}
                        {LOCATIONS.map((loc, idx) => (
                            <div
                                key={idx}
                                className="absolute flex pointer-events-none"
                                style={{
                                    top: loc.top,
                                    left: loc.left,
                                    transform: "translate(-50%, -50%)",
                                    flexDirection: loc.triangleSide === "right" ? "row-reverse" : "row",
                                    alignItems: loc.name === "Philippines" ? "flex-start" : "center",
                                    gap: "4px"
                                }}
                            >
                                {/* Triangle Arrow (Representing location point) */}
                                <svg 
                                    width="6.5" 
                                    height="8" 
                                    viewBox="0 0 6.5 8" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`drop-shadow-[0px_0px_3px_rgba(255,255,255,0.7)] ${loc.name === "Philippines" ? "mt-[1px]" : ""}`}
                                >
                                    {loc.triangleSide === "left" ? (
                                        <path d="M0 4L6.5 0.5V7.5L0 4Z" fill="white" />
                                    ) : (
                                        <path d="M6.5 4L0 0.5V7.5L6.5 4Z" fill="white" />
                                    )}
                                </svg>
                                
                                {/* Glass Box with specified layout */}
                                <div
                                    className="relative"
                                    style={{
                                        width: "fit-content",
                                        minWidth: "40px",
                                        height: "23.69px",
                                        padding: "3.85px 10px",
                                        gap: "7.69px",
                                        borderRadius: "13.85px",
                                        background: "#D9D9D91A",
                                        boxShadow: "0px 2.71px 2.71px 0px #00000040",
                                        backdropFilter: "blur(8.13px)",
                                        WebkitBackdropFilter: "blur(8.13px)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        opacity: 1,
                                    }}
                                >
                                    {/* Gradient Border (Matches Tech School Desktop Reference) */}
                                    <div 
                                        className="absolute inset-0 rounded-[13.85px] pointer-events-none"
                                        style={{
                                            padding: "0.68px",
                                            background: "linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%)",
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",
                                        }}
                                    />
                                    <span className="font-outfit font-normal text-[10px] text-white whitespace-nowrap leading-none relative z-[1]">
                                        {loc.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
