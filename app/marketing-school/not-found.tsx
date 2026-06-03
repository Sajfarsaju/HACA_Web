import Link from "next/link";

export default function MarketingSchoolNotFound() {
    return (
        <>
            <style>{`
                @keyframes ms-float {
                    0%, 100% { transform: translateY(0px); }
                    50%       { transform: translateY(-10px); }
                }
                @keyframes ms-fadein {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes ms-pulse-ring {
                    0%   { transform: translate(-50%, -50%) scale(0.8); opacity: 0.5; }
                    100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
                }
                .ms-num  { animation: ms-float 5s ease-in-out infinite; }
                .ms-body { animation: ms-fadein 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
                .ms-ring-1 {
                    position: absolute; left: 50%; top: 50%;
                    width: 380px; height: 380px; border-radius: 50%;
                    border: 1.5px solid rgba(37,99,235,0.15);
                    animation: ms-pulse-ring 3s ease-out infinite;
                }
                .ms-ring-2 {
                    position: absolute; left: 50%; top: 50%;
                    width: 380px; height: 380px; border-radius: 50%;
                    border: 1.5px solid rgba(37,99,235,0.15);
                    animation: ms-pulse-ring 3s ease-out 1.5s infinite;
                }
                .ms-btn {
                    display: inline-flex; align-items: center; justify-content: center;
                    height: 52px; border-radius: 8px; padding: 0 32px;
                    background: #2563EB; color: #ffffff;
                    font-size: 15px; font-weight: 700; text-decoration: none;
                    transition: transform 0.22s ease, box-shadow 0.22s ease;
                }
                .ms-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 12px 36px rgba(37,99,235,0.38);
                }
                .ms-btn-ghost {
                    display: inline-flex; align-items: center; justify-content: center;
                    height: 52px; border-radius: 8px; padding: 0 28px;
                    border: 1.5px solid rgba(0,0,0,0.15); color: #111;
                    font-size: 15px; font-weight: 600; text-decoration: none;
                    transition: transform 0.22s ease, background 0.22s ease;
                }
                .ms-btn-ghost:hover { transform: translateY(-2px); background: rgba(0,0,0,0.04); }
            `}</style>

            <div
                className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-white px-6 text-center"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
                {/* Pulsing rings */}
                <div className="ms-ring-1" aria-hidden />
                <div className="ms-ring-2" aria-hidden />

                {/* Subtle bg gradient */}
                <div
                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        width: 500, height: 500,
                        background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
                    }}
                    aria-hidden
                />

                {/* 404 */}
                <div className="ms-num relative select-none">
                    <span
                        className="block font-bold leading-none"
                        style={{
                            fontSize: "clamp(100px, 18vw, 210px)",
                            letterSpacing: "-0.04em",
                            color: "#2563EB",
                            opacity: 0.10,
                        }}
                    >
                        404
                    </span>
                </div>

                {/* Body */}
                <div className="ms-body relative z-10 -mt-4 flex flex-col items-center gap-4">
                    <div
                        className="mb-1 inline-block rounded-full px-4 py-1 text-[12px] font-bold uppercase tracking-widest"
                        style={{ backgroundColor: "rgba(37,99,235,0.08)", color: "#2563EB" }}
                    >
                        Marketing School
                    </div>
                    <h1 className="m-0 text-[26px] font-bold leading-tight text-black lg:text-[38px]">
                        Page Not Found
                    </h1>
                    <p className="m-0 max-w-[360px] text-[15px] leading-relaxed text-black/55 lg:text-[16px]">
                        This page doesn&apos;t exist or has been moved. Let&apos;s take you back.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                        <Link href="/marketing-school" className="ms-btn">
                            Back to Marketing School
                        </Link>
                        <Link href="/" className="ms-btn-ghost">
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
