const amenities = [
  "24x7 Access",
  "Business Lounge",
  "Elegant Furniture",
  "Equipment",
  "High Speed Internet",
  "Housekeeping",
  "Lobby",
  "Office Maintenance",
  "Pantry",
  "Reception",
  "Security + CCTV",
  "Support Team",
  "Telephone Connection",
  "Utilities",
];

const amenitiesBackground = "https://www.figma.com/api/mcp/asset/7ae47de7-e650-42a2-8fe7-a5c20dc1d529";

export default function Amenities() {
  return (
    <section className="relative py-16 md:py-20 lg:py-[72px] text-white">
      <img src={amenitiesBackground} alt="People in workspace" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative max-w-[1368px] mx-auto px-4 md:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <span className="rounded-full border border-white px-3 py-2 text-xs">Amenities</span>
          <h2 className="mt-4 text-[40px] md:text-5xl lg:text-[48px] leading-[1.2]">
            Everything You Need.
            <br />
            <span className="font-semibold">Nothing You Don&apos;t.</span>
          </h2>
          <p className="mt-6 text-base max-w-[370px] leading-[1.5]">From strong coffee to soundproof calls - each detail earns its spot.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {amenities.map((item) => (
            <div key={item} className="rounded bg-white/10 px-3 py-5 text-center text-sm leading-[1.2] backdrop-blur">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full border border-white/60" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
