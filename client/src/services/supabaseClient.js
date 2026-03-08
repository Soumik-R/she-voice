import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gjeaivmykdnswowalqlg.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqZWFpdm15a2Ruc3dvd2FscWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NTQ1MzQsImV4cCI6MjA4ODUzMDUzNH0.w81SQNuzfZHmpexUamV1TIDCu_Xn7IpVVKUYjTIPHA0";

export const supabase = createClient(supabaseUrl, supabaseKey);