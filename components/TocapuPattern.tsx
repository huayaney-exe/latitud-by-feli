'use client'

// Tocapu Pattern - Inspired by Inca textile geometric designs
// Based on the LATAI Summit Figma design system

export default function TocapuPattern({
  className = '',
  opacity = 0.15,
  size = 'md',
  variant = 'default'
}: {
  className?: string
  opacity?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'hero' | 'corner'
}) {
  const sizeMap = {
    sm: { width: 120, height: 120, strokeWidth: 2 },
    md: { width: 200, height: 200, strokeWidth: 2.5 },
    lg: { width: 300, height: 300, strokeWidth: 3 }
  }

  const { width, height, strokeWidth } = sizeMap[size]

  if (variant === 'corner') {
    return (
      <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        style={{ opacity }}
      >
        {/* Corner Tocapu - Single geometric element */}
        <g stroke="#E99C37" strokeWidth={strokeWidth}>
          {/* Outer frame */}
          <rect x="10" y="10" width="80" height="80" rx="4" />
          {/* Inner frame */}
          <rect x="25" y="25" width="50" height="50" rx="2" />
          {/* Center element */}
          <rect x="40" y="40" width="20" height="20" fill="#FBD64C" fillOpacity="0.3" />
          {/* Diagonal accents */}
          <line x1="10" y1="10" x2="25" y2="25" />
          <line x1="90" y1="10" x2="75" y2="25" />
          <line x1="10" y1="90" x2="25" y2="75" />
          <line x1="90" y1="90" x2="75" y2="75" />
        </g>
      </svg>
    )
  }

  if (variant === 'hero') {
    return (
      <svg
        className={className}
        width={width * 1.5}
        height={height * 1.5}
        viewBox="0 0 200 200"
        fill="none"
        style={{ opacity }}
      >
        {/* Hero Tocapu - Complex interlocking pattern */}
        <defs>
          <linearGradient id="tocapuGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E99C37" />
            <stop offset="50%" stopColor="#FBD64C" />
            <stop offset="100%" stopColor="#D4A83D" />
          </linearGradient>
        </defs>

        <g stroke="url(#tocapuGradient)" strokeWidth={strokeWidth} fill="none">
          {/* Main grid - 2x2 Tocapu units */}
          {/* Top-left unit */}
          <rect x="10" y="10" width="85" height="85" rx="6" />
          <rect x="25" y="25" width="55" height="55" rx="4" />
          <rect x="40" y="40" width="25" height="25" rx="2" fill="#E99C37" fillOpacity="0.1" />

          {/* Top-right unit */}
          <rect x="105" y="10" width="85" height="85" rx="6" />
          <rect x="120" y="25" width="55" height="55" rx="4" />
          <rect x="135" y="40" width="25" height="25" rx="2" fill="#FBD64C" fillOpacity="0.1" />

          {/* Bottom-left unit */}
          <rect x="10" y="105" width="85" height="85" rx="6" />
          <rect x="25" y="120" width="55" height="55" rx="4" />
          <rect x="40" y="135" width="25" height="25" rx="2" fill="#D4A83D" fillOpacity="0.1" />

          {/* Bottom-right unit */}
          <rect x="105" y="105" width="85" height="85" rx="6" />
          <rect x="120" y="120" width="55" height="55" rx="4" />
          <rect x="135" y="135" width="25" height="25" rx="2" fill="#E99C37" fillOpacity="0.1" />

          {/* Connecting lines - Inca style */}
          <line x1="52" y1="10" x2="52" y2="0" strokeWidth="1.5" />
          <line x1="147" y1="10" x2="147" y2="0" strokeWidth="1.5" />
          <line x1="52" y1="190" x2="52" y2="200" strokeWidth="1.5" />
          <line x1="147" y1="190" x2="147" y2="200" strokeWidth="1.5" />
        </g>
      </svg>
    )
  }

  // Default variant - repeating pattern
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      style={{ opacity }}
    >
      <defs>
        <pattern id="tocapuGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <g stroke="#E99C37" strokeWidth={strokeWidth * 0.8}>
            {/* Single Tocapu unit */}
            <rect x="5" y="5" width="40" height="40" rx="3" />
            <rect x="12" y="12" width="26" height="26" rx="2" />
            <rect x="19" y="19" width="12" height="12" fill="#FBD64C" fillOpacity="0.2" />
          </g>
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#tocapuGrid)" />
    </svg>
  )
}

// Tocapu Border Decoration
export function TocapuBorder({
  className = '',
  position = 'top'
}: {
  className?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}) {
  const isHorizontal = position === 'top' || position === 'bottom'

  return (
    <svg
      className={className}
      width={isHorizontal ? "100%" : "20"}
      height={isHorizontal ? "20" : "100%"}
      preserveAspectRatio="none"
      viewBox={isHorizontal ? "0 0 200 20" : "0 0 20 200"}
      fill="none"
    >
      <defs>
        <pattern
          id={`tocapuBorder-${position}`}
          x="0" y="0"
          width={isHorizontal ? "20" : "20"}
          height={isHorizontal ? "20" : "20"}
          patternUnits="userSpaceOnUse"
        >
          <rect x="2" y="2" width="16" height="16" rx="2" stroke="#E99C37" strokeWidth="1" fill="none" />
          <rect x="6" y="6" width="8" height="8" fill="#FBD64C" fillOpacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#tocapuBorder-${position})`} opacity="0.4" />
    </svg>
  )
}
