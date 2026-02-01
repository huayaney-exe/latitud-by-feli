'use client'

import { useEffect, useRef, useState } from 'react'

const timelineData = [
  {
    year: '3000 AC',
    title: 'Caral',
    description: 'Primera civilización de América. Mientras el resto del continente era tribal, Perú ya construía ciudades.',
    highlight: 'Primera ciudad de América',
  },
  {
    year: '1400 DC',
    title: 'Imperio Inca',
    description: 'Cusco: el ombligo del mundo. 30,000 km de caminos conectando un continente. Todo fluía hacia el centro.',
    highlight: 'Más grande que Roma',
  },
  {
    year: '1542 DC',
    title: 'Virreinato',
    description: 'Lima: capital de Sudamérica. Todo el continente reportaba aquí. El centro del poder, comercio y conocimiento.',
    highlight: 'Capital continental',
  },
  {
    year: '2026',
    title: 'CENTRO',
    description: 'El centro despierta. El mundo vuelve a converger en Perú. Esta vez, para transformar la región.',
    highlight: 'El comeback',
    isCurrent: true,
  },
]

export default function HistoriaSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    const items = sectionRef.current?.querySelectorAll('[data-index]')
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="historia" ref={sectionRef} className="relative py-24 bg-[#0f0a05] overflow-hidden">
      {/* Background Pattern - Qhapaq Ñan lines */}
      <div className="absolute inset-0 qhapaq-lines opacity-25"></div>
      <div className="absolute inset-0 pattern-tocapu opacity-15"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#E99C37] text-sm font-medium uppercase tracking-wider mb-3">
            ¿Por qué Lima y no Miami?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Porque LATAM merece su <span className="text-brand-gradient">propio centro</span>.
          </h2>
          <p className="text-[#989795] text-lg max-w-2xl mx-auto">
            No más viajar al norte para acceder a conocimiento de clase mundial.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line - Solid junction line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[#3d2f1e] hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-0">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                data-index={index}
                className={`relative md:flex md:items-center md:justify-between transition-all duration-700 ${
                  visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div
                    className={`p-6 border transition-all duration-300 hover:scale-[1.02] ${
                      item.isCurrent
                        ? 'stone-block-primary border-[#E99C37]/50'
                        : 'stone-block hover:border-[#E99C37]/30'
                    }`}
                  >
                    {/* Year Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${
                      item.isCurrent
                        ? 'bg-[#E99C37] text-white'
                        : 'bg-[#3d2f1e] text-[#FBD64C]'
                    }`}>
                      {item.year}
                    </div>

                    <h3 className={`text-2xl font-bold mb-2 ${item.isCurrent ? 'text-[#E99C37]' : 'text-white'}`}>
                      {item.title}
                    </h3>

                    <p className="text-[#989795] mb-3">
                      {item.description}
                    </p>

                    <span className={`text-sm font-medium ${item.isCurrent ? 'text-[#FBD64C]' : 'text-[#E99C37]'}`}>
                      {item.highlight}
                    </span>
                  </div>
                </div>

                {/* Timeline Point (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    item.isCurrent
                      ? 'bg-[#E99C37] border-[#FBD64C] animate-pulse'
                      : 'bg-[#1a1208] border-[#E99C37]'
                  }`}></div>
                </div>

                {/* Spacer for layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-20 max-w-3xl mx-auto">
          <p className="text-xl sm:text-2xl text-white leading-relaxed mb-6">
            El conocimiento ya no tiene que venir filtrado.
            <br />
            <span className="text-[#E99C37] font-semibold">Directo de los que lo hacen, para los que lo van a hacer.</span>
          </p>
          <p className="text-[#989795]">
            Speakers de Google, MercadoLibre, Rappi y +15 empresas. En tu zona horaria. En tu idioma. En tu contexto.
          </p>
        </div>
      </div>
    </section>
  )
}
