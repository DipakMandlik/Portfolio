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

export function SqlLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <ellipse cx="12" cy="5.2" rx="7.5" ry="2.6" fill="#334155" />
      <path
        d="M4.5 5.2v13.6c0 1.4 3.4 2.6 7.5 2.6s7.5-1.2 7.5-2.6V5.2"
        stroke="#334155"
        strokeWidth="1.6"
        fill="none"
      />
      <path d="M4.5 11.2c0 1.4 3.4 2.6 7.5 2.6s7.5-1.2 7.5-2.6" stroke="#334155" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

export function ApacheAirflowLogo({ className }: IconProps) {
  const blades = [
    { deg: 0, color: "#00AD46" },
    { deg: 90, color: "#017CEE" },
    { deg: 180, color: "#FF6A6A" },
    { deg: 270, color: "#FFC933" },
  ];
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      {blades.map(({ deg, color }) => (
        <path
          key={deg}
          d="M12 12C12 8 13.5 5 17 4.2C16.6 8 14.8 10.6 12 12Z"
          fill={color}
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="1.6" fill="#111318" />
    </svg>
  );
}

export function FivetranLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M4 7.5C4 6 5.2 5 6.8 5h9.4C17.8 5 19 6 19 7.5s-1.2 2.5-2.8 2.5H6.8C5.2 10 4 9 4 7.5Z" fill="#1F7AE0" />
      <path d="M8 16.5c0-1.5 1.2-2.5 2.8-2.5h4.4c1.6 0 2.8 1 2.8 2.5S16.8 19 15.2 19h-4.4C9.2 19 8 18 8 16.5Z" fill="#1F7AE0" opacity="0.55" />
    </svg>
  );
}

export function LangChainLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="9.5" cy="9.5" r="5" stroke="#1C3C3C" strokeWidth="2" />
      <circle cx="14.5" cy="14.5" r="5" stroke="#3F7A5C" strokeWidth="2" />
    </svg>
  );
}

export function CursorLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M12 2.5 20.5 7.6 12 12.7 3.5 7.6Z" fill="#111318" />
      <path d="M12 12.7 20.5 7.6v9.1L12 21.5Z" fill="#111318" opacity="0.6" />
      <path d="M12 12.7 3.5 7.6v9.1L12 21.5Z" fill="#111318" opacity="0.35" />
    </svg>
  );
}

export function N8nLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <line x1="5" y1="12" x2="19" y2="7" stroke="#EA4B71" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="5" y1="12" x2="19" y2="17" stroke="#EA4B71" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="5" cy="12" r="2.6" fill="#EA4B71" />
      <circle cx="19" cy="7" r="2.6" fill="#EA4B71" />
      <circle cx="19" cy="17" r="2.6" fill="#EA4B71" />
    </svg>
  );
}

export function JavaScriptLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E" />
      <path
        d="M12.3 16.9c.3.6.8 1 1.6 1 .8 0 1.2-.4 1.2-1s-.4-.9-1.2-1.2l-.4-.2c-1.3-.5-2.1-1.2-2.1-2.6 0-1.3 1-2.3 2.5-2.3 1.1 0 1.9.4 2.4 1.4l-1.3.9c-.3-.5-.6-.7-1.1-.7-.5 0-.8.3-.8.7 0 .5.3.7 1 1l.4.2c1.5.7 2.4 1.3 2.4 2.8 0 1.6-1.2 2.5-2.9 2.5-1.6 0-2.6-.8-3.1-1.8Z"
        fill="#111318"
      />
      <path
        d="M9.7 11.6h1.5v4.9c0 1.9-.9 2.7-2.3 2.7-1.2 0-2-.6-2.4-1.5l1.3-.8c.2.4.5.7 1 .7.5 0 .9-.3.9-1.1Z"
        fill="#111318"
      />
    </svg>
  );
}

export function ReactLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.4">
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

export function NodeJsLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2 20.5 6.8v10.4L12 22 3.5 17.2V6.8Z"
        fill="#339933"
      />
      <path
        d="M12 2 20.5 6.8v10.4L12 22Z"
        fill="#111318"
        opacity="0.12"
      />
    </svg>
  );
}

