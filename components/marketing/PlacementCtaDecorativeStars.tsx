import Image from "next/image";

type Props = {
    topRightClassName?: string;
    bottomLeftClassName?: string;
};

const DEFAULT_TOP_RIGHT =
    "pointer-events-none absolute right-0 top-0 h-auto w-[min(297px,72%)] max-sm:w-[min(200px,58%)] select-none";
const DEFAULT_BOTTOM_LEFT =
    "pointer-events-none absolute bottom-0 left-0 h-auto w-[min(246px,68%)] max-sm:w-[min(180px,55%)] select-none";

/** Decorative corner stars on marketing placement / CTA panels. */
export function PlacementCtaDecorativeStars({
    topRightClassName = DEFAULT_TOP_RIGHT,
    bottomLeftClassName = DEFAULT_BOTTOM_LEFT,
}: Props) {
    return (
        <>
            <Image
                src="/photos/schools/marketing/placements/placement-cta-star-tr.svg"
                alt=""
                width={297}
                height={301}
                className={topRightClassName}
                aria-hidden
            />
            <Image
                src="/photos/schools/marketing/placements/placement-cta-star-bl.svg"
                alt=""
                width={246}
                height={250}
                className={bottomLeftClassName}
                aria-hidden
            />
        </>
    );
}
