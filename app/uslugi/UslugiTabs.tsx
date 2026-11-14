'use client';

import type { KeyboardEvent, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { BadgePercent, ChevronLeft, ChevronRight } from 'lucide-react';

export interface UslugiTab {
  type: string;
  title: string;
  showBadge?: boolean;
  /** Panel wyrenderowany na serwerze - wszystkie panele są w HTML, nieaktywne mają `hidden`. */
  panel: ReactNode;
}

export default function UslugiTabs({ tabs }: { tabs: UslugiTab[] }) {
  const [active, setActive] = useState(tabs[0]?.type);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -160 : 160, behavior: 'smooth' });
  };

  // Strzałki lewo/prawo przełączają zakładki (wzorzec ARIA tabs).
  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (index + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    const { type } = tabs[next];
    setActive(type);
    tabRefs.current[type]?.focus();
  };

  return (
    <>
      {/* Tab bar - scrollable on mobile */}
      <div className="relative mb-8">
        {canScrollLeft && (
          <button
            type="button"
            aria-label="Przewiń zakładki w lewo"
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-md"
            style={{ backgroundColor: 'white', color: 'var(--trainer-primary)' }}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}

        {canScrollRight && (
          <>
            <div
              className="absolute right-0 top-0 bottom-1 w-16 z-10 pointer-events-none rounded-r-xl"
              style={{ background: 'linear-gradient(to right, transparent, var(--trainer-secondary))' }}
            />
            <button
              type="button"
              aria-label="Przewiń zakładki w prawo"
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center shadow-md"
              style={{ backgroundColor: 'white', color: 'var(--trainer-primary)' }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        <div ref={scrollRef} onScroll={updateArrows} className="overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          <div
            role="tablist"
            aria-label="Rodzaje usług"
            className="flex gap-2 min-w-max md:min-w-0 md:w-full md:justify-center"
          >
            {tabs.map((tab, index) => {
              const isActive = active === tab.type;
              return (
                <button
                  key={tab.type}
                  ref={(el) => {
                    tabRefs.current[tab.type] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${tab.type}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.type}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(tab.type)}
                  onKeyDown={(e) => onTabKeyDown(e, index)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap border-2 transition-all duration-200 flex-shrink-0"
                  style={
                    isActive
                      ? {
                          backgroundColor: 'var(--trainer-accent)',
                          color: 'white',
                          borderColor: 'var(--trainer-accent)',
                        }
                      : {
                          backgroundColor: 'white',
                          color: 'var(--trainer-primary)',
                          borderColor: 'transparent',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                        }
                  }
                >
                  {tab.title}
                  {tab.showBadge && <BadgePercent size={16} aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.type}
          role="tabpanel"
          id={`panel-${tab.type}`}
          aria-labelledby={`tab-${tab.type}`}
          hidden={active !== tab.type}
        >
          {tab.panel}
        </div>
      ))}
    </>
  );
}
