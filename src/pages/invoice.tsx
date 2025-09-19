import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/supabaseClient"; // ✅ import Supabase client

const Invoice = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    invoiceNumber: "",
    amount: "",
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

    const { error } = await supabase.from("invoices").insert([
      {
        company: formData.company,
        email: formData.email,
        invoice_number: formData.invoiceNumber,
        amount: formData.amount,
        message: formData.message,
      },
    ]);

    setLoading(false);

    if (error) {
      alert("Something went wrong: " + error.message);
    } else {
      navigate("/thank-you"); // ✅ redirect on success
    }
  };

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-custom">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle>Submit Your Invoice</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
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
                  />
                </div>

                <div>
                  <Label htmlFor="invoiceNumber">Invoice Number</Label>
                  <Input
                    id="invoiceNumber"
                    name="invoiceNumber"
                    value={formData.invoiceNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="amount">Amount (£)</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Additional Notes</Label>
                  <Input
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Optional details"
                  />
                </div>

                <Button type="submit" className="btn-hero w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Invoice"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Invoice;
