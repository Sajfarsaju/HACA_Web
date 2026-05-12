import Link from "next/link";

/** Same arrow path as `DesignCulturePhotosSection` / hero CTAs. */
const ARROW_PATH =
    "M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const VARIANT = {
    purple: { border: "#8F56FF", fill: "#8F56FF" },
    orange: { border: "#FF5C00", fill: "#FF5C00" },
} as const;

export type DesignPillArrowVariant = keyof typeof VARIANT;

type Props = {
    label: string;
    href: string;
    variant: DesignPillArrowVariant;
    ariaLabel?: string;
    /** Smaller pill + circle for narrow / small-desktop layouts. */
    size?: "default" | "compact";
    /** Make the pill grow to fill available width (useful on mobile). */
    fullWidth?: boolean;
};

/**
 * Pill + circular arrow CTA — same interaction pattern as
 * `DesignHeroVideoTransition` (purple) and `DesignCultureJoinNowButton` (orange).
 */
export function DesignPillArrowCta({ label, href, variant, ariaLabel, size = "default", fullWidth = false }: Props) {
    const { border: borderColor, fill: circleBg } = VARIANT[variant];
    const compact = size === "compact";

    const pillHoverBg = variant === "purple" ? "group-hover:bg-[#8F56FF]" : "group-hover:bg-[#FF5C00]";

    const pill = (
        <span
            className={[
                "flex items-center justify-center rounded-[50px] border-[1.11px] bg-transparent transition-colors duration-300",
                fullWidth ? "flex-1" : "",
                compact ? "h-[48px] px-[22px] py-[12px]" : "h-[60.56px] px-[33.33px] py-[17.78px]",
                pillHoverBg,
            ].join(" ")}
            style={{
                borderColor,
                fontFamily: vc,
                fontWeight: 550,
            }}
        >
            <span
                className={[
                    "text-[#000000] leading-none whitespace-nowrap transition-colors duration-300 group-hover:text-white",
                    compact ? "text-[14px]" : "text-[17.78px]",
                ].join(" ")}
            >
                {label}
            </span>
        </span>
    );

    const circle = (
        <span
            className={`relative shrink-0 overflow-hidden rounded-full transition-colors duration-300 ${compact ? "h-[48px] w-[48px]" : "h-[60px] w-[60px]"}`}
            style={{ backgroundColor: circleBg }}
            aria-hidden
        >
            <span
                className={[
                    "absolute transition-transform duration-300 group-hover:translate-x-0",
                    compact
                        ? "top-[11px] left-[11px] h-[26px] w-[26px] -translate-x-[36px]"
                        : "top-[13.89px] left-[13.89px] h-[33.33px] w-[33.33px] -translate-x-[45.56px]",
                ].join(" ")}
            >
                <svg
                    width={compact ? 26 : 33}
                    height={compact ? 26 : 33}
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d={ARROW_PATH} fill="white" />
                </svg>
            </span>
            <span
                className={[
                    "absolute transition-transform duration-300",
                    compact
                        ? "top-[11px] left-[11px] h-[26px] w-[26px] group-hover:translate-x-[37px]"
                        : "top-[13.89px] left-[13.89px] h-[33.33px] w-[33.33px] group-hover:translate-x-[46px]",
                ].join(" ")}
            >
                <svg
                    width={compact ? 26 : 33}
                    height={compact ? 26 : 33}
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d={ARROW_PATH} fill="white" />
                </svg>
            </span>
        </span>
    );

    const wrapClass = [
        "flex max-w-full cursor-pointer items-center group no-underline",
        fullWidth ? "w-full" : "w-fit",
        compact ? "gap-1" : "gap-[5.56px]",
    ].join(" ");

    if (href.startsWith("tel:")) {
        return (
            <a href={href} className={wrapClass} aria-label={ariaLabel ?? label}>
                {pill}
                {circle}
            </a>
        );
    }

    return (
        <Link href={href} className={wrapClass} aria-label={ariaLabel ?? label}>
            {pill}
            {circle}
        </Link>
    );
}
