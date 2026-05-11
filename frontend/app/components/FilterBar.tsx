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
      <FilterChip active={!selected} onClick={() => onSelect(null)}>
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
      className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-medium transition-all ${
        active
          ? "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-600/20"
          : "border-gray-200 bg-white text-gray-600 hover:border-blue-300 hover:text-blue-600"
      }`}
    >
      {icon}
      {children}
    </button>
  );
}
