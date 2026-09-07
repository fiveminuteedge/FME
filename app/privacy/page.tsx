export default function PrivacyPage() {
  return (
    <main className="bg-hero min-h-screen px-6 py-16">
      <div className="max-w-2xl mx-auto text-blue-200">
        <h1 className="font-display text-3xl text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-blue-400 mb-10">Last updated: September 2026</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-medium mb-2">1. Overview</h2>
            <p>FiveMinuteEdge ("we," "us," or "our") provides a daily sales training platform. This policy explains what information we collect, how we use it, and the choices you have.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">2. Information We Collect</h2>
            <p className="mb-2">We collect the following information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Account information:</strong> your email address and password (stored securely by our authentication provider, Supabase).</li>
              <li><strong>Payment information:</strong> processed directly by Stripe, our payment processor. We do not store your full card number.</li>
              <li><strong>Usage data:</strong> which lessons you've completed, your streak, and progress through the course.</li>
              <li><strong>Communications:</strong> messages you send us through our contact form.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide and maintain your account and access to lessons</li>
              <li>To process payments and manage your subscription</li>
              <li>To send you daily lesson reminders and account-related emails</li>
              <li>To respond to support requests</li>
              <li>To improve the product over time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">4. Third-Party Services</h2>
            <p className="mb-2">We rely on the following third-party providers to operate FiveMinuteEdge. Each processes certain data on our behalf, governed by their own privacy policies:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Stripe</strong> — payment processing</li>
              <li><strong>Supabase</strong> — account authentication and data storage</li>
              <li><strong>Vercel</strong> — website hosting</li>
              <li><strong>Resend</strong> — transactional email delivery (reminders, password resets, account emails)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">5. Data Retention</h2>
            <p>We retain your account and progress data for as long as your account is active. If you cancel your subscription, we retain your data for a reasonable period in case you resubscribe, after which it may be deleted upon request.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">6. Your Rights</h2>
            <p>Depending on where you live, you may have the right to access, correct, or delete your personal information, or to opt out of certain data uses. To exercise these rights, contact us using the information below.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">7. Cookies</h2>
            <p>We may use essential cookies to keep you logged in and to remember your preferences. We do not currently use third-party advertising or tracking cookies, but this policy will be updated if that changes.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">8. Children's Privacy</h2>
            <p>FiveMinuteEdge is not directed at or intended for use by anyone under 18. We do not knowingly collect information from minors.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">9. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Material changes will be reflected by updating the "Last updated" date above.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">10. Contact Us</h2>
            <p>Questions about this policy? Reach out via our <a href="/contact" className="text-blue-300 hover:text-white underline">contact page</a>.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
