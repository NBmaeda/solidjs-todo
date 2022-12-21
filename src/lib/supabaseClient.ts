import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  VITE_VERCEL_SUPABASE_URL,
  VITE_VERCEL_SUPABASE_ANON_KEY
);

export default supabaseClient;
