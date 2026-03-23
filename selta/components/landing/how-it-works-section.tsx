"use client"

import { Link, Settings, TrendingUp } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Connect",
    description: "We integrate seamlessly with your existing systems, CRM, and communication channels.",
    icon: Link,
    color: "from-blue-500 to-cyan-500",
    floatClass: "float-1"
  },
  {
    number: 2,
    title: "Automate",
    description: "Our AI learns your business processes and begins handling communications intelligently.",
    icon: Settings,
    color: "from-violet-500 to-purple-500",
    floatClass: "float-2"
  },
  {
    number: 3,
    title: "Scale",
    description: "Watch your business grow with consistent engagement and zero missed opportunities.",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500",
    floatClass: "float-3"
  }
]

export function HowItWorksSection() {
  return (
    <section className="relative py-32 overflow-hidden" id="how-it-works" style={{ background: '#030712' }}>
      {/* Section glow */}
      <div className="section-glow top-0" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full glass text-violet-400 text-sm mb-4">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Three Steps to <span className="gradient-text">Transformation</span>
          </h2>
        </div>
        
        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Flow Lines (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5">
            <div className="flow-line w-full h-full">
              <div className="flow-dot" />
            </div>
          </div>
          
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="relative inline-block mb-8">
                <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${step.color.replace('from-', 'from-').replace(' to-', '/20 to-')}/20 flex items-center justify-center mx-auto glass-card ${step.floatClass}`}>
                  <step.icon className={`w-16 h-16 ${step.color.includes('blue') ? 'text-blue-400' : step.color.includes('violet') ? 'text-violet-400' : 'text-emerald-400'}`} />
                </div>
                <div className={`absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center font-bold text-lg text-white`} style={{ fontFamily: 'var(--font-display)' }}>
                  {step.number}
                </div>
              </div>
              <h3 className="font-bold text-2xl mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                {step.title}
              </h3>
              <p className="text-gray-400 max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
