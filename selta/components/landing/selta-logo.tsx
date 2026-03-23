"use client"

// Minimalist Selta AI Logo - "S" morphing into clock/hourglass fused with AI neural network lines
export function SeltaLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main S shape that morphs into hourglass/clock */}
      <path
        d="M32 12C32 12 28 8 22 8C16 8 12 12 12 16C12 20 16 22 22 24C28 26 32 28 32 32C32 36 28 40 22 40C16 40 12 36 12 36"
        stroke="#0A2540"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Clock center dot */}
      <circle cx="22" cy="24" r="2" fill="#0A2540" />
      
      {/* Neural network nodes - top */}
      <circle cx="32" cy="12" r="2.5" fill="#0A2540" />
      <circle cx="12" cy="16" r="2" fill="#0A2540" />
      
      {/* Neural network nodes - bottom */}
      <circle cx="12" cy="36" r="2.5" fill="#0A2540" />
      <circle cx="32" cy="32" r="2" fill="#0A2540" />
      
      {/* Neural connection lines - subtle circuit paths */}
      <path
        d="M34.5 12L40 8M34.5 12L40 16"
        stroke="#0A2540"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M9.5 36L4 40M9.5 36L4 32"
        stroke="#0A2540"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      
      {/* Clock hands - subtle hourglass reference */}
      <path
        d="M22 24L26 20"
        stroke="#0A2540"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M22 24L22 28"
        stroke="#0A2540"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Additional neural nodes for circuit feel */}
      <circle cx="40" cy="8" r="1.5" fill="#0A2540" opacity="0.7" />
      <circle cx="40" cy="16" r="1.5" fill="#0A2540" opacity="0.7" />
      <circle cx="4" cy="40" r="1.5" fill="#0A2540" opacity="0.7" />
      <circle cx="4" cy="32" r="1.5" fill="#0A2540" opacity="0.7" />
    </svg>
  )
}

// Light version for dark backgrounds
export function SeltaLogoLight({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main S shape that morphs into hourglass/clock */}
      <path
        d="M32 12C32 12 28 8 22 8C16 8 12 12 12 16C12 20 16 22 22 24C28 26 32 28 32 32C32 36 28 40 22 40C16 40 12 36 12 36"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Clock center dot */}
      <circle cx="22" cy="24" r="2" fill="currentColor" />
      
      {/* Neural network nodes - top */}
      <circle cx="32" cy="12" r="2.5" fill="currentColor" />
      <circle cx="12" cy="16" r="2" fill="currentColor" />
      
      {/* Neural network nodes - bottom */}
      <circle cx="12" cy="36" r="2.5" fill="currentColor" />
      <circle cx="32" cy="32" r="2" fill="currentColor" />
      
      {/* Neural connection lines - subtle circuit paths */}
      <path
        d="M34.5 12L40 8M34.5 12L40 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M9.5 36L4 40M9.5 36L4 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      
      {/* Clock hands - subtle hourglass reference */}
      <path
        d="M22 24L26 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M22 24L22 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Additional neural nodes for circuit feel */}
      <circle cx="40" cy="8" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="40" cy="16" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="4" cy="40" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="4" cy="32" r="1.5" fill="currentColor" opacity="0.7" />
    </svg>
  )
}
