import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient"; // <-- Supabase client

const Invoice = () => {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    invoiceNumber: "",
    amount: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from('invoices') // <-- Make sure this table exists in Supabase
      .insert([
        {
          company: formData.company,
          email: formData.email,
          invoice_number: formData.invoiceNumber,
          amount: formData.amount,
          message: formData.message,
        }
      ]);

    if (error) {
      alert("Oops! Something went wrong: " + error.message);
    } else {
      setFormData({ company: "", email: "", invoiceNumber: "", amount: "", message: "" });
      window.location.href = "/thank-you";
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
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="invoiceNumber">Invoice Number</Label>
                  <Input id="invoiceNumber" name="invoiceNumber" value={formData.invoiceNumber} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="amount">Amount (£)</Label>
                  <Input id="amount" name="amount" type="number" value={formData.amount} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="message">Additional Notes</Label>
                  <Input id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Optional details" />
                </div>

                <Button type="submit" className="btn-hero w-full">Submit Invoice</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Invoice;
