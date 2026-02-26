import Image from "next/image";

export function TechFooter() {
    return (
        <footer
            style={{
                backgroundColor: "#111111",
                minHeight: "700px",
            }}
            className="flex flex-col items-center w-full relative overflow-hidden px-6 pt-2 pb-10 md:px-[40px] md:py-[40px] lg:pb-[100px]"
        >
            {/* Top Section */}
            <div
                className="flex flex-col md:flex-row justify-between items-start mx-auto z-10 relative w-full"
                style={{
                    maxWidth: "1360px",
                    gap: "40px",
                }}
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
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 300,
                            fontSize: "clamp(24px, 4vw, 40px)",
                            lineHeight: "1.2",
                            letterSpacing: "-0.02em",
                            fontVariantNumeric: "lining-nums tabular-nums",
                            color: "#FFFFFF",
                        }}
                        className="w-full max-w-[400px]"
                    >
                        Your Doubts Deserve Answers
                    </h2>

                    <p
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 400,
                            fontSize: "clamp(14px, 1.5vw, 18px)",
                            lineHeight: "1.5",
                            letterSpacing: "0%",
                            fontVariantNumeric: "lining-nums tabular-nums",
                            color: "#FFFFFF",
                            opacity: 0.8,
                            marginTop: "12px",
                        }}
                        className="w-full max-w-[488px]"
                    >
                        Ask us before your doubts turn into regrets.
                    </p>

                    {/* Newsletter Form */}
                    <div
                        className="flex items-center justify-start w-full gap-[8px] lg:gap-[10px]"
                        style={{
                            maxWidth: "478px",
                            height: "auto",
                            marginTop: "24px",
                            opacity: 1,
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Enter your email"
                            style={{
                                borderRadius: "12px",
                                border: "0.5px solid #A7A7A7",
                                padding: "5px 20px",
                                backgroundColor: "transparent",
                                color: "#FFFFFF",
                                fontFamily: "var(--font-outfit)",
                                fontSize: "14px",
                                outline: "none",
                                opacity: 1,
                            }}
                            className="w-[197px] h-[40px] lg:w-[342px] lg:h-[44px]"
                        />
                        <button
                            style={{
                                borderRadius: "12px",
                                border: "1px solid transparent",
                                padding: "15px 20px",
                                backgroundImage: `
                                    radial-gradient(71.34% 136.68% at 50% 14.3%, #927DF7 0%, #694AFF 100%),
                                    linear-gradient(110.55deg, #CDA4FF 12.15%, #8831F2 115.98%)
                                `,
                                backgroundOrigin: "padding-box, border-box",
                                backgroundClip: "padding-box, border-box",
                                cursor: "pointer",
                                opacity: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "10px",
                            }}
                            className="w-[110px] h-[40px] lg:w-[126px] lg:h-[44px]"
                        >
                            <span style={{
                                fontFamily: "var(--font-outfit)",
                                fontWeight: 600,
                                fontSize: "14px",
                                lineHeight: "100%",
                                textAlign: "center",
                                color: "#FFFFFF",
                                whiteSpace: "nowrap",
                            }}>
                                Guide Me
                            </span>
                        </button>
                    </div>

                    {/* Navigation Links (Desktop only) */}
                    <div
                        className="hidden lg:flex"
                        style={{
                            width: "100%",
                            maxWidth: "400px",
                            height: "auto",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginLeft: "30px",
                            marginTop: "clamp(40px, 6vw, 80px)",
                            opacity: 1,
                            flexWrap: "wrap",
                            gap: "10px",
                        }}
                    >
                        {["Home", "Projects", "Blog", "Courses", "Contact US"].map((link) => (
                            <a
                                key={link}
                                href="#"
                                style={{
                                    fontFamily: "var(--font-outfit)",
                                    fontWeight: 700,
                                    fontSize: "clamp(12px, 1.1vw, 15px)",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                    color: link === "Home" ? "#FFFFFF" : "#646464",
                                    textDecoration: "none",
                                    height: "15px",
                                    display: "flex",
                                    alignItems: "center",
                                    opacity: 1,
                                }}
                                className="transition-colors hover:text-white"
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
                className="absolute bottom-0 left-0 w-full h-auto pointer-events-none z-0"
                style={{ maxHeight: "500px", objectFit: "cover" }}
            />

            {/* Bottom Section: Addresses & Socials */}
            <div
                className="flex flex-col lg:flex-row justify-between items-start mx-auto z-10 relative w-full gap-10 lg:gap-8"
                style={{
                    maxWidth: "1360px",
                    marginTop: "clamp(40px, 6vw, 60px)",
                }}
            >
                {/* Left Side: Addresses */}
                <div
                    className="flex flex-col sm:flex-row flex-wrap w-full lg:w-auto"
                    style={{ gap: "clamp(40px, 6vw, 80px)" }}
                >
                    {/* Kozhikode Address & Phone */}
                    <div className="flex flex-col" style={{ gap: "clamp(16px, 2vw, 24px)" }}>
                        <div className="flex flex-col" style={{ gap: "clamp(8px, 1vw, 12px)" }}>
                            <h3 style={{
                                fontFamily: "var(--font-outfit)",
                                fontWeight: 500,
                                fontSize: "clamp(14px, 1.2vw, 18px)",
                                lineHeight: "1.2",
                                letterSpacing: "-0.02em",
                                color: "#A7A7A7",
                            }}>
                                Address (Kozhikode)
                            </h3>
                            <p style={{
                                fontFamily: "var(--font-outfit)",
                                fontWeight: 500,
                                fontSize: "clamp(12px, 1vw, 16px)",
                                color: "#FFFFFF",
                                lineHeight: "1.4",
                                letterSpacing: "0%",
                                maxWidth: "239px",
                            }}>
                                HACA (Haris&Co. Academy),<br />
                                Second Floor, 4 Wing Avenue,<br />
                                Panniyankara, Kozhikode,<br />
                                Kerala 673003
                            </p>
                        </div>

                        <div className="flex flex-col" style={{ gap: "clamp(8px, 1vw, 12px)" }}>
                            <h3 style={{
                                fontFamily: "var(--font-outfit)",
                                fontWeight: 500,
                                fontSize: "clamp(14px, 1.2vw, 18px)",
                                lineHeight: "1.2",
                                letterSpacing: "-0.02em",
                                color: "#A7A7A7",
                            }}>
                                Phone Number
                            </h3>
                            <p style={{
                                fontFamily: "var(--font-outfit)",
                                fontWeight: 500,
                                fontSize: "clamp(12px, 1vw, 16px)",
                                color: "#FFFFFF",
                                lineHeight: "1.2",
                                letterSpacing: "0%",
                            }}>
                                +91 08031332470
                            </p>
                        </div>
                    </div>

                    {/* Dubai Address & Phone */}
                    <div className="flex flex-col" style={{ gap: "clamp(16px, 2vw, 24px)" }}>
                        <div className="flex flex-col" style={{ gap: "clamp(8px, 1vw, 12px)" }}>
                            <h3 style={{
                                fontFamily: "var(--font-outfit)",
                                fontWeight: 500,
                                fontSize: "clamp(14px, 1.2vw, 18px)",
                                lineHeight: "1.2",
                                letterSpacing: "-0.02em",
                                color: "#A7A7A7",
                            }}>
                                Address (Dubai)
                            </h3>
                            <p style={{
                                fontFamily: "var(--font-outfit)",
                                fontWeight: 500,
                                fontSize: "clamp(12px, 1vw, 16px)",
                                color: "#FFFFFF",
                                lineHeight: "1.4",
                                letterSpacing: "0%",
                                maxWidth: "301px",
                            }}>
                                HACA (Haris&Co. Academy)<br />
                                Abdullah Kamber Business Centre<br />
                                Near Aboobacker Siddeeque Metro Station, Deira, Dubai, UAE
                            </p>
                        </div>

                        <div className="flex flex-col" style={{ gap: "clamp(6px, 1vw, 10px)" }}>
                            <h3 style={{
                                fontFamily: "var(--font-outfit)",
                                fontWeight: 500,
                                fontSize: "clamp(14px, 1.2vw, 18px)",
                                lineHeight: "1.2",
                                letterSpacing: "-0.02em",
                                color: "#A7A7A7",
                            }}>
                                Phone Number
                            </h3>
                            <p style={{
                                fontFamily: "var(--font-outfit)",
                                fontWeight: 500,
                                fontSize: "clamp(12px, 1vw, 16px)",
                                color: "#FFFFFF",
                                lineHeight: "1.2",
                                letterSpacing: "0%",
                            }}>
                                +971 52 230 1767
                            </p>
                        </div>
                    </div>

                    {/* Navigation Links after Address (Mobile only) */}
                    <div
                        className="flex lg:hidden"
                        style={{
                            width: "100%",
                            maxWidth: "400px",
                            height: "auto",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "clamp(10px, 1.5vw, 16px)",
                            opacity: 1,
                            flexWrap: "wrap",
                            gap: "10px",
                        }}
                    >
                        {["Home", "Projects", "Blog", "Courses", "Contact US"].map((link) => (
                            <a
                                key={link}
                                href="#"
                                style={{
                                    fontFamily: "var(--font-outfit)",
                                    fontWeight: 700,
                                    fontSize: "clamp(12px, 1.1vw, 15px)",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                    color: link === "Home" ? "#FFFFFF" : "#646464",
                                    textDecoration: "none",
                                    height: "15px",
                                    display: "flex",
                                    alignItems: "center",
                                    opacity: 1,
                                }}
                                className="transition-colors hover:text-white"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Side: Socials */}
                <div
                    className="flex flex-col items-start lg:items-end flex-shrink-0"
                    style={{ gap: "clamp(16px, 2.5vw, 32px)" }}
                >
                    {/* Icons row */}
                    <div
                        className="flex items-center"
                        style={{
                            height: "clamp(30px, 4vw, 59px)",
                            gap: "clamp(12px, 1.5vw, 24px)",
                        }}
                    >
                        <img src="/photos/schools/tech/InstaIcon_footer.svg" alt="Instagram" style={{ height: "100%", width: "auto" }} />
                        <img src="/photos/schools/tech/FBIcon_footer.svg" alt="Facebook" style={{ height: "100%", width: "auto" }} />
                        <img src="/photos/schools/tech/YutubIcon_footer.svg" alt="Youtube" style={{ height: "100%", width: "auto" }} />
                    </div>

                    {/* Subtitle */}
                    <p style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 400,
                        fontSize: "clamp(11px, 1vw, 14px)",
                        lineHeight: "1.4",
                        letterSpacing: "0%",
                        fontVariantNumeric: "lining-nums tabular-nums",
                        color: "#FFFFFF",
                        opacity: 1,
                        maxWidth: "238px",
                    }}
                        className="text-left lg:text-right"
                    >
                        Transforming Students into Intelligent tech world
                    </p>

                    {/* Copyright */}
                    <p style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 500,
                        fontSize: "clamp(10px, 0.8vw, 12px)",
                        lineHeight: "1.4",
                        letterSpacing: "0%",
                        fontVariantNumeric: "lining-nums tabular-nums",
                        color: "#A7A7A7",
                        opacity: 0.5,
                        maxWidth: "282px",
                    }}
                        className="text-left lg:text-right"
                    >
                        © 2026 — Copyright HACA
                    </p>
                </div>
            </div>
        </footer >
    );
}
