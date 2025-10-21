import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUp, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ClaimForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    debtorCompany: "",
    invoiceAmount: "",
    invoiceDate: "",
    dueDate: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from("claims")
        .insert([
          {
            company_name: formData.companyName,
            contact_name: formData.contactName,
            email: formData.email,
            debtor_company: formData.debtorCompany,
            invoice_amount: parseFloat(formData.invoiceAmount),
            invoice_date: formData.invoiceDate,
            due_date: formData.dueDate,
          },
        ]);

      if (error) throw error;

      // Redirect to thank you page
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting claim:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your claim. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="claim-form" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Start Your Claim Today
            </h2>
            <p className="text-subtitle">
              Provide your invoice details and we'll handle the rest. 
              Our secure system protects your data with bank-level encryption.
            </p>
          </div>

          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 text-secondary mr-2" />
                Secure Claim Submission
              </CardTitle>
              <CardDescription>
                All information is encrypted and GDPR compliant. We never share your data.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Your Company Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactName">Contact Name</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
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
                  <Label htmlFor="debtorCompany">Debtor Company Name</Label>
                  <Input
                    id="debtorCompany"
                    name="debtorCompany"
                    value={formData.debtorCompany}
                    onChange={handleChange}
                    required
                    placeholder="Company that owes you money"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="invoiceAmount">Invoice Amount (£)</Label>
                    <Input
                      id="invoiceAmount"
                      name="invoiceAmount"
                      type="number"
                      value={formData.invoiceAmount}
                      onChange={handleChange}
                      required
                      placeholder="1000.00"
                      min="0"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="invoiceDate">Invoice Date</Label>
                    <Input
                      id="invoiceDate"
                      name="invoiceDate"
                      type="date"
                      value={formData.invoiceDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input
                      id="dueDate"
                      name="dueDate"
                      type="date"
                      value={formData.dueDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <FileUp className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Upload Invoice (Optional)
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, JPG, PNG up to 10MB
                  </p>
                </div>

                <Button type="submit" className="btn-hero w-full text-lg py-3" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Claim for Review"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                  No obligation until we successfully recover your money.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClaimForm;