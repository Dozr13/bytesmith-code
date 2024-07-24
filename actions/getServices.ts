import { createClient } from '@/lib/supabase/server'
import { Database } from '@/types/supabase'

export const getServices = async (): Promise<Database['public']['Tables']['services']['Row'][]> => {
  const supabase = createClient()
  const { data, error } = await supabase.from('services').select('*')

  if (error) {
    console.error('Error fetching services:', error)
    return []
  }
  return data || []
}
