'use client'

import { CalendarDaysIcon, MapPinIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

export default function Hero() {

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAgenda = () => {
    document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[124px]">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 geometric-pattern opacity-40"></div>

        {/* Diagonal Orange Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-600/10 to-transparent transform skew-x-12"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-violet-600/20 transform rotate-45 rounded-3xl blur-3xl animate-float"></div>
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
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-600 to-indigo-500 rounded-full opacity-50"></div>
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
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-lg font-bold rounded-lg shadow-lg shadow-indigo-500/30 transform transition hover:scale-105 hover:shadow-indigo-500/50 w-full sm:w-auto"
            >
              Obtener Early Bird - Ahorra 40%
            </button>
            <button
              onClick={scrollToAgenda}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-lg font-semibold rounded-lg border-2 border-white/30 hover:border-indigo-500/50 transform transition hover:scale-105 w-full sm:w-auto"
            >
              Ver Agenda Completa
            </button>
          </div>

          {/* Trust Bar with Icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300 mb-8">
            <div className="flex items-center gap-2 group">
              <AcademicCapIcon className="w-6 h-6 text-indigo-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium">15 Speakers Expertos</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2 group">
              <UserGroupIcon className="w-6 h-6 text-indigo-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium">500+ Asistentes</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2 group">
              <CalendarDaysIcon className="w-6 h-6 text-indigo-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium">Mayo 7-8, 2025</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2 group">
              <MapPinIcon className="w-6 h-6 text-indigo-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium">Lima, Perú</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-indigo-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
