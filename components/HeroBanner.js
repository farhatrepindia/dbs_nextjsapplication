const heroImage = "https://www.figma.com/api/mcp/asset/040877b6-190c-4fa2-80e3-f1474bb268ea";

export default function HeroBanner() {
  return (
    <section className="bg-[#1c2e62]">
      <div className="grid min-h-[700px] grid-cols-1 lg:min-h-[842px] lg:grid-cols-[56.6%_43.4%]">
        <div className="relative min-h-[360px] md:min-h-[460px] lg:min-h-[842px]">
          <img src={heroImage} alt="Workspace hero banner" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="flex items-center py-12 md:py-16 lg:py-0">
          <div className="max-w-[1368px] mx-auto px-4 md:px-6 lg:px-8 w-full lg:pl-11 lg:pr-10">
            <h1 className="text-[40px] md:text-5xl lg:text-[60px] font-semibold leading-[1.2] text-[#9db6f6]">
              Where Work
              <br />
              Finds Its Flow
            </h1>
            <p className="mt-4 text-sm md:text-base text-[#9db6f6]/80 max-w-[520px] leading-[1.5]">
              Workspaces that support the shift from pressure to progress and everything in between.
            </p>
            <div className="mt-7 border-4 border-[#e5e5e5] bg-[#eee] p-2 max-w-[519px]">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <select
                  defaultValue=""
                  className="h-14 md:h-16 bg-[#e0e0e0] px-4 text-left text-sm text-[#616161] outline-none"
                >
                  <option value="" disabled>
                    Select Location
                  </option>
                  <option>Mumbai</option>
                  <option>Delhi NCR</option>
                  <option>Bengaluru</option>
                  <option>Hyderabad</option>
                </select>
                <select
                  defaultValue=""
                  className="h-14 md:h-16 bg-[#e0e0e0] px-4 text-left text-sm text-[#616161] outline-none"
                >
                  <option value="" disabled>
                    Select Type of Office
                  </option>
                  <option>Complete Office</option>
                  <option>Customise Office</option>
                  <option>Shared Office</option>
                  <option>Virtual Office</option>
                </select>
              </div>
              <button className="mt-2 h-14 md:h-16 w-full bg-[#1c2e62] text-base md:text-lg text-white">Find Space</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
