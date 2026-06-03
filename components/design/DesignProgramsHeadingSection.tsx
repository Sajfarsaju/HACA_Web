"use client";

import Image from "next/image";

export function DesignProgramsHeadingSection() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-[15.62px] pt-[10.42px] pb-[15.62px] lg:px-[60px] lg:pt-[40px] lg:pb-[60px]">
            <div className="w-full flex items-center justify-center">
                {/* Desktop heading */}
                <h2
                    className="hidden lg:block m-0 text-[#000000] text-[50px] leading-[115%]"
                    style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500 }}
                >
                    Creative{" "}
                    <span
                        className="relative inline-block"
                        style={{ fontFamily: '"IvyPresto Display", serif', fontWeight: 300, fontStyle: "italic" }}
                    >
                        Career
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-[calc(100%+2px)]"
                            style={{ width: 316, height: 14, transform: "translateX(-50%) rotate(180deg)", transformOrigin: "center" }}
                        >
                            <Image
                                src="/photos/schools/design/Vector (2).svg"
                                alt="" aria-hidden="true"
                                width={316}
                                height={14}
                                className="w-[316px] h-[14px]"
                            />
                        </span>
                    </span>{" "}
                    Programs
                </h2>

                {/* Mobile heading */}
                <h2
                    className="lg:hidden m-0 text-[#000000] text-[34px] leading-[115%] text-center w-[247px]"
                    style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500 }}
                >
                    Creative{" "}
                    <span
                        className="relative inline-block"
                        style={{ fontFamily: '"IvyPresto Display", serif', fontWeight: 300, fontStyle: "italic" }}
                    >
                        Career
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-[calc(100%+1px)]"
                            style={{ width: 97, height: 7, transform: "translateX(-50%) rotate(180deg)", transformOrigin: "center" }}
                        >
                            <Image
                                src="/photos/schools/design/Vector (2).svg"
                                alt="" aria-hidden="true"
                                width={97}
                                height={7}
                                className="w-[97px] h-[7px]"
                            />
                        </span>
                    </span>{" "}
                    <br />
                    Programs
                </h2>
            </div>
        </section>
    );
}

