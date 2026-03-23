"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MapPin, Send, ArrowRight, Linkedin, Instagram, Facebook } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Using Formspree for email submission
      const response = await fetch("https://formspree.io/f/xyzgbpnw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Demo Request from ${formData.name} - ${formData.company || 'Individual'}`
        })
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", company: "", message: "" })
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
    <section className="relative py-24 overflow-hidden" id="contact">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm mb-4">
            Get Started
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Book a demo today and discover how AI can accelerate your growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Book a Demo
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Company</label>
                <Input
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <textarea
                  placeholder="Tell us about your automation needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground rounded-full py-6 font-semibold disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5" />
              </Button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-center text-sm">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center text-sm">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>
          
          {/* Contact info */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a href="mailto:support@seltaai.com" className="text-muted-foreground hover:text-primary transition-colors">
                      support@seltaai.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <span className="text-muted-foreground">
                      Remotely serving UAE &amp; GCC
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                Connect With Us
              </h3>
              <div className="space-y-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/selta-ai-1a63083b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-[#0A66C2]/10 group transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Connect with us</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[#0A66C2] group-hover:translate-x-1 transition-all duration-300" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/selta.ai?igsh=MXN3MTJlczg2OXFwbw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-[#E4405F]/10 group transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E4405F]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-6 h-6 text-[#E4405F]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">Instagram</div>
                    <div className="text-sm text-muted-foreground">Follow our updates</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[#E4405F] group-hover:translate-x-1 transition-all duration-300" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1AbwkGZZEa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-[#1877F2]/10 group transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1877F2]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Facebook className="w-6 h-6 text-[#1877F2]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">Facebook</div>
                    <div className="text-sm text-muted-foreground">Like our page</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[#1877F2] group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
