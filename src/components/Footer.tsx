import Link from "next/link";

const menuLinks = ["Home", "About", "Services", "Work", "Contact"];
const serviceLinks = [
  "Custom Software Development",
  "Web Applications",
  "Mobile Apps",
  "Business Analysis & BRD Support",
  "UI/UX Design",
  "Project Management",
  "System Integration",
  "Maintenance & Support",
];

function TwitterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M14.3 1H12l-3.3 4.6L5.3 1H1l5.3 7.1L1 15h2.3l3.6-5 3.8 5H15l-5.5-7.3L14.3 1z" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M5.5 7.5c.8-.3 1.5-1 1.5-2C7 4 6 3 4 3H0v10h4.5C7 13 8 12 8 10.5c0-1.4-.8-2.6-2.5-3zM2 5h1.8c.7 0 1.2.4 1.2 1s-.5 1-1.2 1H2V5zm2.2 6H2V9h2.2c.9 0 1.3.5 1.3 1s-.4 1-1.3 1zM11.5 5C9 5 7.5 7 7.5 9s1.5 4 4 4c2 0 3.2-1.2 3.7-2.5H13c-.3.6-.9 1-1.5 1-1 0-1.8-.7-2-2H15.5C16 6.5 14.5 5 11.5 5zm-2 3c.2-1 1-1.5 2-1.5.9 0 1.6.5 1.8 1.5H9.5zM9.5 3h4v1h-4V3z" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor">
      <circle cx="8" cy="8" r="7" strokeWidth="1.5" />
      <path d="M1 8c2 0 4-1 6-3M15 8c-2 0-4 1-6 3M5 2c1 3 2 7 1 12M11 2c-1 3-2 7-1 12" strokeWidth="1" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="5" width="3" height="10" />
      <circle cx="2.5" cy="2.5" r="1.5" />
      <path d="M6 5h3v1.5C9.5 5.5 10.5 5 12 5c2 0 3 1.2 3 3.5V15h-3v-6c0-1-.5-1.5-1.3-1.5S9 8 9 9v6H6V5z" />
    </svg>
  );
}

const socials = [
  { Icon: TwitterIcon,  label: "Twitter" },
  { Icon: BehanceIcon,  label: "Behance" },
  { Icon: DribbbleIcon, label: "Dribbble" },
  { Icon: LinkedInIcon, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#023661] border-t border-[#0057B8]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="#FF5A1F" strokeWidth="1.5" />
                <path
                  d="M9 14c0-2.8 2.2-5 5-5s5 2.2 5 5M9 14c0 1.4.6 2.6 1.5 3.5M19 14c0 1.4-.6 2.6-1.5 3.5M12 11.5c0-1.1.9-2 2-2s2 .9 2 2M14 9v-1M11 10l-.7-.7M17 10l.7-.7M9 14h-1M20 14h-1"
                  stroke="#FF5A1F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[#F5F7FA] font-semibold tracking-wide">mindot</span>
            </div>

            <p className="text-[#76828E] text-xs leading-relaxed">
              We are a digital studio focused on building bold brands and seamless
              digital experiences.
            </p>

            <div className="flex items-center gap-2 pt-1">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center border border-[#0057B8]/30 rounded-sm text-[#76828E] hover:text-[#FF5A1F] hover:border-[#FF5A1F]/50 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#76828E] mb-4">
              Menu
            </h4>
            <ul className="flex flex-col gap-3">
              {menuLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-xs text-[#F5F7FA]/70 hover:text-[#FF5A1F] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#76828E] mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="text-xs text-[#F5F7FA]/70 hover:text-[#FF5A1F] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#76828E] mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-[#F5F7FA]/70">
              <li>hello@mindot.studio</li>
              <li>+1 (234) 567-8901</li>
              <li>
                123 Design Street
                <br />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#0057B8]/20 mt-12 pt-6 text-center">
          <p className="text-[11px] text-[#76828E]">
            © 2024 Mindot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
