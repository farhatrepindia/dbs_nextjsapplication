function IconArrowUpRight(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M7 17 17 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 7h7v7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const activePlanImage =
  "https://www.figma.com/api/mcp/asset/11ed4b3a-d3df-4b71-a89a-87c95253a5e0";
const officeIconImage =
  "https://www.figma.com/api/mcp/asset/618f1c12-b466-4cbb-b164-c295a8df1e74";

export default function DbHero() {
  return (
    <section className="w-full bg-[#f5f5f7] py-12 text-[#1c2e62] sm:py-16 lg:py-[72px]">
      <div className="mx-auto w-full max-w-[1512px] px-5 sm:px-10 lg:px-[72px]">
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[560px]">
            <span className="inline-flex rounded-full border border-[#1c2e62] px-3 py-2 text-xs leading-[1.5]">
              Solutions
            </span>
            <h2 className="mt-4 text-5xl font-normal leading-[1.2] tracking-[-0.02em]">
              More Room
              <br />
              <span className="font-semibold">For Ambition</span>
            </h2>
          </div>
          <p className="max-w-[558px] text-base leading-[1.5] text-[#1c2e62]">
            Smart, fully equipped offices with professional support built in.
            Designed for start-ups, SMEs, freelancers and small firms.
          </p>
        </div>

        <div className="mt-10 border-b border-[#dbe2f7]">
          <div className="flex flex-wrap items-center gap-x-9 gap-y-3 text-[32px] leading-[1.5]">
            <button
              type="button"
              className="border-b-2 border-[#1c2e62] pb-2 text-xl font-semibold text-[#1c2e62]"
            >
              Complete Office
            </button>
            <button
              type="button"
              className="pb-2 text-xl font-semibold text-[#1c2e62]/40"
            >
              Customise Office
            </button>
            <button
              type="button"
              className="pb-2 text-xl font-semibold text-[#1c2e62]/40"
            >
              Shared Office
            </button>
            <button
              type="button"
              className="pb-2 text-xl font-semibold text-[#1c2e62]/40"
            >
              Virtual Office
            </button>
          </div>
        </div>

        <div className="mt-8 grid min-h-[649px] overflow-hidden bg-white lg:grid-cols-[41.87%_58.13%]">
          <div className="bg-[#1f3473] px-8 py-10 text-white sm:px-12 sm:py-14 lg:px-[72px] lg:py-[69px]">
            <img
              src={officeIconImage}
              alt=""
              className="h-[72px] w-[72px]"
              aria-hidden="true"
            />
            <h3 className="mt-6 text-[36px] font-semibold leading-[1.2] text-[#ab8b51]">
              Complete Office
            </h3>
            <p className="mt-12 max-w-[401px] text-base leading-[1.5] text-[#9db6f6]">
              Smart, fully equipped offices with professional support built in.
              Designed for start-ups, SMEs, freelancers and small firms.
            </p>
            <button
              type="button"
              className="mt-14 inline-flex items-center gap-4 py-2 text-xl font-semibold uppercase"
            >
              Know More
              <IconArrowUpRight className="h-6 w-6" />
            </button>
          </div>
          <img
            src={activePlanImage}
            alt="Complete office workspace"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

