"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 px-5 py-4 shadow-sm backdrop-blur-md sm:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-md shadow-blue-600/30">
            <span className="text-sm font-bold text-white">P</span>
          </div>
          <span className="text-sm font-bold tracking-tight">
            <span className="text-blue-600">Praktikum</span>
            <span className="text-gray-900">Finder</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden text-xs text-gray-400 sm:block">
            Hannover &amp; Umgebung
          </span>
          <a
            href="mailto:giorgio.dettmar@gmx.de"
            className="rounded-lg border border-blue-600 px-4 py-1.5 text-xs font-semibold text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
          >
            Kontakt
          </a>
        </div>
      </div>
    </motion.header>
  );
}
