/**
 * TechPageGradientBg
 * Static purple + orange gradient — no animation, no cursor interaction.
 * Smooth top/bottom fade via linear mask only (no side clipping).
 */
export function TechPageGradientBg() {
    return (
        <div
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
            style={{
                maskImage:
                    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 6%, rgba(0,0,0,0.3) 13%, rgba(0,0,0,0.55) 20%, rgba(0,0,0,0.78) 28%, black 38%, black 60%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.6) 78%, rgba(0,0,0,0.3) 87%, rgba(0,0,0,0.1) 94%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 6%, rgba(0,0,0,0.3) 13%, rgba(0,0,0,0.55) 20%, rgba(0,0,0,0.78) 28%, black 38%, black 60%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.6) 78%, rgba(0,0,0,0.3) 87%, rgba(0,0,0,0.1) 94%, transparent 100%)",
            }}
        >
            {/* ── Purple ellipse — desktop ── */}
            <div
                className="max-md:hidden absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 85% 52% at 50% 44%, rgba(132,0,255,0.62) 0%, rgba(132,0,255,0.28) 38%, rgba(132,0,255,0.08) 65%, transparent 100%)",
                }}
            />

            {/* ── Orange accent — desktop ── */}
            <div
                className="max-md:hidden absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 55% 30% at 50% 22%, rgba(255,86,0,0.38) 0%, rgba(105,74,255,0.18) 45%, transparent 100%)",
                    filter: "blur(40px)",
                }}
            />

            {/* ── Purple ellipse — mobile ── */}
            <div
                className="md:hidden absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 120% 62% at 50% 46%, rgba(132,0,255,0.72) 0%, rgba(132,0,255,0.38) 35%, rgba(132,0,255,0.12) 62%, transparent 100%)",
                }}
            />

            {/* ── Orange accent — mobile ── */}
            <div
                className="md:hidden absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 90% 32% at 50% 28%, rgba(255,86,0,0.48) 0%, rgba(105,74,255,0.22) 45%, transparent 100%)",
                    filter: "blur(24px)",
                }}
            />
        </div>
    );
}
