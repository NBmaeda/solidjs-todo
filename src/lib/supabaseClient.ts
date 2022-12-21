import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  process.env.VITE_VERCEL_SUPABASE_URL,
  process.env.VITE_VERCEL_SUPABASE_ANON_KEY
);

export default supabaseClient;
