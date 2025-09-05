import { CheckCircle, Users, Award } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-subtitle text-muted-foreground mb-12">
            Simple, fast, and completely risk-free process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
              1
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Submit Invoice Details</h3>
            <p className="text-muted-foreground leading-relaxed">
              Upload your overdue invoice and delivery proof. We calculate your statutory entitlement under the Late Payment Act—takes under 3 minutes.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground rounded-full mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
              2
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Legal Demand Process</h3>
            <p className="text-muted-foreground leading-relaxed">
              We issue formal demand notices citing specific legislative rights, then escalate through statutory processes if needed. Professional, legally-backed recovery.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
              3
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Collect Full Amount</h3>
            <p className="text-muted-foreground leading-relaxed">
              Recover original debt + 8% statutory interest + fixed compensation + our fees. Average recovery: 14-28 days. You only pay when money is in your account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;