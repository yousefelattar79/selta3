"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Minimalist S Logo */}
          <svg viewBox="0 0 32 32" className="w-8 h-8">
            <path
              d="M22 10C22 10 19.5 7 16 7C12.5 7 10 10 10 12.5C10 15 12.5 16.5 16 18C19.5 19.5 22 21 22 23.5C22 26 19.5 29 16 29C12.5 29 10 26 10 26"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span className="font-semibold text-lg text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Selta AI
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            onClick={() => handleNavClick("#contact")}
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-full px-6 font-medium"
          >
            Smarter AI Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-[#3B82F6]/20">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-white py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-full"
            >
              Smarter AI Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
