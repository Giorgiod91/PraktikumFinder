"use client";

import { MapPin } from "lucide-react";

interface FilterBarProps {
  orte: string[];
  selected: string | null;
  onSelect: (ort: string | null) => void;
}

export default function FilterBar({ orte, selected, onSelect }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <FilterChip
        active={!selected}
        onClick={() => onSelect(null)}
      >
        Alle
      </FilterChip>
      {orte.map((ort) => (
        <FilterChip
          key={ort}
          active={selected === ort}
          onClick={() => onSelect(selected === ort ? null : ort)}
          icon={<MapPin className="h-3 w-3" />}
        >
          {ort}
        </FilterChip>
      ))}
    </div>
  );
}

function FilterChip({
  children,
  active,
  onClick,
  icon,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 font-mono text-xs transition-all ${
        active
          ? "border-orange-500/40 bg-orange-500/10 text-orange-300 shadow-sm shadow-orange-500/5"
          : "border-white/6 text-slate-500 hover:border-white/12 hover:bg-white/[0.03] hover:text-white"
      }`}
    >
      {icon}
      {children}
    </button>
  );
}
