 "use client";
 
 import Image from "next/image";
 import Link from "next/link";
 import { useEffect, useRef, useState } from "react";
 
 const INTRO_SECTION_ID = "tech-intro-section";
 
 export function TechWhatsAppFloatingButton() {
     const [isVisible, setIsVisible] = useState(false);
     const rafRef = useRef<number | null>(null);
 
     useEffect(() => {
         const update = () => {
             const intro = document.getElementById(INTRO_SECTION_ID);
             if (!intro) return;
 
             const rect = intro.getBoundingClientRect();
             const vh = window.innerHeight || 0;
 
             // Show once the intro section has entered the viewport (or we have scrolled past it).
             // Hide again when we scroll back above it.
             const shouldShow = rect.top <= vh * 0.9;
             const shouldHide = rect.top > vh * 0.9;
 
             setIsVisible((prev) => {
                 if (prev && shouldHide) return false;
                 if (!prev && shouldShow) return true;
                 return prev;
             });
         };
 
         const onScrollOrResize = () => {
             if (rafRef.current) cancelAnimationFrame(rafRef.current);
             rafRef.current = requestAnimationFrame(update);
         };
 
         update();
         window.addEventListener("scroll", onScrollOrResize, { passive: true });
         window.addEventListener("resize", onScrollOrResize);
         return () => {
             window.removeEventListener("scroll", onScrollOrResize);
             window.removeEventListener("resize", onScrollOrResize);
             if (rafRef.current) cancelAnimationFrame(rafRef.current);
         };
     }, []);
 
     return (
         <Link
             href="https://wa.me/917736779775"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="Contact us on WhatsApp"
             className={[
                 "fixed right-[16px] bottom-[20px] md:right-[24px] md:bottom-[28px] lg:right-[34px] lg:bottom-[110px]",
                 "w-[56px] h-[56px] md:w-[62px] md:h-[62px] lg:w-[70px] lg:h-[70px]",
                 "rounded-[200px] border border-white/30 overflow-hidden p-0 z-[9999]",
                 "cursor-pointer bg-white/5 flex items-center justify-center",
                 "transition-transform duration-300 ease-in-out select-none hover:scale-110",
                 "transition-opacity duration-200 ease-out",
                 isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
             ].join(" ")}
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
 
