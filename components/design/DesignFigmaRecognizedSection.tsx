import Image from "next/image";

export function DesignFigmaRecognizedSection() {
    return (
        <section
            className="w-full bg-[#FCFCFC] px-0"
        >
            <div className="w-full flex flex-col lg:flex-row gap-0 items-stretch lg:items-stretch lg:justify-start">
                {/* Left artwork */}
                <div
                    className="relative shrink-0 w-full aspect-square lg:w-[504.2643px] lg:h-[504.2643px]"
                    style={{
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
                    className="bg-black shrink-0 w-full flex flex-col items-center justify-center
                               h-[260px] p-[20px] gap-[20px]
                               lg:w-[935.7357px] lg:h-[503.8577px] lg:p-[10px] lg:gap-[10px]"
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

