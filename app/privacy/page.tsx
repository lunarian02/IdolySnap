import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Idoly Snap',
  description: 'Privacy Policy for Idoly Snap',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-pink-400 text-sm hover:underline mb-10 inline-block">
          ← Back to home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: February 2026</p>

        <div className="space-y-10 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p>
              When you join our waitlist, we collect your email address. This is the only personal
              information we collect at this time. We do not collect names, payment information,
              or any other personal data during the pre-launch period.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p>We use your email address solely to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Notify you when Idoly Snap launches</li>
              <li>Send you early access invitations</li>
              <li>Share important product updates</li>
            </ul>
            <p className="mt-3">
              We will not use your email for marketing unrelated to Idoly Snap.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">3. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              Your email address is stored securely and is only accessible to the Idoly Snap team.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">4. Data Storage</h2>
            <p>
              Your email address is stored in a secure database provided by Supabase, which complies
              with industry-standard security practices. Data is stored in the United States.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request deletion of your email from our waitlist at any time</li>
              <li>Know what data we hold about you</li>
              <li>Opt out of communications</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at the email below.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">6. Cookies</h2>
            <p>
              This website does not use tracking cookies or third-party analytics. We only use
              essential cookies required for the website to function properly.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy as the product evolves. Any significant changes
              will be communicated to waitlist members via email.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">8. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy or want to remove your data,
              please contact us at:{' '}
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
