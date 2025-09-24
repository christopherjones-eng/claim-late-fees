const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);

  const { company, email, invoiceNumber, amount, message } = formData;

  const { error: supabaseError } = await supabase.from("invoices").insert([
    {
      company,
      email,
      invoice_number: invoiceNumber,
      amount,
      message,
    },
  ]);

  if (supabaseError) {
    console.error(supabaseError);
    setError("Something went wrong. Please try again.");
  } else {
    navigate("/thank-you");
  }
};
