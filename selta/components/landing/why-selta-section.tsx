"use client"

import { Cpu, BarChart3, HeadphonesIcon, Shield } from "lucide-react"

const reasons = [
  {
    icon: Cpu,
    title: "Built for Service Businesses",
    description: "Purpose-designed for clinics, salons, agencies, and service providers who depend on appointments and client communication.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    title: "No Technical Expertise Required",
    description: "We handle the implementation, training, and maintenance. You focus on your business while we handle the technology.",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Real humans available when you need help. We're invested in your success from day one through ongoing optimization.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Shield,
    title: "Proven Results",
    description: "Join businesses already seeing 60% reduction in no-shows, 40% increase in bookings, and significant staff time savings.",
    color: "from-amber-500 to-orange-500"
  }
]

export function WhySeltaSection() {
  return (
    <section className="relative py-32 overflow-hidden" id="why-selta" style={{ background: '#030712' }}>
      {/* Section glow */}
      <div className="section-glow top-0" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-violet-400 text-sm mb-4">
            Why Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Why Choose <span className="gradient-text">Selta AI</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We&apos;re not just another automation tool. We&apos;re your growth partner.
          </p>
        </div>
        
        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="tilt-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tilt-card-inner glass-card rounded-3xl p-8 h-full group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-bold text-xl mb-3 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {reason.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
