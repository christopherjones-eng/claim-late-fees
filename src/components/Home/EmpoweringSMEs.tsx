import { Users, Target, Award, TrendingUp } from "lucide-react";

const EmpoweringSMEs = () => {
  const stats = [
    { label: "Money Recovered", value: "£2.3M+", icon: TrendingUp },
    { label: "Happy Clients", value: "500+", icon: Users },
    { label: "Success Rate", value: "94%", icon: Target },
    { label: "Years Experience", value: "8+", icon: Award },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Empowering SMEs to <span className="text-secondary">Enforce Payment Terms</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to help small and medium businesses get paid on time, 
            every time, without the stress of chasing overdue invoices.
          </p>
        </div>

        <div className="bg-gradient-hero text-primary-foreground rounded-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Our Impact</h3>
            <p className="text-xl leading-relaxed mb-8">
              Late payments cost UK businesses over £23 billion annually. We believe 
              every business deserves to be paid on time and compensated when they're not.
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
      </div>
    </section>
  );
};

export default EmpoweringSMEs;