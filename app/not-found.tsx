import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nie znaleziono strony',
};

const links = [
  { href: '/uslugi', title: 'Oferta i cennik', hint: 'Konsultacje i jadłospisy' },
  { href: '/treningi', title: 'Treningi', hint: 'HYROX, CrossFit, plany' },
  { href: '/przedwizyta', title: 'Przed wizytą', hint: 'Ankieta i wskazówki' },
  { href: '/kontakt', title: 'Kontakt', hint: 'Umów wizytę' },
];

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-white px-6 py-12 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[5fr_7fr] md:gap-16">
        <div className="relative mx-auto hidden aspect-[4/5] w-full max-h-[560px] overflow-hidden rounded-2xl shadow-2xl md:block">
          <Image
            src="/images/owsianka.webp"
            alt="Owsianka z malinami i granolą"
            fill
            preload
            sizes="(max-width: 768px) 0px, 40vw"
            className="object-cover"
            style={{ objectPosition: 'center 60%' }}
          />
        </div>

        <div className="flex w-full flex-col gap-7">
          <div className="flex flex-col gap-3.5">
            <p className="m-0 text-sm font-semibold uppercase tracking-[2px]" style={{ color: '#1d7a7d' }}>
              Błąd 404
            </p>
            <h1
              className="m-0 text-3xl font-bold leading-tight md:text-[44px]"
              style={{ color: 'var(--trainer-primary)' }}
            >
              Zboczyłeś z planu? Spokojnie, to się zdarza.
            </h1>
            <p className="m-0 text-lg leading-relaxed" style={{ color: '#4b5563' }}>
              Tej strony nie ma albo została przeniesiona. Wybierz, dokąd chcesz przejść:
            </p>
          </div>

          <nav aria-label="Przydatne strony" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-16 items-center justify-between gap-3 rounded-xl border-2 border-transparent px-[18px] py-3.5 transition-colors hover:border-[var(--trainer-accent)]"
                style={{ color: 'var(--trainer-primary)', backgroundColor: 'var(--trainer-secondary)' }}
              >
                <span className="flex flex-col gap-0.5">
                  <span className="text-base font-semibold">{link.title}</span>
                  <span className="text-[13px]" style={{ color: 'var(--trainer-text-light)' }}>
                    {link.hint}
                  </span>
                </span>
                <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0" style={{ color: 'var(--trainer-accent)' }} />
              </Link>
            ))}
          </nav>

          <Link
            href="/"
            className="inline-flex min-h-12 items-center self-start rounded-[10px] px-7 text-base font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--trainer-accent)', color: 'var(--trainer-primary)' }}
          >
            Wróć na stronę główną
          </Link>
        </div>
      </div>
    </section>
  );
}
