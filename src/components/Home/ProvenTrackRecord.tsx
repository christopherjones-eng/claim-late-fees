import { TrendingUp, Users, Award, CheckCircle } from "lucide-react";

const ProvenTrackRecord = () => {
  return (
    <section className="section-padding hero-gradient text-primary-foreground">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Proven Track Record
          </h2>
          <p className="text-subtitle text-primary-foreground/90 mb-12">
            Numbers that speak for themselves - we've helped hundreds of businesses recover what they're owed
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mx-auto mb-6 group-hover:bg-primary/30 transition-colors duration-300">
              <TrendingUp className="h-10 w-10 text-primary-foreground" />
            </div>
            <div className="text-4xl font-bold text-primary-foreground mb-2">£2.3M+</div>
            <div className="text-primary-foreground/80 font-medium">Money Recovered</div>
          </div>
          
          <div className="text-center group">
            <div className="flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mx-auto mb-6 group-hover:bg-secondary/30 transition-colors duration-300">
              <Users className="h-10 w-10 text-primary-foreground" />
            </div>
            <div className="text-4xl font-bold text-primary-foreground mb-2">500+</div>
            <div className="text-primary-foreground/80 font-medium">Happy Clients</div>
          </div>
          
          <div className="text-center group">
            <div className="flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mx-auto mb-6 group-hover:bg-accent/30 transition-colors duration-300">
              <Award className="h-10 w-10 text-primary-foreground" />
            </div>
            <div className="text-4xl font-bold text-primary-foreground mb-2">94%</div>
            <div className="text-primary-foreground/80 font-medium">Success Rate</div>
          </div>
          
          <div className="text-center group">
            <div className="flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mx-auto mb-6 group-hover:bg-primary/30 transition-colors duration-300">
              <CheckCircle className="h-10 w-10 text-primary-foreground" />
            </div>
            <div className="text-4xl font-bold text-primary-foreground mb-2">8+</div>
            <div className="text-primary-foreground/80 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenTrackRecord;