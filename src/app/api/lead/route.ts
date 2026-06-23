import { NextRequest, NextResponse } from 'next/server'

interface LeadData {
  firstName?: string
  lastName?: string
  email: string
  phone?: string
  dateOfBirth?: string
  nationality?: string
  passportNumber?: string
  passportExpiry?: string
  passportCountry?: string
  purposeOfTravel?: string
  arrivalDate?: string
  departureDate?: string
  processingSpeed?: string
  type?: string
  name?: string
  subject?: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json()

    // Contact form submissions only require email + message
    if (data.type === 'contact') {
      if (!data.email || !data.message) {
        return NextResponse.json({ error: 'Missing required field' }, { status: 400 })
      }
    } else {
      const requiredFields: (keyof LeadData)[] = [
        'firstName', 'lastName', 'email', 'dateOfBirth', 'nationality',
        'passportNumber', 'passportExpiry', 'passportCountry',
        'purposeOfTravel', 'arrivalDate', 'processingSpeed',
      ]
      for (const field of requiredFields) {
        if (!data[field]) {
          return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
        }
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    const leadId = `LEAD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    const leadRecord = {
      id: leadId,
      ...data,
      submittedAt: new Date().toISOString(),
      status: 'pending',
    }

    // Log the submission (in production, save to database or send via email)
    console.log('New submission:', leadRecord)

    // TODO: Add your preferred integration:
    // - Email (SendGrid, Resend, etc.)
    // - Webhook (Zapier, Make, etc.)
    // - Database (Supabase, etc.)

    return NextResponse.json({
      success: true,
      message: 'Submitted successfully',
      referenceId: leadId,
    })
  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
