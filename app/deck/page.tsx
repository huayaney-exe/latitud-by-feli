'use client'

import { useState, useEffect, useCallback } from 'react'

const slides = [
  // Slide 1: Title
  {
    id: 'title',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight mb-4">
            CENTRO <span className="text-[#E99C37]">'26</span>
          </h1>
          <p className="text-2xl md:text-3xl text-[#FBD64C] font-medium">
            Donde el mundo converge con Latinoamérica
          </p>
        </div>
        <div className="mt-12 stone-block px-8 py-4">
          <p className="text-lg text-gray-300">
            Edición Inaugural: <span className="text-[#E99C37] font-bold">Inteligencia Artificial Operacional</span>
          </p>
        </div>
        <div className="mt-16 text-[#989795] text-sm">
          Mayo 7-8, 2026 • Lima, Perú
        </div>
      </div>
    )
  },
  // Slide 2: El Problema
  {
    id: 'problema',
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-16">
        <p className="text-[#E99C37] text-sm font-medium uppercase tracking-wider mb-4">Lo que es</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Latinoamérica consume tecnología.<br />
          <span className="text-[#989795]">No la define.</span>
        </h2>
        <div className="space-y-4 text-xl text-gray-300 max-w-3xl">
          <p>Las tendencias nacen en Silicon Valley.</p>
          <p>Las conferencias que importan están en San Francisco.</p>
          <p>El conocimiento fluye en una sola dirección.</p>
          <p className="text-[#FBD64C] font-semibold pt-4">
            Hacia nosotros. Nunca desde nosotros.
          </p>
        </div>
        <div className="mt-12 stone-block-primary p-6 max-w-xl">
          <p className="text-white text-xl italic">
            "¿Y si existiera un punto de convergencia?<br />
            Un lugar donde el mundo viniera a Latinoamérica."
          </p>
        </div>
      </div>
    )
  },
  // Slide 3: Historia - QOSQO
  {
    id: 'historia',
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-16">
        <p className="text-[#E99C37] text-sm font-medium uppercase tracking-wider mb-4">La historia olvidada</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Hace 500 años, este continente<br />tenía un <span className="text-[#FBD64C]">centro</span>.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <div className="space-y-4 text-lg text-gray-300">
            <p>Un punto donde convergían <span className="text-[#E99C37] font-bold">30,000 km</span> de caminos.</p>
            <p>Donde fluía el conocimiento, el comercio, las ideas.</p>
            <p>Ese punto se llamaba <span className="text-[#FBD64C] font-bold">QOSQO</span>.</p>
            <p className="text-[#989795] italic">El ombligo del mundo.</p>
          </div>
          <div className="stone-block p-6">
            <div className="text-center space-y-2 text-sm">
              <div className="text-[#FBD64C] font-bold">CHINCHAYSUYU</div>
              <div className="text-[#989795]">(Ecuador, Colombia)</div>
              <div className="text-2xl text-[#E99C37]">↑</div>
              <div className="flex justify-center items-center gap-4">
                <div className="text-right">
                  <div className="text-[#FBD64C] font-bold">CONTISUYU</div>
                </div>
                <div className="text-2xl text-[#E99C37]">←</div>
                <div className="w-16 h-16 rounded-full bg-[#E99C37] flex items-center justify-center text-white font-black text-xs">
                  CUSCO
                </div>
                <div className="text-2xl text-[#E99C37]">→</div>
                <div className="text-left">
                  <div className="text-[#FBD64C] font-bold">ANTISUYU</div>
                </div>
              </div>
              <div className="text-2xl text-[#E99C37]">↓</div>
              <div className="text-[#FBD64C] font-bold">COLLASUYU</div>
              <div className="text-[#989795]">(Bolivia, Chile, Argentina)</div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xl text-white">
          Ese rol se perdió. <span className="text-[#E99C37]">Centro lo recupera.</span>
        </p>
      </div>
    )
  },
  // Slide 4: El Nombre
  {
    id: 'nombre',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <p className="text-[#989795] text-lg mb-4">/sen-tro/</p>
        <h2 className="text-7xl md:text-9xl font-black text-white mb-8">
          Centro
        </h2>
        <div className="max-w-2xl space-y-4 text-xl text-gray-300">
          <p>Una palabra. Universal. Directa.</p>
          <div className="stone-block p-6 mt-8 text-left space-y-2">
            <p><span className="text-[#E99C37]">Cusco</span> significaba "ombligo del mundo".</p>
            <p><span className="text-[#E99C37]">Lima</span> fue el centro del virreinato.</p>
            <p><span className="text-[#E99C37]">Perú</span> fue el centro de un continente.</p>
          </div>
        </div>
        <div className="mt-12 text-2xl text-[#FBD64C] font-semibold">
          "El mundo converge aquí."
        </div>
      </div>
    )
  },
  // Slide 5: La Brecha del 95%
  {
    id: 'brecha',
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-16">
        <p className="text-red-500 text-sm font-medium uppercase tracking-wider mb-4">Lo que es</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          La Brecha del <span className="text-red-500">95%</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="stone-block border-l-4 border-red-900 p-6">
            <div className="text-6xl font-black text-red-500/80 mb-4">95%</div>
            <p className="text-white font-bold mb-4">de empresas en LATAM fracasan con IA</p>
            <ul className="space-y-3 text-[#989795]">
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                Chatbots inútiles
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                Pilotos muertos
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                Hype sin impacto
              </li>
            </ul>
            <p className="mt-4 text-red-400 text-sm italic">
              Inversiones millonarias. Resultados mínimos.
            </p>
          </div>
          <div className="space-y-4 text-gray-300">
            <p className="font-bold text-white text-lg">Por qué fracasan:</p>
            <ul className="space-y-3">
              <li>→ Mentalidad "chatbot primero" sin transformación real</li>
              <li>→ Herramientas sin framework de ROI</li>
              <li>→ Cursos teóricos sin exposición a sistemas reales</li>
              <li>→ Cámaras de eco locales sin perspectiva global</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  // Slide 6: El 5% que transforma
  {
    id: 'cinco-porciento',
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-16">
        <p className="text-[#E99C37] text-sm font-medium uppercase tracking-wider mb-4">Lo que podría ser</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          El <span className="text-[#E99C37]">5%</span> Que Transforma
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="stone-block-primary border-l-4 border-[#E99C37] p-6">
            <div className="text-6xl font-black text-[#E99C37] mb-4">5%</div>
            <p className="text-white font-bold mb-4">opera IA en procesos críticos</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#FBD64C]">✓</span>
                Detección de fraude: 100M+ transacciones
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FBD64C]">✓</span>
                Optimización logística: Millones ahorrados
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FBD64C]">✓</span>
                Personalización: +40% ingresos
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-gray-300">
            <p className="font-bold text-white text-lg">Qué hacen diferente:</p>
            <ul className="space-y-3">
              <li>→ IA operacional en procesos core</li>
              <li>→ Frameworks de ROI vinculados a objetivos estratégicos</li>
              <li>→ Aprendizaje directo de equipos con sistemas exitosos</li>
              <li>→ Mejores prácticas globales adaptadas localmente</li>
            </ul>
            <div className="stone-block p-4 mt-6">
              <p className="text-[#FBD64C] font-semibold text-center">
                Centro es el puente del 95% al 5%
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  // Slide 7: Qué es Centro
  {
    id: 'que-es',
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          No es un evento.
        </h2>
        <p className="text-2xl text-[#E99C37] mb-12">Es una plataforma continental.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="stone-block p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-2">SUMMIT ANUAL</h3>
            <p className="text-[#989795]">Evento presencial flagship</p>
          </div>
          <div className="stone-block p-6 text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-white mb-2">COMUNIDAD 365</h3>
            <p className="text-[#989795]">Red de líderes activa todo el año</p>
          </div>
          <div className="stone-block p-6 text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-white mb-2">CONTENIDO</h3>
            <p className="text-[#989795]">Conocimiento que fluye continuamente</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg">
            <span className="text-[#FBD64C] font-bold">Centro '26</span> es la primera edición. Tema: IA Operacional.
          </p>
          <p className="text-[#989795] mt-2">
            La marca es permanente. El tema evoluciona.
          </p>
        </div>
      </div>
    )
  },
  // Slide 8: Los Números
  {
    id: 'numeros',
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-16">
        <div className="text-center mb-12">
          <p className="text-[#E99C37] text-sm font-medium uppercase tracking-wider mb-2">Centro '26</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Mayo 2026 | Lima, Perú
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="stone-block p-6 text-center">
            <div className="text-5xl md:text-6xl font-black text-[#FBD64C]">1000+</div>
            <p className="text-white font-bold mt-2">ASISTENTES</p>
            <p className="text-[#989795] text-sm">Líderes de LATAM</p>
          </div>
          <div className="stone-block p-6 text-center">
            <div className="text-5xl md:text-6xl font-black text-[#E99C37]">15+</div>
            <p className="text-white font-bold mt-2">SPEAKERS</p>
            <p className="text-[#989795] text-sm">Google, MercadoLibre, Rappi</p>
          </div>
          <div className="stone-block p-6 text-center">
            <div className="text-5xl md:text-6xl font-black text-[#D4A83D]">50+</div>
            <p className="text-white font-bold mt-2">EMPRESAS</p>
            <p className="text-[#989795] text-sm">CTOs, VPs, C-Suite</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="stone-block-primary p-4 text-center">
            <div className="text-2xl font-bold text-white">2 DÍAS</div>
            <p className="text-gray-300 text-sm">Intensivos</p>
          </div>
          <div className="stone-block-primary p-4 text-center">
            <div className="text-2xl font-bold text-white">16 HORAS</div>
            <p className="text-gray-300 text-sm">Contacto directo</p>
          </div>
          <div className="stone-block-primary p-4 text-center">
            <div className="text-2xl font-bold text-white">40% LATAM</div>
            <p className="text-gray-300 text-sm">20% Global</p>
          </div>
        </div>
      </div>
    )
  },
  // Slide 9: Formato
  {
    id: 'formato',
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          El Formato
        </h2>
        <p className="text-[#E99C37] mb-8">Diseñado para transformación, no para entretenimiento</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="stone-block p-6">
            <h3 className="text-2xl font-bold text-[#FBD64C] mb-4">DÍA 1: PERSPECTIVA</h3>
            <div className="space-y-4 text-sm">
              <div className="border-l-2 border-[#E99C37] pl-4">
                <p className="text-white font-bold">AM - Keynotes estratégicos</p>
                <p className="text-[#989795]">El estado del arte de IA operacional</p>
              </div>
              <div className="border-l-2 border-[#E99C37] pl-4">
                <p className="text-white font-bold">PM - Paneles de implementación</p>
                <p className="text-[#989795]">Cómo lo hicimos: casos reales</p>
              </div>
              <div className="border-l-2 border-[#FBD64C] pl-4">
                <p className="text-white font-bold">NOCHE - Cena VIP ejecutiva</p>
                <p className="text-[#989795]">Networking estructurado con speakers</p>
              </div>
            </div>
          </div>
          <div className="stone-block p-6">
            <h3 className="text-2xl font-bold text-[#E99C37] mb-4">DÍA 2: CAPACIDAD</h3>
            <div className="space-y-4 text-sm">
              <div className="border-l-2 border-[#E99C37] pl-4">
                <p className="text-white font-bold">AM - Workshops prácticos</p>
                <p className="text-[#989795]">Tracks paralelos por industria</p>
              </div>
              <div className="border-l-2 border-[#E99C37] pl-4">
                <p className="text-white font-bold">PM - Mesas de trabajo</p>
                <p className="text-[#989795]">Validación de tu estrategia IA</p>
              </div>
              <div className="border-l-2 border-[#FBD64C] pl-4">
                <p className="text-white font-bold">CIERRE - Síntesis y compromisos</p>
                <p className="text-[#989795]">"Lo que implementarás en 90 días"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  // Slide 10: Audiencia
  {
    id: 'audiencia',
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          La Audiencia Más Cualificada de LATAM
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="stone-block p-6">
            <h3 className="text-lg font-bold text-[#FBD64C] mb-4">PERFIL DEMOGRÁFICO</h3>
            <ul className="space-y-3 text-gray-300">
              <li><span className="text-[#E99C37] font-bold">70%+</span> tomadores de decisión con budget</li>
              <li><span className="text-[#E99C37] font-bold">60%</span> entre 25-40 años (líderes emergentes)</li>
              <li className="pt-2 border-t border-[#3d2f1e]">
                <span className="text-[#989795]">Industrias:</span><br />
                Tech 35% | Fintech 20% | E-commerce 20%
              </li>
            </ul>
          </div>
          <div className="stone-block p-6">
            <h3 className="text-lg font-bold text-[#E99C37] mb-4">ROLES</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Founders & C-Suite</span>
                <span className="text-[#FBD64C] font-bold">35%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">CTOs, VPs, Directors</span>
                <span className="text-[#FBD64C] font-bold">40%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Managers técnicos</span>
                <span className="text-[#FBD64C] font-bold">20%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Inversores</span>
                <span className="text-[#FBD64C] font-bold">5%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="stone-block-primary p-4 mt-8">
          <p className="text-white font-semibold text-center">
            ¿Por qué vienen? Networking con expertos • Frameworks accionables • Validación de estrategia IA
          </p>
        </div>
      </div>
    )
  },
  // Slide 11: Oportunidad Sponsors
  {
    id: 'sponsors-oportunidad',
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-16">
        <p className="text-[#E99C37] text-sm font-medium uppercase tracking-wider mb-4">Para Sponsors</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Acceso Directo a Decisores de IA en LATAM
        </h2>
        <div className="stone-block p-6 mb-8 max-w-3xl">
          <p className="text-xl text-[#FBD64C] italic text-center">
            "¿Dónde más puedo tener 16 horas de acceso directo a 1000+ tomadores de decisión con budget de IA en un solo lugar?"
          </p>
        </div>
        <div className="stone-block-primary p-6">
          <h3 className="text-lg font-bold text-white mb-4">MATEMÁTICA DEL ROI</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div className="space-y-2">
              <p>Contrato enterprise promedio IA = <span className="text-[#FBD64C] font-bold">S/150K-500K</span> anual</p>
              <p>Leads cualificados esperados: <span className="text-[#FBD64C] font-bold">50-200</span></p>
              <p>Tasa conversión benchmark: <span className="text-[#FBD64C] font-bold">2-5%</span></p>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-black text-[#E99C37]">1-10 CLIENTES</p>
                <p className="text-white">del evento</p>
                <p className="text-sm text-[#FBD64C] mt-2">UN SOLO CLIENTE CUBRE TU INVERSIÓN 3-10x</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  // Slide 12: Niveles Sponsorship
  {
    id: 'sponsors-niveles',
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Niveles de Sponsorship
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="stone-block-primary p-4 relative">
            <div className="absolute -top-2 -right-2 bg-[#FBD64C] text-[#0f0a05] text-xs font-bold px-2 py-1 rounded">
              LIMITADO: 3
            </div>
            <h3 className="text-xl font-bold text-[#FBD64C] mb-2">DIAMOND</h3>
            <p className="text-2xl font-black text-white mb-4">S/50,000</p>
            <ul className="space-y-1 text-xs text-gray-300">
              <li>✓ Keynote 30 min</li>
              <li>✓ Workshop track</li>
              <li>✓ Booth premium</li>
              <li>✓ 10 tickets VIP</li>
              <li>✓ Hosting cena VIP</li>
              <li>✓ Lead gen completo</li>
            </ul>
          </div>
          <div className="stone-block p-4 relative">
            <div className="absolute -top-2 -right-2 bg-[#E99C37] text-white text-xs font-bold px-2 py-1 rounded">
              LIMITADO: 5
            </div>
            <h3 className="text-xl font-bold text-[#E99C37] mb-2">PLATINUM</h3>
            <p className="text-2xl font-black text-white mb-4">S/30,000</p>
            <ul className="space-y-1 text-xs text-gray-300">
              <li>✓ Panel (1 exec)</li>
              <li>✓ Booth alto tráfico</li>
              <li>✓ 6 tickets VIP</li>
              <li>✓ Logo todo material</li>
              <li>✓ Lead scanner</li>
              <li>✓ Email post-evento</li>
            </ul>
          </div>
          <div className="stone-block p-4">
            <h3 className="text-xl font-bold text-[#D4A83D] mb-2">GOLD</h3>
            <p className="text-2xl font-black text-white mb-4">S/15,000</p>
            <ul className="space-y-1 text-xs text-gray-300">
              <li>✓ Logo website</li>
              <li>✓ Booth exhibición</li>
              <li>✓ 3 tickets</li>
              <li>✓ Lead scanner</li>
              <li>✓ Menciones redes</li>
              <li>✓ Networking estructurado</li>
            </ul>
          </div>
        </div>
        <div className="stone-block p-4 mt-4 text-center">
          <span className="text-[#989795]">TECHNOLOGY PARTNER</span>
          <span className="text-white font-bold ml-4">S/8,000</span>
          <span className="text-[#FBD64C] ml-4">"Powered by [Tu Empresa]"</span>
        </div>
      </div>
    )
  },
  // Slide 13: Comparación
  {
    id: 'comparacion',
    content: (
      <div className="flex flex-col justify-center h-full px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          ¿Por qué Centro vs Otras Opciones?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#3d2f1e]">
                <th className="text-left py-3 text-[#989795]"></th>
                <th className="py-3 text-[#FBD64C] font-bold">Centro '26</th>
                <th className="py-3 text-gray-300">Eventos Regionales</th>
                <th className="py-3 text-gray-300">Conf. Internacionales</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-[#3d2f1e]/50">
                <td className="py-3 text-white">Calibre Speakers</td>
                <td className="py-3 text-center"><span className="text-[#E99C37]">████████</span> Global</td>
                <td className="py-3 text-center"><span className="text-[#989795]">████</span> Local</td>
                <td className="py-3 text-center"><span className="text-[#E99C37]">████████</span> Global</td>
              </tr>
              <tr className="border-b border-[#3d2f1e]/50">
                <td className="py-3 text-white">Enfoque IA Operacional</td>
                <td className="py-3 text-center"><span className="text-[#E99C37]">████████</span> 100%</td>
                <td className="py-3 text-center"><span className="text-[#989795]">████</span> Parcial</td>
                <td className="py-3 text-center"><span className="text-[#D4A83D]">██████</span> Parcial</td>
              </tr>
              <tr className="border-b border-[#3d2f1e]/50">
                <td className="py-3 text-white">Accesibilidad</td>
                <td className="py-3 text-center"><span className="text-[#E99C37]">████████</span> Lima</td>
                <td className="py-3 text-center"><span className="text-[#E99C37]">████████</span> Lima</td>
                <td className="py-3 text-center"><span className="text-[#989795]">██</span> SF/NYC</td>
              </tr>
              <tr>
                <td className="py-3 text-white">Costo Total</td>
                <td className="py-3 text-center"><span className="text-[#FBD64C]">S/600-1K</span></td>
                <td className="py-3 text-center">Similar</td>
                <td className="py-3 text-center text-red-400">$3K+ viaje</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="stone-block-primary p-4 mt-8 text-center">
          <p className="text-white text-lg">
            <span className="text-[#FBD64C] font-bold">Calidad de Silicon Valley.</span> Accesibilidad de Lima.
          </p>
          <p className="text-gray-300 text-sm mt-1">Sin visa, sin vuelo de 12 horas, sin $5,000 en gastos.</p>
        </div>
      </div>
    )
  },
  // Slide 14: Cierre
  {
    id: 'cierre',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="max-w-3xl">
          <p className="text-xl text-gray-300 mb-6">
            Hace 500 años, todo convergía aquí.
          </p>
          <p className="text-xl text-gray-300 mb-6">
            Los caminos. Las ideas. Las decisiones.
          </p>
          <p className="text-xl text-[#E99C37] mb-12">
            Ese rol se perdió. <span className="font-bold">Centro lo recupera.</span>
          </p>

          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-2">
              CENTRO <span className="text-[#E99C37]">'26</span>
            </h2>
            <p className="text-xl text-[#FBD64C]">Donde el mundo converge con LATAM</p>
            <p className="text-[#989795] mt-4">Mayo 7-8, 2026 • Lima, Perú</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="stone-block p-4">
              <p className="text-[#989795] text-sm">ASISTENTES</p>
              <p className="text-white font-bold">Desde S/600</p>
            </div>
            <div className="stone-block p-4">
              <p className="text-[#989795] text-sm">SPONSORS</p>
              <p className="text-white font-bold">Desde S/8,000</p>
            </div>
            <div className="stone-block p-4">
              <p className="text-[#989795] text-sm">GARANTÍA</p>
              <p className="text-white font-bold">100% reembolso</p>
            </div>
          </div>

          <p className="text-2xl text-[#FBD64C] font-semibold">
            El centro despierta. ¿Estarás ahí?
          </p>
        </div>
      </div>
    )
  }
]

