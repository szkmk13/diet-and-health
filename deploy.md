# Deploy na Vercel — zmienne środowiskowe

Wejdź w: **Vercel → projekt → Settings → Environment Variables**

---

## Resend (wysyłka maili)

| Zmienna | Wartość |
|---|---|
| `RESEND_API_KEY` | Klucz API z [resend.com/api-keys](https://resend.com/api-keys) |
| `RECIPIENT_EMAIL` | Email Moniki (docelowy adres, na który trafiają formularze) |

> Na produkcji zmień też adres `from` w `app/api/contact/route.ts` i `app/api/survey/route.ts` z `onboarding@resend.dev` na `noreply@twoja-domena.pl` (domena musi być zweryfikowana w Resend).

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
