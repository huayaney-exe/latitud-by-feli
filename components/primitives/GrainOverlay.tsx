interface GrainOverlayProps {
  opacity?: number;
  className?: string;
}

export default function GrainOverlay({ opacity = 0.3, className = "" }: GrainOverlayProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-[2] ${className}`}
      style={{
        background:
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        backgroundSize: "180px",
        mixBlendMode: "overlay",
        opacity,
      }}
      aria-hidden="true"
    />
  );
}
