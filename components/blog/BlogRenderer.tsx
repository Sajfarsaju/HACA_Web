"use client"

import * as React from "react"
import type { BlogBlock } from "@/lib/blog-blocks"

export function BlogRenderer({ blocks }: { blocks: BlogBlock[] }) {
    return (
        <div className="w-full flex flex-col gap-[16px] md:gap-[20px] lg:gap-[30px]">
            {blocks.map((block) => {
                switch (block.type) {
                    case "heading": {
                        // Blog title is already rendered as the page H1.
                        // Keep content headings aligned with existing static blog styles.
                        const Tag = "h2" as const
                        const cls = block.level === 1
                            ? "font-rethink font-bold text-[20px] md:text-[40px] leading-[110%] text-white m-0"
                            : "font-rethink font-bold text-[18px] md:text-[32px] leading-[110%] text-white m-0"
                        const headingId = `heading-${block.id}`
                        return (
                            <Tag key={block.id} id={headingId} className={cls}>
                                {block.text}
                            </Tag>
                        )
                    }
                    case "paragraph":
                        return (
                            <p
                                key={block.id}
                                className="font-rethink font-medium text-[16px] md:text-[20px] leading-[27px] md:leading-[34px] text-[#A7ADBE] m-0"
                            >
                                {block.text}
                            </p>
                        )
                    case "image":
                        return (
                            <figure key={block.id} className="w-full flex flex-col gap-2 md:gap-3 m-0">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={block.url}
                                    alt={block.alt || ""}
                                    className="w-full h-auto rounded-[10.63px] sm:rounded-[14px] md:rounded-[18px] lg:rounded-[20px] object-cover bg-[#11152B]"
                                    loading="lazy"
                                />
                                {block.caption ? (
                                    <figcaption className="font-rethink font-medium text-[14px] md:text-[16px] text-[#A7ADBE] leading-[25.5px]">
                                        {block.caption}
                                    </figcaption>
                                ) : null}
                            </figure>
                        )
                    case "list":
                        return block.ordered ? (
                            <ol
                                key={block.id}
                                className="m-0 pl-5 md:pl-6 list-decimal flex flex-col gap-[6px] md:gap-[10px] font-rethink font-medium text-[#A7ADBE] text-[16px] md:text-[20px] leading-[27px] md:leading-[34px]"
                            >
                                {block.items.filter(Boolean).map((it, i) => (
                                    <li key={i} className="m-0">
                                        {it}
                                    </li>
                                ))}
                            </ol>
                        ) : (
                            <ul
                                key={block.id}
                                className="m-0 pl-5 md:pl-6 list-disc flex flex-col gap-[6px] md:gap-[10px] font-rethink font-medium text-[#A7ADBE] text-[16px] md:text-[20px] leading-[27px] md:leading-[34px]"
                            >
                                {block.items.filter(Boolean).map((it, i) => (
                                    <li key={i} className="m-0">
                                        {it}
                                    </li>
                                ))}
                            </ul>
                        )
                    case "callout":
                        return (
                            <div
                                key={block.id}
                                className="w-full rounded-[16px] md:rounded-[20px] border border-[#232D6B] bg-[#000319] p-4 md:p-5"
                            >
                                {block.title ? (
                                    <p className="m-0 font-rethink font-semibold text-white text-[16px] md:text-[18px] leading-[130%]">
                                        {block.title}
                                    </p>
                                ) : null}
                                <p className="mt-2 m-0 font-rethink font-medium text-[#A7ADBE] text-[16px] md:text-[20px] leading-[27px] md:leading-[34px]">
                                    {block.text}
                                </p>
                            </div>
                        )
                    default:
                        return null
                }
            })}
        </div>
    )
}

