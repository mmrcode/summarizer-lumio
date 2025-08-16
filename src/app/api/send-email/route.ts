import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { summary, emails } = await request.json()

    if (!summary) {
      return NextResponse.json({ error: 'Summary is required' }, { status: 400 })
    }

    if (!emails || !Array.isArray(emails) || emails.length === 0) {
      return NextResponse.json({ error: 'Email addresses are required' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'RESEND_API_KEY not configured' }, { status: 500 })
    }

    if (!process.env.FROM_EMAIL) {
      return NextResponse.json({ error: 'FROM_EMAIL not configured' }, { status: 500 })
    }

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: emails,
      subject: 'Meeting Summary',
      html: `
        <h2>Meeting Summary</h2>
        <div style="white-space: pre-wrap; font-family: Arial, sans-serif; line-height: 1.6;">
          ${summary.replace(/\n/g, '<br>')}
        </div>
        <hr>
        <p style="color: #666; font-size: 12px;">
          This summary was generated using AI and may require review.
        </p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, messageId: data?.id })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
