'use client'

import { ShieldCheckIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

// Custom SVG icons with forced warm colors to match LATAI theme
const UsersIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#FBD64C" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
)

const MicIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#FBD64C" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  </svg>
)

const CalIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#FBD64C" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#FBD64C" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
)

// Goals/expectations - honest about what we're aiming for
const eventGoals = [
  { number: '500+', label: 'Asistentes Meta', Icon: UsersIcon, note: 'Cupo limitado' },
  { number: '20+', label: 'Operadores de IA', Icon: MicIcon, note: 'Confirmándose' },
  { number: '2', label: 'Días Intensivos', Icon: CalIcon, note: 'Mayo 7-8' },
  { number: '50+', label: 'Empresas Esperadas', Icon: BuildingIcon, note: 'Multi-industria' }
]

interface SocialProofProps {
  onOpenWaitlist?: () => void
}

export default function SocialProof({ onOpenWaitlist }: SocialProofProps) {
  return (
    <section className="py-20 relative bg-[#0f0a05]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
            Lo Que Estamos Construyendo
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            El primer encuentro de operadores de IA en Perú. No teóricos, no vendedores de cursos.
            Gente que implementa IA en producción, compartiendo lo que funciona.
          </p>
        </div>

        {/* Stats Grid - Goals */}
        <div className="tocapu-grid grid-cols-2 md:grid-cols-4 mb-12 max-w-4xl mx-auto">
          {eventGoals.map((stat, index) => {
            const Icon = stat.Icon
            return (
              <div key={index} className="text-center group p-6 bg-[#1a1208] transform transition hover:scale-[1.02]">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 mb-4 stone-block border-[#FBD64C]/30 group-hover:border-[#E99C37]/50 transition-all"
                >
                  <Icon />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                <div className="text-xs text-[#E99C37]">{stat.note}</div>
              </div>
            )
          })}
        </div>

        {/* Early Access Notice */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="stone-block border-[#E99C37]/30 bg-gradient-to-r from-[#E99C37]/10 to-[#1a1208] px-6 py-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E99C37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E99C37]"></span>
              </span>
              <span className="text-[#FBD64C] font-semibold">Pre-venta abierta</span>
            </div>
            <p className="text-gray-300 mb-4">
              Sé de los primeros en asegurar tu lugar. Los primeros 100 registros
              obtienen acceso a precios de early bird.
            </p>
            <button
              onClick={onOpenWaitlist}
              className="btn-stone-primary px-8 py-3 text-white font-semibold transition"
            >
              Unirme a la lista de espera
            </button>
          </div>
        </div>

        {/* Trust Badges - Stone Blocks */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="stone-block px-4 py-2 flex items-center gap-2 text-gray-400 group">
            <ShieldCheckIcon className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Pago Seguro con Stripe</span>
          </div>
          <div className="stone-block px-4 py-2 flex items-center gap-2 text-gray-400 group">
            <svg className="w-5 h-5 text-[#FBD64C] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Reembolso 100% hasta 30 días antes</span>
          </div>
          <div className="stone-block px-4 py-2 flex items-center gap-2 text-gray-400 group">
            <AcademicCapIcon className="w-5 h-5 text-[#E99C37] group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Certificado de Asistencia Incluido</span>
          </div>
        </div>
      </div>
    </section>
  )
}
