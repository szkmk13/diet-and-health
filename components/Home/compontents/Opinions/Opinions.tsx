"use client"

import type { Key } from "react"
import { useQuery } from "@tanstack/react-query" 
import { Loader2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Opinions() {
  const predefinedComments = [
    {
      opinion:
        "Wizyta przebiegła w miłej atmosferze. Pani Monika wszystko wyjaśniła, odpowiedziała na wszystkie pytania. Miła i sympatyczna osoba. Polecam.",
      name: "Joanna.R.",
      date: "28 września 2023",
    },
    {
      opinion: "Spotkanie w przyjaznej i luźnej atmosferze. Kompetencja i wyrozumiałość Pani dietetyk.",
      name: "Jakub",
      date: "19 września 2023",
    },
    {
      opinion:
        "Bardzo pozytywna energia i widać że Pani zna się na rzeczy. Dostałam odpowiedź na wszystko co chciałam w przyjemnej atmosferze. Jeśli ktoś ma problem w znalezieniu dietetyka to Pani Monika to najlepszy wybór.",
      name: "Patrycja Wiechowska",
      date: "17 sierpnia 2023",
    },
    {
      opinion:
        "Pani Moniką Skibicka wykazała się empatią i zaangażowaniem. Posiada wiedzę z którą potrafi się podzielić. Dietę którą proponuje jest dostosowana do pacjenta i jego stylu życia. Na wizycie motywuje do działania i najlepszego rozwiązania problemu pacjenta. Szczerze polecam.",
      name: "E.S",
      date: "10 lipca 2023",
    },
    {
      opinion:
        "Jestem bardzo zadowolony z wizyty u Pani Moniki. Podczas konsultacji został zebrany pełen wywiad, dzięki któremu zostały dobrane rozwiązania do mojego problemu. Na wszystkie moje pytania otrzymałem wyczerpujące odpowiedzi. Szczerze polecam każdemu, kto potrzebuje pomocy!",
      name: "Sebastian",
      date: "5 czerwca 2023",
    },
    {
      opinion:
        "Wizyty (na razie 2) bardzo udane!\nPani Monika jest zaangażowana, świetnie tłumaczy, ma dobrą energię. Naprawdę wysłuchała moich potrzeb i stworzyła świetny jadłospis szyty na miarę! Byłam pozytywnie zaskoczona, a teraz w dodatku okazało się, że TO DZIAŁA! organizacyjnie: wszystko sprawnie, miło, estetycznie - polecam!",
      name: "Alicja",
      date: "27 kwietnia 2023",
    },
  ]

  const OpinionsTitle = (
    <div className="flex justify-center py-5">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Opinie klientów</h2>
    </div>
  )

  const fetchOpinions = async () => {
    const response = await fetch("/api/opinions")
    console.log("response",response)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json()
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["opinions"],
    queryFn: fetchOpinions,
  })
  console.log(data,error,isLoading)
  const renderComments = (comments: typeof predefinedComments) => (
    <div className="container mx-auto py-5 my-5 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {comments.map((comment, index: Key) => (
          <div key={index} className="col-span-1 sm:col-span-1 lg:col-span-1">
            <Card className="relative flex h-[320px] flex-col rounded-sm p-4 shadow-sm dark:bg-gray-700">
              <div className="mb-4 flex min-h-[50px] items-center gap-4 flex-wrap">
                <Avatar className="h-12 w-12 bg-[#ff41ff]">
                  <AvatarFallback className="text-white text-lg font-semibold">{comment.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex items-center">
                  <p className="text-lg font-bold text-gray-800 dark:text-gray-200">{comment.name}</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="line-clamp-8 italic text-gray-700 dark:text-gray-300">"{comment.opinion}"</p>
              </div>
              <p className="absolute bottom-5 right-5 text-xs font-bold text-gray-600 dark:text-gray-400">
                {comment.date}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )

  if (isLoading) {
    return (
      <>
        {OpinionsTitle}
        <div className="flex min-h-[300px] items-center justify-center bg-gray-100 dark:bg-gray-900">
          <Loader2 className="h-36 w-36 animate-spin text-yellow-500" />
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        {OpinionsTitle}
        {/* Replaces classes.bgimage */}
        <div className="bg-gray-100 dark:bg-gray-900 py-10">{renderComments(predefinedComments)}</div>
      </>
    )
  }

  return (
    <>
      {OpinionsTitle}
      {/* Replaces classes.bgimage */}
      <div className="bg-gray-100 dark:bg-gray-900 py-10">
        {data && data.comments ? renderComments(data.comments) : renderComments(predefinedComments)}
      </div>
    </>
  )
}
