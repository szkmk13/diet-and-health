'use client';

import { useState } from 'react';
import { TrainingPlan } from './TrainingPlan';
import { Dumbbell } from 'lucide-react';

const DAYS = [
  { short: 'Pon',  full: 'Poniedzialek', plan: true },
  { short: 'Wt',   full: 'Wtorek',       plan: false },
  { short: 'Sr',   full: 'Sroda',        plan: true },
  { short: 'Czw',  full: 'Czwartek',     plan: true },
  { short: 'Pt',   full: 'Piatek',       plan: true },
  { short: 'Sob',  full: 'Sobota',       plan: false },
  { short: 'Nd',   full: 'Niedziela',    plan: true },
];

function todayIndex() {
  const d = new Date().getDay(); // 0=niedziela
  return d === 0 ? 6 : d - 1;   // 0=poniedzialek
}

export function TrainingWeek() {
  const [active, setActive] = useState(todayIndex);

  const day = DAYS[active];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Tab bar */}
      <div className="mb-8 pt-2 pb-1">
        <div className="overflow-x-auto text-center">
          <div className="inline-flex gap-1.5 pb-1">
            {DAYS.map((d, i) => {
              const isActive = active === i;
              const isToday = i === todayIndex();
              return (
                <button
                  key={d.short}
                  onClick={() => setActive(i)}
                  className="relative flex flex-col items-center px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all"
                  style={
                    isActive
                      ? { backgroundColor: 'var(--trainer-accent)', color: 'white' }
                      : { backgroundColor: 'var(--trainer-secondary)', color: 'var(--trainer-text-light)' }
                  }
                >
                  {isToday && !isActive && (
                    <span
                      className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-white"
                      style={{ backgroundColor: 'var(--trainer-accent)' }}
                    />
                  )}
                  {d.short}
                  {d.plan && (
                    <span
                      className="w-1 h-1 rounded-full mt-1"
                      style={{ backgroundColor: isActive ? 'rgba(255,255,255,0.6)' : 'var(--trainer-accent)' }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      {day.plan ? (
        <TrainingPlan />
      ) : (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
            style={{ backgroundColor: 'var(--trainer-secondary)' }}
          >
            {!day.plan ? '🛋️' : <Dumbbell className="h-8 w-8" style={{ color: 'var(--trainer-text-light)' }} />}
          </div>
          <p className="text-lg font-medium" style={{ color: 'var(--trainer-primary)' }}>
            {!day.plan ? 'Dzień wolny' : `Brak planu na ${day.full}`}
          </p>
          <p className="text-sm" style={{ color: 'var(--trainer-text-light)' }}>
            {!day.plan ? 'Odpoczynek i regeneracja.' : 'Plan zostanie dodany wkrotce.'}
          </p>
        </div>
      )}
    </div>
  );
}
