const mapImage = "https://www.figma.com/api/mcp/asset/421b264f-b904-4c9b-961a-16613e495266";

export default function Map() {
  return (
    <section className="bg-[#f5f5f7] py-16 md:py-20 lg:py-[72px] text-[#1c2e62]">
      <div className="max-w-[1368px] mx-auto px-4 md:px-6 lg:px-8 grid gap-10 lg:gap-16 lg:grid-cols-[1.4fr_0.9fr] items-center">
        <img src={mapImage} alt="DBS locations in India" className="w-full object-contain lg:scale-[1.04] lg:origin-left" />
        <div>
          <span className="rounded-full border border-[#1c2e62] px-3 py-2 text-xs">Location</span>
          <h2 className="mt-4 text-[40px] md:text-5xl lg:text-[48px] leading-[1.2]">
            The Right Pincode
            <br />
            <span className="font-semibold">Makes A Difference</span>
          </h2>
          <p className="mt-6 text-base max-w-[360px] leading-[1.5]">Tap the map to see where we&apos;ve already made room for better days.</p>
          <select
            defaultValue=""
            className="mt-8 w-full max-w-[485px] border-b border-[#1c2e62]/40 bg-transparent pb-3 text-left text-sm text-[#616161] outline-none"
          >
            <option value="" disabled>
              Select Location
            </option>
            <option>Mumbai</option>
            <option>New Delhi</option>
            <option>Kolkata</option>
            <option>Hyderabad</option>
            <option>Chennai</option>
            <option>Bengaluru</option>
          </select>
        </div>
      </div>
    </section>
  );
}
