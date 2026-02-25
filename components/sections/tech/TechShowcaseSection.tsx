import Image from "next/image";

/* ─────────────────────────────────────────
   TechShowcaseSection
   Matches Figma spec:
     Outer wrapper  1308 × 894   gap 60px, left 66px
       Heading      1308 × 62
       Card         1308 × 711   border-radius 20px, glassmorphism border
         • Background image  Rectangle 1.png
         • Ellipse 157       decorative (background)
         • Ellipse 157 (1)   decorative (background)
         • Play icon slot    141 × 117
           └ Vector (1).svg  116.67 × 116.67  left 12px
───────────────────────────────────────────*/

export function TechShowcaseSection() {
    return (
        <div className="tech-showcase-outer">

            {/* ── Section Heading ── */}
            <h2 className="tech-showcase-heading">Step Inside the Tech School</h2>

            {/* ── Video / Image Card ── */}
            <div className="tech-showcase-card">

                {/* Background Decorative Ellipse – left/bottom */}
                <div className="tech-showcase-ellipse tech-showcase-ellipse--left">
                    <Image
                        src="/photos/Tech/Ellipse 157.svg"
                        alt=""
                        width={489}
                        height={684}
                        className="tech-showcase-ellipse-img"
                        aria-hidden="true"
                    />
                </div>

                {/* Background Decorative Ellipse – right/bottom */}
                <div className="tech-showcase-ellipse tech-showcase-ellipse--right">
                    <Image
                        src="/photos/Tech/Ellipse 157 (1).svg"
                        alt=""
                        width={212}
                        height={696}
                        className="tech-showcase-ellipse-img"
                        aria-hidden="true"
                    />
                </div>

                {/* Main background image */}
                <Image
                    src="/photos/Tech/Rectangle 1.png"
                    alt="Tech School Showcase"
                    fill
                    className="tech-showcase-bg-img"
                    priority
                />

                {/* Play button overlay — outer frame + inner arrow */}
                <div className="tech-showcase-play-slot">
                    {/* Outer frame: gridicons_play copy.svg (141 × 117) */}
                    <Image
                        src="/photos/Tech/gridicons_play copy.svg"
                        alt=""
                        width={141}
                        height={117}
                        className="tech-showcase-play-frame"
                        aria-hidden="true"
                    />
                    {/* Inner arrow: Vector (1).svg (116.67 × 116.67, left 12px) */}
                    <div className="tech-showcase-play-inner">
                        <Image
                            src="/photos/Tech/Vector (1).svg"
                            alt="Play video"
                            width={117}
                            height={117}
                            className="tech-showcase-play-icon"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
