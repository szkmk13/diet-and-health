import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { verifyTurnstile } from '@/lib/turnstile';
import { escapeHtmlMultiline, readText } from '@/lib/escape-html';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LONG_FIELD_MAX = 3000;

const LONG_FIELDS = [
  ['purpose', 'Cel porady'],
  ['problems', 'Problemy zdrowotne'],
  ['drugs', 'Leki'],
  ['supplements', 'Suplementy'],
  ['intolerances', 'Nietolerancje / alergie'],
  ['ailments', 'Dolegliwości pokarmowe'],
  ['liquids', 'Płyny'],
  ['diet', 'Obecna dieta'],
  ['not_liked', 'Nielubiane produkty'],
] as const;

export async function POST(request: Request) {
  const body = await request.json();
  const name = readText(body.name, 100);
  const email = readText(body.email, 200);
  const date = readText(body.date, 50);
  const { turnstileToken } = body;

  if (!name || !email || date === null) {
    return NextResponse.json({ error: 'Brakujące lub zbyt długie pola formularza.' }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Niepoprawny adres email.' }, { status: 400 });
  }

  const longValues: string[] = [];
  for (const [key] of LONG_FIELDS) {
    const value = readText(body[key], LONG_FIELD_MAX);
    if (value === null) {
      return NextResponse.json({ error: 'Zbyt długie pola formularza.' }, { status: 400 });
    }
    longValues.push(value);
  }

  if (typeof turnstileToken !== 'string' || !(await verifyTurnstile(turnstileToken))) {
    return NextResponse.json({ error: 'Weryfikacja CAPTCHA nie powiodła się.' }, { status: 400 });
  }

  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px;font-weight:bold;background:#f3f4f6;border:1px solid #e5e7eb;">${label}</td><td style="padding:6px 12px;border:1px solid #e5e7eb;">${value ? escapeHtmlMultiline(value) : '-'}</td></tr>`;

  const { error } = await resend.emails.send({
    from: 'Ankieta przedwizytowa <onboarding@resend.dev>',
    to: process.env.RECIPIENT_EMAIL!,
    replyTo: email,
    subject: `Ankieta przedwizytowa od ${name} (${date})`,
    html: `
      <h2>Ankieta przedwizytowa</h2>
      <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
        ${row('Imię i nazwisko', name)}
        ${row('Email', email)}
        ${row('Data konsultacji', date)}
        ${LONG_FIELDS.map(([, label], i) => row(label, longValues[i])).join('')}
      </table>
    `,
  });

  if (error) {
    return NextResponse.json({ error: 'Błąd wysyłki emaila.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
