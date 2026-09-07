export default function TermsPage() {
  return (
    <main className="bg-hero min-h-screen px-6 py-16">
      <div className="max-w-2xl mx-auto text-blue-200">
        <h1 className="font-display text-3xl text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-blue-400 mb-10">Last updated: September 2026</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-medium mb-2">1. Agreement to Terms</h2>
            <p>By creating an account or using FiveMinuteEdge ("the Service"), you agree to these Terms of Service. If you don't agree, please don't use the Service.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">2. The Service</h2>
            <p>FiveMinuteEdge provides a daily sales training curriculum delivered through lessons, progress tracking, and related features. We may add, remove, or modify features over time.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">3. Trial and Subscription</h2>
            <p>New accounts include a free trial period, after which a monthly subscription fee applies as shown at signup. A valid payment method is required to start your trial. Your subscription will automatically renew each month and your payment method will be charged accordingly, unless you cancel before the renewal date.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">4. Cancellation</h2>
            <p>You may cancel your subscription at any time through your account or by contacting us. Cancellation stops future billing; we do not provide refunds for partial billing periods except at our discretion or where required by law.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">5. Account Responsibilities</h2>
            <p>You're responsible for maintaining the confidentiality of your login credentials and for all activity under your account. Notify us immediately if you suspect unauthorized access.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">6. Acceptable Use</h2>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Share your account credentials with others or resell access to the Service</li>
              <li>Copy, redistribute, or publicly share course content without permission</li>
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to interfere with or disrupt the Service's operation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">7. Intellectual Property</h2>
            <p>All course content, materials, and branding are the property of FiveMinuteEdge and may not be reproduced or distributed without permission.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">8. Disclaimer</h2>
            <p>The Service is provided "as is" without warranties of any kind. We don't guarantee specific sales results, income, or career outcomes from using the Service.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">9. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, FiveMinuteEdge is not liable for any indirect, incidental, or consequential damages arising from your use of the Service.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">10. Termination</h2>
            <p>We may suspend or terminate accounts that violate these Terms. You may stop using the Service and cancel your subscription at any time.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">11. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of New Jersey, United States, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">12. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the Service after changes take effect constitutes acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-2">13. Contact Us</h2>
            <p>Questions about these Terms? Reach out via our <a href="/contact" className="text-blue-300 hover:text-white underline">contact page</a>.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
