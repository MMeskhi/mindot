const icons: Record<string, React.ReactNode> = {
  software: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect
        x="4"
        y="8"
        width="32"
        height="24"
        rx="2"
        stroke="#FF5A1F"
        strokeWidth="1.5"
      />
      <path
        d="M14 20l4 4 8-8"
        stroke="#FF5A1F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 13h32" stroke="#FF5A1F" strokeWidth="1.5" />
      <circle cx="8" cy="10.5" r="1" fill="#FF5A1F" />
      <circle cx="12" cy="10.5" r="1" fill="#FF5A1F" />
    </svg>
  ),
  web: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="14" stroke="#0057B8" strokeWidth="1.5" />
      <ellipse
        cx="20"
        cy="20"
        rx="6"
        ry="14"
        stroke="#0057B8"
        strokeWidth="1.5"
      />
      <path
        d="M6 20h28M8 13h24M8 27h24"
        stroke="#0057B8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  mobile: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect
        x="13"
        y="4"
        width="14"
        height="26"
        rx="2"
        stroke="#0057B8"
        strokeWidth="1.5"
      />
      <path
        d="M17 28v4M23 28v4M14 32h12"
        stroke="#0057B8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="16" y="26" width="8" height="2" rx="1" fill="#0057B8" />
    </svg>
  ),
  analysis: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect
        x="4"
        y="6"
        width="22"
        height="28"
        rx="2"
        stroke="#FF5A1F"
        strokeWidth="1.5"
      />
      <path
        d="M9 13h12M9 18h12M9 23h8"
        stroke="#FF5A1F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="31" cy="29" r="6" stroke="#FF5A1F" strokeWidth="1.5" />
      <path
        d="M28 29l2 2 4-4"
        stroke="#FF5A1F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  design: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path
        d="M10 30l6-8 5 4 5-10 6 14"
        stroke="#0057B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="12" r="5" stroke="#0057B8" strokeWidth="1.5" />
      <path
        d="M25 12l2 2 4-4"
        stroke="#0057B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  management: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect
        x="6"
        y="8"
        width="12"
        height="10"
        rx="1.5"
        stroke="#FF5A1F"
        strokeWidth="1.5"
      />
      <rect
        x="22"
        y="8"
        width="12"
        height="10"
        rx="1.5"
        stroke="#FF5A1F"
        strokeWidth="1.5"
      />
      <rect
        x="14"
        y="24"
        width="12"
        height="10"
        rx="1.5"
        stroke="#FF5A1F"
        strokeWidth="1.5"
      />
      <path
        d="M12 18v4h16v-4"
        stroke="#FF5A1F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 22v2"
        stroke="#FF5A1F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  integration: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect
        x="4"
        y="14"
        width="10"
        height="12"
        rx="1.5"
        stroke="#0057B8"
        strokeWidth="1.5"
      />
      <rect
        x="26"
        y="14"
        width="10"
        height="12"
        rx="1.5"
        stroke="#0057B8"
        strokeWidth="1.5"
      />
      <rect
        x="15"
        y="14"
        width="10"
        height="12"
        rx="1.5"
        stroke="#0057B8"
        strokeWidth="1.5"
      />
      <path
        d="M14 20h1M25 20h1"
        stroke="#0057B8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  support: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="16" r="8" stroke="#0057B8" strokeWidth="1.5" />
      <path
        d="M16 14l2 2 4-5"
        stroke="#0057B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 32c0-5.5 4.5-10 10-10s10 4.5 10 10"
        stroke="#0057B8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 28l1.5 2 3-4"
        stroke="#0057B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function ServiceIcon({ id }: { id: string }) {
  return <>{icons[id] ?? null}</>;
}
