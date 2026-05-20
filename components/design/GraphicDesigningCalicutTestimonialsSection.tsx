"use client";

import React, { useState, useEffect, useRef } from "react";

const vc = '"VC Nudge Trial Normal", sans-serif';
const CARD_BG = "#8F56FF";
const BTN_BG = "#FF5C00";

/* ── 3-D coin-flip CSS ───────────────────────────────────────────────────────
   .flip-stage: shared perspective for both faces (same vanishing point).
   .flip-stage must NOT have overflow:hidden — that would flatten 3D in some
   browsers.  Rounded-corner clipping is handled by overflow:hidden on each
   individual card face instead.

   Exit  0→-90deg: current card spins away (becomes edge-on = invisible).
   Enter 90→0deg:  new card was "behind", spins into view.
   0.22s delay on enter = new card only starts after old card is fully edge-on.
────────────────────────────────────────────────────────────────────────────── */
const ANIM_CSS = `
.flip-stage { perspective: 1100px; }

@keyframes coin-exit-fwd  { from{transform:rotateX(0deg)}   to{transform:rotateX(-90deg)} }
@keyframes coin-enter-fwd { from{transform:rotateX(90deg)}  to{transform:rotateX(0deg)}   }
@keyframes coin-exit-bwd  { from{transform:rotateX(0deg)}   to{transform:rotateX(90deg)}  }
@keyframes coin-enter-bwd { from{transform:rotateX(-90deg)} to{transform:rotateX(0deg)}   }

.coin-exit-fwd  { animation: coin-exit-fwd  0.24s ease-in  forwards;   transform-origin:center center; }
.coin-enter-fwd { animation: coin-enter-fwd 0.26s ease-out 0.22s both; transform-origin:center center; }
.coin-exit-bwd  { animation: coin-exit-bwd  0.24s ease-in  forwards;   transform-origin:center center; }
.coin-enter-bwd { animation: coin-enter-bwd 0.26s ease-out 0.22s both; transform-origin:center center; }
`;

type Testimonial = { id: string; text: string; name: string; role: string; imageSrc: string };

const TESTIMONIALS: Testimonial[] = [
    {
        id: "t1",
        text: "I'm truly grateful to HACA Design School for the learning, guidance, and support I received throughout my journey. The mentors were patient, encouraging, and always ready to help, which made the learning process comfortable and motivating. The practical training and portfolio-focused approach helped me grow not only in skills but also in confidence. Thanks to the support and direction from HACA, I'm happy to say that I've been placed in a company after completing my course. Thank you, HACA Design School, for being a strong foundation for my career. I'll always appreciate the role you played in my journey.",
        name: "Muhammed Anas",
        role: "Video Editor",
        imageSrc: "/photos/schools/design/seo/muhammed-anas.webp",
    },
    {
        id: "t2",
        text: "HACA Design School changed the way I think about design. The structured curriculum and hands-on projects helped me build a strong portfolio in just a few months. The mentors are industry professionals who genuinely care about your growth. I'm now working as a graphic designer at a top agency, and I couldn't have done it without HACA.",
        name: "Fathima Nizar",
        role: "Graphic Designer",
        imageSrc: "/photos/schools/design/seo/student-2.webp",
    },
    {
        id: "t3",
        text: "Joining HACA was one of the best decisions I've made. The course covers everything from fundamentals to advanced design tools, and the placement support is outstanding. The community here is supportive and inspiring. I highly recommend HACA to anyone looking to start a creative career in design.",
        name: "Arjun Krishnan",
        role: "UI/UX Designer",
        imageSrc: "/photos/schools/design/seo/student-3.webp",
    },
];

