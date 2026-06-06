import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#08000f',
        'bg-card': '#110020',
        pink: {
          DEFAULT: '#f472b6',
          400: '#f472b6',
          500: '#ec4899',
        },
        lavender: '#c084fc',
        purple: {
          DEFAULT: '#7c3aed',
          400: '#a855f7',
          600: '#7c3aed',
          900: '#3b0764',
        },
        'text-sub': '#d4a5f5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(244,114,182,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(244,114,182,0.8), 0 0 60px rgba(192,132,252,0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-pink': 'radial-gradient(ellipse at center, rgba(244,114,182,0.3) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(ellipse at center, rgba(124,58,237,0.3) 0%, transparent 70%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-pink': '0 0 30px rgba(244,114,182,0.5)',
        'glow-purple': '0 0 30px rgba(124,58,237,0.5)',
        'glow-lavender': '0 0 30px rgba(192,132,252,0.5)',
      },
    },
  },
  plugins: [],
}

export default config
