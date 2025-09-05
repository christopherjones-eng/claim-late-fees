import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
const CustomerTestimonials = () => {
  return <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-subtitle text-muted-foreground mb-12">
            Real stories from real businesses who got their money back
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="card-professional hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <CardTitle className="text-xl text-card-foreground">Sarah Johnson</CardTitle>
              <CardDescription className="text-muted-foreground">Marketing Agency Owner</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-card-foreground leading-relaxed">"Overall, they recovered £12,000 that I thought was lost forever. Professional, efficient, and no upfront costs. The peace of mind alone was worth it!"</p>
            </CardContent>
          </Card>

          <Card className="card-professional hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <CardTitle className="text-xl text-card-foreground">Michael Williams</CardTitle>
              <CardDescription className="text-muted-foreground">Construction Company Director</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-card-foreground leading-relaxed">
                "Outstanding service. They handled everything while I focused on my business. Got our £8,500 back within 6 weeks - impressive!"
              </p>
            </CardContent>
          </Card>

          <Card className="card-professional hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <CardTitle className="text-xl text-card-foreground">Emma Thompson</CardTitle>
              <CardDescription className="text-muted-foreground">Freelance Consultant</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-card-foreground leading-relaxed">
                "As a small business owner, late payments were killing my cash flow. These guys sorted it out quickly and professionally."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default CustomerTestimonials;