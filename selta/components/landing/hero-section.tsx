"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SeltaLogoLight } from "./selta-logo"

export function HeroSection() {
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    setMousePosition({ x, y })
  }
  const handleBookDemo = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-slide-up">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">AI-Powered Business Automation</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s', fontFamily: 'var(--font-display)' }}>
            <span className="gradient-text">Smarter Conversations.</span>
            <br />
            <span className="text-foreground">More Revenue.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed animate-slide-up mx-auto lg:mx-0" style={{ animationDelay: '0.2s' }}>
            AI-powered automation systems eliminating missed leads and scaling business communication 24/7.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              onClick={handleBookDemo}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary/40 text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Explore Services
            </Button>
          </div>
        </div>
        
        {/* 3D AI Core Visual */}
        <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div 
            className="relative w-80 h-80 md:w-96 md:h-96 cursor-pointer"
            style={{ perspective: '1000px' }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false)
              setMousePosition({ x: 0, y: 0 })
            }}
            onMouseMove={handleMouseMove}
          >
            <div 
              className="absolute inset-0 animate-float transition-transform duration-200 ease-out"
              style={{
                transform: isHovering 
                  ? `rotateY(${mousePosition.x * 25}deg) rotateX(${-mousePosition.y * 25}deg) scale(1.05)` 
                  : 'rotateY(0deg) rotateX(0deg) scale(1)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Outer rings */}
              <div 
                className="absolute inset-0 rounded-full border border-primary/30 animate-spin" 
                style={{ 
                  animationDuration: isHovering ? '8s' : '20s',
                  transition: 'animation-duration 0.3s ease'
                }} 
              />
              <div 
                className="absolute inset-8 rounded-full border border-accent/40 animate-spin" 
                style={{ 
                  animationDuration: isHovering ? '6s' : '15s', 
                  animationDirection: 'reverse' 
                }} 
              />
              <div 
                className="absolute inset-16 rounded-full border border-primary/30 animate-spin" 
                style={{ 
                  animationDuration: isHovering ? '10s' : '25s' 
                }} 
              />
              
              {/* Core sphere with Selta Logo */}
              <div 
                className="absolute inset-24 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-primary/20 shadow-2xl animate-pulse-glow transition-all duration-300"
                style={{
                  boxShadow: isHovering 
                    ? '0 0 60px rgba(99, 102, 241, 0.5), 0 0 100px rgba(139, 92, 246, 0.3)' 
                    : undefined
                }}
              >
                <div 
                  className="absolute inset-4 rounded-full bg-gradient-to-br from-foreground/90 via-primary/80 to-accent/60 flex items-center justify-center transition-transform duration-300"
                  style={{
                    transform: isHovering ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <SeltaLogoLight className="w-14 h-14 text-background drop-shadow-lg" />
                </div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-12 right-12 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-16 left-16 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-8 right-8 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
