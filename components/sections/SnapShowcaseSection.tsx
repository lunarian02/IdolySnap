'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const snaps = [
  {
    src: '/snap-beach.png',
    tag: '🏖️ Summer Getaway',
    desc: 'Beach day with your figurine',
    color: 'from-sky-400/20 to-cyan-500/10',
    border: 'border-sky-400/30',
    textColor: 'text-sky-300',
    dotColor: 'bg-sky-400',
  },
  {
    src: '/snap-paris.png',
    tag: '🗺️ Paris',
    desc: 'The city of lights, just the two of you',
    color: 'from-blue-400/20 to-indigo-500/10',
    border: 'border-blue-400/30',
    textColor: 'text-blue-300',
    dotColor: 'bg-blue-400',
  },
  {
    src: '/snap-palace.png',
    tag: '🏯 Gyeongbokgung',
    desc: 'Historic moments, timeless together',
    color: 'from-amber-400/20 to-yellow-500/10',
    border: 'border-amber-400/30',
    textColor: 'text-amber-300',
    dotColor: 'bg-amber-400',
  },
  {
    src: '/snap-cinema.jpg',
    tag: '🎬 Movie Night',
    desc: 'Popcorn and perfect company',
    color: 'from-rose-400/20 to-red-500/10',
    border: 'border-rose-400/30',
    textColor: 'text-rose-300',
    dotColor: 'bg-rose-400',
  },
  {
    src: '/snap-birthday.jpg',
    tag: '🎂 Birthday Surprise',
    desc: 'Your idol shows up for your big day',
    color: 'from-yellow-400/20 to-orange-500/10',
    border: 'border-yellow-400/30',
    textColor: 'text-yellow-300',
    dotColor: 'bg-yellow-400',
  },
  {
    src: '/snap-park.jpg',
    tag: '🌿 City Park Stroll',
    desc: 'Evening walk — just the two of you',
    color: 'from-emerald-400/20 to-green-500/10',
    border: 'border-emerald-400/30',
    textColor: 'text-emerald-300',
    dotColor: 'bg-emerald-400',
  },
  {
    src: '/snap-tokyo.png',
    tag: '🗼 Tokyo Tower',
    desc: 'Iconic city views with your idol',
    color: 'from-red-400/20 to-orange-500/10',
    border: 'border-red-400/30',
    textColor: 'text-red-300',
    dotColor: 'bg-red-400',
  },
  {
    src: '/snap-station.png',
    tag: '🚄 Train Station',
    desc: 'Every journey starts with your idol',
    color: 'from-slate-400/20 to-gray-500/10',
    border: 'border-slate-400/30',
    textColor: 'text-slate-300',
    dotColor: 'bg-slate-400',
  },
  {
    src: '/snap-airport.png',
    tag: '✈️ Airport',
    desc: 'Departure lounge, best companion',
    color: 'from-cyan-400/20 to-sky-500/10',
    border: 'border-cyan-400/30',
    textColor: 'text-cyan-300',
    dotColor: 'bg-cyan-400',
  },
  {
    src: '/snap-concert.jpg',
    tag: '🎶 Concert',
    desc: 'Front row energy, always',
    color: 'from-fuchsia-400/20 to-purple-500/10',
    border: 'border-fuchsia-400/30',
    textColor: 'text-fuchsia-300',
    dotColor: 'bg-fuchsia-400',
  },
  {
    src: '/snap-hiking.png',
    tag: '🏔️ Mountain Hike',
    desc: 'Summit together, memories forever',
    color: 'from-green-400/20 to-emerald-500/10',
    border: 'border-green-400/30',
    textColor: 'text-green-300',
    dotColor: 'bg-green-400',
  },
  {
    src: '/snap-gym.png',
    tag: '💪 Gym Session',
    desc: 'Workout motivation, figurine style',
    color: 'from-pink-400/20 to-rose-500/10',
    border: 'border-pink-400/30',
    textColor: 'text-pink-300',
    dotColor: 'bg-pink-400',
  },
  {
    src: '/snap-fansign.jpg',
    tag: '🎤 Fan Sign',
    desc: 'Real idol, real moment — figurine included',
    color: 'from-purple-400/20 to-pink-500/10',
    border: 'border-purple-400/30',
    textColor: 'text-purple-300',
    dotColor: 'bg-purple-400',
  },
]

export default function SnapShowcaseSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-lavender text-sm font-medium tracking-widest uppercase mb-3 block">
            ✦ Daily Diary
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            365 days.{' '}
            <span className="gradient-text">One story.</span>
          </h2>
          <p className="text-[#d4a5f5] text-lg max-w-xl mx-auto">
            Every day is a new page. Snap with your idol wherever you are — and watch your diary come to life.
          </p>
        </div>

        {/* Desktop: horizontal scroll carousel */}
        <div className={`hidden md:block relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Right fade hint */}
          <div className="absolute right-0 top-0 bottom-4 w-24 bg-gradient-to-l from-[#08000f] to-transparent pointer-events-none z-10" />

          <div className="flex items-end gap-4 overflow-x-auto pb-4 pl-2 pr-20 scrollbar-hide snap-x snap-mandatory">
            {snaps.map((snap, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center snap-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`
                  relative w-[180px] rounded-[28px] border-[3px] overflow-hidden bg-black
                  ${snap.border} shadow-2xl
                  hover:scale-[1.03] transition-transform duration-300
                `}>
                  <div className="relative w-full" style={{ height: '340px' }}>
                    <Image
                      src={snap.src}
                      alt={snap.tag}
                      fill
                      className="object-cover object-center"
                      sizes="180px"
                    />
                  </div>
                  <div className={`px-3 py-2.5 bg-gradient-to-br ${snap.color} bg-[#0d0018]/90 border-t ${snap.border}`}>
                    <p className={`text-[10px] font-bold tracking-widest uppercase ${snap.textColor} mb-0.5`}>{snap.tag}</p>
                    <p className="text-white/50 text-[10px]">{snap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: horizontal snap scroll with peek */}
        <div className={`md:hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-8">
            {snaps.map((snap, i) => (
              <div
                key={i}
                className="flex-shrink-0 snap-center w-[72vw] max-w-[260px]"
              >
                <div className={`relative rounded-[28px] border-[3px] overflow-hidden ${snap.border} bg-black shadow-xl`}>
                  <div className="relative w-full" style={{ height: '420px' }}>
                    <Image
                      src={snap.src}
                      alt={snap.tag}
                      fill
                      className="object-cover object-center"
                      sizes="260px"
                    />
                  </div>
                  <div className={`px-4 py-3 bg-gradient-to-br ${snap.color} bg-[#0d0018]/90 border-t ${snap.border}`}>
                    <p className={`text-[11px] font-bold tracking-widest uppercase ${snap.textColor} mb-0.5`}>
                      {snap.tag}
                    </p>
                    <p className="text-white/50 text-[11px]">{snap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Hint text */}
          <p className="text-center text-white/20 text-xs mt-4 tracking-wide">swipe to see more</p>
        </div>

        {/* Bottom label */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-white/30 text-sm">
            One snap a day · Your story, forever · Yours to keep
          </p>
        </div>

      </div>
    </section>
  )
}
