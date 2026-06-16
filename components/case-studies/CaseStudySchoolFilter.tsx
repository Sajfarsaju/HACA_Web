"use client"

const SCHOOLS = [
    { id: "all", label: "All" },
    { id: "marketing-school", label: "Marketing School" },
    { id: "design-school", label: "Design School" },
    { id: "tech-school", label: "Tech School" },
] as const

export function CaseStudySchoolFilter({
    value = "all",
    onChange,
}: {
    value?: string
    onChange?: (id: string) => void
}) {
    const activeId = value

    return (
        <div className="w-full min-w-0 max-w-[610px] mx-auto rounded-[100px] py-2 max-md:overflow-x-auto md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <div className="flex flex-row flex-nowrap items-center justify-center gap-[clamp(6px,1vw,16px)] px-[clamp(20px,3vw,32px)] w-max min-w-full">
                {SCHOOLS.map(({ id, label }) => {
                    const isActive = activeId === id
                    return (
                        <button
                            key={id}
                            type="button"
                            onClick={() => onChange?.(id)}
                            className={`
                                shrink-0 font-rethink font-medium text-[clamp(14px,1.25vw,18px)] leading-[27px] rounded-[100px]
                                py-[clamp(10px,1.1vw,12px)] px-[clamp(12px,1.3vw,16px)]
                                transition-colors
                                ${isActive
                                    ? "bg-[#131839] border border-[#1F275F] text-white"
                                    : "bg-transparent border border-transparent text-[#A7ADBE] hover:text-white/80"
                                }
                            `}
                        >
                            {label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