export function GitHubLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10.5" fill="#111318" />
      <path
        d="M12 6.2c-3.3 0-5.9 2.6-5.9 5.9 0 2.6 1.7 4.9 4.1 5.7.3.1.4-.1.4-.3v-1.2c-1.7.4-2-.7-2-.7-.3-.7-.7-.9-.7-.9-.6-.4 0-.4 0-.4.6 0 1 .6 1 .6.6 1 1.5.7 1.9.6.1-.5.2-.8.4-1-1.3-.2-2.7-.7-2.7-3 0-.7.2-1.2.6-1.6-.1-.2-.3-.8.1-1.6 0 0 .5-.2 1.7.6.5-.1 1-.2 1.5-.2s1 .1 1.5.2c1.2-.8 1.7-.6 1.7-.6.3.8.1 1.4.1 1.6.4.4.6.9.6 1.6 0 2.3-1.4 2.8-2.7 3 .2.2.4.6.4 1.2v1.8c0 .2.1.4.4.3 2.4-.8 4.1-3.1 4.1-5.7 0-3.3-2.6-5.9-5.9-5.9Z"
        fill="#fff"
      />
    </svg>
  );
}

export function DockerLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <g fill="#2496ED">
        <rect x="7" y="9" width="3" height="3" rx="0.4" />
        <rect x="10.5" y="9" width="3" height="3" rx="0.4" />
        <rect x="10.5" y="5.3" width="3" height="3" rx="0.4" />
        <rect x="14" y="9" width="3" height="3" rx="0.4" />
      </g>
      <path
        d="M3 12.3h18c-.4 3.6-2.9 6.5-9 6.5s-8.6-2.9-9-6.5Z"
        fill="#2496ED"
      />
    </svg>
  );
}

export function KubernetesLogo({ className }: IconProps) {
  const spokes = Array.from({ length: 7 }, (_, i) => i * (360 / 7));
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="#326CE5" strokeWidth="1.6" />
      {spokes.map((deg) => (
        <line
          key={deg}
          x1="12"
          y1="12"
          x2="12"
          y2="4"
          stroke="#326CE5"
          strokeWidth="1.4"
          strokeLinecap="round"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="3" fill="#326CE5" />
    </svg>
  );
}

export function GitHubActionsLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M12 3 20 8v8l-8 5-8-5V8Z" stroke="#2188FF" strokeWidth="1.6" fill="none" />
      <path d="M9.5 9.5 15 12l-5.5 2.5Z" fill="#2188FF" />
    </svg>
  );
}

export function TerraformLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <g fill="#7B42BC">
        <path d="M4 4.8 8.3 7.3v5L4 9.8Z" />
        <path d="M9 7.3 13.3 4.8v5L9 12.3Z" />
        <path d="M14 12.6 18.3 10.1v5L14 17.6Z" />
        <path d="M9 12.6 13.3 15.1v5L9 17.6Z" />
      </g>
    </svg>
  );
}

export function DatabricksLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M4 7.5 12 4l8 3.5-8 3.5Z" fill="#FF3621" />
      <path d="M4 12 12 8.5 20 12l-8 3.5Z" fill="#FF3621" opacity="0.75" />
      <path d="M4 16.5 12 13l8 3.5-8 3.5Z" fill="#FF3621" opacity="0.5" />
    </svg>
  );
}

export function GoogleCloudLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M14.2 8.3a4.7 4.7 0 0 0-8.9 1.8A4.1 4.1 0 0 0 6.3 18h7.6a3.6 3.6 0 0 0 .6-7.1 4.6 4.6 0 0 0-.3-2.6Z"
        fill="#4285F4"
      />
      <path d="M14.2 8.3c1.6.2 2.8 1.1 3.4 2.5a3.6 3.6 0 0 1-.7 7.2h-2.4Z" fill="#34A2F1" />
    </svg>
  );
}

export function SparkLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 2.5c-1 3-3.5 4.6-3.5 7.8 0 2.2 1.6 4 3.5 4s3.5-1.8 3.5-4c0-1.4-.6-2.3-1.3-3.2.2 1-.1 1.9-1 2.6.2-1.6-.3-2.7-1.2-4a6 6 0 0 0 0-3.2Z"
        fill="#E25A1C"
      />
      <path
        d="M7.5 15.2c1.2 1 2.8 1.6 4.5 1.6s3.3-.6 4.5-1.6c-.3 2.7-2.3 4.8-4.5 4.8s-4.2-2.1-4.5-4.8Z"
        fill="#E25A1C"
        opacity="0.6"
      />
    </svg>
  );
}

export function ApacheIcebergLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M12 3 5 20h4l3-6 3 6h4Z" fill="#0B2A6B" />
      <path d="M12 3 9 20h3Z" fill="#2f6bff" opacity="0.5" />
    </svg>
  );
}

export function DeltaLakeLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M12 3.5 21 20H3Z" fill="#00ADD4" />
      <path d="M12 3.5 21 20h-4.5Z" fill="#0B7285" opacity="0.7" />
    </svg>
  );
}

