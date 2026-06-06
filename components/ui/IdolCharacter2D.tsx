// Original 2D illustrated idol character — dark K-pop aesthetic
// 100% original artwork, no third-party IP used
export default function IdolCharacter2D() {
  return (
    <svg
      viewBox="0 0 200 340"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="2D illustrated virtual idol character"
    >
      <defs>
        <linearGradient id="bg2d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e0038" />
          <stop offset="100%" stopColor="#08000f" />
        </linearGradient>
        <radialGradient id="bgGlow2d" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blush2d" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff7ea0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff7ea0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="iris2d" cx="38%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#6d28d9" />
          <stop offset="60%" stopColor="#3b0764" />
          <stop offset="100%" stopColor="#1a0030" />
        </radialGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="hairGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Background ──────────────────────────── */}
      <rect width="200" height="340" fill="url(#bg2d)" rx="0" />
      <ellipse cx="100" cy="120" rx="90" ry="90" fill="url(#bgGlow2d)" />

      {/* ── Floating sparkles ───────────────────── */}
      <g opacity="0.7" filter="url(#softGlow)">
        <polygon points="168,30 170,37 177,37 171.5,41 173.5,48 168,44 162.5,48 164.5,41 159,37 166,37" fill="#f472b6" transform="scale(0.55)" />
        <polygon points="42,55 43.5,60 49,60 44.5,63 46,68 42,65 38,68 39.5,63 35,60 40.5,60" fill="#c084fc" transform="scale(0.5)" />
        <text x="168" y="90" fontSize="10" fill="#c084fc" opacity="0.6">✦</text>
        <text x="22" y="180" fontSize="8" fill="#f472b6" opacity="0.5">✦</text>
      </g>

      {/* ── BODY / UNIFORM ──────────────────────── */}
      {/* Shirt/undershirt */}
      <path d="M 58 230 L 58 300 Q 100 310 142 300 L 142 230 Q 120 222 100 220 Q 80 222 58 230 Z"
        fill="#f8f0ff" />
      {/* Collar detail */}
      <path d="M 85 222 L 100 245 L 115 222" fill="none" stroke="#e8d0ff" strokeWidth="1.5" />

      {/* Jacket body */}
      <path d="M 25 260 Q 20 290 22 320 L 58 320 L 58 260 Q 42 248 30 245 Z"
        fill="#0d0020" />
      <path d="M 175 260 Q 180 290 178 320 L 142 320 L 142 260 Q 158 248 170 245 Z"
        fill="#0d0020" />
      {/* Jacket front panels */}
      <path d="M 58 230 Q 50 235 48 248 L 58 260 L 58 230 Z" fill="#120030" />
      <path d="M 142 230 Q 150 235 152 248 L 142 260 L 142 230 Z" fill="#120030" />

      {/* Jacket trim / piping */}
      <path d="M 25 260 Q 20 290 22 320" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
      <path d="M 175 260 Q 180 290 178 320" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
      <path d="M 58 230 Q 50 244 52 260 L 58 260"
        fill="none" stroke="#c084fc" strokeWidth="1" />
      <path d="M 142 230 Q 150 244 148 260 L 142 260"
        fill="none" stroke="#c084fc" strokeWidth="1" />

      {/* Epaulettes */}
      <path d="M 22 250 Q 18 242 26 237 Q 36 233 44 236 L 40 252 Z"
        fill="#1a0040" stroke="#7c3aed" strokeWidth="1" />
      <path d="M 178 250 Q 182 242 174 237 Q 164 233 156 236 L 160 252 Z"
        fill="#1a0040" stroke="#7c3aed" strokeWidth="1" />
      {/* Epaulette accent lines */}
      <path d="M 26 237 Q 30 242 34 240" fill="none" stroke="#c084fc" strokeWidth="0.8" />
      <path d="M 174 237 Q 170 242 166 240" fill="none" stroke="#c084fc" strokeWidth="0.8" />

      {/* Jacket buttons */}
      {[260, 275, 290].map((y, i) => (
        <g key={i}>
          <circle cx="73" cy={y} r="2.5" fill="#7c3aed" />
          <circle cx="127" cy={y} r="2.5" fill="#7c3aed" />
        </g>
      ))}

      {/* Chest emblem / badge */}
      <g transform="translate(88, 255)" filter="url(#softGlow)">
        <polygon points="12,0 14.5,7 22,7 16,11.5 18.5,19 12,14.5 5.5,19 8,11.5 2,7 9.5,7"
          fill="#f472b6" stroke="#ff9ab8" strokeWidth="0.5" />
      </g>

      {/* ── NECK ────────────────────────────────── */}
      <path d="M 82 185 L 80 215 Q 85 222 100 224 Q 115 222 120 215 L 118 185"
        fill="#fce8d8" stroke="#ecd0b8" strokeWidth="0.5" />
      {/* Neck shadow */}
      <path d="M 83 210 Q 100 220 117 210 Q 108 218 100 219 Q 92 218 83 210 Z"
        fill="#c8906a" opacity="0.2" />
      {/* Choker */}
      <path d="M 78 205 Q 100 213 122 205"
        fill="none" stroke="#3b0764" strokeWidth="3" strokeLinecap="round" />
      <path d="M 78 205 Q 100 213 122 205"
        fill="none" stroke="#7c3aed" strokeWidth="1" strokeLinecap="round" />
      <circle cx="100" cy="208" r="3.5" fill="#f472b6" stroke="#c084fc" strokeWidth="0.8" />

      {/* ── HAIR (back) ─────────────────────────── */}
      <path d="M 38 105 Q 32 70 38 50 Q 48 22 68 14 Q 85 8 100 10 Q 118 8 133 18 Q 152 30 158 55 Q 163 75 160 108
               Q 152 125 158 148 Q 152 168 148 180 L 140 188 Q 128 198 122 196
               L 122 192 Q 130 185 132 175 Q 138 158 136 148 Q 140 125 140 105
               Q 142 85 138 70 L 128 168 Q 125 184 118 190 L 80 190
               L 72 185 Q 65 175 62 165 L 52 105 Q 48 85 52 70
               Q 58 55 62 45"
        fill="#0d001f" />
      {/* Hair long strands left */}
      <path d="M 38 105 Q 28 125 26 150 Q 24 170 32 188 Q 38 198 46 194
               Q 40 178 42 158 Q 46 135 50 118 Z"
        fill="#0d001f" />
      {/* Hair long strands right */}
      <path d="M 162 108 Q 172 128 174 153 Q 176 173 168 190 Q 162 200 154 196
               Q 160 180 158 160 Q 154 137 150 120 Z"
        fill="#0d001f" />

      {/* ── EAR ─────────────────────────────────── */}
      <ellipse cx="39" cy="110" rx="9" ry="12" fill="#fcd8c0" />
      <ellipse cx="39" cy="110" rx="5.5" ry="8" fill="#f8c8b0" />
      {/* Earring */}
      <circle cx="39" cy="121" r="3.5" fill="none" stroke="#f472b6" strokeWidth="1.8" />
      <line x1="39" y1="124.5" x2="39" y2="130" stroke="#f472b6" strokeWidth="1.5" />
      <polygon points="39,130 36.5,133 39,132 41.5,133" fill="#f472b6" />

      {/* ── FACE ────────────────────────────────── */}
      <ellipse cx="100" cy="105" rx="52" ry="62" fill="#fde8d8" />
      {/* Face shading */}
      <path d="M 48 105 Q 50 135 62 152 Q 74 168 100 170 Q 126 168 138 152
               Q 150 135 152 105 Q 144 118 135 126 Q 118 138 100 140
               Q 82 138 65 126 Q 56 118 48 105 Z"
        fill="#e8c0a0" opacity="0.25" />

      {/* Blush */}
      <ellipse cx="65" cy="120" rx="14" ry="9" fill="url(#blush2d)" />
      <ellipse cx="135" cy="120" rx="14" ry="9" fill="url(#blush2d)" />

      {/* ── EYEBROWS ────────────────────────────── */}
      <path d="M 60 87 Q 70 80 80 83"
        fill="none" stroke="#150025" strokeWidth="3" strokeLinecap="round" />
      <path d="M 120 83 Q 130 80 140 87"
        fill="none" stroke="#150025" strokeWidth="3" strokeLinecap="round" />
      {/* Eyebrow inner detail */}
      <path d="M 60 88 Q 70 82 80 85"
        fill="none" stroke="#2d0050" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M 120 85 Q 130 82 140 88"
        fill="none" stroke="#2d0050" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5" />

      {/* ── LEFT EYE ────────────────────────────── */}
      <path d="M 56 100 Q 58 91 70 90 Q 82 90 84 100"
        fill="white" stroke="none" />
      <ellipse cx="70" cy="100" rx="14" ry="10" fill="white" />
      {/* Iris */}
      <circle cx="70" cy="100" r="9" fill="url(#iris2d)" />
      {/* Pupil */}
      <circle cx="70" cy="100" r="5.5" fill="#0a0018" />
      {/* Iris shimmer ring */}
      <circle cx="70" cy="100" r="8" fill="none" stroke="#7c3aed" strokeWidth="0.8" strokeOpacity="0.7" />
      {/* Highlight */}
      <circle cx="74" cy="96" r="3" fill="white" />
      <circle cx="66" cy="103" r="1.2" fill="white" opacity="0.55" />
      {/* Upper eyelid line */}
      <path d="M 56 99 Q 68 89 84 99"
        fill="none" stroke="#0d001f" strokeWidth="2" strokeLinecap="round" />
      {/* Upper lashes */}
      <path d="M 56 99 Q 53 95 52 90" fill="none" stroke="#0d001f" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 60 94 Q 59 89 60 85" fill="none" stroke="#0d001f" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 84 99 Q 87 95 88 90" fill="none" stroke="#0d001f" strokeWidth="1.2" strokeLinecap="round" />
      {/* Lower lash line */}
      <path d="M 57 106 Q 70 113 83 106"
        fill="none" stroke="#c8906a" strokeWidth="0.7" strokeOpacity="0.6" />

      {/* ── RIGHT EYE ───────────────────────────── */}
      <ellipse cx="130" cy="100" rx="14" ry="10" fill="white" />
      <circle cx="130" cy="100" r="9" fill="url(#iris2d)" />
      <circle cx="130" cy="100" r="5.5" fill="#0a0018" />
      <circle cx="130" cy="100" r="8" fill="none" stroke="#7c3aed" strokeWidth="0.8" strokeOpacity="0.7" />
      <circle cx="134" cy="96" r="3" fill="white" />
      <circle cx="126" cy="103" r="1.2" fill="white" opacity="0.55" />
      <path d="M 116 99 Q 128 89 144 99"
        fill="none" stroke="#0d001f" strokeWidth="2" strokeLinecap="round" />
      <path d="M 116 99 Q 113 95 112 90" fill="none" stroke="#0d001f" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 140 94 Q 141 89 140 85" fill="none" stroke="#0d001f" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 144 99 Q 147 95 148 90" fill="none" stroke="#0d001f" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 117 106 Q 130 113 143 106"
        fill="none" stroke="#c8906a" strokeWidth="0.7" strokeOpacity="0.6" />

      {/* ── NOSE ────────────────────────────────── */}
      <path d="M 96 122 Q 100 130 104 122"
        fill="none" stroke="#c89878" strokeWidth="1.2" strokeLinecap="round" />
      <ellipse cx="95" cy="126" rx="2" ry="1.5" fill="#c89878" opacity="0.4" />
      <ellipse cx="105" cy="126" rx="2" ry="1.5" fill="#c89878" opacity="0.4" />

      {/* ── LIPS ────────────────────────────────── */}
      <path d="M 82 142 Q 90 136 100 138 Q 110 136 118 142 Q 109 139 100 140 Q 91 139 82 142 Z"
        fill="#e06880" />
      <path d="M 82 142 Q 100 155 118 142 Q 110 150 100 153 Q 90 150 82 142 Z"
        fill="#f08098" />
      {/* Lip shine */}
      <path d="M 94 147 Q 100 145 106 147"
        fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.4" />

      {/* ── HAIR (front / bangs) ─────────────────── */}
      {/* Left sweeping bang */}
      <path d="M 44 88 Q 42 65 50 50 Q 58 32 68 22 Q 60 50 58 68 Q 56 82 54 95 Z"
        fill="#0d001f" />
      <path d="M 68 22 Q 66 42 64 60 Q 62 76 60 88 Q 58 95 54 100 Q 56 82 60 65 Q 64 45 68 22 Z"
        fill="#120028" />
      <path d="M 80 14 Q 78 36 76 56 Q 74 72 72 85 Q 70 93 66 98 Q 68 80 72 62 Q 76 42 80 14 Z"
        fill="#0f0022" />
      {/* Center part */}
      <path d="M 100 10 Q 100 30 100 50 Q 100 68 102 82 Q 104 92 108 98
               Q 104 82 102 65 Q 100 45 100 10 Z"
        fill="#120028" />
      {/* Right bang */}
      <path d="M 120 14 Q 122 36 124 56 Q 126 72 128 85 Q 130 93 134 98
               Q 132 80 128 62 Q 124 42 120 14 Z"
        fill="#0f0022" />
      <path d="M 132 22 Q 140 42 142 62 Q 144 80 142 94 Q 138 82 138 68 Q 136 50 132 22 Z"
        fill="#0d001f" />
      <path d="M 156 88 Q 158 65 150 50 Q 142 32 132 22
               Q 140 50 142 68 Q 144 82 146 95 Z"
        fill="#0d001f" />

      {/* Hair highlight streaks — purple */}
      <path d="M 78 18 Q 76 38 74 60 Q 72 78 70 90"
        fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.55" />
      <path d="M 92 12 Q 91 32 91 52 Q 91 68 92 80"
        fill="none" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.35" />

      {/* ── MOLE / detail ───────────────────────── */}
      <circle cx="113" cy="138" r="1.2" fill="#a06050" opacity="0.7" />

      {/* ── Bottom gradient vignette ─────────────── */}
      <defs>
        <linearGradient id="fadeBottom2d" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#08000f" stopOpacity="0" />
          <stop offset="100%" stopColor="#08000f" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect x="0" y="260" width="200" height="80" fill="url(#fadeBottom2d)" />
    </svg>
  )
}
