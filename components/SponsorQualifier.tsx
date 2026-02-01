'use client'

import { useState, useEffect } from 'react'

interface SponsorQualifierProps {
  isOpen: boolean
  onClose: () => void
}

interface QuestionOption {
  value: string
  label: string
}

interface Question {
  id: string
  question: string
  options: QuestionOption[]
}

const questions: Question[] = [
  {
    id: 'objetivo',
    question: '¿Cuál es tu objetivo principal como sponsor?',
    options: [
      { value: 'brand_awareness', label: 'Brand awareness en LATAM' },
      { value: 'lead_generation', label: 'Generación de leads B2B' },
      { value: 'thought_leadership', label: 'Posicionamiento como líder en IA' },
      { value: 'product_launch', label: 'Lanzamiento de producto/feature' }
    ]
  },
  {
    id: 'empresa_tipo',
    question: '¿Qué tipo de empresa representas?',
    options: [
      { value: 'startup', label: 'Startup / Scale-up' },
      { value: 'enterprise', label: 'Empresa establecida (100+ empleados)' },
      { value: 'tech_vendor', label: 'Vendor de tecnología / Cloud' },
      { value: 'consulting', label: 'Consultora / Agencia' }
    ]
  },
  {
    id: 'equipo',
    question: '¿Cuántas personas de tu equipo asistirían?',
    options: [
      { value: '1_2', label: '1-2 personas' },
      { value: '3_5', label: '3-5 personas' },
      { value: '6_10', label: '6-10 personas' },
      { value: 'more_10', label: 'Más de 10 personas' }
    ]
  },
  {
    id: 'activacion',
    question: '¿Qué tipo de activación te interesa más?',
    options: [
      { value: 'booth', label: 'Booth en expo hall' },
      { value: 'speaking', label: 'Speaking slot en escenario' },
      { value: 'workshop', label: 'Workshop hands-on' },
      { value: 'networking', label: 'Networking privado con C-Suite' }
    ]
  },
  {
    id: 'decision',
    question: '¿Cuándo tomas la decisión de patrocinio?',
    options: [
      { value: 'this_week', label: 'Esta semana' },
      { value: 'this_month', label: 'Este mes' },
      { value: 'next_quarter', label: 'Próximo trimestre' },
      { value: 'exploring', label: 'Solo estoy explorando opciones' }
    ]
  }
]

interface ContactInfo {
  nombre: string
  email: string
  empresa: string
  cargo: string
}

