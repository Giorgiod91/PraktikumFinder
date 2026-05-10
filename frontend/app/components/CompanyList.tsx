"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";
import { companies, uniqueOrte } from "../data/companies";
import CompanyCard from "./CompanyCard";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

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

  const hasFilters = !!query || !!selectedOrt;

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-6 space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Name, PLZ, Ort, Ansprechpartner…"
          />
          <div className="flex items-center gap-2 text-slate-600 sm:hidden">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="font-mono text-xs">Filter</span>
          </div>
        </div>

        <FilterBar
          orte={uniqueOrte}
          selected={selectedOrt}
          onSelect={setSelectedOrt}
        />
      </div>

      {/* Result count */}
      <div className="mb-5 flex items-center justify-between">
        <p className="font-mono text-xs text-slate-600">
          <span className="text-slate-400">{filtered.length}</span> von{" "}
          {companies.length} Firmen
        </p>
        {hasFilters && (
          <button
            onClick={() => {
              setQuery("");
              setSelectedOrt(null);
            }}
            className="font-mono text-xs text-orange-400/70 underline underline-offset-2 transition-colors hover:text-orange-400"
          >
            Filter zurücksetzen
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((company, i) => (
            <CompanyCard key={company.name} company={company} index={i} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/[0.01] py-24 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-white/[0.03]">
            <SlidersHorizontal className="h-5 w-5 text-slate-600" />
          </div>
          <p className="font-mono text-sm text-slate-500">
            Keine Firmen gefunden
          </p>
          <p className="mt-1 font-mono text-xs text-slate-700">
            Versuche andere Suchbegriffe
          </p>
          <button
            onClick={() => {
              setQuery("");
              setSelectedOrt(null);
            }}
            className="mt-4 rounded-lg border border-orange-500/20 bg-orange-500/8 px-4 py-2 font-mono text-xs text-orange-400 transition-all hover:border-orange-500/40 hover:text-orange-300"
          >
            Filter zurücksetzen
          </button>
        </div>
      )}
    </div>
  );
}
