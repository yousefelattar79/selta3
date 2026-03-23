"use client"

import { MessageSquare, Cog, Users, Zap, Clock, TrendingUp } from "lucide-react"

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Intelligent conversational agents that handle customer inquiries 24/7, providing instant responses and seamless support.",
    features: ["Natural language understanding", "Multi-platform integration", "Custom personality training"]
  },
  {
    icon: Cog,
    title: "Business Automation",
    description: "Streamline your workflows with AI-powered automation that eliminates repetitive tasks and boosts productivity.",
    features: ["Workflow optimization", "Task automation", "System integrations"]
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Capture and qualify leads automatically with intelligent systems that never miss an opportunity.",
    features: ["Smart lead scoring", "Automated follow-ups", "CRM integration"]
  }
]

const stats = [
  { icon: Zap, value: "500+", label: "Automations Deployed" },
  { icon: Clock, value: "24/7", label: "Always Available" },
  { icon: TrendingUp, value: "3x", label: "Average ROI Increase" }
]

export function ServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden" id="services">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Powerful <span className="gradient-text">AI Solutions</span> for Growth
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Transform your business operations with cutting-edge AI technology designed to scale.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glass-card rounded-2xl p-8 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center glass-card rounded-xl p-6">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
