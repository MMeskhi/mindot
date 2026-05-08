const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="24" rx="2" stroke="#FF5A1F" strokeWidth="1.5" />
        <path d="M14 20l4 4 8-8" stroke="#FF5A1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 13h32" stroke="#FF5A1F" strokeWidth="1.5" />
        <circle cx="8" cy="10.5" r="1" fill="#FF5A1F" />
        <circle cx="12" cy="10.5" r="1" fill="#FF5A1F" />
      </svg>
    ),
    title: "Custom Software Development",
    description:
      "Tailored software built to solve your unique business challenges and drive efficiency.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#0057B8" strokeWidth="1.5" />
        <ellipse cx="20" cy="20" rx="6" ry="14" stroke="#0057B8" strokeWidth="1.5" />
        <path d="M6 20h28M8 13h24M8 27h24" stroke="#0057B8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Web Applications",
    description:
      "Secure, scalable and high-performance web applications that deliver real impact.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="13" y="4" width="14" height="26" rx="2" stroke="#FF5A1F" strokeWidth="1.5" />
        <path d="M17 28v4M23 28v4M14 32h12" stroke="#FF5A1F" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="16" y="26" width="8" height="2" rx="1" fill="#FF5A1F" />
      </svg>
    ),
    title: "Mobile Apps",
    description:
      "Engaging mobile experiences for iOS and Android that users love.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="6" width="22" height="28" rx="2" stroke="#0057B8" strokeWidth="1.5" />
        <path d="M9 13h12M9 18h12M9 23h8" stroke="#0057B8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="31" cy="29" r="6" stroke="#0057B8" strokeWidth="1.5" />
        <path d="M28 29l2 2 4-4" stroke="#0057B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Business Analysis & BRD Support",
    description:
      "In-depth analysis and clear documentation to align business goals and solutions.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M10 30l6-8 5 4 5-10 6 14" stroke="#FF5A1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="12" r="5" stroke="#FF5A1F" strokeWidth="1.5" />
        <path d="M25 12l2 2 4-4" stroke="#FF5A1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "User-centered designs that are intuitive, accessible and built for conversion.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="8" width="12" height="10" rx="1.5" stroke="#0057B8" strokeWidth="1.5" />
        <rect x="22" y="8" width="12" height="10" rx="1.5" stroke="#0057B8" strokeWidth="1.5" />
        <rect x="14" y="24" width="12" height="10" rx="1.5" stroke="#0057B8" strokeWidth="1.5" />
        <path d="M12 18v4h16v-4" stroke="#0057B8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 22v2" stroke="#0057B8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Project Management",
    description:
      "Agile-driven delivery with transparent communication and on-time execution.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="14" width="10" height="12" rx="1.5" stroke="#FF5A1F" strokeWidth="1.5" />
        <rect x="26" y="14" width="10" height="12" rx="1.5" stroke="#FF5A1F" strokeWidth="1.5" />
        <rect x="15" y="14" width="10" height="12" rx="1.5" stroke="#FF5A1F" strokeWidth="1.5" />
        <path d="M14 20h1M25 20h1" stroke="#FF5A1F" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "System Integration",
    description:
      "Seamless integration of systems and tools to streamline your business operations.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="16" r="8" stroke="#0057B8" strokeWidth="1.5" />
        <path d="M16 14l2 2 4-5" stroke="#0057B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 32c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#0057B8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 28l1.5 2 3-4" stroke="#0057B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Maintenance & Support",
    description:
      "Reliable support and proactive maintenance to keep your systems running at best.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#011729]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <p className="text-[#FF5A1F] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight text-[#F5F7FA]">
              Solutions That
              <br />
              Power Your Business
            </h2>
          </div>
          <div>
            <p className="text-[#76828E] text-base leading-relaxed">
              We combine strategy, design and engineering to deliver reliable,
              scalable and future-ready software solutions.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0057B8]/10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#011729] p-8 flex flex-col gap-4 group hover:bg-[#023661] transition-colors border border-[#0057B8]/12"
            >
              <div className="opacity-90">{service.icon}</div>
              <h3 className="text-[#F5F7FA] font-bold text-sm leading-snug">
                {service.title}
              </h3>
              <p className="text-[#76828E] text-xs leading-relaxed flex-1">
                {service.description}
              </p>
              <div className="w-8 h-0.5 bg-[#FF5A1F] mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