export default function SponsorQualifier({ isOpen, onClose }: SponsorQualifierProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    nombre: '',
    email: '',
    empresa: '',
    cargo: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const handleAnswerSelect = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value })

    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        setShowContactForm(true)
      }
    }, 300)
  }

  const handleBack = () => {
    if (showContactForm) {
      setShowContactForm(false)
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Calculate lead score based on answers
    const leadScore = calculateLeadScore(answers)

    // Simulate API call - replace with actual endpoint
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Sponsor qualification:', {
      answers,
      contactInfo,
      leadScore
    })

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const calculateLeadScore = (answers: Record<string, string>): 'high' | 'medium' | 'low' => {
    let score = 0

    // Company type scoring
    if (answers.empresa_tipo === 'enterprise') score += 3
    else if (answers.empresa_tipo === 'tech_vendor') score += 2
    else if (answers.empresa_tipo === 'consulting') score += 1

    // Timeline scoring
    if (answers.decision === 'this_week') score += 3
    else if (answers.decision === 'this_month') score += 2
    else if (answers.decision === 'next_quarter') score += 1

    // Team size scoring
    if (answers.equipo === 'more_10') score += 2
    else if (answers.equipo === '6_10') score += 1

    if (score >= 5) return 'high'
    if (score >= 3) return 'medium'
    return 'low'
  }

  const handleClose = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowContactForm(false)
    setContactInfo({ nombre: '', email: '', empresa: '', cargo: '' })
    setIsSubmitted(false)
    onClose()
  }

  if (!isOpen) return null

  const progress = showContactForm
    ? 100
    : ((currentStep + 1) / questions.length) * 100

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#1a1208] border border-[#E99C37]/30 rounded-lg shadow-2xl shadow-orange-500/10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Cerrar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          /* Success State */
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#E99C37]/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#E99C37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              ¡Gracias por tu interés!
            </h3>
            <p className="text-gray-300 mb-6">
              Nuestro equipo de partnerships se pondrá en contacto contigo en las próximas 24-48 horas.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 bg-gradient-to-r from-[#E99C37] to-[#D4A83D] text-white font-semibold rounded-lg hover:from-[#C47F2A] hover:to-[#E99C37] transition-all"
            >
              Entendido
            </button>
          </div>
        ) : (
          <div className="p-8">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Conviértete en Sponsor
              </h3>
              <p className="text-gray-400 text-sm">
                Cuéntanos sobre tus objetivos para crear una propuesta personalizada.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>
                  {showContactForm
                    ? 'Información de contacto'
                    : `Pregunta ${currentStep + 1} de ${questions.length}`
                  }
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-[#0f0a05] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#E99C37] to-[#FBD64C] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {showContactForm ? (
              /* Contact Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-white font-medium mb-4">
                  Último paso: ¿Cómo podemos contactarte?
                </p>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo <span className="text-[#E99C37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo.nombre}
                    onChange={(e) => setContactInfo({ ...contactInfo, nombre: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0f0a05] border border-[#3d2f1e] rounded-lg text-white placeholder-gray-500 focus:border-[#E99C37] focus:outline-none focus:ring-1 focus:ring-[#E99C37]/50 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Correo corporativo <span className="text-[#E99C37]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0f0a05] border border-[#3d2f1e] rounded-lg text-white placeholder-gray-500 focus:border-[#E99C37] focus:outline-none focus:ring-1 focus:ring-[#E99C37]/50 transition-colors"
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Empresa <span className="text-[#E99C37]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo.empresa}
                      onChange={(e) => setContactInfo({ ...contactInfo, empresa: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0f0a05] border border-[#3d2f1e] rounded-lg text-white placeholder-gray-500 focus:border-[#E99C37] focus:outline-none focus:ring-1 focus:ring-[#E99C37]/50 transition-colors"
                      placeholder="Tu empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Cargo <span className="text-[#E99C37]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo.cargo}
                      onChange={(e) => setContactInfo({ ...contactInfo, cargo: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0f0a05] border border-[#3d2f1e] rounded-lg text-white placeholder-gray-500 focus:border-[#E99C37] focus:outline-none focus:ring-1 focus:ring-[#E99C37]/50 transition-colors"
                      placeholder="Tu cargo"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 py-3 px-6 border border-[#E99C37]/50 text-[#E99C37] font-semibold rounded-lg hover:bg-[#E99C37]/10 transition-all"
                  >
                    Atrás
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-[#E99C37] to-[#D4A83D] hover:from-[#C47F2A] hover:to-[#E99C37] text-white font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      'Enviar solicitud'
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Question Display */
              <div>
                <h4 className="text-xl text-white font-medium mb-6">
                  {questions[currentStep].question}
                </h4>

                <div className="space-y-3">
                  {questions[currentStep].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswerSelect(questions[currentStep].id, option.value)}
                      className={`w-full p-4 text-left border rounded-lg transition-all duration-200 ${
                        answers[questions[currentStep].id] === option.value
                          ? 'border-[#E99C37] bg-[#E99C37]/10 text-white'
                          : 'border-[#3d2f1e] bg-[#0f0a05] text-gray-300 hover:border-[#E99C37]/50 hover:bg-[#E99C37]/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          answers[questions[currentStep].id] === option.value
                            ? 'border-[#E99C37] bg-[#E99C37]'
                            : 'border-gray-500'
                        }`}>
                          {answers[questions[currentStep].id] === option.value && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span>{option.label}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Navigation */}
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="mt-6 text-[#E99C37] hover:text-[#FBD64C] font-medium transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Pregunta anterior
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