export default function DeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen()
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, toggleFullscreen, isFullscreen])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  return (
    <div className="h-screen w-screen bg-[#0f0a05] overflow-hidden flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(61,47,30,0.25) 79px, rgba(61,47,30,0.25) 80px),
              repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(61,47,30,0.25) 79px, rgba(61,47,30,0.25) 80px)
            `
          }} />
        </div>

        {/* Slide */}
        <div className="relative h-full w-full">
          {slides[currentSlide].content}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-[#E99C37] hover:text-[#FBD64C] transition-colors opacity-50 hover:opacity-100"
          aria-label="Previous slide"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-[#E99C37] hover:text-[#FBD64C] transition-colors opacity-50 hover:opacity-100"
          aria-label="Next slide"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom Bar */}
      <div className="h-16 bg-[#1a1208] border-t border-[#3d2f1e] flex items-center justify-between px-6">
        {/* Slide Counter */}
        <div className="text-[#989795] text-sm">
          <span className="text-[#E99C37] font-bold">{currentSlide + 1}</span>
          <span> / {slides.length}</span>
        </div>

        {/* Slide Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-[#E99C37] w-6'
                  : 'bg-[#3d2f1e] hover:bg-[#E99C37]/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <span className="text-[#989795] text-xs hidden md:block">
            ← → para navegar • F para pantalla completa
          </span>
          <button
            onClick={toggleFullscreen}
            className="p-2 text-[#989795] hover:text-[#E99C37] transition-colors"
            aria-label="Toggle fullscreen"
          >
            {isFullscreen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
