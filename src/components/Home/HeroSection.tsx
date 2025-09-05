import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield } from "lucide-react";

const HeroSection = () => {
  const scrollToClaimForm = () => {
    document.getElementById('claim-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient text-primary-foreground section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Headline */}
          <h1 className="text-hero mb-6">
            Recover What You're Owed—Fast. 
            <span className="text-secondary block">No Win, No Fee.</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-subtitle mb-8 text-primary-foreground/90">
            Turn unpaid invoices into recovered funds plus statutory compensation. 
            UK Late Payment Act gives you legal right to claim—we make it happen.
          </p>

          {/* Primary CTA */}
          <div className="mb-12">
            <Button 
              onClick={scrollToClaimForm}
              className="btn-hero text-lg px-10 py-4"
            >
              Start Your Claim
            </Button>
            <p className="text-sm text-primary-foreground/70 mt-2">
              Free consultation • No win, no fee
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-full mb-4">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Win, No Fee</h3>
              <p className="text-primary-foreground/80">
                We only take a percentage when you're successfully paid. 
                Zero upfront costs or hidden charges.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-full mb-4">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Legally Backed</h3>
              <p className="text-primary-foreground/80">
                Fully compliant with UK Late Payment Act and EU Directive. 
                Professional legal recovery process.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-full mb-4">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Process</h3>
              <p className="text-primary-foreground/80">
                Start your claim online in under 5 minutes. 
                Average recovery time: 14-30 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;