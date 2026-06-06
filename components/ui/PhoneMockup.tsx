'use client'

import Image from 'next/image'
import IdolySnapLogo from './IdolySnapLogo'

interface PhoneMockupProps {
  variant?: '2d' | '3d'
  className?: string
  imageSrc?: string   // override default image
  dayCount?: string
  label?: string
}

export default function PhoneMockup({ variant = '2d', className = '', imageSrc, dayCount, label }: PhoneMockupProps) {
  const is2D = variant === '2d'
  const src = imageSrc ?? (is2D ? '/idol-2d.jpg' : '/idol-3d.png')

  return (
    <div className={`relative ${className}`}>
      {/* Phone shell */}
      <div
        className={`
          relative w-[200px] h-[400px] rounded-[36px] border-[3px] overflow-hidden
          ${is2D
            ? 'border-pink-400/60 shadow-[0_0_50px_rgba(244,114,182,0.5),inset_0_0_30px_rgba(244,114,182,0.05)]'
            : 'border-purple-400/60 shadow-[0_0_50px_rgba(192,132,252,0.5),inset_0_0_30px_rgba(192,132,252,0.05)]'
          }
          bg-[#0d0018]
        `}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 pt-3 pb-1 relative z-10">
          <span className="text-[10px] text-white/70">9:41</span>
          <div className="w-16 h-4 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2" />
          <div className="w-3 h-2 border border-white/40 rounded-sm" />
        </div>

        {/* App header */}
        <div className="flex items-center justify-between px-3 py-1.5 relative z-10">
          <IdolySnapLogo width={64} />
          <div className={`w-6 h-6 rounded-full ${is2D ? 'bg-pink-400/30' : 'bg-purple-400/30'}`} />
        </div>

        {/* ── Character image ── */}
        <div className="absolute inset-0 top-[52px]">

          {is2D ? (
            /* 2D — fill + cover */
            <Image
              src={src}
              alt="2D illustrated idol"
              fill
              className="object-cover object-top"
              sizes="200px"
              priority
            />
          ) : (
            /* 3D chibi — bg-image trick for precise zoom & position */
            <>
              {/* Purple-to-dark gradient background */}
              <div className="absolute inset-0"
                style={{
                  background: 'linear-gradient(175deg, #3b0f80 0%, #5b21b6 25%, #7c3aed 55%, #1e0050 100%)',
                }}
              />
              {/* Glow orbs */}
              <div className="absolute top-10 left-6 w-24 h-24 rounded-full bg-violet-400/20 blur-3xl" />
              <div className="absolute bottom-20 right-4 w-20 h-20 rounded-full bg-pink-500/15 blur-2xl" />
              {/* Chibi character — zoomed & centred */}
              <div className="absolute inset-0"
                style={{
                  backgroundImage: "url('/idol-3d.png')",
                  backgroundSize: '280%',
                  backgroundPosition: 'center 28%',
                  backgroundRepeat: 'no-repeat',
                  mixBlendMode: 'multiply',
                }}
              />
            </>
          )}

          {/* Top fade */}
          <div className={`absolute top-0 left-0 right-0 h-12 bg-gradient-to-b ${is2D ? 'from-[#0d0018]' : 'from-[#3b0f80]'} to-transparent`} />
          {/* Bottom fade */}
          <div className={`absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t ${is2D ? 'from-[#0d0018] via-[#0d0018]/50' : 'from-[#1e0050] via-[#1e0050]/70'} to-transparent`} />

          {/* Snap label */}
          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-0.5">
            <span className={`text-[9px] font-medium ${is2D ? 'text-pink-300' : 'text-purple-300'}`}>
              {label ?? (is2D ? '📸 Today\'s Snap' : '✦ 3D Mode')}
            </span>
          </div>

          {/* Heart */}
          <div className={`absolute top-3 right-3 text-base ${is2D ? 'text-pink-400' : 'text-purple-400'}`}>♥</div>

          {/* YOU bubble */}
          <div className="absolute bottom-28 right-3 flex flex-col items-center gap-0.5">
            <div className="w-9 h-9 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/60" fill="currentColor">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
            <span className="text-[8px] text-white/40">YOU</span>
          </div>
        </div>

        {/* Bottom action bar */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around px-4 py-3 z-10">
          <button className={`text-lg ${is2D ? 'text-pink-400' : 'text-purple-400'}`}>♥</button>
          <div className={`
            w-12 h-12 rounded-full flex items-center justify-center
            ${is2D
              ? 'bg-gradient-to-br from-pink-400 to-[#c084fc] shadow-[0_0_20px_rgba(244,114,182,0.7)]'
              : 'bg-gradient-to-br from-purple-400 to-blue-500 shadow-[0_0_20px_rgba(192,132,252,0.7)]'
            }
          `}>
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <button className="text-white/40 text-sm">⋯</button>
        </div>

        {/* Day counter */}
        <div className="absolute bottom-14 left-0 right-0 text-center z-10">
          <span className={`text-[10px] font-medium ${is2D ? 'text-pink-400/80' : 'text-purple-400/80'}`}>
            Day {dayCount ?? (is2D ? '47' : '??')} together
          </span>
        </div>
      </div>

    </div>
  )
}
