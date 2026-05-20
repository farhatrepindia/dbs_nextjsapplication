function IconPhone({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M22 16.92V19.92C22.0011 20.1983 21.9445 20.4742 21.8347 20.7294C21.7249 20.9846 21.5649 21.2132 21.3655 21.3996C21.1661 21.586 20.9317 21.7261 20.6778 21.8103C20.4239 21.8945 20.1564 21.921 19.892 21.888C17.4371 21.5856 15.085 20.8001 12.99 19.58C11.0412 18.4481 9.32464 16.7315 8.19276 14.7828C6.96642 12.6782 6.18089 10.3164 6.88476 7.85276C6.85172 7.58839 6.87823 7.32089 6.96243 7.06699C7.04663 6.81309 7.18672 6.57868 7.37312 6.37928C7.55952 6.17988 7.78812 6.01987 8.04332 5.91007C8.29852 5.80027 8.57442 5.74367 8.85276 5.74476H11.8528C12.3303 5.74021 12.7919 5.93408 13.1283 6.28028C13.4647 6.62648 13.647 7.09414 13.6328 7.57176C13.7511 8.18043 13.9401 8.77243 14.1958 9.33476C14.315 9.65426 14.351 10.0005 14.2996 10.3396C14.2482 10.6787 14.1112 10.9985 13.9028 11.2688L12.9028 12.2688C14.167 14.4135 16.0865 16.333 18.2313 17.5973L19.2313 16.5973C19.5016 16.3889 19.8214 16.2519 20.1605 16.2005C20.4996 16.1491 20.8458 16.1851 21.1653 16.3043C21.7276 16.56 22.3196 16.749 22.9283 16.8673C23.4085 16.8539 23.8787 17.0377 24.2253 17.3768C24.5719 17.7159 24.7637 18.1797 24.7578 18.6628"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanCard({ plan }) {
  return (
    <article className="flex h-full flex-col overflow-hidden bg-white">
      <div className="aspect-[384/288] w-full overflow-hidden">
        <img src={plan.image} alt="" className="size-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-8">
        <h3 className="text-xl font-semibold leading-[1.5] text-[#1c2e62]">{plan.title}</h3>
        <p className="flex-1 text-sm font-normal leading-[1.5] text-[#616161]">{plan.description}</p>
        <div className="flex items-start justify-between gap-4 pt-1">
          <button type="button" className="py-2 text-base font-normal leading-[1.5] text-[#1c2e62] hover:opacity-75">
            Read More
          </button>
          <button type="button" className="inline-flex items-center gap-4 py-2 text-base font-normal leading-[1.5] text-[#1c2e62] hover:opacity-75">
            <IconPhone className="size-6 shrink-0" />
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default function LocationDetailPlans({ plans }) {
  return (
    <section className="bg-[#9db6f6] py-14 lg:py-[72px]">
      <div className="custom-container">
        <h2 className="text-[clamp(28px,4vw,36px)] font-normal leading-[1.2] text-[#212121]">
          Plans Available In This Location
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <PlanCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
