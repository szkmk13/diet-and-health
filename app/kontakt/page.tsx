"use client"

import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/Contact/ContactForm"

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <Image src="/images/6.jpg" alt="Background image for contact page" fill className="object-cover" priority />
      {/* Overlay for better text readability */}
      <div className="relative z-10 min-h-screen bg-black/20">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12">
            {/* Contact Info Column */}
            <div className="flex items-center justify-center">
              <Link
                href="https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/images/monia_kontakt.jpeg"
                    alt="Monika Skibicka"
                    width={400}
                    height={300}
                    className="h-80 w-full object-cover cursor-pointer"
                    priority
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-200">Monika Skibicka</p>
                    <h3 className="text-xl font-bold">kontakt@diet-and-health.pl</h3>
                  </div>
                </div>
              </Link>
            </div>

            {/* Contact Form Column */}
            <div className="flex items-center">
              <div className="w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
