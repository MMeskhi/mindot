const icons: Record<string, React.ReactNode> = {
  mail: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="3" width="16" height="12" rx="2" stroke="#FF5A1F" strokeWidth="1.5" />
      <path d="M1 6l8 5 8-5" stroke="#FF5A1F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M3 2h4l1.5 4-2 1.5a10 10 0 004 4L12 9.5l4 1.5v4a1 1 0 01-1 1C6 16 2 10 2 3a1 1 0 011-1z"
        stroke="#FF5A1F"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pin: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 1a6 6 0 016 6c0 4-6 10-6 10S3 11 3 7a6 6 0 016-6z"
        stroke="#FF5A1F"
        strokeWidth="1.5"
      />
      <circle cx="9" cy="7" r="2" stroke="#FF5A1F" strokeWidth="1.5" />
    </svg>
  ),
};

export default function ContactIcon({ id }: { id: string }) {
  return <>{icons[id] ?? null}</>;
}
