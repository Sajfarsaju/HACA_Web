import Image from "next/image";

/* ─────────────────────────────────────────
   TechIntroSection
   Matches Figma spec:
     Outer wrapper  1440 × 1391  (max-width, scrollable)
     Inner row      1322 × 380   gap 143px, left 62px
       Left col     438 × 179.6  gap 20px
         Heading    438 × 112
         Icon row   438 × 47.6   gap 17.46px
       Right col    668 × 380
───────────────────────────────────────────*/

const TECH_ICONS: { src: string; alt: string; innerW: number; innerH: number; innerTop?: number; innerLeft?: number }[] = [
    {
        src: "/photos/Tech/vscode-icons_file-type-firebase.svg",
        alt: "Firebase",
        innerW: 47.6,
        innerH: 47.6,
    },
    {
        src: "/photos/Tech/devicon_git.svg",
        alt: "Git",
        innerW: 46.95,
        innerH: 46.95,
        innerTop: 0.33,
        innerLeft: 0.33,
    },
    {
        src: "/photos/Tech/Vector.svg",
        alt: "Tech",
        innerW: 39.67,
        innerH: 38.69,
        innerTop: 3.97,
        innerLeft: 3.97,
    },
    {
        src: "/photos/Tech/Mask group.svg",
        alt: "Mask Group",
        innerW: 47.61,
        innerH: 47.36,
        innerTop: 0.12,
        innerLeft: 0,
    },
    {
        src: "/photos/Tech/devicon_slack.svg",
        alt: "Slack",
        innerW: 47.6,
        innerH: 47.6,
    },
    {
        src: "/photos/Tech/material-icon-theme_python.svg",
        alt: "Python",
        innerW: 47.6,
        innerH: 47.6,
    },
    {
        src: "/photos/Tech/logos_postman-icon.svg",
        alt: "Postman",
        innerW: 47.6,
        innerH: 47.6,
    },
];

export function TechIntroSection() {
    return (
        <div className="tech-hero-outer">
            {/* ── Inner row: left col + right col ── */}
            <div className="tech-hero-row">

                {/* ── LEFT COLUMN: Heading + Icon row ── */}
                <div className="tech-hero-left-col">

                    {/* Heading */}
                    <div className="tech-hero-heading-wrap">
                        <p className="tech-hero-heading">A New Ecosystem for Tech Learning</p>
                    </div>

                    {/* Icon Row */}
                    <div className="tech-hero-icon-row">
                        {TECH_ICONS.map((icon) => (
                            <div className="tech-icon-slot" key={icon.alt}>
                                {/* Width/height set to 48 as a layout hint; actual display size controlled by CSS */}
                                <Image
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={48}
                                    height={48}
                                    className="tech-icon-img"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── RIGHT COLUMN: Description ── */}
                <div className="tech-hero-right-col">
                    <p className="tech-hero-description">
                        HACA Tech School is where the next generation of tech creators come to
                        learn, build, and launch their careers. We teach the skills that companies
                        actually want today: AI tools, Python, Django, data analytics, automation,
                        and hands-on project experience.
                        <br /><br />
                        In just a few years, we&apos;ve trained over 250 students, guided them through
                        500+ projects, and provided 100% placement support to help them step
                        confidently into the tech world.
                    </p>
                </div>

            </div>
        </div>
    );
}
