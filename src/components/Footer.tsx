import Link from "next/link";
import {
  siteInfo,
  footerMenuLinks,
  footerServiceLinks,
  footerSocials,
} from "@/server/data";
import FooterSocialIcon from "@/assets/FooterSocialIcon";

export default function Footer() {
  return (
    <footer className="bg-[#023661] border-t border-[#0057B8]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <circle
                  cx="14"
                  cy="14"
                  r="13"
                  stroke="#FF5A1F"
                  strokeWidth="1.5"
                />
                <path
                  d="M9 14c0-2.8 2.2-5 5-5s5 2.2 5 5M9 14c0 1.4.6 2.6 1.5 3.5M19 14c0 1.4-.6 2.6-1.5 3.5M12 11.5c0-1.1.9-2 2-2s2 .9 2 2M14 9v-1M11 10l-.7-.7M17 10l.7-.7M9 14h-1M20 14h-1"
                  stroke="#FF5A1F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[#F5F7FA] font-semibold tracking-wide">
                {siteInfo.name}
              </span>
            </div>

            <p className="text-[#76828E] text-xs leading-relaxed">
              {siteInfo.tagline}
            </p>

            <div className="flex items-center gap-2 pt-1">
              {footerSocials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center border border-[#0057B8]/30 rounded-sm text-[#76828E] hover:text-[#FF5A1F] hover:border-[#FF5A1F]/50 transition-colors"
                >
                  <FooterSocialIcon label={label} />
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
              {footerMenuLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-xs text-[#F5F7FA]/70 hover:text-[#FF5A1F] transition-colors"
                  >
                    {label}
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
              {footerServiceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-xs text-[#F5F7FA]/70 hover:text-[#FF5A1F] transition-colors"
                  >
                    {label}
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
              <li>{siteInfo.email}</li>
              <li>{siteInfo.phone}</li>
              <li className="whitespace-pre-line">{siteInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#0057B8]/20 mt-12 pt-6 text-center">
          <p className="text-[11px] text-[#76828E]">{siteInfo.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
