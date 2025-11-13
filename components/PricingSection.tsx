'use client'

const pricingTiers = [
  {
    name: 'Super Early Bird',
    discount: '40% OFF',
    pricePEN: 'S/600',
    priceUSD: '$160',
    originalPrice: 'S/1,000',
    availability: 'Primeros 50 tickets',
    popular: false,
    features: [
      'Acceso completo a todas las sesiones',
      'Cena VIP de networking',
      'Materiales del evento digitales',
      'Certificado de asistencia',
      'Acceso a grabaciones post-evento',
      'Grupo exclusivo de WhatsApp'
    ],
    cta: 'Asegurar Spot',
    bgColor: 'from-violet-600 to-purple-700',
    remaining: 12
  },
  {
    name: 'Early Bird',
    discount: '25% OFF',
    pricePEN: 'S/750',
    priceUSD: '$200',
    originalPrice: 'S/1,000',
    availability: '60 días antes del evento',
    popular: true,
    features: [
      'Acceso completo a todas las sesiones',
      'Almuerzo de networking incluido',
      'Materiales del evento digitales',
      'Certificado de asistencia',
      'Acceso a grabaciones post-evento',
      'Grupo exclusivo de WhatsApp'
    ],
    cta: 'Mejor Valor',
    bgColor: 'from-indigo-600 to-violet-600',
    remaining: 45
  },
  {
    name: 'Regular',
    discount: 'Precio Estándar',
    pricePEN: 'S/1,000',
    priceUSD: '$265',
    originalPrice: null,
    availability: '30 días antes del evento',
    popular: false,
    features: [
      'Acceso completo a todas las sesiones',
      'Materiales del evento digitales',
      'Certificado de asistencia',
      'Acceso a grabaciones post-evento',
      'Grupo exclusivo de WhatsApp'
    ],
    cta: 'Registrarse Ahora',
    bgColor: 'from-slate-700 to-slate-900',
    remaining: 150
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Asegura Tu Lugar en LATAI Summit
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a ti. Todos los tickets incluyen acceso completo al evento.
          </p>
          <p className="text-cyan-400 font-semibold mt-4">
            🔥 Aprovecha el Early Bird - El precio aumenta en 2 días
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transform transition hover:scale-105 ${
                tier.popular ? 'ring-4 ring-cyan-500' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg z-10">
                  ⭐ MÁS POPULAR
                </div>
              )}

              {/* Card Background */}
              <div className={`bg-gradient-to-br ${tier.bgColor} p-6 h-full flex flex-col`}>
                {/* Tier Name & Discount */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white">
                    {tier.discount}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  {tier.originalPrice && (
                    <div className="text-gray-300 line-through text-lg">{tier.originalPrice}</div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">{tier.pricePEN}</span>
                    <span className="text-gray-300">/ {tier.priceUSD}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">{tier.availability}</p>
                </div>

                {/* Availability Indicator */}
                {tier.remaining && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>Disponibles</span>
                      <span className="font-bold">{tier.remaining} tickets</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white rounded-full h-2 transition-all"
                        style={{ width: `${(tier.remaining / 50) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition transform hover:scale-105 ${
                    tier.popular
                      ? 'bg-white text-blue-900 hover:bg-gray-100'
                      : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Options */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Opciones de pago flexibles disponibles</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-2 text-gray-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <rect width="24" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                <line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-sm">Visa / Mastercard / Amex</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-2xl">💳</span>
              <span className="text-sm">Pago en 3 cuotas disponible</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-2xl">🔒</span>
              <span className="text-sm">Powered by Stripe</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            ¿Quieres traer a tu equipo? Contacta para descuentos grupales (3+ personas)
          </p>
        </div>
      </div>
    </section>
  )
}
