"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mouse } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleBookDemo = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-globe.png"
          alt="Cosmic background with Earth globe and Selta AI logo"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B14]/90 via-[#080B14]/50 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
            <span className="text-sm text-[#94A3B8]">AI-Powered Business Automation</span>
          </div>
          
          {/* Headline */}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 ${mounted ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">Smarter</span>
            <br />
            <span className="gradient-text">Conversations.</span>
            <br />
            <span className="text-white">More Revenue.</span>
          </h1>
          
          {/* Subheadline */}
          <p className={`text-lg md:text-xl text-[#94A3B8] max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0 ${mounted ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            AI-powered automation systems eliminating missed leads and scaling business communication 24/7.
          </p>
          
          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${mounted ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              onClick={handleBookDemo}
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50 transition-all duration-300 hover:scale-105"
            >
              Smarter AI Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-[#3B82F6]/40 text-[#3B82F6] hover:bg-[#3B82F6]/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Explore Services
            </Button>
          </div>
        </div>
        
        {/* Right side empty - image already shows the globe */}
        <div className="hidden lg:block" />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-8 h-12 rounded-full border-2 border-[#3B82F6]/40 flex justify-center pt-2 bg-[#0d1117]/50 backdrop-blur-sm">
          <Mouse className="w-4 h-4 text-[#3B82F6] animate-pulse" />
        </div>
      </div>
    </section>
  )
}
