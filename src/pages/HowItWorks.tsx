import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Search, MessageCircle, CreditCard, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  const handleStartClaim = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      document.getElementById('claim-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const steps = [
    {
      icon: FileText,
      title: "Submit Invoice Details",
      description: "Upload your overdue invoice information through our secure online form. We need basic details about your debtor and payment terms.",
      time: "2-5 minutes"
    },
    {
      icon: Search,
      title: "We Review & Investigate",
      description: "Our legal team reviews your case, verifies the debt validity, and calculates interest and fees under UK Late Payment legislation.",
      time: "24-48 hours"
    },
    {
      icon: MessageCircle,
      title: "Professional Contact",
      description: "We contact your debtor professionally via email and formal letters, citing legal obligations and consequences. Most cases resolve at this stage without court action.",
      time: "7-14 days"
    },
    {
      icon: CreditCard,
      title: "You Get Paid",
      description: "Once payment is received, we deduct our agreed percentage and transfer your money plus recovered interest and fees.",
      time: "1-3 days"
    }
  ];

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How We Recover Your <span className="text-secondary">Late Payment Fees</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 4-step process leverages UK law to recover both your outstanding payments 
              and statutory compensation for late payment.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-secondary-foreground">
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                <Card className="card-professional flex-grow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {index + 1}. {step.title}
                      </h3>
                      <span className="text-sm text-secondary font-medium bg-secondary/10 px-3 py-1 rounded-full">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Legal Framework */}
          <div className="bg-muted/50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Legal Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  UK Late Payment Act
                </h3>
                <p className="text-muted-foreground mb-4">
                  The Late Payment of Commercial Debts (Interest) Act 1998 gives businesses 
                  the statutory right to claim interest and recovery costs on overdue invoices.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    8% + Bank of England base rate annual interest
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Fixed compensation: £40-£100 depending on debt size
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Additional reasonable recovery costs
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  EU Late Payment Directive
                </h3>
                <p className="text-muted-foreground mb-4">
                  Directive 2011/7/EU provides additional protections for cross-border 
                  transactions and strengthens payment terms enforcement.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    30-day payment terms unless agreed otherwise
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Automatic interest from day of default
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Recovery costs compensation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Recover Your Money?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of UK businesses who have recovered over £2.3M in late payment fees.
            </p>
            <Button onClick={handleStartClaim} className="btn-hero text-lg px-10 py-4">
              Start Your Claim Now
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
