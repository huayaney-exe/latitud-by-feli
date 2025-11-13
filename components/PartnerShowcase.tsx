export default function PartnerShowcase() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technology Partners Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">
              Impulsado por Tecnología de Vanguardia
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nuestros socios tecnológicos hacen posible esta experiencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Prisma Card */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-violet-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-8 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L3 7v10l9 7 9-7V7L12 0zm0 2.5l7 5.25v8.5l-7 5.25-7-5.25v-8.5l7-5.25z"/>
                    <path d="M12 6l-4 3v6l4 3 4-3V9l-4-3zm0 2l2 1.5v3L12 14l-2-1.5v-3L12 8z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white font-display">Prisma</h4>
                  <p className="text-violet-400 text-sm font-medium">Database Partner</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Prisma proporciona la infraestructura de base de datos de próxima generación que impulsa las aplicaciones modernas de IA. Su ORM type-safe acelera el desarrollo y garantiza la integridad de datos en sistemas de producción.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400">
                  <span className="text-violet-400 font-semibold">Contribución:</span> Infraestructura de datos y herramientas para startups de IA
                </p>
              </div>
            </div>

            {/* Conversia Card */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-violet-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-8 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white font-display">Conversia</h4>
                  <p className="text-violet-400 text-sm font-medium">Analytics Partner</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Conversia lidera la transformación digital con análisis avanzado y soluciones de IA para empresas latinoamericanas. Su plataforma optimiza conversiones y mejora la toma de decisiones basada en datos.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400">
                  <span className="text-violet-400 font-semibold">Contribución:</span> Plataforma de análisis y optimización de conversión
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Apoyado por las Empresas Líderes de Perú
          </h2>
          <p className="text-xl text-gray-300">
            Únete a la comunidad de organizaciones que están liderando la transformación de IA
          </p>
        </div>

        {/* Platinum Partners */}
        <div className="mb-12">
          <h3 className="text-center text-violet-400 font-semibold mb-6 text-lg">
            🏆 SOCIOS PLATINUM
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center hover:bg-white/15 transition border border-white/20"
              >
                <div className="text-center">
                  <div className="text-6xl mb-2">🏢</div>
                  <p className="text-gray-400 text-sm">Partner Logo {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Partners */}
        <div className="mb-12">
          <h3 className="text-center text-yellow-400 font-semibold mb-6">
            🥇 SOCIOS GOLD
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center hover:bg-white/10 transition border border-white/10"
              >
                <div className="text-center">
                  <div className="text-4xl mb-1">🏪</div>
                  <p className="text-gray-500 text-xs">Logo {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div className="mb-12">
          <h3 className="text-center text-gray-400 font-semibold mb-6">
            🤝 SOCIOS COMUNITARIOS
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center hover:bg-white/10 transition"
              >
                <div className="text-2xl opacity-50">🎓</div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Partners */}
        <div className="mb-12">
          <h3 className="text-center text-violet-400 font-semibold mb-6">
            📰 MEDIA PARTNERS
          </h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {['Gestión', 'El Comercio', 'Semana Económica', 'Peru21', 'TechCrunch LATAM'].map((media, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-3 hover:bg-white/10 transition border border-white/10"
              >
                <p className="text-gray-300 font-medium">{media}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-indigo-900/30 to-violet-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres ser socio de LATAI Summit?
            </h3>
            <p className="text-gray-300 mb-6">
              Únete a las empresas líderes que están apoyando el ecosistema de IA en Perú.
              Ofertas de patrocinio personalizadas disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sponsors@lataisummit.com"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/20 transition"
              >
                Descargar Prospecto de Patrocinio
              </a>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition">
                Contactar Equipo de Sponsors
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h4 className="text-white font-bold mb-4">LATAI Summit</h4>
              <p className="text-gray-400 text-sm">
                El evento premier de Inteligencia Artificial en Perú. Conectando líderes,
                compartiendo conocimiento, acelerando la transformación de IA.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#pricing" className="hover:text-violet-400 transition">Tickets</a></li>
                <li><a href="#agenda" className="hover:text-violet-400 transition">Agenda</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Speakers</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Sponsors</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Contacto</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:hola@lataisummit.com" className="hover:text-violet-400 transition">
                    hola@lataisummit.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Lima, Perú</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📅</span>
                  <span>Mayo 7-8, 2025</span>
                </li>
              </ul>

              {/* Social Media */}
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-violet-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Technology Attribution */}
          <div className="text-center py-6 border-t border-white/10">
            <p className="text-gray-500 text-xs mb-2">Technology Partners</p>
            <div className="flex justify-center items-center gap-6">
              <a href="https://prisma.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition text-sm font-medium">
                Powered by Prisma
              </a>
              <span className="text-gray-700">•</span>
              <a href="https://conversia.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition text-sm font-medium">
                Analytics by Conversia
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              © 2025 LATAI Summit. Todos los derechos reservados. |{' '}
              <a href="#" className="hover:text-violet-400 transition">Términos y Condiciones</a> |{' '}
              <a href="#" className="hover:text-violet-400 transition">Política de Privacidad</a>
            </p>
            <p className="text-gray-600 text-xs mt-2">
              🤖 Construyendo el futuro de la IA en Perú
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
