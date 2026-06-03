import Image from "next/image";

type Props = {
    src: string;
};

/** Decorative feature grid icon (SVG). */
export function MarketingFeatureIcon({ src }: Props) {
    return (
        <span className="inline-flex h-[26px] w-[26px] shrink-0 items-start justify-start p-0 sm:h-[30px] sm:w-[30px]">
            <Image
                src={src}
                alt=""
                aria-hidden
                width={30}
                height={30}
                className="block h-[26px] w-[26px] object-contain object-left-top sm:h-[30px] sm:w-[30px]"
                draggable={false}
            />
        </span>
    );
}
