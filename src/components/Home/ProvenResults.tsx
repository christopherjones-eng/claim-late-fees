import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Users, Award, Star } from "lucide-react";

const ProvenResults = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Money Recovered Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Proven Track Record
          </h2>
          <p className="text-subtitle mb-12">
            We've helped hundreds of businesses recover what they're owed
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">£2.3M+</div>
              <div className="text-muted-foreground">Money Recovered</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">94%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">8+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Submit Your Claim</h4>
              <p className="text-muted-foreground">
                Provide basic details about your unpaid invoice - takes less than 2 minutes
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary text-secondary-foreground rounded-full mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">We Take Action</h4>
              <p className="text-muted-foreground">
                Our experts handle all communication and legal proceedings on your behalf
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-full mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Get Paid</h4>
              <p className="text-muted-foreground">
                We recover your money plus compensation for late payment - you pay nothing upfront
              </p>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                <CardDescription>Marketing Agency Owner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "They recovered £12,000 that I thought was lost forever. Professional, efficient, and no upfront costs. Highly recommended!"
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Michael Chen</CardTitle>
                <CardDescription>Construction Company Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Outstanding service. They handled everything while I focused on my business. Got our £8,500 back within 6 weeks."
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Emma Thompson</CardTitle>
                <CardDescription>Freelance Consultant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "As a small business owner, late payments were killing my cash flow. These guys sorted it out quickly and professionally."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;