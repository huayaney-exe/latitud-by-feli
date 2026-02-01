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
      'Acceso a +20 operadores en escenario',
      'Cena VIP con speakers (networking real)',
      'Frameworks y templates descargables',
      'Acceso a grabaciones por 6 meses',
      'Grupo privado de implementadores',
      'Sesión Q&A exclusiva con speakers'
    ],
    cta: 'Asegurar Spot',
    variant: 'primary' as const
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
      'Acceso a +20 operadores en escenario',
      'Almuerzo con networking estructurado',
      'Frameworks y templates descargables',
      'Acceso a grabaciones por 6 meses',
      'Grupo privado de implementadores',
      'Certificado de asistencia'
    ],
    cta: 'Mejor Valor',
    variant: 'accent' as const
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
      'Acceso a +20 operadores en escenario',
      'Frameworks y templates descargables',
      'Acceso a grabaciones por 6 meses',
      'Grupo privado de implementadores',
      'Certificado de asistencia'
    ],
    cta: 'Registrarme',
    variant: 'default' as const
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-[#0f0a05]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Acceso a +20 Operadores por 2 Días
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No pagas por un evento. Pagas por acceso directo a quienes ya implementaron lo que tú quieres lograr.
          </p>
          <p className="text-[#FBD64C] font-semibold mt-4">
            Pre-venta activa — Cupos limitados
          </p>
        </div>

        {/* Tocapu Grid - Pricing Cards connected by junction lines */}
        <div className="tocapu-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative overflow-hidden transform transition hover:scale-[1.02] ${
                tier.popular ? 'ring-stone z-10' : ''
              }`}
            >
              {/* Popular Badge - Angular */}
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FBD64C] to-[#D4A83D] text-[#0f0a05] px-4 py-1 text-sm font-bold z-10" style={{ borderRadius: '0 0 0 3px' }}>
                  MAS POPULAR
                </div>
              )}

              {/* Card - Stone Block Variant */}
              <div className={`p-6 h-full flex flex-col ${
                tier.variant === 'primary'
                  ? 'stone-block-primary'
                  : tier.variant === 'accent'
                    ? 'stone-block-accent'
                    : 'stone-block'
              }`}>
                {/* Tier Name & Discount */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="badge-stone inline-block px-3 py-1 text-sm font-semibold text-white">
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


                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white">
                      <svg className="w-5 h-5 text-[#FBD64C] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Stone Style */}
                <button
                  className={`w-full py-3 px-6 font-bold text-lg transition ${
                    tier.popular
                      ? 'btn-stone-primary text-[#0f0a05] bg-[#FBD64C] hover:bg-[#D4A83D]'
                      : 'btn-stone bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-[#FBD64C]/30'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Options - Stone Styling */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Opciones de pago flexibles disponibles</p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="stone-block px-4 py-2 flex items-center gap-2 text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <rect width="24" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                <line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-sm">Visa / Mastercard / Amex</span>
            </div>
            <div className="stone-block px-4 py-2 flex items-center gap-2 text-gray-300">
              <span className="text-xl">3x</span>
              <span className="text-sm">Cuotas disponibles</span>
            </div>
            <div className="stone-block px-4 py-2 flex items-center gap-2 text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Powered by Stripe</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Quieres traer a tu equipo? Contacta para descuentos grupales (3+ personas)
          </p>
        </div>
      </div>
    </section>
  )
}
