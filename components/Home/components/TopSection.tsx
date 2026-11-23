import Link from 'next/link';
import Image from 'next/image';
import { Star, BadgeCheck } from 'lucide-react';

interface TopSectionProps {
  opinionsCount: string;
}

export default function TopSection({ opinionsCount }: TopSectionProps) {
  return (
    <section className="bg-[var(--dh-mist)]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:flex-row lg:gap-16 lg:py-24">
        <div className="min-w-0 flex-1">
          <h1>
            <span className="block text-base font-semibold text-[var(--dh-teal-text)] sm:text-lg">Monika Skibicka</span>{' '}
            <span className="flex items-center gap-2 text-base text-[var(--dh-teal-text)] sm:text-lg">
              Dietetyk kliniczny w Gdyni
              <BadgeCheck className="h-5 w-5" aria-hidden="true" />
            </span>
          </h1>
          <p className="font-display mt-5 max-w-[15ch] text-[2.5rem] leading-[1.08] tracking-[-0.01em] text-[var(--dh-indigo)] sm:text-6xl lg:text-[4.5rem] lg:leading-[1.06]">
            Skuteczna dieta to ta, którą jesteś w stanie utrzymać.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--dh-indigo)] px-7 text-base font-semibold text-white transition-colors hover:bg-[var(--dh-ink)]"
            >
              Umów wizytę
            </a>
            <Link
              href="/uslugi"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-[1.5px] border-[var(--dh-ink)]/30 px-7 text-base font-semibold text-[var(--dh-ink)] transition-colors hover:border-[var(--dh-ink)]"
            >
              Zobacz ofertę
            </Link>
          </div>

          <div className="mt-9 flex items-center gap-2 text-[0.95rem] text-[var(--dh-body)]">
            <span className="flex text-[#e08a12]" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <strong className="font-semibold text-[var(--dh-ink)]">{opinionsCount} opinii</strong>
          </div>
        </div>

        <div className="w-full max-w-sm sm:max-w-[460px] lg:w-[460px] lg:shrink-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white">
            <Image
              src="/images/monia_kontakt.webp"
              alt="Monika Skibicka - dietetyk kliniczny w Gdyni"
              fill
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover object-[50%_20%]"
              preload
            />
          </div>
        </div>
      </div>
    </section>
  );
}
