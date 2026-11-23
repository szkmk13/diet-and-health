import Image from 'next/image';
import { Mail, CalendarCheck, MapPin } from 'lucide-react';
import { clinic, socialLinks } from '@/lib/seo';
import { fontVariables } from '@/lib/fonts';
import ContactForm from '@/components/Contact/ContactForm';

interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

function ContactMethod({ icon, title, description, href, linkLabel }: ContactMethodProps) {
  return (
    <div className="border-t-[3px] border-[var(--dh-teal)] pt-6">
      <span
        aria-hidden="true"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--dh-mist)] text-[var(--dh-teal-text)]"
      >
        {icon}
      </span>
      <h3 className="mt-[18px] text-[1.375rem] font-semibold">{title}</h3>
      <p className="mt-2 text-base leading-relaxed text-[var(--dh-body)]">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3.5 inline-flex min-h-11 items-center break-all text-base font-semibold text-[var(--dh-indigo)] underline underline-offset-4 hover:text-[var(--dh-ink)]"
      >
        {linkLabel} →
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <div className={`dh-page min-h-screen bg-white ${fontVariables}`}>
      {/* Hero Section */}
      <section className="bg-[var(--dh-mist)]">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:flex-row lg:gap-16">
          <div className="min-w-0 flex-1">
            <h1>
              <span className="font-display block text-5xl leading-[1.05] text-[var(--dh-indigo)] md:text-[4.5rem]">
                Monika
              </span>{' '}
              <span className="mt-3.5 block text-lg font-semibold text-[var(--dh-teal-text)] md:text-[1.3125rem]">
                Dietetyk kliniczny w Gdyni - kontakt i zapisy
              </span>
            </h1>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-[var(--dh-body)]">
              Kompleksowe podejście do zdrowia i odżywiania. Pomagam moim pacjentom osiągać trwałe
              zmiany poprzez indywidualnie dopasowaną dietę - bez wyrzeczeń, z przyjemnością jedzenia.
            </p>
            <a
              href="https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-[var(--dh-indigo)] px-7 text-base font-semibold text-white transition-colors hover:bg-[var(--dh-ink)]"
            >
              <CalendarCheck size={20} aria-hidden="true" />
              <span>Umów wizytę</span>
            </a>
          </div>

          <div className="w-full max-w-sm sm:max-w-[420px] lg:w-[420px] lg:shrink-0">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/monia_kontakt.webp"
                alt="Monika Skibicka - Dietetyk Kliniczny"
                fill
                preload
                quality={90}
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 md:py-24">
          <h2 className="font-display text-4xl leading-tight text-[var(--dh-indigo)] md:text-5xl">
            Jak się skontaktować?
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            <ContactMethod
              icon={<Mail className="h-[22px] w-[22px]" />}
              title="Email"
              description="Napisz do mnie bezpośrednio. Odpowiadam zazwyczaj w ciągu 24 godzin."
              href="mailto:kontakt@diet-and-health.pl"
              linkLabel="kontakt@diet-and-health.pl"
            />
            <ContactMethod
              icon={<CalendarCheck className="h-[22px] w-[22px]" />}
              title="ZnanyLekarz"
              description="Umów wizytę online lub stacjonarnie w Gdyni przez platformę ZnanyLekarz."
              href={socialLinks.znanyLekarz}
              linkLabel="Umów wizytę"
            />
            <ContactMethod
              icon={<MapPin className="h-[22px] w-[22px]" />}
              title="Gabinet w Gdyni"
              description={`${clinic.name}, ${clinic.streetAddress}, ${clinic.postalCode} ${clinic.city}. Wizyty stacjonarne i online.`}
              href={clinic.mapsUrl}
              linkLabel="Pokaż na mapie"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[var(--dh-mist)]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-4 pb-24 pt-16 sm:px-6 md:pb-28 md:pt-24 lg:flex-row lg:gap-16">
          <div className="lg:w-[300px] lg:shrink-0">
            <h2 className="font-display text-4xl leading-tight text-[var(--dh-indigo)] md:text-5xl">Napisz do mnie</h2>
            <p className="mt-3.5 text-lg leading-relaxed text-[var(--dh-body)]">Masz pytanie? Chętnie odpiszę.</p>
          </div>
          <div className="min-w-0 flex-1">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
