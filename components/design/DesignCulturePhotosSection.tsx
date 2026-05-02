"use client";

import Image from "next/image";

const ARROW_PATH =
    "M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z";

export function DesignCulturePhotosSection({ font, serif }: { font: string; serif: string }) {
    // Placeholder-only (user will add real photos later)
    const photoGradient =
        "linear-gradient(135deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.02) 35%, rgba(0,0,0,0.06) 100%)";

    const DESKTOP_CANVAS_W = 1320;
    const DESKTOP_CANVAS_H = 878.08984375;
    const pctX = (px: number) => `${(px / DESKTOP_CANVAS_W) * 100}%`;
    const pctY = (px: number) => `${(px / DESKTOP_CANVAS_H) * 100}%`;

    return (
        <section
            className="w-full bg-[#FCFCFC]"
            style={{
                paddingTop: "clamp(30px, 4.17vw, 60px)",
                paddingBottom: "clamp(30px, 2.78vw, 40px)",
                paddingLeft: "clamp(20px, 4.17vw, 60px)",
                paddingRight: "clamp(20px, 4.17vw, 60px)",
            }}
        >
            <div className="w-full max-w-[1320px] mx-auto flex flex-col gap-[20px] lg:gap-0">
                {/* Heading (mobile only) */}
                <h2
                    className="m-0 text-black lg:hidden"
                    style={{
                        fontFamily: font,
                        fontWeight: 500,
                        fontSize: "34px",
                        lineHeight: "114.99999999999999%",
                    }}
                >
                    Step In and Feel <br />
                    How Design Culture <br />
                    Shapes Everything <br />
                    <span
                        style={{
                            fontFamily: serif,
                            fontWeight: 300,
                            fontStyle: "italic",
                            fontSize: "inherit",
                            lineHeight: "114.99999999999999%",
                        }}
                    >
                        Around You
                    </span>
                </h2>

                {/* Desktop collage */}
                <div className="hidden lg:block w-full">
                    {/* Responsive canvas: preserves layout by percentage positioning */}
                    <div className="relative w-full max-w-[1320px]" style={{ aspectRatio: `${DESKTOP_CANVAS_W} / ${DESKTOP_CANVAS_H}` }}>
                        {/* Desktop heading: top aligns with photo #1 top */}
                        <h2
                            className="absolute m-0 text-black"
                            style={{
                                left: 0,
                                top: 0,
                                width: "750px",
                                height: "169px",
                                fontFamily: font,
                                fontWeight: 500,
                                fontSize: "50px",
                                lineHeight: "114.99999999999999%",
                            }}
                        >
                            Step In and Feel How Design <br />
                            Culture Shapes Everything <br />
                            <span
                                style={{
                                    fontFamily: serif,
                                    fontWeight: 300,
                                    fontStyle: "italic",
                                    fontSize: "50px",
                                    lineHeight: "114.99999999999999%",
                                }}
                            >
                                Around You
                            </span>
                        </h2>

                        {/* 1 */}
                        <div
                            className="absolute"
                            style={{
                                left: pctX(906.8),
                                top: pctY(0),
                                width: pctX(237.3952484130862),
                                // Reduced height (was 286.4782px)
                                height: pctY(235),
                            }}
                        >
                            <div className="w-full h-full" style={{ background: photoGradient }} />
                        </div>

                        {/* 2 */}
                        <div
                            className="absolute"
                            style={{
                                left: pctX(259.78),
                                top: pctY(237.48),
                                width: pctX(350.4931640625),
                                height: pctY(214.74302673339844),
                            }}
                        >
                            {/* Design #1 (desktop): Group (3) on photo #2 top-left */}
                            <Image
                                src="/photos/schools/design/Group (3).svg"
                                alt=""
                                width={97.25739288330078}
                                height={83.58518981933594}
                                className="pointer-events-none absolute z-[2]"
                                style={{ left: 0, top: 0, transform: "translate(-50%, -50%)" }}
                                priority={false}
                            />
                            <div className="w-full h-full" style={{ background: photoGradient }} />
                        </div>

                        {/* 3 */}
                        <div
                            className="absolute"
                            style={{
                                left: pctX(626.52),
                                // Align bottom with photo #2 bottom
                                top: pctY(189.532),
                                width: pctX(256.4231262207034),
                                height: pctY(262.6912231445314),
                            }}
                        >
                            <div className="w-full h-full" style={{ background: photoGradient }} />
                        </div>

                        {/* 4 */}
                        <div
                            className="absolute"
                            style={{
                                left: pctX(0),
                                top: pctY(467.09),
                                width: pctX(422.1689758300781),
                                height: pctY(411),
                            }}
                        >
                            <div className="w-full h-full" style={{ background: photoGradient }} />
                        </div>

                        {/* 5 */}
                        <div
                            className="absolute"
                            style={{
                                left: pctX(439.33),
                                top: pctY(466.63),
                                width: pctX(350.5997314453125),
                                height: pctY(200.24562072753906),
                            }}
                        >
                            <div className="w-full h-full" style={{ background: photoGradient }} />
                        </div>

                        {/* 6 */}
                        <div
                            className="absolute"
                            style={{
                                left: pctX(439.33),
                                top: pctY(677.75),
                                width: pctX(350.5997314453125),
                                height: pctY(200.24562072753906),
                            }}
                        >
                            <div className="w-full h-full" style={{ background: photoGradient }} />
                        </div>

                        {/* 7 */}
                        <div
                            className="absolute"
                            style={{
                                left: pctX(920.05),
                                top: pctY(251.77),
                                width: pctX(399.9495544433594),
                                height: pctY(200),
                            }}
                        >
                            {/* Design #2 (desktop): Vector (10) on photo #7 top border */}
                            <Image
                                src="/photos/schools/design/Vector (10).svg"
                                alt=""
                                width={42}
                                height={97}
                                className="pointer-events-none absolute z-[2]"
                                style={{ right: "-4px", top: "-44px" }}
                                priority={false}
                            />
                            <div className="w-full h-full" style={{ background: photoGradient }} />
                        </div>

                        {/* 8 */}
                        <div
                            className="absolute"
                            style={{
                                left: pctX(806.45),
                                top: pctY(467.09),
                                width: pctX(240.0000152587893),
                                height: pctY(253.50335693359403),
                            }}
                        >
                            <div className="w-full h-full" style={{ background: photoGradient }} />
                        </div>

                        {/* 9 */}
                        <div
                            className="absolute"
                            style={{
                                left: pctX(1073.08),
                                top: pctY(467.09),
                                width: pctX(240.0000152587893),
                                height: pctY(253.50335693359403),
                            }}
                        >
                            {/* Design #3 (desktop): Group (4) on photo #9 bottom-right */}
                            <Image
                                src="/photos/schools/design/Group (4).svg"
                                alt=""
                                width={56.97090988773694}
                                height={45.72423996662426}
                                className="pointer-events-none absolute z-[2]"
                                style={{ right: 0, bottom: 0, transform: "translate(50%, 50%) rotate(171.71deg)" }}
                                priority={false}
                            />
                            <div className="w-full h-full" style={{ background: photoGradient }} />
                        </div>

                        {/* Paragraph + button */}
                        <div className="absolute" style={{ left: pctX(859), top: pctY(737.09), width: pctX(461) }}>
                            <div className="flex flex-col" style={{ gap: "19px" }}>
                                <p
                                    className="m-0"
                                    style={{
                                        fontFamily: font,
                                        fontWeight: 400,
                                        fontSize: "28px",
                                        lineHeight: "120%",
                                        color: "#0A0A0A",
                                    }}
                                >
                                    Be part of a design culture you <br />
                                    feel the moment you walk in.
                                </p>
                                <DesignCultureJoinNowButton font={font} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile collage (4 rows) + paragraph/button */}
                <div className="lg:hidden w-full flex flex-col gap-[20px]">
                    <div className="w-full max-w-[335px] mx-auto flex flex-col" style={{ gap: "10px" }}>
                        {/* Row 1 */}
                        <div className="w-full flex items-end" style={{ gap: "10px" }}>
                            <div
                                className="shrink-0"
                                style={{
                                    flexBasis: `${(185.5399932861328 / 335) * 100}%`,
                                    aspectRatio: `${185.5399932861328} / ${114.29203796386719}`,
                                    background: photoGradient,
                                }}
                            />
                            <div
                                className="shrink-0 relative"
                                style={{
                                    flexBasis: `${(136.47531127929702 / 335) * 100}%`,
                                    aspectRatio: `${136.47531127929702} / ${139.81137084960946}`,
                                    background: photoGradient,
                                }}
                            >
                                {/* Design #1 (mobile): Group (3) on photo #3 top-left */}
                                <Image
                                    src="/photos/schools/design/Group (3).svg"
                                    alt=""
                                    width={33.94257736206055}
                                    height={29.22036361694336}
                                    className="pointer-events-none absolute z-[2]"
                                    style={{ left: 0, top: 0, transform: "translate(-50%, -50%)" }}
                                    priority={false}
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="w-full flex items-start" style={{ gap: "10px" }}>
                            <div
                                className="shrink-0"
                                style={{
                                    flexBasis: `${(178.64999389648438 / 335) * 100}%`,
                                    aspectRatio: `${178.64999389648438} / ${177.580078125}`,
                                    background: photoGradient,
                                }}
                            />
                            <div
                                className="flex flex-col shrink-0"
                                style={{
                                    flexBasis: `${(146.7036590576172 / 335) * 100}%`,
                                    gap: "10px",
                                }}
                            >
                                <div style={{ width: "100%", aspectRatio: `${146.7036590576172} / ${83.7900390625}`, background: photoGradient }} />
                                <div style={{ width: "100%", aspectRatio: `${146.7036590576172} / ${83.7900390625}`, background: photoGradient }} />
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="w-full relative" style={{ aspectRatio: `335 / 167.52113342285156`, background: photoGradient }}>
                            {/* Design #2 (mobile): Vector (10) on photo #7 bottom border */}
                            <Image
                                src="/photos/schools/design/Vector (10).svg"
                                alt=""
                                width={28}
                                height={64.66667175292969}
                                className="pointer-events-none absolute z-[2]"
                                style={{ right: "-2px", bottom: "-30px" }}
                                priority={false}
                            />
                        </div>

                        {/* Row 4 */}
                        <div className="w-full flex items-start" style={{ gap: "6.57px" }}>
                            <div
                                className="shrink-0"
                                style={{
                                    flexBasis: `${(157.6665649414064 / 335) * 100}%`,
                                    aspectRatio: `${157.6665649414064} / ${166.53750610351582}`,
                                    background: photoGradient,
                                }}
                            />
                            <div
                                className="shrink-0 relative"
                                style={{
                                    flexBasis: `${(157.6665649414064 / 335) * 100}%`,
                                    aspectRatio: `${157.6665649414064} / ${166.53750610351582}`,
                                    background: photoGradient,
                                }}
                            >
                                {/* Design #3 (mobile): Group (4) on photo #9 bottom-right */}
                                <Image
                                    src="/photos/schools/design/Group (4).svg"
                                    alt=""
                                    width={33.946136932868704}
                                    height={27.247394929596556}
                                    className="pointer-events-none absolute z-[2]"
                                    style={{ right: 0, bottom: 0, transform: "translate(50%, 50%) rotate(171.71deg)" }}
                                    priority={false}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-[335px] mx-auto flex flex-col items-start" style={{ gap: "24px" }}>
                        <p
                            className="m-0"
                            style={{
                                width: "243px",
                                fontFamily: font,
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "120%",
                                color: "#0A0A0A",
                            }}
                        >
                            Be part of a design culture you <br />
                            feel the moment you walk in.
                        </p>
                        <DesignCultureJoinNowButton font={font} isMobile />
                    </div>
                </div>
            </div>
        </section>
    );
}

