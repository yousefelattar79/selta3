"use client"

import { Target, Users, Lightbulb, Globe } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to helping businesses save time and scale through intelligent automation."
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Every solution is tailored to your unique business needs and growth objectives."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We leverage cutting-edge AI technology to deliver solutions that stay ahead of the curve."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Remotely serving clients across UAE & GCC with world-class automation solutions."
  }
]

export function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden" id="about">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Who is <span className="gradient-text">Selta AI</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Selta AI is a forward-thinking AI automation agency dedicated to transforming how businesses 
            communicate and operate. We build intelligent systems that work around the clock, 
            ensuring you never miss a lead and your operations run seamlessly.
          </p>
        </div>
        
        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="glass-card rounded-2xl p-6 text-center group hover:border-primary/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Stats bar */}
        <div className="mt-16 glass-card rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                50+
              </div>
              <div className="text-muted-foreground text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                24/7
              </div>
              <div className="text-muted-foreground text-sm">AI Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                98%
              </div>
              <div className="text-muted-foreground text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                UAE
              </div>
              <div className="text-muted-foreground text-sm">&amp; GCC Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
