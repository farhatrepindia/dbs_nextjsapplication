const logos = [
  "https://www.figma.com/api/mcp/asset/02fec958-bbfd-4d4e-9e9f-0762330229e7",
  "https://www.figma.com/api/mcp/asset/2062132b-cf04-4b76-961e-fc2d8ed1baf5",
  "https://www.figma.com/api/mcp/asset/6b1cbc4a-c659-4cf7-9906-8e05dc4736b1",
  "https://www.figma.com/api/mcp/asset/5fdbc10f-e87a-4852-b3f8-b3a4e41f2d19",
  "https://www.figma.com/api/mcp/asset/23dc0c7d-00a5-4fdd-b61b-a0791430c2b6",
  "https://www.figma.com/api/mcp/asset/43db3867-a1e2-4314-82eb-11b00fba8a28",
  "https://www.figma.com/api/mcp/asset/6b1cbc4a-c659-4cf7-9906-8e05dc4736b1",
  "https://www.figma.com/api/mcp/asset/2062132b-cf04-4b76-961e-fc2d8ed1baf5",
  "https://www.figma.com/api/mcp/asset/23dc0c7d-00a5-4fdd-b61b-a0791430c2b6",
  "https://www.figma.com/api/mcp/asset/02fec958-bbfd-4d4e-9e9f-0762330229e7",
];

export default function AlignedWithGoodCompany() {
  return (
    <section className="bg-[#f5f5f7] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1368px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold uppercase tracking-wide text-[#ab8b51]">Aligned With Good Company</h2>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((src, idx) => (
            <div key={src} className="flex h-20 items-center justify-center opacity-70 grayscale">
              <img src={src} alt={`Client logo ${idx + 1}`} className="max-h-10 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
