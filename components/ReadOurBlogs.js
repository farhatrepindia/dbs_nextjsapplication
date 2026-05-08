const blogs = [
  {
    image: "https://www.figma.com/api/mcp/asset/08521e33-3beb-4efa-beef-aadfe1658293",
    title: "7 Compelling Reasons Startups in Metro Cities Are Choosing DBS Workspace Offices",
    excerpt:
      "Office decisions shape how a business grows, spends and adapts. In Hyderabad, companies today usually weigh two clear options",
    author: "DBS Marketing Head",
    date: "Date: 15 june",
  },
  {
    image: "https://www.figma.com/api/mcp/asset/403a7a28-b152-41d9-972a-2c214bc8cfff",
    title: "How DBS Workspace Offices Enhance Productivity for Remote Teams",
    excerpt:
      "With flexible layouts and seamless connectivity, DBS offices support thriving remote collaborations in urban hubs",
    author: "Sales Head",
    date: "Date: 12 june",
  },
  {
    image: "https://www.figma.com/api/mcp/asset/30c3e1fc-c23d-4e1b-8626-5c6323f9004b",
    title: "Sustainability and Style: The Eco-friendly Design of DBS Workspace Offices",
    excerpt:
      "Discover how DBS integrates green architecture with modern aesthetics to create inspiring work environments",
    author: "Business Consultant",
    date: "Date: 08 june",
  },
];

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

export default function ReadOurBlogs() {
  return (
    <section className="border-t border-[#9db6f6]/30 bg-[#f5f5f7]">
      <div className="custom-container pb-16 pt-14 lg:pb-[84px] lg:pt-[84px]">
        <div className="flex flex-col items-center gap-12 lg:gap-[48px]">
          <div className="max-w-[485px] text-center text-[#1c2e62]">
            <h2 className="text-[clamp(36px,6vw,48px)] leading-[1.2]">
              <span className="block font-semibold leading-[var(--type-heading-snug)]">Read Our Blogs</span>
              <span className="mt-0 block font-normal leading-[var(--type-heading-tight)]">Makes A Difference</span>
            </h2>
          </div>

          <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-x-[20px] [&>*]:lg:flex-[1_1_0] [&>*]:lg:min-w-0">
            {blogs.map((blog) => (
              <article key={blog.title} className="flex min-h-0 flex-col gap-2">
                <div className="relative aspect-[1024/683] w-full shrink-0 overflow-hidden bg-[#e8e8e8]">
                  <img src={blog.image} alt={blog.title} className="absolute inset-0 size-full object-cover" />
                </div>
                <div className="flex flex-col gap-[14px] border-x border-[#bdbdbd] px-6 py-3">
                  <h3 className="text-base font-semibold leading-[1.5] text-black">{blog.title}</h3>
                  <p className="line-clamp-3 text-sm font-normal leading-[1.5] text-[#616161]">{blog.excerpt}</p>
                  <div className="flex items-start justify-between gap-4 pt-0">
                    <div className="flex min-w-0 items-center gap-2 text-[#858585]">
                      <IconFeather className="size-4 shrink-0" />
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

          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-4 py-2 text-xl font-semibold uppercase leading-normal text-[#1c2e62] transition-opacity hover:opacity-75"
            >
              View All
              <IconArrowUpRightCta className="size-8 shrink-0 text-[#1c2e62] -mt-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
