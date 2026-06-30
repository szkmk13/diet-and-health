'use client';

import { useState } from 'react';
import { Plus, Minus, Flame, Zap, Dumbbell, Target, Timer } from 'lucide-react';

/* ─── Data ─── */

const warmupSingle = [
  { id: 'w1', text: '500m easy run' },
  { id: 'w2', text: '5x (upward + downward dog + 1/1 spiderman)' },
  { id: 'w3', text: '30/30 single leg quarter squat heel elevated slow pace' },
];

const warmupCircuit = [
  { id: 'wc1', text: '10 alt box step 50cm' },
  { id: 'wc2', text: '5 banded face pull + external rotation + press' },
  { id: 'wc3', text: '5/5 pallof press with rotation' },
];

const powerBlock1 = [
  { id: 'p1', text: '20 banded pogo jumps' },
  { id: 'p2', text: '20 alt skater jumps into forward plate hops' },
  { id: 'p3', text: "2' easy bike erg" },
];

const powerBlock2 = [
  { id: 'p4', text: '10x 1"ON/1"OFF overcoming iso back squat empty barbell' },
  { id: 'p5', text: '20" 90 degree iso squat hold + 5 squat jumps' },
  { id: 'p6', text: "2' easy bike erg" },
];

const strengthExercises = [
  { id: 's1', text: '6 bulgarian split squats, leg 1 - barbell behind the neck tempo 51X1' },
  { id: 's2', text: '6 bulgarian split squats, leg 2 - barbell behind the neck tempo 51X1' },
  { id: 's3', text: '30"/30" copenhagen adductor hold' },
  { id: 's4', text: "2' rest" },
];

const accessoriesExercises = [
  { id: 'a1', text: '3x 2"ON/1"OFF seated ball squeeze' },
  { id: 'a2', text: "1' mini band walk" },
];

const workoutSteps = [
  { id: 'wk1', time: "2'",   text: '12,5m rope pull sled + 8x12,5m farmer carry 2xKB' },
  { id: 'wk2', time: '30"',  text: 'Rest', isRest: true },
  { id: 'wk3', time: "90\"", text: '20m burpee broad jump' },
  { id: 'wk4', time: '30"',  text: 'Rest', isRest: true },
  { id: 'wk5', time: "2'",   text: '20 wall balls + 300m run' },
  { id: 'wk6', time: "90\"", text: 'Rest between rounds', isRest: true },
];

/* ─── Helpers ─── */

