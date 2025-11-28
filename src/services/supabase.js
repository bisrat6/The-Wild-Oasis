
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://hwokgdrzwffdgukvknbu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3b2tnZHJ6d2ZmZGd1a3ZrbmJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzODE0MTMsImV4cCI6MjA3ODk1NzQxM30.I-5A8lBeOnf4F43rJNsSOvURIrfGIeqs5S__IdubveE"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase