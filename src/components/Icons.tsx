/** SVG icon components for TerraValue value streams and UI elements. */

type IconProps = { className?: string; size?: number };

/**
 * TerraValue leaf-hexagon logomark.
 * A hexagonal frame with leaf-vein geometry inside —
 * the hexagon suggests infrastructure, the veins represent natural capital.
 */
export function TerraValueLogo({ className = '', size = 36 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hexagon outline */}
      <polygon
        points="50,3 93,28 93,72 50,97 7,72 7,28"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Central vein (stem) */}
      <line
        x1="50" y1="88" x2="50" y2="18"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Left veins — angled lines from center stem outward-left */}
      <line x1="50" y1="35" x2="22" y2="22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="50" x2="16" y2="42" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="65" x2="15" y2="60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="78" x2="22" y2="78" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      {/* Right veins — angled lines from center stem outward-right */}
      <line x1="50" y1="35" x2="78" y2="22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="50" x2="84" y2="42" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="65" x2="85" y2="60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="78" x2="78" y2="78" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function CarbonIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4" />
      <path d="M12 8V2" />
      <path d="M12 16v6" />
      <path d="M9 15l-3 3" />
      <path d="M15 15l3 3" />
    </svg>
  );
}

export function WaterIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  );
}

export function BiodiversityIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0020 0h-3" />
      <path d="M12 2a5 5 0 015 5c0 2.76-2.24 5-5 5S7 9.76 7 7a5 5 0 015-5z" />
      <path d="M7 15l-2 4" />
      <path d="M17 15l2 4" />
    </svg>
  );
}

export function ResilienceIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

export function EconomicsIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
}

export function ArrowRightIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ChevronDownIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function MenuIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function CheckIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ChartIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

export function GlobeIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

/** Map value stream keys to icon components */
export const streamIcons: Record<string, React.FC<IconProps>> = {
  carbon: CarbonIcon,
  water: WaterIcon,
  biodiversity: BiodiversityIcon,
  resilience: ResilienceIcon,
  economics: EconomicsIcon,
};
