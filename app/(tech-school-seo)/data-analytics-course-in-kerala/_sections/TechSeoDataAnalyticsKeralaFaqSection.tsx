"use client";

import { useState } from "react";

import {
    DATA_ANALYTICS_KERALA_FAQS,
    type DataAnalyticsKeralaFaqItem,
} from "@/lib/tech-school-seo";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "data-analytics-kerala-faq-heading";

function PlusIcon({ open }: { open: boolean }) {
    return (
        <span
            className={[
                "relative inline-block h-5 w-5 shrink-0 text-[#6949FF] transition-transform duration-200 ease-out lg:h-7 lg:w-7",
                open ? "rotate-45" : "rotate-0",
            ].join(" ")}
            aria-hidden
        >
            <span className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 bg-current" />
            <span className="absolute left-1/2 top-1/2 h-full w-[2px] -translate-x-1/2 -translate-y-1/2 bg-current" />
        </span>
    );
}

function FaqAccordionItem({
    item,
    open,
    onToggle,
}: {
    item: DataAnalyticsKeralaFaqItem;
    open: boolean;
    onToggle: () => void;
}) {
    const panelId = `${item.id}-panel`;
    const buttonId = `${item.id}-button`;

    return (
        <div className="w-full min-w-0">
            <h3 className="m-0">
                <button
                    id={buttonId}
                    type="button"
                    onClick={onToggle}
                    className="flex w-full min-w-0 cursor-pointer items-center justify-between gap-4 py-4 text-left lg:min-h-[72px] lg:gap-6 lg:py-5"
                    aria-expanded={open}
                    aria-controls={panelId}
                >
                    <span className="min-w-0 font-manrope text-base font-medium leading-[120%] text-white lg:text-2xl lg:leading-[120%]">
                        {item.question}
                    </span>
                    <PlusIcon open={open} />
                </button>
            </h3>

            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={[
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                ].join(" ")}
            >
                <div className="overflow-hidden">
                    <p className="m-0 pb-4 pr-8 font-manrope text-sm font-normal leading-[140%] text-[#C6C6C6B2] lg:pb-5 lg:pr-12 lg:text-lg lg:leading-[33.6px]">
                        {item.answer}
                    </p>
                </div>
            </div>

            <div className="border-t border-[#363636]" aria-hidden />
        </div>
    );
}

export function TechSeoDataAnalyticsKeralaFaqSection() {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section
            className="mx-auto w-full max-w-[1440px] bg-transparent"
            aria-labelledby={HEADING_ID}
        >
            <div className="box-border flex w-full flex-col gap-[30px] px-4 py-5 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:px-[60px] lg:py-10">
                <header className="w-full shrink-0 lg:max-w-[min(100%,420px)]">
                    <h2
                        id={HEADING_ID}
                        className="m-0 text-left font-manrope text-[26px] font-semibold leading-[120%] tracking-[-0.02em] text-white lg:text-[40px]"
                    >
                        <span className="block">Questions Students</span>
                        <span className="block">Usually Ask</span>
                    </h2>
                </header>

                <div
                    className="w-full min-w-0 lg:max-w-[844px] lg:flex-1"
                    role="list"
                    aria-label="Frequently asked questions about the data analytics course in Kerala"
                >
                    {DATA_ANALYTICS_KERALA_FAQS.map((item) => (
                        <div key={item.id} role="listitem">
                            <FaqAccordionItem
                                item={item}
                                open={openId === item.id}
                                onToggle={() =>
                                    setOpenId((prev) => (prev === item.id ? null : item.id))
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>

            <TechSeoSectionBottomRule />
        </section>
    );
}
