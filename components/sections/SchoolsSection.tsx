import Image from "next/image"

const schools = [
    {
        id: 1,
        logo: "/photos/main/degital marketing.svg",
        alt: "Digital Marketing School",
    },
    {
        id: 2,
        logo: "/photos/main/design school.svg",
        alt: "Design School",
    },
    {
        id: 3,
        logo: "/photos/main/tech school.svg",
        alt: "Tech School",
    },
    {
        id: 4,
        logo: "/photos/main/FINANCE SCHOOL.svg",
        alt: "Finance School",
    },
]

export function SchoolsSection() {
    return (
        <section className="w-full max-w-[1440px] h-[673px] mx-auto pt-[36px] px-[60px] pb-[40px] flex flex-col items-center gap-[57px] overflow-hidden opacity-100 max-[1100px]:h-auto max-[1100px]:p-[clamp(28px,4vw,50px)_clamp(24px,4vw,50px)] max-[1100px]:gap-[clamp(28px,4vw,48px)] max-md:p-[clamp(24px,6vw,40px)_clamp(16px,5vw,24px)] max-md:gap-[clamp(20px,7vw,28px)] max-md:items-start">
            {/* Header */}
            <div className="w-full max-w-[1320px] flex flex-col items-center gap-[20px] shrink-0 max-md:gap-[clamp(6px,2.1vw,10px)] max-md:items-start">
                {/* Badge Button */}
                <button className="flex items-center justify-start w-[152px] h-[64px] p-0 rounded-[100px] border-none bg-transparent cursor-default shrink-0 max-md:w-[106px] max-md:h-[45px]" aria-label="Explore Schools">
                    <Image
                        src="/photos/main/school arrow.svg"
                        alt="Schools"
                        width={152}
                        height={64}
                        className="w-full h-full object-contain"
                    />
                </button>

                {/* Heading */}
                <h2 className="font-rethink font-bold text-[32px] leading-[110%] tracking-[0%] text-center text-[#ffffff] m-0 max-[1100px]:text-[clamp(24px,3vw,30px)] max-md:text-[clamp(20px,5.8vw,24px)] max-md:text-left">Pick What Feels Right</h2>
            </div>

            {/* Cards Grid */}
            <div className="w-full max-w-[1320px] h-[444px] flex flex-row justify-between items-stretch gap-[clamp(12px,1.6vw,20px)] max-[1100px]:h-auto max-[1100px]:grid max-[1100px]:grid-cols-2 max-[1100px]:gap-[clamp(16px,2vw,24px)] max-md:flex max-md:flex-col max-md:gap-[clamp(16px,5.3vw,22px)]">
                {schools.map((school) => (
                    <div key={school.id} className="flex-1 min-w-0 max-w-[317px] h-[444px] rounded-[20px] border border-[#25317D] p-[20px_16px_16px_16px] flex flex-col justify-between items-start bg-[radial-gradient(ellipse_60%_40%_at_0%_0%,rgba(30,80,255,0.35)_0%,rgba(10,20,100,0.15)_45%,transparent_75%),radial-gradient(ellipse_85%_65%_at_100%_100%,rgba(30,80,255,0.45)_0%,rgba(10,20,100,0.25)_45%,rgba(0,3,25,1)_75%)] max-[1100px]:flex-auto max-[1100px]:max-w-full max-[1100px]:w-full max-[1100px]:h-[clamp(280px,38vw,380px)] max-md:h-[clamp(140px,41.6vw,160px)]">
                        {/* School Logo — top left */}
                        <div className="w-[158px] h-[65px] flex items-start shrink-0 max-[1100px]:w-[clamp(110px,16vw,158px)] max-[1100px]:h-[clamp(45px,7vw,65px)] max-md:w-[clamp(80px,24.9vw,96px)] max-md:h-[clamp(32px,10.2vw,40px)]">
                            <Image
                                src={school.logo}
                                alt={school.alt}
                                width={158}
                                height={65}
                                className="w-full h-full object-contain object-left"
                            />
                        </div>

                        {/* Explore Button — bottom right */}
                        <div className="w-[162px] h-[26px] flex items-center self-end shrink-0 max-[1100px]:w-[clamp(120px,17vw,162px)] max-[1100px]:h-[clamp(20px,3vw,26px)] max-md:w-[clamp(115px,35.2vw,135px)] max-md:h-[clamp(15px,4.8vw,19px)]">
                            <Image
                                src="/photos/main/explore course arrow.svg"
                                alt="Explore Course"
                                width={162}
                                height={26}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
