"use client"

import Image from "next/image"
import * as React from "react"
import type { BlogBlock } from "@/lib/blog-blocks"

function BlogTableBlock({ headers, rows }: { headers: string[]; rows: string[][] }) {
    return (
        /* gradient border wrapper */
        <div className="w-full rounded-[20px] md:rounded-[22px] p-[1.5px] bg-gradient-to-br from-[#4C75FF] via-[#2540C0] to-[#1a1f5e]">
            <div className="w-full overflow-x-auto rounded-[18.5px] md:rounded-[20.5px]">
                <table className="w-full min-w-full border-collapse">

                    {/* ── Header ── */}
                    {headers.length > 0 && (
                        <thead>
                            <tr>
                                {headers.map((h, i) => (
                                    <th
                                        key={i}
                                        className={[
                                            "px-5 py-[14px] md:px-7 md:py-[18px] text-left",
                                            "font-rethink font-bold text-[11px] md:text-[12px]",
                                            "uppercase tracking-[0.09em] text-[#8BA3FF] whitespace-nowrap",
                                            "bg-gradient-to-r from-[#0f1760] to-[#0b1145]",
                                            i < headers.length - 1
                                                ? "border-r border-[#1e2d8a]"
                                                : "",
                                        ].join(" ")}
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                    )}

                    {/* ── Body ── */}
                    <tbody>
                        {rows.map((row, ri) => (
                            <tr
                                key={ri}
                                style={{
                                    backgroundColor: ri % 2 === 0 ? "#000319" : "#010422",
                                }}
                                className="border-t border-[#1e2d8a]/50 transition-colors duration-200 hover:bg-[#091240]"
                            >
                                {row.map((cell, ci) => (
                                    <td
                                        key={ci}
                                        className={[
                                            "px-5 py-3 md:px-7 md:py-[14px]",
                                            "font-rethink text-[13px] md:text-[15px] leading-[160%]",
                                            ci === 0
                                                ? "font-semibold text-white"
                                                : "font-normal text-[#9EAACB]",
                                            ci < row.length - 1
                                                ? "border-r border-[#1e2d8a]/50"
                                                : "",
                                        ].join(" ")}
                                    >
                                        {ci === 0 ? (
                                            <span className="flex items-center gap-[10px]">
                                                <span className="shrink-0 w-[6px] h-[6px] rounded-full bg-[#4C75FF] opacity-80" />
                                                {cell}
                                            </span>
                                        ) : cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export function BlogRenderer({ blocks }: { blocks: BlogBlock[] }) {
    return (
        <div className="w-full flex flex-col gap-[16px] md:gap-[20px] lg:gap-[30px]">
            {blocks.map((block) => {
                switch (block.type) {
                    case "heading": {
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
                                className="font-rethink font-normal text-[16px] md:text-[20px] leading-[27px] md:leading-[34px] text-[#A7ADBE] m-0"
                            >
                                {block.text}
                            </p>
                        )
                    case "image":
                        return (
                            <figure key={block.id} className="w-full flex flex-col gap-2 md:gap-3 m-0">
                                <Image
                                    src={block.url}
                                    alt={block.alt || ""}
                                    width={1200}
                                    height={675}
                                    className="w-full h-auto rounded-[10.63px] sm:rounded-[14px] md:rounded-[18px] lg:rounded-[20px] object-cover bg-[#11152B]"
                                    sizes="(max-width: 768px) 100vw, 800px"
                                    unoptimized
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
                                    <li key={i} className="m-0">{it}</li>
                                ))}
                            </ol>
                        ) : (
                            <ul
                                key={block.id}
                                className="m-0 pl-5 md:pl-6 list-disc flex flex-col gap-[6px] md:gap-[10px] font-rethink font-medium text-[#A7ADBE] text-[16px] md:text-[20px] leading-[27px] md:leading-[34px]"
                            >
                                {block.items.filter(Boolean).map((it, i) => (
                                    <li key={i} className="m-0">{it}</li>
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
                    case "table":
                        return (
                            <BlogTableBlock
                                key={block.id}
                                headers={block.headers}
                                rows={block.rows}
                            />
                        )
                    case "video": {
                        const isYouTube = block.url.includes("youtube.com") || block.url.includes("youtu.be")
                        const isVimeo   = block.url.includes("vimeo.com")
                        let embedUrl = block.url
                        if (isYouTube) {
                            const ytId = block.url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/)?.[1]
                            if (ytId) embedUrl = `https://www.youtube.com/embed/${ytId}`
                        } else if (isVimeo) {
                            const vimeoId = block.url.match(/vimeo\.com\/(\d+)/)?.[1]
                            if (vimeoId) embedUrl = `https://player.vimeo.com/video/${vimeoId}`
                        }
                        return (
                            <figure key={block.id} className="w-full flex flex-col gap-2 md:gap-3 m-0">
                                {isYouTube || isVimeo ? (
                                    <div className="relative w-full overflow-hidden rounded-[10.63px] sm:rounded-[14px] md:rounded-[18px] lg:rounded-[20px] bg-black" style={{ paddingTop: "56.25%" }}>
                                        <iframe
                                            src={embedUrl}
                                            className="absolute inset-0 w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={block.caption || "Video"}
                                        />
                                    </div>
                                ) : (
                                    <video
                                        src={block.url}
                                        controls
                                        className="w-full h-auto rounded-[10.63px] sm:rounded-[14px] md:rounded-[18px] lg:rounded-[20px] bg-black"
                                        preload="metadata"
                                    />
                                )}
                                {block.caption ? (
                                    <figcaption className="font-rethink font-medium text-[14px] md:text-[16px] text-[#A7ADBE] leading-[25.5px]">
                                        {block.caption}
                                    </figcaption>
                                ) : null}
                            </figure>
                        )
                    }
                    default:
                        return null
                }
            })}
        </div>
    )
}
