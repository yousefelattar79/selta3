"use client"

import { DollarSign, Zap, Users, ClipboardCheck } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description: "Capture every lead, convert more prospects, and maximize the value of every customer interaction through intelligent automation.",
    highlight: "Increased Conversions",
    color: "from-emerald-500 to-teal-500",
    textColor: "text-emerald-400"
  },
  {
    icon: Zap,
    title: "Operational Efficiency",
    description: "Free your team from repetitive tasks. AI handles the routine so your staff can focus on high-value activities that drive growth.",
    highlight: "Time Reclaimed",
    color: "from-blue-500 to-cyan-500",
    textColor: "text-blue-400"
  },
  {
    icon: Users,
    title: "Consistent Client Engagement",
    description: "Every client receives prompt, professional responses 24/7. No more missed calls, delayed replies, or inconsistent service quality.",
    highlight: "Always Available",
    color: "from-violet-500 to-purple-500",
    textColor: "text-violet-400"
  },
  {
    icon: ClipboardCheck,
    title: "Reduced Administrative Load",
    description: "Automate booking, reminders, rescheduling, and follow-ups. Your administrative overhead drops dramatically.",
    highlight: "Streamlined Ops",
    color: "from-amber-500 to-orange-500",
    textColor: "text-amber-400"
  }
]

export function BenefitsSection() {
  return (
    <section className="relative py-32 overflow-hidden" id="benefits" style={{ background: '#030712' }}>
      {/* Section glow */}
      <div className="section-glow top-0" />
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-emerald-400 text-sm mb-4">
            Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Real <span className="gradient-text">Business Impact</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Measurable improvements across every dimension of your operations.
          </p>
        </div>
        
        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="tilt-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tilt-card-inner glass-card rounded-3xl p-8 flex items-start gap-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color.replace('from-', 'from-').replace(' to-', '/20 to-')}/20 flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className={`w-10 h-10 ${benefit.textColor}`} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-1 bg-gradient-to-r ${benefit.color} rounded-full`} />
                      <span className={`text-sm ${benefit.textColor}`}>{benefit.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
