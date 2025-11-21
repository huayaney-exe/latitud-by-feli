'use client'

import { useState, useEffect } from 'react'

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 23,
    seconds: 45
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 border-b border-indigo-500/20 fixed top-0 left-0 right-0 z-[60]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between py-2 gap-2 sm:gap-4 text-xs sm:text-sm">
          {/* Left: Urgency Message */}
          <div className="flex items-center gap-2 text-violet-300 font-medium">
            <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="hidden sm:inline">🔥 Early Bird 40% OFF termina en:</span>
            <span className="sm:hidden">⏰ 40% OFF termina:</span>
          </div>

          {/* Center: Countdown */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 bg-indigo-900/40 px-2 py-1 rounded">
              <span className="text-white font-bold font-display">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-xs text-gray-400">d</span>
            </div>
            <span className="text-indigo-400">:</span>
            <div className="flex items-center gap-1 bg-indigo-900/40 px-2 py-1 rounded">
              <span className="text-white font-bold font-display">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-xs text-gray-400">h</span>
            </div>
            <span className="text-indigo-400">:</span>
            <div className="flex items-center gap-1 bg-indigo-900/40 px-2 py-1 rounded">
              <span className="text-white font-bold font-display">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-xs text-gray-400">m</span>
            </div>
            <span className="text-indigo-400">:</span>
            <div className="flex items-center gap-1 bg-indigo-900/40 px-2 py-1 rounded">
              <span className="text-white font-bold font-display">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-xs text-gray-400">s</span>
            </div>
          </div>

          {/* Right: CTA - Hidden on mobile to avoid double CTA, visible on desktop */}
          <button
            onClick={scrollToPricing}
            className="hidden sm:block px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold rounded text-xs sm:text-sm transition-all whitespace-nowrap"
          >
            Obtener Descuento →
          </button>
        </div>
      </div>
    </div>
  )
}
