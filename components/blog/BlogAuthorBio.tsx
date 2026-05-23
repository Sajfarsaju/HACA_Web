type Props = {
    author: string
    authorRole?: string
    authorPhotoUrl?: string
    bio?: string
}

const DEFAULT_BIO =
    "Deepna KV is an SEO content writer and copywriter with over 3 years of experience. She has worked with over 25 clients across India and the UAE, creating SEO content and copywriting assets such as blogs, website pages, landing pages, and UX copy for industries including marketing, technology, finance, design, hospitality, and real estate."

export function BlogAuthorBio({ author, authorRole, authorPhotoUrl, bio = DEFAULT_BIO }: Props) {
    const initial = author?.[0] ?? "D"

    return (
        // Desktop-only center container in the sidebar
        <div
            className="hidden lg:flex w-[384px] max-w-full flex-col gap-5 p-0"
            style={{ fontFamily: "var(--font-manrope), var(--font-rethink-sans), sans-serif" }}
        >
                {/* Name + role - Manrope SemiBold 26px/20px, line-height 100%, letter-spacing -2%, #FFFFFF */}
                <div className="flex flex-col gap-[10px] w-full max-w-[180px]">
                   {/* Top row: avatar + name/role */}
            <div className="flex items-center gap-[18px] w-full">
                {/* Avatar: photo if available, else initial */}
                <div className="w-[82px] h-[80.5px] rounded-[16px] bg-[#11152B] flex items-center justify-center overflow-hidden shrink-0">
                    {authorPhotoUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={authorPhotoUrl} alt={author} className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-white text-[32px] font-semibold leading-none tracking-[-0.02em]">
                            {initial}
                        </span>
                    )}
                </div>
                {/* Name + role stacked */}
                <div className="flex flex-col gap-[6px]">
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
                        {author}
                    </p>
                    {authorRole && (
                        <p
                            className="m-0"
                            style={{
                                fontFamily: "var(--font-manrope), var(--font-rethink-sans), sans-serif",
                                fontWeight: 500,
                                fontSize: "15px",
                                lineHeight: "100%",
                                letterSpacing: "-0.01em",
                                color: "#A7ADBE",
                            }}
                        >
                            {authorRole}
                        </p>
                    )}
                </div>
                </div>
            </div>

            {/* Bio paragraph - add comfortable line height and word spacing */}
            <p
                className="m-0"
                style={{
                    fontFamily: "var(--font-manrope), var(--font-rethink-sans), sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "-0.01em",
                    wordSpacing: "0.06em",
                    color: "#A7ADBE",
                }}
            >
                {bio}
            </p>
        </div>
    )
}
