import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { verifyTurnstile } from '@/lib/turnstile';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, date, purpose, problems, drugs, supplements, intolerances, ailments, liquids, diet, not_liked, turnstileToken } = data;

  if (!name || !email) {
    return NextResponse.json({ error: 'Brakujące pola formularza.' }, { status: 400 });
  }

  if (!turnstileToken || !(await verifyTurnstile(turnstileToken))) {
    return NextResponse.json({ error: 'Weryfikacja CAPTCHA nie powiodła się.' }, { status: 400 });
  }

  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px;font-weight:bold;background:#f3f4f6;border:1px solid #e5e7eb;">${label}</td><td style="padding:6px 12px;border:1px solid #e5e7eb;">${(value || '-').replace(/\n/g, '<br/>')}</td></tr>`;

  const { error } = await resend.emails.send({
    from: 'Ankieta przedwizytowa <onboarding@resend.dev>',
    to: process.env.RECIPIENT_EMAIL!,
    subject: `Ankieta przedwizytowa od ${name} (${date})`,
    html: `
      <h2>Ankieta przedwizytowa</h2>
      <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
        ${row('Imię i nazwisko', name)}
        ${row('Email', email)}
        ${row('Data konsultacji', date)}
        ${row('Cel porady', purpose)}
        ${row('Problemy zdrowotne', problems)}
        ${row('Leki', drugs)}
        ${row('Suplementy', supplements)}
        ${row('Nietolerancje / alergie', intolerances)}
        ${row('Dolegliwości pokarmowe', ailments)}
        ${row('Płyny', liquids)}
        ${row('Obecna dieta', diet)}
        ${row('Nielubiane produkty', not_liked)}
      </table>
    `,
  });

  if (error) {
    return NextResponse.json({ error: 'Błąd wysyłki emaila.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
