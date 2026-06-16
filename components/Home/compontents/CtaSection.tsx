import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: 'var(--trainer-primary)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl mb-4 text-white">Czas na zmianę?</h2>
        <div className="h-1 w-20 mx-auto mb-6" style={{ backgroundColor: 'var(--trainer-accent)' }} />
        <p className="text-lg mb-10" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Pierwsza konsultacja to krok, który może zmienić Twoje podejście do jedzenia na zawsze.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 rounded-lg text-base font-medium text-white transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--trainer-accent)' }}
          >
            Umów wizytę
          </a>
          <Link
            href="/uslugi"
            className="inline-flex items-center px-8 py-3 rounded-lg text-base font-medium text-white border-2 transition-all hover:scale-105"
            style={{ borderColor: 'rgba(255, 255, 255, 0.4)' }}
          >
            Zobacz ofertę i cennik
          </Link>
        </div>
      </div>
    </section>
  );
}
