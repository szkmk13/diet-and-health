"use client"

import Image from "next/image"

export default function About() {
  return (
    <section className="container mx-auto my-5 rounded-2xl border border-gray-200 dark:border-gray-700 px-4 py-8 md:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-10 md:flex-row md:flex-nowrap md:gap-16">
        {/* Image Column - visible from md breakpoint */}
        <div className="hidden lg:block lg:mt-2.5">
          <Image
            src="/images/monia_sport.jpg" // Updated path for placeholder
            alt="Monika Skibicka Sport"
            width={450} // Set a fixed width for the image
            height={450} // Set a fixed height for the image
            className="h-[450px] w-[450px] object-contain" // Ensure image scales responsively
            priority // Load image with high priority
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-lg md:text-3xl font-bold text-gray-800 dark:text-gray-100 mt-1 mb-4 text-center">mgr Monika Skibicka</h1>
          <h2 className="text-[30px] md:text-md font-bold text-primary2 dark:text-gray-200 mb-2 text-center">DIETETYK KLINICZNY</h2>
          {/* Pełne paragrafy — tylko desktop */}
          <div className="hidden md:block">
            <p className="text-base text-gray-700 dark:text-gray-300">
              Jestem <span className="font-bold">dietetykiem klinicznym i psychodietetykiem.</span> Ukończyłam studia
              magisterskie na Gdańskim Uniwersytecie Medycznym na kierunku Dietetyka oraz studia podyplomowe z
              Psychodietetyki na Uniwersytecie WSB Merito. Do każdego pacjenta podchodzę{" "}
              <span className="font-bold underline">indywidualnie.</span> Jadłospisy układam po szczegółowym wywiadzie
              dotyczącym dotychczasowego sposobu żywienia. Uwzględniam wszystkie dolegliwości, problemy zdrowotne, a także
              preferencje smakowe. Chcę, aby zaproponowane przeze mnie posiłki były nie tylko zdrowe, ale przede wszystkim
              smaczne i łatwe do przygotowania. Najważniejsze dla mnie jest, aby dieta była łatwa do stosowania.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 mt-2.5">
              Komponując jadłospis wykorzystuje sezonowe warzywa i owoce oraz produkty, które są dostępne w każdym
              większym sklepie. Pomagam zbudować trwałe nawyki żywieniowe.{" "}
              <span className="font-bold">
                Zależy mi przede wszystkim na znalezieniu przyczyny problemów z jedzeniem.
              </span>{" "}
              Zaproponuję Ci rozwiązania, które pomogą Ci odzyskać równowagę i kontrolę. Zawsze staram się znaleźć
              najlepsze metody dopasowane do osób, którym pomagam. Nie jestem zwolenniczką systemu zero jedynkowego -{" "}
              <span className="font-bold">najważniejsze jest dla mnie zadbanie o zdrową relację z jedzeniem.</span>{" "}
              Najbardziej skuteczna dieta to ta, <span className="underline">którą będziesz w stanie utrzymać.</span>
            </p>
          </div>

          {/* Bullet pointy — tylko mobile */}
          <ul className="md:hidden mt-2 space-y-2 text-left text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2"><span className="mt-1 text-primary2">✓</span><span>Dietetyk kliniczny i psychodietetyk — mgr Gdańskiego Uniwersytetu Medycznego</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 text-primary2">✓</span><span>Studia podyplomowe z Psychodietetyki (WSB Merito)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 text-primary2">✓</span><span>Indywidualne podejście — jadłospisy dopasowane do stanu zdrowia i preferencji</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 text-primary2">✓</span><span>Posiłki zdrowe, smaczne i łatwe do przygotowania</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 text-primary2">✓</span><span>Szukam przyczyny problemu, nie tylko objawów</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 text-primary2">✓</span><span>Zdrowa relacja z jedzeniem — bez zakazów i systemu zero-jedynkowego</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 text-primary2">✓</span><span><span className="font-semibold">Najskuteczniejsza dieta to ta, którą jesteś w stanie utrzymać.</span></span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
