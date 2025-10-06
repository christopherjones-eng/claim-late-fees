import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export default function Invoice() {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    invoice_number: "",
    amount: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    const { error } = await supabase.from("invoices").insert([
      {
        company: formData.company,
        email: formData.email,
        invoice_number: formData.invoice_number,
        amount: formData.amount,
        message: formData.message,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      setStatus("Error submitting invoice. Please try again.");
    } else {
      setStatus("Invoice submitted successfully!");
      setFormData({ company: "", email: "", invoice_number: "", amount: "", message: "" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-xl font-semibold">Submit Your Invoice</h2>

        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="invoice_number"
          value={formData.invoice_number}
          onChange={handleChange}
          placeholder="Invoice Number"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message (optional)"
          className="w-full p-2 border rounded"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit Claim for Review
        </button>

        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </div>
  );
}

