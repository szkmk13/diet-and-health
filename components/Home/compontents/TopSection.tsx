import Link from 'next/link';
import { Star, BadgeCheck } from 'lucide-react';

interface TopSectionProps {
  opinionsCount: string;
}

export default function TopSection({ opinionsCount }: TopSectionProps) {
  return (
    <section className="py-20 md:py-28 px-6 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-6xl" style={{ color: 'var(--trainer-primary)' }}>
          Monika Skibicka
        </h1>
        <div className="h-1 w-20 mx-auto" style={{ backgroundColor: 'var(--trainer-accent)' }} />
        <p className="text-xl" style={{ color: 'var(--trainer-text)' }}>
          Dietetyk Kliniczny{' '}
          <BadgeCheck className="inline-block h-5 w-5 ml-1" style={{ color: 'var(--trainer-accent)' }} />
        </p>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--trainer-text-light)' }}>
          Skuteczna dieta to ta, którą jesteś w stanie utrzymać — bez zakazów, bez systemu zero-jedynkowego.
        </p>

        <div className="flex justify-center">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl"
            style={{ backgroundColor: 'var(--trainer-secondary)' }}
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" style={{ color: 'var(--trainer-accent)' }} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-medium" style={{ color: 'var(--trainer-text)' }}>
              {opinionsCount} opinii
            </span>
            <span className="text-xs" style={{ color: 'var(--trainer-text-light)' }}>ZnanyLekarz</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href="https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--trainer-accent)' }}
          >
            Umów wizytę
          </a>
          <Link
            href="/uslugi"
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium border-2 transition-all hover:scale-105"
            style={{ borderColor: 'var(--trainer-accent)', color: 'var(--trainer-accent)' }}
          >
            Zobacz ofertę
          </Link>
        </div>
      </div>
    </section>
  );
}
