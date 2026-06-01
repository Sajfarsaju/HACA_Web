import Image from "next/image";

/* ─────────────────────────────────────────
   TechShowcaseSection
   Matches Figma spec:
     Outer wrapper  1308 × 894   gap 60px, left 66px
       Heading      1308 × 62
       Card         1308 × 711   border-radius 20px, glassmorphism border
        • Background image  Rectangle 1.webp
         • Ellipse 157       decorative (background)
         • Ellipse 157 (1)   decorative (background)
         • Play icon slot    141 × 117
           └ Vector (1).svg  116.67 × 116.67  left 12px
───────────────────────────────────────────*/

export function TechShowcaseSection() {
    return (
        <div className="w-full mx-auto mt-[60px] pl-[66px] pr-[66px] flex flex-col gap-[60px] pb-[80px] max-[1440px]:px-[40px] max-[1200px]:px-[30px] max-lg:px-[24px] max-md:px-[20px] max-md:mt-[40px] max-md:gap-[30px] max-md:pb-[40px] max-[480px]:px-[16px] max-[480px]:pb-[32px] min-[1441px]:px-[min(80px,5vw)]">

            {/* ── Section Heading ── */}
            <h2 className="font-outfit font-normal text-[54px] leading-[62px] tracking-[-0.02em] text-center text-white m-0 w-full relative z-10 max-[1200px]:text-[44px] max-[1200px]:leading-[52px] max-lg:text-[38px] max-lg:leading-[46px] max-md:text-[30px] max-md:leading-[38px] max-[480px]:text-[24px] max-[480px]:leading-[30px]">Step Inside the Tech School</h2>

            {/* ── Video / Image Card ── */}
            <div className="w-full aspect-[1308/711] rounded-[20px] border border-solid border-white/34 bg-[linear-gradient(90deg,rgba(255,86,0,0.12)_0%,rgba(105,74,255,0.12)_100%),rgba(0,0,0,0.20)] relative overflow-visible flex items-center justify-center">

                {/* Ellipse 157 – left gradient (top-left of card on all screens) */}
                <div
                    className="absolute pointer-events-none z-[1] w-[489px] h-[1384px] top-[-573px] left-[-280px] rotate-[15deg] opacity-100 max-lg:w-[320px] max-lg:h-[450px] max-lg:top-[-200px] max-lg:left-[-180px] max-md:w-[280px] max-md:h-[380px] max-md:top-0 max-md:left-[-120px] max-[480px]:w-[160px] max-[480px]:h-[220px] max-[480px]:top-0 max-[480px]:left-[-80px]"
                    style={{
                        maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 0%, black 25%, transparent 55%)",
                        WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 0%, black 25%, transparent 55%)",
                    }}
                >
                    <Image
                        src="/photos/Tech/Ellipse 157.svg"
                        alt=""
                        width={489}
                        height={1384}
                        className="w-full h-full object-contain"
                        aria-hidden="true"
                        
                    />
                </div>

                {/* Ellipse 157 (1) – right top of card, responsive for all screens */}
                <div
                    className="absolute pointer-events-none z-[1] top-0 right-[-80px] w-[280px] h-[500px] max-[1200px]:w-[220px] max-[1200px]:h-[400px] max-[1200px]:right-[-60px] max-lg:w-[180px] max-lg:h-[320px] max-lg:right-[-50px] max-md:w-[140px] max-md:h-[280px] max-md:right-[-40px] max-[480px]:w-[100px] max-[480px]:h-[180px] max-[480px]:right-[-30px]"
                    style={{
                        transform: "translate(20%, -20%)",
                        maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 0%, black 25%, transparent 65%)",
                        WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 0%, black 25%, transparent 65%)",
                    }}
                >
                    <Image
                        src="/photos/Tech/Ellipse 157 (1).svg"
                        alt=""
                        width={212}
                        height={696}
                        className="w-full h-full object-contain"
                        aria-hidden="true"
                    />
                </div>

                {/* Main background image */}
                <Image
                    src="/photos/Tech/Rectangle 1.webp"
                    alt="Tech School Showcase"
                    fill
                    className="object-cover object-center z-[2] rounded-[20px]"
                    priority
                />

                {/* Play button overlay — outer frame + inner arrow */}
                <div className="w-[94px] h-[78px] relative z-10 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.08] max-md:w-[67px] max-md:h-[60px] max-[480px]:w-[48px] max-[480px]:h-[48px]">
                    {/* Outer frame: gridicons_play copy.svg (141 × 117) */}
                    <Image
                        src="/photos/Tech/gridicons_play copy.svg"
                        alt=""
                        width={94}
                        height={78}
                        aria-hidden="true"
                    />
                    {/* Inner arrow: Vector (1).svg (116.67 × 116.67, left 12px) */}
                    <div className="w-[78px] h-[78px] relative left-[8px] flex items-center justify-center max-md:w-[53px] max-md:h-[53px] max-md:left-[5px] max-[480px]:w-[40px] max-[480px]:h-[40px] max-[480px]:left-[3px]">
                        <Image
                            src="/photos/Tech/Vector (1).svg"
                            alt="Play video"
                            width={78}
                            height={78}
                            className="w-full h-full object-contain drop-shadow-[0_4px_24px_rgba(105,74,255,0.55)]"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
