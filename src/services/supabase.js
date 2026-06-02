
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://gmfakxvqvvgksyjckays.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtZmFreHZxdnZna3N5amNrYXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3ODI5OTUsImV4cCI6MjA5NTM1ODk5NX0.wtkW3uWcYbqZ52118OCaUu31NYsjxfEZ6xqChezz2RU"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase