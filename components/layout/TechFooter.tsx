import Image from "next/image";

export function TechFooter() {
    return (
        <footer
            className="flex flex-col items-center w-full relative overflow-hidden px-6 pt-2 pb-10 md:px-[40px] md:py-[40px] lg:pb-[100px] bg-[#111111] min-h-[700px]"
        >
            {/* Top Section */}
            <div
                className="flex flex-col md:flex-row justify-between items-start mx-auto z-10 relative w-full max-w-[1360px] gap-[40px]"
            >
                {/* Left: Logo + Text + Form */}
                <div className="flex flex-col w-full md:w-auto">
                    {/* Logo Section (Mobile only) */}
                    <div className="mb-8 md:hidden">
                        <Image
                            src="/photos/schools/tech/tech-logo-PW%201%20copy.png"
                            alt="Tech School Logo"
                            width={260}
                            height={46}
                            className="object-contain w-[160px] md:w-[200px] lg:w-[260px] h-auto"
                        />
                    </div>

                    <h2
                        className="w-full max-w-[400px] font-outfit font-light text-[clamp(24px,4vw,40px)] leading-[1.2] tracking-[-0.02em] text-[#FFFFFF] tabular-nums"
                    >
                        Your Doubts Deserve Answers
                    </h2>

                    <p
                        className="w-full max-w-[488px] font-outfit font-normal text-[clamp(14px,1.5vw,18px)] leading-[1.5] tracking-normal text-[#FFFFFF] opacity-80 tabular-nums mt-[12px]"
                    >
                        Ask us before your doubts turn into regrets.
                    </p>

                    {/* Newsletter Form */}
                    <div
                        className="flex items-center justify-start w-full gap-[8px] lg:gap-[10px] max-w-[478px] h-auto mt-[24px] opacity-100"
                    >
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="w-[197px] h-[40px] lg:w-[342px] lg:h-[44px] rounded-[12px] border-[0.5px] border-[#A7A7A7] px-[20px] py-[5px] bg-transparent text-[#FFFFFF] font-outfit text-[14px] outline-none opacity-100"
                        />
                        <button
                            className="w-[110px] h-[40px] lg:w-[126px] lg:h-[44px] rounded-[12px] border border-transparent px-[20px] py-[15px] cursor-pointer opacity-100 flex items-center justify-center gap-[10px] bg-origin-border bg-clip-padding"
                            style={{
                                backgroundImage: `
                                    radial-gradient(71.34% 136.68% at 50% 14.3%, #927DF7 0%, #694AFF 100%),
                                    linear-gradient(110.55deg, #CDA4FF 12.15%, #8831F2 115.98%)
                                `,
                                backgroundClip: "padding-box, border-box",
                                backgroundOrigin: "padding-box, border-box",
                            }}
                        >
                            <span className="font-outfit font-semibold text-[14px] leading-none text-center text-[#FFFFFF] whitespace-nowrap">
                                Guide Me
                            </span>
                        </button>
                    </div>

                    {/* Navigation Links (Desktop only) */}
                    <div
                        className="hidden lg:flex w-full max-w-[400px] h-auto justify-between items-center ml-[30px] mt-[clamp(40px,6vw,80px)] opacity-100 flex-wrap gap-[10px]"
                    >
                        {["Home", "Projects", "Blog", "Courses", "Contact US"].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className={`font-outfit font-bold text-[clamp(12px,1.1vw,15px)] leading-none tracking-normal no-underline h-[15px] flex items-center opacity-100 transition-colors hover:text-white ${link === "Home" ? "text-[#FFFFFF]" : "text-[#646464]"}`}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right: Logo (Desktop only) */}
                <div className="hidden md:block mt-6 md:mt-0 flex-shrink-0">
                    <Image
                        src="/photos/schools/tech/tech-logo-PW%201%20copy.png"
                        alt="Tech School Logo"
                        width={260}
                        height={46}
                        className="object-contain w-[200px] lg:w-[260px] h-auto"
                    />
                </div>
            </div>

            {/* Bottom Gradient */}
            <img
                src="/photos/schools/tech/footer-gradient.svg"
                alt=""
                className="absolute bottom-0 left-0 w-full h-auto pointer-events-none z-0 mt-[-500px] object-cover"
                style={{ maxHeight: "500px", objectFit: "cover" }}
            />

            {/* Bottom Section: Addresses & Socials */}
            <div
                className="flex flex-col lg:flex-row justify-between items-start mx-auto z-10 relative w-full gap-10 lg:gap-8 max-w-[1360px] mt-[clamp(40px,6vw,60px)]"
            >
                {/* Left Side: Addresses */}
                <div
                    className="flex flex-col sm:flex-row flex-wrap w-full lg:w-auto gap-[clamp(40px,6vw,80px)]"
                >
                    {/* Kozhikode Address & Phone */}
                    <div className="flex flex-col gap-[clamp(16px,2vw,24px)]">
                        <div className="flex flex-col gap-[clamp(8px,1vw,12px)]">
                            <h3 className="font-outfit font-medium text-[clamp(14px,1.2vw,18px)] leading-[1.2] tracking-[-0.02em] text-[#A7A7A7]">
                                Address (Kozhikode)
                            </h3>
                            <p className="font-outfit font-medium text-[clamp(12px,1vw,16px)] text-[#FFFFFF] leading-[1.4] tracking-normal max-w-[239px]">
                                HACA (Haris&Co. Academy),<br />
                                Second Floor, 4 Wing Avenue,<br />
                                Panniyankara, Kozhikode,<br />
                                Kerala 673003
                            </p>
                        </div>

                        <div className="flex flex-col gap-[clamp(8px,1vw,12px)]">
                            <h3 className="font-outfit font-medium text-[clamp(14px,1.2vw,18px)] leading-[1.2] tracking-[-0.02em] text-[#A7A7A7]">
                                Phone Number
                            </h3>
                            <p className="font-outfit font-medium text-[clamp(12px,1vw,16px)] text-[#FFFFFF] leading-[1.2] tracking-normal">
                                +91 08031332470
                            </p>
                        </div>
                    </div>

                    {/* Dubai Address & Phone */}
                    <div className="flex flex-col gap-[clamp(16px,2vw,24px)]">
                        <div className="flex flex-col gap-[clamp(8px,1vw,12px)]">
                            <h3 className="font-outfit font-medium text-[clamp(14px,1.2vw,18px)] leading-[1.2] tracking-[-0.02em] text-[#A7A7A7]">
                                Address (Dubai)
                            </h3>
                            <p className="font-outfit font-medium text-[clamp(12px,1vw,16px)] text-[#FFFFFF] leading-[1.4] tracking-normal max-w-[301px]">
                                HACA (Haris&Co. Academy)<br />
                                Abdullah Kamber Business Centre<br />
                                Near Aboobacker Siddeeque Metro Station, Deira, Dubai, UAE
                            </p>
                        </div>

                        <div className="flex flex-col gap-[clamp(6px,1vw,10px)]">
                            <h3 className="font-outfit font-medium text-[clamp(14px,1.2vw,18px)] leading-[1.2] tracking-[-0.02em] text-[#A7A7A7]">
                                Phone Number
                            </h3>
                            <p className="font-outfit font-medium text-[clamp(12px,1vw,16px)] text-[#FFFFFF] leading-[1.2] tracking-normal">
                                +971 52 230 1767
                            </p>
                        </div>
                    </div>

                    {/* Navigation Links after Address (Mobile only) */}
                    <div
                        className="flex lg:hidden w-full max-w-[400px] h-auto justify-between items-center mt-[clamp(10px,1.5vw,16px)] opacity-100 flex-wrap gap-[10px]"
                    >
                        {["Home", "Projects", "Blog", "Courses", "Contact US"].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className={`font-outfit font-bold text-[clamp(12px,1.1vw,15px)] leading-none tracking-normal no-underline h-[15px] flex items-center opacity-100 transition-colors hover:text-white ${link === "Home" ? "text-[#FFFFFF]" : "text-[#646464]"}`}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Side: Socials */}
                <div
                    className="flex flex-col items-start lg:items-end flex-shrink-0 gap-[clamp(16px,2.5vw,32px)]"
                >
                    {/* Icons row */}
                    <div
                        className="flex items-center h-[clamp(30px,4vw,59px)] gap-[clamp(12px,1.5vw,24px)]"
                    >
                        <img src="/photos/schools/tech/InstaIcon_footer.svg" alt="Instagram" className="h-[100%] w-auto" />
                        <img src="/photos/schools/tech/FBIcon_footer.svg" alt="Facebook" className="h-[100%] w-auto" />
                        <img src="/photos/schools/tech/YutubIcon_footer.svg" alt="Youtube" className="h-[100%] w-auto" />
                    </div>

                    {/* Subtitle */}
                    <p className="font-outfit font-normal text-[clamp(11px,1vw,14px)] leading-[1.4] tracking-normal tabular-nums text-[#FFFFFF] opacity-100 max-w-[238px] text-left lg:text-right">
                        Transforming Students into Intelligent tech world
                    </p>

                    {/* Copyright */}
                    <p className="font-outfit font-medium text-[clamp(10px,0.8vw,12px)] leading-[1.4] tracking-normal tabular-nums text-[#A7A7A7] opacity-50 max-w-[282px] text-left lg:text-right">
                        © 2026 — Copyright HACA
                    </p>
                </div>
            </div>
        </footer>
    );
}
