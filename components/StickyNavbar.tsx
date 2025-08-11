"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Menu } from "lucide-react" // Using Lucide for icons

const links = [
  { link: "/", label: "Strona Główna", active: true },
  { link: "/uslugi", label: "Usługi", active: true },
  { link: "/przedwizyta", label: "Przed wizytą", active: true },
  { link: "/kontakt", label: "Kontakt", active: true },
  { link: "/treningi", label: "Treningi", active: false },
]

export default function StickyNavbar() {
  const [opened, setOpened] = useState(false)
  const pathname = usePathname()

  const handleLinkClick = () => {
    if (opened) {
      setOpened(false)
    }
  }

  const items = links.map((link) => {
    const isActive = link.link === pathname
    const linkClasses = `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
      isActive
        ? "bg-primary text-primary-foreground"
        : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
    }`
    const disabledLinkClasses = `block px-3 py-2 rounded-md text-base font-medium text-gray-400 cursor-not-allowed hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700`

    return link.active ? (
      <Link key={link.label} href={link.link} className={linkClasses} onClick={handleLinkClick}>
        {link.label}
      </Link>
    ) : (
      <HoverCard key={`hover_${link.label}`} openDelay={100} closeDelay={100}>
        <HoverCardTrigger asChild>
          <a href="#" className={disabledLinkClasses}>
            {link.label}
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-auto p-2 text-sm text-gray-600 dark:text-gray-400">
          Dostępne wkrótce
        </HoverCardContent>
      </HoverCard>
    )
  })

  const znanyLekarzLink = (
    <Link
      key={"Umów wizytę"}
      href={"https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#"}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-pink  hover:bg-gray-200 h-10 px-4 py-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      Umów wizytę
    </Link>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={"/"} className="flex items-center">
          <Image
            src="/images/Diet_and_Health_logo_bez_tla.png"
            alt="Diet and Health logo"
            width={120} // Adjust width as needed
            height={60} // Adjust height as needed
            className="h-auto w-auto" // Ensure image scales responsively
            priority // Load logo image with high priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-x-6">
          {items}
          {znanyLekarzLink}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={opened} onOpenChange={setOpened}>
          <SheetTrigger asChild className="sm:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] sm:w-[300px] p-4">
            <div className="flex flex-col gap-y-4 pt-6">
              {items.map((item, index) => (
                <SheetClose asChild key={index}>
                  {item}
                </SheetClose>
              ))}
              <SheetClose asChild>{znanyLekarzLink}</SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
