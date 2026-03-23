"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mouse } from "lucide-react"

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 cosmic-bg" id="hero">
      {/* Starfield overlay */}
      <div className="absolute inset-0 cosmic-bg" />
      
      {/* Nebula effects */}
      <div className="nebula nebula-blue w-[600px] h-[600px] top-1/4 right-0 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="nebula nebula-purple w-[500px] h-[500px] bottom-1/4 left-0 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">AI-Powered Business Automation</span>
          </div>
          
          {/* Headline */}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 ${mounted ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s', fontFamily: 'var(--font-display)' }}>
            <span className="gradient-text">Smarter</span>
            <br />
            <span className="gradient-text">Conversations.</span>
            <br />
            <span className="text-foreground">More Revenue.</span>
          </h1>
          
          {/* Subheadline */}
          <p className={`text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0 ${mounted ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
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
        
        {/* 3D Planet Visual with Orbital Logo */}
        <div className={`flex justify-center lg:justify-end ${mounted ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
            {/* Outer orbital rings */}
            <div className="absolute inset-0 orbital-ring" style={{ animationDuration: '25s' }} />
            <div className="absolute inset-6 orbital-ring" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
            <div className="absolute inset-12 orbital-ring" style={{ animationDuration: '30s' }} />
            <div className="absolute inset-20 orbital-ring opacity-50" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            
            {/* Orbital dots */}
            <div className="absolute inset-0 animate-rotate-slow" style={{ animationDuration: '25s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#3B82F6] rounded-full shadow-lg shadow-[#3B82F6]" />
            </div>
            <div className="absolute inset-6 animate-rotate-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#8B5CF6] rounded-full shadow-lg shadow-[#8B5CF6]" />
            </div>
            <div className="absolute inset-12 animate-rotate-slow" style={{ animationDuration: '30s' }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#3B82F6] rounded-full shadow-lg shadow-[#3B82F6]" />
            </div>
            
            {/* Planet container - 3D Earth */}
            <div className="absolute inset-[60px] md:inset-[80px] lg:inset-[100px] rounded-full overflow-hidden animate-rotate-slow planet-glow" style={{ animationDuration: '60s' }}>
              {/* Earth globe with CSS gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a4a7a] via-[#0d2847] to-[#051525]">
                {/* Continental shapes simulation */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute top-[20%] left-[30%] w-[25%] h-[20%] bg-[#2d5a3d] rounded-full blur-sm transform rotate-12" />
                  <div className="absolute top-[35%] left-[15%] w-[20%] h-[25%] bg-[#2d5a3d] rounded-full blur-sm" />
                  <div className="absolute top-[25%] right-[20%] w-[30%] h-[35%] bg-[#2d5a3d] rounded-full blur-sm transform -rotate-6" />
                  <div className="absolute bottom-[25%] left-[40%] w-[15%] h-[15%] bg-[#2d5a3d] rounded-full blur-sm" />
                </div>
                {/* Ocean shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3B82F6]/10 to-transparent" />
                {/* Atmosphere glow */}
                <div className="absolute inset-0 rounded-full shadow-inner" style={{ boxShadow: 'inset -20px -20px 60px rgba(59, 130, 246, 0.3), inset 20px 20px 60px rgba(139, 92, 246, 0.1)' }} />
              </div>
              {/* Planet atmosphere outer glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#3B82F6]/20 via-transparent to-[#8B5CF6]/10" />
            </div>
            
            {/* Central S Logo Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                {/* Glowing backdrop */}
                <div className="absolute inset-0 bg-[#3B82F6]/20 rounded-full blur-xl animate-pulse" style={{ transform: 'scale(1.5)' }} />
                
                {/* Logo container */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#1a1f2e] to-[#0d1117] border border-[#3B82F6]/30 flex items-center justify-center shadow-2xl">
                  {/* Inner glow ring */}
                  <div className="absolute inset-1 rounded-full border border-[#3B82F6]/20" />
                  
                  {/* S Logo */}
                  <svg viewBox="0 0 40 40" className="w-10 h-10 md:w-12 md:h-12">
                    <path
                      d="M28 12C28 12 25 9 20 9C15 9 12 12 12 15C12 18 15 20 20 22C25 24 28 26 28 29C28 32 25 35 20 35C15 35 12 32 12 32"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Orbital accents on logo */}
                    <circle cx="28" cy="12" r="2" fill="white" opacity="0.8" />
                    <circle cx="12" cy="32" r="2" fill="white" opacity="0.8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-[#3B82F6]/40 flex justify-center pt-2 bg-[#0d1117]/50 backdrop-blur-sm">
          <Mouse className="w-4 h-4 text-[#3B82F6] animate-pulse" />
        </div>
      </div>
    </section>
  )
}
