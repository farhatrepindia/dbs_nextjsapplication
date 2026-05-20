function IconAirplane({ className }) {
  return (
    <svg viewBox="0 0 34 34" fill="none" aria-hidden="true" className={className}>
      <path
        d="M17 3L20.5 13.5L31 17L20.5 20.5L17 31L13.5 20.5L3 17L13.5 13.5L17 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTransport({ className }) {
  return (
    <svg viewBox="0 0 34 34" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 22H6L8 14H26L28 22H30M8 22H26M8 22C8 23.1046 7.10457 24 6 24C4.89543 24 4 23.1046 4 22M26 22C26 23.1046 25.1046 24 24 24C22.8954 24 22 23.1046 22 22M12 10H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const iconByTitle = {
  "By Airport": IconAirplane,
  "By Rail": IconTransport,
  "By Road": IconTransport,
  Hotels: IconTransport,
};

export default function LocationDetailGettingThere({ items, mapImage, mapInset }) {
  return (
    <section className="border-t border-[#e0e0e0] bg-[#f5f5f7] py-14 lg:py-[72px]">
      <div className="custom-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,696px)_1fr] lg:gap-[94px]">
          <div>
            <h2 className="text-[clamp(28px,4vw,36px)] font-normal leading-[1.2] text-[#212121]">Getting There</h2>
            <div className="mt-[48px] grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2">
              {items.map((item) => {
                const Icon = iconByTitle[item.title] || IconTransport;
                return (
                  <div key={item.title} className="flex gap-[58px]">
                    <Icon className="size-[34px] shrink-0 text-[#1c2e62]" />
                    <div>
                      <h3 className="text-xl font-semibold leading-[1.5] text-[#1c2e62]">{item.title}</h3>
                      <p className="mt-6 text-sm font-normal leading-[1.5] text-[#616161]">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[400px] overflow-hidden bg-[#e0e0e0] lg:min-h-[555px]">
            <img src={mapImage} alt="" className="absolute inset-0 size-full object-cover" />
            {mapInset ? (
              <img
                src={mapInset}
                alt=""
                className="absolute left-2.5 top-2.5 w-[214px] max-w-[45%] border border-white/80 object-cover shadow-md"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
