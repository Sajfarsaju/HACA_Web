"use client";

import Link from "next/link";

const PARTICLES: { top: string; left: string; delay: string; dur: string; size: number; color: string }[] = [
    { top: "10%",  left: "7%",  delay: "0.0s", dur: "3.4s", size: 5, color: "#536EFF" },
    { top: "16%",  left: "87%", delay: "0.5s", dur: "2.9s", size: 4, color: "#7C6BFF" },
    { top: "72%",  left: "6%",  delay: "0.9s", dur: "3.6s", size: 6, color: "#2592FF" },
    { top: "80%",  left: "91%", delay: "0.3s", dur: "2.7s", size: 4, color: "#536EFF" },
    { top: "44%",  left: "3%",  delay: "1.2s", dur: "3.1s", size: 3, color: "#7C6BFF" },
    { top: "56%",  left: "95%", delay: "0.7s", dur: "3.5s", size: 5, color: "#2592FF" },
    { top: "30%",  left: "93%", delay: "1.6s", dur: "3.0s", size: 3, color: "#536EFF" },
    { top: "87%",  left: "44%", delay: "1.0s", dur: "3.2s", size: 4, color: "#7C6BFF" },
    { top: "7%",   left: "52%", delay: "1.4s", dur: "2.8s", size: 3, color: "#2592FF" },
    { top: "93%",  left: "22%", delay: "0.6s", dur: "3.3s", size: 5, color: "#536EFF" },
];

