"use client";

import { useState, useMemo } from "react";
import { Search, MapPin, X } from "lucide-react";
import { companies, uniqueOrte } from "../data/companies";
import CompanyCard from "./CompanyCard";

export default function CompanyList() {
  const [query, setQuery] = useState("");
  const [selectedOrt, setSelectedOrt] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return companies.filter((c) => {
      const matchesOrt = !selectedOrt || c.ort === selectedOrt;
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.plz.includes(q) ||
        c.ort.toLowerCase().includes(q) ||
        (c.kontakt?.toLowerCase().includes(q) ?? false);
      return matchesOrt && matchesQuery;
    });
  }, [query, selectedOrt]);

  return (
    <div>
      {/* Search + filter bar */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />
          <input
            type="text"
            placeholder="Name, PLZ, Ort…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-white/6 bg-white/[0.03] py-2.5 pl-9 pr-4 font-mono text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-orange-500/30 focus:bg-white/[0.05]"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedOrt(null)}
            className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-all ${
              !selectedOrt
                ? "border-orange-500/40 bg-orange-500/10 text-orange-300"
                : "border-white/6 text-slate-500 hover:border-white/12 hover:text-white"
            }`}
          >
            Alle
          </button>
          {uniqueOrte.map((ort) => (
            <button
              key={ort}
              onClick={() => setSelectedOrt(ort === selectedOrt ? null : ort)}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-xs transition-all ${
                selectedOrt === ort
                  ? "border-orange-500/40 bg-orange-500/10 text-orange-300"
                  : "border-white/6 text-slate-500 hover:border-white/12 hover:text-white"
              }`}
            >
              <MapPin className="h-3 w-3" />
              {ort}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="mb-5 font-mono text-xs text-slate-600">
        {filtered.length} von {companies.length} Firmen
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((company, i) => (
            <CompanyCard key={company.name} company={company} index={i} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center py-20 text-center">
          <p className="font-mono text-sm text-slate-600">
            Keine Firmen gefunden.
          </p>
          <button
            onClick={() => {
              setQuery("");
              setSelectedOrt(null);
            }}
            className="mt-3 font-mono text-xs text-orange-400 hover:text-orange-300"
          >
            Filter zurücksetzen
          </button>
        </div>
      )}
    </div>
  );
}
