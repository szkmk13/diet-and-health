"use client"

import Link from "next/link"
import { IconBrandInstagram, IconBrandFacebook, IconBrandGoogleMaps } from "@tabler/icons-react" // Keeping Tabler Icons as they are compatible

export function FooterCentered() {
  return (
    <footer className="bg-gray-100 py-6 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        {/* Placeholder for your logo or site name */}
        <Link href={"/"} className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Your Brand
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/diet.and.health.dietetyk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Facebook"
          >
            <IconBrandFacebook style={{ width: "24px", height: "24px" }} stroke={1.5} />
          </a>
          <a
            href="https://maps.app.goo.gl/mhi7sRzabVzfXxct5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Google Maps"
          >
            <IconBrandGoogleMaps style={{ width: "24px", height: "24px" }} stroke={1.5} />
          </a>
          <a
            href="https://www.instagram.com/diet.and.health_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Instagram"
          >
            <IconBrandInstagram style={{ width: "24px", height: "24px" }} stroke={1.5} />
          </a>
        </div>

        <Link
          href={"/politykaprywatnosci"}
          className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
        >
          Polityka Prywatności
        </Link>
      </div>
    </footer>
  )
}
