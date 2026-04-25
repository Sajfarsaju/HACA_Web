import Image from "next/image";

export function DesignFigmaRecognizedSection() {
    return (
        <section
            className="w-full bg-[#FCFCFC] px-0 lg:px-[clamp(16px,4.167vw,60px)]"
        >
            <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-0 items-center lg:items-stretch justify-center">
                {/* Left artwork */}
                <div
                    className="relative shrink-0"
                    style={{
                        width: "min(100%, clamp(320px, 35.019vw, 504.2643127441406px))",
                        // Keep it perfectly square based on actual rendered width (prevents extra top/bottom space on mobile)
                        aspectRatio: "1 / 1",
                    }}
                >
                    <Image
                        src="/photos/schools/design/Frame 2131331111.svg"
                        alt=""
                        fill
                        className="object-contain"
                        priority={false}
                    />
                </div>

                {/* Right black container */}
                <div
                    className="bg-black shrink-0 flex flex-col items-center justify-center"
                    style={{
                        width: "min(100%, clamp(320px, 64.981vw, 935.7357177734375px))",
                        height: "clamp(260px, 34.990vw, 503.8576965332031px)",
                        padding: "clamp(20px, 1.389vw, 20px)",
                        gap: "clamp(20px, 1.389vw, 20px)",
                    }}
                >
                    <div
                        className="relative"
                        style={{
                            width: "clamp(60px, 8.331vw, 119.96611785888672px)",
                            height: "clamp(60px, 8.331vw, 119.96611785888672px)",
                        }}
                    >
                        <Image
                            src="/photos/schools/design/skill-icons_figma-dark.svg"
                            alt=""
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div
                        className="relative"
                        style={{
                            width: "min(100%, clamp(260px, 39.097vw, 563px))",
                            height: "clamp(97.33979034423828px, 14.423vw, 207.68528747558594px)",
                        }}
                    >
                        <Image
                            src="/photos/schools/design/Recognized by Figma as a Trusted Design School.svg"
                            alt=""
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

