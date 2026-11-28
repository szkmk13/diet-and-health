import Image from 'next/image';
import Link from 'next/link';

const bulletPoints = [
  'Dietetyk kliniczny i psychodietetyk - mgr Gdańskiego Uniwersytetu Medycznego',
  'Studia podyplomowe z Psychodietetyki (WSB Merito)',
  'Indywidualne podejście - jadłospisy dopasowane do stanu zdrowia i preferencji',
  'Posiłki zdrowe, smaczne i łatwe do przygotowania',
  'Szukam przyczyny problemu, nie tylko objawów',
  'Zdrowa relacja z jedzeniem - bez zakazów i systemu zero-jedynkowego',
  'Konsultacje stacjonarne w Gdyni (Klinika Nadmorska Maritimus Clinic) oraz online (Google Meet lub WhatsApp)',
];

const strong = 'font-semibold text-[var(--dh-ink)]';

export default function About() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:flex-row lg:items-start lg:gap-[72px]">
        <div className="hidden w-[460px] shrink-0 lg:block">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/monia_sport.webp"
              alt="Monika Skibicka"
              fill
              quality={90}
              sizes="460px"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h2>
            <span className="font-display block text-4xl leading-tight text-[var(--dh-indigo)] md:text-[3.25rem] md:leading-[1.1]">
              mgr Monika Skibicka
            </span>
            <span className="mt-2.5 block text-lg font-semibold text-[var(--dh-teal-text)]">DIETETYK KLINICZNY</span>
          </h2>

          {/* Full text - desktop */}
          <div className="mt-6 hidden max-w-[64ch] space-y-4 text-[1.0625rem] leading-relaxed text-[var(--dh-body)] md:block">
            <p>
              Jestem <span className={strong}>dietetykiem klinicznym i psychodietetykiem.</span> Ukończyłam studia
              magisterskie na Gdańskim Uniwersytecie Medycznym na kierunku Dietetyka oraz studia podyplomowe z
              Psychodietetyki na Uniwersytecie WSB Merito. Do każdego pacjenta podchodzę{' '}
              <span className={`${strong} underline underline-offset-4`}>indywidualnie.</span> Jadłospisy układam po
              szczegółowym wywiadzie dotyczącym dotychczasowego sposobu żywienia. Uwzględniam wszystkie dolegliwości,
              problemy zdrowotne, a także preferencje smakowe.
            </p>
            <p>
              Chcę, aby zaproponowane posiłki były nie tylko zdrowe, ale przede wszystkim smaczne i łatwe do
              przygotowania.{' '}
              <span className={strong}>Zależy mi przede wszystkim na znalezieniu przyczyny problemów z jedzeniem.</span>{' '}
              Nie jestem zwolenniczką systemu zero-jedynkowego -{' '}
              <span className={strong}>najważniejsze jest dla mnie zadbanie o zdrową relację z jedzeniem.</span>
            </p>
            <p>
              Konsultacje stacjonarne prowadzę między innymi w gabinecie w{' '}
              <span className={strong}>Gdyni (Klinika Nadmorska Maritimus Clinic).</span> Jest też możliwość umówienia
              się na <span className={strong}>konsultację online</span> - za pośrednictwem Google Meet lub WhatsApp.{' '}
              <Link href="/kontakt" className={`${strong} underline underline-offset-4`}>
                Zapraszam do kontaktu!
              </Link>
            </p>
          </div>

          {/* Bullet points - mobile */}
          <ul className="mt-6 space-y-3 text-[0.95rem] leading-relaxed text-[var(--dh-body)] md:hidden">
            {bulletPoints.map((item) => (
              <li key={item} className="flex items-start gap-3 border-t border-[var(--dh-ink)]/15 pt-3">
                <span className="font-bold text-[var(--dh-teal-text)]" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
