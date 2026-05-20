import Link from "next/link";

function ChevronRight({ className }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <path d="M5.25 3.5 8.75 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGrid({ className }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <rect x="1.75" y="1.75" width="4.5" height="4.5" rx="0.5" stroke="currentColor" strokeWidth="1.1" />
      <rect x="7.75" y="1.75" width="4.5" height="4.5" rx="0.5" stroke="currentColor" strokeWidth="1.1" />
      <rect x="1.75" y="7.75" width="4.5" height="4.5" rx="0.5" stroke="currentColor" strokeWidth="1.1" />
      <rect x="7.75" y="7.75" width="4.5" height="4.5" rx="0.5" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

function IconMapPin({ className }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
      <path
        d="M15.75 7.5C15.75 12.75 9 16.5 9 16.5C9 16.5 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPhone({ className }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
      <path
        d="M16.5 12.69V14.94C16.5011 15.1482 16.4589 15.3542 16.3765 15.5445C16.2941 15.7348 16.1734 15.9046 16.0228 16.0418C15.8722 16.179 15.6952 16.2806 15.5035 16.3395C15.3119 16.3984 15.1101 16.4132 14.9123 16.3828C12.5578 16.1159 10.3107 15.3276 8.325 14.0756C6.48075 12.9259 4.85625 11.3014 3.7065 9.45713C2.44901 7.46351 1.66014 5.20506 1.3965 2.84213C1.36613 2.64433 1.38089 2.44253 1.43978 2.25087C1.49867 2.05921 1.60028 1.88219 1.73749 1.73159C1.8747 1.58099 2.04452 1.46028 2.23482 1.37788C2.42512 1.29548 2.63115 1.25329 2.8395 1.25438H5.0895C5.47028 1.25124 5.83703 1.40023 6.10804 1.66784C6.37905 1.93545 6.53181 2.29964 6.53175 2.6805C6.58878 3.13507 6.72887 3.57694 6.945 3.9825C7.05898 4.29095 7.08061 4.62546 7.007 4.94468C6.93339 5.2639 6.76894 5.55356 6.53475 5.778L5.5785 6.73425C6.64798 8.56014 8.18986 10.102 10.0158 11.1715L10.972 10.2158C11.1965 9.98156 11.4861 9.81711 11.8054 9.7435C12.1246 9.66989 12.4591 9.69152 12.7676 9.8055C13.1731 10.0216 13.6149 10.1617 14.0695 10.2188C14.4537 10.2192 14.8207 10.3744 15.0888 10.6489C15.3569 10.9234 15.5035 11.2937 15.4965 11.6775"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail({ className }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3 6.75L9 10.5L15 6.75M3.75 14.25H14.25C14.6478 14.25 15.0294 14.092 15.3107 13.8107C15.592 13.5294 15.75 13.1478 15.75 12.75V5.25C15.75 4.85218 15.592 4.47064 15.3107 4.18934C15.0294 3.90804 14.6478 3.75 14.25 3.75H3.75C3.35218 3.75 2.97064 3.90804 2.68934 4.18934C2.40804 4.47064 2.25 4.85218 2.25 5.25V12.75C2.25 13.1478 2.40804 13.5294 2.68934 13.8107C2.97064 14.092 3.35218 14.25 3.75 14.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClock({ className }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
      <path
        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 5.25V9L11.625 10.3125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconUser({ className }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
      <path
        d="M15 15.75V14.25C15 13.4544 14.6839 12.6913 14.1213 12.1287C13.5587 11.5661 12.7956 11.25 12 11.25H6C5.20435 11.25 4.44129 11.5661 3.87868 12.1287C3.31607 12.6913 3 13.4544 3 14.25V15.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrowUpRight({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path d="M9.33301 22.6667L22.6663 9.33334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.33301 9.33334H22.6663V22.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoRow({ icon: Icon, children }) {
  return (
    <div className="flex gap-6">
      <Icon className="mt-1 size-[18px] shrink-0 text-[#1c2e62]" />
      <div className="min-w-0 flex-1 text-base font-normal leading-[1.5] text-[#1c2e62]">{children}</div>
    </div>
  );
}

export default function LocationDetailHero({ location }) {
  const [mainImage, ...gridImages] = location.gallery;

  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] pb-10 pt-6 lg:pb-16 lg:pt-8">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px] opacity-40"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse 80% 50% at 20% 0%, rgba(157,182,246,0.35) 0%, transparent 70%)",
        }}
      />

      <div className="custom-container relative">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2.5 text-xs font-semibold leading-[1.5] text-[#1c2e62]">
          <Link href="/" className="hover:opacity-75">
            Home
          </Link>
          <ChevronRight className="size-[14px] shrink-0" />
          <Link href="/location" className="hover:opacity-75">
            {location.cityLabel}
          </Link>
          <ChevronRight className="size-[14px] shrink-0" />
          <span>{location.areaLabel}</span>
        </nav>

        <div className="grid gap-2.5 lg:grid-cols-2">
          <div className="aspect-[679/433] overflow-hidden bg-[#1c2e62] lg:min-h-[433px]">
            <img src={mainImage} alt="" className="size-full object-cover" />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {gridImages.slice(0, 3).map((src, index) => (
              <div key={src + index} className="aspect-[335/211] overflow-hidden bg-[#1c2e62]">
                <img src={src} alt="" className="size-full object-cover" />
              </div>
            ))}
            <div className="relative aspect-[335/212] overflow-hidden bg-[#1c2e62]">
              <img src={gridImages[3] || mainImage} alt="" className="size-full object-cover" />
              <button
                type="button"
                className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-[#1c2e62] px-3 py-2 text-xs font-normal leading-[1.5] text-white"
              >
                <IconGrid className="size-[14px]" />
                Show All Photos ({location.photoCount})
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,558px)_1fr] lg:gap-[72px]">
          <div>
            <div className="relative max-w-[558px]">
              <h1 className="pr-16 text-[clamp(32px,5vw,48px)] font-semibold leading-[1.2] text-[#1c2e62]">{location.title}</h1>
              {location.isNew ? (
                <span className="mt-2 inline-block bg-gradient-to-b from-[#ab8b51] to-[#fac35f] bg-clip-text text-sm font-bold uppercase text-transparent">
                  New
                </span>
              ) : null}
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <InfoRow icon={IconMapPin}>{location.address}</InfoRow>
              <InfoRow icon={IconPhone}>
                <a href={`tel:${location.phone}`} className="hover:opacity-75">
                  {location.phone}
                </a>
              </InfoRow>
              <InfoRow icon={IconMail}>
                <a href={`mailto:${location.email}`} className="hover:opacity-75">
                  {location.email}
                </a>
              </InfoRow>
              <InfoRow icon={IconClock}>{location.hours}</InfoRow>
              <InfoRow icon={IconUser}>{location.capacity}</InfoRow>
            </div>

            <div className="mt-10">
              <p className="text-xs font-normal uppercase tracking-[0.72px] text-[#616161]">Transit landmark</p>
              <ul className="mt-4 list-disc pl-6 text-base leading-[1.5] text-[#1c2e62]">
                {location.transitLandmarks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:justify-end">
            {location.description.map((paragraph, index) => (
              <p key={index} className="text-base font-normal leading-[1.5] text-[#616161]">
                {paragraph}
              </p>
            ))}
            <a
              href="#"
              className="group inline-flex w-fit items-center gap-4 py-2 text-xl font-semibold uppercase leading-normal text-[#1c2e62] transition-opacity hover:opacity-75"
            >
              Let&apos;s Get Talking
              <IconArrowUpRight className="size-8 shrink-0 text-[#1c2e62]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
