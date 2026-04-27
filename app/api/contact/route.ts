import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { verifyTurnstile } from '@/lib/turnstile';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message, turnstileToken } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Brakujące pola formularza.' }, { status: 400 });
  }

  if (!turnstileToken || !(await verifyTurnstile(turnstileToken))) {
    return NextResponse.json({ error: 'Weryfikacja CAPTCHA nie powiodła się.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Formularz kontaktowy <onboarding@resend.dev>',
    to: process.env.RECIPIENT_EMAIL!,
    subject: `Nowa wiadomość od ${name}`,
    html: `
      <h2>Nowa wiadomość z formularza kontaktowego</h2>
      <p><strong>Imię:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Wiadomość:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: 'Błąd wysyłki emaila.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
