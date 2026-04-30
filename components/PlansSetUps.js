"use client";

import { useState } from "react";

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

const officeIcon = "https://www.figma.com/api/mcp/asset/50c8cab5-c95e-42dd-b729-ea1ad09d8728";

export default function PlansSetUps() {
  const [activePlan, setActivePlan] = useState(plans[0].id);
  const currentPlan = plans.find((plan) => plan.id === activePlan) || plans[0];

  return (
    <section className="bg-[#f5f5f7] py-16 md:py-20 lg:py-[72px] text-[#1c2e62]">
      <div className="max-w-[1368px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid items-end gap-8 md:grid-cols-2 lg:gap-[72px]">
          <div>
            <span className="rounded-full border border-[#1c2e62] px-3 py-2 text-xs">Solutions</span>
            <h2 className="mt-4 text-[40px] md:text-5xl lg:text-[48px] leading-[1.2]">
              More Room
              <br />
              <span className="font-semibold">For Ambition</span>
            </h2>
          </div>
          <p className="text-base md:text-lg max-w-[558px] leading-[1.5]">
            Smart, fully equipped offices with professional support built in. Designed for start-ups, SMEs, freelancers and small firms.
          </p>
        </div>
        <div className="mt-10 border-b border-[#dbe2f7] pb-[10px] flex flex-wrap gap-x-9 gap-y-3 text-lg md:text-xl font-semibold">
          {plans.map((plan) => {
            const active = plan.id === activePlan;
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => setActivePlan(plan.id)}
                className={`${active ? "border-b-2 border-[#1c2e62] text-[#1c2e62]" : "text-[#1c2e62]/40"} pb-[10px]`}
              >
                {plan.label}
              </button>
            );
          })}
        </div>
        <div className="mt-12 grid min-h-[649px] overflow-hidden lg:grid-cols-[41.8%_58.2%]">
          <div className="bg-[#1f3473] px-8 py-10 md:px-12 md:py-14 lg:px-[72px] lg:py-[69px] text-white">
            <img src={officeIcon} alt={`${currentPlan.title} icon`} className="h-[72px] w-[72px]" />
            <h3 className="mt-6 text-3xl md:text-4xl lg:text-[50px] font-semibold leading-[1.2] text-[#ab8b51]">{currentPlan.title}</h3>
            <p className="mt-12 max-w-[401px] text-[#9db6f6] text-base leading-[1.5]">
              {currentPlan.description}
            </p>
            <button className="mt-14 inline-flex items-center gap-3 text-xl md:text-2xl font-semibold uppercase">
              Know More <IconArrowUpRight className="h-6 w-6 md:h-7 md:w-7" />
            </button>
          </div>
          <img src={currentPlan.image} alt={`${currentPlan.title} interior`} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
