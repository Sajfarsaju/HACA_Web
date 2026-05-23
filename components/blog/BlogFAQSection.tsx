"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { FaqItem } from "@/lib/blog-data";

interface BlogFAQSectionProps {
  faqs: FaqItem[];
}

export function BlogFAQSection({ faqs }: BlogFAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-[20px] pt-4 max-md:gap-[14px]">
      {/* Title */}
      <h2 className="font-rethink font-bold text-[28px] leading-[110%] text-white m-0 max-md:text-[20px]">
        Frequently Asked Questions
      </h2>

      {/* Accordion list */}
      <div className="flex flex-col gap-[14px] max-md:gap-[8px]" role="list">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <motion.div
              key={i}
              className={`w-full border rounded-[20px] bg-[#000319] overflow-hidden max-md:rounded-[10px] ${
                isOpen ? "border-[rgba(37,49,125,0.5)]" : "border-[#25317D]"
              }`}
              role="listitem"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.06 }}
            >
              <button
                className="w-full flex flex-row items-center justify-between gap-[30px] p-[16px_30px] bg-transparent border-none cursor-pointer text-left box-border min-h-[64px] max-md:p-[10px_14px] max-md:gap-[12px] max-md:min-h-[50px]"
                aria-expanded={isOpen}
                onClick={() => setOpenIdx(isOpen ? null : i)}
              >
                <span className="font-rethink font-semibold text-[18px] leading-[130%] tracking-[-0.02em] text-white flex-1 text-left max-md:text-[14px]">
                  {faq.question}
                </span>
                <span className={`shrink-0 w-[32px] h-[32px] flex items-center justify-center transition-transform duration-300 ease max-md:w-[18px] max-md:h-[18px] ${isOpen ? "rotate-45" : ""}`}>
                  <img
                    src="/photos/main/plus icon.svg"
                    alt={isOpen ? "Collapse" : "Expand"}
                    className="w-[32px] h-[32px] block max-md:w-[18px] max-md:h-[18px]"
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-[0_30px_18px_30px] font-rethink font-normal text-[16px] leading-[165%] text-[#A7ADBE] max-md:p-[0_14px_14px_14px] max-md:text-[13px]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
