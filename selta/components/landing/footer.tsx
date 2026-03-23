"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SeltaLogoLight } from "./selta-logo"

const footerLinks = {
  services: [
    { label: "AI Chatbots", href: "#services" },
    { label: "Automation", href: "#services" },
    { label: "Lead Generation", href: "#services" }
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ],
  legal: [
    { label: "Privacy Policy", modal: "privacy" },
    { label: "Terms & Conditions", modal: "terms" }
  ]
}

const privacyContent = {
  title: "Privacy Policy",
  lastUpdated: "2026",
  sections: [
    {
      title: "Information We Collect",
      content: "We may collect personal data such as your name, email address, phone number, and business details when you interact with our website or services."
    },
    {
      title: "How We Use Your Information",
      content: "We use your information to:\n• Provide and improve our AI automation services\n• Communicate with you regarding inquiries or support\n• Optimize user experience and performance"
    },
    {
      title: "Data Protection",
      content: "We implement appropriate security measures to protect your data from unauthorized access or disclosure."
    },
    {
      title: "Third Parties",
      content: "We do not sell or rent your personal data. Your information may only be shared with trusted tools or platforms necessary to deliver our services."
    },
    {
      title: "Cookies",
      content: "We may use cookies to enhance your browsing experience and analyze site traffic."
    },
    {
      title: "Your Rights",
      content: "You have the right to request access, correction, or deletion of your personal data."
    },
    {
      title: "Contact",
      content: "For any privacy-related questions, contact us at: support@seltaai.com"
    }
  ]
}

const termsContent = {
  title: "Terms & Conditions",
  lastUpdated: "2026",
  sections: [
    {
      title: "Use of Services",
      content: "You agree to use our services only for lawful purposes and in a way that does not violate any applicable laws or regulations."
    },
    {
      title: "Services Disclaimer",
      content: "Selta AI provides automation tools and systems designed to improve business efficiency. However, results may vary depending on your usage, business model, and external factors."
    },
    {
      title: "Payments",
      content: "All payments (if applicable) are non-refundable unless otherwise agreed in writing."
    },
    {
      title: "Limitation of Liability",
      content: "We are not responsible for any direct or indirect losses resulting from the use of our services."
    },
    {
      title: "Modifications",
      content: "We reserve the right to update or modify these terms at any time without prior notice."
    },
    {
      title: "Termination",
      content: "We may suspend or terminate access to our services if terms are violated."
    },
    {
      title: "Contact",
      content: "For any questions, contact us at: support@seltaai.com"
    }
  ]
}

export function Footer() {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null)

  const scrollToSection = (sectionId: string) => {
    // Remove the # prefix if present
    const id = sectionId.startsWith("#") ? sectionId.slice(1) : sectionId
    if (!id) return
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLinkClick = (href?: string, modal?: string) => {
    if (modal) {
      setActiveModal(modal as "privacy" | "terms")
      return
    }
    
    // Only scroll if href is a valid section ID (starts with # and has more than just #)
    if (href && typeof href === "string" && href.startsWith("#") && href.length > 1) {
      scrollToSection(href)
    }
  }

  const modalContent = activeModal === "privacy" ? privacyContent : termsContent

  return (
    <>
      <footer className="relative pt-16 pb-8 overflow-hidden">
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <SeltaLogoLight className="w-10 h-10 text-foreground" />
                <span className="font-bold text-xl text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Selta AI
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                AI-powered automation systems that transform the way businesses communicate and grow.
              </p>
              <p className="text-muted-foreground text-sm">
                support@seltaai.com
              </p>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(undefined, link.modal)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Selta AI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveModal("privacy")}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Privacy
              </button>
              <button
                onClick={() => setActiveModal("terms")}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-card rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden animate-slide-up">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/30">
              <div>
                <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  {modalContent.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Last updated: {modalContent.lastUpdated}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActiveModal(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <p className="text-muted-foreground mb-6">
                At Selta AI, we respect your privacy and are committed to protecting your personal information.
              </p>
              
              <div className="space-y-6">
                {modalContent.sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-foreground mb-2">{section.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-border/30">
              <Button
                onClick={() => setActiveModal(null)}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground rounded-full"
              >
                I Understand
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
