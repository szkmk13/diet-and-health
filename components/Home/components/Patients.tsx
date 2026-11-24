import Link from 'next/link';
import { Apple, Baby, Brain, Dumbbell, Leaf, HeartPulse, Scale, Pill, Syringe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface CardData {
  title: string;
  description: string | null;
  Icon: LucideIcon;
}

const cardsData: CardData[] = [
  { title: 'Osobom z nadwagą i niedowagą', description: null, Icon: Scale },
  { title: 'Kobietom w ciąży i dzieciom', description: null, Icon: Baby },
  { title: 'Sportowcom', description: null, Icon: Dumbbell },
  { title: 'Osobom na diecie roślinnej', description: null, Icon: Leaf },
  { title: 'Osobom chcącym zmienić nawyki żywieniowe', description: null, Icon: Apple },
  {
    title: 'Osobom z zaburzeniami odżywiania',
    description: 'M.in. utrata kontroli nad jedzeniem, napadowe objadanie się, anoreksja.',
    Icon: Brain,
  },
  {
    title: 'Osobom w trakcie farmakologicznego leczenia otyłości',
    description:
      'Dietoterapia dla pacjentów przyjmujących leki z grupy agonistów receptora GLP-1, zleconych przez lekarza prowadzącego.',
    Icon: Syringe,
  },
  {
    title: 'Osobom z dolegliwościami układu pokarmowego',
    description: 'Zaparcia, biegunki, wzdęcia, zgaga, nudności, refluks żołądkowo-przełykowy.',
    Icon: HeartPulse,
  },
  {
    title: 'Osobom z chorobami przewlekłymi',
    description:
      'Cukrzyca, insulinooporność, celiakia, SIBO, zespół jelita drażliwego, niedoczynność tarczycy, Hashimoto, anemia, wrzodziejące zapalenie jelita grubego, choroba Leśniowskiego-Crohna, dna moczanowa i inne.',
    Icon: Pill,
  },
];

export default function Patients() {
  return (
    <section className="bg-[var(--dh-mist)]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-4 py-16 sm:px-6 md:py-24 lg:flex-row lg:gap-16">
        <div className="lg:w-[300px] lg:shrink-0">
          <h2 className="font-display text-4xl leading-tight text-[var(--dh-indigo)] md:text-[3.25rem] md:leading-[1.1]">
            Komu pomagam?
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/uslugi"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--dh-indigo)] px-6 text-base font-semibold text-white transition-colors hover:bg-[var(--dh-ink)]"
            >
              Sprawdź ofertę
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-[1.5px] border-[var(--dh-ink)]/30 px-6 text-base font-semibold text-[var(--dh-ink)] transition-colors hover:border-[var(--dh-ink)]"
            >
              Kontakt
            </Link>
          </div>
        </div>

        <ul className="grid min-w-0 flex-1 border-b border-[var(--dh-ink)]/15 sm:grid-cols-2 sm:gap-x-10">
          {cardsData.map(({ title, description, Icon }) => (
            <li key={title} className="flex items-start gap-4 border-t border-[var(--dh-ink)]/15 py-5">
              <Icon
                className="mt-0.5 h-6 w-6 shrink-0 text-[var(--dh-teal-text)]"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <div>
                <p className="text-lg font-medium leading-snug">{title}</p>
                {description && (
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[#4b587c]">{description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
