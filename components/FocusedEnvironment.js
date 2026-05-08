"use client";

import { useState } from "react";

const focusedItems = [
  {
    id: "quiet",
    title: "Quiet, Focused Environment",
    image: "https://www.figma.com/api/mcp/asset/b8a49ce4-b0c7-4601-a1a9-2575aa6aa25b",
    caption: "Fewer distractions mean more gets done.",
  },
  {
    id: "flexible",
    title: "Flexible Setups, Easy To Scale",
    image: "https://www.figma.com/api/mcp/asset/769f0d98-f9c6-40b7-b628-5fdab749897f",
    caption: "Agile office configurations built to grow at your pace.",
  },
  {
    id: "connected",
    title: "Helps Teams Stay Connected",
    image: "https://www.figma.com/api/mcp/asset/3eb33b60-dff0-4258-9d1a-16eb20c54ea0",
    caption: "Fluid environments engineered to foster natural collaboration.",
  },
  {
    id: "support",
    title: "Real-Time Support, When You Need It",
    image: "https://www.figma.com/api/mcp/asset/f9d3e898-1f19-45d9-8165-ff822619eecb",
    caption: "Fewer distractions mean more gets done.",
  },
];

function IconArrowUpRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M7 17 17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 7h7v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FocusedEnvironment() {
  const [activeId, setActiveId] = useState(focusedItems[0].id);

  return (
    <section className="bg-white">
      <div className="dsdsd">


        <div className="relative min-h-[620px] overflow-hidden border-y border-[#9db6f633] bg-[#eee] lg:grid lg:grid-cols-[43%_57%]">
          <div className="px-6 py-10 text-[#1c2e62] md:px-10 md:py-12 lg:px-[60px] lg:py-[72px] flex flex-col justify-center">
            <ul className="space-y-8 md:space-y-12">
              {focusedItems.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(item.id)}
                      onFocus={() => setActiveId(item.id)}
                      onClick={() => setActiveId(item.id)}
                      className={`group flex w-full items-start justify-between gap-5 text-left transition-colors duration-200 ${
                        isActive ? "text-[#1c2e62]" : "text-[#1c2e62]/40 hover:text-[#1c2e62]/70"
                      }`}
                    >
                      <span className="max-w-[420px] text-[38px] font-semibold leading-[1.08] md:text-[42px] lg:text-[36px]">{item.title}</span>
                      <IconArrowUpRight className="mt-2 size-9 shrink-0 text-current md:size-10 lg:size-[62px]" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative min-h-[380px] overflow-hidden lg:min-h-[730px]">
            {focusedItems.map((item) => {
              const isActive = item.id === activeId;
              return (
                <div
                  key={item.id}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 transition-all duration-2000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                    isActive
                      ? "z-[2] translate-x-0 translate-y-0 opacity-100"
                      : "pointer-events-none z-[1] -translate-x-6 translate-y-6 opacity-0"
                  }`}
                >
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(188deg,rgba(0,0,0,0)_50.369%,rgba(0,0,0,0.7)_95.331%)]" />
                  <p className="absolute bottom-8 left-6 max-w-[324px] text-xl leading-[1.5] text-white md:bottom-[92px] md:left-8">{item.caption}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
