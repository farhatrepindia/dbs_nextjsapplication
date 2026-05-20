import { readOurBlogsItems, readOurBlogsItemsLocationDetail } from "./readOurBlogsData";

function IconFeather(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="m10.33 2.67 3 3L6 13l-4 1 1-4 8.33-8.33a2 2 0 0 1 2 2v0l-3-3"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m8.67 4.33 3 3M3 13l3-3" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

function IconUser(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={props.className}>
      <path
        d="M13.3333 14.6667V13.3333C13.3333 12.6261 13.0524 11.9478 12.5523 11.4477C12.0522 10.9476 11.3739 10.6667 10.6667 10.6667H5.33333C4.62609 10.6667 3.94781 10.9476 3.44772 11.4477C2.94762 11.9478 2.66667 12.6261 2.66667 13.3333V14.6667"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8.00001C9.47276 8.00001 10.6667 6.80609 10.6667 5.33334C10.6667 3.86058 9.47276 2.66667 8 2.66667C6.52724 2.66667 5.33333 3.86058 5.33333 5.33334C5.33333 6.80609 6.52724 8.00001 8 8.00001Z"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCalendar(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={props.className}>
      <rect x="2.25" y="3.25" width="11.5" height="10.5" rx="1.25" stroke="currentColor" strokeWidth="1.15" />
      <path d="M5 2v2.75M11 2v2.75M2.25 6.75h11.5" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

function IconArrowUpRightCta(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={props.className}>
      <path d="M9.3335 22.6668L22.6668 9.3335" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.3335 9.3335H22.6668V22.6668" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * @param {Object} props
 * @param {"default" | "detail"} [props.variant] — `"detail"` matches Figma 1834:8239 (location / blog detail page).
 * @param {typeof readOurBlogsItems} [props.items] — optional; defaults by variant. Use for API data later.
 */
export default function ReadOurBlogs({ variant = "default", items: itemsFromProps }) {
  const isDetail = variant === "detail";
  const items =
    itemsFromProps ?? (isDetail ? readOurBlogsItemsLocationDetail : readOurBlogsItems);
  const AuthorIcon = isDetail ? IconUser : IconFeather;

  return (
    <section className="border-t border-[#9db6f6]/30 bg-[#f5f5f7]">
      <div
        className={
          isDetail
            ? "custom-container py-16 lg:py-[72px]"
            : "custom-container pb-16 pt-14 lg:pb-[84px] lg:pt-[84px]"
        }
      >
        <div
          className={
            isDetail
              ? "flex flex-col items-start gap-12 lg:gap-12"
              : "flex flex-col items-center gap-12 lg:gap-[48px]"
          }
        >
          {isDetail ? (
            <h2 className="w-full text-[clamp(28px,4vw,36px)] font-normal leading-[1.2] text-[#212121]">
              Read Our Blogs
            </h2>
          ) : (
            <div className="max-w-[485px] text-center text-[#1c2e62]">
              <h2 className="text-[clamp(36px,6vw,48px)] leading-[1.2]">
                <span className="block font-semibold leading-[var(--type-heading-snug)]">Read Our Blogs</span>
                <span className="mt-0 block font-normal leading-[var(--type-heading-tight)]">Makes A Difference</span>
              </h2>
            </div>
          )}

          <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-x-5 [&>*]:lg:flex-[1_1_0] [&>*]:lg:min-w-0">
            {items.map((blog) => (
              <article key={blog.title} className="flex min-h-0 flex-col gap-2">
                <div className="relative aspect-[1024/683] w-full shrink-0 overflow-hidden bg-[#e8e8e8]">
                  <img src={blog.image} alt={blog.title} className="absolute inset-0 size-full object-cover" />
                </div>
                <div className="flex flex-col gap-[14px] border-x border-[#bdbdbd] px-6 py-3">
                  <h3 className="text-base font-semibold leading-[1.5] text-black">{blog.title}</h3>
                  <p className="line-clamp-3 text-sm font-normal leading-[1.5] text-[#616161]">{blog.excerpt}</p>
                  <div className="flex items-start justify-between gap-4 pt-0">
                    <div className="flex min-w-0 items-center gap-2 text-[#858585]">
                      <AuthorIcon className="size-4 shrink-0" />
                      <span className="truncate text-sm font-normal leading-[1.5]">{blog.author}</span>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 text-[#858585]">
                      <IconCalendar className="size-4 shrink-0" />
                      <span className="whitespace-nowrap text-sm font-normal leading-[1.5]">{blog.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {!isDetail ? (
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-4 py-2 text-xl font-semibold uppercase leading-normal text-[#1c2e62] transition-opacity hover:opacity-75"
              >
                View All
                <IconArrowUpRightCta className="size-8 shrink-0 text-[#1c2e62] -mt-2" />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
