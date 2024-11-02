import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ykvgwdazixrhbetvduop.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlrdmd3ZGF6aXhyaGJldHZkdW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1MTU4NzIsImV4cCI6MjA0NjA5MTg3Mn0.NGyboxhTTdlEruI9H5Rd5I4OVDbVuIqZCusBSNHqkSg';

export const supabase = createClient(supabaseUrl, supabaseKey);