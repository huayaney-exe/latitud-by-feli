'use client'

import { useEffect, useRef, useState } from 'react'
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline'

const failurePoints = [
  'Mentalidad "chatbot primero" sin transformación real',
  'Herramientas sin framework de ROI',
  'Cursos teóricos sin exposición a sistemas reales',
  'Cámaras de eco locales sin perspectiva global',
]

const successPoints = [
  'Acceso directo a operadores, no a vendedores de cursos',
  'Frameworks de ROI probados en empresas reales',
  'Casos de implementación con números concretos',
  'Red de profesionales que ya ejecutan a escala',
]

export default function BrechaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#0f0a05] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-tocapu opacity-10"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            La brecha del <span className="text-[#E99C37]">5%</span>
          </h2>
          <p className="text-[#989795] text-lg max-w-2xl mx-auto">
            Por qué la mayoría fracasa con IA — y qué hacen diferente los que triunfan.
          </p>
        </div>

        {/* Two Columns - Stone Blocks Connected */}
        <div className="tocapu-grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">

          {/* The 95% - Failure Stone */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="h-full p-8 bg-[#1a1208] border-l-4 border-red-900/60" style={{ borderRadius: '3px' }}>
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-black text-red-500/80">95%</div>
                <div>
                  <div className="text-white font-bold text-lg">que fracasa</div>
                  <div className="text-[#989795] text-sm">Inversiones millonarias, impacto mínimo</div>
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-4">
                {failurePoints.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <XMarkIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[#989795]">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Result */}
              <div className="mt-6 pt-6 border-t border-red-900/30">
                <p className="text-red-400 text-sm italic">
                  "Chatbots genéricos, pilotos que mueren, herramientas sin estrategia."
                </p>
              </div>
            </div>
          </div>

          {/* The 5% - Success Stone */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="h-full p-8 bg-[#1a1208] border-l-4 border-[#E99C37]" style={{ borderRadius: '3px' }}>
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-black text-[#E99C37]">5%</div>
                <div>
                  <div className="text-white font-bold text-lg">que transforma</div>
                  <div className="text-[#989795] text-sm">Sistemas operacionales con ROI real</div>
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-4">
                {successPoints.map((point, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <CheckIcon className="w-5 h-5 text-[#E99C37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Result */}
              <div className="mt-6 pt-6 border-t border-[#E99C37]/30">
                <p className="text-[#FBD64C] text-sm italic">
                  "Implementé lo que aprendí en 3 semanas. Mi primer proyecto de IA ya está en producción."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bridge Statement - Value Delivery */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-white mb-6">
              En 2 días, obtienes lo que tomaría <span className="text-[#E99C37] font-bold">meses de prueba y error</span>.
            </p>

            {/* Stats as Tocapu Grid */}
            <div className="tocapu-grid grid-cols-3 mb-8 max-w-lg mx-auto">
              <div className="p-4 text-center bg-[#1a1208]">
                <div className="text-3xl font-bold text-[#E99C37]">+20</div>
                <div className="text-[#989795] text-sm">Operadores en escenario</div>
              </div>
              <div className="p-4 text-center bg-[#1a1208]">
                <div className="text-3xl font-bold text-[#E99C37]">0</div>
                <div className="text-[#989795] text-sm">Vendedores de humo</div>
              </div>
              <div className="p-4 text-center bg-[#1a1208]">
                <div className="text-3xl font-bold text-[#E99C37]">100%</div>
                <div className="text-[#989795] text-sm">Casos reales con ROI</div>
              </div>
            </div>

            <button
              onClick={scrollToPricing}
              className="btn-stone-primary px-8 py-4 text-white text-lg font-bold transform transition hover:scale-105"
            >
              Ver precios y agenda
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
