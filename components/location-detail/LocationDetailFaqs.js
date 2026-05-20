"use client";

import { useState } from "react";

function ChevronDown({ className, open }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={`${className} transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="m8 12 8 8 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LocationDetailFaqs({ faqs }) {
  const [openIndex, setOpenIndex] = useState(() => faqs.findIndex((faq) => faq.open));

  return (
    <section className="bg-[#f5f5f7] py-14 lg:py-[72px]">
      <div className="custom-container flex justify-center">
        <div className="w-full max-w-[906px]">
          <h2 className="text-center text-[clamp(28px,4vw,36px)] font-normal leading-[1.2] text-[#212121]">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 divide-y divide-[#e0e0e0] border-y border-[#e0e0e0]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-8 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold leading-[1.5] text-[#1c2e62] sm:text-xl">{faq.question}</span>
                    <ChevronDown className="size-8 shrink-0 text-[#1c2e62]" open={isOpen} />
                  </button>
                  {isOpen && faq.answer ? (
                    <p className="pb-8 text-base font-normal leading-[1.5] text-[#616161]">{faq.answer}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
