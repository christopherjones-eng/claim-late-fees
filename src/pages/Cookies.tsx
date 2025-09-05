import Layout from "@/components/Layout/Layout";

const Cookies = () => {
  return (
    <Layout>
      <div className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences 
                and understanding how you use our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Essential Cookies</h3>
                <p className="text-muted-foreground mb-3">
                  These cookies are necessary for our website to function properly and cannot be disabled:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li><strong>Session Management:</strong> Keep you logged in during your visit</li>
                  <li><strong>Security:</strong> Protect against cross-site request forgery</li>
                  <li><strong>Form Data:</strong> Remember information you've entered</li>
                  <li><strong>Website Function:</strong> Enable basic site features like navigation</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Analytics Cookies</h3>
                <p className="text-muted-foreground mb-3">
                  These cookies help us understand how visitors use our website:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li><strong>Google Analytics:</strong> Traffic analysis and user behavior</li>
                  <li><strong>Page Views:</strong> Most popular content and pages</li>
                  <li><strong>User Journey:</strong> How visitors navigate through our site</li>
                  <li><strong>Performance:</strong> Site speed and technical issues</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  All analytics data is anonymized and cannot be used to identify individual users.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Marketing Cookies</h3>
                <p className="text-muted-foreground mb-3">
                  These cookies may be used to show you relevant content:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li><strong>Campaign Tracking:</strong> Measure effectiveness of our marketing</li>
                  <li><strong>Personalization:</strong> Tailor content to your interests</li>
                  <li><strong>Retargeting:</strong> Show relevant ads on other websites</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  You can opt out of marketing cookies through our cookie banner or browser settings.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Some cookies are set by third-party services we use:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li><strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
                <li><strong>Google Ads:</strong> Advertising and conversion tracking</li>
                <li><strong>Social Media:</strong> LinkedIn, Twitter sharing and tracking</li>
                <li><strong>Live Chat:</strong> Customer support and messaging features</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                These third parties have their own privacy policies governing their use of cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Your Cookie Preferences</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Cookie Banner</h3>
                <p className="text-muted-foreground mb-4">
                  When you first visit our site, you'll see a cookie banner where you can:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your preferences by cookie type</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Browser Settings</h3>
                <p className="text-muted-foreground mb-4">
                  You can control cookies through your browser settings:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Note: Disabling essential cookies may affect website functionality.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Specific Cookie Details</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-border px-4 py-2 text-left">Purpose</th>
                      <th className="border border-border px-4 py-2 text-left">Duration</th>
                      <th className="border border-border px-4 py-2 text-left">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-2">_ga</td>
                      <td className="border border-border px-4 py-2">Google Analytics - user identification</td>
                      <td className="border border-border px-4 py-2">2 years</td>
                      <td className="border border-border px-4 py-2">Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">_gid</td>
                      <td className="border border-border px-4 py-2">Google Analytics - user identification</td>
                      <td className="border border-border px-4 py-2">24 hours</td>
                      <td className="border border-border px-4 py-2">Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">session_id</td>
                      <td className="border border-border px-4 py-2">Maintain user session</td>
                      <td className="border border-border px-4 py-2">Session</td>
                      <td className="border border-border px-4 py-2">Essential</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">cookie_consent</td>
                      <td className="border border-border px-4 py-2">Remember cookie preferences</td>
                      <td className="border border-border px-4 py-2">1 year</td>
                      <td className="border border-border px-4 py-2">Essential</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Cookie Policy from time to time to reflect changes in 
                technology, legislation, or our business practices. We'll notify you of 
                significant changes through our website or email.
              </p>
            </section>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Questions About Cookies?</h3>
              <p className="text-muted-foreground">
                If you have questions about our use of cookies, please contact us:<br />
                Email: privacy@claimpayuk.com<br />
                Phone: 0800 123 4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;