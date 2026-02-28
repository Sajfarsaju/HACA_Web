import Image from "next/image";

/* ─────────────────────────────────────────
   TechShowcaseSection
   Matches Figma spec:
     Outer wrapper  1308 × 894   gap 60px, left 66px
       Heading      1308 × 62
       Card         1308 × 711   border-radius 20px, glassmorphism border
         • Background image  Rectangle 1.png
         • Ellipse 157       decorative (background)
         • Ellipse 157 (1)   decorative (background)
         • Play icon slot    141 × 117
           └ Vector (1).svg  116.67 × 116.67  left 12px
───────────────────────────────────────────*/

export function TechShowcaseSection() {
    return (
        <div className="w-full max-w-[1308px] mx-auto mt-[60px] pl-[66px] pr-[66px] flex flex-col gap-[60px] pb-[80px] max-[1440px]:px-[40px] max-[1200px]:px-[30px] max-lg:px-[24px] max-md:px-[20px] max-md:mt-[40px] max-md:gap-[30px] max-[480px]:px-[16px]">

            {/* ── Section Heading ── */}
            <h2 className="font-outfit font-normal text-[54px] leading-[62px] tracking-[-0.02em] text-center text-white m-0 w-full relative z-10 max-[1200px]:text-[44px] max-[1200px]:leading-[52px] max-lg:text-[38px] max-lg:leading-[46px] max-md:text-[30px] max-md:leading-[38px] max-[480px]:text-[24px] max-[480px]:leading-[30px]">Step Inside the Tech School</h2>

            {/* ── Video / Image Card ── */}
            <div className="w-full h-[711px] rounded-[20px] border border-solid border-white/34 bg-[linear-gradient(90deg,rgba(255,86,0,0.12)_0%,rgba(105,74,255,0.12)_100%),rgba(0,0,0,0.20)] relative overflow-visible flex items-center justify-center max-[1200px]:h-[560px] max-lg:h-[480px] max-md:h-[380px] max-[480px]:h-[280px]">

                {/* Background Decorative Ellipse – left/bottom */}
                <div className="absolute pointer-events-none z-[1] w-[489px] h-[684px] top-[358px] left-[-329px] rotate-[15deg] opacity-100 max-md:w-[280px] max-md:h-[380px] max-md:top-[200px] max-md:left-[-180px]">
                    <Image
                        src="/photos/Tech/Ellipse 157.svg"
                        alt=""
                        width={489}
                        height={684}
                        className="w-full h-full object-contain relative z-10"
                        aria-hidden="true"
                    />
                </div>

                {/* Background Decorative Ellipse – right/bottom */}
                <div className="absolute pointer-events-none z-[1] w-[212px] h-[696px] top-[512px] right-[-100px] rotate-[119.57deg] opacity-100 max-[1440px]:left-[calc(100%-100px)] max-lg:left-auto max-lg:right-[-60px] max-md:w-[130px] max-md:h-[380px] max-md:top-[300px] max-md:right-[-50px] max-md:left-auto">
                    <Image
                        src="/photos/Tech/Ellipse 157 (1).svg"
                        alt=""
                        width={212}
                        height={696}
                        className="w-full h-full object-contain relative z-10"
                        aria-hidden="true"
                    />
                </div>

                {/* Main background image */}
                <Image
                    src="/photos/Tech/Rectangle 1.png"
                    alt="Tech School Showcase"
                    fill
                    className="object-cover object-center z-[2] rounded-[20px]"
                    priority
                />

                {/* Play button overlay — outer frame + inner arrow */}
                <div className="w-[141px] h-[117px] relative z-10 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.08] max-md:w-[100px] max-md:h-[90px] max-[480px]:w-[72px] max-[480px]:h-[72px]">
                    {/* Outer frame: gridicons_play copy.svg (141 × 117) */}
                    <Image
                        src="/photos/Tech/gridicons_play copy.svg"
                        alt=""
                        width={141}
                        height={117}
                        aria-hidden="true"
                    />
                    {/* Inner arrow: Vector (1).svg (116.67 × 116.67, left 12px) */}
                    <div className="w-[116.67px] h-[116.67px] relative left-[12px] flex items-center justify-center max-md:w-[80px] max-md:h-[80px] max-md:left-[8px] max-[480px]:w-[60px] max-[480px]:h-[60px] max-[480px]:left-[4px]">
                        <Image
                            src="/photos/Tech/Vector (1).svg"
                            alt="Play video"
                            width={117}
                            height={117}
                            className="w-full h-full object-contain drop-shadow-[0_4px_24px_rgba(105,74,255,0.55)]"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
