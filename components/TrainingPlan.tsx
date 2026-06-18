'use client';

import { useState, useEffect, useRef } from 'react';
import { RotateCcw, Plus, Minus, Timer, Zap, Flame, Dumbbell, Play, Pause, SkipForward } from 'lucide-react';

/* ─── Data ─── */

const warmupExercises = [
  { id: 'w1', text: '3 min ergometr' },
  { id: 'w2', text: '5x pies z glowa w dol i foczka i po jednym spidermanie na strone' },
  { id: 'w3', text: '10 band pull aparts' },
  { id: 'w4', text: '15 scap pull-ups' },
];

const skillExercises = [
  { id: 's1', text: '6 Nordic hamstring curl' },
  { id: 's2', text: '10 front rack squats (kettlebell)' },
  { id: 's3', text: '20 slider jumps' },
];

const workoutSteps = [
  { id: 'r1', text: '500m run' },
  { id: 'r2', text: '4x15m sandbag lunges' },
  { id: 'r3', text: '500m run' },
  { id: 'r4', text: '3x15m burpee broad jump' },
  { id: 'r5', text: '500m run' },
];

/* ─── Helpers ─── */

function SectionHeader({
  icon,
  label,
  title,
  subtitle,
  duration,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  subtitle?: string;
  duration?: string;
}) {
  return (
    <div className="flex items-center justify-between px-5 py-4" style={{ backgroundColor: 'var(--trainer-secondary)' }}>
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: 'var(--trainer-accent)' }}
        >
          {icon}
        </div>
        <div>
          <span
            className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded"
            style={{ backgroundColor: 'color-mix(in srgb, var(--trainer-accent) 15%, transparent)', color: 'var(--trainer-accent)' }}
          >
            {label}
          </span>
          <p className="font-semibold mt-0.5" style={{ color: 'var(--trainer-primary)' }}>
            {title}
          </p>
          {subtitle && (
            <p className="text-xs font-semibold" style={{ color: 'var(--trainer-accent)' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {duration && (
        <span
          className="flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-full flex-shrink-0"
          style={{ backgroundColor: 'color-mix(in srgb, var(--trainer-accent) 12%, transparent)', color: 'var(--trainer-accent)' }}
        >
          <Timer className="h-3.5 w-3.5" />
          {duration}
        </span>
      )}
    </div>
  );
}

function Checkbox({ done }: { done: boolean }) {
  return (
    <div
      className="w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all"
      style={
        done
          ? { backgroundColor: 'var(--trainer-accent)', borderColor: 'var(--trainer-accent)' }
          : { borderColor: 'color-mix(in srgb, var(--trainer-accent) 40%, transparent)', backgroundColor: 'transparent' }
      }
    >
      {done && (
        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
  );
}

/* ─── Main component ─── */

const INTERVAL_SECONDS = 120;

export function TrainingPlan() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [strengthSets, setStrengthSets] = useState(0);
  const [skillRounds, setSkillRounds] = useState(0);

  const [timerSeconds, setTimerSeconds] = useState(INTERVAL_SECONDS);
  const [timerRunning, setTimerRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (timerRunning) {
      intervalRef.current = setInterval(() => {
        setTimerSeconds((s) => {
          if (s <= 1) {
            setStrengthSets((prev) => {
              const next = prev + 1;
              if (next >= 7) {
                clearInterval(intervalRef.current!);
                setTimerRunning(false);
              }
              return Math.min(7, next);
            });
            return INTERVAL_SECONDS;
          }
          return s - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [timerRunning]);

  const timerMin = Math.floor(timerSeconds / 60);
  const timerSec = timerSeconds % 60;
  const timerLabel = `${timerMin}:${timerSec.toString().padStart(2, '0')}`;
  const timerProgress = ((INTERVAL_SECONDS - timerSeconds) / INTERVAL_SECONDS) * 100;

  const toggle = (id: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const reset = () => {
    setChecked(new Set());
    setStrengthSets(0);
    setSkillRounds(0);
    setTimerSeconds(INTERVAL_SECONDS);
    setTimerRunning(false);
  };

  const workoutDone = workoutSteps.filter((s) => checked.has(s.id)).length;
  const workoutProgress = (workoutDone / workoutSteps.length) * 100;

  return (
    <div className="space-y-4 max-w-2xl mx-auto">

      {/* Reset */}
      <div className="flex justify-end">
        <button
          onClick={reset}
          className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl border-2 transition-colors hover:opacity-80"
          style={{ borderColor: 'var(--trainer-secondary)', color: 'var(--trainer-text-light)' }}
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </button>
      </div>

      {/* ── WARM UP ── */}
      <div
        className="rounded-2xl overflow-hidden shadow-sm border"
        style={{ borderColor: 'color-mix(in srgb, var(--trainer-accent) 20%, transparent)' }}
      >
        <SectionHeader
          icon={<Flame className="h-5 w-5 text-white" />}
          label="Warm Up"
          title="Rozgrzewka"
        />
        <div className="divide-y" style={{ borderColor: 'var(--trainer-secondary)' }}>
          {warmupExercises.map((ex) => {
            const done = checked.has(ex.id);
            return (
              <button
                key={ex.id}
                onClick={() => toggle(ex.id)}
                className="w-full flex items-center gap-4 px-5 py-3.5 text-left transition-all hover:opacity-90"
                style={{ backgroundColor: done ? 'color-mix(in srgb, var(--trainer-accent) 6%, white)' : 'white' }}
              >
                <Checkbox done={done} />
                <span
                  className="text-sm transition-all"
                  style={{
                    color: done ? 'var(--trainer-text-light)' : 'var(--trainer-text)',
                    textDecoration: done ? 'line-through' : 'none',
                  }}
                >
                  {ex.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── STRENGTH ── */}
      <div
        className="rounded-2xl overflow-hidden shadow-sm border"
        style={{ borderColor: 'color-mix(in srgb, var(--trainer-accent) 20%, transparent)' }}
      >
        <SectionHeader
          icon={<Dumbbell className="h-5 w-5 text-white" />}
          label="Strength"
          title="Deadlift"
          subtitle="HEAVY - 3 powt."
          duration="7 x 2 min"
        />
        <div className="px-5 py-5 bg-white">

          <div className="flex flex-col items-center gap-3 mb-5">
            <div
              className="relative w-32 h-32 rounded-full flex items-center justify-center"
              style={{
                background: `conic-gradient(var(--trainer-accent) ${timerProgress * 3.6}deg, var(--trainer-secondary) ${timerProgress * 3.6}deg)`,
              }}
            >
              <div className="w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center">
                <span className="text-3xl font-bold tabular-nums" style={{ color: 'var(--trainer-accent)' }}>
                  {timerLabel}
                </span>
                <span className="text-xs font-medium" style={{ color: 'var(--trainer-text-light)' }}>
                  seria {Math.min(strengthSets + 1, 7)}/7
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => { setTimerSeconds(INTERVAL_SECONDS); setTimerRunning(false); }}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors hover:opacity-80"
                style={{ backgroundColor: 'var(--trainer-secondary)', color: 'var(--trainer-accent)' }}
                aria-label="Reset timer"
              >
                <RotateCcw className="h-4 w-4" />
              </button>

              <button
                onClick={() => setTimerRunning((r) => !r)}
                disabled={strengthSets >= 7}
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95 disabled:opacity-40"
                style={{ backgroundColor: 'var(--trainer-accent)', color: 'white' }}
                aria-label={timerRunning ? 'Pauza' : 'Start'}
              >
                {timerRunning
                  ? <Pause className="h-7 w-7" />
                  : <Play className="h-7 w-7 ml-1" />}
              </button>

              <button
                onClick={() => {
                  setTimerRunning(false);
                  setTimerSeconds(INTERVAL_SECONDS);
                  setStrengthSets((s) => Math.min(7, s + 1));
                }}
                disabled={strengthSets >= 7}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors disabled:opacity-40 hover:opacity-80"
                style={{ backgroundColor: 'var(--trainer-secondary)', color: 'var(--trainer-accent)' }}
                aria-label="Nastepna seria"
              >
                <SkipForward className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex gap-1.5">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                onClick={() => setStrengthSets(i + 1)}
                className="h-2 flex-1 rounded-full transition-all cursor-pointer"
                style={{ backgroundColor: i < strengthSets ? 'var(--trainer-accent)' : 'var(--trainer-secondary)' }}
              />
            ))}
          </div>
          {strengthSets >= 7 && (
            <p className="text-center text-sm font-semibold mt-3" style={{ color: 'var(--trainer-accent)' }}>
              Wszystkie serie wykonane!
            </p>
          )}
        </div>
      </div>

      {/* ── SKILL ── */}
      <div
        className="rounded-2xl overflow-hidden shadow-sm border"
        style={{ borderColor: 'color-mix(in srgb, var(--trainer-accent) 20%, transparent)' }}
      >
        <SectionHeader
          icon={<Zap className="h-5 w-5 text-white" />}
          label="Skill"
          title="3 Rounds"
        />
        <div className="divide-y" style={{ borderColor: 'var(--trainer-secondary)' }}>
          {skillExercises.map((ex) => {
            const done = checked.has(ex.id);
            return (
              <button
                key={ex.id}
                onClick={() => toggle(ex.id)}
                className="w-full flex items-center gap-4 px-5 py-3.5 text-left transition-all hover:opacity-90"
                style={{ backgroundColor: done ? 'color-mix(in srgb, var(--trainer-accent) 6%, white)' : 'white' }}
              >
                <Checkbox done={done} />
                <span
                  className="text-sm transition-all"
                  style={{
                    color: done ? 'var(--trainer-text-light)' : 'var(--trainer-text)',
                    textDecoration: done ? 'line-through' : 'none',
                  }}
                >
                  {ex.text}
                </span>
              </button>
            );
          })}
        </div>
        <div
          className="px-5 py-3 flex items-center justify-between"
          style={{ backgroundColor: 'var(--trainer-secondary)', borderTop: '1px solid color-mix(in srgb, var(--trainer-accent) 15%, transparent)' }}
        >
          <p className="text-sm font-medium" style={{ color: 'var(--trainer-text-light)' }}>
            Wykonane rundy
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSkillRounds((r) => Math.max(0, r - 1))}
              className="w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80"
              style={{ backgroundColor: 'white', color: 'var(--trainer-accent)' }}
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <div className="text-center w-10">
              <span className="text-2xl font-bold" style={{ color: 'var(--trainer-accent)' }}>
                {skillRounds}
              </span>
              <span className="text-sm font-medium" style={{ color: 'var(--trainer-text-light)' }}>/3</span>
            </div>
            <button
              onClick={() => setSkillRounds((r) => Math.min(3, r + 1))}
              className="w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80"
              style={{ backgroundColor: 'var(--trainer-accent)', color: 'white' }}
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── WORKOUT ── */}
      <div
        className="rounded-2xl overflow-hidden shadow-sm border"
        style={{ borderColor: 'color-mix(in srgb, var(--trainer-accent) 20%, transparent)' }}
      >
        <SectionHeader
          icon={<Timer className="h-5 w-5 text-white" />}
          label="Workout"
          title="For Time"
        />

        {workoutDone > 0 && (
          <div className="px-5 pt-3 pb-1 bg-white">
            <div className="h-1.5 rounded-full" style={{ backgroundColor: 'var(--trainer-secondary)' }}>
              <div
                className="h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${workoutProgress}%`, backgroundColor: 'var(--trainer-accent)' }}
              />
            </div>
          </div>
        )}

        <div className="divide-y" style={{ borderColor: 'var(--trainer-secondary)' }}>
          {workoutSteps.map((step, i) => {
            const done = checked.has(step.id);
            const isRun = step.text.includes('run');
            return (
              <button
                key={step.id}
                onClick={() => toggle(step.id)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left transition-all hover:opacity-90"
                style={{ backgroundColor: done ? 'color-mix(in srgb, var(--trainer-accent) 6%, white)' : 'white' }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={
                    done
                      ? { backgroundColor: 'var(--trainer-accent)', color: 'white' }
                      : { backgroundColor: 'var(--trainer-secondary)', color: 'var(--trainer-accent)' }
                  }
                >
                  {done ? '✓' : i + 1}
                </div>
                <span
                  className="text-sm font-medium flex-1 transition-all"
                  style={{
                    color: done ? 'var(--trainer-text-light)' : 'var(--trainer-text)',
                    textDecoration: done ? 'line-through' : 'none',
                  }}
                >
                  {step.text}
                </span>
                {isRun && (
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--trainer-accent) 12%, transparent)', color: 'var(--trainer-accent)' }}
                  >
                    run
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {workoutDone === workoutSteps.length && (
          <div
            className="px-5 py-4 text-center font-semibold text-sm"
            style={{ backgroundColor: 'var(--trainer-accent)', color: 'white' }}
          >
            Trening ukonczony!
          </div>
        )}
      </div>
    </div>
  );
}
