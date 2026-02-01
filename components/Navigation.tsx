'use client'

import { useState, useEffect } from 'react'

interface NavigationProps {
  onOpenWaitlist?: () => void
  onOpenSponsor?: () => void
}

export default function Navigation({ onOpenWaitlist, onOpenSponsor }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ]

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const handleWaitlistClick = () => {
    if (onOpenWaitlist) {
      onOpenWaitlist()
    }
    setIsMobileMenuOpen(false)
  }

  const handleSponsorClick = () => {
    if (onOpenSponsor) {
      onOpenSponsor()
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-[44px] left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f0a05]/95 backdrop-blur-md border-b border-orange-500/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#')}
              className="relative group"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white tracking-tight">CENTRO</span>
                <span className="text-lg font-bold text-[#E99C37]">'26</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-[#FBD64C] font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E99C37] to-[#FBD64C] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}

              {/* Dual CTA - Sponsor + Attendee */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleSponsorClick}
                  className="px-5 py-2.5 border border-[#E99C37]/50 hover:border-[#E99C37] text-[#E99C37] hover:text-[#FBD64C] font-semibold rounded-lg transition-all duration-300 hover:bg-[#E99C37]/10"
                >
                  Quiero ser Sponsor
                </button>
                <button
                  onClick={handleWaitlistClick}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#E99C37] to-[#D4A83D] hover:from-[#C47F2A] hover:to-[#E99C37] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
                >
                  Reserva tu lugar
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-[#FBD64C]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0f0a05]/98 backdrop-blur-lg border-t border-orange-500/10 animate-slide-up">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-[#FBD64C] hover:bg-orange-500/5 rounded-lg transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}

              {/* Mobile Dual CTA */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={handleSponsorClick}
                  className="block w-full px-4 py-3 border border-[#E99C37]/50 text-[#E99C37] font-semibold rounded-lg transition-all duration-300 hover:bg-[#E99C37]/10"
                >
                  Quiero ser Sponsor
                </button>
                <button
                  onClick={handleWaitlistClick}
                  className="block w-full px-4 py-3 bg-gradient-to-r from-[#E99C37] to-[#D4A83D] hover:from-[#C47F2A] hover:to-[#E99C37] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/25"
                >
                  Reserva tu lugar
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-0"></div>
    </>
  )
}
