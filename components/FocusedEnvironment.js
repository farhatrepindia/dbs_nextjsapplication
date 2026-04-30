const focusedEnvironmentImage = "https://www.figma.com/api/mcp/asset/ca21c651-7fa6-4b43-9578-da0110f3aece";

export default function FocusedEnvironment() {
  return (
    <section className="py-16 md:py-20 lg:py-[72px] bg-white">
      <div className="max-w-[1368px] mx-auto px-4 md:px-6 lg:px-8 grid min-h-[620px] overflow-hidden lg:grid-cols-[46%_54%]">
        <div className="bg-[#eee] p-10 md:p-14 lg:p-[84px] text-[#1c2e62]">
          <ul className="space-y-10 text-[38px] md:text-[42px] lg:text-[50px] font-semibold leading-[1.08]">
            <li className="text-[#1c2e62]/40">Quiet, Focused Environment</li>
            <li>Flexible Setups, Easy To Scale</li>
            <li className="text-[#1c2e62]/40">Helps Teams Stay Connected</li>
            <li className="text-[#1c2e62]/40">Real-Time Support, When You Need It</li>
          </ul>
        </div>
        <div className="relative">
          <img src={focusedEnvironmentImage} alt="People collaborating in workspace" className="h-full w-full object-cover" />
          <p className="absolute bottom-8 left-6 max-w-[238px] text-xl md:text-2xl leading-[1.5] text-white">Fewer distractions mean more gets done.</p>
        </div>
      </div>
    </section>
  );
}
