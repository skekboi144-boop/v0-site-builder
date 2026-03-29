import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const businessEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'LLcontractingnj@gmail.com',
        subject: `New Estimate Request from ${name}`,
        html: `
          <h2>New Estimate Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service Needed:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr />
          <p><small>This request was submitted via the L&L Contracting Group website contact form.</small></p>
        `,
      }),
    })

    if (!businessEmailResponse.ok) {
      const errorData = await businessEmailResponse.json()
      console.error('Resend API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'L&L Contracting Group <onboarding@resend.dev>',
        to: email,
        subject: 'We Received Your Estimate Request',
        html: `
          <h2>Thank You, ${name}!</h2>
          <p>We received your estimate request for ${service}.</p>
          <p>Our team will review your information and get back to you within 24 hours.</p>
          <p><strong>Your Submission Details:</strong></p>
          <p>Phone: ${phone}</p>
          <p>Service: ${service}</p>
          <p>Message: ${message.replace(/\n/g, '<br>')}</p>
          <p>Thank you for choosing L&L Contracting Group.<br>
          <strong>Built on Trust. Backed by Service.</strong></p>
        `,
      }),
    })

    return NextResponse.json(
      { success: true, message: 'Estimate request sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send estimate request' },
      { status: 500 }
    )
  }
}