function Avatar({ src, name, size }: { src: string; name: string; size: number }) {
    const [err, setErr] = useState(false);
    const initials = name.split(" ").map((w) => w[0] ?? "").join("").slice(0, 2).toUpperCase();
    return (
        <div style={{ width: size, height: size, borderRadius: "50%", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.28)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {!err
                ? <img src={src} alt={name} onError={() => setErr(true)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                : <span style={{ fontFamily: vc, fontWeight: 700, fontSize: size * 0.3, color: "#fff", letterSpacing: "0.05em" }}>{initials}</span>
            }
        </div>
    );
}

function NavButton({ direction, onClick, mobile }: { direction: "up" | "down"; onClick: () => void; mobile?: boolean }) {
    const sz = mobile ? 50 : 56;
    const arrowSz = mobile ? 20 : 22;
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={direction === "up" ? "Previous testimonial" : "Next testimonial"}
            style={{ width: sz, height: sz, borderRadius: sz / 2, backgroundColor: BTN_BG, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
        >
            {direction === "up"
                ? <svg width={arrowSz} height={arrowSz} viewBox="0 0 24 24" fill="none"><path d="M12 19V5M5 12l7-7 7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                : <svg width={arrowSz} height={arrowSz} viewBox="0 0 24 24" fill="none"><path d="M12 5v14M19 12l-7 7-7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            }
        </button>
    );
}

function ReadMoreBtn({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            style={{
                background: "transparent",
                border: "1.5px solid rgba(255,255,255,0.55)",
                borderRadius: 999,
                padding: "5px 18px",
                color: "#fff",
                fontFamily: vc,
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "100%",
                cursor: "pointer",
                width: "fit-content",
                whiteSpace: "nowrap",
            }}
        >
            {expanded ? "Read Less" : "Read More"}
        </button>
    );
}

function DesktopCardContent({ t }: { t: Testimonial }) {
    const [expanded, setExpanded] = useState(false);
    const [isClamped, setIsClamped] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const el = textRef.current;
        if (el) setIsClamped(el.scrollHeight > el.clientHeight);
    }, []);

    return (
        <div className="flex flex-row w-full" style={{ minHeight: 280 }}>
            <div className="flex flex-col justify-center items-center flex-shrink-0" style={{ width: "min(260px, 38%)", padding: "24px 16px" }}>
                {/* Profile container — photo + name + designation, all centred */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                    <Avatar src={t.imageSrc} name={t.name} size={120} />
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                        <p className="m-0 text-center" style={{ fontFamily: vc, fontWeight: 600, fontSize: "clamp(14px,1.3vw,20px)", lineHeight: "120%", color: "#fff" }}>{t.name}</p>
                        <p className="m-0 text-center" style={{ fontFamily: vc, fontWeight: 400, fontSize: 13, lineHeight: "120%", color: "rgba(255,255,255,0.7)" }}>{t.role}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-center" style={{ padding: "24px 24px 24px 0", gap: 12 }}>
                <p
                    className="m-0"
                    ref={textRef}
                    style={{
                        fontFamily: vc,
                        fontWeight: 400,
                        fontSize: "clamp(11px,0.95vw,13px)",
                        lineHeight: "150%",
                        color: "#fff",
                        display: "-webkit-box",
                        WebkitLineClamp: expanded ? undefined : 11,
                        WebkitBoxOrient: "vertical" as const,
                        overflow: expanded ? "visible" : "hidden",
                    }}
                >
                    {t.text}
                </p>
                {isClamped && <ReadMoreBtn expanded={expanded} onToggle={() => setExpanded((v) => !v)} />}
            </div>
        </div>
    );
}

function MobileCardContent({ t }: { t: Testimonial }) {
    const [expanded, setExpanded] = useState(false);
    const [isClamped, setIsClamped] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const el = textRef.current;
        if (el) setIsClamped(el.scrollHeight > el.clientHeight);
    }, []);

    return (
        <div className="flex flex-col" style={{ padding: 20, gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <p
                    ref={textRef}
                    className="m-0"
                    style={{
                        fontFamily: vc,
                        fontWeight: 400,
                        fontSize: 13,
                        lineHeight: "150%",
                        color: "#fff",
                        display: "-webkit-box",
                        WebkitLineClamp: expanded ? undefined : 5,
                        WebkitBoxOrient: "vertical" as const,
                        overflow: expanded ? "visible" : "hidden",
                    }}
                >
                    {t.text}
                </p>
                {isClamped && <ReadMoreBtn expanded={expanded} onToggle={() => setExpanded((v) => !v)} />}
            </div>
            <div className="flex items-center" style={{ gap: 16 }}>
                <Avatar src={t.imageSrc} name={t.name} size={60} />
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <p className="m-0" style={{ fontFamily: vc, fontWeight: 600, fontSize: 16, lineHeight: "120%", color: "#fff" }}>{t.name}</p>
                    <p className="m-0" style={{ fontFamily: vc, fontWeight: 400, fontSize: 12, lineHeight: "120%", color: "rgba(255,255,255,0.7)" }}>{t.role}</p>
                </div>
            </div>
        </div>
    );
}

export function GraphicDesigningCalicutTestimonialsSection() {
    const [displayIdx, setDisplayIdx] = useState(0);
    const [pendingIdx, setPendingIdx] = useState(0);
    const [flipping, setFlipping] = useState(false);
    const [flipDir, setFlipDir] = useState<"fwd" | "bwd">("fwd");
    /* "top" | "bottom" = which half the cursor is over; "none" = cursor left */
    const [hoverZone, setHoverZone] = useState<"none" | "top" | "bottom">("none");
    const total = TESTIMONIALS.length;

    const navigate = (nextIdx: number, direction: "fwd" | "bwd") => {
        if (flipping || nextIdx === displayIdx) return;
        setPendingIdx(nextIdx);
        setFlipDir(direction);
        setFlipping(true);
        setTimeout(() => { setDisplayIdx(nextIdx); setFlipping(false); }, 540);
    };

    const prev = () => navigate((displayIdx - 1 + total) % total, "bwd");
    const next = () => navigate((displayIdx + 1) % total, "fwd");
    const goTo = (i: number) => navigate(i, i > displayIdx ? "fwd" : "bwd");

    const cur = TESTIMONIALS[displayIdx];
    const pen = TESTIMONIALS[pendingIdx];

    /* Track which vertical half the mouse is in to reveal the correct button */
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        setHoverZone((e.clientY - r.top) < r.height / 2 ? "top" : "bottom");
    };

    /* renderCard() is called as a plain function (not a JSX component) so React
       never remounts it on re-renders and all parent state is accessible via closure. */
    function renderCard(mobile: boolean) {
        /* Each face carries its own purple background + border-radius + overflow:hidden
           so rounded corners are clipped per-face without touching the flip-stage. */
        const faceStyle: React.CSSProperties = {
            borderRadius: 20,
            backgroundColor: CARD_BG,
            overflow: "hidden",
        };

        return (
            <div
                className="flip-stage relative"
                style={mobile
                    ? { width: "100%" }
                    : { flex: 1, maxWidth: 712, minHeight: 280 }
                }
                onMouseMove={!mobile ? handleMouseMove : undefined}
                onMouseLeave={!mobile ? () => setHoverZone("none") : undefined}
            >
                {/* ── Incoming face — normal flow, controls container height ── */}
                <div
                    key={flipping ? `enter-${pendingIdx}-${flipDir}` : `idle-${displayIdx}`}
                    className={flipping ? `coin-enter-${flipDir}` : ""}
                    style={faceStyle}
                >
                    {mobile ? <MobileCardContent t={flipping ? pen : cur} /> : <DesktopCardContent t={flipping ? pen : cur} />}
                </div>

                {/* ── Outgoing face — absolute on top, spins away ── */}
                {flipping && (
                    <div
                        key={`exit-${displayIdx}-${flipDir}`}
                        className={`coin-exit-${flipDir} absolute inset-0`}
                        style={{ ...faceStyle, zIndex: 2 }}
                    >
                        {mobile ? <MobileCardContent t={cur} /> : <DesktopCardContent t={cur} />}
                    </div>
                )}

                {/* ── Desktop nav buttons — fade in on hover of each half ── */}
                {!mobile && (
                    <>
                        <div style={{
                            position: "absolute", top: 11, left: "min(480px, 67.5%)", zIndex: 10,
                            opacity: hoverZone === "top" ? 1 : 0,
                            transition: "opacity 0.2s ease",
                            pointerEvents: hoverZone === "top" ? "auto" : "none",
                        }}>
                            <NavButton direction="up" onClick={prev} />
                        </div>
                        <div style={{
                            position: "absolute", bottom: 11, left: "min(480px, 67.5%)", zIndex: 10,
                            opacity: hoverZone === "bottom" ? 1 : 0,
                            transition: "opacity 0.2s ease",
                            pointerEvents: hoverZone === "bottom" ? "auto" : "none",
                        }}>
                            <NavButton direction="down" onClick={next} />
                        </div>
                    </>
                )}
            </div>
        );
    }

    return (
        <section className="w-full bg-white">
            <style dangerouslySetInnerHTML={{ __html: ANIM_CSS }} />

            {/* ══ Desktop ══════════════════════════════════════════════════════ */}
            <div className="hidden lg:flex w-full max-w-[1440px] mx-auto box-border items-center justify-between px-[clamp(24px,4.17vw,60px)] py-[40px]">

                {/* Left: heading + paragraph */}
                <div className="flex flex-col flex-shrink-0 w-[46%] xl:w-[499px]" style={{ gap: 16 }}>
                    <h2 className="m-0 xl:hidden" style={{ fontFamily: vc, fontWeight: 500, fontSize: 33, lineHeight: "110%", letterSpacing: "-0.02em", color: "#000" }}>
                        Experiences Shared by<br />Our Students
                    </h2>
                    <h2 className="m-0 hidden xl:block" style={{ fontFamily: vc, fontWeight: 500, fontSize: 45, lineHeight: "110%", letterSpacing: "-0.02em", color: "#000" }}>
                        Experiences Shared by<br />Our Students
                    </h2>
                    <p className="m-0" style={{ fontFamily: vc, fontWeight: 400, fontSize: "clamp(15px,1.4vw,20px)", lineHeight: "120%", color: "#000000B2" }}>
                        Hear from the designers who started their journey right here, by enrolling in the
                        best graphic designing course in Calicut.
                    </p>
                </div>

                {/* Right: card + dots */}
                <div className="flex items-center flex-1 min-w-0 xl:flex-none xl:w-[730px]" style={{ gap: 10, justifyContent: "flex-end" }}>
                    {renderCard(false)}
                    <div className="flex flex-col items-center flex-shrink-0" style={{ width: 8, gap: 6 }}>
                        {TESTIMONIALS.map((_, i) => (
                            <button key={i} type="button" onClick={() => goTo(i)} aria-label={`Testimonial ${i + 1}`}
                                style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: i === displayIdx ? "#000" : "rgba(0,0,0,0.18)", border: "none", padding: 0, cursor: "pointer", flexShrink: 0 }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* ══ Mobile ═══════════════════════════════════════════════════════ */}
            <div className="lg:hidden w-full box-border px-[20px] py-[30px]">
                <div className="flex flex-col" style={{ gap: 30 }}>
                    <div className="flex flex-col" style={{ gap: 16 }}>
                        <h2 className="m-0" style={{ fontFamily: vc, fontWeight: 500, fontSize: 35, lineHeight: "110%", letterSpacing: "-0.02em", color: "#000" }}>
                            Experiences Shared by<br />Our Students
                        </h2>
                        <p className="m-0" style={{ fontFamily: vc, fontWeight: 400, fontSize: 14, lineHeight: "120%", color: "#000000B2" }}>
                            Hear from the designers who started their journey right here, by enrolling in the
                            best graphic designing course in Calicut.
                        </p>
                    </div>
                    <div className="flex flex-col items-center" style={{ gap: 20 }}>
                        <NavButton direction="up" onClick={prev} mobile />
                        {renderCard(true)}
                        <NavButton direction="down" onClick={next} mobile />
                    </div>
                </div>
            </div>
        </section>
    );
}
