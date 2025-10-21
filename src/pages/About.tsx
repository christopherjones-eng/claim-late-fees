import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleStartClaim = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      document.getElementById('claim-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const stats = [
    {
      label: "Money Recovered",
      value: "£2.3M+",
      icon: TrendingUp
    },
    {
      label: "Happy Clients",
      value: "500+",
      icon: Users
    },
    {
      label: "Success Rate",
      value: "94%",
      icon: Target
    },
    {
      label: "Years Experience",
      value: "8+",
      icon: Award
    }
  ];

  const team = [
    {
      name: "James Richardson",
      role: "Founder & CEO",
      background: "Former credit controller with 12 years experience at leading UK law firms. Specializes in commercial debt recovery and late payment legislation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Mitchell",
      role: "Head of Legal Recovery",
      background: "Qualified solicitor with expertise in commercial law and debt collection. Led recovery teams at major factoring companies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "David Chen",
      role: "Technology Director",
      background: "Former fintech executive who built automated debt collection systems for major banks. Ensures our platform delivers results efficiently.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering SMEs to <span className="text-secondary">Enforce Payment Terms</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to help small and medium businesses get paid on time, 
              every time, without the stress of chasing overdue invoices.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-hero text-primary-foreground rounded-xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed mb-8">
                Late payments cost UK businesses over £23 billion annually and force thousands 
                into insolvency. We believe every business deserves to be paid on time and 
                compensated when they're not. That's why we've built the UK's most effective 
                late payment recovery service.
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

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ClaimPayUK was founded in 2016 when our CEO, James Richardson, witnessed 
                  firsthand how late payments were destroying small businesses. After spending 
                  years in credit control at major law firms, he saw a gap in the market.
                </p>
                <p>
                  Small businesses knew they had legal rights but lacked the resources to 
                  enforce them. Meanwhile, large corporations continued to abuse payment terms, 
                  knowing SMEs couldn't afford lengthy legal battles.
                </p>
                <p>
                  We changed that by creating a no-win, no-fee service that levels the playing 
                  field. Now any business can access professional debt recovery without upfront 
                  costs or legal expertise.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                alt="Professional team meeting" 
                className="rounded-xl shadow-large" 
              />
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Meet Our Expert Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="card-professional text-center">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.background}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-muted/50 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Why Choose ClaimPayUK?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Deep Legal Expertise
                  </h3>
                  <p className="text-muted-foreground">
                    Our team combines legal qualifications with years of practical debt 
                    recovery experience. We know exactly how to navigate UK payment legislation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Technology-Driven Process
                  </h3>
                  <p className="text-muted-foreground">
                    Our proprietary system automates much of the recovery process, reducing 
                    costs and speeding up results for our clients.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    SME-Focused Approach
                  </h3>
                  <p className="text-muted-foreground">
                    We specialise in helping small and medium businesses. We understand your 
                    challenges and design our service around your needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Transparent Pricing
                  </h3>
                  <p className="text-muted-foreground">
                    No hidden fees, no upfront costs. Our success is directly tied to yours - 
                    we only succeed when you get paid.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our expert team recover what's rightfully yours.
            </p>
            <Button onClick={handleStartClaim} className="btn-hero text-lg px-10 py-4">
              Start Your Claim Today
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
