const blogs = [
  {
    image: "https://www.figma.com/api/mcp/asset/106c0235-0d88-4a9c-8c73-84506ecb8f08",
    title: "7 Compelling Reasons Startups in Metro Cities Are Choosing DBS Workspace Offices",
    excerpt: "Office decisions shape how a business grows, spends and adapts.",
    author: "DBS Marketing Head",
    date: "Date: 15 june",
  },
  {
    image: "https://www.figma.com/api/mcp/asset/278acfb0-ea24-444d-926e-02f7cc6d860d",
    title: "How DBS Workspace Offices Enhance Productivity for Remote Teams",
    excerpt: "With flexible layouts and seamless connectivity, DBS offices support thriving remote collaborations.",
    author: "Sales Head",
    date: "Date: 12 june",
  },
  {
    image: "https://www.figma.com/api/mcp/asset/b1d46dda-ffe0-47af-b9be-b1165b6be254",
    title: "Sustainability and Style: The Eco-friendly Design of DBS Workspace Offices",
    excerpt: "Discover how DBS integrates green architecture with modern aesthetics.",
    author: "Business Consultant",
    date: "Date: 08 june",
  },
];

export default function ReadOurBlogs() {
  return (
    <section className="bg-[#f5f5f7] py-16 md:py-20 lg:py-[72px] border-t border-[#cfd8ec]">
      <div className="max-w-[1368px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-center text-[40px] md:text-5xl lg:text-[48px] text-[#1c2e62] leading-[1.2]">
          <span className="font-semibold">Read Our Blogs</span>
          <br />
          Makes A Difference
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-5">
          {blogs.map((blog) => (
            <article key={blog.title} className="border-x border-[#bdbdbd]">
              <img src={blog.image} alt={blog.title} className="h-56 md:h-64 w-full object-cover" />
              <div className="space-y-3 p-5">
                <h3 className="text-[30px] font-semibold leading-[1.25]">{blog.title}</h3>
                <p className="text-sm leading-[1.5] text-[#616161]">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-[#858585]">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
