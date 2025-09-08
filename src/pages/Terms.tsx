import Layout from "@/components/Layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Service Agreement</h2>
              <p className="text-muted-foreground mb-4">
                ClaimPayUK Limited ("we", "us", "our") provides late payment recovery services to UK businesses. 
                By using our services, you agree to these terms and conditions.
              </p>
              <p className="text-muted-foreground mb-4">
                Our services are provided on a "No Win, No Fee" basis, meaning you pay nothing unless we successfully 
                recover funds on your behalf.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Eligibility</h2>
              <p className="text-muted-foreground mb-4">
                Our services are available to UK registered businesses with valid commercial debts covered under 
                the Late Payment of Commercial Debts (Interest) Act 1998.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Debt must be from business-to-business transactions</li>
                <li>Payment must be overdue by at least 30 days</li>
                <li>You must have supplied goods or services as agreed</li>
                <li>Minimum claim value of £5000</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Fees and Payment</h2>
              <p className="text-muted-foreground mb-4">
                Our standard fee is 25% of the total amount recovered (including interest and compensation). 
                This fee is only charged upon successful recovery.
              </p>
              <p className="text-muted-foreground mb-4">
                You are entitled to statutory compensation and interest under UK law, which forms part of your recovery.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Our Obligations</h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Act professionally and in accordance with UK legal requirements</li>
                <li>Provide regular updates on case progress</li>
                <li>Pursue all reasonable recovery methods</li>
                <li>Maintain confidentiality of your business information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Obligations</h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Provide accurate and complete information</li>
                <li>Supply all relevant documentation</li>
                <li>Notify us of any payments received directly</li>
                <li>Authorize us to act on your behalf</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Our liability is limited to the fees paid to us. We cannot guarantee recovery success, 
                though we maintain high success rates through professional processes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                We process your data in accordance with UK GDPR and our Privacy Policy. 
                We only use your information for debt recovery purposes and legitimate business interests.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These terms are governed by English law. Any disputes will be resolved through 
                English courts or alternative dispute resolution.
              </p>
            </section>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Contact Information</h3>
              <p className="text-muted-foreground">
                ClaimPayUK Limited<br />
                Registered in England & Wales<br />
                Company Number: [Company Number]<br />
                Email: legal@claimpayuk.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;