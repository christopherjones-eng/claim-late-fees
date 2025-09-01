import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { label: "Money Recovered", value: "£2.3M+", icon: TrendingUp },
    { label: "Happy Clients", value: "500+", icon: Users },
    { label: "Success Rate", value: "94%", icon: Target },
    { label: "Years Experience", value: "8+", icon: Award },
  ];

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Empowering SMEs to <span className="text-secondary">Enforce Payment Terms</span>
          </h2>
          <p className="text-subtitle max-w-3xl mx-auto">
            We're on a mission to help small and medium businesses get paid on time, 
            every time, without the stress of chasing overdue invoices.
          </p>
        </div>

        {/* Stats */}
        <div className="bg-gradient-hero text-primary-foreground rounded-xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
            <p className="text-lg leading-relaxed mb-8 text-primary-foreground/90">
              Late payments cost UK businesses over £23 billion annually. We believe every business 
              deserves to be paid on time and compensated when they're not.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-full mb-3">
                    <stat.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="card-professional">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Deep Legal Expertise
              </h3>
              <p className="text-muted-foreground">
                Our team combines legal qualifications with years of practical debt 
                recovery experience. We know exactly how to navigate UK payment legislation.
              </p>
            </CardContent>
          </Card>

          <Card className="card-professional">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Technology-Driven Process
              </h3>
              <p className="text-muted-foreground">
                Our proprietary system automates much of the recovery process, reducing 
                costs and speeding up results for our clients.
              </p>
            </CardContent>
          </Card>

          <Card className="card-professional">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                SME-Focused Approach
              </h3>
              <p className="text-muted-foreground">
                We specialize in helping small and medium businesses. We understand 
                your challenges and design our service around your needs.
              </p>
            </CardContent>
          </Card>

          <Card className="card-professional">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Transparent Pricing
              </h3>
              <p className="text-muted-foreground">
                No hidden fees, no upfront costs. Our success is directly tied to yours - 
                we only succeed when you get paid.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;