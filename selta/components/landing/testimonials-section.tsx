"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Dental Clinic Partner",
    location: "UAE",
    initials: "DC",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5
  },
  {
    id: 2,
    name: "Dental Clinic Partner",
    location: "UAE",
    initials: "DP",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5
  },
  {
    id: 3,
    name: "Dental Clinic Partner",
    location: "UAE",
    initials: "CP",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5
  },
  {
    id: 4,
    name: "Dental Clinic Partner",
    location: "UAE",
    initials: "PC",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5
  },
  {
    id: 5,
    name: "Dental Clinic Partner",
    location: "UAE",
    initials: "CD",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="relative py-24 overflow-hidden" id="testimonials" style={{ background: 'linear-gradient(180deg, #080B14 0%, #0F1629 50%, #080B14 100%)' }}>
      {/* Background effects */}
      <div className="absolute inset-0 cosmic-bg" />
      
      {/* Nebula effects */}
      <div className="nebula nebula-purple w-[400px] h-[400px] top-1/4 right-1/4 animate-pulse" style={{ animationDuration: '8s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Testimonials
          </h2>
        </div>
        
        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#3B82F6]/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#3B82F6]/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
          
          {/* Cards container */}
          <div className="overflow-hidden px-12">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial, index) => {
                const isActive = index === currentIndex
                return (
                  <div
                    key={testimonial.id}
                    className={`flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300 ${
                      isActive ? 'scale-105 z-10' : 'scale-100 opacity-70'
                    }`}
                  >
                    <div className={`glass-card rounded-2xl p-6 h-full ${isActive ? 'border-[#3B82F6]/40 shadow-lg shadow-[#3B82F6]/20' : ''}`}>
                      {/* Header with avatar */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#3B82F6]/30 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">{testimonial.initials}</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold">{testimonial.name} - {testimonial.location}</p>
                        </div>
                      </div>
                      
                      {/* Quote */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      
                      {/* Rating */}
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-[#3B82F6]' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
