import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qapoyeedvulwykthceax.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhcG95ZWVkdnVsd3lrdGhjZWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxMzM4MDgsImV4cCI6MjAwMjcwOTgwOH0.cyaPdeod6wHeOdjvVYMosisKpmOG7FZYt3v9sO0VVq4"
);
