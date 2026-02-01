'use client'

import { useState } from 'react'

const faqs = [
  {
    question: '¿Este evento es solo para empresas grandes o también para startups y PYMEs?',
    answer: 'CENTRO está diseñado para empresas de todos los tamaños. Tenemos contenido relevante tanto para startups que inician su journey de IA como para empresas establecidas que buscan escalar sus implementaciones. La diversidad de tamaños de empresa enriquece el networking y las perspectivas compartidas.'
  },
  {
    question: '¿Las sesiones serán en español o inglés?',
    answer: 'El idioma principal es español. Para speakers internacionales, ofrecemos traducción simultánea al español. Todos los materiales del evento están disponibles en español e inglés. El 90% del contenido será en español para máxima accesibilidad.'
  },
  {
    question: '¿Cuál es su política de reembolsos?',
    answer: 'Ofrecemos 100% de reembolso hasta 30 días antes del evento, 50% de reembolso entre 15-30 días antes, y sin reembolso dentro de los 14 días previos. Sin embargo, los tickets son completamente transferibles en cualquier momento, por lo que puedes enviar a un colega de tu empresa si no puedes asistir.'
  },
  {
    question: '¿Puedo asistir virtualmente o solo es presencial?',
    answer: 'CENTRO es exclusivamente presencial para maximizar el valor del networking y las conexiones cara a cara. Sin embargo, todos los asistentes reciben acceso a las grabaciones de las sesiones principales durante 60 días después del evento, para que puedas revisar el contenido.'
  },
  {
    question: '¿Qué está incluido en el precio del ticket?',
    answer: 'Tu ticket incluye: acceso completo a todas las sesiones y workshops, materiales digitales del evento, desayunos y almuerzos ambos días, coffee breaks, certificado digital de asistencia, acceso a grabaciones post-evento, y acceso al grupo exclusivo de WhatsApp de la comunidad CENTRO. Los tickets Early Bird y Super Early Bird incluyen beneficios adicionales de networking.'
  },
  {
    question: '¿Necesito conocimientos técnicos avanzados para aprovechar el evento?',
    answer: 'No necesitas ser experto técnico. CENTRO está diseñado para líderes de negocio, gerentes, emprendedores y profesionales técnicos por igual. El contenido abarca desde fundamentos estratégicos hasta implementación técnica, con tracks adaptados a diferentes perfiles. El enfoque es práctico: cómo implementar IA que genere resultados reales.'
  },
  {
    question: '¿Ofrecen descuentos para equipos o grupos?',
    answer: 'Sí, ofrecemos descuentos grupales para 3+ personas de la misma empresa. Contacta a nuestro equipo en hello@ghcapital.lat para obtener un código de descuento personalizado. Recomendamos traer a tu equipo completo para maximizar la implementación post-evento.'
  },
  {
    question: '¿Dónde se realiza el evento y cómo llego?',
    answer: 'El evento se realiza en Lima, Perú (ubicación exacta será anunciada próximamente). Estamos en negociaciones con hoteles cercanos para ofrecer tarifas preferenciales a los asistentes. El venue cuenta con estacionamiento y es accesible por transporte público. Compartiremos un paquete completo de logística con todos los asistentes registrados.'
  },
  {
    question: '¿Qué medidas de seguridad y salud tienen implementadas?',
    answer: 'El venue cumple con todos los protocolos de seguridad y salud vigentes. Contaremos con personal de seguridad, botiquín de primeros auxilios, y seguros de evento. Toda la información de seguridad será compartida con los asistentes antes del evento.'
  },
  {
    question: '¿Entregarán certificado de asistencia?',
    answer: 'Sí, todos los asistentes reciben un certificado digital de asistencia al finalizar el evento, que incluye las horas de capacitación y los temas cubiertos. Este certificado es válido para presentar en tu empresa como desarrollo profesional continuo.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-[#0f0a05]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-300">
              Encuentra respuestas a las preguntas más comunes sobre CENTRO
            </p>
          </div>

          {/* FAQ Accordion - Fitted Stack */}
          <div className="fitted-stack">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`stone-block overflow-hidden transition-colors ${
                  openIndex === index ? 'border-[#E99C37]/50' : ''
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left transition"
                >
                  <h3 className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-[#FBD64C] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed animate-fade-in border-t border-[#3d2f1e]/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Tienes otra pregunta?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@ghcapital.lat"
                className="btn-stone-primary px-8 py-3 text-white font-semibold inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Envianos un Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
