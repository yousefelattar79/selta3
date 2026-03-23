"use client"

import { MessageSquare, Phone, Calendar, RefreshCw, Bell, Clock } from "lucide-react"

const solutions = [
  {
    icon: MessageSquare,
    title: "AI Chat Automation",
    description: "Intelligent conversational AI that handles inquiries, qualifies leads, and engages customers around the clock.",
    status: "Always Active",
    color: "from-blue-500 to-cyan-500",
    statusColor: "text-blue-400"
  },
  {
    icon: Phone,
    title: "AI Voice Handling",
    description: "Natural voice AI that answers calls, books appointments, and provides information with human-like clarity.",
    status: "Natural Speech",
    color: "from-violet-500 to-purple-500",
    statusColor: "text-violet-400"
  },
  {
    icon: Calendar,
    title: "Smart Booking Engine",
    description: "Automated scheduling that syncs with your calendar, eliminates double-bookings, and maximizes capacity.",
    status: "Auto-Optimized",
    color: "from-emerald-500 to-teal-500",
    statusColor: "text-emerald-400"
  },
  {
    icon: RefreshCw,
    title: "Intelligent Rescheduling",
    description: "Proactive AI that detects cancellations and automatically offers alternatives to recover appointments.",
    status: "Recovery Mode",
    color: "from-amber-500 to-orange-500",
    statusColor: "text-amber-400"
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description: "Multi-channel reminder sequences via SMS, email, and WhatsApp that dramatically reduce no-shows.",
    status: "Multi-Channel",
    color: "from-pink-500 to-rose-500",
    statusColor: "text-pink-400"
  },
  {
    icon: Clock,
    title: "24/7 Client Engagement",
    description: "Continuous engagement that nurtures leads, answers questions, and converts prospects while you sleep.",
    status: "Never Offline",
    color: "from-indigo-500 to-blue-500",
    statusColor: "text-indigo-400"
  }
]

export function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden" id="solution" style={{ background: '#030712' }}>
      {/* Section glow line */}
      <div className="section-glow top-0" />
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-blue-400 text-sm mb-4">
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Your <span className="gradient-text">AI-Powered</span> Command Center
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive suite of intelligent automation modules working in harmony.
          </p>
        </div>
        
        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title}
              className="tilt-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tilt-card-inner glass-card rounded-3xl p-8 h-full group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-bold text-xl mb-3 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {solution.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mt-6 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${solution.statusColor.replace('text-', 'bg-')} animate-pulse`} />
                  <span className={`text-sm ${solution.statusColor}`}>{solution.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
