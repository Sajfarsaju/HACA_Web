import Image from "next/image";

export function TechProjectsSection() {
    return (
        <section className="w-full relative overflow-visible" id="tech-projects">
            {/* Local style for the gradient border masks */}
            <style>{`
                .tech-projects-card-left-mask::before {
                    content: "";
                    position: absolute;
                    inset: -1px;
                    border-radius: 22px;
                    padding: 1px;
                    background: linear-gradient(90deg, #FF5600 0%, #694AFF 100%);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                }
                .tech-projects-card-right-mask::before {
                    content: "";
                    position: absolute;
                    inset: -1px;
                    border-radius: 22px;
                    padding: 1px;
                    background: linear-gradient(90deg, #FF5600 0%, #694AFF 100%);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                }
            `}</style>
            <div className="w-full max-w-[1440px] mx-auto pt-[100px] px-[60px] pb-[40px] flex flex-col gap-[60px] max-lg:px-[30px] max-md:py-[60px] max-md:px-[20px] max-md:pb-[40px] max-md:gap-[40px]">

                {/* Header */}
                <div className="w-full max-w-[1320px] mx-auto flex flex-col items-center gap-[20px]">
                    <h2 className="font-outfit font-normal text-[60px] leading-[62px] tracking-[-0.02em] text-center text-white m-0 w-full max-md:text-[36px] max-md:leading-[40px] max-[375px]:text-[30px] max-[375px]:leading-[1.1] max-[375px]:tracking-[-0.2px] max-[375px]:w-full max-[375px]:max-w-[373px] max-[375px]:min-h-[66px] max-[375px]:mx-auto max-[320px]:text-[24px]">
                        Your Dream, Your Projects. <br className="hidden max-[375px]:block" /> Your Proof.
                    </h2>
                    <p className="font-outfit font-normal text-[24px] leading-[33.6px] tracking-[-0.2px] text-center text-[#A7A7A7] m-0 max-w-[1320px] w-full max-md:text-[16px] max-md:leading-[24px]">
                        You&apos;ll build real, working projects that show what you can do, not just what you&apos;ve read about. These aren&apos;t classroom exercises. They&apos;re portfolio pieces. Proof that you&apos;ve got the skills to code, create, and contribute from day one.
                    </p>
                </div>

                {/* Content */}
                <div className="w-full max-w-[1320px] mx-auto flex flex-col gap-[60px]">

                    {/* Two Column Layout */}
                    <div className="w-full max-w-[1340px] flex justify-center items-stretch gap-[40px] max-lg:flex-col max-lg:items-center">

                        {/* Left Card: Project Show */}
                        <div className="relative bg-[#E7E7E71F] rounded-[22px] border border-transparent shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-[12px] flex flex-col w-full max-w-[650px] h-[428px] p-[20px] gap-[20px] tech-projects-card-left-mask max-md:p-[16px] max-md:h-auto">
                            <div className="relative w-full h-[309px] rounded-[16px] overflow-hidden shrink-0 max-md:h-[220px]">
                                <Image
                                    src="/photos/Tech/Rectangle 6.svg"
                                    fill
                                    alt="Project Screenshot"
                                    className="object-cover rounded-[16px]"
                                />
                            </div>

                            <div className="flex justify-between items-center w-full flex-1 max-md:flex-col max-md:items-center max-md:gap-[16px] max-md:text-center">
                                <p className="w-[330px] font-outfit font-light text-[18px] leading-none text-white m-0 max-md:w-full max-md:text-[16px]">
                                    Easily book a ride anytime and anywhere with a smooth and reliable experience.
                                </p>
                                <div className="flex gap-[10px] items-center">
                                    <div className="relative w-[46.67px] h-[46.67px] rotate-[-180deg] opacity-40 cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-100">
                                        <Image src="/photos/Tech/Active Arowmark.svg" fill alt="Previous" className="object-contain" />
                                    </div>
                                    <div className="relative w-[46.67px] h-[46.67px] opacity-100 cursor-pointer">
                                        <Image src="/photos/Tech/Active Arowmark.svg" fill alt="Next" className="object-contain" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Card: Stats */}
                        <div className="relative bg-[#D9D9D91A] rounded-[22px] border border-transparent shadow-[0px_2.18px_2.18px_0px_rgba(0,0,0,0.25)] backdrop-blur-[6.5px] flex flex-col w-full max-w-[650px] h-[428px] py-[35px] px-[100px] gap-[44px] justify-center items-center tech-projects-card-right-mask max-lg:px-[40px] max-md:px-[20px] max-md:h-auto max-md:py-[40px]">

                            <div className="flex flex-col items-center gap-[13px] w-full">
                                <div className="font-outfit font-normal text-[64px] leading-[130%] text-white text-center m-0 max-md:text-[48px]">10+</div>
                                <div className="font-outfit font-extralight text-[20px] leading-[130%] tracking-[0.5em] uppercase text-white text-center m-0 max-md:text-[16px] max-md:tracking-[0.3em]">Projects</div>
                            </div>

                            <div className="w-[249.8px] h-[1px] bg-white shrink-0"></div>

                            <div className="flex flex-col items-center gap-[13px] w-full">
                                <div className="font-outfit font-normal text-[64px] leading-[130%] text-white text-center m-0 max-md:text-[48px]">250+</div>
                                <div className="font-outfit font-extralight text-[20px] leading-[130%] tracking-[0.5em] uppercase text-white text-center m-0 max-md:text-[16px] max-md:tracking-[0.3em]">Hours of work</div>
                            </div>

                        </div>

                    </div>

                    {/* Bottom Button Component */}
                    <div className="w-full flex justify-center items-center">
                        <button className="bg-transparent border-none cursor-pointer p-0 transition-transform duration-200 ease hover:scale-[1.05]">
                            <Image
                                src="/photos/Tech/Button Container (1).svg"
                                width={188}
                                height={44}
                                alt="View Projects"
                                className="object-contain"
                            />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}
