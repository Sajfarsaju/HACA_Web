"use client";

import Image from "next/image";

export function TechGlobalLearning() {
    return (
        <section
            style={{
                backgroundColor: "transparent",
                opacity: 1,
            }}
            className="flex flex-col items-center relative px-6 overflow-hidden py-8 md:py-[80px] lg:py-[140px] gap-4 md:gap-8 lg:gap-[40px] min-h-[400px] md:min-h-[700px] lg:min-h-[1123.84px] w-full"
        >
            {/* ✅ Main Purple Radial Glow */}
            <div
                className="absolute md:block hidden md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[1600px] md:h-[1000px] left-1/2 -translate-x-1/2 top-[192px] w-[373.17px] h-[244px]"
                style={{
                    background: `
                        radial-gradient(
                            circle at center,
                            rgba(168, 85, 247, 0.85) 0%,
                            rgba(147, 51, 234, 0.75) 25%,
                            rgba(109, 40, 217, 0.55) 45%,
                            rgba(67, 20, 140, 0.35) 65%,
                            rgba(17, 17, 17, 0) 80%
                        )
                    `,
                    filter: "blur(clamp(60px, 15vw, 220px))",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <div
                className="absolute md:hidden block 
             left-1/2 -translate-x-1/2 
             top-[192px] 
             w-[373.17px] h-[244px]
             md:left-1/2 md:top-1/2 
             md:-translate-y-1/2 
             "
                style={{
                    background: `
      radial-gradient(
        ellipse 75% 60% at 50% 45%,
        rgba(186, 104, 255, 0.95) 10%,
        rgba(168, 85, 247, 0.9) 20%,
        rgba(147, 51, 234, 0.8) 40%,
        rgba(109, 40, 217, 0.65) 60%,
        rgba(67, 20, 140, 0.45) 75%,
        rgba(32, 10, 60, 0.3) 85%,
        rgba(17, 17, 17, 0) 100%
      )
    `,
                    filter: "blur(clamp(80px, 18vw, 260px))",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />



            {/* ✅ Center Flare */}
            <div
                className="absolute hidden md:block left-[70%] top-[70%] lg:left-[65%] lg:top-[70%] -translate-x-1/2 -translate-y-1/2 md:w-[600px] md:h-[600px] max-md:left-[46px] max-md:top-[192px] max-md:w-[373.17px] max-md:h-[244px] max-md:translate-x-0 max-md:translate-y-0"
                style={{
                    background: `
                        linear-gradient(130.61deg, #FF5600 37.66%, #694AFF 40.7%),
                        linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))
                    `,
                    filter: "blur(clamp(40px, 10vw, 180px))",
                    opacity: 0.3,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />

            {/* Mobile Flare */}
            <div
                className="absolute md:hidden block left-[80%] -translate-x-1/2 w-[373.17px] h-[244px] top-[50%]"
                style={{
                    background: `
                        linear-gradient(130.61deg, #FF5600 3.66%, #694AFF 40.7%),
                        linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))
                    `,
                    filter: "blur(clamp(40px, 10vw, 180px))",
                    opacity: 0.3,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />

            {/* 2️⃣ Top Fade Overlay (zIndex 5) - Cinematic transition from previous section */}
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    background: `
                        linear-gradient(
                            to bottom,
                            #111111 0%,
                            rgba(17, 17, 17, 0.7) 30%,
                            rgba(17, 17, 17, 0.4) 60%,
                            rgba(17, 17, 17, 0) 100%
                        )
                    `,
                    zIndex: 5,
                    pointerEvents: "none",
                }}
                className="h-[150px] md:h-[200px] lg:h-[300px]"
            />

            {/* 3️⃣ Dark Edge Fade / Vignette (zIndex 1) */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `
                        radial-gradient(circle at center, transparent 40%, #111111 85%)
                    `,
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            />

            {/* 3️⃣ Bottom Fade Overlay (zIndex 5) - Cinematic transition to next section */}
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        linear-gradient(
                            to bottom,
                            rgba(17, 17, 17, 0) 0%,
                            rgba(17, 17, 17, 0.4) 40%,
                            rgba(17, 17, 17, 0.7) 70%,
                            #111111 100%
                        )
                    `,
                    zIndex: 5,
                    pointerEvents: "none",
                }}
                className="h-[150px] md:h-[200px] lg:h-[300px]"
            />

            {/* Title & Subtitle Container (zIndex 10) */}
            <div
                style={{
                    width: "100%",
                    maxWidth: "1440px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 10,
                }}
                className="gap-6 md:gap-10 lg:gap-[40px]"
            >
                <h2
                    style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 400,
                        fontSize: "clamp(30px, 4.5vw, 60px)",
                        lineHeight: "110%",
                        letterSpacing: "-0.2px",
                        color: "#FFFFFF",
                        textAlign: "center",
                        textTransform: "capitalize",
                        width: "100%",
                        maxWidth: "clamp(341px, 60vw, 938px)",
                        margin: 0,
                    }}
                >
                    Learning Across Continents
                </h2>

                <p
                    style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 400,
                        fontSize: "clamp(14px, 1.8vw, 24px)",
                        lineHeight: "110%",
                        letterSpacing: "-0.2px",
                        color: "#A7A7A7",
                        textAlign: "center",
                        width: "100%",
                        maxWidth: "clamp(341px, 80vw, 1128px)",
                        margin: 0,
                    }}
                >
                    Today, students from around the world, including India, Pakistan, Sharjah, Dubai, Bangladesh and more are joining HACA Tech School, making it a truly global learning hub.
                </p>
            </div>

            {/* Map Section (zIndex 10) */}
            <div
                style={{
                    width: "100%",
                    maxWidth: "1000px",
                    height: "auto",
                    minHeight: "clamp(300px, 45vw, 653.84px)",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 1,
                    zIndex: 10,
                }}
                className="mt-[-20px] md:mt-10 lg:mt-[40px] md:w-full min-[375px]:w-[373.17px] min-[375px]:h-[244px] relative"
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
