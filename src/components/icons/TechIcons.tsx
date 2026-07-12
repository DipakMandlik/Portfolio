type IconProps = { className?: string };

function SnowflakeArm() {
  return (
    <g stroke="#29B5E8" strokeWidth="1.6" strokeLinecap="round">
      <line x1="12" y1="2.5" x2="12" y2="21.5" />
      <line x1="12" y1="6" x2="9.2" y2="4.2" />
      <line x1="12" y1="6" x2="14.8" y2="4.2" />
      <line x1="12" y1="18" x2="9.2" y2="19.8" />
      <line x1="12" y1="18" x2="14.8" y2="19.8" />
    </g>
  );
}

export function SnowflakeLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <SnowflakeArm />
      <g transform="rotate(60 12 12)">
        <SnowflakeArm />
      </g>
      <g transform="rotate(120 12 12)">
        <SnowflakeArm />
      </g>
    </svg>
  );
}

export function DbtLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M4 5.5 12 12 4 18.5Z" fill="#FF694B" />
      <path d="M20 5.5 12 12l8 6.5Z" fill="#FF694B" opacity="0.55" />
    </svg>
  );
}

export function PythonLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 2.5c-3.6 0-3.4 1.6-3.4 1.6v2.3h3.5v.6H7.2S5 6.7 5 10.4s1.9 3.6 1.9 3.6h1.4v-1.9s-.1-1.9 1.9-1.9h3.4s1.8 0 1.8-1.8V4.3s.3-1.8-3.4-1.8Zm-1.9 1.2a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4Z"
        fill="#3776AB"
      />
      <path
        d="M12 21.5c3.6 0 3.4-1.6 3.4-1.6v-2.3h-3.5v-.6h4.9s2.2.3 2.2-3.4-1.9-3.6-1.9-3.6h-1.4v1.9s.1 1.9-1.9 1.9H10.4s-1.8 0-1.8 1.8v3.1s-.3 1.8 3.4 1.8Zm1.9-1.2a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function AzureLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M9.5 3.5h5L9.8 15.2l-6.3 1.9Z" fill="#0078D4" />
      <path d="M14.9 4.2 8.3 17.7h11.9l-4-8.4L14.9 4.2Z" fill="#0078D4" opacity="0.75" />
    </svg>
  );
}

export function AwsLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M3.5 16c4 2.6 13 3 17-.3"
        stroke="#FF9900"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M18 14.3l2.5 1.2-1.6 2.3"
        stroke="#FF9900"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ClaudeLogo({ className }: IconProps) {
  const rays = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      {rays.map((deg) => (
        <line
          key={deg}
          x1="12"
          y1="12"
          x2="12"
          y2="4"
          stroke="#D97757"
          strokeWidth="2.2"
          strokeLinecap="round"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  );
}

export function OpenAiLogo({ className }: IconProps) {
  const petals = Array.from({ length: 6 }, (_, i) => i * 60);
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      {petals.map((deg) => (
        <ellipse
          key={deg}
          cx="12"
          cy="6.5"
          rx="2"
          ry="3.4"
          fill="#111318"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="2.3" fill="#fff" />
    </svg>
  );
}
