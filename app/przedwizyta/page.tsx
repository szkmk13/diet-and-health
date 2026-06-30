import Image from 'next/image';
import ContactSurvey from '@/components/Contact/ContactSurvey';

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

interface StepProps {
  number: number;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="flex gap-5 p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[var(--trainer-accent)]">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-medium text-sm"
        style={{ backgroundColor: 'var(--trainer-accent)' }}
      >
        {number}
      </div>
      <div>
        <h3 className="text-base font-medium mb-1" style={{ color: 'var(--trainer-primary)' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--trainer-text-light)' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div>
                <h1 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--trainer-primary)' }}>
                  Przed wizytą
                </h1>
                <div className="h-1 w-20 mb-6" style={{ backgroundColor: 'var(--trainer-accent)' }} />
                <p className="text-lg md:text-xl mb-4" style={{ color: 'var(--trainer-text)' }}>
                  Jak się przygotować?
                </p>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--trainer-text-light)' }}>
                  Poniżej znajdziesz wskazówki oraz wstępną ankietę, którą możesz wypełnić przed
pierwszą konsultacją.
                </p>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4 / 3' }}>
                <Image
                  src="/images/salatka-z-rukola.jpg"
                  alt="Zdrowa sałatka"
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 md:py-20 px-6" style={{ backgroundColor: 'var(--trainer-secondary)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-12" style={{ color: 'var(--trainer-primary)' }}>
            Wskazówki
          </h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <Step key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Survey Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4" style={{ color: 'var(--trainer-primary)' }}>
            Wstępna ankieta
          </h2>
          <p className="text-center mb-8 md:mb-12 text-base md:text-lg" style={{ color: 'var(--trainer-text-light)' }}>
            Jesteś umówiony na konsultację? Wypełnij formularz przed wizytą.
          </p>
          <ContactSurvey />
        </div>
      </section>
    </div>
  );
}
