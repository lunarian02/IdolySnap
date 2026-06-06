import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Idoly Snap',
  description: 'Terms of Service for Idoly Snap',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-pink-400 text-sm hover:underline mb-10 inline-block">
          ← Back to home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: February 2026</p>

        <div className="space-y-10 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>
              By joining the Idoly Snap waitlist or using this website, you agree to these Terms
              of Service. If you do not agree, please do not use our website or submit your email.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">2. Pre-Launch Status</h2>
            <p>
              Idoly Snap is currently in pre-launch. The product, features, and pricing described
              on this website are subject to change. Joining the waitlist does not guarantee access
              to the product or any specific features.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">3. Waitlist</h2>
            <p>
              By submitting your email to the waitlist, you consent to receiving communications
              from Idoly Snap regarding product updates and launch announcements. You may
              unsubscribe at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, and the Idoly Snap
              name — is the property of Idoly Snap and protected by applicable intellectual
              property laws. You may not reproduce or use our content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">5. Disclaimer of Warranties</h2>
            <p>
              This website is provided &quot;as is&quot; without warranties of any kind. We do not
              guarantee that the website will be error-free, uninterrupted, or free of harmful
              components. Use of this website is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">6. Limitation of Liability</h2>
            <p>
              Idoly Snap shall not be liable for any indirect, incidental, or consequential damages
              arising from your use of this website or reliance on any information provided herein.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">7. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Continued use of
              the website after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">8. Contact</h2>
            <p>
              For questions about these Terms, please contact us at:{' '}
              <a href="mailto:hello@idolysnap.com" className="text-pink-400 hover:underline">
                hello@idolysnap.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
