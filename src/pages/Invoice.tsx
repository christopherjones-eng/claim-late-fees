import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Invoice() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    invoice_number: "",
    amount: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Track input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log("Submitting invoice:", formData);

    const { data, error: supabaseError } = await supabase
      .from("invoices")
      .insert([{
        company: formData.company,
        email: formData.email,
        invoice_number: formData.invoice_number,
        amount: Number(formData.amount),
        message: formData.message,
      }]);

    console.log("Supabase response:", { data, supabaseError });

    if (supabaseError) {
      setError(supabaseError.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate("/thank-you");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-lg shadow-xl p-8 bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Submit Invoice for Review
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />

            <input
              type="text"
              name="invoice_number"
              id="invoice_number"
              placeholder="Invoice Number"
              value={formData.invoice_number}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />

            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />

            <textarea
              name="message"
              id="message"
              placeholder="Additional Details (optional)"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit Invoice"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
