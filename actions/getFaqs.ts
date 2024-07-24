import { createClient } from '@/lib/supabase/server'
import { Database } from '@/types/supabase'

export const getFaqs = async (): Promise<Database['public']['Tables']['faqs']['Row'][]> => {
  const supabase = createClient()
  const { data, error } = await supabase.from('faqs').select('*')

  if (error) {
    console.error('Error fetching FAQs:', error)
    return []
  }
  return data || []
}
