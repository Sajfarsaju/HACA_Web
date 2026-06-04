import Image from "next/image"
import Link from "next/link"

const leaderSocialLinkClass =
    "group inline-flex items-center justify-center gap-[7.12px] rounded-[118.75px] bg-[#A7ADBE1A] px-[clamp(12px,1.3vw,14.25px)] py-[clamp(3px,0.6vw,3.56px)] shadow-[0px_1.19px_1.19px_0px_#0003124D,0px_9.5px_12.94px_0px_#0003121F] backdrop-blur-[7.12px] transition-transform duration-200 ease-out hover:scale-[1.04] active:scale-[0.98] hover:bg-[#A7ADBE2A]"

const leaderSocialLabelClass =
    "font-manrope font-medium text-[clamp(14px,1.4vw,18px)] leading-[clamp(21px,1.7vw,27.53px)] text-[#A7ADBE] transition-colors duration-200 group-hover:text-white"

const leaderSocialIconClass = "w-[clamp(20px,1.9vw,25.9px)] h-[clamp(20px,1.9vw,25.9px)] shrink-0"

const bioBodyLinkClass =
    "text-white underline underline-offset-[3px] decoration-[#A7ADBE]/60 hover:decoration-white transition-colors"

/** Same frame treatment as `MentorsSection` photo cards — outer width/aspect unchanged */
const leaderPhotoFrameClass =
    "relative w-[clamp(260px,32vw,459px)] aspect-[459/474] rounded-[20px] overflow-hidden border border-[#25317D] bg-[linear-gradient(340.87deg,rgba(0,2,15,0)_23.42%,rgba(15,47,153,0.2)_74.9%,rgba(26,79,255,0.2)_90.34%)] px-[18px] py-[19px] max-md:w-full max-md:max-w-[335px] max-md:aspect-[335/286] max-md:mx-auto max-md:rounded-[21.14px] max-md:px-[19.02px] max-md:py-[20.08px]"

const leaderPhotoImageClass = "object-cover object-top rounded-[16px]"

const HARIS_LINKEDIN_URL = "https://www.linkedin.com/in/haris-aboobacker"
const HARIS_INSTAGRAM_URL =
    "https://www.instagram.com/haris_aboobacker?igsh=MXRmcHZscWIxNngxaA=="

const RIZWAN_LINKEDIN_URL = "https://www.linkedin.com/in/rizmango"
const RIZWAN_INSTAGRAM_URL = "https://www.instagram.com/rizmango?igsh=N2lwbWg1MjJkdjY1"

