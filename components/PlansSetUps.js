"use client";

import { useLayoutEffect, useRef, useState } from "react";

function IconArrowUpRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M7 17 17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 7h7v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const plans = [
  {
    id: "complete-office",
    label: "Complete Office",
    title: "Complete Office",
    description:
      "Smart, fully equipped offices with professional support built in. Designed for start-ups, SMEs, freelancers and small firms.",
    image: "https://www.figma.com/api/mcp/asset/11a50519-4994-494d-82db-74965843cc1f",
  },
  {
    id: "customise-office",
    label: "Customise Office",
    title: "Customise Office",
    description:
      "Flexible managed workspaces tailored to your brand, team size, and future growth plans with plug-and-play readiness.",
    image: "https://www.figma.com/api/mcp/asset/11a50519-4994-494d-82db-74965843cc1f",
  },
  {
    id: "shared-office",
    label: "Shared Office",
    title: "Shared Office",
    description:
      "A collaborative office setup that balances privacy and connection, built for agile teams and fast-moving projects.",
    image: "https://www.figma.com/api/mcp/asset/11a50519-4994-494d-82db-74965843cc1f",
  },
  {
    id: "virtual-office",
    label: "Virtual Office",
    title: "Virtual Office",
    description:
      "Premium business address, call handling, and operational support to help your team scale with confidence from anywhere.",
    image: "https://www.figma.com/api/mcp/asset/11a50519-4994-494d-82db-74965843cc1f",
  },
];

const officeIcon = "/ic-arrow-top-right.svg";

export default function PlansSetUps() {
  const [activePlan, setActivePlan] = useState(plans[0].id);
  const tabsNavRef = useRef(null);
  const tabBtnRefs = useRef({});
  const [tabIndicator, setTabIndicator] = useState({ top: 0, left: 0, width: 0 });

  useLayoutEffect(() => {
    const nav = tabsNavRef.current;
    const btn = tabBtnRefs.current[activePlan];
    if (!nav || !btn) return;

    const placeIndicator = () => {
      const navRect = nav.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setTabIndicator({
        top: btnRect.bottom - navRect.top + nav.scrollTop - 2,
        left: btnRect.left - navRect.left + nav.scrollLeft,
        width: btnRect.width,
      });
    };

    placeIndicator();

    const ro = new ResizeObserver(placeIndicator);
    ro.observe(nav);
    ro.observe(btn);
    window.addEventListener("resize", placeIndicator);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", placeIndicator);
    };
  }, [activePlan]);

  return (
    <section className="bg-[#f5f5f7] pt-16 md:pt-20 lg:pt-[72px] text-[#1c2e62]">
      <div className="custom-container">
        <div className="grid items-end gap-8 md:grid-cols-2 lg:gap-[72px]">
          <div>
            <span className="rounded-full border border-[#1c2e62] px-3 py-2 text-xs">Solutions</span>
            <h2 className="mt-4 text-[40px] md:text-5xl lg:text-[48px] leading-[1.2]">
              More Room
              <br />
              <span className="font-semibold leading-[var(--type-heading-snug)]">For Ambition</span>
            </h2>
          </div>
          <div className="max-w-[558px] ml-auto">
          <p className="text-base md:text-lg leading-[1.5]">
            Smart, fully equipped offices with professional support built in. Designed for start-ups, SMEs, freelancers and small firms.
          </p>
          </div>
        </div>
        <div
          ref={tabsNavRef}
          className="relative mt-12 flex flex-wrap gap-9 border-b border-[#dbe2f7]  text-lg md:text-xl font-semibold"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute z-[1] h-0.5 rounded-full bg-[#1c2e62] motion-safe:transition-[left,width,top,opacity] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              top: tabIndicator.top,
              left: tabIndicator.left,
              width: tabIndicator.width,
              opacity: tabIndicator.width > 0 ? 1 : 0,
            }}
          />
          {plans.map((plan) => {
            const active = plan.id === activePlan;
            return (
              <button
                key={plan.id}
                ref={(el) => {
                  if (el) tabBtnRefs.current[plan.id] = el;
                  else delete tabBtnRefs.current[plan.id];
                }}
                type="button"
                onClick={() => setActivePlan(plan.id)}
                className={`relative z-[2] py-[10px] transition-colors duration-300 ease-out ${
                  active ? "text-[#1c2e62]" : "text-[#1c2e62]/40 hover:text-[#1c2e62]/65"
                }`}
              >
                {plan.label}
              </button>
            );
          })}
        </div>
        <div className="relative mt-12 min-h-[649px]">
          {plans.map((plan) => {
            const active = plan.id === activePlan;
            return (
              <div
                key={plan.id}
                inert={!active}
                aria-hidden={!active}
                className={`grid min-h-[649px] overflow-hidden transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:duration-0 lg:grid-cols-[41.8%_58.2%] ${
                  active
                    ? "relative z-[2] opacity-100"
                    : "pointer-events-none absolute inset-0 z-0 opacity-0"
                }`}
              >
                <div className="bg-[#1f3473] px-8 py-10 md:px-12 md:py-14 lg:px-[72px] lg:py-[69px] text-white">
                  <img src={officeIcon} alt={`${plan.title} icon`} className="h-[72px] w-[72px]" />
                  <h3 className="mt-6 text-3xl md:text-4xl lg:text-[36px] font-semibold leading-[1.2] text-[#ab8b51]">
                    {plan.title}
                  </h3>
                  <p className="mt-20 max-w-[401px] text-[#9db6f6] text-base leading-[1.5]">{plan.description}</p>
                  <button
                    type="button"
                    tabIndex={active ? undefined : -1}
                    className="mt-20 inline-flex items-center gap-3 text-xl md:text-2xl font-semibold uppercase"
                  >
                    Know More <IconArrowUpRight className="h-6 w-6 md:h-7 md:w-7" />
                  </button>
                </div>
                <img
                  src={plan.image}
                  alt={`${plan.title} interior`}
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
