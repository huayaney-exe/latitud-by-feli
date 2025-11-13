'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navigation() {
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

  return (
    <>
      <nav
        className={`fixed top-[44px] left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-lg'
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
              <div className="relative h-12 w-40">
                <Image
                  src="/assets/latai-logo.png"
                  alt="LATAI Summit"
                  fill
                  className="object-contain object-left transition-opacity group-hover:opacity-80"
                  priority
                />
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-indigo-500 font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#pricing')}
                className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105"
              >
                Obtener Tickets
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
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
          <div className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-white/10 animate-slide-up">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-indigo-500 hover:bg-white/5 rounded-lg transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#pricing')}
                className="block w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-indigo-500/25"
              >
                Obtener Tickets
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-0"></div>
    </>
  )
}
