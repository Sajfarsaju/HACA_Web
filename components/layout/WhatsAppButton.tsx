"use client"

import Image from "next/image"
import Link from "next/link"

export function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float-btn"
            aria-label="Contact us on WhatsApp"
        >
            <Image
                src="/photos/common/ic_baseline-whatsapp.svg"
                alt="WhatsApp"
                width={70}
                height={70}
                className="whatsapp-float-icon"
            />
        </Link>
    )
}
