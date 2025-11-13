'use client'

const partners = [
  {
    name: 'Prisma',
    logo: (
      <svg className="h-8 w-auto" viewBox="0 0 120 30" fill="currentColor">
        <path d="M60 0L45 8.66v17.32L60 34l15-7.68V8.66L60 0zm0 3.12l11 5.78v15.2l-11 5.78-11-5.78V8.9l11-5.78z"/>
        <path d="M60 8l-6 3.46v6.92L60 22l6-3.62v-6.92L60 8zm0 2.5l3.5 2.12v4.76L60 19.5l-3.5-2.12v-4.76L60 10.5z"/>
        <text x="78" y="20" className="text-xs font-bold" fill="currentColor">Prisma</text>
      </svg>
    )
  },
  {
    name: 'Conversia',
    logo: (
      <svg className="h-8 w-auto" viewBox="0 0 140 30" fill="currentColor">
        <path d="M15 4L3 9l12 5 12-5-12-5zM3 21l12 5 12-5M3 15l12 5 12-5"/>
        <text x="32" y="20" className="text-xs font-bold" fill="currentColor">Conversia</text>
      </svg>
    )
  },
  {
    name: 'Google',
    logo: (
      <svg className="h-8 w-auto" viewBox="0 0 120 30" fill="currentColor">
        <path d="M15 7.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5c3.73 0 6.38-2.55 7.18-5.63h-7.18v-3.75h11.25c.11.59.17 1.2.17 1.88 0 6.21-4.16 10.62-11.42 10.62C8.73 25.62 3.75 20.64 3.75 15S8.73 4.38 15 4.38c3.38 0 5.81 1.33 7.63 3.05l-2.77 2.77c-1.13-1.08-2.66-1.92-4.86-1.92z"/>
        <text x="32" y="20" className="text-xs font-bold" fill="currentColor">Google</text>
      </svg>
    )
  },
  {
    name: 'ElevenLabs',
    logo: (
      <svg className="h-8 w-auto" viewBox="0 0 140 30" fill="currentColor">
        <rect x="5" y="18" width="2" height="8" rx="1"/>
        <rect x="9" y="12" width="2" height="14" rx="1"/>
        <rect x="13" y="8" width="2" height="18" rx="1"/>
        <rect x="17" y="14" width="2" height="12" rx="1"/>
        <rect x="21" y="10" width="2" height="16" rx="1"/>
        <text x="28" y="20" className="text-xs font-bold" fill="currentColor">ElevenLabs</text>
      </svg>
    )
  },
  {
    name: 'OpenAI',
    logo: (
      <svg className="h-8 w-auto" viewBox="0 0 120 30" fill="currentColor">
        <circle cx="15" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="15" cy="15" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="15" cy="15" r="2" fill="currentColor"/>
        <line x1="15" y1="5" x2="15" y2="9" stroke="currentColor" strokeWidth="2"/>
        <line x1="15" y1="21" x2="15" y2="25" stroke="currentColor" strokeWidth="2"/>
        <line x1="5" y1="15" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
        <line x1="21" y1="15" x2="25" y2="15" stroke="currentColor" strokeWidth="2"/>
        <text x="32" y="20" className="text-xs font-bold" fill="currentColor">OpenAI</text>
      </svg>
    )
  }
]

export default function TechPartnersBanner() {
  // Triple the partners array for seamless infinite scroll
  const scrollingPartners = [...partners, ...partners, ...partners]

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 py-6 border-b border-white/10">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-indigo-600 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-indigo-600 to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling container */}
      <div className="flex animate-scroll-infinite">
        {scrollingPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex items-center justify-center px-12 text-white/90 hover:text-white transition-colors flex-shrink-0"
          >
            {partner.logo}
          </div>
        ))}
      </div>

      {/* Label text */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 z-20">
        <div className="bg-indigo-700 px-3 py-0.5 rounded-full border border-white/20">
          <p className="text-[10px] text-white/80 font-medium uppercase tracking-wider">
            Powered by
          </p>
        </div>
      </div>
    </div>
  )
}
