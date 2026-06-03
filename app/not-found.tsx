import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <style>{`
                @keyframes nf-float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                @keyframes nf-glow {
                    0%, 100% { opacity: 0.18; }
                    50% { opacity: 0.32; }
                }
                @keyframes nf-fadein {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .nf-num   { animation: nf-float 5s ease-in-out infinite; }
                .nf-orb   { animation: nf-glow 4s ease-in-out infinite; }
                .nf-body  { animation: nf-fadein 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
                .nf-btn-primary {
                    display: inline-flex; align-items: center; justify-content: center;
                    height: 50px; border-radius: 100px; padding: 0 32px;
                    background: #ffffff; color: #000210;
                    font-size: 15px; font-weight: 700; text-decoration: none;
                    transition: transform 0.22s ease, box-shadow 0.22s ease;
                }
                .nf-btn-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 12px 36px rgba(76,117,255,0.35);
                }
                .nf-dots {
                    background-image: radial-gradient(circle, rgba(76,117,255,0.18) 1px, transparent 1px);
                    background-size: 36px 36px;
                }
            `}</style>

            <div
                className="nf-dots relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#000210] px-6 text-center"
                style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
            >
                {/* Radial glow */}
                <div
                    className="nf-orb pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        width: 560, height: 560,
                        background: "radial-gradient(circle, rgba(76,117,255,0.22) 0%, transparent 70%)",
                    }}
                />

                {/* 404 */}
                <div className="nf-num relative select-none">
                    <span
                        className="block font-bold leading-none text-white"
                        style={{ fontSize: "clamp(100px, 18vw, 210px)", letterSpacing: "-0.04em", opacity: 0.92 }}
                    >
                        404
                    </span>
                    {/* Reflection */}
                    <span
                        className="pointer-events-none block font-bold leading-none text-white"
                        style={{
                            fontSize: "clamp(100px, 18vw, 210px)", letterSpacing: "-0.04em",
                            opacity: 0.06, transform: "scaleY(-1) translateY(-4px)",
                            maskImage: "linear-gradient(to bottom, black 0%, transparent 60%)",
                            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 60%)",
                        }}
                        aria-hidden
                    >
                        404
                    </span>
                </div>

                {/* Body */}
                <div className="nf-body relative z-10 -mt-2 flex flex-col items-center gap-4">
                    <h1 className="m-0 text-[26px] font-bold leading-tight text-white lg:text-[38px]">
                        Page Not Found
                    </h1>
                    <p className="m-0 max-w-[360px] text-[15px] leading-relaxed text-[#A7ADBE] lg:text-[16px]">
                        Looks like this page took a wrong turn. Let&apos;s get you back.
                    </p>
                    <div className="mt-4">
                        <Link href="/" className="nf-btn-primary">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
