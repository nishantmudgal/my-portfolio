'use server'

import { getSupabaseClient } from '@/lib/supabase'

export async function submitContact(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    throw new Error('Missing fields')
  }

  const supabase = getSupabaseClient()

  const { error } = await supabase
    .from('contact_messages')
    .insert([{ name, email, message }])

  if (error) {
    throw new Error('Failed to submit')
  }
}
