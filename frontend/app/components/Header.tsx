"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-white/5 bg-[#08080c]/80 px-5 py-4 backdrop-blur-md sm:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-500/15 ring-1 ring-orange-500/30">
            <span className="text-xs font-bold text-orange-400">P</span>
          </div>
          <span className="font-mono text-sm font-bold">
            <span className="text-orange-400">Praktikum</span>
            <span className="text-white">Finder</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-[11px] text-slate-600 sm:block">
            Hannover &amp; Umgebung
          </span>
          <a
            href="mailto:giorgio.dettmar@gmx.de"
            className="rounded-md border border-white/8 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-slate-400 transition-all hover:border-orange-500/30 hover:text-orange-400"
          >
            Kontakt
          </a>
        </div>
      </div>
    </motion.header>
  );
}
