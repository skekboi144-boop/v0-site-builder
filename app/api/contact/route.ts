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

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send email to business
    const businessEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'LLcontractingnj@gmail.com',
        subject: `New Free Estimate Request from ${name}`,
        html: `
          <h2>New Free Estimate Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    })

    if (!businessEmailResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to send estimate request' },
        { status: 500 }
      )
    }

    // Send confirmation email to user
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Your Free Estimate Request - L&L Contracting Group',
        html: `
          <h2>Thank You for Your Request</h2>
          <p>Hi ${name},</p>
          <p>We received your free estimate request and will get back to you within 24 hours.</p>
          <p>If you have any urgent questions, feel free to call us or email us directly.</p>
          <p>Best regards,<br>L&L Contracting Group</p>
        `,
      }),
    })

    return NextResponse.json({
      success: true,
      message: 'Your estimate request has been sent!',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
