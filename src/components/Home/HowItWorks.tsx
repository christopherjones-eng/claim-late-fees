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
            <h3 className="text-xl font-semibold text-foreground mb-4">Submit Your Claim</h3>
            <p className="text-muted-foreground leading-relaxed">
              Provide basic details about your unpaid invoice - takes less than 2 minutes. No complex paperwork required.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground rounded-full mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
              2
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">We Take Action</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our legal experts handle all communication and proceedings on your behalf. You can focus on your business.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
              3
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Get Paid</h3>
            <p className="text-muted-foreground leading-relaxed">
              We recover your money plus compensation for late payment. You pay nothing upfront - we only succeed when you do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;