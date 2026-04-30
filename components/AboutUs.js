function IconArrowUpRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M7 17 17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 7h7v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const stats = [
  { value: "9", label: "Centres" },
  { value: "6", label: "Cities" },
  { value: "38", label: "Years In Business" },
  { value: "20,000+", label: "Businesses" },
];

export default function AboutUs() {
  return (
    <section className="bg-[#f5f5f7] py-16 md:py-20 lg:py-[72px] text-[#1c2e62]">
      <div className="max-w-[1368px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="rounded-full border border-[#1c2e62] px-3 py-2 text-xs">About Us</span>
            <h2 className="mt-4 text-[40px] md:text-5xl lg:text-[48px] leading-[1.2]">
              The Freedom
              <br />
              <span className="font-semibold">To Move Fast</span>
            </h2>
          </div>
          <div>
            <p className="text-base md:text-lg leading-[1.5] max-w-[557px]">
              DBS crafts premium, bespoke workspaces designed for visionaries. Whether you are an independent consultant or a global enterprise, we provide agile, fully managed environments tailored to your exact specifications.
            </p>
            <button className="mt-9 inline-flex items-center gap-3 text-xl md:text-2xl font-semibold uppercase">
              Know More <IconArrowUpRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="mt-14 border-b border-[#cfd8ec] pb-6 text-2xl md:text-3xl">
          Built for flow. <span className="font-semibold">The numbers followed.</span>
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-6xl md:text-7xl lg:text-[120px] font-light leading-none tracking-[-0.06em]">{item.value}</p>
              <p className="mt-3 text-xl md:text-2xl">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
