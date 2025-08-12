"use client"

import type { Key } from "react"
import { useQuery } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image";

interface Opinion {
  name: string,
  date: string,
  opinion: string
}
interface OpinionsProps {
  isLoading: boolean;
  error: boolean;
  opinions: Array<Opinion> | null;
}
export default function Opinions({ isLoading, error, opinions }: OpinionsProps) {
  const predefinedComments = [
    {
      "name": "Natalia",
      "opinion": "Super dietetyczka, uśmiechnięta, szczegółowa, bardzo miło się rozmawiało, gabinet też ładny jeśli dla kogoś to ważne :)",
      "date": "1 lipca 2025"
    },
    {
      "name": "Monika",
      "opinion": "Pani Dietety Monika poświęciła mi dużo czasu, zadawała dużo pytań, szukała rozwiązania, a nawet kilka by mi pomóc. Wizyta bardzo udana i polecam.",
      "date": "28 maja 2025"
    },
    {
      "name": "Adam",
      "opinion": "Wszystko było dobrze miała pani do mnie cierpliwości",
      "date": "19 maja 2025"
    },
    {
      "name": "Szpic777",
      "opinion": "Czuje się zaopiekowany, wysłuchany i potraktowany na poważnie. Polecam specjalistkę!",
      "date": "30 kwietnia 2025"
    },
    {
      "name": "Karolina",
      "opinion": "Do Pani Moniki pierwszy raz trafiłam trzy lata temu i dziś wróciłam kolejny raz i wizyta była bardzo szczegółowo omówiona, wszystko dokładnie omówione, proces dalszego postępowania również omówiony w szczegółach z uśmiechem i pełnym zrozumieniem. Pani Monika dokładnie wszystko przeanalizowała, skrupulatnie wyjaśniła z uśmiechem i przyjaźnią podeszła do mojej osoby zaangażowana w każdy jeden szczegół. O tym że będę wracać na są efekty to jedno ale przede wszystkim dlatego, że zarówno trzy lata temu jak również teraz jest dbałość o każdy szczegół. Polecam i zachęcam do korzystania z wiedzy i doświadczenia Pani Moniki. Ja zaś chciałam powiedzieć dziękuję bo jest za co.",
      "date": "13 marca 2025"
    },
    {
      "name": "Sylwia",
      "opinion": "Bardzo profesjonalne i przyjazne podejście do pacjenta. Serdecznie polecam!",
      "date": "17 lutego 2025"
    }
  ]

  const OpinionsTitle = (
    <div className="flex justify-center py-5 relative z-10">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Opinie klientów</h2>
    </div>
  )


  console.log(opinions, error, isLoading)
  const renderComments = (comments: Array<Opinion>) => (
    <div className="container mx-auto py-5 my-5 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {comments.map((comment, index: Key) => (
          <div key={index} className="col-span-1 sm:col-span-1 lg:col-span-1">
            <Card className="relative flex h-[320px] flex-col rounded-sm p-4 shadow-sm dark:bg-gray-700">
              <div className="mb-4 flex min-h-[50px] items-center gap-4 flex-wrap">
                <Avatar className="h-12 w-12 ">
                  <AvatarFallback className="text-black text-lg font-semibold bg-pink">{comment.name.charAt(0)}</AvatarFallback>
                </Avatar>


                <div className="flex items-center">
                  <p className="text-lg font-bold text-gray-800 dark:text-gray-200">{comment.name}</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="line-clamp-7 italic text-gray-700 dark:text-gray-300">"{comment.opinion}"</p>
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

  return (
    <>
      {OpinionsTitle}
      <div className="relative py-10 min-h-[300px]">
        <Image
          src="/images/opinions_background.jpg"
          alt="Opinions Background"
          fill
          className="object-cover object-center z-0"
          priority
        />

        <div className="relative z-10 min-h-[300px] flex flex-col">
          {isLoading ? (
            <>
              <div className="flex flex-grow items-center justify-center">
                <Loader2 className="h-36 w-36 animate-spin text-yellow-500" />
              </div>
            </>
          ) : error ? (
            <>
              <div className="py-10">{renderComments(predefinedComments)}</div>
            </>
          ) : (
            <>
              {opinions ? renderComments(opinions) : renderComments(predefinedComments)}
            </>
          )}
        </div>
      </div>
    </>

  );
}