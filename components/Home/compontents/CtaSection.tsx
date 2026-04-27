import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="my-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-6 py-14 text-center">
      <h2 className="mb-3 text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-3xl">Czas na zmianę?</h2>
      <p className="mb-8 text-base text-gray-600 dark:text-gray-400 md:text-lg">
        Pierwsza konsultacja to krok, który może zmienić Twoje podejście do jedzenia na zawsze.
      </p>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-lg bg-primary2 px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
        >
          Umów wizytę
        </Link>
        <Link
          href="/uslugi"
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-8 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 sm:w-auto"
        >
          Zobacz ofertę i cennik
        </Link>
      </div>
    </section>
  );
}
