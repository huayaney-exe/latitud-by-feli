import Badge from "../primitives/Badge";

export interface Speaker {
  name: string;
  role: string;
  company: string;
  topic?: string;
  image?: string;
}

interface SpeakerCardProps {
  speaker: Speaker;
  className?: string;
}

export default function SpeakerCard({ speaker, className = "" }: SpeakerCardProps) {
  return (
    <div
      className={`bg-[rgba(245,240,235,0.02)] border border-[rgba(245,240,235,0.04)] p-6 transition-all duration-500 hover:border-[rgba(212,32,32,0.12)] group ${className}`}
    >
      {/* Photo placeholder */}
      <div className="aspect-square bg-[rgba(245,240,235,0.03)] mb-5 overflow-hidden flex items-center justify-center">
        {speaker.image ? (
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700"
          />
        ) : (
          <span className="font-[family-name:var(--lat-font-display)] text-[48px] text-[rgba(245,240,235,0.04)]">
            {speaker.name.charAt(0)}
          </span>
        )}
      </div>

      {/* Info */}
      <h3 className="font-[family-name:var(--lat-font-display)] text-lg text-[var(--lat-wh)] mb-1">
        {speaker.name}
      </h3>
      <p className="font-light text-xs text-[rgba(245,240,235,0.25)] mb-1">
        {speaker.role}
      </p>
      <p className="font-medium text-xs text-[rgba(245,240,235,0.4)] tracking-[0.05em] mb-3">
        {speaker.company}
      </p>
      {speaker.topic && (
        <Badge variant="red">{speaker.topic}</Badge>
      )}
    </div>
  );
}
