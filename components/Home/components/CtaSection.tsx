import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-4 pb-24 pt-16 sm:px-6 md:pb-28 md:pt-24">
        <div className="max-w-[680px]">
          <h2 className="font-display text-4xl leading-tight text-[var(--dh-indigo)] md:text-[3.25rem] md:leading-[1.1]">
            Czas na zmianę?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--dh-body)] md:text-[1.1875rem]">
            Pierwsza konsultacja to krok, który może zmienić Twoje podejście do jedzenia na zawsze.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
              Zobacz ofertę i cennik
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