const NABHAN_LINKEDIN_URL = "https://www.linkedin.com/in/abu-nabhan-232897191"
const NABHAN_INSTAGRAM_URL =
    "https://www.instagram.com/abu__nabhan_?igsh=MW41aThwank4cnl0eg=="

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
                    <div className={leaderPhotoFrameClass}>
                        <Image
                            src="/photos/main/haris.webp"
                            alt="Haris Aboobacker"
                            fill
                            className={leaderPhotoImageClass}
                            sizes="(max-width: 768px) 335px, (max-width: 1200px) 32vw, 459px"
                        />
                    </div>

                    {/* Text column */}
                    <div className="w-full max-w-[794px] flex flex-col gap-[20px] max-md:max-w-[345px] lg:h-full lg:justify-between">
                        {/* Founder details container */}
                        <div className="w-full flex flex-col gap-[clamp(20px,2vw,26px)]">
                            {/* Name + position */}
                            <div className="flex flex-col gap-[clamp(4px,0.8vw,10px)]">
                                <h3 className="font-rethink font-semibold text-[clamp(26px,3vw,36px)] leading-[34px] text-white m-0">
                                    Haris Aboobacker
                                </h3>
                                <p className="font-rethink font-semibold text-[clamp(12px,1.1vw,16px)] leading-[1.6] text-left text-[#A7ADBE] m-0 whitespace-nowrap">
                                    Founder of Haris&Co &amp; Director of HACA
                                </p>
                            </div>

                            {/* Bio */}
                            <p className="w-full font-rethink font-medium text-[clamp(16px,1.4vw,20px)] leading-[clamp(28px,2.1vw,34px)] text-[#A7ADBE] m-0">
                                Haris is a performance-driven entrepreneur and marketer, recognised by LinkedIn as an early member of the LinkedIn
                                Creator Club, and featured across platforms such as TEDx, Josh Talks, and StartupStory Media.
                                <br />
                                He is the founder of Haris &amp; Co, a fast-growing{" "}
                                <a
                                    href="https://harisand.co/digital-marketing-agency-in-kerala"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={bioBodyLinkClass}
                                >
                                    digital marketing agency in Kerala
                                </a>{" "}
                                with 250+ professionals and
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
                            <Link href={HARIS_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={leaderSocialLinkClass}>
                                <Image
                                    src="/photos/main/linkedin icon.svg"
                                    alt="LinkedIn icon"
                                    width={26}
                                    height={26}
                                    className={leaderSocialIconClass}
                                />
                                <span className={leaderSocialLabelClass}>LinkedIn</span>
                            </Link>

                            <div className="w-px h-[clamp(18px,2vw,21.6px)] border-l border-white" />

                            {/* Instagram button */}
                            <Link href={HARIS_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={leaderSocialLinkClass}>
                                <Image
                                    src="/photos/main/insta icon.svg"
                                    alt="Instagram icon"
                                    width={26}
                                    height={26}
                                    className={leaderSocialIconClass}
                                />
                                <span className={leaderSocialLabelClass}>Instagram</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Row 2: Rizwan Ramzan Ahamed (photo on right in desktop) */}
                <div className="w-full flex flex-col lg:flex-row-reverse lg:items-stretch lg:justify-between gap-[clamp(20px,4vw,62px)] px-[clamp(0px,4vw,60px)] max-md:px-0 max-md:py-[20px]">
                    {/* Photo */}
                    <div className={leaderPhotoFrameClass}>
                        <Image
                            src="/photos/main/rizwanLite.webp"
                            alt="Rizwan Ramzan Ahamed"
                            fill
                            className={leaderPhotoImageClass}
                            sizes="(max-width: 768px) 335px, (max-width: 1200px) 32vw, 459px"
                        />
                    </div>

                    {/* Text column */}
                    <div className="w-full max-w-[794px] flex flex-col gap-[20px] max-md:max-w-[345px] lg:h-full lg:justify-between">
                        <div className="w-full flex flex-col gap-[clamp(20px,2vw,26px)]">
                            <div className="flex flex-col gap-[clamp(4px,0.8vw,10px)]">
                                <h3 className="font-rethink font-semibold text-[clamp(26px,3vw,36px)] leading-[34px] text-white m-0">
                                    Rizwan Ramzan Ahamed
                                </h3>
                                <p className="font-rethink font-semibold text-[clamp(12px,1.1vw,16px)] leading-[1.6] text-left text-[#A7ADBE] m-0 whitespace-nowrap">
                                    Co-Founder &amp; CEO, HACA
                                </p>
                            </div>
                            <p className="w-full font-rethink font-medium text-[clamp(16px,1.4vw,20px)] leading-[clamp(28px,2.1vw,34px)] text-[#A7ADBE] m-0">
                                Rizwan has spent years working closely with students, professionals, and learning communities. Before HACA, he
                                worked with BYJU&apos;S and mentored learners across top institutions like IIMs, IITs, and NITs.
                                <br />
                                He has spoken on more than 100 stages, including TEDx and Josh Talks, and is also the host of The Mallu Show, a
                                popular Malayalam podcast that explores work, growth, and life. Now, as a Co-Founder and CEO of HACA, Rizwan
                                focuses on building learning systems where service and education coexist. Under his leadership, HACA evolved into
                                an ecosystem where learners work with real tools, real projects, and real expectations.
                                <br />
                                Rizwan leads HACA&apos;s academic ecosystem and operations with a clear philosophy: &quot;The gap between education and
                                industry isn&apos;t in knowledge. It&apos;s in exposure.&quot;
                            </p>
                        </div>

                        {/* Social buttons — same pattern as Haris */}
                        <div className="flex items-center gap-[clamp(10px,1.2vw,12px)] mt-[4px] lg:mt-0 lg:pb-[2px]">
                            <Link href={RIZWAN_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={leaderSocialLinkClass}>
                                <Image
                                    src="/photos/main/linkedin icon.svg"
                                    alt="LinkedIn icon"
                                    width={26}
                                    height={26}
                                    className={leaderSocialIconClass}
                                />
                                <span className={leaderSocialLabelClass}>LinkedIn</span>
                            </Link>

                            <div className="w-px h-[clamp(18px,2vw,21.6px)] border-l border-white" />

                            <Link href={RIZWAN_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={leaderSocialLinkClass}>
                                <Image
                                    src="/photos/main/insta icon.svg"
                                    alt="Instagram icon"
                                    width={26}
                                    height={26}
                                    className={leaderSocialIconClass}
                                />
                                <span className={leaderSocialLabelClass}>Instagram</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Row 3: Abu Nabhan */}
                <div className="w-full flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-[clamp(20px,4vw,62px)] px-[clamp(0px,4vw,60px)] max-md:px-0 max-md:py-[20px]">
                    {/* Photo */}
                    <div className={leaderPhotoFrameClass}>
                        <Image
                            src="/photos/main/Naban.webp"
                            alt="Abu Nabhan"
                            fill
                            className={leaderPhotoImageClass}
                            sizes="(max-width: 768px) 335px, (max-width: 1200px) 32vw, 459px"
                        />
                    </div>

                    {/* Text column */}
                    <div className="w-full max-w-[794px] flex flex-col gap-[20px] max-md:max-w-[345px] lg:h-full lg:justify-between">
                        <div className="w-full flex flex-col gap-[clamp(20px,2vw,26px)]">
                            <div className="flex flex-col gap-[clamp(4px,0.8vw,10px)]">
                                <h3 className="font-rethink font-semibold text-[clamp(26px,3vw,36px)] leading-[34px] text-white m-0">
                                    Abu Nabhan
                                </h3>
                                <p className="font-rethink font-semibold text-[clamp(12px,1.1vw,16px)] leading-[1.6] text-left text-[#A7ADBE] m-0 whitespace-nowrap">
                                    Founder, Design School  |  Co-Founder, HACA
                                </p>
                            </div>
                            <p className="w-full font-rethink font-medium text-[clamp(16px,1.4vw,20px)] leading-[clamp(28px,2.1vw,34px)] text-[#A7ADBE] m-0">
                                Nabhan started Design School in 2022 to help creative talent from Kerala grow. Today, it&apos;s a community of 500+
                                creatives, with students working across India and abroad at leading agencies.
                                <br />
                                He began as a designer and grew into a designpreneur, working with 50+ brands like Wonderla, TCS, Bun Club and
                                others. He also led branding teams at Haris&amp;Co, shaping strong and meaningful brand identities.
                                <br />
                                As Co-Founder of HACA, Nabhan focuses on building culture, people, and learning that goes beyond classrooms. He has
                                also spoken across multiple platforms, sharing his perspective on design, art and community building and has even
                                been featured on the Ecom Show.
                                <br />
                                He lives by one belief: &quot;Love the Process.&quot;
                            </p>
                        </div>

                        <div className="flex items-center gap-[clamp(10px,1.2vw,12px)] mt-[4px] lg:mt-0 lg:pb-[2px]">
                            <Link href={NABHAN_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={leaderSocialLinkClass}>
                                <Image
                                    src="/photos/main/linkedin icon.svg"
                                    alt="LinkedIn icon"
                                    width={26}
                                    height={26}
                                    className={leaderSocialIconClass}
                                />
                                <span className={leaderSocialLabelClass}>LinkedIn</span>
                            </Link>

                            <div className="w-px h-[clamp(18px,2vw,21.6px)] border-l border-white" />

                            <Link href={NABHAN_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={leaderSocialLinkClass}>
                                <Image
                                    src="/photos/main/insta icon.svg"
                                    alt="Instagram icon"
                                    width={26}
                                    height={26}
                                    className={leaderSocialIconClass}
                                />
                                <span className={leaderSocialLabelClass}>Instagram</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

