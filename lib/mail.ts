import { Resend } from 'resend';

/**
 * Adres testowy Resend. Działa bez weryfikacji domeny, ale Resend dostarcza z niego
 * maile TYLKO na adres właściciela konta Resend. Żeby formularze trafiały do Moniki,
 * ustaw MAIL_FROM_ADDRESS na adres ze zweryfikowanej domeny (np. formularz@diet-and-health.pl).
 */
const TEST_FROM_ADDRESS = 'onboarding@resend.dev';

interface FormEmail {
  /** Nazwa nadawcy widoczna w skrzynce, np. "Formularz kontaktowy". */
  senderName: string;
  /** Email osoby, która wypełniła formularz - "Odpowiedz" trafi prosto do niej. */
  replyTo: string;
  subject: string;
  html: string;
}

/** Wysyła wiadomość z formularza na RECIPIENT_EMAIL. Zwraca false, gdy wysyłka się nie udała. */
export async function sendFormEmail({ senderName, replyTo, subject, html }: FormEmail): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RECIPIENT_EMAIL;
  if (!apiKey || !to) {
    console.error('[mail] Brak RESEND_API_KEY lub RECIPIENT_EMAIL - mail nie został wysłany.');
    return false;
  }

  const fromAddress = process.env.MAIL_FROM_ADDRESS || TEST_FROM_ADDRESS;
  const { error } = await new Resend(apiKey).emails.send({
    from: `${senderName} <${fromAddress}>`,
    to,
    replyTo,
    subject,
    html,
  });

  if (error) {
    console.error(`[mail] Resend odrzucił wysyłkę (nadawca: ${fromAddress}): ${error.name}: ${error.message}`);
    return false;
  }
  return true;
}
