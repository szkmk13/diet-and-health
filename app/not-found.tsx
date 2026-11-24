import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { fontVariables } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Nie znaleziono strony',
};

const links = [
  { href: '/uslugi', title: 'Oferta i cennik', hint: 'Konsultacje i jadłospisy' },
  // Treningi tymczasowo ukryte (jak w menu). Żeby przywrócić, odkomentuj:
  // { href: '/treningi', title: 'Treningi', hint: 'HYROX, CrossFit, plany' },
  { href: '/przedwizyta', title: 'Przed wizytą', hint: 'Ankieta i wskazówki' },
  { href: '/kontakt', title: 'Kontakt', hint: 'Umów wizytę' },
];

export default function NotFound() {
  return (
    <section className={`dh-page bg-[var(--dh-mist)] ${fontVariables}`}>
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:flex-row lg:gap-[72px]">
        <div className="relative hidden aspect-[4/5] w-[440px] max-w-full shrink-0 overflow-hidden rounded-2xl md:block">
          <Image
            src="/images/jogurt_granola.webp"
            alt="Jogurt z granolą i malinami"
            fill
            preload
            sizes="(max-width: 768px) 0px, 440px"
            className="object-cover"
            style={{ objectPosition: 'center 60%' }}
          />
        </div>

        <div className="flex w-full min-w-0 flex-1 flex-col">
          <p className="m-0 text-[17px] font-semibold text-[var(--dh-teal-text)]">Błąd 404</p>
          <h1 className="font-display m-0 mt-3.5 max-w-[16ch] text-4xl leading-[1.08] text-[var(--dh-indigo)] md:text-[3.5rem]">
            Zboczyłeś z planu? Spokojnie, to się zdarza.
          </h1>
          <p className="m-0 mt-5 max-w-[48ch] text-lg leading-relaxed text-[var(--dh-body)]">
            Tej strony nie ma albo została przeniesiona. Wybierz, dokąd chcesz przejść:
          </p>

          <nav aria-label="Przydatne strony" className="mt-7 border-b border-[var(--dh-ink)]/15">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-16 items-center justify-between gap-4 border-t border-[var(--dh-ink)]/15 py-3.5 text-[var(--dh-ink)] transition-colors hover:text-[var(--dh-indigo)]"
              >
                <span className="flex flex-col gap-0.5">
                  <span className="text-lg font-semibold">{link.title}</span>
                  <span className="text-[15px] text-[#4b587c]">{link.hint}</span>
                </span>
                <ArrowRight aria-hidden="true" className="h-[22px] w-[22px] shrink-0 text-[var(--dh-teal-text)]" />
              </Link>
            ))}
          </nav>

          <Link
            href="/"
            className="mt-8 inline-flex min-h-[52px] items-center self-start rounded-full bg-[var(--dh-indigo)] px-7 text-base font-semibold text-white transition-colors hover:bg-[var(--dh-ink)]"
          >
            Wróć na stronę główną
          </Link>
        </div>
      </div>
    </section>
  );
}
