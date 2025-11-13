'use client'

import { useState, useEffect } from 'react'
import { UserGroupIcon, MicrophoneIcon, CalendarIcon, BuildingOfficeIcon, ShieldCheckIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const stats = [
  { number: '500+', label: 'Asistentes Esperados', Icon: UserGroupIcon },
  { number: '15', label: 'Speakers Confirmados', Icon: MicrophoneIcon },
  { number: '2', label: 'Días Intensivos', Icon: CalendarIcon },
  { number: '50+', label: 'Empresas Representadas', Icon: BuildingOfficeIcon }
]

const recentRegistrations = [
  { name: 'Carlos', city: 'Lima', time: '2 mins ago' },
  { name: 'Ana', city: 'Arequipa', time: '8 mins ago' },
  { name: 'Miguel', city: 'Lima', time: '15 mins ago' },
  { name: 'Sofía', city: 'Cusco', time: '23 mins ago' }
]

export default function SocialProof() {
  const [currentReg, setCurrentReg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReg(prev => (prev + 1) % recentRegistrations.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 relative">
      {/* Diagonal Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-950 to-transparent transform -skew-y-2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.Icon
            return (
              <div key={index} className="text-center group transform transition hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-600/20 border border-orange-500/30 group-hover:border-orange-500/60 transition-all">
                  <Icon className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Live Activity Feed */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/30 rounded-xl px-6 py-4 text-center transition-all duration-500 shadow-lg shadow-green-500/10">
            <p className="text-green-300 flex items-center justify-center gap-2 text-sm sm:text-base">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-semibold">
                {recentRegistrations[currentReg].name}
              </span>
              <span className="text-gray-300">de</span>
              <span className="font-semibold">
                {recentRegistrations[currentReg].city}
              </span>
              <span className="text-gray-300">se registró hace</span>
              <span className="font-semibold">
                {recentRegistrations[currentReg].time}
              </span>
            </p>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4 font-medium">
            85% de tickets vendidos • 23 tickets vendidos en las últimas 48 horas
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
          <div className="flex items-center gap-2 text-gray-400 group">
            <ShieldCheckIcon className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Pago Seguro con Stripe</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 group">
            <svg className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Reembolso 100% hasta 30 días antes</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 group">
            <AcademicCapIcon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Certificado de Asistencia Incluido</span>
          </div>
        </div>
      </div>

      {/* Bottom Diagonal Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent transform skew-y-2"></div>
    </section>
  )
}
