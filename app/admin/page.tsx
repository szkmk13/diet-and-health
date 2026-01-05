"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import supabase from "@/app/api/supabase"

interface Offer {
  id: number
  type: "solo" | "duo" | "psycho" | "pakiet"
  name: string
  price: string
}


// OfferCard component
function OfferCard({
  offer,
  handleInputChange,
}: {
  offer: Offer
  handleInputChange: (id: number, value: string, type: "solo" | "duo" | "psycho" | "pakiet") => void
}) {
  return (
    <Card>
      <CardContent>
        <div>
          <Label htmlFor={`offer-${offer.id}`} className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {offer.name}
          </Label>
          <Input
            id={`offer-${offer.id}`}
            type="text"
            value={offer.price}
            onChange={(e) => handleInputChange(offer.id, e.target.value, offer.type)}
            placeholder="Cena"
            className="w-auto"
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default function ProtectedPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isClient, setIsClient] = useState<boolean>(false)
  const [soloOffers, setSoloOffers] = useState<Offer[]>([])
  const [duoOffers, setDuoOffers] = useState<Offer[]>([])
  const [psychoOffers, setPsychoOffers] = useState<Offer[]>([])
  const [pakietOffers, setPakietOffers] = useState<Offer[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [saveLoading, setSaveLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient && status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, isClient, router])

  useEffect(() => {
    const fetchOffers = async () => {
      const { data, error } = await supabase.from("offers").select()
      if (error) {
        console.error("Error fetching offers:", error)
        return
      }
      console.log(supabase)
      console.log(data)
      setSoloOffers(data.filter((offer: Offer) => offer.type === "solo"))
      setDuoOffers(data.filter((offer: Offer) => offer.type === "duo"))
      setPsychoOffers(data.filter((offer: Offer) => offer.type === "psycho"))
      setPakietOffers(data.filter((offer: Offer) => offer.type === "pakiet"))
      setLoading(false)
    }

    fetchOffers()
  }, [])

  if (!isClient || status === "loading" || loading)
    return (
      <div className="flex h-[40vh] items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-gray-600" />
          <p className="mt-2 text-3xl font-medium text-gray-700">Ładowanie...</p>
        </div>
      </div>
    )

  const handleInputChange = (id: number, value: string, type: "solo" | "duo" | "psycho" | "pakiet") => {
    console.log(id, value, type)
    if (type === "solo") {
      setSoloOffers((prev) => prev.map((offer) => (offer.id === id ? { ...offer, price: value } : offer)))
    }
    if (type === "duo") {
      setDuoOffers((prev) => prev.map((offer) => (offer.id === id ? { ...offer, price: value } : offer)))
    }
    if (type === "psycho") {
      setPsychoOffers((prev) => prev.map((offer) => (offer.id === id ? { ...offer, price: value } : offer)))
    }
    if (type === "pakiet") {
      setPakietOffers((prev) => prev.map((offer) => (offer.id === id ? { ...offer, price: value } : offer)))
    }
  }

  const saveChanges = async () => {
    setSaveLoading(true)
    const updatedOffers = [...soloOffers, ...duoOffers, ...psychoOffers, ...pakietOffers]

    for (const offer of updatedOffers) {
      const { error } = await supabase.from("offers").update({ price: offer.price }).eq("id", offer.id)
      if (error) {
        console.error("Error updating offer:", error)
      }
    }
    toast.success("Sukces", {
      description: "Ceny zostały zmienione.",
      style: {
        background: "#10b981",
        color: "white",
        border: "1px solid #059669",
      },
    })
    setSaveLoading(false)
  }

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Zmiana cen</CardTitle>
        </CardHeader>
        <CardContent >
          {/* Oferta indywidualna */}
          <div>
            <h3 className=" text-lg font-semibold text-gray-800 dark:text-gray-200">Oferta indywidualna</h3>
            <div className="space-y-2">
              {soloOffers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} handleInputChange={handleInputChange} />
              ))}
            </div>
          </div>

          {/* Oferta dla dwóch osób */}
          <div>
            <h3 className=" text-lg font-semibold text-gray-800 dark:text-gray-200">Oferta dla dwóch osób</h3>
            <div className="space-y-2">
              {duoOffers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} handleInputChange={handleInputChange} />
              ))}
            </div>
          </div>

          {/* Psychodietetyka */}
          <div>
            <h3 className=" text-lg font-semibold text-gray-800 dark:text-gray-200">Psychodietetyka</h3>
            <div className="space-y-2">
              {psychoOffers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} handleInputChange={handleInputChange} />
              ))}
            </div>
          </div>

          {/* Pakiety */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Pakiety</h3>
            <div className="space-y-2">
              {pakietOffers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} handleInputChange={handleInputChange} />
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center pt-6">
            <Button
              onClick={saveChanges}
              disabled={saveLoading}
              className="w-full bg-primary hover:bg-primary/90 px-8 py-3 transition-colors duration-200"
            >
              {saveLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Zapisywanie...
                </>
              ) : (
                "Zapisz ceny"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
