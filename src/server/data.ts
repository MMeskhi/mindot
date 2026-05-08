// ─── Site-wide ────────────────────────────────────────────────────────────────

export const siteInfo = {
  name: "mindot",
  tagline:
    "We are a digital studio focused on building bold brands and seamless digital experiences.",
  email: "hello@mindot.studio",
  phone: "+1 (234) 567-8901",
  address: "123 Design Street\nSan Francisco, CA",
  copyright: `© ${new Date().getFullYear()} Mindot. All rights reserved.`,
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "We Design Future",
  headingLine1: "Digital Solutions",
  headingLine2: "That Connect",
  description:
    "Mindot is a digital studio delivering technology solutions that help businesses grow, evolve and lead in a connected world.",
  primaryCta: { label: "OUR WORK →", href: "#work" },
  secondaryCta: { label: "ABOUT US", href: "#about" },
  scrollLabel: "Scroll Down",
};

// ─── Services ─────────────────────────────────────────────────────────────────

export const servicesSection = {
  eyebrow: "Our Services",
  headingLine1: "Solutions That",
  headingLine2: "Power Your Business",
  description:
    "We combine strategy, design and engineering to deliver reliable, scalable and future-ready software solutions.",
};

export const services = [
  {
    iconKey: "software",
    title: "Custom Software Development",
    description:
      "Tailored software built to solve your unique business challenges and drive efficiency.",
  },
  {
    iconKey: "web",
    title: "Web Applications",
    description:
      "Secure, scalable and high-performance web applications that deliver real impact.",
  },
  {
    iconKey: "mobile",
    title: "Mobile Apps",
    description:
      "Engaging mobile experiences for iOS and Android that users love.",
  },
  {
    iconKey: "analysis",
    title: "Business Analysis & BRD Support",
    description:
      "In-depth analysis and clear documentation to align business goals and solutions.",
  },
  {
    iconKey: "design",
    title: "UI/UX Design",
    description:
      "User-centered designs that are intuitive, accessible and built for conversion.",
  },
  {
    iconKey: "management",
    title: "Project Management",
    description:
      "Agile-driven delivery with transparent communication and on-time execution.",
  },
  {
    iconKey: "integration",
    title: "System Integration",
    description:
      "Seamless integration of systems and tools to streamline your business operations.",
  },
  {
    iconKey: "support",
    title: "Maintenance & Support",
    description:
      "Reliable support and proactive maintenance to keep your systems running at best.",
  },
];

// ─── Work ─────────────────────────────────────────────────────────────────────

export const workSection = {
  eyebrow: "Featured Work",
  heading: "Selected Projects",
  viewAllLabel: "VIEW ALL PROJECTS →",
  viewAllHref: "#work",
};

export const projects = [
  {
    name: "NEXORA",
    category: "Mobile App & Dashboard",
    bg: "from-[#023661] to-[#011729]",
  },
  {
    name: "SOLVIX",
    category: "Mobile App & Dashboard",
    bg: "from-[#023661] to-[#0057B8]/30",
  },
  {
    name: "AURORA",
    category: "Mobile App & Dashboard",
    bg: "from-[#011729] to-[#023661]",
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contactSection = {
  eyebrow: "Contact Us",
  headingLine1: "Let's Start",
  headingLine2: "A Project Together",
  description:
    "Have a question or want to work together?\nWe'd love to hear from you.",
  submitLabel: "SEND MESSAGE →",
};

export const contactDetails = [
  { iconKey: "mail", label: "Email Us", value: "hello@mindot.studio" },
  { iconKey: "phone", label: "Call Us", value: "+1 (234) 567-8901" },
  {
    iconKey: "pin",
    label: "Visit Us",
    value: "123 Design Street\nSan Francisco, CA",
  },
];

export const formFields = [
  { name: "name", placeholder: "Your Name", type: "text", required: true },
  { name: "email", placeholder: "Your Email", type: "email", required: true },
  {
    name: "company",
    placeholder: "Company (Optional)",
    type: "text",
    required: false,
  },
  { name: "phone", placeholder: "Phone Number", type: "tel", required: false },
];

// ─── Footer ───────────────────────────────────────────────────────────────────

export const footerMenuLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const footerServiceLinks = [
  { label: "Custom Software Development", href: "#services" },
  { label: "Web Applications", href: "#services" },
  { label: "Mobile Apps", href: "#services" },
  { label: "Business Analysis & BRD Support", href: "#services" },
  { label: "UI/UX Design", href: "#services" },
  { label: "Project Management", href: "#services" },
  { label: "System Integration", href: "#services" },
  { label: "Maintenance & Support", href: "#services" },
];

export const footerSocials = [
  { label: "Twitter", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "LinkedIn", href: "#" },
];
