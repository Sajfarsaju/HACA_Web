type TechSeoSectionBottomRuleProps = {
    /** Use when the parent section already applies horizontal padding (avoids double inset). */
    inset?: boolean;
};

/** Horizontal divider below tech SEO Kerala sections (matches hero bottom rule). */
export function TechSeoSectionBottomRule({ inset = false }: TechSeoSectionBottomRuleProps) {
    return (
        <div
            className={[
                "box-border flex w-full items-center justify-center py-10 lg:pb-10 lg:pt-8",
                inset ? "" : "px-4 md:px-[clamp(24px,5vw,60px)] lg:px-[60px]",
            ].join(" ")}
        >
            <hr
                className={[
                    "m-0 h-0 w-full border-0 border-t border-solid border-[#363636]",
                    inset ? "" : "max-w-[344px] lg:max-w-[1321px]",
                ].join(" ")}
                aria-hidden
            />
        </div>
    );
}
