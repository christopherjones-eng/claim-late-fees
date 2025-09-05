import Layout from "@/components/Layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information necessary to provide our debt recovery services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li><strong>Business Information:</strong> Company name, registration details, contact information</li>
                <li><strong>Debt Details:</strong> Invoice information, debtor details, contract terms</li>
                <li><strong>Communication Records:</strong> Emails, phone calls, correspondence</li>
                <li><strong>Financial Information:</strong> Bank details for payment processing</li>
                <li><strong>Website Data:</strong> IP addresses, browser information, usage analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Provide debt recovery services and legal proceedings</li>
                <li>Communicate with debtors and third parties on your behalf</li>
                <li>Process payments and manage our fee structure</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and website functionality</li>
                <li>Send service updates and case progress reports</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Legal Basis for Processing</h2>
              <p className="text-muted-foreground mb-4">
                We process your data under the following legal bases:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li><strong>Contract Performance:</strong> Fulfilling our debt recovery service agreement</li>
                <li><strong>Legitimate Interests:</strong> Pursuing debt recovery and business operations</li>
                <li><strong>Legal Obligation:</strong> Compliance with courts, regulators, and law enforcement</li>
                <li><strong>Consent:</strong> Where explicitly provided for marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li><strong>Debtors:</strong> Essential case information for recovery purposes</li>
                <li><strong>Courts and Legal Authorities:</strong> When required by legal proceedings</li>
                <li><strong>Professional Advisors:</strong> Solicitors, barristers, and expert witnesses</li>
                <li><strong>Service Providers:</strong> IT support, payment processors (under strict contracts)</li>
                <li><strong>Credit Reference Agencies:</strong> For debt recovery and enforcement</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We never sell your personal data to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your data for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li><strong>Active Cases:</strong> Duration of case plus 6 years (legal limitation period)</li>
                <li><strong>Financial Records:</strong> 7 years from transaction date</li>
                <li><strong>Marketing Data:</strong> Until consent is withdrawn</li>
                <li><strong>Website Analytics:</strong> 26 months maximum</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Under UK GDPR, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate information</li>
                <li><strong>Erasure:</strong> Request deletion (subject to legal obligations)</li>
                <li><strong>Portability:</strong> Receive data in machine-readable format</li>
                <li><strong>Restriction:</strong> Limit processing in certain circumstances</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Note: Some rights may be limited during active legal proceedings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement robust security measures including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Encrypted data transmission and storage</li>
                <li>Access controls and staff training</li>
                <li>Regular security audits and updates</li>
                <li>Secure backup and disaster recovery procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-4">
                Our website uses essential cookies for functionality and analytics cookies to improve user experience. 
                See our Cookie Policy for detailed information about cookies used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. International Transfers</h2>
              <p className="text-muted-foreground mb-4">
                We primarily process data within the UK. Any international transfers are protected by 
                appropriate safeguards including adequacy decisions or standard contractual clauses.
              </p>
            </section>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Contact Our Data Protection Officer</h3>
              <p className="text-muted-foreground">
                For privacy-related queries or to exercise your rights:<br />
                Email: dpo@claimpayuk.com<br />
                Post: ClaimPayUK Limited, Data Protection Officer<br />
                [Full Address]<br /><br />
                You also have the right to complain to the Information Commissioner's Office (ICO) 
                if you're unhappy with how we've handled your personal data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;