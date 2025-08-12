"use client"
// Removed useMediaQuery import
import Link from "next/link"

// Lucide Icons (replacing Tabler Icons)
import { Apple, Baby, Dumbbell, Cookie, Leaf, ShoppingBag, Scale, Pill } from "lucide-react"

// shadcn/ui components
import { Card } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

export default function Patients() {
  // Removed useMediaQuery hook and its usage

  const cardsData = [
    {
      title: "Osobom z nadwagą oraz niedowagą",
      description: "",
      image: <Scale className="h-20 w-20 text-[#4261AA]" />, // rem(80) -> w-20 h-20
    },
    {
      title: "Kobietom w ciąży oraz dzieciom",
      description: "",
      image: <Baby className="h-20 w-20 text-[#4261AA]" />,
    },
    {
      title: "Sportowcom",
      description: "",
      image: <Dumbbell className="h-20 w-20 text-[#4261AA]" />,
    },
    {
      title: "Osobom na diecie roślinnej",
      description: "",
      image: <Leaf className="h-20 w-20 text-[#4261AA]" />,
    },
    {
      title: "Osobom, które chcą trwale zmienić swoje nawyki żywieniowe",
      description: "",
      image: <Apple className="h-20 w-20 text-[#4261AA]" />,
    },
    {
      title: "Osobom, które mają problem z utratą kontroli nad jedzeniem",
      description: "",
      image: <Cookie className="h-20 w-20 text-[#4261AA]" />,
    },
    {
      title: "Osobom z różnymi\ndolegliwościami *",
      description:
        "Osobom z dolegliwościami ze strony układu pokarmowego takimi jak:\n zaparcia, biegunki, wzdęcia, zgaga, nudności, wymioty, refluksem żołądkowo-przełykowym.",
      image: <ShoppingBag className="h-20 w-20 text-[#4261AA]" />,
    },
    {
      title: "Osobom z różnymi jednostkami chorobowymi *",
      description:
        "Osobom z cukrzycą, insulinoopornością, celiakią, SIBO, zespołem jelita drażliwego, niedoczynnością tarczycy, nadczynnością tarczycy, Hashimoto, anemią, wrzodziejącym zapaleniem jelita grubego, chorobą Leśniowskiego-Crohna, dną moczanowa i innymi chorobami/ dolegliwościami.",
      image: <Pill className="h-20 w-20 text-[#4261AA]" />,
    },
  ]

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900">
      {/* Replaces Mantine Center pt={20} */}
      <div className="flex justify-center pt-5">
        {/* Replaces Mantine Text fw={700} className={classes.title2} */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Komu pomagam?</h2>
      </div>

      {/* Replaces Mantine Container fluid py={20} my={20} className={classes.gridBackground} */}
      <div className="container mx-auto py-5 my-5 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-gray-800 rounded-lg shadow-md">
        {/* Replaces Mantine Grid gutter={20} */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cardsData.map((patient, index) =>
            patient.description ? (
              // Replaces Grid.Col span={{ lg: 3, sm: 6 }}
              <div key={index} className="col-span-1 sm:col-span-1 lg:col-span-1">
                {/* Replaces Mantine HoverCard */}
                <HoverCard openDelay={100} closeDelay={100}>
                  {/* Replaces Mantine Card and classes.centeredCard */}
                  <HoverCardTrigger asChild>
                    <Card className="flex h-[280px] flex-col items-center justify-center rounded-sm p-4 text-center shadow-sm transition-all hover:shadow-md dark:bg-gray-700">
                      {/* Replaces Mantine Center for image */}
                      <div className="flex justify-center">{patient.image}</div>
                      {/* Replaces Mantine Center for title */}
                      <div className="flex justify-center">
                        {/* Replaces Mantine Text className={classes.title} pt={15} fw={400} */}
                        <p className="mt-4 text-lg font-normal text-gray-800 dark:text-gray-200">{patient.title}</p>
                      </div>
                    </Card>
                  </HoverCardTrigger>
                  {/* Replaces Mantine HoverCard.Dropdown - now uses Tailwind breakpoints */}
                  <HoverCardContent
                    className="w-80 sm:w-64 p-4 text-sm text-gray-600 dark:text-gray-400" // Adjusted width classes
                  >
                    {/* Replaces Mantine Text size="xs" className={classes.title} */}
                    <p className="whitespace-pre-line">{patient.description}</p>
                  </HoverCardContent>
                </HoverCard>
              </div>
            ) : (
              // Replaces Grid.Col span={{ lg: 3, sm: 6 }}
              <div key={index} className="col-span-1 sm:col-span-1 lg:col-span-1">
                {/* Replaces Mantine Card and classes.centeredCard */}
                <Card className="flex h-[280px] flex-col items-center justify-center rounded-sm p-4 text-center shadow-sm dark:bg-gray-700">
                  {/* Replaces Mantine Center for image */}
                  <div className="flex justify-center">{patient.image}</div>
                  {/* Replaces Mantine Center for title */}
                  <div className="flex justify-center">
                    {/* Replaces Mantine Text className={classes.title} pt={15} fw={400} */}
                    <p className="mt-4 text-lg font-normal text-gray-800 dark:text-gray-200">{patient.title}</p>
                  </div>
                </Card>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Replaces Mantine Button component={Link} href="/kontakt" className={classes.kontakt} */}
      <div className="flex justify-center mt-8">
        <Button asChild className="px-8 py-4 text-lg bg-primary hover:bg-primary/90">
          <Link href="/kontakt">Kontakt</Link>
        </Button>
      </div>
    </section>
  )
}
