'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react';

interface TopSectionProps {
  opinionsCount: string;
}

function Stars({ opinionsCount, light = false }: { opinionsCount: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4" style={{ color: 'var(--trainer-accent)' }} fill="currentColor" />
        ))}
      </div>
      <span
        className="text-sm font-medium"
        style={{ color: light ? 'rgba(255,255,255,0.8)' : 'var(--trainer-text-light)' }}
      >
        {opinionsCount} opinii
      </span>
    </div>
  );
}

/* ─── Wariant 1: Split – zdjęcie + tekst ─── */
function Variant1({ opinionsCount }: TopSectionProps) {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 mx-auto w-full"
            style={{ aspectRatio: '3/4', maxHeight: '520px' }}
          >
            <Image
              src="/images/monia_kontakt.jpeg"
              alt="Monika Skibicka"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="order-2 md:order-1 space-y-5">
            <div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl mb-3"
                style={{ color: 'var(--trainer-primary)' }}
              >
                Monika Skibicka
              </h1>
              <div className="h-1 w-20" style={{ backgroundColor: 'var(--trainer-accent)' }} />
            </div>

            <p className="text-lg md:text-xl flex items-center gap-2" style={{ color: 'var(--trainer-text)' }}>
              Dietetyk Kliniczny
              <BadgeCheck className="h-5 w-5" style={{ color: 'var(--trainer-accent)' }} />
            </p>

            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--trainer-text-light)' }}>
              Skuteczna dieta to ta, którą jesteś w stanie utrzymać - bez zakazów, bez systemu
              zero-jedynkowego.
            </p>

            <Stars opinionsCount={opinionsCount} />

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--trainer-accent)' }}
              >
                Umów wizytę
              </a>
              <Link
                href="/uslugi"
                className="inline-flex items-center px-6 py-3 rounded-lg font-medium border-2 transition-all hover:scale-105"
                style={{ borderColor: 'var(--trainer-accent)', color: 'var(--trainer-accent)' }}
              >
                Zobacz ofertę
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Wariant 2: Ciemny – odważny, lewostronny ─── */
function Variant2({ opinionsCount }: TopSectionProps) {
  return (
    <section className="py-20 md:py-28 px-6" style={{ backgroundColor: 'var(--trainer-primary)' }}>
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-5"
          style={{ color: 'var(--trainer-accent)' }}
        >
          Dietetyk Kliniczny i Psychodietetyk
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
          Monika
          <br />
          Skibicka
        </h1>
        <div className="h-1 w-20 mb-8" style={{ backgroundColor: 'var(--trainer-accent)' }} />

        <p
          className="text-base md:text-xl max-w-xl mb-10 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.65)' }}
        >
          Skuteczna dieta to ta, którą jesteś w stanie utrzymać - bez zakazów, bez systemu
          zero-jedynkowego.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--trainer-accent)' }}
          >
            Umów wizytę
          </a>
          <Link
            href="/uslugi"
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium border-2 text-white transition-all hover:scale-105"
            style={{ borderColor: 'rgba(255,255,255,0.3)' }}
          >
            Zobacz ofertę
          </Link>
        </div>

        <Stars opinionsCount={opinionsCount} light />
      </div>
    </section>
  );
}

/* ─── Wariant 3: Elegancki – kursywa Allura, jasne tło ─── */
function Variant3({ opinionsCount }: TopSectionProps) {
  return (
    <section
      className="py-16 md:py-24 px-6 text-center"
      style={{ backgroundColor: 'var(--trainer-secondary)' }}
    >
      <div className="max-w-2xl mx-auto space-y-5">
        <p
          className="text-xs font-semibold tracking-[0.3em] uppercase"
          style={{ color: 'var(--trainer-accent)' }}
        >
          Dietetyk Kliniczny i Psychodietetyk
        </p>

        <h1
          style={{
            fontFamily: 'Allura, cursive',
            fontSize: 'clamp(3.5rem, 12vw, 6rem)',
            color: 'var(--trainer-primary)',
            lineHeight: 1.1,
          }}
        >
          Monika Skibicka
        </h1>

        <div className="h-1 w-20 mx-auto" style={{ backgroundColor: 'var(--trainer-accent)' }} />

        <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--trainer-text-light)' }}>
          Skuteczna dieta to ta, którą jesteś w stanie utrzymać - bez zakazów, bez systemu
          zero-jedynkowego.
        </p>

        <div className="flex justify-center">
          <Stars opinionsCount={opinionsCount} />
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href="https://www.znanylekarz.pl/monika-skibicka/dietetyk/gdynia#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--trainer-accent)' }}
          >
            Umów wizytę
          </a>
          <Link
            href="/uslugi"
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium border-2 transition-all hover:scale-105"
            style={{ borderColor: 'var(--trainer-accent)', color: 'var(--trainer-accent)' }}
          >
            Zobacz ofertę
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Główny komponent ze switcherem ─── */
const LABELS = ['1 - Split ze zdjęciem', '2 - Ciemny', '3 - Elegancki'];

export default function TopSection({ opinionsCount }: TopSectionProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + 3) % 3);
  const next = () => setCurrent((c) => (c + 1) % 3);

  const variants = [
    <Variant1 key="v1" opinionsCount={opinionsCount} />,
    <Variant2 key="v2" opinionsCount={opinionsCount} />,
    <Variant3 key="v3" opinionsCount={opinionsCount} />,
  ];

  return (
    <div>
      {/* Pasek przełączania wariantów */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-gray-200 px-3 py-2 flex items-center justify-between gap-2">
        <button
          onClick={prev}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
          aria-label="Poprzedni wariant"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>

        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          {LABELS.map((label, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full transition-all whitespace-nowrap"
              style={
                i === current
                  ? { backgroundColor: 'var(--trainer-accent)', color: 'white' }
                  : { color: '#6b7280', backgroundColor: 'transparent' }
              }
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={next}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
          aria-label="Następny wariant"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {variants[current]}
    </div>
  );
}
