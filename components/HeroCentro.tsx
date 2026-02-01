'use client'

import { useEffect, useState } from 'react'
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline'

interface HeroCentroProps {
  onOpenWaitlist?: () => void
}

export default function HeroCentro({ onOpenWaitlist }: HeroCentroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToHistoria = () => {
    document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[124px]">
      {/* Background with convergence effect - Qhapaq Ñan roads to Cusco */}
      <div className="absolute inset-0 bg-[#0f0a05]">
        {/* Stone grain texture - impressionistic depth */}
        <div className="absolute inset-0 stone-grain-warm"></div>

        {/* Road Network Pattern */}
        <div className="absolute inset-0 qhapaq-network opacity-40"></div>

        {/* Convergence Radial - focus toward center */}
        <div className="absolute inset-0 convergence-radial"></div>

        {/* Convergence Lines - Roads meeting at Peru's position (center-left of continent) */}
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          {/* Lines converging to Peru's geographic position - 35% from left */}
          <line x1="0" y1="0" x2="35%" y2="45%" stroke="#3d2f1e" strokeWidth="1" />
          <line x1="100%" y1="0" x2="35%" y2="45%" stroke="#3d2f1e" strokeWidth="1" />
          <line x1="0" y1="100%" x2="35%" y2="45%" stroke="#3d2f1e" strokeWidth="1" />
          <line x1="100%" y1="100%" x2="35%" y2="45%" stroke="#3d2f1e" strokeWidth="1" />
          <line x1="35%" y1="0" x2="35%" y2="45%" stroke="#3d2f1e" strokeWidth="1" />
          <line x1="0" y1="45%" x2="35%" y2="45%" stroke="#3d2f1e" strokeWidth="1" />
          <line x1="100%" y1="45%" x2="35%" y2="45%" stroke="#3d2f1e" strokeWidth="1" />
          <line x1="35%" y1="100%" x2="35%" y2="45%" stroke="#3d2f1e" strokeWidth="1" />
          {/* Center point - Peru as ombligo del mundo */}
          <circle cx="35%" cy="45%" r="8" fill="none" stroke="#E99C37" strokeWidth="2" opacity="0.3" />
          <circle cx="35%" cy="45%" r="4" fill="#E99C37" opacity="0.7" />
        </svg>

        {/* 4 Suyos - Corner markers for quadrant structure */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#E99C37]/20"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-[#E99C37]/20"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-[#E99C37]/20"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#E99C37]/20"></div>

        {/* Tocapu Pattern - Bottom Left Corner */}
        <div
          className="absolute left-0 bottom-0 w-[300px] md:w-[400px] lg:w-[472px] h-[300px] md:h-[400px] lg:h-[472px] pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage: 'url(/tocapu.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom left',
          }}
        />

        {/* Tocapu Pattern - Bottom Right Corner (Mirrored) */}
        <div
          className="absolute right-0 bottom-0 w-[300px] md:w-[400px] lg:w-[472px] h-[300px] md:h-[400px] lg:h-[472px] pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage: 'url(/tocapu.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
            transform: 'scaleX(-1)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Opening Statement - The Pain */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-[#989795] text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              El 95% de empresas fracasa implementando IA.
              <br />
              Cursos teóricos. Pilotos que mueren. Chatbots sin ROI.
              <br />
              <span className="text-[#E99C37]">El 5% que triunfa tiene algo diferente.</span>
            </p>
          </div>

          {/* Main Brand */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight">
              CENTRO
              <span className="text-brand-gradient">'26</span>
            </h1>
            <p className="text-2xl sm:text-3xl text-[#FBD64C] font-medium mb-2">
              Aprende de operadores, no de teóricos.
            </p>
          </div>

          {/* Tagline - Value Prop */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-xl sm:text-2xl text-[#989795] mb-4 mt-8">
              2 días con líderes que operan IA en producción a escala
            </p>

            {/* Edition Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E99C37]/10 border border-[#E99C37]/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#E99C37] rounded-full animate-pulse"></span>
              <span className="text-[#FBD64C] text-sm font-medium">
                Google Cloud · MercadoLibre · Rappi · +20 operadores
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={onOpenWaitlist}
                className="btn-stone-primary px-8 py-4 text-white text-lg font-bold transform transition hover:scale-105 w-full sm:w-auto"
              >
                Reserva tu lugar
              </button>
              <button
                onClick={scrollToHistoria}
                className="btn-stone px-8 py-4 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white text-lg font-semibold border-2 border-[#FBD64C]/30 transform transition hover:scale-105 w-full sm:w-auto"
              >
                Ver qué aprenderás
              </button>
            </div>
          </div>

          {/* Event Details */}
          <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2 group">
                <CalendarDaysIcon className="w-5 h-5 text-[#FBD64C] group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base font-medium">Mayo 7-8, 2026</span>
              </div>
              <div className="w-px h-5 bg-[#3d2f1e]"></div>
              <div className="flex items-center gap-2 group">
                <MapPinIcon className="w-5 h-5 text-[#FBD64C] group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base font-medium">Lima, Perú</span>
              </div>
              <div className="w-px h-5 bg-[#3d2f1e]"></div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-medium text-[#E99C37]">1000+ asistentes</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToHistoria} className="text-[#E99C37]/70 hover:text-[#E99C37] transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
