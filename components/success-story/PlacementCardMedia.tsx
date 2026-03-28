"use client";

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
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${className}`}
            onError={() => setFailed(true)}
        />
    );
}
