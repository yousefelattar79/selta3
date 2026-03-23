"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const aiCoreRef = useRef<HTMLDivElement>(null)
  const aiCoreWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Interactive 3D rotation on mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!aiCoreRef.current || !aiCoreWrapperRef.current) return
    const rect = aiCoreWrapperRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 20
    const y = (e.clientY - rect.top - rect.height / 2) / 20
    aiCoreRef.current.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!aiCoreRef.current) return
    aiCoreRef.current.style.transform = 'rotateX(0) rotateY(0)'
  }, [])

  const handleBookDemo = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleExplore = () => {
    const solutionSection = document.getElementById('solution')
    if (solutionSection) {
      solutionSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Grid Background */}
      <div className="grid-bg absolute inset-0" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-400">AI-Powered Business Automation</span>
          </div>
          
          {/* Headline */}
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 ${mounted ? 'animate-slide-up' : 'opacity-0'}`} 
            style={{ animationDelay: '0.1s', fontFamily: 'var(--font-display)' }}
          >
            <span className="gradient-text">Smarter Conversations.</span>
            <br />
            <span className="text-white">More Revenue.</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className={`text-xl text-gray-400 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0 ${mounted ? 'animate-slide-up' : 'opacity-0'}`} 
            style={{ animationDelay: '0.2s' }}
          >
            AI-powered automation systems eliminating missed leads and scaling business communication 24/7.
          </p>
          
          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${mounted ? 'animate-slide-up' : 'opacity-0'}`} 
            style={{ animationDelay: '0.3s' }}
          >
            <Button 
              size="lg" 
              onClick={handleBookDemo}
              className="magnetic-btn bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-10 py-6 text-base font-semibold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleExplore}
              className="border-violet-500/40 text-violet-400 hover:bg-violet-500/10 hover:border-violet-500 px-10 py-6 text-base rounded-full transition-all duration-300"
            >
              Explore the System
            </Button>
          </div>
        </div>
        
        {/* 3D AI Core - Interactive */}
        <div 
          className={`flex justify-center lg:justify-end ${mounted ? 'animate-slide-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <div 
            ref={aiCoreWrapperRef}
            className="ai-core-container relative w-[400px] h-[400px] cursor-pointer"
            style={{ perspective: '1000px' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              ref={aiCoreRef}
              className="ai-core absolute inset-0 transition-transform duration-150"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Orbital Rings */}
              <div 
                className="core-ring absolute inset-0 rounded-full border border-blue-500/30"
                style={{ 
                  transform: 'rotateX(70deg)', 
                  animation: 'ringRotate 20s linear infinite'
                }}
              />
              <div 
                className="core-ring absolute rounded-full border border-violet-500/40"
                style={{ 
                  inset: '30px',
                  transform: 'rotateX(70deg) rotateZ(60deg)', 
                  animation: 'ringRotate 15s linear infinite reverse'
                }}
              />
              <div 
                className="core-ring absolute rounded-full border border-blue-400/30"
                style={{ 
                  inset: '60px',
                  transform: 'rotateX(70deg) rotateZ(120deg)', 
                  animation: 'ringRotate 25s linear infinite'
                }}
              />
              
              {/* Core Sphere */}
              <div 
                className="absolute rounded-full"
                style={{ 
                  inset: '100px',
                  background: 'radial-gradient(circle at 30% 30%, rgba(96, 165, 250, 0.4), rgba(139, 92, 246, 0.3) 40%, rgba(59, 130, 246, 0.2) 60%, transparent 70%)',
                  boxShadow: '0 0 60px rgba(59, 130, 246, 0.4), 0 0 120px rgba(139, 92, 246, 0.3), inset 0 0 60px rgba(96, 165, 250, 0.2)',
                  animation: 'spherePulse 4s ease-in-out infinite'
                }}
              />
              
              {/* Core Center */}
              <div 
                className="absolute rounded-full"
                style={{ 
                  inset: '140px',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(96, 165, 250, 0.8) 30%, rgba(139, 92, 246, 0.6) 60%, transparent 70%)',
                  animation: 'centerGlow 2s ease-in-out infinite'
                }}
              />
              
              {/* Neural Lines */}
              <div 
                className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
                style={{ 
                  width: '60px', 
                  top: '50px', 
                  left: '20px', 
                  transform: 'rotate(45deg)',
                  animation: 'neuralPulse 3s ease-in-out infinite'
                }}
              />
              <div 
                className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
                style={{ 
                  width: '80px', 
                  top: '80px', 
                  right: '30px', 
                  transform: 'rotate(-30deg)',
                  animation: 'neuralPulse 3s ease-in-out infinite',
                  animationDelay: '0.5s'
                }}
              />
              <div 
                className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
                style={{ 
                  width: '50px', 
                  bottom: '60px', 
                  left: '40px', 
                  transform: 'rotate(15deg)',
                  animation: 'neuralPulse 3s ease-in-out infinite',
                  animationDelay: '1s'
                }}
              />
              <div 
                className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
                style={{ 
                  width: '70px', 
                  bottom: '40px', 
                  right: '50px', 
                  transform: 'rotate(-60deg)',
                  animation: 'neuralPulse 3s ease-in-out infinite',
                  animationDelay: '1.5s'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="scroll-indicator w-6 h-10 rounded-xl border-2 border-violet-500/40 relative">
          <div 
            className="absolute w-1 h-2 bg-violet-500 rounded-sm top-1.5 left-1/2 -translate-x-1/2"
            style={{ animation: 'scrollBounce 2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  )
}
