'use client';

import ContactSurvey from '@/components/Contact/ContactSurvey';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/images/salatka-z-rukola.jpg"
        alt="Sałatka z rukolą"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay for better text readability */}
      <div className="relative z-10 min-h-screen bg-black/20">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12">
            {/* Text Content Column */}
            <div className="flex items-center">
              <div className="rounded-lg bg-white/95 p-6 shadow-lg backdrop-blur-sm dark:bg-gray-900/95 sm:p-8">
                <h1 className="mb-6 text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Jak przygotować się do wizyty:
                </h1>

                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>1. Zabierz ze sobą ostatnio wykonywane wyniki badań (jeśli takie posiadasz).</p>

                  <p>
                    2. Na konsultacji wykonuję analizę składu ciała. Bezpośrednio przed badaniem składu ciała nie zaleca
                    się wykonywać intensywnego treningu, korzystać z sauny. Dobrze wykonać badanie 2-3 godziny po
                    posiłku i po wcześniejszym opróżnieniu pęcherza.
                  </p>

                  <p>
                    3. Na analizator składu ciała wchodzi się gołymi stopami, dlatego wygodniej ubrać skarpety zamiast
                    rajstop.
                  </p>

                  <p>
                    4. Możesz przygotować dzienniczek żywieniowy i zabrać go ze sobą na konsultację. Przez 3 dni na
                    bieżąco opisuj spożywane posiłki. Uwzględnij godzinę, miejsce spożycia posiłku, wielkość porcji,
                    wypijane płyny. Możesz dodatkowo opisać swoje samopoczucie po posiłku (np. senność, ból brzucha,
                    wzdęcia, biegunka).
                  </p>

                  <p>5. Zachęcam do wypełnienia wstępnej ankiety, która znajduje się poniżej 😊</p>
                </div>
              </div>
            </div>

            {/* Contact Survey Column */}
            <div className="flex items-center">
              <div className="w-full">
                <ContactSurvey />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
