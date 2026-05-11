"use client";

import { useState, useMemo } from "react";
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
            placeholder="Name, PLZ, Ort suchen…"
          />
        </div>
        <FilterBar
          orte={uniqueOrte}
          selected={selectedOrt}
          onSelect={setSelectedOrt}
        />
      </div>

      {/* Result count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-gray-900">{filtered.length}</span>{" "}
          von {companies.length} Firmen
        </p>
        {hasFilters && (
          <button
            onClick={() => {
              setQuery("");
              setSelectedOrt(null);
            }}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700"
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
        <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white py-24 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
            <span className="text-2xl">🔍</span>
          </div>
          <p className="text-sm font-semibold text-gray-700">
            Keine Firmen gefunden
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Versuche andere Suchbegriffe
          </p>
          <button
            onClick={() => {
              setQuery("");
              setSelectedOrt(null);
            }}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700"
          >
            Filter zurücksetzen
          </button>
        </div>
      )}
    </div>
  );
}
