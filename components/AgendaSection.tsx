'use client'

import { useState } from 'react'

const agendaData = {
  day1: [
    { time: '09:00-09:30', title: 'Registro y Desayuno de Bienvenida', track: 'General', speaker: '' },
    { time: '09:30-10:30', title: 'Keynote: El Futuro de la IA en Perú', track: 'Main Stage', speaker: 'Dr. María Rodríguez' },
    { time: '10:30-11:00', title: 'Networking Break ☕', track: 'General', speaker: '' },
    { time: '11:00-12:00', title: 'IA en Fintech: Casos de Éxito Peruanos', track: 'Fintech', speaker: 'Carlos Mendoza' },
    { time: '11:00-12:00', title: 'Implementando IA en Sistemas Legacy', track: 'Technical', speaker: 'Roberto Silva' },
    { time: '11:00-12:00', title: 'IA Ética y Responsable', track: 'Ethics', speaker: 'Dra. Ana Gutiérrez' },
    { time: '12:00-13:00', title: 'Panel: Transformación Digital con IA', track: 'Main Stage', speaker: 'Panel de Expertos' },
    { time: '13:00-14:30', title: 'Almuerzo y Networking 🍽️', track: 'General', speaker: '' },
    { time: '14:30-15:30', title: 'Workshop: IA Generativa para Negocios', track: 'Workshop A', speaker: 'Laura Martínez' },
    { time: '14:30-15:30', title: 'Detección de Fraude con ML', track: 'Workshop B', speaker: 'Miguel Torres' },
    { time: '15:30-16:00', title: 'Break ☕', track: 'General', speaker: '' },
    { time: '16:00-17:00', title: 'Escalando Startups de IA', track: 'Startup', speaker: 'Diego Ramírez' },
    { time: '17:00-18:00', title: 'Sesiones de Networking Estructurado', track: 'General', speaker: '' },
    { time: '19:00-22:00', title: 'Cena VIP de Networking 🌟', track: 'VIP Only', speaker: '' }
  ],
  day2: [
    { time: '09:00-09:30', title: 'Desayuno y Registro', track: 'General', speaker: '' },
    { time: '09:30-10:30', title: 'Keynote: IA en Logística y Optimización', track: 'Main Stage', speaker: 'Roberto Silva' },
    { time: '10:30-11:00', title: 'Networking Break ☕', track: 'General', speaker: '' },
    { time: '11:00-12:00', title: 'Personalización con IA: De Datos a Experiencias', track: 'E-commerce', speaker: 'Dra. Patricia Gómez' },
    { time: '11:00-12:00', title: 'De Prototipo a Producción', track: 'Technical', speaker: 'Laura Martínez' },
    { time: '11:00-12:00', title: 'IA y ROI: Midiendo Impacto Real', track: 'Business', speaker: 'Carlos Mendoza' },
    { time: '12:00-13:00', title: 'Panel: Invirtiendo en IA en LATAM', track: 'Main Stage', speaker: 'Panel VCs y Founders' },
    { time: '13:00-14:30', title: 'Almuerzo y Networking 🍽️', track: 'General', speaker: '' },
    { time: '14:30-15:30', title: 'Workshop: Prompt Engineering Avanzado', track: 'Workshop A', speaker: 'Laura Martínez' },
    { time: '14:30-15:30', title: 'Construyendo Equipos de IA', track: 'Workshop B', speaker: 'Miguel Torres' },
    { time: '15:30-16:00', title: 'Break ☕', track: 'General', speaker: '' },
    { time: '16:00-17:00', title: 'Casos de Éxito: IA que Genera Resultados', track: 'Main Stage', speaker: 'Panel de CTOs' },
    { time: '17:00-17:30', title: 'Keynote de Cierre: El Camino a Seguir', track: 'Main Stage', speaker: 'Dr. María Rodríguez' },
    { time: '17:30-18:00', title: 'Sorteos y Despedida 🎁', track: 'General', speaker: '' }
  ]
}

const tracks = [
  { name: 'Main Stage', color: 'bg-orange-600', textColor: 'text-orange-300' },
  { name: 'Fintech', color: 'bg-amber-600', textColor: 'text-amber-300' },
  { name: 'Technical', color: 'bg-blue-600', textColor: 'text-blue-300' },
  { name: 'Workshop A', color: 'bg-green-600', textColor: 'text-green-300' },
  { name: 'Workshop B', color: 'bg-yellow-600', textColor: 'text-yellow-300' },
  { name: 'Startup', color: 'bg-orange-500', textColor: 'text-orange-300' },
  { name: 'Ethics', color: 'bg-indigo-600', textColor: 'text-indigo-300' },
  { name: 'General', color: 'bg-gray-600', textColor: 'text-gray-400' }
]

export default function AgendaSection() {
  const [activeTab, setActiveTab] = useState<'day1' | 'day2'>('day1')

  const getTrackColor = (trackName: string) => {
    const track = tracks.find(t => t.name === trackName)
    return track || tracks[tracks.length - 1]
  }

  const currentAgenda = activeTab === 'day1' ? agendaData.day1 : agendaData.day2

  return (
    <section id="agenda" className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Agenda Completa del Evento
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            2 días intensivos de contenido accionable, workshops prácticos y networking estratégico
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center mb-8 gap-4">
          <button
            onClick={() => setActiveTab('day1')}
            className={`px-8 py-3 rounded-lg font-semibold transition ${
              activeTab === 'day1'
                ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white'
                : 'bg-white/10 text-gray-400 hover:bg-white/20'
            }`}
          >
            Día 1 - Mayo 7
          </button>
          <button
            onClick={() => setActiveTab('day2')}
            className={`px-8 py-3 rounded-lg font-semibold transition ${
              activeTab === 'day2'
                ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white'
                : 'bg-white/10 text-gray-400 hover:bg-white/20'
            }`}
          >
            Día 2 - Mayo 8
          </button>
        </div>

        {/* Track Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tracks.filter(t => t.name !== 'General').map((track, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded ${track.color}`}></div>
              <span className="text-sm text-gray-400">{track.name}</span>
            </div>
          ))}
        </div>

        {/* Agenda Timeline */}
        <div className="max-w-5xl mx-auto">
          {currentAgenda.map((item, index) => {
            const trackColor = getTrackColor(item.track)
            const isBreak = item.track === 'General' && (item.title.includes('Break') || item.title.includes('Registro') || item.title.includes('Networking') || item.title.includes('Almuerzo'))

            return (
              <div
                key={index}
                className={`flex gap-4 mb-4 ${isBreak ? 'opacity-70' : ''}`}
              >
                {/* Time */}
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-cyan-400 font-semibold">{item.time}</span>
                </div>

                {/* Session Card */}
                <div className="flex-grow">
                  <div className={`bg-gradient-to-r ${isBreak ? 'from-slate-800 to-slate-900' : 'from-slate-800 to-slate-900'} border-l-4 ${trackColor.color} rounded-lg p-4 hover:shadow-lg hover:shadow-purple-500/10 transition`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="flex-grow">
                        <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                        {item.speaker && (
                          <p className="text-sm text-gray-400">🎤 {item.speaker}</p>
                        )}
                      </div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${trackColor.color} ${trackColor.textColor}`}>
                        {item.track}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Download CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition">
            📥 Descargar Agenda Completa (PDF)
          </button>
        </div>
      </div>
    </section>
  )
}
