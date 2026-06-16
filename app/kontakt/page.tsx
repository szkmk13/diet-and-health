import Image from 'next/image';
import { Mail, CalendarCheck } from 'lucide-react';
import ContactForm from '@/components/Contact/ContactForm';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

function ContactCard({ icon, title, description, href, linkLabel }: ContactCardProps) {
  return (
    <div className="p-6 md:p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border-2 border-transparent hover:border-[var(--trainer-accent)] flex flex-col gap-4">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
        style={{ backgroundColor: 'var(--trainer-accent)' }}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-lg mb-1" style={{ color: 'var(--trainer-primary)' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--trainer-text-light)' }}>
          {description}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium hover:underline"
          style={{ color: 'var(--trainer-accent)' }}
        >
          {linkLabel} →
        </a>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div>
                <h1 className="text-5xl mb-4" style={{ color: 'var(--trainer-primary)' }}>
                  Monika
                </h1>
                <div className="h-1 w-20 mb-6" style={{ backgroundColor: 'var(--trainer-accent)' }} />
                <p className="text-xl mb-4" style={{ color: 'var(--trainer-text)' }}>
                  Dietetyk Kliniczny
                </p>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--trainer-text-light)' }}>
                  Kompleksowe podejście do zdrowia i odżywiania. Pomagam moim pacjentom osiągać trwałe
                  zmiany poprzez indywidualnie dopasowaną dietę — bez wyrzeczeń, z przyjemnością jedzenia.
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105 text-white"
                  style={{ backgroundColor: 'var(--trainer-accent)' }}
                >
                  <CalendarCheck size={20} />
                  <span>Umów wizytę</span>
                </a>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4 / 3' }}>
                <Image
                  src="/images/monia_kontakt.jpeg"
                  alt="Monika Skibicka - Dietetyk Kliniczny"
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--trainer-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-12" style={{ color: 'var(--trainer-primary)' }}>
            Jak się skontaktować?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ContactCard
              icon={<Mail className="w-6 h-6" color="#ffffff" />}
              title="Email"
              description="Napisz do mnie bezpośrednio. Odpowiadam zazwyczaj w ciągu 24 godzin."
              href="mailto:kontakt@diet-and-health.pl"
              linkLabel="kontakt@diet-and-health.pl"
            />
            <ContactCard
              icon={<CalendarCheck className="w-6 h-6" color="#ffffff" />}
              title="ZnanyLekarz"
              description="Umów wizytę online lub stacjonarnie w Gdyni przez platformę ZnanyLekarz."
              href="https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia"
              linkLabel="Umów wizytę"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl text-center mb-4" style={{ color: 'var(--trainer-primary)' }}>
            Napisz do mnie
          </h2>
          <p className="text-center mb-12 text-lg" style={{ color: 'var(--trainer-text-light)' }}>
            Masz pytanie? Chętnie odpiszę.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
