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
      {/* Andean Background - Qhapaq Ñan road network */}
      <div className="absolute inset-0 bg-[#0f0a05]">
        {/* Road Network Grid Pattern */}
        <div className="absolute inset-0 convergence-pattern opacity-40"></div>

        {/* Qhapaq Ñan horizontal lines */}
        <div className="absolute inset-0 qhapaq-lines opacity-30"></div>

        {/* 4 Suyos - Corner markers */}
        <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#E99C37]/15"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-[#E99C37]/15"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-[#E99C37]/15"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#E99C37]/15"></div>
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
              {/* Stone-style underline accent */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#E99C37] opacity-70" style={{ borderRadius: '2px' }}></div>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-[#989795] mb-8 max-w-3xl mx-auto leading-relaxed">
            2 días de estrategias accionables de IA, speakers de clase mundial,
            y networking de alto impacto con la comunidad de innovación de Perú
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToPricing}
              className="btn-stone-primary px-8 py-4 text-white text-lg font-bold transform transition hover:scale-105 w-full sm:w-auto"
            >
              Obtener Early Bird - Ahorra 40%
            </button>
            <button
              onClick={scrollToAgenda}
              className="btn-stone px-8 py-4 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white text-lg font-semibold border-2 border-[#FBD64C]/30 transform transition hover:scale-105 w-full sm:w-auto"
            >
              Ver Agenda Completa
            </button>
          </div>

          {/* Trust Bar with Icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300 mb-8">
            <div className="flex items-center gap-2 group">
              <AcademicCapIcon className="w-6 h-6 text-[#FBD64C] group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium">15 Speakers Expertos</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-[#3d2f1e]"></div>
            <div className="flex items-center gap-2 group">
              <UserGroupIcon className="w-6 h-6 text-[#FBD64C] group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium">500+ Asistentes</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-[#3d2f1e]"></div>
            <div className="flex items-center gap-2 group">
              <CalendarDaysIcon className="w-6 h-6 text-[#FBD64C] group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium">Mayo 7-8, 2025</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-[#3d2f1e]"></div>
            <div className="flex items-center gap-2 group">
              <MapPinIcon className="w-6 h-6 text-[#FBD64C] group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium">Lima, Perú</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#E99C37]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
