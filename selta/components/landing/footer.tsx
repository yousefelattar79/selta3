"use client"

import { useState } from "react"
import { X, Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  product: [
    { label: "Solution", href: "#solution" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Benefits", href: "#benefits" },
    { label: "Why Selta", href: "#why-selta" }
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ],
  legal: [
    { label: "Privacy Policy", modal: "privacy" },
    { label: "Terms & Conditions", modal: "terms" }
  ]
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/seltaai", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/seltaai", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/seltaai", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@seltaai", label: "YouTube" }
]

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
      content: "We use your information to:\n- Provide and improve our AI automation services\n- Communicate with you regarding inquiries or support\n- Optimize user experience and performance"
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
    
    if (href && typeof href === "string" && href.startsWith("#") && href.length > 1) {
      scrollToSection(href)
    }
  }

  const modalContent = activeModal === "privacy" ? privacyContent : termsContent

  return (
    <>
      <footer className="relative pt-20 pb-8 overflow-hidden" style={{ background: '#030712' }}>
        {/* Top border glow */}
        <div className="section-glow top-0" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-bold text-xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  Selta AI
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                AI-powered automation systems that transform the way businesses communicate, engage clients, and scale their operations 24/7.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">support@seltaai.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">+971 XX XXX XXXX</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Product */}
            <div>
              <h4 className="font-semibold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Product</h4>
              <ul className="space-y-4">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Legal</h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(undefined, link.modal)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="pt-8 border-t border-violet-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              {new Date().getFullYear()} Selta AI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveModal("privacy")}
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Privacy
              </button>
              <button
                onClick={() => setActiveModal("terms")}
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-card rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden animate-slide-up">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-violet-500/20">
              <div>
                <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {modalContent.title}
                </h2>
                <p className="text-sm text-gray-400">
                  Last updated: {modalContent.lastUpdated}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <p className="text-gray-400 mb-6">
                At Selta AI, we respect your privacy and are committed to protecting your personal information.
              </p>
              
              <div className="space-y-6">
                {modalContent.sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-white mb-2">{section.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-violet-500/20">
              <Button
                onClick={() => setActiveModal(null)}
                className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white rounded-full"
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
