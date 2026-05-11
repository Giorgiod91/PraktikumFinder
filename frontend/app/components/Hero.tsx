"use client";

import { motion } from "framer-motion";
import { companies } from "../data/companies";

export default function Hero() {
  const uniqueCities = [...new Set(companies.map((c) => c.ort))].length;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 px-5 py-24 sm:px-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
            <span className="text-xs font-semibold tracking-widest text-white/90 uppercase">
              IHK-bestätigte Betriebe
            </span>
          </div>

          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Dein Praktikumsplatz
            <br />
            <span className="text-blue-200">in Hannover.</span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-blue-100">
            {companies.length} geprüfte Unternehmen im Raum Hannover, die
            Praktikumsplätze für Umschüler anbieten — direkt filtern, Kontakt
            aufnehmen, loslegen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-8"
        >
          {[
            { value: companies.length, label: "Unternehmen" },
            { value: uniqueCities, label: "Städte" },
            { value: "100%", label: "IHK-bestätigt" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl font-extrabold text-white">
                {stat.value}
              </span>
              <span className="text-sm text-blue-200">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
