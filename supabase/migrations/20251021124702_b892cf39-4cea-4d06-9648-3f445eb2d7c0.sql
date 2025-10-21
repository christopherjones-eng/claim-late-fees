-- Create claims table for invoice submissions
CREATE TABLE IF NOT EXISTS public.claims (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  debtor_company TEXT NOT NULL,
  invoice_amount DECIMAL(10,2) NOT NULL,
  invoice_date DATE NOT NULL,
  due_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.claims ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert claims (public submission)
CREATE POLICY "Anyone can submit claims"
  ON public.claims
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy for admin read access (you can add authentication later)
CREATE POLICY "Admin can view all claims"
  ON public.claims
  FOR SELECT
  TO authenticated
  USING (true);

-- Create trigger for updating updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_claims_updated_at
  BEFORE UPDATE ON public.claims
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();