"use client"

import Image from "next/image"
import Link from "next/link"

export function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-[25px] right-[25px] md:bottom-[40px] md:right-[40px] z-[100] flex items-center justify-center transition-transform duration-300 ease-in-out select-none hover:scale-110"
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
