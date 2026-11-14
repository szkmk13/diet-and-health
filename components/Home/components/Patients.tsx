import Link from 'next/link';
import { Apple, Baby, Dumbbell, Cookie, Leaf, HeartPulse, Scale, Pill } from 'lucide-react';
import PatientCard from './PatientCard';
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
  { title: 'Osobom, które mają problem z utratą kontroli nad jedzeniem', description: null, Icon: Cookie },
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
    <section className="py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-12" style={{ color: 'var(--trainer-primary)' }}>
          Komu pomagam?
        </h2>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-12">
          {cardsData.map(({ title, description, Icon }) => (
            <PatientCard
              key={title}
              title={title}
              description={description}
              icon={<Icon className="h-10 w-10" style={{ color: 'var(--trainer-accent)' }} />}
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/uslugi"
            className="inline-flex items-center px-8 py-3 rounded-lg text-base font-medium transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--trainer-accent)', color: 'var(--trainer-primary)' }}
          >
            Sprawdź ofertę
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center px-8 py-3 rounded-lg text-base font-medium border-2 transition-all hover:scale-105"
            style={{ borderColor: 'var(--trainer-accent)', color: 'var(--trainer-accent-strong)' }}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}
