'use client'

interface SpeakerShowcaseProps {
  onOpenWaitlist?: () => void
}

export default function SpeakerShowcase({ onOpenWaitlist }: SpeakerShowcaseProps) {
  return (
    <section id="speakers" className="py-20 bg-[#0f0a05]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">
            Operadores, No Conferencistas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Gente que opera sistemas de IA en producción. No vendedores de cursos ni teóricos.
          </p>
        </div>

        {/* Coming Soon Teaser */}
        <div className="max-w-4xl mx-auto">
          {/* Promise Badge */}
          <div className="text-center mb-12">
            <div className="inline-block stone-block border-[#E99C37]/30 px-8 py-4">
              <p className="text-[#FBD64C] font-medium text-lg">
                +20 Operadores confirmándose de empresas como:
              </p>
              <p className="text-gray-300 mt-2">
                Google Cloud · MercadoLibre · Rappi · Fintech LATAM · Startups de IA
              </p>
            </div>
          </div>

          {/* Speaker Placeholder Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="stone-block overflow-hidden border-dashed border-[#3d2f1e]"
              >
                {/* Blurred placeholder */}
                <div className="relative w-full aspect-square bg-gradient-to-br from-[#1a1208] to-[#0f0a05] flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#E99C37]/10 border-2 border-dashed border-[#E99C37]/30 flex items-center justify-center">
                      <svg className="w-10 h-10 text-[#E99C37]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-[#E99C37]/70 text-sm font-medium">Por anunciar</p>
                  </div>
                </div>

                {/* Info placeholder */}
                <div className="p-6">
                  <div className="h-4 w-3/4 bg-[#3d2f1e]/50 rounded mb-2"></div>
                  <div className="h-3 w-1/2 bg-[#E99C37]/20 rounded mb-1"></div>
                  <div className="h-3 w-2/3 bg-[#3d2f1e]/30 rounded"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Announcement CTA */}
          <div className="text-center">
            <div className="stone-block border-[#E99C37]/30 p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E99C37] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E99C37]"></span>
                </span>
                <span className="text-[#FBD64C] font-semibold">Anuncio de speakers próximamente</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Sé el primero en conocer el lineup
              </h3>

              <p className="text-gray-300 mb-6">
                Estamos confirmando operadores de las empresas de IA más importantes de LATAM.
                Únete a la lista de espera para recibir el anuncio exclusivo.
              </p>

              <button
                onClick={onOpenWaitlist}
                className="btn-stone-primary px-8 py-3 text-white font-semibold transition"
              >
                Notificarme cuando se anuncien
              </button>
            </div>
          </div>
        </div>

        {/* Speaker Application CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">¿Operas IA en producción y quieres compartir tu experiencia?</p>
          <button className="btn-stone px-8 py-3 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold border border-[#FBD64C]/30 transition">
            Postula como Speaker
          </button>
        </div>
      </div>
    </section>
  )
}
