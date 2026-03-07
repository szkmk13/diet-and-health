"use client"

import { useState } from "react"
import Link from "next/link"
import { Apple, Baby, Dumbbell, Cookie, Leaf, HeartPulse, Scale, Pill, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const cardsData = [
  {
    title: "Nadwaga i niedowaga",
    description: null,
    icon: <Scale className="h-10 w-10 text-primary2" />,
  },
  {
    title: "Kobiety w ciąży i dzieci",
    description: null,
    icon: <Baby className="h-10 w-10 text-primary2" />,
  },
  {
    title: "Sportowcy",
    description: null,
    icon: <Dumbbell className="h-10 w-10 text-primary2" />,
  },
  {
    title: "Dieta roślinna",
    description: null,
    icon: <Leaf className="h-10 w-10 text-primary2" />,
  },
  {
    title: "Zmiana nawyków żywieniowych",
    description: null,
    icon: <Apple className="h-10 w-10 text-primary2" />,
  },
  {
    title: "Zaburzenia relacji z jedzeniem",
    description: null,
    icon: <Cookie className="h-10 w-10 text-primary2" />,
  },
  {
    title: "Dolegliwości układu pokarmowego",
    description: "Zaparcia, biegunki, wzdęcia, zgaga, nudności, refluks żołądkowo-przełykowy.",
    icon: <HeartPulse className="h-10 w-10 text-primary2" />,
  },
  {
    title: "Choroby i jednostki chorobowe",
    description: "Cukrzyca, insulinooporność, celiakia, SIBO, IBS, Hashimoto, niedoczynność i nadczynność tarczycy, anemia, choroba Leśniowskiego-Crohna i inne.",
    icon: <Pill className="h-10 w-10 text-primary2" />,
  },
]

function PatientCard({ item }: { item: typeof cardsData[number] }) {
  const [open, setOpen] = useState(false)
  const clickable = !!item.description

  return (
    <div
      onClick={() => clickable && setOpen(!open)}
      className={`flex flex-col items-center gap-3 rounded-xl border bg-gray-50 dark:bg-gray-800 p-5 text-center transition-shadow
        ${clickable ? "cursor-pointer hover:shadow-md border-gray-200 dark:border-gray-600" : "border-gray-100 dark:border-gray-700"}
      `}
    >
      {item.icon}
      <p className="text-md font-semibold text-gray-800 dark:text-gray-100 leading-snug">{item.title}</p>
      {clickable && (
        <ChevronDown
          className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      )}
      {open && item.description && (
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-200 dark:border-gray-600 pt-3 mt-1">
          {item.description}
        </p>
      )}
    </div>
  )
}

export default function Patients() {
  return (
    <section className="py-10 my-5 rounded-2xl border border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8">Komu pomagam?</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cardsData.map((item, index) => (
          <PatientCard key={index} item={item} />
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <Button asChild className="px-8 py-4 text-lg bg-primary hover:bg-primary/90">
          <Link href="/uslugi">Sprawdź ofertę</Link>
        </Button>
        <Button asChild variant="outline" className="px-8 py-4 text-lg">
          <Link href="/kontakt">Kontakt</Link>
        </Button>
      </div>
    </section>
  )
}
