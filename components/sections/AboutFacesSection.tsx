import Image from "next/image"
import Link from "next/link"

export function AboutFacesSection() {
    return (
        <section className="w-full section-4k mx-auto bg-[#000210] py-[30px] flex flex-col items-center gap-[clamp(30px,4vw,50px)] px-[clamp(20px,4vw,60px)] max-md:px-[20px]">
            {/* Heading */}
            <h2 className="w-full max-w-[1320px] font-rethink font-medium text-[clamp(26px,2.2vw,36px)] leading-[34px] text-center text-white m-0 max-md:max-w-[335px]">
                Faces Behind HACA
            </h2>

            {/* Three founder/leader rows */}
            <div className="w-full max-w-[1320px] flex flex-col gap-[clamp(40px,5vw,70px)]">
                {/* Row 1: Haris Aboobacker */}
                <div className="w-full flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-[clamp(20px,4vw,62px)] px-[clamp(0px,4vw,60px)] max-md:px-0 max-md:py-[20px]">
                    {/* Photo */}
                    <div className="relative w-[clamp(260px,32vw,459px)] aspect-[459/474] rounded-[20px] overflow-hidden bg-[#10152F] max-md:w-full max-md:max-w-[335px] max-md:aspect-[335/286]">
                        <Image
                            src="/photos/main/founder-haris.jpg"
                            alt="Haris Aboobacker"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 335px, (max-width: 1200px) 32vw, 459px"
                        />
                    </div>

                    {/* Text column */}
                    <div className="w-full max-w-[794px] flex flex-col gap-[20px] max-md:max-w-[345px] lg:h-full lg:justify-between">
                        {/* Founder details container */}
                        <div className="w-full flex flex-col gap-[clamp(20px,2vw,26px)]">
                            {/* Name + position */}
                            <div className="flex flex-col gap-[clamp(4px,0.8vw,10px)] max-w-[319px]">
                                <h3 className="font-rethink font-semibold text-[clamp(26px,3vw,36px)] leading-[34px] text-white m-0">
                                    Haris Aboobacker
                                </h3>
                                <p className="font-rethink font-semibold text-[clamp(12px,1.1vw,16px)] leading-[1.6] text-left text-[#A7ADBE] m-0 max-w-[295px]">
                                    Founder of Haris&Co &amp; Director of HACA
                                </p>
                            </div>

                            {/* Bio */}
                            <p className="w-full font-rethink font-medium text-[clamp(16px,1.4vw,20px)] leading-[clamp(28px,2.1vw,34px)] text-[#A7ADBE] m-0">
                                Haris is a performance-driven entrepreneur and marketer, recognised by LinkedIn as an early member of the LinkedIn
                                Creator Club, and featured across platforms such as TEDx, Josh Talks, and StartupStory Media.
                                <br />
                                He is the founder of Haris &amp; Co, a fast-growing digital marketing agency in Kerala with 250+ professionals and
                                50+ clients across Asia within just 5 years of operation.
                                <br />
                                After experiencing multiple startup failures, Haris learned what actually works in business and what doesn’t. That
                                experience shapes how HACA trains students today.
                                <br />
                                His approach is practical, honest, and focused on real skills. The same mindset that runs his agency is what drives
                                HACA’s learning culture.
                            </p>
                        </div>

                        {/* Social buttons */}
                        <div className="flex items-center gap-[clamp(10px,1.2vw,12px)] mt-[4px] lg:mt-0 lg:pb-[2px]">
                            {/* LinkedIn button */}
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center gap-[7.12px] rounded-[118.75px] bg-[#A7ADBE1A] px-[clamp(12px,1.3vw,14.25px)] py-[clamp(3px,0.6vw,3.56px)] shadow-[0px_1.19px_1.19px_0px_#0003124D,0px_9.5px_12.94px_0px_#0003121F] backdrop-blur-[7.12px]"
                            >
                                <Image
                                    src="/photos/main/linkedin icon.svg"
                                    alt="LinkedIn icon"
                                    width={26}
                                    height={26}
                                    className="w-[clamp(20px,1.9vw,25.9px)] h-[clamp(20px,1.9vw,25.9px)]"
                                />
                                <span className="font-manrope font-medium text-[clamp(14px,1.4vw,18px)] leading-[clamp(21px,1.7vw,27.53px)] text-[#A7ADBE]">
                                    LinkedIn
                                </span>
                            </Link>

                            <div className="w-px h-[clamp(18px,2vw,21.6px)] border-l border-white" />

                            {/* Instagram button */}
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center gap-[7.12px] rounded-[118.75px] bg-[#A7ADBE1A] px-[clamp(12px,1.3vw,14.25px)] py-[clamp(3px,0.6vw,3.56px)] shadow-[0px_1.19px_1.19px_0px_#0003124D,0px_9.5px_12.94px_0px_#0003121F] backdrop-blur-[7.12px]"
                            >
                                <Image
                                    src="/photos/main/insta icon.svg"
                                    alt="Instagram icon"
                                    width={26}
                                    height={26}
                                    className="w-[clamp(20px,1.9vw,25.9px)] h-[clamp(20px,1.9vw,25.9px)]"
                                />
                                <span className="font-manrope font-medium text-[clamp(14px,1.4vw,18px)] leading-[clamp(21px,1.7vw,27.53px)] text-[#A7ADBE]">
                                    Instagram
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Row 2: placeholder leader (photo on right in desktop) */}
                <div className="w-full flex flex-col lg:flex-row-reverse lg:items-start lg:justify-between gap-[clamp(20px,4vw,62px)] px-[clamp(0px,4vw,60px)] max-md:px-0 max-md:py-[20px]">
                    {/* Photo */}
                    <div className="relative w-[clamp(260px,32vw,459px)] aspect-[459/474] rounded-[20px] overflow-hidden bg-[#10152F] max-md:w-full max-md:max-w-[335px] max-md:aspect-[335/286]">
                        <Image
                            src="/photos/main/founder-placeholder-1.jpg"
                            alt="Leadership team"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 335px, (max-width: 1200px) 32vw, 459px"
                        />
                    </div>

                    {/* Text column */}
                    <div className="w-full max-w-[794px] flex flex-col gap-[20px] max-md:max-w-[345px]">
                        <div className="w-full flex flex-col gap-[clamp(20px,2vw,26px)]">
                            <div className="flex flex-col gap-[clamp(4px,0.8vw,10px)] max-w-[319px]">
                                <h3 className="font-rethink font-semibold text-[clamp(26px,3vw,36px)] leading-[34px] text-white m-0">
                                    Leader Name
                                </h3>
                                <p className="font-rethink font-semibold text-[clamp(12px,1.1vw,16px)] leading-[1.6] text-left text-[#A7ADBE] m-0 max-w-[295px]">
                                    Role / Designation at HACA
                                </p>
                            </div>
                            <p className="w-full font-rethink font-medium text-[clamp(16px,1.4vw,20px)] leading-[clamp(28px,2.1vw,34px)] text-[#A7ADBE] m-0">
                                Dummy description about this leader. You can update this copy later with their story, background, and the role they
                                play in building HACA.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Row 3: placeholder leader */}
                <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between gap-[clamp(20px,4vw,62px)] px-[clamp(0px,4vw,60px)] max-md:px-0 max-md:py-[20px]">
                    {/* Photo */}
                    <div className="relative w-[clamp(260px,32vw,459px)] aspect-[459/474] rounded-[20px] overflow-hidden bg-[#10152F] max-md:w-full max-md:max-w-[335px] max-md:aspect-[335/286]">
                        <Image
                            src="/photos/main/founder-placeholder-2.jpg"
                            alt="Leadership team"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 335px, (max-width: 1200px) 32vw, 459px"
                        />
                    </div>

                    {/* Text column */}
                    <div className="w-full max-w-[794px] flex flex-col gap-[20px] max-md:max-w-[345px]">
                        <div className="w-full flex flex-col gap-[clamp(20px,2vw,26px)]">
                            <div className="flex flex-col gap-[clamp(4px,0.8vw,10px)] max-w-[319px]">
                                <h3 className="font-rethink font-semibold text-[clamp(26px,3vw,36px)] leading-[34px] text-white m-0">
                                    Leader Name
                                </h3>
                                <p className="font-rethink font-semibold text-[clamp(12px,1.1vw,16px)] leading-[1.6] text-left text-[#A7ADBE] m-0 max-w-[295px]">
                                    Role / Designation at HACA
                                </p>
                            </div>
                            <p className="w-full font-rethink font-medium text-[clamp(16px,1.4vw,20px)] leading-[clamp(28px,2.1vw,34px)] text-[#A7ADBE] m-0">
                                Dummy description about this leader. You can update this copy later with their story, background, and the role they
                                play in building HACA.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

