'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Upload a Photo',
    description: 'Pick any photo of your favorite idol — an official album shot, a fancam still, anything you love. Drop it in and let our AI do its magic.',
    icon: '🖼️',
    color: 'pink',
  },
  {
    number: '02',
    title: 'We Craft Your Figurine',
    description: 'Our AI analyzes every detail — face, outfit, pose — and generates a stunning, collector-grade AI figurine.',
    icon: '✦',
    color: 'lavender',
  },
  {
    number: '03',
    title: 'Snap. Every Day.',
    description: 'One photo a day — anywhere, anytime. Watch your diary fill up, your streak grow, and your story with your idol unfold.',
    icon: '📸',
    color: 'purple',
  },
]

const colorMap = {
  pink: {
    ring: 'border-pink-400/40 text-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.3)]',
    dot: 'bg-pink-400',
    line: 'from-pink-400/40',
    badge: 'bg-pink-400/10 text-pink-400',
  },
  lavender: {
    ring: 'border-lavender/40 text-lavender shadow-[0_0_20px_rgba(192,132,252,0.3)]',
    dot: 'bg-lavender',
    line: 'from-lavender/40',
    badge: 'bg-lavender/10 text-lavender',
  },
  purple: {
    ring: 'border-purple-400/40 text-purple-400 shadow-[0_0_20px_rgba(124,58,237,0.3)]',
    dot: 'bg-purple-400',
    line: 'from-purple-400/40',
    badge: 'bg-purple-400/10 text-purple-400',
  },
}

export default function HowItWorksSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden" ref={ref}>
      {/* BG accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-pink-400/20 via-purple-400/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-pink-400 text-sm font-medium tracking-widest uppercase mb-3 block">
            ✦ How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple.{' '}
            <span className="gradient-text">Daily. Forever yours.</span>
          </h2>
          <p className="text-[#d4a5f5] text-lg max-w-xl mx-auto">
            Three steps to starting your daily idol diary.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-400/20 via-purple-400/20 to-transparent md:-translate-x-px pointer-events-none hidden sm:block" />

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => {
              const colors = colorMap[step.color as keyof typeof colorMap]
              const isEven = i % 2 === 0

              return (
                <div
                  key={step.number}
                  className={`
                    flex flex-col md:flex-row items-center gap-8 md:gap-16
                    ${!isEven ? 'md:flex-row-reverse' : ''}
                    transition-all duration-700
                    ${visible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                    }
                  `}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-inherit`}>
                    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 mb-3 ${colors.badge}`}>
                      <span className="text-xs font-bold tracking-widest">STEP {step.number}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed max-w-sm mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Center glow circle */}
                  <div className="flex-shrink-0 relative">
                    <div
                      className={`
                        w-20 h-20 rounded-full border-2 flex items-center justify-center
                        text-3xl font-black
                        ${colors.ring}
                        animate-pulse-glow
                        relative z-10 bg-[#08000f]
                      `}
                    >
                      {step.icon}
                    </div>
                    {/* Orbit dot */}
                    <div
                      className={`
                        absolute top-1/2 left-1/2 w-3 h-3 rounded-full ${colors.dot}
                        opacity-60
                      `}
                      style={{
                        animation: `orbit ${4 + i}s linear infinite`,
                        transformOrigin: '0 0',
                      }}
                    />
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="flex-1 hidden md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
