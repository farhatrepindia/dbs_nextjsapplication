import Link from "next/link";

function IconSearch(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16.25 16.25 21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

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

export default function DbHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.svg"
            alt="DBS Workspace logo"
            className="h-10 w-10 rounded object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] font-medium text-white/80 lg:flex">
          <Link href="#" className="hover:text-white">
            Solutions
          </Link>
          <Link href="#" className="hover:text-white">
            Location
          </Link>
          <Link href="#" className="hover:text-white">
            Membership
          </Link>
          <Link href="#" className="hover:text-white">
            Align by DBS
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <button
            type="button"
            className="hidden rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white sm:inline-flex"
            aria-label="Search"
          >
            <IconSearch className="h-5 w-5" />
          </button>

          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-white hover:text-white/90"
          >
            Let&apos;s Get Talking
            <IconArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}

