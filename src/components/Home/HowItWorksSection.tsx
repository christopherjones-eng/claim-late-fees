import { Card, CardContent } from "@/components/ui/card";
import { FileText, Search, Phone, CreditCard } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Invoice Details",
      description: "Upload your overdue invoice information through our secure online form below.",
      time: "2-5 minutes"
    },
    {
      icon: Search,
      title: "We Review & Investigate",
      description: "Our legal team verifies the debt and calculates interest and fees under UK Late Payment legislation.",
      time: "24-48 hours"
    },
    {
      icon: Phone,
      title: "Professional Recovery",
      description: "We contact your debtor professionally, citing legal obligations. Most cases resolve without court action.",
      time: "7-14 days"
    },
    {
      icon: CreditCard,
      title: "You Get Paid",
      description: "Once payment is received, we transfer your money plus recovered interest and fees.",
      time: "1-3 days"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            How We Recover Your <span className="text-secondary">Late Payment Fees</span>
          </h2>
          <p className="text-subtitle max-w-3xl mx-auto">
            Our proven 4-step process leverages UK law to recover both your outstanding payments 
            and statutory compensation for late payment.
          </p>
        </div>

        <div className="space-y-8">
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
      </div>
    </section>
  );
};

export default HowItWorksSection;