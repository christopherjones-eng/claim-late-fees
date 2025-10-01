import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/supabaseClient";

const Invoice: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    invoiceNumber: "",
    amount: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { company, email, invoiceNumber, amount, message } = formData;

    try {
      const { data, error: supabaseError } = await supabase.from("invoices").insert([
        {
          company,
          email,
          invoice_number: invoiceNumber,
          amount: Number(amount),
          message,
        },
      ]);

      setLoading(false);

      if (supabaseError) {
        console.error("Supabase error:", supabaseError);
        setError(`Something went wrong: ${supabaseError.message}`);
      } else {
        // Success
        setFormData({ company: "", email: "", invoiceNumber: "", amount: "", message: "" });
        navigate("/thank-you");
      }
    } catch (err) {
      setLoading(false);
      console.error("Unexpected error:", err);
      setError("Something went wrong. Please try again.");
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
                    type="text"
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
                    type="text"
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
                    type="text"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Optional details"
                  />
                </div>

                {error && <p className="text-red-500">{error}</p>}

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

