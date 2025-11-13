'use client'

import { useState } from 'react'
import Image from 'next/image'

const speakers = [
  {
    name: 'Dr. María Rodríguez',
    title: 'Chief AI Officer',
    company: 'BCP',
    country: 'Perú',
    countryFlag: '🇵🇪',
    bio: 'Líder en implementación de IA en servicios financieros con más de 15 años de experiencia. Ha liderado la transformación digital de múltiples instituciones financieras en LATAM.',
    topic: 'IA en Fintech: El Futuro de las Finanzas en Perú',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces'
  },
  {
    name: 'Carlos Mendoza',
    title: 'Founder & CEO',
    company: 'PeruTech Ventures',
    country: 'Perú',
    countryFlag: '🇵🇪',
    bio: 'Emprendedor serial y líder en el ecosistema de startups peruano. Ha fundado 3 empresas de tecnología exitosas y es mentor de más de 50 startups.',
    topic: 'Escalando Startups de IA en Mercados Emergentes',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces'
  },
  {
    name: 'Dra. Ana Gutiérrez',
    title: 'Research Lead AI Ethics',
    company: 'Universidad UTEC',
    country: 'Perú',
    countryFlag: '🇵🇪',
    bio: 'Investigadora de ética en IA y profesora en UTEC. Autora de múltiples publicaciones sobre el impacto social de la inteligencia artificial.',
    topic: 'IA Ética: Construyendo Confianza con Clientes',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces'
  },
  {
    name: 'Roberto Silva',
    title: 'VP of Engineering',
    company: 'Rappi',
    country: 'Colombia',
    countryFlag: '🇨🇴',
    bio: 'Experto en IA aplicada a logística y optimización. Ha liderado equipos que procesan millones de transacciones diarias usando machine learning.',
    topic: 'IA en Logística: Optimización a Gran Escala',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces'
  },
  {
    name: 'Dra. Patricia Gómez',
    title: 'Data Science Director',
    company: 'MercadoLibre',
    country: 'Argentina',
    countryFlag: '🇦🇷',
    bio: 'Científica de datos con experiencia en e-commerce y recomendación personalizada. Ha desarrollado sistemas de IA que impactan a millones de usuarios.',
    topic: 'Personalización con IA: De Datos a Experiencias',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=faces'
  },
  {
    name: 'Miguel Torres',
    title: 'CTO',
    company: 'Yape',
    country: 'Perú',
    countryFlag: '🇵🇪',
    bio: 'Líder técnico detrás de una de las aplicaciones fintech más exitosas de Perú. Experto en arquitecturas escalables y detección de fraude con IA.',
    topic: 'Detección de Fraude con Machine Learning',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces'
  },
  {
    name: 'Laura Martínez',
    title: 'AI Product Manager',
    company: 'Google Cloud',
    country: 'USA',
    countryFlag: '🇺🇸',
    bio: 'Product manager con experiencia en llevar productos de IA al mercado. Ha trabajado con empresas de todo el mundo en sus transformaciones de IA.',
    topic: 'De Prototipo a Producción: IA en Empresas',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces'
  },
  {
    name: 'Diego Ramírez',
    title: 'Founder',
    company: 'AI Startup Lab',
    country: 'Perú',
    countryFlag: '🇵🇪',
    bio: 'Emprendedor e inversionista enfocado en startups de IA. Ha ayudado a más de 30 startups a escalar sus soluciones de inteligencia artificial.',
    topic: 'Invirtiendo en IA: Qué Buscan los VCs',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces'
  }
]

export default function SpeakerShowcase() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<number | null>(null)

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">
            Aprende de los Pioneros de IA en Perú y LATAM
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce a los expertos que están liderando la revolución de IA en América Latina
          </p>
          <div className="mt-4 inline-block bg-gradient-to-r from-orange-600/20 to-amber-600/20 backdrop-blur-sm border border-orange-500/30 rounded-lg px-6 py-2">
            <p className="text-orange-300 font-medium">
              60% Speakers Peruanos | 30% LATAM | 10% Internacional
            </p>
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer border border-slate-700 hover:border-orange-500/50"
              onClick={() => setSelectedSpeaker(index)}
            >
              {/* Speaker Image */}
              <div className="relative w-full aspect-square">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <span className="text-xs">{speaker.countryFlag}</span>
                  <span className="text-xs text-gray-300 font-medium">{speaker.country}</span>
                </div>
              </div>

              {/* Speaker Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 font-display">{speaker.name}</h3>
                <p className="text-orange-400 text-sm font-semibold mb-1">{speaker.title}</p>
                <p className="text-gray-400 text-sm mb-4">{speaker.company}</p>

                {/* Topic */}
                <div className="bg-gradient-to-r from-orange-600/10 to-amber-600/10 border border-orange-500/20 rounded-lg p-3 mt-4">
                  <p className="text-xs text-gray-400 mb-1">Sesión:</p>
                  <p className="text-sm text-white font-medium">{speaker.topic}</p>
                </div>

                {/* View Bio Button */}
                <button className="w-full mt-4 py-2 bg-gradient-to-r from-orange-600/30 to-amber-600/30 hover:from-orange-600/50 hover:to-amber-600/50 border border-orange-500/30 text-orange-300 rounded-lg text-sm font-semibold transition">
                  Ver Biografía Completa
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Speaker Modal */}
        {selectedSpeaker !== null && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSpeaker(null)}
          >
            <div
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-orange-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative w-full aspect-[2/1]">
                <Image
                  src={speakers[selectedSpeaker].image}
                  alt={speakers[selectedSpeaker].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-gray-300 hover:text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl transition border border-white/20"
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 -mt-16 relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2 font-display">{speakers[selectedSpeaker].name}</h3>
                    <p className="text-orange-400 text-lg font-semibold mb-1">{speakers[selectedSpeaker].title}</p>
                    <p className="text-gray-300 mb-2">{speakers[selectedSpeaker].company}</p>
                    <div className="inline-flex items-center gap-1 bg-slate-800 rounded-full px-3 py-1">
                      <span className="text-sm">{speakers[selectedSpeaker].countryFlag}</span>
                      <span className="text-sm text-gray-300">{speakers[selectedSpeaker].country}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-600/20 to-amber-600/20 border border-orange-500/30 rounded-lg p-4 mb-6">
                  <p className="text-sm text-orange-300 mb-2 font-medium">Sesión:</p>
                  <p className="text-xl text-white font-semibold">{speakers[selectedSpeaker].topic}</p>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg">{speakers[selectedSpeaker].bio}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">¿Quieres ser parte del panel de speakers?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/20 transition">
            Postula como Speaker
          </button>
        </div>
      </div>
    </section>
  )
}
