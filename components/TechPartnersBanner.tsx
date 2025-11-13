'use client'

import Image from 'next/image'

const partners = [
  {
    name: 'Prisma',
    logo: '/logos/prisma.svg', // Using placeholder path - will need actual logos
    width: 100,
    height: 32
  },
  {
    name: 'Conversia',
    logo: '/logos/conversia.svg',
    width: 120,
    height: 32
  },
  {
    name: 'Google',
    logo: '/logos/google.svg',
    width: 90,
    height: 32
  },
  {
    name: 'ElevenLabs',
    logo: '/logos/elevenlabs.svg',
    width: 110,
    height: 32
  },
  {
    name: 'OpenAI',
    logo: '/logos/openai.svg',
    width: 95,
    height: 32
  }
]

export default function TechPartnersBanner() {
  // Triple the partners array for seamless infinite scroll
  const scrollingPartners = [...partners, ...partners, ...partners]

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 py-16 border-y border-indigo-500/20 mt-8 mb-12"
      aria-label="Technology Partners"
      role="region"
    >
      {/* Badge - Integrated at top */}
      <div className="text-center mb-10">
        <span className="inline-block bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
          <p className="text-[11px] text-indigo-300 font-semibold uppercase tracking-wider">
            Technology Partners
          </p>
        </span>
      </div>

      {/* Gradient fade edges - Adjusted for new background */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling container with hover pause */}
      <div className="flex animate-scroll-infinite hover:pause-animation">
        {scrollingPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex items-center justify-center px-8 md:px-10 flex-shrink-0 group transition-all duration-300"
          >
            <div className="relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="h-8 w-auto object-contain filter brightness-0 invert"
                loading="lazy"
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-indigo-400/20 -z-10"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Screen reader text */}
      <span className="sr-only">
        Our technology partners include {partners.map(p => p.name).join(', ')}
      </span>
    </section>
  )
}
