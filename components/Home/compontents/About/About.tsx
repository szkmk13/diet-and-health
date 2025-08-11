"use client"

import Image from "next/image"

export default function About() {
  return (
    <section className="container mx-auto my-5 px-4 md:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-10 md:flex-row md:flex-nowrap md:gap-16">
        {/* Image Column - visible from md breakpoint */}
        <div className="hidden lg:block lg:mt-2.5">
          <Image
            src="/images/monia_sport.jpg" // Updated path for placeholder
            alt="Monika Skibicka Sport"
            width={450} // Set a fixed width for the image
            height={450} // Set a fixed height for the image
            // className="h-[450px] w-[450px] object-contain" // Ensure image scales responsively
            priority // Load image with high priority
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-lg font-bold text-gray-800 dark:text-gray-100 mt-1 mb-4 text-center">mgr Monika Skibicka</h2>
          <h3 className="text-[30px] md:text-md font-bold text-primary2 dark:text-gray-200 mb-2 text-center">DIETETYK KLINICZNY</h3>
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
      </div>
    </section>
  )
}
