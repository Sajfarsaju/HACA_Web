import Image from "next/image";

const ARROW_SRC = "/photos/schools/marketing/mingcute_arrow-up-line.svg";

/**
 * Blue circle with “sliding right” arrow (hover). Parent must include `group`.
 * Sizes: mobile 44×44 / arrow 22×22; desktop 60×60 / arrow 30×30 (aligned to Figma).
 */
export function MarketingCtaArrowCircle({
    className = "",
    size = "responsive",
    background = "#015AFF",
}: {
    className?: string
    size?: "responsive" | "60"
    background?: string
}) {
    const is60 = size === "60"
    return (
        <div
            className={`pointer-events-none shrink-0 ${
                is60 ? "h-[60px] w-[60px]" : "h-[44px] w-[44px] md:h-[60px] md:w-[60px]"
            } ${className}`}
            aria-hidden
        >
            <div
                className={`relative h-full w-full overflow-hidden ${is60 ? "rounded-[30px]" : "rounded-[22px] md:rounded-[30px]"}`}
                style={{ background }}
            >
                <div
                    className={`absolute -translate-x-[44px] transition-transform duration-300 ease-out group-hover:translate-x-0 ${
                        is60
                            ? "left-[15px] top-[15px] h-[30px] w-[30px] -translate-x-[60px]"
                            : "left-[11px] top-[11px] h-[22px] w-[22px] md:left-[15px] md:top-[15px] md:h-[30px] md:w-[30px] md:-translate-x-[60px]"
                    }`}
                >
                    <Image
                        src={ARROW_SRC}
                        alt=""
                        width={30}
                        height={30}
                        className="h-full w-full object-contain"
                        unoptimized
                    />
                </div>
                <div
                    className={`absolute translate-x-0 transition-transform duration-300 ease-out group-hover:translate-x-[44px] ${
                        is60
                            ? "left-[15px] top-[15px] h-[30px] w-[30px] group-hover:translate-x-[60px]"
                            : "left-[11px] top-[11px] h-[22px] w-[22px] md:left-[15px] md:top-[15px] md:h-[30px] md:w-[30px] md:group-hover:translate-x-[60px]"
                    }`}
                >
                    <Image
                        src={ARROW_SRC}
                        alt=""
                        width={30}
                        height={30}
                        className="h-full w-full object-contain"
                        unoptimized
                    />
                </div>
            </div>
        </div>
    );
}
