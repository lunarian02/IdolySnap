'use client'

import { useEffect, useRef, useState } from 'react'

const UploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="8.5" cy="9" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
)

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
    <path d="M12 2l2.2 6.6L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.4z" />
    <path d="M19 16l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
  </svg>
)

const CameraIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
)

const FilmIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 8h20M2 16h20M7 4v16M17 4v16" />
  </svg>
)

const JournalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
)

const features = [
  {
    icon: <UploadIcon />,
    title: 'Upload Any Photo',
    description: 'Drop in any photo of your favorite idol — from an album shoot, fancam, or official release. Our AI handles the rest.',
    gradient: 'from-pink-500/20 to-pink-400/5',
    border: 'border-pink-400/20 hover:border-pink-400/50',
    glow: 'hover:shadow-[0_8px_40px_rgba(244,114,182,0.15)]',
    accent: 'text-pink-400',
  },
  {
    icon: <SparkleIcon />,
    title: 'AI Figurine Creation',
    description: 'Our AI analyzes every feature — face, outfit, expression — and brings your idol to life as a unique AI figurine, just for you.',
    gradient: 'from-lavender/20 to-lavender/5',
    border: 'border-lavender/20 hover:border-lavender/50',
    glow: 'hover:shadow-[0_8px_40px_rgba(192,132,252,0.15)]',
    accent: 'text-lavender',
  },
  {
    icon: <CameraIcon />,
    title: 'One Snap a Day',
    description: 'One photo a day, wherever you are. Café, concert, travel — each snap adds a new page to your growing idol diary.',
    gradient: 'from-purple-500/20 to-purple-400/5',
    border: 'border-purple-400/20 hover:border-purple-400/50',
    glow: 'hover:shadow-[0_8px_40px_rgba(124,58,237,0.15)]',
    accent: 'text-purple-400',
  },
  {
    icon: <JournalIcon />,
    title: 'Journal & Streak',
    description: 'Add a caption and private journal entry to every snap. Build your daily streak and never miss a moment with your idol.',
    gradient: 'from-pink-400/20 via-purple-500/10 to-lavender/5',
    border: 'border-pink-400/20 hover:border-lavender/50',
    glow: 'hover:shadow-[0_8px_40px_rgba(192,132,252,0.15)]',
    accent: 'text-lavender',
  },
]

export default function FeaturesSection() {
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
    <section id="features" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-pink-400 text-sm font-medium tracking-widest uppercase mb-3 block">
            ✦ Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your daily ritual,{' '}
            <span className="gradient-text">elevated.</span>
          </h2>
          <p className="text-[#d4a5f5] text-lg max-w-2xl mx-auto">
            Everything you need to turn a simple daily snap into a story worth keeping.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`
                glass glass-hover rounded-2xl p-6 relative overflow-hidden cursor-default
                ${feature.border} ${feature.glow}
                transition-all duration-500
                ${visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                }
              `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card inner glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} pointer-events-none`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`mb-4 ${feature.accent} opacity-80`}>{feature.icon}</div>

                {/* Title */}
                <h3 className={`text-lg font-bold mb-2 ${feature.accent}`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner sparkle */}
              <div className="absolute top-3 right-3 text-white/10 text-lg">✦</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
