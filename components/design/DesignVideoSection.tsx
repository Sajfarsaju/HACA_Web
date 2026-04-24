"use client";

import { useRef, useState } from "react";

const CIRCLE =
    "M90.625 50C90.625 60.7744 86.3449 71.1075 78.7262 78.7262C71.1075 86.3449 60.7744 90.625 50 90.625C39.2256 90.625 28.8925 86.3449 21.2738 78.7262C13.6551 71.1075 9.375 60.7744 9.375 50C9.375 39.2256 13.6551 28.8925 21.2738 21.2738C28.8925 13.6551 39.2256 9.375 50 9.375C60.7744 9.375 71.1075 13.6551 78.7262 21.2738C86.3449 28.8925 90.625 39.2256 90.625 50Z";

function PlayIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={CIRCLE} stroke="white" strokeWidth="3.75" />
            <path d="M68.75 50L40.625 31.25V68.75L68.75 50Z" stroke="white" strokeWidth="3.75" />
        </svg>
    );
}

function PauseIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={CIRCLE} stroke="white" strokeWidth="3.75" />
            <rect x="35" y="32" width="10" height="36" rx="2" fill="white" />
            <rect x="55" y="32" width="10" height="36" rx="2" fill="white" />
        </svg>
    );
}

interface DesignVideoSectionProps {
    src?: string;
}

export function DesignVideoSection({ src }: DesignVideoSectionProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        const v = videoRef.current;
        if (!v) return;
        playing ? v.pause() : v.play();
        setPlaying(!playing);
    };

    return (
        <section
            className="relative w-full max-w-[1440px] mx-auto h-[254px] lg:h-[674px] overflow-hidden cursor-pointer"
            onClick={toggle}
        >
            {/* Gradient fallback / video */}
            {src ? (
                <video
                    ref={videoRef}
                    src={src}
                    className="absolute inset-0 w-full h-full object-cover"
                    playsInline
                    loop
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0533] via-[#2d1060] to-[#0a0a1a]" />
            )}

            {/* Dark overlay with exact padding from spec */}
            <div
                className="absolute inset-0
                    pt-[69.53px] pr-[174.48px] pb-[69.53px] pl-[174.48px]
                    lg:pt-[267px] lg:pr-[670px] lg:pb-[267px] lg:pl-[670px]"
                style={{ backgroundColor: "#00000066" }}
            >
                <button
                    className="w-full h-full transition-transform duration-200 hover:scale-110 focus:outline-none flex items-center justify-center"
                    aria-label={playing ? "Pause video" : "Play video"}
                >
                    <span className="lg:hidden">
                        {playing ? <PauseIcon size={52} /> : <PlayIcon size={52} />}
                    </span>
                    <span className="hidden lg:block">
                        {playing ? <PauseIcon size={100} /> : <PlayIcon size={100} />}
                    </span>
                </button>
            </div>
        </section>
    );
}
