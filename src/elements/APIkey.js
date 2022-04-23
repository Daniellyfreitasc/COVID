import { createClient } from "@supabase/supabase-js";



export const SUPABASE_URL = 'https:COVID.supabase.co/rest/v1';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvemRtZXVheGZ6dmlocXhzYm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA2NDU5NTksImV4cCI6MTk2NjIyMTk1OX0.A45M7zjbvkFKeMLu_tqG1OT9KmoybNe9CN_mgXINxx4';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

 const dadosDoSupabase = supabaseClient
.from('covid')
 .select('*');