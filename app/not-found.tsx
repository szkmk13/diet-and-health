'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-center  text-white"
      style={{ backgroundImage: 'url("/images/404-background.png")' }}
    >
      <div className="text-center">
        <h1 className="text-9xl font-bold text-black">404</h1>
        <p className="mb-8 text-2xl font-medium text-black">Strona nie znaleziona</p>
        <Button asChild className="px-8 py-4 text-lg">
          <Link href="/">Powrót</Link>
        </Button>
      </div>
    </div>
  );
}
