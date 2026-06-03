"use client";

import Image from "next/image";
import { useState } from "react";
import { PLACEMENT_FALLBACK_GRADIENT } from "@/lib/placementGradient";

type Props = {
    imageUrl?: string | null;
    alt: string;
    className?: string;
};

/**
 * Shows Cloudinary/API image when present; otherwise (or on error) shows the gradient fallback.
 */
export function PlacementCardMedia({ imageUrl, alt, className = "" }: Props) {
    const [failed, setFailed] = useState(false);
    const showGradient = !imageUrl?.trim() || failed;

    if (showGradient) {
        return (
            <div
                className={`${PLACEMENT_FALLBACK_GRADIENT} ${className}`}
                aria-hidden={!imageUrl}
            />
        );
    }

    const src = imageUrl!.trim();

    return (
        <div className={`relative h-full w-full min-h-[120px] overflow-hidden ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 320px"
                onError={() => setFailed(true)}
            />
        </div>
    );
}
