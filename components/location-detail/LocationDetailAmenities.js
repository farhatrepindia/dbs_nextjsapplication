function IconCheck({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.66667 10L9.16667 12.5L14.1667 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LocationDetailAmenities({ amenities }) {
  return (
    <section className="border-t border-[#e0e0e0] bg-[#f5f5f7] py-14 lg:py-[72px]">
      <div className="custom-container">
        <h2 className="text-[clamp(28px,4vw,36px)] font-normal leading-[1.2] text-[#212121]">Amenities</h2>
        <ul className="mt-[38px] grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((label) => (
            <li key={label} className="flex items-center gap-6">
              <IconCheck className="size-5 shrink-0 text-[#1c2e62]" />
              <span className="text-base font-normal leading-[1.5] text-[#1c2e62]">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
