"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

/** Matches navbar Contact Us – color + transform. */
export const DESIGN_CTA_TRANSITION =
    "duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-150 motion-reduce:ease-linear";

export const DESIGN_CTA_ARROW_PATH =
    "M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z";

const ARROW_DESK_IN =
    `-translate-x-[45.56px] transform-gpu transition-transform ${DESIGN_CTA_TRANSITION} group-hover:translate-x-0`;
const ARROW_DESK_OUT =
    `translate-x-0 transform-gpu transition-transform ${DESIGN_CTA_TRANSITION} group-hover:translate-x-[46px]`;
const ARROW_M36_IN =
    `-translate-x-[36px] transform-gpu transition-transform ${DESIGN_CTA_TRANSITION} group-hover:translate-x-0`;
const ARROW_M36_OUT =
    `translate-x-0 transform-gpu transition-transform ${DESIGN_CTA_TRANSITION} group-hover:translate-x-[36px]`;
const ARROW_M405_IN =
    `-translate-x-[40.5px] transform-gpu transition-transform ${DESIGN_CTA_TRANSITION} group-hover:translate-x-0`;
const ARROW_M405_OUT =
    `translate-x-0 transform-gpu transition-transform ${DESIGN_CTA_TRANSITION} group-hover:translate-x-[40.5px]`;

export type DesignSplitArrowPreset = "desktop" | "mobile36" | "mobile405";

function arrowLayers(preset: DesignSplitArrowPreset) {
    if (preset === "desktop") return { inn: ARROW_DESK_IN, out: ARROW_DESK_OUT };
    if (preset === "mobile36") return { inn: ARROW_M36_IN, out: ARROW_M36_OUT };
    return { inn: ARROW_M405_IN, out: ARROW_M405_OUT };
}

export type DesignSplitArrowCtaDims = {
    gapPx: number;
    pillWidth: number | string;
    pillHeight: number | string;
    borderWidth: number;
    radiusPx: number;
    padX: number;
    padY: number;
    fontSizePx: number;
    circlePx: number;
    arrowSvgPx: number;
};

type DesignSplitArrowCtaProps =
    | {
          label: ReactNode;
          href: string;
          accent?: string;
          labelColor?: string;
          dims: DesignSplitArrowCtaDims;
          arrowPreset: DesignSplitArrowPreset;
          fontFamily: string;
          fontWeight?: number;
          wrapperClassName?: string;
          wrapperStyle?: CSSProperties;
          ariaLabel?: string;
          asButton?: false;
          pillButtonType?: never;
          onPillClick?: never;
          onCircleClick?: never;
      }
    | {
          label: ReactNode;
          href?: never;
          accent?: string;
          labelColor?: string;
          dims: DesignSplitArrowCtaDims;
          arrowPreset: DesignSplitArrowPreset;
          fontFamily: string;
          fontWeight?: number;
          wrapperClassName?: string;
          wrapperStyle?: CSSProperties;
          ariaLabel?: string;
          asButton: true;
          pillButtonType?: "button" | "submit";
          onPillClick?: () => void;
          onCircleClick?: () => void;
      };

export function DesignSplitArrowCta(props: DesignSplitArrowCtaProps) {
    const {
        label,
        accent = "#FF5C00",
        labelColor = "black",
        dims,
        arrowPreset,
        fontFamily,
        fontWeight = 550,
        wrapperClassName = "",
        wrapperStyle,
        ariaLabel,
        pillButtonType = "button",
    } = props;
    const href = "href" in props ? props.href : undefined;
    const asButton = "asButton" in props && props.asButton === true;
    const onPillClick = "onPillClick" in props ? props.onPillClick : undefined;
    const onCircleClick = "onCircleClick" in props ? props.onCircleClick : undefined;
    const t = DESIGN_CTA_TRANSITION;
    const { inn, out } = arrowLayers(arrowPreset);

    const groupVars = { "--ds-cta-accent": accent, "--cta-label": labelColor } as CSSProperties;

    const pillBaseClass = [
        "box-border flex shrink-0 cursor-pointer items-center justify-center bg-transparent outline-none transition-colors",
        t,
        "group-hover:bg-[color:var(--ds-cta-accent)]",
    ].join(" ");

    const pillStyle: CSSProperties = {
        ...groupVars,
        width: dims.pillWidth,
        height: dims.pillHeight,
        padding: `${dims.padY}px ${dims.padX}px`,
        borderStyle: "solid",
        borderWidth: dims.borderWidth,
        borderColor: accent,
        borderRadius: dims.radiusPx,
        fontFamily,
        fontWeight,
        fontSize: dims.fontSizePx,
    };

    const circleWrapClass = [
        "relative box-border shrink-0 cursor-pointer overflow-hidden rounded-full transition-colors",
        "border-solid border-transparent bg-[color:var(--ds-cta-accent)] text-white",
        t,
        "group-hover:border-[color:var(--ds-cta-accent)] group-hover:bg-white group-hover:text-[color:var(--ds-cta-accent)]",
    ].join(" ");

    const circleStyle: CSSProperties = {
        ...groupVars,
        width: dims.circlePx,
        height: dims.circlePx,
        borderWidth: dims.borderWidth,
    };

    const labelSpan = (
        <span className={`leading-none whitespace-nowrap text-[color:var(--cta-label)] transition-colors ${t} group-hover:text-white`}>{label}</span>
    );

    const arrowStack = (
        <>
            <div className={`absolute inset-0 flex items-center justify-center ${inn}`}>
                <svg viewBox="0 0 34 34" fill="none" style={{ width: dims.arrowSvgPx, height: dims.arrowSvgPx }} aria-hidden>
                    <path d={DESIGN_CTA_ARROW_PATH} fill="currentColor" />
                </svg>
            </div>
            <div className={`absolute inset-0 flex items-center justify-center ${out}`}>
                <svg viewBox="0 0 34 34" fill="none" style={{ width: dims.arrowSvgPx, height: dims.arrowSvgPx }} aria-hidden>
                    <path d={DESIGN_CTA_ARROW_PATH} fill="currentColor" />
                </svg>
            </div>
        </>
    );

    const a11y = ariaLabel ?? (typeof label === "string" ? label : undefined);

    const pillEl = asButton ? (
        <button type={pillButtonType} className={pillBaseClass} style={pillStyle} onClick={onPillClick}>
            {labelSpan}
        </button>
    ) : (
        <Link href={href as string} prefetch={false} className={pillBaseClass} style={pillStyle}>
            {labelSpan}
        </Link>
    );

    const circleEl = asButton ? (
        <button type="button" className={circleWrapClass} style={circleStyle} aria-label={a11y} onClick={onCircleClick}>
            {arrowStack}
        </button>
    ) : (
        <Link href={href as string} prefetch={false} className={circleWrapClass} style={circleStyle} aria-label={a11y}>
            {arrowStack}
        </Link>
    );

    return (
        <div
            className={`group flex cursor-pointer items-center ${wrapperClassName}`.trim()}
            style={{ gap: dims.gapPx, ...groupVars, ...wrapperStyle }}
        >
            {pillEl}
            {circleEl}
        </div>
    );
}