export function CopilotLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M8.2 5.5c-2.2 0-3.7 1.8-3.7 4v3.4c0 .9-.4 1.3-1 1.6.6.3 1 .7 1 1.6v1c0 1.4 1 2.4 2.4 2.4h.6v-3.2c0-1 .5-1.5 1.4-1.7-.9-.2-1.4-.7-1.4-1.7V9.5c0-1.3.8-2.2 2-2.4V5.5Z"
        fill="#111318"
      />
      <path
        d="M15.8 5.5c2.2 0 3.7 1.8 3.7 4v3.4c0 .9.4 1.3 1 1.6-.6.3-1 .7-1 1.6v1c0 1.4-1 2.4-2.4 2.4h-.6v-3.2c0-1-.5-1.5-1.4-1.7.9-.2 1.4-.7 1.4-1.7V9.5c0-1.3-.8-2.2-2-2.4V5.5Z"
        fill="#111318"
      />
      <circle cx="9" cy="12.3" r="1.3" fill="#8C8C8C" />
      <circle cx="15" cy="12.3" r="1.3" fill="#8C8C8C" />
    </svg>
  );
}

export function DatadogLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <g fill="#632CA6">
        <ellipse cx="8.2" cy="7.5" rx="1.7" ry="2.2" transform="rotate(-18 8.2 7.5)" />
        <ellipse cx="13.2" cy="6.3" rx="1.7" ry="2.2" transform="rotate(6 13.2 6.3)" />
        <ellipse cx="17.1" cy="9.6" rx="1.6" ry="2.1" transform="rotate(28 17.1 9.6)" />
        <ellipse cx="6.2" cy="12.3" rx="1.6" ry="2.1" transform="rotate(-28 6.2 12.3)" />
        <path d="M12 11c2.6 0 5.5 1.7 5.5 4.6 0 2.5-2 4.4-5.5 4.4s-5.5-1.9-5.5-4.4C6.5 12.7 9.4 11 12 11Z" />
      </g>
    </svg>
  );
}

export function TypeScriptLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
      <path
        d="M9.8 12.4H7v-1.5h7.4v1.5h-2.8v7.6H9.8Z"
        fill="#fff"
      />
      <path
        d="M14.2 17.5c.4.5.9.9 1.7.9.7 0 1.1-.4 1.1-.9s-.4-.8-1.1-1l-.4-.2c-1.1-.5-1.9-1.1-1.9-2.4 0-1.2.9-2.1 2.3-2.1 1 0 1.7.3 2.2 1.2l-1.2.8c-.3-.5-.6-.6-1-.6-.4 0-.7.3-.7.6 0 .4.3.6.9.9l.4.2c1.3.6 2.1 1.2 2.1 2.5 0 1.4-1.1 2.2-2.6 2.2-1.5 0-2.4-.7-2.9-1.6Z"
        fill="#fff"
      />
    </svg>
  );
}

export function FastApiLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#009688" />
      <path d="M13 3.5 6.5 13H11l-1.5 7.2L17.5 10H13Z" fill="#fff" />
    </svg>
  );
}

export function PostgreSqlLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 3c-4.4 0-7 2.7-7 7.4 0 4 2 7.4 4.4 9.2.5.4 1.1.1 1.1-.5v-3.3c-2-.5-2.7-1.9-2.7-3.4h1.4c0 1.4.9 2.3 3 2.3 1.8 0 2.9-.7 2.9-1.8 0-1-.7-1.4-2.6-1.9l-1-.2c-2.3-.6-3.5-1.7-3.5-3.5 0-2 1.6-3.4 4.2-3.4 2.7 0 4.3 1.4 4.4 3.6h-1.4c-.1-1.3-1.1-2.1-3-2.1-1.7 0-2.7.7-2.7 1.8 0 .9.6 1.3 2.4 1.8l1 .2c2.5.6 3.7 1.7 3.7 3.6 0 2.1-1.7 3.5-4.5 3.6v3.3c3.4-1.1 6.9-4.7 6.9-9.4 0-4.7-2.6-7.4-7-7.4Z"
        fill="#336791"
      />
    </svg>
  );
}

export function RedisLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <g fill="#DC382D">
        <path d="M12 3 20 6.5 12 10 4 6.5Z" />
        <path d="M4 11 12 14.5 20 11v2.2L12 16.7 4 13.2Z" />
        <path d="M4 16 12 19.5 20 16v2.2L12 21.7 4 18.2Z" />
      </g>
    </svg>
  );
}

export function NextJsLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10.5" fill="#111318" />
      <path d="M9 8v8l1.6.9V9.9L15.5 17H17V8h-1.6v6.4L10.7 8Z" fill="#fff" />
    </svg>
  );
}

