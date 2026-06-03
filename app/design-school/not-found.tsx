import Link from "next/link";

const vc = '"VC Nudge Trial Normal", sans-serif';

export default function DesignSchoolNotFound() {
    return (
        <>
            <style>{`
                @keyframes ds-float {
                    0%, 100% { transform: translateY(0px) rotate(-1deg); }
                    50%       { transform: translateY(-14px) rotate(1deg); }
                }
                @keyframes ds-fadein {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes ds-spin-slow {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                .ds-num    { animation: ds-float 5s ease-in-out infinite; }
                .ds-body   { animation: ds-fadein 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
                .ds-ring   { animation: ds-spin-slow 18s linear infinite; }
                .ds-btn {
                    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
                    height: 54px; border-radius: 999px; padding: 0 36px;
                    background: #FF5C00; color: #ffffff;
                    font-size: 16px; font-weight: 500; text-decoration: none;
                    transition: transform 0.22s ease, box-shadow 0.22s ease;
                }
                .ds-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 14px 40px rgba(255,92,0,0.40);
                }
                .ds-btn-ghost {
                    display: inline-flex; align-items: center; justify-content: center;
                    height: 54px; border-radius: 999px; padding: 0 32px;
                    border: 1.5px solid rgba(0,0,0,0.15); color: #0A0A0A;
                    font-size: 15px; font-weight: 500; text-decoration: none;
                    transition: transform 0.22s ease, background 0.22s ease;
                }
                .ds-btn-ghost:hover { transform: translateY(-2px); background: rgba(0,0,0,0.04); }
            `}</style>

            <div
                className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-white px-6 text-center"
                style={{ fontFamily: vc }}
            >
                {/* Decorative spinning ring */}
                <div
                    className="ds-ring pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        width: 480, height: 480,
                        border: "1px solid rgba(255,92,0,0.12)",
                    }}
                    aria-hidden
                />
                <div
                    className="ds-ring pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        width: 340, height: 340,
                        border: "1px dashed rgba(255,92,0,0.18)",
                        animationDirection: "reverse",
                        animationDuration: "12s",
                    }}
                    aria-hidden
                />

                {/* 404 */}
                <div className="ds-num relative select-none">
                    <span
                        className="block font-medium leading-none"
                        style={{
                            fontSize: "clamp(100px, 18vw, 210px)",
                            letterSpacing: "-0.04em",
                            color: "#FF5C00",
                            opacity: 0.15,
                        }}
                    >
                        404
                    </span>
                </div>

                {/* Body */}
                <div className="ds-body relative z-10 -mt-4 flex flex-col items-center gap-4">
                    <div
                        className="mb-1 inline-block rounded-full px-4 py-1 text-[13px] font-medium uppercase tracking-widest"
                        style={{ backgroundColor: "rgba(255,92,0,0.08)", color: "#FF5C00" }}
                    >
                        Design School
                    </div>
                    <h1
                        className="m-0 text-[26px] font-medium leading-tight text-black lg:text-[38px]"
                        style={{ letterSpacing: "-0.02em" }}
                    >
                        Page Not Found
                    </h1>
                    <p className="m-0 max-w-[360px] text-[15px] leading-relaxed lg:text-[16px]" style={{ color: "#0A0A0AB2" }}>
                        This page doesn&apos;t exist or has been moved. Head back and keep creating.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                        <Link href="/design-school" className="ds-btn">
                            Back to Design School →
                        </Link>
                        <Link href="/" className="ds-btn-ghost">
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