function DesignCultureJoinNowButton({ font, isMobile }: { font: string; isMobile?: boolean }) {
    return (
        <div className="flex items-center gap-[4.4px] lg:gap-[5px] group">
            <button
                type="button"
                className="flex items-center justify-center rounded-[50px] border bg-transparent transition-colors duration-300 group-hover:bg-[#FF5C00]"
                style={{
                    width: isMobile ? "178.8333282470703px" : "193px",
                    height: isMobile ? "50.19047546386719px" : "54px",
                    borderColor: "#FF5C00",
                    fontFamily: font,
                    fontWeight: 550,
                    fontSize: isMobile ? 16 : 17.78,
                    lineHeight: "100%",
                }}
            >
                <span className="text-[#000000] leading-none transition-colors duration-300 group-hover:text-white">Join Now</span>
            </button>
            <button
                type="button"
                className="relative rounded-full overflow-hidden shrink-0"
                style={{
                    width: isMobile ? "47.5714px" : "54px",
                    height: isMobile ? "47.5714px" : "54px",
                    backgroundColor: "#FF5C00",
                }}
                aria-label="Join Now"
            >
                {/* Same sliding-arrow pattern as JoinClubLikeButton */}
                <div
                    className={[
                        "absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0",
                        isMobile ? "-translate-x-[36px]" : "-translate-x-[45.56px]",
                    ].join(" ")}
                >
                    <svg viewBox="0 0 34 34" fill="none" style={{ width: isMobile ? 26 : 30, height: isMobile ? 26 : 30 }}>
                        <path d={ARROW_PATH} fill="white" />
                    </svg>
                </div>
                <div
                    className={[
                        "absolute inset-0 flex items-center justify-center transition-transform duration-300",
                        isMobile ? "group-hover:translate-x-[36px]" : "group-hover:translate-x-[46px]",
                    ].join(" ")}
                >
                    <svg viewBox="0 0 34 34" fill="none" style={{ width: isMobile ? 26 : 30, height: isMobile ? 26 : 30 }}>
                        <path d={ARROW_PATH} fill="white" />
                    </svg>
                </div>
            </button>
        </div>
    );
}