function SectionHeader({
  icon,
  label,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 px-5 py-4" style={{ backgroundColor: 'var(--trainer-secondary)' }}>
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: 'var(--trainer-accent)' }}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <span
            className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded"
            style={{ backgroundColor: 'color-mix(in srgb, var(--trainer-accent) 15%, transparent)', color: 'var(--trainer-accent)' }}
          >
            {label}
          </span>
          <p className="font-semibold mt-0.5 truncate" style={{ color: 'var(--trainer-primary)' }}>
            {title}
          </p>
          {subtitle && (
            <p className="text-xs font-semibold" style={{ color: 'var(--trainer-accent)' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
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

function RoundCounter({
  rounds,
  maxRounds,
  onChange,
}: {
  rounds: number;
  maxRounds: number;
  onChange: (n: number) => void;
}) {
  return (
    <div
      className="px-5 py-3 flex items-center justify-between"
      style={{ backgroundColor: 'var(--trainer-secondary)', borderTop: '1px solid color-mix(in srgb, var(--trainer-accent) 15%, transparent)' }}
    >
      <p className="text-sm font-medium" style={{ color: 'var(--trainer-text-light)' }}>
        Wykonane rundy
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => onChange(Math.max(0, rounds - 1))}
          className="w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80"
          style={{ backgroundColor: 'white', color: 'var(--trainer-accent)' }}
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <div className="text-center w-10">
          <span className="text-2xl font-bold" style={{ color: 'var(--trainer-accent)' }}>
            {rounds}
          </span>
          <span className="text-sm font-medium" style={{ color: 'var(--trainer-text-light)' }}>
            /{maxRounds}
          </span>
        </div>
        <button
          onClick={() => onChange(Math.min(maxRounds, rounds + 1))}
          className="w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80"
          style={{ backgroundColor: 'var(--trainer-accent)', color: 'white' }}
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

function SubLabel({ text }: { text: string }) {
  return (
    <div
      className="px-5 py-2 flex items-center gap-2"
      style={{ backgroundColor: 'color-mix(in srgb, var(--trainer-accent) 8%, white)' }}
    >
      <span
        className="text-xs font-bold tracking-wider uppercase px-2 py-0.5 rounded"
        style={{ backgroundColor: 'color-mix(in srgb, var(--trainer-accent) 15%, transparent)', color: 'var(--trainer-accent)' }}
      >
        {text}
      </span>
    </div>
  );
}

function ExerciseRow({ id, text, checked, onToggle }: { id: string; text: string; checked: boolean; onToggle: (id: string) => void }) {
  return (
    <button
      onClick={() => onToggle(id)}
      className="w-full flex items-center gap-4 px-5 py-3.5 text-left transition-all hover:opacity-90"
      style={{ backgroundColor: checked ? 'color-mix(in srgb, var(--trainer-accent) 6%, white)' : 'white' }}
    >
      <Checkbox done={checked} />
      <span
        className="text-sm transition-all"
        style={{
          color: checked ? 'var(--trainer-text-light)' : 'var(--trainer-text)',
          textDecoration: checked ? 'line-through' : 'none',
        }}
      >
        {text}
      </span>
    </button>
  );
}

function WorkoutRow({
  id,
  time,
  text,
  isRest,
  checked,
  onToggle,
}: {
  id: string;
  time: string;
  text: string;
  isRest?: boolean;
  checked: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onToggle(id)}
      className="w-full flex items-center gap-3 px-5 py-3.5 text-left transition-all hover:opacity-90"
      style={{ backgroundColor: checked ? 'color-mix(in srgb, var(--trainer-accent) 6%, white)' : 'white' }}
    >
      <Checkbox done={checked} />
      <span
        className="text-xs font-bold tabular-nums px-2 py-1 rounded-lg flex-shrink-0 min-w-[2.75rem] text-center"
        style={
          isRest
            ? { backgroundColor: 'var(--trainer-secondary)', color: 'var(--trainer-text-light)' }
            : { backgroundColor: 'color-mix(in srgb, var(--trainer-accent) 12%, transparent)', color: 'var(--trainer-accent)' }
        }
      >
        {time}
      </span>
      <span
        className="text-sm transition-all flex-1"
        style={{
          color: checked ? 'var(--trainer-text-light)' : isRest ? 'var(--trainer-text-light)' : 'var(--trainer-text)',
          textDecoration: checked ? 'line-through' : 'none',
          fontStyle: isRest ? 'italic' : 'normal',
        }}
      >
        {text}
      </span>
    </button>
  );
}

/* ─── Main component ─── */

export function TrainingPlan() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [warmupRounds, setWarmupRounds] = useState(0);
  const [powerRounds1, setPowerRounds1] = useState(0);
  const [powerRounds2, setPowerRounds2] = useState(0);
  const [strengthRounds, setStrengthRounds] = useState(0);
  const [accessoriesRounds, setAccessoriesRounds] = useState(0);
  const [workoutRounds, setWorkoutRounds] = useState(0);

  const toggle = (id: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const borderStyle = { borderColor: 'color-mix(in srgb, var(--trainer-accent) 20%, transparent)' };
  const divideStyle = { borderColor: 'var(--trainer-secondary)' };

  return (
    <div className="space-y-4 max-w-2xl mx-auto">

      {/* ── WARM UP ── */}
      <div className="rounded-2xl overflow-hidden shadow-sm border" style={borderStyle}>
        <SectionHeader
          icon={<Flame className="h-5 w-5 text-white" />}
          label="Warm Up"
          title="Rozgrzewka"
        />
        <div className="divide-y" style={divideStyle}>
          {warmupSingle.map((ex) => (
            <ExerciseRow key={ex.id} id={ex.id} text={ex.text} checked={checked.has(ex.id)} onToggle={toggle} />
          ))}
          <SubLabel text="2 rounds" />
          {warmupCircuit.map((ex) => (
            <ExerciseRow key={ex.id} id={ex.id} text={ex.text} checked={checked.has(ex.id)} onToggle={toggle} />
          ))}
        </div>
        <RoundCounter rounds={warmupRounds} maxRounds={2} onChange={setWarmupRounds} />
      </div>

      {/* ── POWER - block 1 (2 rounds) ── */}
      <div className="rounded-2xl overflow-hidden shadow-sm border" style={borderStyle}>
        <SectionHeader
          icon={<Zap className="h-5 w-5 text-white" />}
          label="Power"
          title="2 Rounds"
        />
        <div className="divide-y" style={divideStyle}>
          {powerBlock1.map((ex) => (
            <ExerciseRow key={ex.id} id={ex.id} text={ex.text} checked={checked.has(ex.id)} onToggle={toggle} />
          ))}
        </div>
        <RoundCounter rounds={powerRounds1} maxRounds={2} onChange={setPowerRounds1} />
      </div>

      {/* ── POWER - block 2 (3 rounds) ── */}
      <div className="rounded-2xl overflow-hidden shadow-sm border" style={borderStyle}>
        <SectionHeader
          icon={<Zap className="h-5 w-5 text-white" />}
          label="Power"
          title="3 Rounds"
        />
        <div className="divide-y" style={divideStyle}>
          {powerBlock2.map((ex) => (
            <ExerciseRow key={ex.id} id={ex.id} text={ex.text} checked={checked.has(ex.id)} onToggle={toggle} />
          ))}
        </div>
        <RoundCounter rounds={powerRounds2} maxRounds={3} onChange={setPowerRounds2} />
      </div>

      {/* ── STRENGTH (5 rounds) ── */}
      <div className="rounded-2xl overflow-hidden shadow-sm border" style={borderStyle}>
        <SectionHeader
          icon={<Dumbbell className="h-5 w-5 text-white" />}
          label="Strength"
          title="5 Rounds"
        />
        <div className="divide-y" style={divideStyle}>
          {strengthExercises.map((ex) => (
            <ExerciseRow key={ex.id} id={ex.id} text={ex.text} checked={checked.has(ex.id)} onToggle={toggle} />
          ))}
        </div>
        <RoundCounter rounds={strengthRounds} maxRounds={5} onChange={setStrengthRounds} />
      </div>

      {/* ── ACCESSORIES (2 rounds) ── */}
      <div className="rounded-2xl overflow-hidden shadow-sm border" style={borderStyle}>
        <SectionHeader
          icon={<Target className="h-5 w-5 text-white" />}
          label="Accessories"
          title="2 Rounds"
          subtitle="No rest between rounds"
        />
        <div className="divide-y" style={divideStyle}>
          {accessoriesExercises.map((ex) => (
            <ExerciseRow key={ex.id} id={ex.id} text={ex.text} checked={checked.has(ex.id)} onToggle={toggle} />
          ))}
        </div>
        <RoundCounter rounds={accessoriesRounds} maxRounds={2} onChange={setAccessoriesRounds} />
      </div>

      {/* ── WORKOUT (3 rounds) ── */}
      <div className="rounded-2xl overflow-hidden shadow-sm border" style={borderStyle}>
        <SectionHeader
          icon={<Timer className="h-5 w-5 text-white" />}
          label="Workout"
          title="3 Rounds"
        />
        <div className="divide-y" style={divideStyle}>
          {workoutSteps.map((step) => (
            <WorkoutRow
              key={step.id}
              id={step.id}
              time={step.time}
              text={step.text}
              isRest={step.isRest}
              checked={checked.has(step.id)}
              onToggle={toggle}
            />
          ))}
        </div>
        {workoutRounds === 3 && (
          <div
            className="px-5 py-4 text-center font-semibold text-sm"
            style={{ backgroundColor: 'var(--trainer-accent)', color: 'white' }}
          >
            Trening ukonczony!
          </div>
        )}
        <RoundCounter rounds={workoutRounds} maxRounds={3} onChange={setWorkoutRounds} />
      </div>

    </div>
  );
}
