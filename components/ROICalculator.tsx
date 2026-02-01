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
    <section className="py-20 bg-[#0f0a05]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Calcula Tu ROI del Summit
            </h2>
            <p className="text-xl text-gray-300">
              Descubre el valor potencial que obtendrás al asistir a CENTRO
            </p>
          </div>

          {/* Calculator Card - Stone Block */}
          <div className="stone-block-warm p-8">
            {/* Form */}
            <div className="space-y-6 mb-8">
              {/* Industry Selection */}
              <div>
                <label className="block text-white font-semibold mb-3">Tu Industria:</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-[#0f0a05] text-white border-2 border-[#3d2f1e] px-4 py-3 focus:outline-none focus:border-[#E99C37] transition"
                  style={{ borderRadius: '3px' }}
                >
                  <option value="">Selecciona tu industria</option>
                  {industries.map((ind, idx) => (
                    <option key={idx} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              {/* Company Size - Tocapu Grid */}
              <div>
                <label className="block text-white font-semibold mb-3">Tamaño de tu Empresa:</label>
                <div className="tocapu-grid grid-cols-1 sm:grid-cols-2">
                  {companySizes.map((size, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCompanySize(idx)}
                      className={`px-4 py-3 font-medium transition text-left ${
                        companySize === idx
                          ? 'bg-gradient-to-r from-[#E99C37] to-[#D4A83D] text-white'
                          : 'bg-[#1a1208] text-gray-400 hover:bg-[#251a0f]'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Maturity - Tocapu Grid */}
              <div>
                <label className="block text-white font-semibold mb-3">Madurez de IA Actual:</label>
                <div className="tocapu-grid grid-cols-1 sm:grid-cols-2">
                  {maturityLevels.map((level, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMaturity(level.value)}
                      className={`px-4 py-3 font-medium transition text-left ${
                        maturity === level.value
                          ? 'bg-gradient-to-r from-[#C47F2A] to-[#E99C37] text-white'
                          : 'bg-[#1a1208] text-gray-400 hover:bg-[#251a0f]'
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
                className="w-full py-4 btn-stone-primary text-white text-lg font-bold transform transition hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={!industry || companySize === null || !maturity}
              >
                Calcular Mi ROI
              </button>
            </div>

            {/* Results - Stone Block */}
            {showResults && results && (
              <div className="stone-block border-green-700/30 bg-gradient-to-r from-green-950/20 to-[#1a1208] p-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Tu ROI Proyectado
                </h3>

                {/* Results Grid - Tocapu */}
                <div className="tocapu-grid grid-cols-2 mb-6">
                  <div className="text-center p-4 bg-[#1a1208]">
                    <p className="text-gray-400 text-sm mb-2">Estrategias Accionables</p>
                    <p className="text-4xl font-bold text-[#FBD64C]">{results.strategies}-{results.strategies + 2}</p>
                    <p className="text-gray-400 text-xs mt-1">para implementar el lunes</p>
                  </div>

                  <div className="text-center p-4 bg-[#1a1208]">
                    <p className="text-gray-400 text-sm mb-2">Valor Estimado Año 1</p>
                    <p className="text-4xl font-bold text-green-400">
                      S/{results.valueMin.toLocaleString()}-{results.valueMax.toLocaleString()}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">en mejoras y ahorros</p>
                  </div>

                  <div className="text-center p-4 bg-[#1a1208]">
                    <p className="text-gray-400 text-sm mb-2">ROI Esperado</p>
                    <p className="text-4xl font-bold text-[#E99C37]">{results.roiMin}x-{results.roiMax}x</p>
                    <p className="text-gray-400 text-xs mt-1">retorno sobre inversión del ticket</p>
                  </div>

                  <div className="text-center p-4 bg-[#1a1208]">
                    <p className="text-gray-400 text-sm mb-2">Conexiones Valiosas</p>
                    <p className="text-4xl font-bold text-[#D4A83D]">{results.connections}+</p>
                    <p className="text-gray-400 text-xs mt-1">profesionales relevantes</p>
                  </div>
                </div>

                <div className="stone-block p-4 text-center">
                  <p className="text-white font-semibold mb-2">
                    Una sola idea implementada puede pagar tu ticket 10x
                  </p>
                  <p className="text-gray-400 text-sm">
                    Proyección basada en benchmarks de industria
                  </p>
                </div>

                <div className="text-center mt-6">
                  <button
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-stone-primary px-8 py-3 text-white font-bold transform transition hover:scale-105"
                  >
                    Asegurar Mi Ticket Ahora
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <p className="text-gray-500 text-xs text-center mt-6">
            * Los cálculos son estimaciones proyectadas basadas en benchmarks de industria.
            Los resultados reales variarán según tu implementación y contexto específico.
          </p>
        </div>
      </div>
    </section>
  )
}
