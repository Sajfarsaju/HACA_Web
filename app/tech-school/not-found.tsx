import Link from "next/link";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

export default function TechSchoolNotFound() {
    return (
        <>
            <style>{`
                @keyframes ts-glitch {
                    0%   { clip-path: inset(0 0 98% 0); transform: translate(-3px, 0); }
                    10%  { clip-path: inset(30% 0 50% 0); transform: translate(3px, 0); }
                    20%  { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 0); }
                    30%  { clip-path: inset(10% 0 80% 0); transform: translate(2px, 0); }
                    40%  { clip-path: inset(50% 0 30% 0); transform: translate(-3px, 0); }
                    50%  { clip-path: inset(0 0 0 0);      transform: translate(0, 0); }
                    100% { clip-path: inset(0 0 0 0);      transform: translate(0, 0); }
                }
                @keyframes ts-fadein {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes ts-scanline {
                    0%   { top: -10%; }
                    100% { top: 110%; }
                }
                @keyframes ts-border-glow {
                    0%, 100% { box-shadow: 0 0 0px rgba(255,86,0,0); }
                    50%      { box-shadow: 0 0 24px rgba(255,86,0,0.35), 0 0 60px rgba(105,74,255,0.2); }
                }
                .ts-glitch-layer {
                    position: absolute; inset: 0;
                    animation: ts-glitch 6s steps(1) infinite;
                    background: linear-gradient(130deg, #FF5600 30%, #694AFF 80%);
                    -webkit-background-clip: text; background-clip: text;
                    -webkit-text-fill-color: transparent;
                    opacity: 0.6;
                }
                .ts-body   { animation: ts-fadein 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
                .ts-scanline {
                    position: absolute; left: 0; right: 0; height: 2px; pointer-events: none;
                    background: linear-gradient(90deg, transparent, rgba(105,74,255,0.35), transparent);
                    animation: ts-scanline 3.5s linear infinite;
                }
                .ts-btn {
                    display: inline-flex; align-items: center; justify-content: center;
                    height: 50px; border-radius: 10px; padding: 0 28px;
                    background: linear-gradient(130deg, #FF5600 0%, #694AFF 100%);
                    color: #ffffff; font-size: 15px; font-weight: 600; text-decoration: none;
                    transition: transform 0.22s ease, box-shadow 0.22s ease;
                    animation: ts-border-glow 3s ease-in-out infinite;
                }
                .ts-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(105,74,255,0.45); }
                .ts-btn-ghost {
                    display: inline-flex; align-items: center; justify-content: center;
                    height: 50px; border-radius: 10px; padding: 0 28px;
                    border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.06);
                    color: #ffffff; font-size: 15px; font-weight: 600; text-decoration: none;
                    transition: transform 0.22s ease, background 0.22s ease;
                }
                .ts-btn-ghost:hover { transform: translateY(-2px); background: rgba(255,255,255,0.10); }
                .ts-grid {
                    background-image:
                        linear-gradient(rgba(105,74,255,0.07) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(105,74,255,0.07) 1px, transparent 1px);
                    background-size: 48px 48px;
                }
            `}</style>

            <div
                className={`${outfit.className} ts-grid relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#000210] px-6 text-center`}
            >
                {/* Scan line */}
                <div className="ts-scanline" aria-hidden />

                {/* Glow orb */}
                <div
                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        width: 600, height: 600,
                        background: "radial-gradient(circle, rgba(105,74,255,0.14) 0%, rgba(255,86,0,0.06) 50%, transparent 70%)",
                    }}
                    aria-hidden
                />

                {/* 404 with glitch */}
                <div className="relative select-none" aria-hidden>
                    <span
                        className="block font-bold leading-none"
                        style={{
                            fontSize: "clamp(100px, 18vw, 210px)",
                            letterSpacing: "-0.04em",
                            background: "linear-gradient(130deg, #FF5600 30%, #694AFF 80%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            opacity: 0.22,
                        }}
                    >
                        404
                    </span>
                    <span
                        className="ts-glitch-layer font-bold leading-none"
                        style={{ fontSize: "clamp(100px, 18vw, 210px)", letterSpacing: "-0.04em" }}
                        aria-hidden
                    >
                        404
                    </span>
                </div>

                {/* Body */}
                <div className="ts-body relative z-10 -mt-2 flex flex-col items-center gap-4">
                    <div
                        className="mb-1 inline-block rounded-full border px-4 py-1 text-[12px] font-semibold uppercase tracking-widest"
                        style={{ borderColor: "rgba(105,74,255,0.4)", color: "#A7A7A7" }}
                    >
                        Error 404
                    </div>
                    <h1 className="m-0 text-[26px] font-semibold leading-tight tracking-tight text-white lg:text-[38px]">
                        Page Not Found
                    </h1>
                    <p className="m-0 max-w-[360px] text-[15px] leading-relaxed text-[#A7A7A7] lg:text-[16px]">
                        This path doesn&apos;t exist. Rerouting you back to the right track.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                        <Link href="/tech-school" className="ts-btn">
                            Back to Tech School
                        </Link>
                        <Link href="/" className="ts-btn-ghost">
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
