import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      // Dev mode: just log and return success when Supabase is not configured
      console.log('[Waitlist] Supabase not configured. Would have saved:', email)
      return NextResponse.json({ success: true, message: 'Added to waitlist!' }, { status: 200 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { error } = await supabase
      .from('waitlist')
      .insert([{ email: email.toLowerCase().trim() }])

    if (error) {
      if (error.code === '23505') {
        // Unique constraint violation — email already exists
        return NextResponse.json(
          { error: 'This email is already on the waitlist!' },
          { status: 409 }
        )
      }
      console.error('[Waitlist] Supabase error:', error)
      return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Added to waitlist!' }, { status: 200 })
  } catch (err) {
    console.error('[Waitlist] Unexpected error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
