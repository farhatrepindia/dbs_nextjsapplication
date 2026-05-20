"use client";

import { useState } from "react";

/**
 * @typedef {{ question: string; open?: boolean; paragraphs?: string[]; answer?: string }} LocationFaqItem
 */

function ChevronDown({ className, open }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={`${className} transition-transform duration-300 ease-in-out motion-reduce:transition-none ${open ? "-scale-y-100" : ""}`}
    >
      <path d="m8 12 8 8 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function faqAnswerParts(faq) {
  if (faq.paragraphs?.length) return faq.paragraphs;
  if (faq.answer) return [faq.answer];
  return [];
}

/** @param {{ faqs: LocationFaqItem[] }} props */
export default function LocationDetailFaqs({ faqs }) {
  const [openIndex, setOpenIndex] = useState(() => faqs.findIndex((faq) => faq.open));

  return (
    <section className="bg-[#e0e0e0] py-12 sm:py-14 lg:py-[72px]">
      <div className="custom-container flex justify-center">
        <div className="flex w-full max-w-[906px] flex-col gap-12">
          <h2 className="text-[clamp(28px,4vw,36px)] font-normal leading-[1.2] text-[#212121]">
            Frequently Asked Questions
          </h2>

          <div className="flex w-full flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const parts = faqAnswerParts(faq);
              return (
                <div key={faq.question} className="w-full">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 border-b border-[#757575] py-8 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c2e62]"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="min-w-0 flex-1 text-xl font-semibold leading-[1.5] text-[#1c2e62]">{faq.question}</span>
                    <ChevronDown className="size-8 shrink-0 text-[#1c2e62]" open={isOpen} />
                  </button>
                  {parts.length > 0 ? (
                    <div
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="min-h-0">
                        <div className="flex flex-col gap-6 pt-6 text-base font-normal leading-[1.5] text-[#616161]">
                          {parts.map((text, i) => (
                            <p key={i} className="m-0">
                              {text}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
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
