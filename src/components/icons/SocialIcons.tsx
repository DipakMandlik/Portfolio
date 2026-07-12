type IconProps = { className?: string };

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2" />
      <rect x="6.2" y="9.5" width="2.6" height="8.3" fill="#fff" />
      <circle cx="7.5" cy="6.3" r="1.6" fill="#fff" />
      <path
        d="M11.3 9.5h2.5v1.14c.36-.6 1.24-1.34 2.64-1.34 2.02 0 3.16 1.3 3.16 3.72v4.78h-2.6v-4.27c0-1.14-.42-1.9-1.46-1.9-.8 0-1.28.55-1.49 1.07-.08.19-.1.46-.1.73v4.37h-2.6z"
        fill="#fff"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="24" x2="24" y2="0">
          <stop offset="0%" stopColor="#FEE140" />
          <stop offset="45%" stopColor="#E4405F" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#ig-grad)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="#fff" />
    </svg>
  );
}
