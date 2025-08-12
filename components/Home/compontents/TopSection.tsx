'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, BadgeCheck, Video, Loader2 } from 'lucide-react'; // Using Lucide for icons
import { Card } from '@/components/ui/card'; // Using shadcn/ui Card
import { Button } from '@/components/ui/button'; // Using shadcn/ui Button
interface TopSectionProps {
  isLoading: boolean;
  error: boolean;
  opinionsCount: string;
}
export default function TopSection({
  isLoading,
  error,
  opinionsCount,
}: TopSectionProps) {
  console.log('w elemencie', isLoading, error, opinionsCount);
  return (
    <div className="relative flex min-h-[40vh] items-center justify-center py-16 md:py-24">
      <Image
        src="/images/1.jpg"
        alt="Background"
        fill
        className="object-cover object-center z-0"
        priority // ładuje od razu przy renderze
      />
      <div className="relative z-10">
        <Card className="bottom-[-50px] z-20 w-auto max-w-sm rounded-lg p-4 shadow-lg md:bottom-[-75px] md:p-6 bg-white dark:bg-gray-800">
          <div className="grid grid-cols-[auto_1fr] items-center gap-4">
            <div>
              <Image
                src="/images/monia_kontakt.jpeg"
                alt="Monika Skibicka"
                width={80}
                height={80}
                className="h-20 w-20 rounded-md object-cover"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-base font-medium text-gray-800 dark:text-gray-200">
                mgr Monika Skibicka
                <BadgeCheck className="inline-block h-5 w-5 text-primary2" />
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Dietetyk
              </p>
              <div className="flex items-center text-primary2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4" fill="currentColor" />
                ))}
                <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                  {isLoading ? (
                    <Loader2 className="inline-block h-4 w-4 animate-spin" />
                  ) : error ? (
                    '100+'
                  ) : opinionsCount !== undefined ? (
                    opinionsCount
                  ) : (
                    'N/A'
                  )}
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center text-gray-700 dark:text-gray-300">
              <Video
                className="h-5 w-5 text-primary2 dark:text-gray-400"
                fill="currentColor"
              />
              <span className="ml-2 text-sm">Oferuje konsultacje online</span>
            </div>
            <Button asChild className="w-full bg-primary2 ">
              <Link
                href={
                  'https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#'
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Umów wizytę
              </Link>
            </Button>
          </div>
        </Card>{' '}
      </div>
    </div>
  );
}
