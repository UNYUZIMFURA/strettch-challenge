import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://esijmnrbgolvuomszvpi.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzaWptbnJiZ29sdnVvbXN6dnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NTg3MjEsImV4cCI6MjA0OTQzNDcyMX0.iJLD_21QLsQ3KDo68KgnY93XGervTOIFrt0k7YSnjKg"
export const supabase = createClient(supabaseUrl, supabaseKey)