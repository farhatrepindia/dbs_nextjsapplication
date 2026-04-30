const popularSearches = [
  "Complete Office Solutions India",
  "Shared Office Space for Startups",
  "Customized Managed Offices",
  "Virtual Office for Startups",
  "Conference and Meeting Room Hire",
  "Serviced Office in Mumbai Fort",
];

const logoImage = "/logo.svg";

export default function Footer() {
  return (
    <footer className="relative bg-[#1c2e62] py-16 md:py-20 lg:py-[72px] text-white">
      <div className="max-w-[1368px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <h2 className="text-[40px] md:text-5xl lg:text-[60px] leading-[1.15]">
            Business,
            <br />
            <span className="font-semibold">Uninterrupted.</span>
          </h2>
          <img src={logoImage} alt="DBS Workspace logo" className="h-16 w-auto object-contain" />
        </div>
        <div className="my-10 h-px bg-white/20" />
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#ab8b51]">Contact</h3>
            <p className="mt-4 text-sm uppercase tracking-wider text-[#ab8b51]">Landline</p>
            <p>+91 22 41549200</p>
            <p className="mt-3 text-sm uppercase tracking-wider text-[#ab8b51]">Email</p>
            <p>sales@alignws.com</p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#ab8b51]">Solutions</h3>
            <ul className="mt-4 space-y-2 text-[#9db6f6]">
              <li>Complete Office</li><li>Shared Office</li><li>Customize Office</li><li>Virtual Office</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#ab8b51]">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-[#9db6f6]">
              <li>About Us</li><li>Locations</li><li>Align By DBS</li><li>Membership</li><li>Our Blog</li>
            </ul>
          </div>
        </div>
        <div className="my-10 h-px bg-white/20" />
        <p className="text-xs uppercase tracking-[0.06em] text-[#ab8b51]">Popular searches</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#9db6f6]">
          {popularSearches.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
