'use client'

import { useState, useEffect } from 'react'
import { CalendarDaysIcon, MapPinIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 23,
    seconds: 45
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAgenda = () => {
    document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 geometric-pattern opacity-40"></div>

        {/* Diagonal Orange Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-600/10 to-transparent transform skew-x-12"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-amber-600/20 transform rotate-45 rounded-3xl blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-900/30 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Únete a 500+ Líderes LATAM
            <br />
            <span className="text-brand-gradient relative inline-block">
              Construyendo el Futuro de la IA en Perú
              {/* Custom underline accent */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-600 to-orange-500 rounded-full opacity-50"></div>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            2 días de estrategias accionables de IA, speakers de clase mundial,
            y networking de alto impacto con la comunidad de innovación de Perú
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToPricing}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-lg font-bold rounded-lg shadow-lg shadow-orange-500/30 transform transition hover:scale-105 hover:shadow-orange-500/50 w-full sm:w-auto"
            >
              Obtener Early Bird - Ahorra 40%
            </button>
            <button
              onClick={scrollToAgenda}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-lg font-semibold rounded-lg border-2 border-white/30 hover:border-orange-500/50 transform transition hover:scale-105 w-full sm:w-auto"
            >
              Ver Agenda Completa
            </button>
          </div>

          {/* Trust Bar with Icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300 mb-8">
            <div className="flex items-center gap-2 group">
              <AcademicCapIcon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium">15 Speakers Expertos</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2 group">
              <UserGroupIcon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium">500+ Asistentes</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2 group">
              <CalendarDaysIcon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium">Mayo 7-8, 2025</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2 group">
              <MapPinIcon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium">Lima, Perú</span>
            </div>
          </div>

          {/* Urgency Element with Orange Accent */}
          <div className="inline-block bg-gradient-to-r from-orange-900/40 to-red-900/40 backdrop-blur-sm border-2 border-orange-500/50 rounded-xl px-6 py-4 shadow-lg shadow-orange-500/20">
            <p className="text-orange-300 text-sm font-semibold mb-2 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Early Bird termina en:
            </p>
            <div className="flex gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-black text-white font-display">{timeLeft.days}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">días</div>
              </div>
              <div className="text-3xl text-orange-500 font-bold">:</div>
              <div className="text-center">
                <div className="text-3xl font-black text-white font-display">{timeLeft.hours}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">horas</div>
              </div>
              <div className="text-3xl text-orange-500 font-bold">:</div>
              <div className="text-center">
                <div className="text-3xl font-black text-white font-display">{timeLeft.minutes}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">min</div>
              </div>
              <div className="text-3xl text-orange-500 font-bold">:</div>
              <div className="text-center">
                <div className="text-3xl font-black text-white font-display">{timeLeft.seconds}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">seg</div>
              </div>
            </div>
            <p className="text-orange-200 text-sm mt-3 font-medium">Solo quedan 12 tickets a este precio</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-orange-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
