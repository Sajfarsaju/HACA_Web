import Image from 'next/image'
import { motion } from "framer-motion"

export function AboutHacaSection() {
    return (
        <section className="w-full section-4k min-h-[472px] mx-auto pt-[121px] pb-[80px] px-[32px] min-[1025px]:px-[40px] flex justify-center items-start opacity-100 max-[1024px]:w-[95%] max-[1024px]:max-w-[1100px] max-[1024px]:pt-[clamp(60px,8vw,121px)] max-[1024px]:pb-[clamp(40px,6vw,80px)] max-[1024px]:px-[16px] max-[1024px]:min-h-auto max-[1024px]:mx-auto max-md:min-h-[398px] max-md:p-[28px_20px] max-md:w-full max-md:max-w-full">
            <div className="w-full max-w-[min(1320px,91vw)] flex flex-row justify-between items-start gap-[40px] max-[1024px]:flex-row max-[1024px]:items-start max-[1024px]:text-left max-[1024px]:gap-[clamp(20px,4vw,40px)] max-[1024px]:flex-nowrap max-[1024px]:w-full max-md:flex-col max-md:gap-[26px] max-md:items-center max-md:text-center">
                {/* Left Content — badge left edge aligns with heading (desktop) */}
                <div className="w-full max-w-[455px] flex flex-col items-start gap-[20px] opacity-100 max-[1024px]:max-w-[45%] max-[1024px]:items-start max-md:max-w-[335px] max-md:items-center">
                    <div className="w-full flex justify-start max-md:justify-center">
                        <button
                            type="button"
                            className="flex items-center justify-start bg-transparent border-none rounded-[100px] cursor-default opacity-100 max-md:h-[31.8px] max-md:w-[118px] max-md:justify-center max-md:p-[8px_8px_8px_16px] min-[768px]:h-[42px] min-[768px]:w-[165px] min-[768px]:justify-start min-[768px]:p-0 min-[1025px]:h-[48px] min-[1025px]:w-[190px]"
                        >
                            <span className="block w-full max-md:w-full min-[768px]:w-auto">
                                <Image
                                    src="/photos/main/aboutHaca.svg"
                                    alt="About HACA"
                                    width={190}
                                    height={48}
                                    className="h-auto w-full object-left object-contain max-md:w-full min-[768px]:w-[165px] min-[1025px]:w-[190px]"
                                />
                            </span>
                        </button>
                    </div>
                    <h2 className="w-full max-w-[455px] font-rethink font-bold text-[32px] leading-[110%] text-white m-0 text-left max-[1024px]:text-[clamp(22px,3vw,32px)] max-md:max-w-[335px] max-md:text-[22px] max-md:text-center">
                        We Started Small.<br />Now We’re Building Futures.
                    </h2>
                </div>

                {/* Right Content */}
                <div className="w-full max-w-[581px] flex flex-col gap-[32px] opacity-100 max-[1024px]:max-w-[55%] max-[1024px]:items-start max-md:max-w-[335px] max-md:items-center max-md:gap-[20px]">
                    <div className="flex flex-col gap-[32px] max-md:gap-[20px] max-md:items-center">
                        <p className="w-full font-rethink font-medium text-[20px] leading-[140%] text-[#A7ADBE] m-0 text-left max-[1024px]:text-[clamp(14px,2vw,20px)] max-md:text-[14px] max-md:text-center">
                            What began as Haris’s idea to train young talents inside his own agency,
                            Haris&Co., has grown into an agency-based academy with 600+ active students
                            across four schools: Digital Marketing, Graphic Design, Tech, and Finance.
                            From that tiny room to a 10,000 sq. ft campus in Calicut and a new campus
                            in Dubai, HACA continues to shape real careers through real experiences.
                        </p>
                        <motion.button
                            className="group relative w-[212px] h-[55px] rounded-[100px] border-none flex items-center justify-center cursor-pointer bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] px-[24px] max-md:w-[170px] max-md:h-[46px] max-md:px-[18px] max-md:rounded-[82px] overflow-hidden"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", mass: 1, stiffness: 220.5, damping: 17.14 }}
                        >
                            <span className="flex w-full h-full items-center justify-center font-rethink font-medium text-[18px] leading-[27px] text-white whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                                Know More About Us
                            </span>
                            <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-rethink font-medium text-[18px] leading-[27px] text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                                Know More About Us
                            </span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}
