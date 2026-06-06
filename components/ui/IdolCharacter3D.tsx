// Original 3D-style rendered idol character — volumetric gradient aesthetic
// 100% original artwork, no third-party IP used
export default function IdolCharacter3D() {
  return (
    <svg
      viewBox="0 0 200 340"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="3D rendered style virtual idol character"
    >
      <defs>
        {/* Background */}
        <linearGradient id="bg3d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#120028" />
          <stop offset="100%" stopColor="#06000e" />
        </linearGradient>
        {/* Ambient bg glow */}
        <radialGradient id="bgGlow3d" cx="50%" cy="38%" r="55%">
          <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#4c1d95" stopOpacity="0" />
        </radialGradient>
        {/* Skin — 3D SSS (subsurface scattering) effect */}
        <radialGradient id="skin3d" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#ffeee0" />
          <stop offset="50%" stopColor="#fcd8c0" />
          <stop offset="100%" stopColor="#e8b898" />
        </radialGradient>
        {/* Skin shadow */}
        <radialGradient id="skinShadow3d" cx="60%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#c87840" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#c87840" stopOpacity="0" />
        </radialGradient>
        {/* Hair — deep volumetric */}
        <radialGradient id="hair3d" cx="35%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#3b0080" />
          <stop offset="45%" stopColor="#1a003a" />
          <stop offset="100%" stopColor="#050010" />
        </radialGradient>
        {/* Hair highlight */}
        <linearGradient id="hairHl3d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
        </linearGradient>
        {/* Iris — luminous */}
        <radialGradient id="iris3d" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="40%" stopColor="#5b21b6" />
          <stop offset="80%" stopColor="#2e1065" />
          <stop offset="100%" stopColor="#0a0018" />
        </radialGradient>
        {/* Iris rim glow */}
        <radialGradient id="irisGlow3d" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="#7c3aed" stopOpacity="0" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
        </radialGradient>
        {/* Jacket — dark fabric */}
        <linearGradient id="jacket3d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e0045" />
          <stop offset="100%" stopColor="#06000e" />
        </linearGradient>
        {/* Jacket highlight */}
        <linearGradient id="jacketHl3d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </linearGradient>
        {/* Neck gradient */}
        <linearGradient id="neck3d" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e8c0a0" />
          <stop offset="40%" stopColor="#fcd8c0" />
          <stop offset="100%" stopColor="#d4a880" />
        </linearGradient>
        {/* Blush */}
        <radialGradient id="blush3d" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff6688" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ff6688" stopOpacity="0" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="glow3d" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softBlur" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id="veryBlur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* ── Background ──────────────────────────── */}
      <rect width="200" height="340" fill="url(#bg3d)" />
      <ellipse cx="100" cy="110" rx="100" ry="100" fill="url(#bgGlow3d)" />

      {/* Background rim light suggestion */}
      <ellipse cx="100" cy="180" rx="80" ry="100" fill="none"
        stroke="#4c1d95" strokeWidth="40" strokeOpacity="0.08" filter="url(#veryBlur)" />

      {/* ── BODY / UNIFORM ──────────────────────── */}
      {/* Main jacket body */}
      <path d="M 22 265 Q 18 295 20 330 L 62 330 L 62 258 Q 44 250 30 248 Z"
        fill="url(#jacket3d)" />
      <path d="M 178 265 Q 182 295 180 330 L 138 330 L 138 258 Q 156 250 170 248 Z"
        fill="url(#jacket3d)" />
      {/* Jacket front center */}
      <path d="M 62 230 L 62 330 L 138 330 L 138 230 Q 120 222 100 220 Q 80 222 62 230 Z"
        fill="url(#jacket3d)" />

      {/* Jacket catch-light left */}
      <path d="M 22 265 Q 25 255 34 248 L 44 245 L 42 258 L 30 265 Z"
        fill="url(#jacketHl3d)" />
      {/* Jacket catch-light right */}
      <path d="M 178 265 Q 175 255 166 248 L 156 245 L 158 258 L 170 265 Z"
        fill="url(#jacketHl3d)" />

      {/* Inner shirt */}
      <path d="M 82 222 L 100 248 L 118 222"
        fill="#f0e8ff" opacity="0.9" />
      <path d="M 82 222 L 100 248 L 118 222"
        fill="none" stroke="#d4baff" strokeWidth="0.8" />

      {/* Shoulder fabric fold lines */}
      <path d="M 38 248 Q 50 238 62 232"
        fill="none" stroke="#3b0764" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M 162 248 Q 150 238 138 232"
        fill="none" stroke="#3b0764" strokeWidth="1" strokeOpacity="0.5" />

      {/* Epaulette 3D */}
      <path d="M 20 258 Q 16 248 24 240 Q 36 234 48 238 L 44 255 Z"
        fill="#1a0040" />
      <path d="M 20 258 Q 16 248 24 240 Q 36 234 48 238"
        fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.8" />
      <path d="M 180 258 Q 184 248 176 240 Q 164 234 152 238 L 156 255 Z"
        fill="#1a0040" />
      <path d="M 180 258 Q 184 248 176 240 Q 164 234 152 238"
        fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.8" />

      {/* Chest emblem glow */}
      <circle cx="100" cy="262" r="10" fill="#f472b6" opacity="0.12" filter="url(#softBlur)" />
      <g transform="translate(88,253)" filter="url(#glow3d)">
        <polygon
          points="12,0 14.2,6.5 21,6.5 15.5,10.5 17.8,17 12,13 6.2,17 8.5,10.5 3,6.5 9.8,6.5"
          fill="#f472b6" opacity="0.95"
        />
      </g>

      {/* ── NECK ────────────────────────────────── */}
      <path d="M 84 188 L 82 218 Q 88 226 100 228 Q 112 226 118 218 L 116 188"
        fill="url(#neck3d)" />
      {/* Neck shadow side */}
      <path d="M 84 188 Q 82 205 83 218 Q 90 226 100 228"
        fill="#c88050" opacity="0.2" />
      {/* Neck highlight */}
      <path d="M 98 190 Q 100 200 100 215"
        fill="none" stroke="#fff8f0" strokeWidth="2" strokeOpacity="0.25" />
      {/* Choker */}
      <path d="M 80 210 Q 100 218 120 210"
        fill="none" stroke="#1e0040" strokeWidth="4" strokeLinecap="round" />
      <path d="M 80 210 Q 100 218 120 210"
        fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"
        filter="url(#glow3d)" />
      <circle cx="100" cy="213" r="4" fill="#f472b6" filter="url(#glow3d)" />
      <circle cx="100" cy="213" r="2" fill="#fce7f3" />

      {/* ── HAIR (back, volumetric) ──────────────── */}
      <path d="M 36 110 Q 30 72 36 52 Q 46 24 68 14 Q 85 6 100 8
               Q 118 6 134 18 Q 154 32 160 58 Q 166 78 162 112
               Q 154 132 160 155 Q 155 175 148 190
               L 138 200 Q 126 210 120 205
               L 120 198 Q 132 190 135 178 Q 142 160 140 148 Q 145 128 144 108
               Q 148 85 144 68 L 130 175 Q 125 192 118 198 L 82 198
               L 70 190 Q 63 178 60 168 L 48 108 Q 52 82 56 68
               Q 60 52 64 42"
        fill="url(#hair3d)" />

      {/* Hair volume highlight */}
      <path d="M 68 18 Q 58 45 56 68 Q 54 88 56 105"
        fill="url(#hairHl3d)" />
      <path d="M 100 8 Q 100 30 100 55 Q 100 76 102 95"
        fill="url(#hairHl3d)" />

      {/* Side hair strands with SSS */}
      <path d="M 36 112 Q 26 135 24 160 Q 22 180 30 196 Q 36 206 46 202
               Q 40 185 42 163 Q 46 140 50 122 Z"
        fill="url(#hair3d)" />
      <path d="M 164 112 Q 174 135 176 160 Q 178 180 170 196 Q 164 206 154 202
               Q 160 185 158 163 Q 154 140 150 122 Z"
        fill="url(#hair3d)" />

      {/* Hair rim-light effect */}
      <path d="M 36 90 Q 32 110 30 135 Q 28 155 34 175"
        fill="none" stroke="#4c1d95" strokeWidth="4" strokeOpacity="0.4" strokeLinecap="round" />
      <path d="M 164 90 Q 168 110 170 135 Q 172 155 166 175"
        fill="none" stroke="#4c1d95" strokeWidth="4" strokeOpacity="0.4" strokeLinecap="round" />

      {/* ── EAR ─────────────────────────────────── */}
      <ellipse cx="38" cy="112" rx="9" ry="13" fill="#f0c8a8" />
      <ellipse cx="38" cy="112" rx="5.5" ry="9" fill="#e0b090" />
      {/* Ear highlight */}
      <ellipse cx="36" cy="108" rx="2" ry="3" fill="#ffe8d0" opacity="0.6" />
      {/* Earring 3D */}
      <circle cx="38" cy="124" r="4" fill="none" stroke="#f472b6" strokeWidth="2"
        filter="url(#glow3d)" />
      <line x1="38" y1="128" x2="38" y2="135" stroke="#f472b6" strokeWidth="1.8" />
      <polygon points="38,135 35.5,138 38,137 40.5,138" fill="#f472b6" />
      <circle cx="38" cy="124" r="2" fill="#fce7f3" opacity="0.7" />

      {/* ── FACE ────────────────────────────────── */}
      {/* Face base */}
      <ellipse cx="100" cy="108" rx="54" ry="65" fill="url(#skin3d)" />
      {/* Face shadow overlay */}
      <ellipse cx="100" cy="108" rx="54" ry="65" fill="url(#skinShadow3d)" />
      {/* Specular highlight */}
      <ellipse cx="88" cy="82" rx="18" ry="14" fill="white" opacity="0.08" />

      {/* Blush */}
      <ellipse cx="66" cy="122" rx="16" ry="10" fill="url(#blush3d)" />
      <ellipse cx="134" cy="122" rx="16" ry="10" fill="url(#blush3d)" />

      {/* ── EYEBROWS (3D — no outline, just color) ── */}
      <path d="M 60 88 Q 71 80 82 83"
        fill="none" stroke="#2a0050" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 60 89 Q 71 82 82 84"
        fill="none" stroke="#6d28d9" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.3" />
      <path d="M 118 83 Q 129 80 140 88"
        fill="none" stroke="#2a0050" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 118 84 Q 129 82 140 89"
        fill="none" stroke="#6d28d9" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.3" />

      {/* ── LEFT EYE (3D rendered) ───────────────── */}
      {/* Eye socket shadow */}
      <ellipse cx="70" cy="103" rx="17" ry="13" fill="#1a0035" opacity="0.25" />
      {/* Sclera */}
      <ellipse cx="70" cy="102" rx="15" ry="11" fill="#f8f0ff" />
      {/* Sclera vein/tone */}
      <ellipse cx="70" cy="102" rx="15" ry="11" fill="#e8d8f8" opacity="0.3" />
      {/* Iris */}
      <circle cx="70" cy="102" r="10" fill="url(#iris3d)" />
      {/* Iris glow rim */}
      <circle cx="70" cy="102" r="10" fill="url(#irisGlow3d)" filter="url(#glow3d)" />
      {/* Pupil */}
      <circle cx="70" cy="102" r="6" fill="#050010" />
      {/* Pupil depth */}
      <circle cx="70" cy="102" r="5" fill="#0a0020" />
      {/* Main catchlight */}
      <circle cx="74.5" cy="97.5" r="3.5" fill="white" opacity="0.9" />
      {/* Secondary catchlight */}
      <circle cx="65" cy="106" r="1.5" fill="white" opacity="0.45" />
      {/* Eyelid crease */}
      <path d="M 55 100 Q 70 90 85 100"
        fill="none" stroke="#0d001f" strokeWidth="2.5" strokeLinecap="round" />
      {/* Lower lid */}
      <path d="M 56 109 Q 70 116 84 109"
        fill="none" stroke="#d4a0b0" strokeWidth="0.8" strokeOpacity="0.5" />
      {/* Lashes — upper */}
      <path d="M 55 100 Q 52 95 51 89" fill="none" stroke="#1a0030" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 59 95 Q 58 90 59 85" fill="none" stroke="#1a0030" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 85 100 Q 88 95 89 89" fill="none" stroke="#1a0030" strokeWidth="1.5" strokeLinecap="round" />

      {/* ── RIGHT EYE (3D rendered) ──────────────── */}
      <ellipse cx="130" cy="103" rx="17" ry="13" fill="#1a0035" opacity="0.25" />
      <ellipse cx="130" cy="102" rx="15" ry="11" fill="#f8f0ff" />
      <ellipse cx="130" cy="102" rx="15" ry="11" fill="#e8d8f8" opacity="0.3" />
      <circle cx="130" cy="102" r="10" fill="url(#iris3d)" />
      <circle cx="130" cy="102" r="10" fill="url(#irisGlow3d)" filter="url(#glow3d)" />
      <circle cx="130" cy="102" r="6" fill="#050010" />
      <circle cx="130" cy="102" r="5" fill="#0a0020" />
      <circle cx="134.5" cy="97.5" r="3.5" fill="white" opacity="0.9" />
      <circle cx="125" cy="106" r="1.5" fill="white" opacity="0.45" />
      <path d="M 115 100 Q 130 90 145 100"
        fill="none" stroke="#0d001f" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 116 109 Q 130 116 144 109"
        fill="none" stroke="#d4a0b0" strokeWidth="0.8" strokeOpacity="0.5" />
      <path d="M 115 100 Q 112 95 111 89" fill="none" stroke="#1a0030" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 141 95 Q 142 90 141 85" fill="none" stroke="#1a0030" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 145 100 Q 148 95 149 89" fill="none" stroke="#1a0030" strokeWidth="1.5" strokeLinecap="round" />

      {/* ── NOSE (3D — subtle planes) ─────────────── */}
      {/* Nose bridge shadow */}
      <path d="M 97 95 Q 96 112 96 125"
        fill="none" stroke="#c89060" strokeWidth="1.5" strokeOpacity="0.2" />
      {/* Nose tip shadow */}
      <ellipse cx="100" cy="128" rx="6" ry="3" fill="#c89060" opacity="0.2" />
      {/* Nostril shadows */}
      <ellipse cx="94" cy="128" rx="2.5" ry="2" fill="#b07040" opacity="0.35" />
      <ellipse cx="106" cy="128" rx="2.5" ry="2" fill="#b07040" opacity="0.35" />
      {/* Nose highlight */}
      <circle cx="100" cy="122" r="2" fill="white" opacity="0.2" />

      {/* ── LIPS (3D — SSS effect) ───────────────── */}
      {/* Lip shadow */}
      <path d="M 80 143 Q 100 143 120 143" fill="none" stroke="#1a0035" strokeWidth="1" strokeOpacity="0.15" />
      {/* Upper lip */}
      <path d="M 80 143 Q 88 136 100 138 Q 112 136 120 143 Q 110 140 100 141 Q 90 140 80 143 Z"
        fill="#d4506a" />
      {/* Upper lip SSS */}
      <path d="M 80 143 Q 88 136 100 138 Q 112 136 120 143"
        fill="none" stroke="#ff8099" strokeWidth="0.8" strokeOpacity="0.4" />
      {/* Lower lip */}
      <path d="M 80 143 Q 100 158 120 143 Q 110 153 100 156 Q 90 153 80 143 Z"
        fill="#e8607a" />
      {/* Lower lip specular */}
      <ellipse cx="100" cy="151" rx="10" ry="4" fill="white" opacity="0.15" />
      <ellipse cx="98" cy="149" rx="5" ry="2" fill="white" opacity="0.2" />

      {/* ── HAIR (front, volumetric) ─────────────── */}
      {/* Left bang main */}
      <path d="M 42 92 Q 40 66 48 50 Q 56 32 68 20
               Q 60 48 58 68 Q 56 84 54 98 Z"
        fill="url(#hair3d)" />
      <path d="M 68 20 Q 66 44 64 64 Q 62 80 58 95
               Q 56 82 60 62 Q 64 42 68 20 Z"
        fill="url(#hair3d)" />
      <path d="M 82 14 Q 80 36 78 58 Q 76 76 72 90
               Q 70 76 73 56 Q 77 36 82 14 Z"
        fill="url(#hair3d)" />
      {/* Center */}
      <path d="M 100 8 Q 100 30 100 52 Q 100 70 102 84
               Q 100 70 100 50 Q 100 28 100 8 Z"
        fill="url(#hair3d)" />
      {/* Right bangs */}
      <path d="M 118 14 Q 120 36 122 58 Q 124 76 128 90
               Q 126 76 123 56 Q 119 36 118 14 Z"
        fill="url(#hair3d)" />
      <path d="M 132 20 Q 140 44 142 64 Q 144 82 142 96
               Q 138 82 138 66 Q 136 48 132 20 Z"
        fill="url(#hair3d)" />
      <path d="M 158 92 Q 160 66 152 50 Q 144 32 132 20
               Q 140 48 142 68 Q 144 84 146 98 Z"
        fill="url(#hair3d)" />

      {/* Hair volumetric highlight — left */}
      <path d="M 74 20 Q 72 40 70 62 Q 68 80 66 92"
        fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeOpacity="0.35"
        strokeLinecap="round" filter="url(#glow3d)" />
      {/* Hair volumetric highlight — right */}
      <path d="M 126 20 Q 128 40 130 62 Q 132 80 134 92"
        fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.2"
        strokeLinecap="round" />
      {/* Hair specular */}
      <path d="M 88 18 Q 86 38 84 58"
        fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.12"
        strokeLinecap="round" />

      {/* ── Mole ────────────────────────────────── */}
      <circle cx="114" cy="140" r="1.5" fill="#804040" opacity="0.65" />

      {/* ── Atmospheric particles ────────────────── */}
      <g filter="url(#glow3d)" opacity="0.6">
        <circle cx="165" cy="35" r="2" fill="#c084fc" />
        <circle cx="30" cy="80" r="1.5" fill="#f472b6" />
        <circle cx="170" cy="150" r="1" fill="#7c3aed" />
      </g>

      {/* ── Bottom vignette ──────────────────────── */}
      <defs>
        <linearGradient id="fade3d" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#06000e" stopOpacity="0" />
          <stop offset="100%" stopColor="#06000e" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect x="0" y="270" width="200" height="70" fill="url(#fade3d)" />
    </svg>
  )
}
