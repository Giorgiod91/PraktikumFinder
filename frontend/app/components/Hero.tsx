"use client";

import { motion } from "framer-motion";
import { companies } from "../data/companies";

export default function Hero() {
  const uniqueCities = [...new Set(companies.map((c) => c.ort))].length;

  return (
    <section className="relative overflow-hidden border-b border-white/5 px-5 py-20 sm:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="font-mono text-[11px] tracking-widest text-orange-400 uppercase">
              IHK-bestätigte Betriebe
            </span>
          </div>

          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Dein Praktikumsplatz
            <br />
            <span className="bg-gradient-to-br from-[#FF705B] via-[#FF9548] to-[#FFB457] bg-clip-text text-transparent">
              in Hannover.
            </span>
          </h1>

          <p className="max-w-lg text-sm leading-relaxed text-slate-500">
            {companies.length} geprüfte Unternehmen im Raum Hannover, die
            Praktikumsplätze für Umschüler anbieten — direkt filtern, Kontakt
            aufnehmen, loslegen.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-6"
        >
          {[
            { value: companies.length, label: "Unternehmen" },
            { value: uniqueCities, label: "Städte" },
            { value: "100%", label: "IHK-bestätigt" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-mono text-2xl font-bold text-white">
                {stat.value}
              </span>
              <span className="font-mono text-[11px] text-slate-600">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
