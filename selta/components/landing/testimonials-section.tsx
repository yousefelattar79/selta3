"use client"

import { TrendingUp, Clock, Users } from "lucide-react"

const caseStudies = [
  {
    clinic: "Pearl Dental Clinic",
    location: "Deira",
    icon: "PD",
    metrics: [
      { label: "WhatsApp bot bookings", value: "23" },
      { label: "Setup time", value: "48 hours" },
      { label: "Manual work reduced", value: "85%" }
    ]
  },
  {
    clinic: "Glow Aesthetics",
    location: "Al Barsha",
    icon: "GA",
    metrics: [
      { label: "After-hours calls/day", value: "17" },
      { label: "Reception hours saved/week", value: "12" },
      { label: "No-shows reduced", value: "28%" }
    ]
  },
  {
    clinic: "SmileCare Dental",
    location: "Al Ain",
    icon: "SC",
    metrics: [
      { label: "Instagram DM appointments (Month 1)", value: "14" },
      { label: "Coverage", value: "24/7" },
      { label: "Lead capture vs manual", value: "3x" }
    ]
  }
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 overflow-hidden" id="testimonials">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm mb-4">
            Real Results
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="gradient-text">Live Deployments</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Beta program metrics from UAE clinics
          </p>
        </div>
        
        {/* Case studies grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.clinic}
              className="glass-card rounded-2xl p-8 relative group hover:border-primary/40 transition-all duration-300"
            >
              {/* Clinic header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {study.icon}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">{study.clinic}</div>
                  <div className="text-sm text-muted-foreground">{study.location}</div>
                </div>
              </div>
              
              {/* Metrics */}
              <div className="space-y-4">
                {study.metrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                    <span className="text-muted-foreground text-sm">{metric.label}</span>
                    <span className="font-bold text-primary text-lg">{metric.value}</span>
                  </div>
                ))}
              </div>
              
              {/* Hover effect indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="glass px-6 py-3 rounded-full text-sm text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              48-hour setup
            </div>
            <div className="glass px-6 py-3 rounded-full text-sm text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              24/7 Coverage
            </div>
            <div className="glass px-6 py-3 rounded-full text-sm text-muted-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              No extra staff needed
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
