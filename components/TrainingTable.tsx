"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Exercise {
  name: string;
  sets: string;
  reps: string;
  rest: string;
}

interface TrainingDay {
  day: string;
  focus: string;
  exercises: Exercise[];
}

const sampleTrainingData: TrainingDay[] = [
  {
    day: 'Poniedziałek',
    focus: 'Klatka + Triceps',
    exercises: [
      { name: 'Wyciskanie sztangi leżąc', sets: '4', reps: '8-10', rest: '90s' },
      { name: 'Rozpiętki hantlami', sets: '3', reps: '12-15', rest: '60s' },
      { name: 'Wyciskanie hantli skos dodatni', sets: '3', reps: '10-12', rest: '75s' },
      { name: 'Pompki diamentowe', sets: '3', reps: 'max', rest: '60s' },
      { name: 'Prostowanie ramion na wyciągu', sets: '3', reps: '12-15', rest: '45s' },
    ],
  },
  {
    day: 'Środa',
    focus: 'Plecy + Biceps',
    exercises: [
      { name: 'Podciąganie nachwytem', sets: '4', reps: '6-8', rest: '120s' },
      { name: 'Wiosłowanie sztangą', sets: '4', reps: '8-10', rest: '90s' },
      { name: 'Ściąganie drążka do klatki', sets: '3', reps: '12-15', rest: '60s' },
      { name: 'Uginanie ramion ze sztangą', sets: '3', reps: '10-12', rest: '60s' },
      { name: 'Uginanie młotkowe', sets: '3', reps: '12-15', rest: '45s' },
    ],
  },
  {
    day: 'Piątek',
    focus: 'Nogi + Barki',
    exercises: [
      { name: 'Przysiad ze sztangą', sets: '4', reps: '8-10', rest: '120s' },
      { name: 'Wypychanie nóg', sets: '3', reps: '12-15', rest: '90s' },
      { name: 'Unoszenie ud leżąc', sets: '3', reps: '10-12', rest: '75s' },
      { name: 'Wyciskanie sztangi nad głowę', sets: '4', reps: '8-10', rest: '90s' },
      { name: 'Unoszenie hantli bokiem', sets: '3', reps: '12-15', rest: '60s' },
    ],
  },
];

export function TrainingTable() {
  const [expandedDay, setExpandedDay] = useState<string | null>(sampleTrainingData[0].day);

  const toggleDay = (day: string) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-3">
        {sampleTrainingData.map((trainingDay) => (
          <div
            key={trainingDay.day}
            className="border rounded-lg overflow-hidden"
            style={{
              borderColor: 'var(--trainer-secondary)',
              backgroundColor: '#ffffff',
            }}
          >
            {/* Header */}
            <button
              onClick={() => toggleDay(trainingDay.day)}
              className="w-full px-6 py-4 flex items-center justify-between hover:opacity-80 transition-opacity"
              style={{ backgroundColor: 'var(--trainer-secondary)' }}
            >
              <div className="flex items-center gap-4">
                <span 
                  className="font-medium text-lg"
                  style={{ color: 'var(--trainer-primary)' }}
                >
                  {trainingDay.day}
                </span>
                <span 
                  className="text-sm"
                  style={{ color: 'var(--trainer-text-light)' }}
                >
                  {trainingDay.focus}
                </span>
              </div>
              {expandedDay === trainingDay.day ? (
                <ChevronUp style={{ color: 'var(--trainer-accent)' }} />
              ) : (
                <ChevronDown style={{ color: 'var(--trainer-accent)' }} />
              )}
            </button>

            {/* Exercises table */}
            {expandedDay === trainingDay.day && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: 'var(--trainer-secondary)' }}>
                      <th 
                        className="px-6 py-3 text-left text-sm"
                        style={{ color: 'var(--trainer-text)' }}
                      >
                        Ćwiczenie
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-sm"
                        style={{ color: 'var(--trainer-text)' }}
                      >
                        Serie
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-sm"
                        style={{ color: 'var(--trainer-text)' }}
                      >
                        Powtórzenia
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-sm"
                        style={{ color: 'var(--trainer-text)' }}
                      >
                        Przerwa
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainingDay.exercises.map((exercise, idx) => (
                      <tr
                        key={idx}
                        style={{
                          backgroundColor: idx % 2 === 0 ? '#ffffff' : 'var(--trainer-secondary)',
                        }}
                      >
                        <td 
                          className="px-6 py-4"
                          style={{ color: 'var(--trainer-text)' }}
                        >
                          {exercise.name}
                        </td>
                        <td 
                          className="px-6 py-4"
                          style={{ color: 'var(--trainer-text-light)' }}
                        >
                          {exercise.sets}
                        </td>
                        <td 
                          className="px-6 py-4"
                          style={{ color: 'var(--trainer-text-light)' }}
                        >
                          {exercise.reps}
                        </td>
                        <td 
                          className="px-6 py-4"
                          style={{ color: 'var(--trainer-text-light)' }}
                        >
                          {exercise.rest}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
