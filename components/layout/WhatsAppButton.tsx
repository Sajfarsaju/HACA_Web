"use client"

import Image from "next/image"
import Link from "next/link"
import { WHATSAPP_CHAT_URL } from "@/lib/whatsapp"

export function WhatsAppButton({ href = WHATSAPP_CHAT_URL }: { href?: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-[90px] right-[24px] z-[100] flex items-center justify-center transition-transform duration-300 ease-in-out select-none hover:scale-110"
            aria-label="Contact us on WhatsApp"
        >
            <Image
                src="/photos/common/ic_baseline-whatsapp.svg"
                alt="WhatsApp"
                width={70}
                height={70}
                className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] object-contain"
            />
        </Link>
    )
}
