"use client"

import { motion } from "framer-motion"

export function EnquireSection() {
    return (
        /* ─── Outer Section: 1440 × 428, padding 32px 60px, border-radius 20px ─── */
        <section
            className="w-full section-4k mx-auto flex items-center justify-center p-[32px_60px] max-md:p-[32px_20px] max-md:min-h-[170px] max-md:h-auto"
            aria-label="Enquire CTA"
        >
            {/* ─── Inner Container: 1320 × 364, padding 25px / 29px, gap 474px, border-radius 20px ─── */}
            <div className="relative w-full max-w-[min(1320px,91vw)] max-md:max-w-none min-h-[364px] flex items-center justify-center p-[25px_29px] rounded-[20px] overflow-hidden max-lg:max-w-[min(980px,94vw)] max-lg:min-h-[220px] max-lg:p-[16px_20px] max-md:max-w-[352px] max-md:min-h-[150px] max-md:h-auto max-md:p-0 max-md:rounded-[5.08px]">

                {/* ─── Background radial gradient ─── */}
                <div className="absolute w-full h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-[radial-gradient(40%_50%_at_50%_50%,rgba(18,67,228,1)_0%,#000210_100%)] z-0 max-lg:h-[520px] max-lg:bg-[radial-gradient(42%_52%_at_50%_50%,#1A4FFF_0%,#000210_100%)] max-md:w-[355px] max-md:h-[380px] max-md:bottom-auto max-md:right-auto max-md:rounded-[5.08px] max-md:bg-[radial-gradient(40%_50%_at_50%_50%,#1A4FFF_0%,#000210_100%)] max-md:backdrop-blur-[41.72px]" aria-hidden="true" />

                {/* ─── Content Container: 569 × 167, gap 20px ─── */}
                <motion.div
                    className="relative z-10 flex flex-col items-center justify-center gap-[20px] max-w-[900px] text-center max-md:w-full max-md:max-w-[352px] max-md:gap-[16px]"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* ─── Headline ─── */}
                    <p className="w-full max-w-[750px] font-manrope font-normal text-[42px] leading-[110%] text-center text-[#FFFFFF] m-0 max-md:font-semibold max-md:text-[clamp(18px,5.3vw,20px)] max-md:leading-[110%]">
                        Everyone starts somewhere. The smart ones start here.
                    </p>

                    {/* ─── Enquire Button ─── */}
                    <motion.button
                        className="group relative w-[143px] h-[55px] max-md:w-[116px] max-md:h-[46px] rounded-[100px] max-md:rounded-[82px] border-none cursor-pointer flex items-center justify-center bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] px-[24px] max-md:px-[18px] overflow-hidden"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", mass: 1, stiffness: 220.5, damping: 17.14 }}
                        aria-label="Enquire Now"
                    >
                        <span className="flex w-full h-full items-center justify-center font-rethink font-medium text-[18px] leading-[27px] text-white whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                            Enquire Now
                        </span>
                        <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-rethink font-medium text-[18px] leading-[27px] text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                            Enquire Now
                        </span>
                    </motion.button>
                </motion.div>

            </div>
        </section>
    )
}