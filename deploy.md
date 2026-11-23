# Deploy na Vercel — zmienne środowiskowe

Wejdź w: **Vercel → projekt → Settings → Environment Variables**

---

## Resend (wysyłka maili z formularzy do Moniki)

Formularz kontaktowy (`/kontakt`) i ankieta (`/przedwizyta`) wysyłają maile przez Resend na adres z `RECIPIENT_EMAIL`. "Odpowiedz" w mailu trafia prosto do osoby, która wypełniła formularz.

| Zmienna | Wartość |
|---|---|
| `RESEND_API_KEY` | Klucz API z [resend.com/api-keys](https://resend.com/api-keys) |
| `RECIPIENT_EMAIL` | Skrzynka Moniki, na którą mają trafiać formularze (np. `kontakt@diet-and-health.pl`) |
| `MAIL_FROM_ADDRESS` | Adres nadawcy ze zweryfikowanej domeny, np. `formularz@diet-and-health.pl` |

### Weryfikacja domeny (jednorazowo, wymagana)

Bez niej maile dochodzą tylko na adres właściciela konta Resend, a nie do Moniki.

1. Resend → **Domains** → **Add Domain** → `diet-and-health.pl`.
2. Dodaj rekordy DNS, które pokaże Resend (DKIM oraz MX i TXT/SPF dla subdomeny `send`), u dostawcy domeny. Nie zmieniaj istniejących rekordów MX samej domeny, bo od nich zależy obecna poczta.
3. Poczekaj, aż status domeny zmieni się na **Verified**.
4. Ustaw `MAIL_FROM_ADDRESS` na Vercelu i zrób redeploy.

Jeśli `MAIL_FROM_ADDRESS` nie jest ustawione, kod używa adresu testowego `onboarding@resend.dev`.

### Sprawdzenie

Wyślij testowy formularz na stronie i sprawdź skrzynkę z `RECIPIENT_EMAIL` (także spam). Gdy wysyłka się nie uda, w logach Vercel (Functions) pojawi się wpis zaczynający się od `[mail]` z powodem.

---

## Cloudflare Turnstile (ochrona formularzy przed botami)

| Zmienna | Wartość |
|---|---|
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Site Key z Cloudflare Dashboard → Turnstile |
| `TURNSTILE_SECRET_KEY` | Secret Key z Cloudflare Dashboard → Turnstile |

> Pamiętaj, żeby w panelu Cloudflare Turnstile dodać domenę produkcyjną (np. `twoja-domena.pl`) do listy dozwolonych hostnames.

---

## Supabase

| Zmienna | Wartość |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL projektu z [supabase.com](https://supabase.com) → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `anon` key z Supabase → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | `service_role` key z Supabase → Settings → API (nie udostępniaj publicznie!) |

---

## NextAuth (panel admina)

| Zmienna | Wartość |
|---|---|
| `NEXTAUTH_SECRET` | Losowy ciąg znaków — wygeneruj np. przez `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Pełny URL produkcyjny, np. `https://twoja-domena.pl` |
| `AUTH_USERNAME` | Login do panelu admina |
| `AUTH_PASSWORD` | Hasło do panelu admina |
