'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export default function GlowButton({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  className = '',
  disabled,
  ...props
}: GlowButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const baseClasses =
    'relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group'

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-pink-400 to-lavender text-white shadow-[0_0_20px_rgba(244,114,182,0.4)] hover:shadow-[0_0_40px_rgba(244,114,182,0.7)] hover:scale-105 active:scale-95',
    outline:
      'border-2 border-pink-400 text-pink-400 hover:bg-pink-400/10 hover:shadow-[0_0_20px_rgba(244,114,182,0.3)] hover:scale-105 active:scale-95',
    ghost:
      'text-pink-400 hover:bg-pink-400/10 hover:scale-105 active:scale-95',
  }

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {/* Shimmer overlay for primary */}
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      )}

      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          <span>Joining...</span>
        </span>
      ) : (
        children
      )}
    </button>
  )
}
