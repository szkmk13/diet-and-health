import ContactSurvey from '@/components/Contact/ContactSurvey';
import { fontVariables } from '@/lib/fonts';

const steps = [
  {
    number: 1,
    title: 'Wyniki badań',
    description: 'Zabierz ze sobą ostatnio wykonywane wyniki badań, jeśli takie posiadasz.',
  },
  {
    number: 2,
    title: 'Analiza składu ciała',
    description:
      'Na konsultacji wykonuję analizę składu ciała. Bezpośrednio przed badaniem nie zaleca się intensywnego treningu ani sauny. Najlepiej przyjść 2–3 godziny po posiłku i po opróżnieniu pęcherza.',
  },
  {
    number: 3,
    title: 'Wygodny strój',
    description:
      'Na analizator składu ciała wchodzi się gołymi stopami - wygodniej przyjść w skarpetkach zamiast rajstop.',
  },
  {
    number: 4,
    title: 'Dzienniczek żywieniowy',
    description:
      'Możesz przygotować dzienniczek żywieniowy i zabrać go ze sobą. Przez 3 dni na bieżąco opisuj spożywane posiłki: godzinę, miejsce, wielkość porcji, płyny i samopoczucie po jedzeniu.',
  },
  {
    number: 5,
    title: 'Wstępna ankieta',
    description:
      'Zachęcam do wypełnienia wstępnej ankiety, która znajduje się poniżej. Dzięki niej będę mogła lepiej przygotować się do naszej konsultacji.',
  },
];

export default function Page() {
  return (
    <div className={`dh-page min-h-screen bg-white ${fontVariables}`}>
      {/* Hero Section */}
      <section className="bg-[var(--dh-mist)]">
        <div className="mx-auto max-w-[1240px] px-4 pb-14 pt-14 sm:px-6 md:pb-20 md:pt-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div>
              <h1 className="font-display text-5xl leading-[1.05] text-[var(--dh-indigo)] md:text-[4.5rem]">
                Przed wizytą
              </h1>
              <p className="mt-3.5 text-xl font-semibold text-[var(--dh-teal-text)] md:text-[1.375rem]">
                Jak się przygotować?
              </p>
            </div>
            <p className="max-w-[460px] text-lg leading-relaxed text-[var(--dh-body)]">
              Poniżej znajdziesz wskazówki oraz wstępną ankietę, którą możesz wypełnić przed
pierwszą konsultacją.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-4 pb-20 pt-16 sm:px-6 md:pb-24 md:pt-22">
          <h2 className="font-display text-4xl leading-tight text-[var(--dh-indigo)] md:text-5xl">Wskazówki</h2>
          <ol className="mt-10 grid gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <li key={step.number} className="border-t-[3px] border-[var(--dh-teal)] pt-5">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--dh-indigo)] text-base font-bold text-white"
                >
                  {step.number}
                </span>
                <h3 className="mt-4 text-[1.1875rem] font-semibold leading-snug">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-[var(--dh-body)]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Survey Section */}
      <section className="bg-[var(--dh-ink)]">
        <div className="mx-auto max-w-[860px] px-4 pb-24 pt-20 sm:px-6 md:pb-28 md:pt-24">
          <h2 className="font-display text-center text-4xl leading-tight text-white md:text-5xl">Wstępna ankieta</h2>
          <p className="mx-auto mt-3.5 max-w-[46ch] text-center text-lg leading-relaxed text-white/85">
            Jesteś umówiony na konsultację? Wypełnij formularz przed wizytą.
          </p>
          <div className="mt-10">
            <ContactSurvey />
          </div>
        </div>
      </section>
    </div>
  );
}
