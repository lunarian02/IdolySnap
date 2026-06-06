'use client'

import { useEffect, useRef, useState } from 'react'

const processSteps = [
  {
    step: '01',
    icon: '🖼️',
    title: 'Upload',
    desc: 'Any photo you love',
    color: 'pink',
  },
  {
    step: '02',
    icon: '⚙️',
    title: 'AI Generates',
    desc: 'AI figurine from every detail',
    color: 'lavender',
  },
  {
    step: '03',
    icon: '✦',
    title: 'Figurine Ready',
    desc: 'AI-crafted. Collector-grade.',
    color: 'purple',
  },
  {
    step: '04',
    icon: '📸',
    title: 'Snap Together',
    desc: 'Your story, every day',
    color: 'pink',
  },
]

const colorMap = {
  pink: {
    border: 'border-pink-400/40',
    badge: 'bg-pink-400/10 border-pink-400/30 text-pink-400',
    glow: 'shadow-[0_0_30px_rgba(244,114,182,0.2)]',
    dot: 'bg-pink-400',
    connector: 'from-pink-400/40 to-lavender/20',
  },
  lavender: {
    border: 'border-lavender/40',
    badge: 'bg-lavender/10 border-lavender/30 text-lavender',
    glow: 'shadow-[0_0_30px_rgba(192,132,252,0.2)]',
    dot: 'bg-lavender',
    connector: 'from-lavender/40 to-purple-400/20',
  },
  purple: {
    border: 'border-purple-400/40',
    badge: 'bg-purple-400/10 border-purple-400/30 text-purple-400',
    glow: 'shadow-[0_0_30px_rgba(124,58,237,0.2)]',
    dot: 'bg-purple-400',
    connector: 'from-purple-400/40 to-pink-400/20',
  },
}

export default function IdolTeaserSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-pink-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-lavender text-sm font-medium tracking-widest uppercase mb-3 block">
            ✦ How the Magic Happens
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            From photo to{' '}
            <span className="gradient-text">reality.</span>
          </h2>
          <p className="text-[#d4a5f5] text-lg max-w-xl mx-auto">
            One upload is all it takes. Our AI sculpts every detail into a figurine that feels almost too real.
          </p>
        </div>

        {/* Process flow — desktop horizontal */}
        <div className="hidden md:flex items-center justify-center gap-0">
          {processSteps.map((step, i) => {
            const colors = colorMap[step.color as keyof typeof colorMap]
            const isLast = i === processSteps.length - 1
            return (
              <div key={step.step} className="flex items-center">
                {/* Card */}
                <div
                  className={`
                    flex flex-col items-center gap-3 w-48
                    transition-all duration-700
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  `}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Icon circle */}
                  <div className={`
                    w-20 h-20 rounded-full border-2 ${colors.border} ${colors.glow}
                    flex items-center justify-center text-3xl
                    bg-[#08000f] relative
                  `}>
                    {step.icon}
                    {/* Step badge */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full border text-[10px] font-black flex items-center justify-center ${colors.badge}`}>
                      {step.step}
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-white font-bold text-base mb-1">{step.title}</p>
                    <p className="text-white/40 text-xs leading-snug">{step.desc}</p>
                  </div>
                </div>

                {/* Connector arrow */}
                {!isLast && (
                  <div
                    className={`
                      flex items-center mx-2 transition-all duration-700
                      ${visible ? 'opacity-100' : 'opacity-0'}
                    `}
                    style={{ transitionDelay: `${i * 120 + 60}ms` }}
                  >
                    <div className="w-10 h-px bg-gradient-to-r from-pink-400/40 to-purple-400/40" />
                    <div className="text-white/20 text-xs">▶</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Process flow — mobile vertical */}
        <div className="md:hidden flex flex-col items-center gap-4">
          {processSteps.map((step, i) => {
            const colors = colorMap[step.color as keyof typeof colorMap]
            const isLast = i === processSteps.length - 1
            return (
              <div key={step.step} className="flex flex-col items-center w-full max-w-xs">
                <div
                  className={`
                    flex items-center gap-4 w-full glass rounded-2xl p-4 border ${colors.border}
                    transition-all duration-700
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`
                    w-14 h-14 rounded-full border ${colors.border}
                    flex items-center justify-center text-2xl flex-shrink-0 bg-[#08000f]
                  `}>
                    {step.icon}
                  </div>
                  <div>
                    <div className={`text-xs font-bold tracking-widest mb-0.5 ${colors.badge.split(' ').find(c => c.startsWith('text-'))}`}>
                      STEP {step.step}
                    </div>
                    <p className="text-white font-bold">{step.title}</p>
                    <p className="text-white/40 text-xs">{step.desc}</p>
                  </div>
                </div>
                {!isLast && (
                  <div className="text-white/20 text-lg my-1">↓</div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom highlight quote */}
        <div
          className={`text-center mt-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '520ms' }}
        >
          <div className="inline-block glass rounded-2xl border border-pink-400/20 px-8 py-5 max-w-lg">
            <p className="text-white/70 text-base leading-relaxed">
              &ldquo;It looks so real, I had to do a double take.&rdquo;
            </p>
            <p className="text-pink-400/60 text-xs mt-2 tracking-wide">— Early access tester</p>
          </div>
        </div>
      </div>
    </section>
  )
}
