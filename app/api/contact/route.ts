import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { verifyTurnstile } from '@/lib/turnstile';
import { escapeHtml, escapeHtmlMultiline, readText } from '@/lib/escape-html';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json();
  const name = readText(body.name, 100);
  const email = readText(body.email, 200);
  const message = readText(body.message, 5000);
  const { turnstileToken } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Brakujące lub zbyt długie pola formularza.' }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Niepoprawny adres email.' }, { status: 400 });
  }

  if (typeof turnstileToken !== 'string' || !(await verifyTurnstile(turnstileToken))) {
    return NextResponse.json({ error: 'Weryfikacja CAPTCHA nie powiodła się.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Formularz kontaktowy <onboarding@resend.dev>',
    to: process.env.RECIPIENT_EMAIL!,
    replyTo: email,
    subject: `Nowa wiadomość od ${name}`,
    html: `
      <h2>Nowa wiadomość z formularza kontaktowego</h2>
      <p><strong>Imię:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Wiadomość:</strong></p>
      <p>${escapeHtmlMultiline(message)}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: 'Błąd wysyłki emaila.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
