'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface PatientCardProps {
  title: string;
  description: string | null;
  icon: ReactNode;
}

export default function PatientCard({ title, description, icon }: PatientCardProps) {
  const [open, setOpen] = useState(false);
  const clickable = !!description;

  return (
    <div
      onClick={() => clickable && setOpen(!open)}
      className={`flex flex-col items-center gap-3 rounded-xl p-5 text-center transition-all duration-200 border-2 ${
        clickable ? 'cursor-pointer hover:shadow-md hover:border-[var(--trainer-accent)]' : 'border-transparent'
      }`}
      style={{ backgroundColor: 'var(--trainer-secondary)' }}
    >
      {icon}
      <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--trainer-primary)' }}>
        {title}
      </p>
      {clickable && (
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          style={{ color: 'var(--trainer-text-light)' }}
        />
      )}
      {open && description && (
        <p
          className="text-xs leading-relaxed border-t pt-3 mt-1"
          style={{ color: 'var(--trainer-text-light)', borderColor: 'var(--trainer-secondary)' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
