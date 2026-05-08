const logos = [
  "/logos/logo_1.svg",
  "/logos/logo_2.svg",
  "/logos/logo_3.svg",
  "/logos/logo_4.svg",
  "/logos/logo_5.svg",
  "/logos/logo_6.svg",
  "/logos/logo_3.svg",
  "/logos/logo_2.svg",
  "/logos/logo_5.svg",
  "/logos/logo_1.svg",
];

/** lg:grid-cols-6 → place last four in cols 2–5 so the row looks centered */
const lgLastRowColStart = ["lg:col-start-2", "lg:col-start-3", "lg:col-start-4", "lg:col-start-5"];

export default function AlignedWithGoodCompany() {
  return (
    <section className="bg-[#f5f5f7] py-16 md:py-20 lg:py-30">
      <div className="custom-container">
        <h2 className="text-center text-2xl font-semibold uppercase tracking-wide text-[#ab8b51]">Aligned With Good Company</h2>
        <div className="mt-5 grid grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((src, idx) => (
            <div
              key={`${idx}-${src}`}
              className={`flex items-center justify-center opacity-70 grayscale ${idx >= 6 && idx - 6 < lgLastRowColStart.length ? lgLastRowColStart[idx - 6] : ""}`}
            >
              <img src={src} alt={`Client logo ${idx + 1}`} className="w-auto h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
