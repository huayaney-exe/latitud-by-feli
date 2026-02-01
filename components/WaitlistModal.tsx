'use client'

import { useState, useEffect } from 'react'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  nombre: string
  apellido: string
  email: string
  telefono: string
  empresa: string
  cargo: string
  pais: string
  comoTeEnteraste: string
}

const paises = [
  'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Costa Rica',
  'Ecuador', 'El Salvador', 'Guatemala', 'Honduras', 'México', 'Nicaragua',
  'Panamá', 'Paraguay', 'Perú', 'República Dominicana', 'Uruguay', 'Venezuela',
  'Estados Unidos', 'España', 'Otro'
]

const fuentes = [
  'LinkedIn', 'Twitter/X', 'Referido por colega', 'Newsletter',
  'Evento anterior', 'Búsqueda Google', 'Otro'
]

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    empresa: '',
    cargo: '',
    pais: '',
    comoTeEnteraste: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [emailError, setEmailError] = useState('')

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

  const validateCorporateEmail = (email: string): boolean => {
    const personalDomains = [
      'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com',
      'live.com', 'icloud.com', 'me.com', 'mail.com', 'protonmail.com'
    ]
    const domain = email.split('@')[1]?.toLowerCase()
    return Boolean(domain && !personalDomains.includes(domain))
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setFormData({ ...formData, email })

    if (email && email.includes('@')) {
      if (!validateCorporateEmail(email)) {
        setEmailError('Por favor usa tu correo corporativo')
      } else {
        setEmailError('')
      }
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateCorporateEmail(formData.email)) {
      setEmailError('Por favor usa tu correo corporativo')
      return
    }

    setIsSubmitting(true)

    // Simulate API call - replace with actual endpoint
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Waitlist submission:', formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleClose = () => {
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      empresa: '',
      cargo: '',
      pais: '',
      comoTeEnteraste: ''
    })
    setIsSubmitted(false)
    setEmailError('')
    onClose()
  }

  if (!isOpen) return null

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
              ¡Estás en la lista!
            </h3>
            <p className="text-gray-300 mb-6">
              Te notificaremos cuando los tickets estén disponibles. Revisa tu correo corporativo.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 bg-gradient-to-r from-[#E99C37] to-[#D4A83D] text-white font-semibold rounded-lg hover:from-[#C47F2A] hover:to-[#E99C37] transition-all"
            >
              Entendido
            </button>
          </div>
        ) : (
          /* Form State */
          <div className="p-8">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Únete a la lista de espera
              </h3>
              <p className="text-gray-400 text-sm">
                Sé el primero en acceder a tickets Early Bird cuando estén disponibles.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre y Apellido */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre <span className="text-[#E99C37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0f0a05] border border-[#3d2f1e] rounded-lg text-white placeholder-gray-500 focus:border-[#E99C37] focus:outline-none focus:ring-1 focus:ring-[#E99C37]/50 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Apellido <span className="text-[#E99C37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.apellido}
                    onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0f0a05] border border-[#3d2f1e] rounded-lg text-white placeholder-gray-500 focus:border-[#E99C37] focus:outline-none focus:ring-1 focus:ring-[#E99C37]/50 transition-colors"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              {/* Email Corporativo */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Correo corporativo <span className="text-[#E99C37]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleEmailChange}
                  className={`w-full px-4 py-2.5 bg-[#0f0a05] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors ${
                    emailError
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
                      : 'border-[#3d2f1e] focus:border-[#E99C37] focus:ring-[#E99C37]/50'
                  }`}
                  placeholder="tu@empresa.com"
                />
                {emailError && (
                  <p className="mt-1 text-sm text-red-400">{emailError}</p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Teléfono <span className="text-[#E99C37]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0f0a05] border border-[#3d2f1e] rounded-lg text-white placeholder-gray-500 focus:border-[#E99C37] focus:outline-none focus:ring-1 focus:ring-[#E99C37]/50 transition-colors"
                  placeholder="+52 55 1234 5678"
                />
              </div>

              {/* Empresa y Cargo */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Empresa <span className="text-[#E99C37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
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
                    value={formData.cargo}
                    onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0f0a05] border border-[#3d2f1e] rounded-lg text-white placeholder-gray-500 focus:border-[#E99C37] focus:outline-none focus:ring-1 focus:ring-[#E99C37]/50 transition-colors"
                    placeholder="Tu cargo"
                  />
                </div>
              </div>

              {/* País */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  País <span className="text-[#E99C37]">*</span>
                </label>
                <select
                  required
                  value={formData.pais}
                  onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0f0a05] border border-[#3d2f1e] rounded-lg text-white focus:border-[#E99C37] focus:outline-none focus:ring-1 focus:ring-[#E99C37]/50 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Selecciona tu país</option>
                  {paises.map(pais => (
                    <option key={pais} value={pais}>{pais}</option>
                  ))}
                </select>
              </div>

              {/* Cómo te enteraste (opcional) */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  ¿Cómo te enteraste? <span className="text-gray-500">(opcional)</span>
                </label>
                <select
                  value={formData.comoTeEnteraste}
                  onChange={(e) => setFormData({ ...formData, comoTeEnteraste: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0f0a05] border border-[#3d2f1e] rounded-lg text-white focus:border-[#E99C37] focus:outline-none focus:ring-1 focus:ring-[#E99C37]/50 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Selecciona una opción</option>
                  {fuentes.map(fuente => (
                    <option key={fuente} value={fuente}>{fuente}</option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !!emailError}
                className="w-full py-3 px-6 bg-gradient-to-r from-[#E99C37] to-[#D4A83D] hover:from-[#C47F2A] hover:to-[#E99C37] text-white font-bold text-lg rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                  'Reservar mi lugar'
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Al registrarte aceptas recibir comunicaciones sobre CENTRO '26.
                Puedes darte de baja en cualquier momento.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