export function ScikitLearnLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M9 3c2.8 0 4.5 2 4.5 4.6 0 1.7-.8 2.9-1.6 4 1 1.1 1.6 2.4 1.6 4 0 2.6-1.7 4.6-4.5 4.6-1.6 0-2.9-.7-3.7-1.8l1.4-1.1c.5.7 1.3 1.1 2.3 1.1 1.6 0 2.6-1.2 2.6-2.8 0-1.1-.5-2-1.3-2.7-.8.7-1.8 1.2-3 1.2v-1.8c1.1 0 2-.4 2.6-1.1-.8-.7-1.3-1.6-1.3-2.7 0-1.6 1-2.8 2.6-2.8"
        fill="#F89939"
      />
      <circle cx="17" cy="12" r="3.4" fill="#29ABE2" />
    </svg>
  );
}

export function PlotlyLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <g stroke="#119DFF" strokeWidth="1.8" strokeLinecap="round">
        <line x1="5" y1="19" x2="5" y2="13" />
        <line x1="9.5" y1="19" x2="9.5" y2="8" />
        <line x1="14" y1="19" x2="14" y2="11" />
        <line x1="18.5" y1="19" x2="18.5" y2="5" />
      </g>
      <circle cx="18.5" cy="5" r="1.6" fill="#3F4F75" />
    </svg>
  );
}

export function SupabaseLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M13 2 5 14h6l-1 8 9-13h-6Z" fill="#3ECF8E" />
    </svg>
  );
}

export function TailwindCssLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M6 12.5c.7-2.8 2.4-4.2 5-4.2 3.9 0 4.4 2.8 6 3.2-.7 2.8-2.4 4.2-5 4.2-3.9 0-4.4-2.8-6-3.2Z"
        fill="#38BDF8"
      />
      <path
        d="M1 16.5c.7-2.8 2.4-4.2 5-4.2 3.9 0 4.4 2.8 6 3.2-.7 2.8-2.4 4.2-5 4.2-3.9 0-4.4-2.8-6-3.2Z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function Html5Logo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M4 3h16l-1.5 16.5L12 21l-6.5-1.5Z" fill="#E34F26" />
      <path d="M12 4.3v15.4l5.3-1.5L18.4 4.3Z" fill="#F16529" />
      <path
        d="M8 8.3h8l-.2 2H8.3l.2 2h7.3l-.5 5.5-3.3 1-3.3-1-.2-2.3h2l.1 1 1.4.4 1.4-.4.2-2.2H8.6Z"
        fill="#fff"
      />
    </svg>
  );
}

export function Css3Logo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M4 3h16l-1.5 16.5L12 21l-6.5-1.5Z" fill="#1572B6" />
      <path d="M12 4.3v15.4l5.3-1.5L18.4 4.3Z" fill="#33A9DC" />
      <path
        d="M8.2 8.3h7.8l-.2 2H10l.2 1.8h5.4l-.5 5.4-3.1 1-3.1-1-.2-2.2h1.9l.1.9 1.3.4 1.3-.4.2-2.1H8.7Z"
        fill="#fff"
      />
    </svg>
  );
}

export function FlaskLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M10 3h4v5.2l4.3 8.1c.6 1.1-.2 2.4-1.5 2.4H7.2c-1.3 0-2.1-1.3-1.5-2.4L10 8.2Z"
        stroke="#111318"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M8.2 14.5h7.6l1.8 3.4c.4.7-.1 1.6-1 1.6H7.4c-.9 0-1.4-.9-1-1.6Z" fill="#111318" />
    </svg>
  );
}

export function OpenCvLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="12" cy="5.5" r="3" fill="#5C3EE8" />
      <circle cx="6" cy="16" r="3" fill="#00A651" />
      <circle cx="18" cy="16" r="3" fill="#EE4C2C" />
    </svg>
  );
}

export function ExpressLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#111318" />
      <path
        d="M5.5 16 8.8 12 5.7 8.2h1.8l2.2 2.8 2.2-2.8h1.8L10.6 12l3.3 4h-1.8l-2.3-2.9L7.4 16Z"
        fill="#fff"
      />
      <path
        d="M14.5 12.5c0-1.9 1.1-3.2 2.9-3.2 1.8 0 2.7 1.3 2.7 3.1v.5h-4c.1 1 .7 1.6 1.7 1.6.7 0 1.2-.3 1.5-.8l1 .6c-.5.8-1.4 1.3-2.5 1.3-1.8 0-3.3-1.2-3.3-3.1Zm1.6-.6h2.5c-.1-.8-.6-1.3-1.2-1.3-.7 0-1.2.5-1.3 1.3Z"
        fill="#fff"
      />
    </svg>
  );
}

export function MongoDbLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 2c2.5 3 4 6.4 4 10 0 3.7-1.7 6.8-4 8.5-2.3-1.7-4-4.8-4-8.5 0-3.6 1.5-7 4-10Z"
        fill="#47A248"
      />
      <path d="M12 15.5V22" stroke="#47A248" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
