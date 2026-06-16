"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Turnstile } from "@marsidev/react-turnstile"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const forma = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formElement = forma.current
    if (!formElement) return

    const honeypot = formElement.querySelector('input[name="website"]') as HTMLInputElement
    if (honeypot && honeypot.value !== '') {
      setLoading(true)
      setTimeout(() => {
        toast.success('Wysłano', {
          description: 'Dziękuję za wypełnienie ankiety, do zobaczenia na konsultacji.',
          style: { background: '#10b981', color: 'white', border: '1px solid #059669' },
        })
        formElement.reset()
        setLoading(false)
      }, 1000)
      return
    }

    const fd = new FormData(formElement)
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          message: fd.get('message'),
          turnstileToken,
        }),
      })

      if (res.ok) {
        toast.success("Wysłano", {
          description: "Monika wkrótce odpowie na maila.",
          style: { background: "#10b981", color: "white", border: "1px solid #059669" },
        })
        formElement.reset()
      } else {
        throw new Error()
      }
    } catch {
      toast.error("Coś poszło nie tak.", {
        description: "Proszę o kontakt z administratorem.",
        style: { background: "#ef4444", color: "white", border: "1px solid #dc2626" },
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-xl bg-white p-6 sm:p-8 shadow-md border-2 border-[var(--trainer-secondary)]">
      <form ref={forma} onSubmit={handleSubmit} className="space-y-4">
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            placeholder="Leave this field empty"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium" style={{ color: 'var(--trainer-text)' }}>
            Email <span className="text-red-500">*</span>
          </Label>
          <Input id="email" name="email" type="email" placeholder="twoj_email@email.com" required className="w-full" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium" style={{ color: 'var(--trainer-text)' }}>
            Imię <span className="text-red-500">*</span>
          </Label>
          <Input id="name" name="name" placeholder="Jan Kowalski" required className="w-full" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium" style={{ color: 'var(--trainer-text)' }}>
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

        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={setTurnstileToken}
          onExpire={() => setTurnstileToken(null)}
          options={{ theme: 'light' }}
        />

        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            disabled={loading || !turnstileToken}
            className="min-w-[100px] text-white border-0"
            style={{ backgroundColor: 'var(--trainer-accent)' }}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Wysyłanie...
              </>
            ) : (
              'Wyślij'
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
