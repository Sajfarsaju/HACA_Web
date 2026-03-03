import Image from "next/image"

const mentors = [
    {
        id: 1,
        photo: "/photos/main/mentor 1.png",
        name: "Abu Nabhan",
        position: "CEO Design School",
    },
    {
        id: 2,
        photo: "/photos/main/mentor 2.png",
        name: "Safwan",
        position: "Branding Mentor",
    },
    {
        id: 3,
        photo: "/photos/main/mentor 3.png",
        name: "Pressly",
        position: "Graphic Design Mentor",
    },
    {
        id: 4,
        photo: "/photos/main/mentor 4.png",
        name: "Nanditha",
        position: "Motion Graphics Mentor",
    },
]

export function MentorsSection() {
    return (
        <section className="w-full max-w-[1440px] mx-auto p-[40px_60px_32px_60px] flex flex-col items-center gap-[36px] overflow-hidden opacity-100 max-md:p-[clamp(20px,5vw,32px)_clamp(16px,5vw,22px)] max-md:gap-[26px] max-md:items-start">
            {/* Header */}
            <div className="w-full max-w-[1320px] flex flex-col items-center gap-[20px] max-md:w-full max-md:gap-[clamp(6px,2.1vw,10px)] max-md:items-start">
                {/* Badge Button */}
                <div className="w-[184px] h-[64px] flex items-center justify-center p-0 rounded-[100px] border-none bg-transparent cursor-default max-md:w-[132px] max-md:h-[46px]">
                    <Image
                        src="/photos/main/top mentors arrow.svg"
                        alt="Top Mentors"
                        width={184}
                        height={64}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Heading */}
                <h2 className="font-rethink font-bold text-[42px] leading-[110%] tracking-[0%] text-center text-[#ffffff] m-0 max-md:font-manrope max-md:text-[clamp(20px,5.8vw,24px)] max-md:text-left">Taught by the Top 1%</h2>
            </div>

            {/* Cards Grid */}
            <div className="w-[1320px] h-[482px] flex justify-between items-center gap-[17.33px] max-md:w-full max-md:h-auto max-md:flex-col max-md:gap-[clamp(16px,5.3vw,22px)]">
                {mentors.map((mentor) => (
                    <div key={mentor.id} className="flex-1 w-[317px] h-full flex flex-col gap-[20px] max-md:w-full max-md:h-auto max-md:gap-[clamp(12px,3.9vw,16px)] [&:nth-child(n+3)]:max-md:hidden">
                        {/* Photo Card */}
                        <div className="relative w-full h-[400px] rounded-[24px] overflow-hidden bg-[linear-gradient(136.19deg,rgba(119,119,119,0.2)_-0.17%,rgba(119,119,119,0.04)_100%)] border border-[rgba(255,255,255,0.06)] backdrop-blur-[17px] max-md:h-[clamp(340px,103.4vw,400px)] max-md:rounded-[21px]">
                            <Image
                                src={mentor.photo}
                                alt={mentor.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 767px) 100vw, 317px"
                            />
                        </div>

                        {/* Name & Position */}
                        <div className="flex flex-col gap-[2px]">
                            <p className="font-outfit font-light text-[14px] leading-[140%] text-[#a3a3a3] m-0 max-md:text-[12px]">{mentor.position}</p>
                            <p className="font-outfit font-medium text-[clamp(18px,2.5vw,24px)] leading-[120%] tracking-[0%] text-[#ffffff] m-0 max-md:text-[clamp(18px,5.3vw,22px)]">{mentor.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="w-full flex justify-center mt-[10px] max-md:justify-start max-md:mt-[5px]">
                <button className="w-[198px] h-[55px] flex items-center justify-center p-0 rounded-[100px] border-none bg-transparent cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 max-md:w-[159px] max-md:h-[46px] max-md:rounded-[82px]">
                    <Image
                        src="/photos/main/view more mentors.svg"
                        alt="View More Mentors"
                        width={198}
                        height={55}
                        className="w-full h-full object-contain"
                    />
                </button>
            </div>
        </section>
    )
}
