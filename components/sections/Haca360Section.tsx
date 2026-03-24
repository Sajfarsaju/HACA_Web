import Image from 'next/image'

export function Haca360Section() {
    return (
        <section className="w-full section-4k mx-auto py-[32px] px-[60px] flex flex-col gap-[36px] relative max-md:max-w-full max-md:p-[10px_20px_20px_20px] max-md:gap-[26px]">
            <div className="w-full max-w-[min(1320px,91vw)] mx-auto flex flex-col gap-[36px] max-md:gap-[26px]">

                {/* ── Upper: Badge Button + Heading ── */}
                <div className="w-full flex flex-col items-center gap-[20px] text-center relative isolate max-md:gap-[7.97px]">
                    {/* Background Gradient SVG moved behind heading */}
                    <div className="absolute top-[150%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] max-w-[min(1440px,100vw)] h-[clamp(180px,33vw,480px)] pointer-events-none -z-10 max-[1024px]:max-w-full md:top-[168%] max-md:w-[calc(100%-48px)] max-md:max-w-[335px] max-md:top-[150%]">
                        <Image
                            src="/photos/main/bg-gradiant-1.svg"
                            alt=""
                            fill
                            className="object-cover max-md:object-contain max-md:opacity-90"
                        />
                        {/* Soft edge fade (mobile only) */}
                        <div
                            className="hidden max-md:block absolute inset-0 pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(60% 70% at 50% 55%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
                            }}
                            aria-hidden="true"
                        />
                    </div>
                    <button className="inline-flex items-center justify-center w-[148px] h-[42px] p-[8px_8px_8px_16px] gap-[10px] rounded-[100px] bg-transparent border-none cursor-pointer shrink-0 max-md:w-[105px] max-md:h-[32px] max-md:p-[3px_6px_3px_12px] max-md:gap-[6px]" aria-label="HACA 360">
                        <Image
                            src="/photos/main/haca 360.svg"
                            alt="HACA 360"
                            width={148}
                            height={42}
                            className="w-full h-auto object-contain"
                        />
                    </button>
                    <h2 className="font-rethink font-bold text-[32px] leading-[110%] tracking-[0%] text-[#ffffff] m-0 w-[1320px] max-w-full whitespace-nowrap text-center max-md:text-[22px] max-md:w-[335px]">Let&apos;s Talk About HACA</h2>
                </div>

                {/* ── Video Container ── */}
                <div className="w-full aspect-[1320/619] rounded-[20px] overflow-hidden relative bg-[#000210] max-md:rounded-[12px]">

                    {/*
                        VIDEO PLACEHOLDER
                        When admin panel is ready, replace this div with an actual <video> tag.
                        The src can be passed as a prop or pulled from a CMS.
                    */}
                    <div className="w-full h-full relative">
                        {/* Background image: Rectangle 2.png */}
                        <div className="absolute inset-0 z-0" aria-hidden="true">
                            <Image
                                src="/photos/main/Rectangle 2.png"
                                alt=""
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>

                        {/* Centered pause button */}
                        <div className="absolute inset-0 flex items-center justify-center z-[2]">
                            <button className="w-[70px] h-[70px] flex items-center justify-center bg-transparent border-none cursor-pointer transition-all duration-200 ease-in hover:scale-[1.1] hover:opacity-85 max-md:w-[27.91px] max-md:h-[27.91px]" aria-label="Pause video">
                                {/*
                                    Pause SVG — replace with:
                                    <Image src="/photos/main/pause button.svg" alt="" width={70} height={70} />
                                    once the asset is added.
                                */}
                                <svg
                                    className="w-full h-full"
                                    viewBox="0 0 70 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <circle cx="35" cy="35" r="34.5" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.3" />
                                    <rect x="25" y="22" width="7" height="26" rx="2" fill="white" />
                                    <rect x="38" y="22" width="7" height="26" rx="2" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
