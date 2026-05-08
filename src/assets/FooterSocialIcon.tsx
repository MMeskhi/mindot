const icons: Record<string, React.ReactNode> = {
  Twitter: (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M14.3 1H12l-3.3 4.6L5.3 1H1l5.3 7.1L1 15h2.3l3.6-5 3.8 5H15l-5.5-7.3L14.3 1z" />
    </svg>
  ),
  Behance: (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M5.5 7.5c.8-.3 1.5-1 1.5-2C7 4 6 3 4 3H0v10h4.5C7 13 8 12 8 10.5c0-1.4-.8-2.6-2.5-3zM2 5h1.8c.7 0 1.2.4 1.2 1s-.5 1-1.2 1H2V5zm2.2 6H2V9h2.2c.9 0 1.3.5 1.3 1s-.4 1-1.3 1zM11.5 5C9 5 7.5 7 7.5 9s1.5 4 4 4c2 0 3.2-1.2 3.7-2.5H13c-.3.6-.9 1-1.5 1-1 0-1.8-.7-2-2H15.5C16 6.5 14.5 5 11.5 5zm-2 3c.2-1 1-1.5 2-1.5.9 0 1.6.5 1.8 1.5H9.5zM9.5 3h4v1h-4V3z" />
    </svg>
  ),
  Dribbble: (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor">
      <circle cx="8" cy="8" r="7" strokeWidth="1.5" />
      <path d="M1 8c2 0 4-1 6-3M15 8c-2 0-4 1-6 3M5 2c1 3 2 7 1 12M11 2c-1 3-2 7-1 12" strokeWidth="1" />
    </svg>
  ),
  LinkedIn: (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="5" width="3" height="10" />
      <circle cx="2.5" cy="2.5" r="1.5" />
      <path d="M6 5h3v1.5C9.5 5.5 10.5 5 12 5c2 0 3 1.2 3 3.5V15h-3v-6c0-1-.5-1.5-1.3-1.5S9 8 9 9v6H6V5z" />
    </svg>
  ),
};

export default function FooterSocialIcon({ label }: { label: string }) {
  return <>{icons[label] ?? null}</>;
}
