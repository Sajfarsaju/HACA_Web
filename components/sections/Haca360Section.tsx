import Image from 'next/image'

export function Haca360Section() {
    return (
        <section className="haca-360-section">
            <div className="haca-360-inner">

                {/* ── Upper: Badge Button + Heading ── */}
                <div className="haca-360-upper">
                    {/* Background Gradient SVG moved behind heading */}
                    <div className="haca-360-bg-gradient-img-wrap">
                        <Image
                            src="/photos/main/bg-gradiant-1.svg"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>
                    <button className="haca-360-badge-btn" aria-label="HACA 360">
                        <Image
                            src="/photos/main/haca 360.svg"
                            alt="HACA 360"
                            width={148}
                            height={42}
                            className="haca-360-badge-img"
                        />
                    </button>
                    <h2 className="haca-360-heading">Let's Talk About HACA</h2>
                </div>

                {/* ── Video Container ── */}
                <div className="haca-360-video-wrapper">

                    {/*
                        VIDEO PLACEHOLDER
                        When admin panel is ready, replace this div with an actual <video> tag.
                        The src can be passed as a prop or pulled from a CMS.
                    */}
                    <div className="haca-360-video-fallback">
                        {/* Gradient moved to upper section */}

                        {/* Centered pause button */}
                        <div className="haca-360-overlay">
                            <button className="haca-360-pause-btn" aria-label="Pause video">
                                {/*
                                    Pause SVG — replace with:
                                    <Image src="/photos/main/pause button.svg" alt="" width={70} height={70} />
                                    once the asset is added.
                                */}
                                <svg
                                    className="haca-360-pause-svg"
                                    viewBox="0 0 70 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <circle cx="35" cy="35" r="34.5" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.3" />
                                    <rect x="25" y="22" width="7" height="26" rx="2" fill="white" />
                                    <rect x="38" y="22" width="7" height="26" rx="2" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
