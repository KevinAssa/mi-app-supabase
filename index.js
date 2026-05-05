import { createClient } from '@supabase/supabase-js' 
const supabaseUrl = 'https://nomwvustlceajbmczxgj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vbXd2dXN0bGNlYWpibWN6eGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5NDk0MjksImV4cCI6MjA5MzUyNTQyOX0.9hLHaRM_ANvhlGOjkieYTSi27OQoBvDFFAPBL2oh0z4'
const supabase = createClient(supabaseUrl, supabaseKey)
async function obtenerEstudiantes() {
 const { data, error } = await supabase
 .from('estudiantes')
 .select('*')
 if (error) {
 console.log('Error:', error)
 } else {
 console.log('Datos:', data)
 }
}
obtenerEstudiantes()