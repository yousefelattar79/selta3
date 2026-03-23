"use client"

import { Phone, Settings, Rocket, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Discovery Call",
    description: "We analyze your business needs, identify automation opportunities, and create a tailored strategy."
  },
  {
    icon: Settings,
    number: "02",
    title: "Custom Setup",
    description: "Our team builds and configures your AI systems, integrating seamlessly with your existing tools."
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Optimize",
    description: "Go live with your new AI automation and continuously improve performance based on real data."
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Scale & Grow",
    description: "Watch your business grow as AI handles more tasks, freeing your team to focus on what matters."
  }
]

export function HowItWorksSection() {
  return (
    <section className="relative py-24 overflow-hidden" id="how-it-works">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm mb-4">
            The Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A simple, streamlined process to get your AI automation up and running.
          </p>
        </div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative glass-card rounded-2xl p-8 text-center group"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-sm font-bold text-primary-foreground">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {/* Arrow indicator for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 border-t-2 border-r-2 border-primary rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
