import Image from "next/image"

export function BlogShareButtons() {
    return (
        // Desktop-only bottom container in the sidebar
        <div className="hidden lg:flex w-[212px] max-w-full flex-col gap-[10px]">
            {/* Heading */}
            <p
                className="m-0"
                style={{
                    fontFamily: "var(--font-manrope), var(--font-rethink-sans), sans-serif",
                    fontWeight: 600,
                    fontSize: "26px",
                    lineHeight: "100%",
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                }}
            >
                Share this Article
            </p>

            {/* Icons row - render SVGs at their natural size, no extra container */}
            <div className="flex flex-row items-center gap-[7.03px] w-full">
                {[1, 2, 3, 4, 5].map((idx) => (
                    <Image
                        key={idx}
                        src={`/photos/main/blog media button ${idx}.svg`}
                        alt={`Share icon ${idx}`}
                        width={35.17}
                        height={35.17}
                        className="block"
                    />
                ))}
            </div>
        </div>
    )
}

