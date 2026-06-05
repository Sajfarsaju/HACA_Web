"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ReturnToHacaButton() {
    const pathname = usePathname();
    if (pathname === "/") return null;

    return (
        <Link
            href="/"
            className="fixed bottom-[24px] right-[24px] z-[100] transition-transform duration-300 ease-in-out select-none hover:scale-105"
            aria-label="Return to HACA home"
        >
            <Image
                src="/photos/main/return to haca button.svg"
                alt="Return to HACA"
                width={123}
                height={53}
                className="w-[100px] h-auto md:w-[123px]"
            />
        </Link>
    );
}
