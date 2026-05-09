'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'About', href: '/about#about-hero' },
  { label: 'Courses', href: '/courses#courses-hero' },
  { label: 'Volunteer', href: '/volunteer#volunteer-hero' },
  { label: 'Gallery', href: '/gallery#gallery-hero' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToEnquiry = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById('enquiry')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#enquiry'
    }
  }

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-[#050F18]/80 backdrop-blur-md shadow-lg' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/#hero" 
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-[#7ECDC8] rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-2xl">🌊</span>
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            KAYAKBOY SURF CLUB
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                className="relative group py-2"
              >
                <span className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive ? 'text-[#7ECDC8]' : 'text-white hover:text-[#7ECDC8]'
                }`}>
                  {link.label}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#7ECDC8] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
          <Link
            href="/#enquiry"
            onClick={scrollToEnquiry}
            className="bg-white text-[#050F18] font-bold px-8 py-3.5 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:scale-[1.05] shadow-xl hover:bg-[#7ECDC8] hover:text-[#050F18]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex flex-col items-center justify-center gap-1.5 transition-all"
        >
          <div className={`w-5 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-[#050F18] z-[-1] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-3xl font-bold uppercase tracking-tighter transition-colors ${
                  pathname === link.href ? 'text-[#7ECDC8]' : 'text-white hover:text-[#7ECDC8]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#enquiry"
              onClick={scrollToEnquiry}
              className="mt-4 bg-white text-[#050F18] font-bold px-10 py-5 rounded-full text-sm uppercase tracking-widest hover:scale-110 transition-all shadow-2xl"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
