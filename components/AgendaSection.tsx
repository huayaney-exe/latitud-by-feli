'use client'

interface AgendaSectionProps {
  onOpenWaitlist?: () => void
}

// Temas confirmados (sin speakers específicos aún)
const confirmedTracks = [
  {
    name: 'IA Operacional',
    description: 'Implementación real, no teoría',
    icon: '⚙️',
    topics: ['De piloto a producción', 'Infraestructura a escala', 'ROI medible']
  },
  {
    name: 'IA Generativa',
    description: 'LLMs en productos reales',
    icon: '🤖',
    topics: ['RAG en producción', 'Fine-tuning enterprise', 'Costos y optimización']
  },
  {
    name: 'Fintech & IA',
    description: 'Casos de LATAM',
    icon: '💳',
    topics: ['Detección de fraude', 'Credit scoring', 'Automatización KYC']
  },
  {
    name: 'Liderazgo',
    description: 'Para CTOs y Heads of AI',
    icon: '🎯',
    topics: ['Construir equipos de IA', 'Presupuestos y priorización', 'Governance']
  }
]

const eventFormat = [
  { time: '09:00', activity: 'Registro y networking', type: 'general' },
  { time: '09:30', activity: 'Keynote principal', type: 'main' },
  { time: '10:30', activity: 'Tracks paralelos (3 sesiones)', type: 'tracks' },
  { time: '12:00', activity: 'Panel de operadores', type: 'main' },
  { time: '13:00', activity: 'Almuerzo y networking', type: 'general' },
  { time: '14:30', activity: 'Workshops prácticos', type: 'workshop' },
  { time: '16:00', activity: 'Casos de estudio', type: 'tracks' },
  { time: '17:00', activity: 'Networking estructurado', type: 'general' },
  { time: '19:00', activity: 'Cena VIP (ticket Premium)', type: 'vip' }
]

export default function AgendaSection({ onOpenWaitlist }: AgendaSectionProps) {
  return (
    <section id="agenda" className="py-20 bg-[#0f0a05] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 qhapaq-network opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            2 Días de Contenido Operacional
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Workshops prácticos, paneles con operadores reales, y networking estructurado
          </p>
        </div>

        {/* Event Dates */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="stone-block border-[#E99C37]/30 px-8 py-4 text-center">
            <p className="text-[#FBD64C] font-bold text-2xl">Mayo 7</p>
            <p className="text-gray-400 text-sm">Día 1</p>
          </div>
          <div className="stone-block border-[#E99C37]/30 px-8 py-4 text-center">
            <p className="text-[#FBD64C] font-bold text-2xl">Mayo 8</p>
            <p className="text-gray-400 text-sm">Día 2</p>
          </div>
        </div>

        {/* Confirmed Tracks */}
        <div className="mb-16">
          <h3 className="text-center text-2xl font-bold text-white mb-8">
            Tracks Confirmados
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {confirmedTracks.map((track, index) => (
              <div
                key={index}
                className="stone-block border-[#E99C37]/20 p-6 hover:border-[#E99C37]/40 transition"
              >
                <div className="text-4xl mb-4">{track.icon}</div>
                <h4 className="text-lg font-bold text-white mb-1">{track.name}</h4>
                <p className="text-[#E99C37] text-sm mb-4">{track.description}</p>
                <ul className="space-y-2">
                  {track.topics.map((topic, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-[#FBD64C]">→</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Format */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-center text-2xl font-bold text-white mb-8">
            Formato del Día
          </h3>
          <div className="stone-block border-[#E99C37]/20 p-6">
            {eventFormat.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 py-3 ${
                  index !== eventFormat.length - 1 ? 'border-b border-[#3d2f1e]' : ''
                }`}
              >
                <div className="w-16 text-right">
                  <span className="text-[#FBD64C] font-semibold">{item.time}</span>
                </div>
                <div className="flex-grow">
                  <span className={`${
                    item.type === 'main' ? 'text-white font-medium' :
                    item.type === 'workshop' ? 'text-[#E99C37]' :
                    item.type === 'vip' ? 'text-[#FBD64C]' :
                    'text-gray-400'
                  }`}>
                    {item.activity}
                  </span>
                </div>
                <div>
                  {item.type === 'main' && (
                    <span className="text-xs bg-[#FBD64C]/20 text-[#FBD64C] px-2 py-1 rounded">MAIN</span>
                  )}
                  {item.type === 'workshop' && (
                    <span className="text-xs bg-[#E99C37]/20 text-[#E99C37] px-2 py-1 rounded">HANDS-ON</span>
                  )}
                  {item.type === 'vip' && (
                    <span className="text-xs bg-[#9A0B25]/20 text-[#FBD64C] px-2 py-1 rounded">VIP</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center">
          <div className="stone-block border-dashed border-[#E99C37]/30 p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E99C37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E99C37]"></span>
              </span>
              <span className="text-[#FBD64C] font-semibold">Agenda detallada próximamente</span>
            </div>

            <p className="text-gray-300 mb-6">
              Estamos confirmando sesiones específicas con operadores de IA de LATAM.
              Regístrate para recibir la agenda completa cuando esté lista.
            </p>

            <button
              onClick={onOpenWaitlist}
              className="btn-stone-primary px-8 py-3 text-white font-semibold transition"
            >
              Recibir agenda cuando salga
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
