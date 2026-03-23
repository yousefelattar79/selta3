"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://formspree.io/f/xyzgbpnw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Contact from ${formData.name}`
        })
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative py-24 overflow-hidden" id="contact" style={{ background: 'linear-gradient(180deg, #080B14 0%, #0D1117 100%)' }}>
      {/* Background effects */}
      <div className="absolute inset-0 cosmic-bg" />
      
      {/* Nebula effects */}
      <div className="nebula nebula-blue w-[500px] h-[500px] bottom-0 right-0 animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="nebula nebula-purple w-[400px] h-[400px] top-1/4 left-0 animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      
      {/* Perspective grid floor */}
      <div className="perspective-grid" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Contact
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore, eius ut adipisicing ut ullamcorper consequat.
            </p>
            
            {/* Social icons */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/1AbwkGZZEa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#1877F2]/20 transition-colors group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-[#1877F2]" />
              </a>
              <a 
                href="https://www.instagram.com/selta.ai?igsh=MXN3MTJlczg2OXFwbw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#E4405F]/20 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-[#E4405F]" />
              </a>
              <a 
                href="https://www.linkedin.com/in/selta-ai-1a63083b4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#0A66C2]/20 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-[#0A66C2]" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#FF0000]/20 transition-colors group"
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-[#FF0000]" />
              </a>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="glass-card rounded-2xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-[#0D1117] border-[#3B82F6]/20 focus:border-[#3B82F6] text-white placeholder:text-muted-foreground rounded-lg"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-[#0D1117] border-[#3B82F6]/20 focus:border-[#3B82F6] text-white placeholder:text-muted-foreground rounded-lg"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#3B82F6]/20 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] resize-none text-white placeholder:text-muted-foreground"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-lg px-8 py-2 font-medium disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Contact"}
              </Button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-sm">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative element - similar to cursor/arrow in screenshot */}
      <div className="absolute bottom-20 right-20 hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-white/20">
          <path d="M10 50L50 10M50 10L50 40M50 10L20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
