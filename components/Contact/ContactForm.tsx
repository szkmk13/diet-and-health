"use client"

import type React from "react"
import { useRef, useState } from "react"
import Script from "next/script"
import emailjs from "@emailjs/browser"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const forma = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formElement = forma.current
    if (!formElement) return

    setLoading(true)

    if (
      process.env.NEXT_PUBLIC_SERVICE_ID &&
      process.env.NEXT_PUBLIC_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_MAIL_JS_KEY
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          formElement,
          process.env.NEXT_PUBLIC_MAIL_JS_KEY,
        )
        .then(
          (response) => {
            toast.success("Wysłano", {
              description: "Monika wkrótce odpowie na maila.",
              style: {
                background: "#10b981",
                color: "white",
                border: "1px solid #059669",
              },
            })
            formElement.reset()
            setLoading(false)
          },
          (error) => {
            toast.error("Coś poszło nie tak.", {
              description: "Proszę o kontakt z administratorem.",
              style: {
                background: "#ef4444",
                color: "white",
                border: "1px solid #dc2626",
              },
            })
            setLoading(false)
          },
        )
    }
  }

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
      <div className="rounded-lg bg-white/95 p-6 shadow-lg backdrop-blur-sm dark:bg-gray-900/95 sm:p-8">
        <div className="mb-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Masz pytanie ?</h2>
        </div>

        <form ref={forma} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="twoj_email@email.com"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Imię <span className="text-red-500">*</span>
            </Label>
            <Input id="name" name="name" placeholder="Jan Kowalski" required className="w-full" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Wiadomość <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Dzień dobry, czy na konsultację potrzebne są wyniki badań?"
              required
              rows={5}
              className="w-full"
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" disabled={loading} className="min-w-[100px]">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Wysyłanie...
                </>
              ) : (
                "Wyślij"
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
