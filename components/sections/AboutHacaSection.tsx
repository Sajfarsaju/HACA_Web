import Image from 'next/image'

export function AboutHacaSection() {
    return (
        <section className="w-full max-w-[1440px] min-h-[472px] mx-auto pt-[121px] pb-[80px] px-[60px] flex justify-center items-start opacity-100 max-[1024px]:w-[95%] max-[1024px]:max-w-[1100px] max-[1024px]:p-[clamp(60px,8vw,121px)_20px_clamp(40px,6vw,80px)] max-[1024px]:min-h-auto max-[1024px]:mx-auto max-md:min-h-[398px] max-md:p-[28px_20px] max-md:w-full max-md:max-w-full">
            <div className="w-full max-w-[1320px] flex flex-row justify-between items-start gap-[40px] max-[1024px]:flex-row max-[1024px]:items-start max-[1024px]:text-left max-[1024px]:gap-[clamp(20px,4vw,40px)] max-[1024px]:flex-nowrap max-[1024px]:w-full max-md:flex-col max-md:gap-[26px] max-md:items-center max-md:text-center">
                {/* Left Content */}
                <div className="w-full max-w-[455px] flex flex-col gap-[20px] opacity-100 max-[1024px]:max-w-[45%] max-[1024px]:items-start max-md:max-w-[335px] max-md:items-center">
                    <div className="w-full">
                        <button className="w-[165px] h-[42px] bg-transparent border-none rounded-[100px] p-[8px_8px_8px_16px] flex items-center justify-center cursor-pointer opacity-100 max-md:w-[118px] max-md:h-[31.8px]">
                            <span className="">
                                <Image
                                    src="/photos/main/aboutHaca.svg"
                                    alt="About HACA"
                                    width={165}
                                    height={42}
                                    className="w-full h-auto"
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
                        <button className="w-[212px] h-[55px] bg-transparent border-none rounded-[100px] p-[14px_20px] flex items-center justify-center cursor-pointer max-md:w-[170px] max-md:h-[46px] max-md:p-[10px_18px] max-md:rounded-[82px]">
                            <Image
                                src="/photos/main/know more about haca.svg"
                                alt="Know More About HACA"
                                width={212}
                                height={55}
                                className="w-full h-auto"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