export default function ThankYouPage() {
    return (
        <>
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes scaleIn {
                    0%   { opacity: 0; transform: scale(0.4); }
                    65%  { transform: scale(1.1); }
                    100% { opacity: 1; transform: scale(1); }
                }
                @keyframes drawCheck {
                    from { stroke-dashoffset: 90; }
                    to   { stroke-dashoffset: 0; }
                }
                @keyframes pulseRing {
                    0%   { transform: scale(0.85); opacity: 0.7; }
                    100% { transform: scale(1.9);  opacity: 0; }
                }
                @keyframes orbitGlow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(83,110,255,0); }
                    50%      { box-shadow: 0 0 56px 18px rgba(83,110,255,0.13); }
                }
                @keyframes particleFloat {
                    0%   { opacity: 0; transform: translateY(0)    scale(0) rotate(0deg);   }
                    15%  { opacity: 1; transform: translateY(-18px) scale(1) rotate(72deg);  }
                    80%  { opacity: 0.5; transform: translateY(-90px) scale(0.7) rotate(288deg); }
                    100% { opacity: 0; transform: translateY(-130px) scale(0) rotate(360deg); }
                }
                @keyframes btnShimmer {
                    0%   { background-position: -300% center; }
                    100% { background-position:  300% center; }
                }
                @keyframes tagPulse {
                    0%, 100% { opacity: 0.7; }
                    50%      { opacity: 1; }
                }

                .ck-circle { animation: scaleIn 0.65s cubic-bezier(0.34,1.56,0.64,1) both; animation-delay: 0.15s; }
                .ck-path   { stroke-dasharray: 90; stroke-dashoffset: 90; animation: drawCheck 0.55s ease both; animation-delay: 0.7s; }
                .ring-1    { animation: pulseRing 2.4s ease-out infinite; animation-delay: 1.0s; }
                .ring-2    { animation: pulseRing 2.4s ease-out infinite; animation-delay: 1.5s; }
                .fu-1      { animation: fadeInUp 0.65s ease both; animation-delay: 0.55s; }
                .fu-2      { animation: fadeInUp 0.65s ease both; animation-delay: 0.85s; }
                .fu-3      { animation: fadeInUp 0.65s ease both; animation-delay: 1.15s; }
                .particle  { animation: particleFloat ease-in-out infinite; }
                .dot-pulse { animation: tagPulse 1.5s ease-in-out infinite; }
            `}</style>

            <main className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden">

                {/* Dot grid */}
                <div
                    className="absolute inset-0 -z-10 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                    }}
                />

                {/* Ambient blobs — indigo/blue matching home page gradient */}
                <div
                    className="absolute inset-0 -z-10 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse 70% 45% at 50% -10%, rgba(83,110,255,0.10) 0%, transparent 70%)," +
                            "radial-gradient(ellipse 55% 40% at 12% 80%, rgba(124,107,255,0.08) 0%, transparent 65%)," +
                            "radial-gradient(ellipse 50% 35% at 88% 75%, rgba(37,146,255,0.07) 0%, transparent 60%)",
                    }}
                />

                {/* Floating particles */}
                {PARTICLES.map((p, i) => (
                    <span
                        key={i}
                        className="particle absolute pointer-events-none rounded-full"
                        style={{
                            top: p.top,
                            left: p.left,
                            width: p.size,
                            height: p.size,
                            background: p.color,
                            animationDelay: p.delay,
                            animationDuration: p.dur,
                        }}
                    />
                ))}

                {/* ── Content ── */}
                <div className="relative flex flex-col items-center text-center gap-7 w-full max-w-[500px]">

                    {/* Animated checkmark */}
                    <div className="ck-circle relative flex items-center justify-center">
                        <span className="ring-1 absolute inset-0 rounded-full border border-[#536EFF]/35" />
                        <span className="ring-2 absolute inset-0 rounded-full border border-[#536EFF]/20" />

                        <div
                            className="relative flex items-center justify-center w-[108px] h-[108px] rounded-full"
                            style={{
                                background:
                                    "radial-gradient(circle at 35% 35%, rgba(83,110,255,0.20) 0%, rgba(83,110,255,0.06) 100%)",
                                border: "1.5px solid rgba(83,110,255,0.40)",
                                animation: "orbitGlow 3.5s ease-in-out infinite",
                                animationDelay: "1s",
                            }}
                        >
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path
                                    className="ck-path"
                                    d="M11 24L20 33L37 15"
                                    stroke="#536EFF"
                                    strokeWidth="3.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="fu-1">
                        <span
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-outfit font-semibold tracking-[0.12em] uppercase"
                            style={{
                                background: "rgba(83,110,255,0.10)",
                                border: "1px solid rgba(83,110,255,0.28)",
                                color: "#7C8FFF",
                            }}
                        >
                            <span className="dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#536EFF]" />
                            Enquiry Received
                        </span>
                    </div>

                    {/* Headline + subtext */}
                    <div className="fu-2 flex flex-col gap-3">
                        <h1
                            className="font-rethink font-bold text-white"
                            style={{
                                fontSize: "clamp(44px, 9vw, 68px)",
                                lineHeight: "1.05",
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Thank You!
                        </h1>
                        <p
                            className="font-outfit mx-auto"
                            style={{
                                fontSize: "clamp(14px, 2vw, 17px)",
                                lineHeight: "1.65",
                                maxWidth: 380,
                                color: "#A7ADBE",
                            }}
                        >
                            Thank you for reaching out. Our team will contact you shortly.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="fu-3">
                        <Link
                            href="/"
                            className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full font-outfit font-semibold text-white text-[15px] overflow-hidden transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
                            style={{
                                background: "rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.14)",
                                backdropFilter: "blur(12px)",
                                boxShadow:
                                    "0 2px 24px rgba(83,110,255,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
                            }}
                        >
                            {/* Hover indigo fill */}
                            <span
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-full"
                                style={{
                                    background: "linear-gradient(135deg, #536EFF, #7C6BFF)",
                                }}
                            />
                            <span className="relative z-10 flex items-center gap-2">
                                <svg
                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transition-transform duration-300 group-hover:-translate-x-1"
                                    aria-hidden
                                >
                                    <path d="M10 3L5 8L10 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Back to Home
                            </span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
