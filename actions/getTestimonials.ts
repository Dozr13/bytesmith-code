import { createClient } from '@/lib/supabase/server'
import { Database } from '@/types/supabase'

export const getTestimonials = async (): Promise<Database['public']['Tables']['testimonials']['Row'][]> => {
  const supabase = createClient()
  const { data, error } = await supabase.from('testimonials').select('*')

  if (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
  return data || []
}
