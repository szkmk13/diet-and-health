import Link from 'next/link';
import Image from 'next/image';
import { Star, BadgeCheck } from 'lucide-react';

interface TopSectionProps {
  opinionsCount: string;
}

export default function TopSection({ opinionsCount }: TopSectionProps) {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl order-2 mx-auto w-full max-h-64 md:max-h-[520px]"
            style={{ aspectRatio: '3/4' }}
          >
            <Image
              src="/images/monia_kontakt.jpeg"
              alt="Monika Skibicka"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="order-1 space-y-5">
            <div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl mb-3"
                style={{ color: 'var(--trainer-primary)' }}
              >
                Monika Skibicka
              </h1>
              <div className="h-1 w-20" style={{ backgroundColor: 'var(--trainer-accent)' }} />
            </div>

            <p className="text-lg md:text-xl flex items-center gap-2" style={{ color: 'var(--trainer-text)' }}>
              Dietetyk Kliniczny
              <BadgeCheck className="h-5 w-5" style={{ color: 'var(--trainer-accent)' }} />
            </p>

            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--trainer-text-light)' }}>
              Skuteczna dieta to ta, którą jesteś w stanie utrzymać - bez zakazów, bez systemu
              zero-jedynkowego.
            </p>

            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" style={{ color: 'var(--trainer-accent)' }} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium" style={{ color: 'var(--trainer-text-light)' }}>
                {opinionsCount} opinii
              </span>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
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
        </div>
      </div>
    </section>
  );
}
