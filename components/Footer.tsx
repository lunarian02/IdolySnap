import { Instagram } from 'lucide-react'
import IdolySnapLogo from './ui/IdolySnapLogo'
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.54V6.78a4.85 4.85 0 0 1-1.07-.09z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-pink-400/10 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <IdolySnapLogo width={100} />
            <p className="text-white/40 text-sm">© 2026 Idoly Snap. All rights reserved.</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-pink-400/20 flex items-center justify-center text-white/50 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-200 hover:shadow-[0_0_15px_rgba(244,114,182,0.3)]"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full border border-pink-400/20 flex items-center justify-center text-white/50 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-200 hover:shadow-[0_0_15px_rgba(244,114,182,0.3)]"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="/privacy" className="hover:text-pink-400 transition-colors duration-200">Privacy Policy</a>
            <span className="text-white/20">·</span>
            <a href="/terms" className="hover:text-pink-400 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
