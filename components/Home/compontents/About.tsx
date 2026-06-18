import Image from 'next/image';

const bulletPoints = [
  'Dietetyk kliniczny i psychodietetyk - mgr Gdańskiego Uniwersytetu Medycznego',
  'Studia podyplomowe z Psychodietetyki (WSB Merito)',
  'Indywidualne podejście - jadłospisy dopasowane do stanu zdrowia i preferencji',
  'Posiłki zdrowe, smaczne i łatwe do przygotowania',
  'Szukam przyczyny problemu, nie tylko objawów',
  'Zdrowa relacja z jedzeniem - bez zakazów i systemu zero-jedynkowego',
];

export default function About() {
  return (
    <section className="py-12 md:py-20 px-6" style={{ backgroundColor: 'var(--trainer-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1 / 1' }}>
              <Image
                src="/images/monia_sport.jpg"
                alt="Monika Skibicka"
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl" style={{ color: 'var(--trainer-primary)' }}>
              Dietetyk Kliniczny
              <br />& Psychodietetyk
            </h2>
            <div className="h-1 w-20" style={{ backgroundColor: 'var(--trainer-accent)' }} />

            {/* Full text - desktop */}
            <div className="hidden md:block space-y-4">
              <p className="text-base leading-relaxed" style={{ color: 'var(--trainer-text-light)' }}>
                Jestem{' '}
                <span className="font-semibold" style={{ color: 'var(--trainer-text)' }}>
                  dietetykiem klinicznym i psychodietetykiem.
                </span>{' '}
                Ukończyłam studia magisterskie na Gdańskim Uniwersytecie Medycznym na kierunku Dietetyka oraz studia
                podyplomowe z Psychodietetyki na Uniwersytecie WSB Merito. Do każdego pacjenta podchodzę{' '}
                <span className="font-semibold underline">indywidualnie.</span> Jadłospisy układam po szczegółowym
                wywiadzie dotyczącym dotychczasowego sposobu żywienia. Uwzględniam wszystkie dolegliwości, problemy
                zdrowotne, a także preferencje smakowe.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--trainer-text-light)' }}>
                Chcę, aby zaproponowane posiłki były nie tylko zdrowe, ale przede wszystkim smaczne i łatwe do
                przygotowania.{' '}
                <span className="font-semibold" style={{ color: 'var(--trainer-text)' }}>
                  Zależy mi przede wszystkim na znalezieniu przyczyny problemów z jedzeniem.
                </span>{' '}
                Nie jestem zwolenniczką systemu zero-jedynkowego -{' '}
                <span className="font-semibold">
                  najważniejsze jest dla mnie zadbanie o zdrową relację z jedzeniem.
                </span>
              </p>
            </div>

            {/* Bullet points - mobile */}
            <ul className="md:hidden space-y-2 text-sm">
              {bulletPoints.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold flex-shrink-0" style={{ color: 'var(--trainer-accent)' }}>
                    ✓
                  </span>
                  <span style={{ color: 'var(--trainer-text-light)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
