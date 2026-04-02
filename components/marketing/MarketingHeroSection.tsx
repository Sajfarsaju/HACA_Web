import Image from "next/image";
import Link from "next/link";

const WORLD_EDUCATION_LOGO = "/photos/schools/marketing/world%20summit%202.svg";
const HERO_PHOTO = "/photos/schools/marketing/rizwan%20marketing.webp";


export function MarketingHeroSection() {
    return (
        <section
            className="w-full bg-white pt-5 pb-0 px-4 md:pt-[clamp(40px,6vw,80px)] md:px-[clamp(24px,5vw,48px)] lg:pt-[clamp(48px,7vw,80px)] lg:px-[clamp(16px,3.5vw,48px)] xl:pt-20 xl:px-[60px] md:min-h-[min(92dvh,820px)] lg:min-h-[765px] overflow-x-hidden"
            aria-label="Marketing School hero"
        >
            <div className="w-full max-w-[1440px] mx-auto min-w-0 flex flex-col lg:flex-row lg:items-start gap-[10px] md:gap-[clamp(16px,3vw,28px)] lg:gap-[clamp(8px,1.2vw,20px)] xl:gap-6">
                {/* Left column: copy + enquire + summit logo */}
                <div className="w-full max-w-[343px] md:max-w-[min(520px,90vw)] lg:max-w-none lg:w-[min(469px,34%)] xl:w-[469px] lg:min-w-0 lg:shrink-[1] mx-auto lg:mx-0 flex flex-col gap-8 md:gap-[clamp(48px,10vw,100px)] lg:gap-[clamp(48px,8vw,100px)] xl:gap-[141px] min-h-0 md:min-h-[clamp(360px,48vw,520px)] lg:min-h-0 xl:min-h-[546px]">
                    {/* Top block */}
                    <div className="flex flex-col gap-6 md:gap-8 lg:gap-8 xl:gap-10 w-full min-h-0 md:min-h-[clamp(220px,30vw,316px)] lg:min-h-0 xl:min-h-[316px]">
                        <h1
                            className="m-0 text-[#171717] font-medium text-[clamp(28px,8.5vw,38px)] md:text-[clamp(38px,5.2vw,52px)] leading-[95%] tracking-[-1px] md:tracking-[-1.2px] lg:text-[clamp(36px,3.8vw,56px)] lg:leading-[1.05] lg:tracking-[-1.4px] xl:text-[68px] xl:leading-[72px] xl:tracking-[-1.92px] max-w-[343px] md:max-w-[min(469px,90vw)] lg:max-w-full [text-rendering:geometricPrecision]"
                            style={{ fontFamily: "Darker Grotesque, sans-serif" }}
                        >
                            <span className="block align-middle whitespace-nowrap">Learn the skill.</span>
                            <span className="block align-middle whitespace-nowrap">Build the demand.</span>
                            <span className="block align-middle whitespace-nowrap">Join Marketing School.</span>
                        </h1>

                        <Link
                            href="/contact"
                            className="relative flex items-center shrink-0 group no-underline transition-all duration-300 w-[158.26px] h-[44px] md:w-[194px] md:h-[60px]"
                            aria-label="Enquire now"
                        >
                            <div className="absolute left-0 top-0 bg-[#E6EFFF] flex items-center transition-colors duration-300 group-hover:bg-[#d6e4ff] w-[154.6px] h-[44px] rounded-[22px] pl-[12px] md:w-[189px] md:h-[60px] md:rounded-[30px] md:pl-[20px]">
                                <span 
                                    className="text-black whitespace-nowrap text-[16px] md:text-[18px]"
                                    style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, lineHeight: "100%" }}
                                >
                                    Enquire Now
                                </span>
                            </div>
                            <div className="absolute right-0 top-0 pointer-events-none transition-transform duration-300 group-hover:translate-x-1 w-[44px] h-[44px] md:w-[60px] md:h-[60px]">
                                <Image
                                    src="/photos/schools/marketing/button arrow.svg"
                                    alt=""
                                    width={60}
                                    height={60}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </Link>

                        <p className="lg:hidden m-0 text-[#171717] font-rethink font-medium text-[clamp(12px,3.8vw,18px)] md:text-[clamp(15px,2.2vw,18px)] leading-[1.45] max-w-[343px] md:max-w-[min(520px,90vw)]">
                            <span className="block whitespace-nowrap">Learn in a space where ideas flow,</span>
                            <span className="block whitespace-nowrap">projects matter, and your growth is the priority.</span>
                        </p>
                    </div>

                    {/* Summit logo row */}
                    <div className="flex items-center gap-[clamp(5.7px,0.6vw,8.72px)] w-[clamp(223px,28vw,341px)] md:w-[clamp(280px,38vw,341px)] lg:w-[min(341px,100%)] h-[clamp(58.166px,7vw,88.945px)] relative shrink-0 self-center lg:self-start">
                        <Image
                            src={WORLD_EDUCATION_LOGO}
                            alt="World Education Summit"
                            fill
                            className="object-contain object-center lg:object-left"
                            sizes="(max-width: 1023px) 223px, 341px"
                        />
                    </div>
                </div>

                {/* Hero photo — flex-1 so it shrinks on narrow desktop instead of clipping */}
                <div className="w-full min-w-0 lg:flex-1 lg:max-w-[min(613.46px,100%)] shrink mx-auto lg:mx-0">
                    <div className="relative w-full aspect-[613/638] max-h-[390px] md:max-h-[min(560px,52vw)] lg:max-h-[min(638px,55vh)] xl:max-h-[638px] overflow-hidden md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px]">
                        <Image
                            src={HERO_PHOTO}
                            alt="Marketing School"
                            fill
                            className="object-cover object-top lg:object-cover lg:object-center"
                            sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 45vw, 613px"
                            priority
                        />
                    </div>
                </div>

                {/* Desktop-only right note */}
                <div className="hidden lg:flex w-[min(200px,18%)] xl:w-[clamp(170px,15vw,250px)] min-w-0 shrink-0 min-h-0 xl:min-h-[638px] items-start pt-[clamp(32px,5vw,86px)] pr-0 pl-[clamp(0px,0.8vw,8px)]">
                    <div className="flex flex-col gap-[clamp(8px,1.4vw,16px)] w-full min-w-0">
                        <span className="relative w-[clamp(18px,1.6vw,28px)] h-[clamp(18px,1.6vw,28px)] shrink-0" aria-hidden="true">
                            <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-[#1463FF]" />
                            <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-[#1463FF]" />
                        </span>
                        <p className="m-0 font-rethink font-medium text-[clamp(11px,0.95vw,18px)] leading-[1.45] text-[#171717] w-full min-w-0">
                            Learn in a space where ideas flow, projects matter, and your growth is the priority.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
