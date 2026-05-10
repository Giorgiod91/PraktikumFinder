"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Suchen…",
}: SearchBarProps) {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/6 bg-white/[0.03] py-3 pl-10 pr-10 font-mono text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-orange-500/30 focus:bg-white/[0.05] focus:ring-1 focus:ring-orange-500/10"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 text-slate-600 transition-colors hover:text-white"
          aria-label="Suche löschen"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
