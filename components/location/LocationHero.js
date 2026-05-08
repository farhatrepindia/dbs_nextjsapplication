import Link from "next/link";

const patternImage = "/images/location_pattern.svg";

function ChevronRight({ className }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <path d="M5.25 3.5 8.75 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LocationHero() {
  return (
    <section className="relative  bg-[#eee]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] sm:h-[620px]">
        <img
          src={patternImage}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full max-w-none object-cover object-center opacity-70"
        />
      </div>

      <div className="relative custom-container py-10 sm:pb-12 sm:pt-16 lg:py-[72px]">
        <div className="mx-auto flex max-w-[906px] flex-col items-center gap-3 text-center text-[#1c2e62]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold leading-[1.5]">
            <Link href="/" className="hover:opacity-80">
              Home
            </Link>
            <ChevronRight className="size-[14px] shrink-0 text-[#1c2e62]" />
            <span>Locations</span>
          </nav>

          <h1 className="text-[clamp(36px,7vw,60px)] font-semibold leading-[1.2]">
            Where Business Belongs
          </h1>
          <p className="text-[clamp(16px,2.2vw,20px)] font-normal leading-[1.5]">
            Built for the pace of many industries and the rhythm of each team
          </p>
        </div>
      </div>
    </section>
  );
}

