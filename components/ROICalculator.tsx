'use client'

import { useState } from 'react'

const industries = [
  'Fintech',
  'Retail / E-commerce',
  'Healthcare',
  'Tech / Software',
  'Manufactura',
  'Servicios Profesionales',
  'Otro'
]

const companySizes = [
  { label: '1-10 empleados', multiplier: 1 },
  { label: '11-50 empleados', multiplier: 1.5 },
  { label: '51-200 empleados', multiplier: 2.5 },
  { label: '201-1000 empleados', multiplier: 4 },
  { label: '1000+ empleados', multiplier: 6 }
]

const maturityLevels = [
  { label: 'Sin IA aún', value: 'none', strategies: 3, value_min: 15000, value_max: 30000, roi_min: 15, roi_max: 30 },
  { label: 'Explorando IA', value: 'exploring', strategies: 4, value_min: 25000, value_max: 50000, roi_min: 25, roi_max: 50 },
  { label: 'Implementando IA', value: 'implementing', strategies: 5, value_min: 35000, value_max: 75000, roi_min: 35, roi_max: 75 },
  { label: 'Escalando IA', value: 'scaling', strategies: 6, value_min: 50000, value_max: 100000, roi_min: 50, roi_max: 100 }
]

export default function ROICalculator() {
  const [industry, setIndustry] = useState('')
  const [companySize, setCompanySize] = useState(0)
  const [maturity, setMaturity] = useState('')
  const [showResults, setShowResults] = useState(false)

  const calculateROI = () => {
    if (!industry || !companySize || !maturity) {
      return null
    }

    const sizeMultiplier = companySizes[companySize].multiplier
    const maturityData = maturityLevels.find(m => m.value === maturity)

    if (!maturityData) return null

    const valueMin = Math.round(maturityData.value_min * sizeMultiplier)
    const valueMax = Math.round(maturityData.value_max * sizeMultiplier)
    const roiMin = maturityData.roi_min
    const roiMax = maturityData.roi_max

    return {
      strategies: maturityData.strategies,
      valueMin,
      valueMax,
      roiMin,
      roiMax,
      connections: Math.round(50 * sizeMultiplier * 0.7)
    }
  }

  const handleCalculate = () => {
    if (industry && companySize !== null && maturity) {
      setShowResults(true)
    }
  }

  const results = calculateROI()

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Calcula Tu ROI del Summit
            </h2>
            <p className="text-xl text-gray-300">
              Descubre el valor potencial que obtendrás al asistir a LATAI Summit
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            {/* Form */}
            <div className="space-y-6 mb-8">
              {/* Industry Selection */}
              <div>
                <label className="block text-white font-semibold mb-3">Tu Industria:</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition"
                >
                  <option value="">Selecciona tu industria</option>
                  {industries.map((ind, idx) => (
                    <option key={idx} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-white font-semibold mb-3">Tamaño de tu Empresa:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {companySizes.map((size, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCompanySize(idx)}
                      className={`px-4 py-3 rounded-lg font-medium transition ${
                        companySize === idx
                          ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white'
                          : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Maturity */}
              <div>
                <label className="block text-white font-semibold mb-3">Madurez de IA Actual:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {maturityLevels.map((level, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMaturity(level.value)}
                      className={`px-4 py-3 rounded-lg font-medium transition ${
                        maturity === level.value
                          ? 'bg-gradient-to-r from-orange-600 to-amber-700 text-white'
                          : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                      }`}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-lg font-bold rounded-lg shadow-lg shadow-orange-500/20 transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={!industry || companySize === null || !maturity}
              >
                Calcular Mi ROI
              </button>
            </div>

            {/* Results */}
            {showResults && results && (
              <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 border border-green-500/30 rounded-xl p-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  📊 Tu ROI Proyectado
                </h3>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">Estrategias Accionables</p>
                    <p className="text-4xl font-bold text-cyan-400">{results.strategies}-{results.strategies + 2}</p>
                    <p className="text-gray-400 text-xs mt-1">para implementar el lunes</p>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">Valor Estimado Año 1</p>
                    <p className="text-4xl font-bold text-green-400">
                      S/{results.valueMin.toLocaleString()}-{results.valueMax.toLocaleString()}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">en mejoras y ahorros</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">ROI Esperado</p>
                    <p className="text-4xl font-bold text-purple-400">{results.roiMin}x-{results.roiMax}x</p>
                    <p className="text-gray-400 text-xs mt-1">retorno sobre inversión del ticket</p>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">Conexiones Valiosas</p>
                    <p className="text-4xl font-bold text-pink-400">{results.connections}+</p>
                    <p className="text-gray-400 text-xs mt-1">profesionales relevantes</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <p className="text-white font-semibold mb-2">
                    💡 Una sola idea implementada puede pagar tu ticket 10x
                  </p>
                  <p className="text-gray-400 text-sm">
                    Basado en resultados de asistentes similares en eventos previos
                  </p>
                </div>

                <div className="text-center mt-6">
                  <button
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white font-bold rounded-lg transform transition hover:scale-105"
                  >
                    Asegurar Mi Ticket Ahora
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <p className="text-gray-500 text-xs text-center mt-6">
            * Los cálculos son estimaciones basadas en benchmarks de industria y feedback de eventos similares.
            Los resultados reales pueden variar según implementación y contexto específico.
          </p>
        </div>
      </div>
    </section>
  )
}
