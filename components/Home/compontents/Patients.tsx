'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Apple, Baby, Dumbbell, Cookie, Leaf, HeartPulse, Scale, Pill, ChevronDown } from 'lucide-react';
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

function PatientCard({ title, description, Icon }: CardData) {
  const [open, setOpen] = useState(false);
  const clickable = !!description;

  return (
    <div
      onClick={() => clickable && setOpen(!open)}
      className={`flex flex-col items-center gap-3 rounded-xl p-5 text-center transition-all duration-200 border-2 ${
        clickable ? 'cursor-pointer hover:shadow-md hover:border-[var(--trainer-accent)]' : 'border-transparent'
      }`}
      style={{ backgroundColor: 'var(--trainer-secondary)' }}
    >
      <Icon className="h-10 w-10" style={{ color: 'var(--trainer-accent)' }} />
      <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--trainer-primary)' }}>
        {title}
      </p>
      {clickable && (
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          style={{ color: 'var(--trainer-text-light)' }}
        />
      )}
      {open && description && (
        <p
          className="text-xs leading-relaxed border-t pt-3 mt-1"
          style={{ color: 'var(--trainer-text-light)', borderColor: 'var(--trainer-secondary)' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Patients() {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-12" style={{ color: 'var(--trainer-primary)' }}>
          Komu pomagam?
        </h2>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-12">
          {cardsData.map((item, index) => (
            <PatientCard key={index} {...item} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/uslugi"
            className="inline-flex items-center px-8 py-3 rounded-lg text-base font-medium text-white transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--trainer-accent)' }}
          >
            Sprawdź ofertę
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center px-8 py-3 rounded-lg text-base font-medium border-2 transition-all hover:scale-105"
            style={{ borderColor: 'var(--trainer-accent)', color: 'var(--trainer-accent)' }}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}
