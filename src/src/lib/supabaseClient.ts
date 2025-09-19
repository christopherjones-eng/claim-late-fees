// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://pwusqgogteecnaiiotrm.supabase.co', // your Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3dXNxZ29ndGVlY25haWlvdHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxODgwNzEsImV4cCI6MjA3Mzc2NDA3MX0.RQb6VDYbRAUtXQtdwgReixdZk4cEfMI96CXifuu5-O4' // your anon key
);
