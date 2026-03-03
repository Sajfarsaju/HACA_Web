import Image from "next/image";

export function TechPlacementsSection() {
    return (
        <section className="w-full relative overflow-hidden bg-[#111111]" id="tech-placements">
            {/* Local style for the gradient border masks */}
            <style>{`
                .tech-placements-glass-side::before {
                    content: "";
                    position: absolute;
                    inset: -0.67px;
                    border-radius: inherit;
                    padding: 0.67px;
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: destination-out;
                    mask-composite: exclude;
                    pointer-events: none;
                }
                .tech-placements-glass-center::before {
                    content: "";
                    position: absolute;
                    inset: -0.92px;
                    border-radius: inherit;
                    padding: 0.92px;
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: destination-out;
                    mask-composite: exclude;
                    pointer-events: none;
                }
                /* Purple glow: center band, soft fade to edges — reduced side darkness */
                .tech-placements-glow {
                    background: radial-gradient(
                        ellipse 55% 55% at 50% 58%,
                        rgba(132, 0, 255, 0.32) 0%,
                        rgba(132, 0, 255, 0.14) 25%,
                        rgba(132, 0, 255, 0.05) 50%,
                        rgba(132, 0, 255, 0.01) 70%,
                        transparent 85%
                    );
                }
            `}</style>

            {/* Background: Image.svg + purple gradient + Group 46 gradient — behind content, z-0 */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden min-h-[400px]">
                <Image
                    src="/photos/Tech/Image.svg"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    aria-hidden
                />
                <div className="absolute inset-0 tech-placements-glow" aria-hidden />
                {/* Group 46: spans from section title top to card bottom, full section width — no max-width cap */}
                <div
                    className="absolute top-[40px] left-0 right-0 w-full h-[800px] max-md:top-[30px] max-md:h-[440px] pointer-events-none"
                >
                    <Image
                        src="/photos/Tech/Group 46.svg"
                        fill
                        alt=""
                        className="object-contain object-center"
                        aria-hidden
                    />
                </div>
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto py-[40px] px-[60px] flex flex-col items-center gap-[60px] max-md:max-w-[700px] max-md:pt-[40px] max-md:px-[31.6px] max-md:pb-[40px] max-md:gap-[19.44px]">
                {/* Header */}
                <div className="w-full max-w-[1228px] flex flex-col items-center gap-[20px] text-center max-md:w-[337px] max-md:gap-[10px]">
                    <h2 className="m-0 font-outfit font-normal text-[60px] leading-[62px] tracking-[-0.02em] text-white max-md:text-[32px] max-md:leading-[38px]">
                        <span className="block max-md:hidden">Placements We’re Proud Of</span>
                        <span className="hidden max-md:block">Placements We’re <br /> Proud Of</span>
                    </h2>

                    {/* Desktop Subheadings */}
                    <div className="flex flex-col items-center gap-[10px] max-md:hidden">
                        <p className="m-0 font-outfit font-normal text-[30px] leading-[33.6px] tracking-[-0.2px] text-white">
                            Over 80% of Tech School students come from non-IT backgrounds.
                        </p>
                        <p className="m-0 font-outfit font-normal text-[24px] leading-[33.6px] tracking-[-0.2px] text-[#A7A7A7] max-w-[1228px]">
                            Career switchers, fresh graduates, and professionals from other fields have successfully moved into tech with the right skills, projects, and mentorship.
                        </p>
                    </div>

                    {/* Mobile Subheading */}
                    <div className="hidden max-md:block max-md:w-[319px] max-md:mx-auto max-md:font-outfit max-md:font-normal max-md:text-[14px] max-md:leading-[20px] max-md:text-[#A7A7A7]">
                        <p className="m-0">Our students graduate job-ready, equipped with portfolio-worthy projects, AI expertise, and industry-relevant experience.</p>
                    </div>
                </div>

                {/* Cards Row */}
                <div className="relative w-full max-w-[1310px] flex justify-center max-md:w-[636.81px] max-md:h-[279.83px]">
                    <div className="relative z-[1] flex items-end justify-center gap-[30.3px] w-full max-w-[1134px] max-md:max-w-[551.25px] max-md:h-[279.83px] max-md:gap-[14.73px]">
                        {/* Left Card */}
                        <div className="relative w-[299.51px] h-[419.84px] shrink-0 max-md:w-[145.6px] max-md:h-[204.09px]">
                            <div className="tech-placements-glass-side absolute bottom-0 w-full h-[367.04px] bg-[#D9D9D91A] rounded-[14.72px] shadow-[0px_2.69px_2.69px_rgba(0,0,0,0.40)] backdrop-blur-[8.07px] border-[0.67px] border-transparent max-md:h-[180px] max-md:rounded-[8px]"></div>
                            <div className="absolute top-0 left-0 w-full h-[418.97px] rounded-[14px] overflow-hidden max-md:h-[203px] max-md:rounded-[8px]">
                                <Image src="/photos/Tech/Instagram post - 18137 1.svg" fill alt="Placement Story" className="object-cover" />
                            </div>
                        </div>

                        {/* Center Card */}
                        <div className="relative w-[410.67px] h-[575.66px] shrink-0 max-md:w-[199.63px] max-md:h-[279.83px]">
                            <div className="tech-placements-glass-center absolute bottom-0 w-full h-[503.25px] bg-[#D9D9D91A] rounded-[20.18px] shadow-[0px_3.69px_3.69px_rgba(0,0,0,0.40)] backdrop-blur-[11.07px] border-[0.92px] border-transparent max-md:h-[245px] max-md:rounded-[12px]"></div>
                            <div className="absolute top-0 left-0 w-full h-[574.47px] rounded-[20px] overflow-hidden max-md:h-[278px] max-md:rounded-[12px]">
                                <Image src="/photos/Tech/Instagram post - 18137 1.svg" fill alt="Placement Story" className="object-cover" />
                            </div>
                        </div>

                        {/* Right Card */}
                        <div className="relative w-[299.51px] h-[419.84px] shrink-0 max-md:w-[145.6px] max-md:h-[204.09px]">
                            <div className="tech-placements-glass-side absolute bottom-0 w-full h-[367.04px] bg-[#D9D9D91A] rounded-[14.72px] shadow-[0px_2.69px_2.69px_rgba(0,0,0,0.40)] backdrop-blur-[8.07px] border-[0.67px] border-transparent max-md:h-[180px] max-md:rounded-[8px]"></div>
                            <div className="absolute top-0 left-0 w-full h-[418.97px] rounded-[14px] overflow-hidden max-md:h-[203px] max-md:rounded-[8px]">
                                <Image src="/photos/Tech/Instagram post - 18137 1.svg" fill alt="Placement Story" className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center gap-[16px] max-md:mt-[10px] max-md:pt-[32px] max-md:pb-[8px]">
                    <button className="relative w-[46.67px] h-[46.67px] bg-transparent border-none cursor-pointer p-0 transition-all duration-200 opacity-40 hover:opacity-100 max-md:w-[38.41px] max-md:h-[38.41px]">
                        <Image src="/photos/Tech/Arrow mark (2).svg" fill alt="Previous" className="object-contain" />
                    </button>
                    <button className="relative w-[46.67px] h-[46.67px] bg-transparent border-none cursor-pointer p-0 transition-transform duration-200 hover:scale-105 max-md:w-[38.41px] max-md:h-[38.41px]">
                        <Image src="/photos/Tech/Active Arowmark (1).svg" fill alt="Next" className="object-contain" />
                    </button>
                </div>
            </div>
        </section>
    );
}
