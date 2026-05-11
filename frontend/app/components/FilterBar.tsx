"use client";

import { motion } from "framer-motion";
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
        id="alle"
        active={!selected}
        onClick={() => onSelect(null)}
      >
        Alle
      </FilterChip>
      {orte.map((ort) => (
        <FilterChip
          key={ort}
          id={ort}
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
  id,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  id: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-medium transition-colors ${
        active
          ? "border-blue-600 text-white"
          : "border-gray-200 bg-white text-gray-600 hover:border-blue-300 hover:text-blue-600"
      }`}
    >
      {active && (
        <motion.span
          layoutId="filter-active-bg"
          className="absolute inset-0 rounded-xl bg-blue-600"
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-1.5">
        {icon}
        {children}
      </span>
    </motion.button>
  );
}
