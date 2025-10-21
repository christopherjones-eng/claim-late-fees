import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/supabaseClient"; // ✅ import Supabase client
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      navigate("/thank-you");
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "claims@claimpayuk.com",
      subtitle: "24/7 support inbox",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "25 Finsbury Circus, London EC2M 7EA",
      subtitle: "Registered office",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM",
      subtitle: "Emergency support available",
    },
  ];

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Our <span className="text-secondary">Expert Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about late payment recovery? Need help with a
              specific case? Our team of specialists is here to help you get
              paid what you're owed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>

              {contactInfo.map((item, index) => (
                <Card key={index} className="card-professional">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-foreground font-medium break-all">
                          {item.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Actions */}
              <Card className="card-professional bg-gradient-secondary text-secondary-foreground">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-8 w-8 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Need Immediate Help?
                  </h3>
                  <p className="text-sm mb-4 opacity-90">
                    Our emergency support team is available for urgent cases
                  </p>
                  <Button
                    variant="outline"
                    className="text-secondary-foreground border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
                  >
                    Emergency Contact
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your late payment situation..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="btn-hero w-full"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We respect your privacy. Your information is never shared
                      with third parties.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
