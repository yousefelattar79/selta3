"use client"

import { Bot, MessageSquare, Database, Send, Play } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section className="relative py-24 overflow-hidden cosmic-bg" id="how-it-works">
      {/* Starfield */}
      <div className="absolute inset-0 cosmic-bg" />
      
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />
      
      {/* Perspective grid floor */}
      <div className="perspective-grid" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }}>
            How it Works
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            AI agent processing the customer custom-initiated Whatsapp message, encouraging efficient and fast diverse service steps.
          </p>
        </div>
        
        {/* Flow Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main flow container */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            
            {/* Left side - WhatsApp Input */}
            <div className="glass-card rounded-2xl p-6 w-full lg:w-64 text-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="text-sm text-white font-medium">WhatsApp</span>
              </div>
              <div className="glass rounded-xl p-4 text-left">
                <p className="text-xs text-muted-foreground mb-2">Customer Message</p>
                <p className="text-sm text-white">Correct user message according to WhatsApp message</p>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="hidden lg:flex items-center">
              <div className="w-12 h-px bg-gradient-to-r from-[#25D366] to-[#3B82F6]" />
              <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-[#3B82F6]" />
            </div>
            
            {/* Center - AI Agent Hub */}
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full glass flex items-center justify-center border-2 border-[#3B82F6]/30">
                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#3B82F6]/30 animate-ping" style={{ animationDuration: '2s' }} />
                
                {/* AI Bot Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 flex items-center justify-center">
                  <Bot className="w-8 h-8 md:w-10 md:h-10 text-[#3B82F6]" />
                </div>
              </div>
              <p className="text-center text-white font-medium mt-4">AI Agent</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden lg:flex items-center">
              <div className="w-12 h-px bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" />
              <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-[#8B5CF6]" />
            </div>
            
            {/* Right side - Action Steps */}
            <div className="flex flex-col gap-4 w-full lg:w-auto">
              {/* Step 1 */}
              <div className="glass-card rounded-xl p-4 flex items-start gap-4 hover:border-[#3B82F6]/40 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">AI Agent</p>
                  <p className="text-xs text-muted-foreground">Conversational agent processing semantics and responding messages</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="glass-card rounded-xl p-4 flex items-start gap-4 hover:border-[#3B82F6]/40 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center shrink-0">
                  <Database className="w-4 h-4 text-[#8B5CF6]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">AI Agent</p>
                  <p className="text-xs text-muted-foreground">Communication access, powers, and experience for consumer</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="glass-card rounded-xl p-4 flex items-start gap-4 hover:border-[#3B82F6]/40 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center shrink-0">
                  <Send className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">AI Agent</p>
                  <p className="text-xs text-muted-foreground">Dominant expert-agent connection at better living-time message</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connection lines for mobile */}
          <div className="lg:hidden flex flex-col items-center gap-2 py-4">
            <div className="w-px h-8 bg-gradient-to-b from-[#3B82F6] to-[#8B5CF6]" />
            <Play className="w-4 h-4 text-[#3B82F6] rotate-90" />
          </div>
        </div>
      </div>
    </section>
  )
}
