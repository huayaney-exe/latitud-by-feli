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
    <div className="bg-[#9A0B25] border-b border-[#E99C37]/40 fixed top-0 left-0 right-0 z-[60]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-2 gap-4 text-xs sm:text-sm">
          {/* Urgency Message */}
          <div className="flex items-center gap-2 text-amber-200 font-medium">
            <svg className="w-4 h-4 animate-pulse text-[#FBD64C]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="hidden sm:inline">🔥 Early Bird <span className="text-[#FBD64C] font-bold">40% OFF</span> termina en:</span>
            <span className="sm:hidden">🔥 <span className="text-[#FBD64C] font-bold">40% OFF</span></span>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 bg-black/40 px-2 py-1 border border-[#E99C37]/20" style={{ borderRadius: '3px' }}>
              <span className="text-white font-bold font-display">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-xs text-amber-200/60">d</span>
            </div>
            <span className="text-[#FBD64C]">:</span>
            <div className="flex items-center gap-1 bg-black/40 px-2 py-1 border border-[#E99C37]/20" style={{ borderRadius: '3px' }}>
              <span className="text-white font-bold font-display">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-xs text-amber-200/60">h</span>
            </div>
            <span className="text-[#FBD64C]">:</span>
            <div className="flex items-center gap-1 bg-black/40 px-2 py-1 border border-[#E99C37]/20" style={{ borderRadius: '3px' }}>
              <span className="text-white font-bold font-display">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-xs text-amber-200/60">m</span>
            </div>
            <span className="text-[#FBD64C]">:</span>
            <div className="flex items-center gap-1 bg-black/40 px-2 py-1 border border-[#E99C37]/20" style={{ borderRadius: '3px' }}>
              <span className="text-white font-bold font-display">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-xs text-amber-200/60">s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
