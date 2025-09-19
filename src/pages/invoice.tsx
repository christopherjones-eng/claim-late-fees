import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { supabase } from "@/supabaseClient"; // 👈 Supabase client
import { useNavigate } from "react-router-dom";

const Invoice = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    amount: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("invoices").insert([
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        amount: parseFloat(formData.amount),
        description: formData.description
      }
    ]);

    setLoading(false);

    if (error) {
      console.error("Error saving invoice:", error.message);
      alert("Something went wrong. Please try again.");
    } else {
      navigate("/thank-you");
    }
  };

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Submit Your <span className="text-secondary">Invoice</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Upload your unpaid invoice details and let us help you recover your payment quickly and professionally.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle>Invoice Submission Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <Label htmlFor="amount">Invoice Amount (£)</Label>
                    <Input
                      id="amount"
                      name="amount"
                      type="number"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                      placeholder="Enter the amount"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Invoice Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      placeholder="What is this invoice for?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Invoice"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    All submitted invoices are kept secure and confidential.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Invoice;
