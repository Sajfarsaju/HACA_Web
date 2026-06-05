"use client";

import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_CHAT_URL } from "@/lib/whatsapp";

export function TechWhatsAppFloatingButton() {
    return (
        <Link
            href={WHATSAPP_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="fixed bottom-[90px] right-[24px] w-[50px] h-[50px] md:w-[70px] md:h-[70px] z-[9999] flex items-center justify-center transition-transform duration-300 ease-in-out select-none hover:scale-110"
        >
            <Image
                src="/photos/Tech/ic_baseline-whatsapp.svg"
                alt="WhatsApp"
                width={80}
                height={80}
                className="block w-full h-full shrink-0 object-contain"
                priority={false}
            />
        </Link>
    );
}
