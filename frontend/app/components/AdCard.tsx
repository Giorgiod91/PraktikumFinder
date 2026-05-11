"use client";

import { motion } from "framer-motion";
import { Star, Mail } from "lucide-react";

export default function AdCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.6) }}
      className="flex flex-col rounded-2xl border-2 border-dashed border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5 transition-all duration-200 hover:border-blue-400 hover:shadow-md hover:shadow-blue-100"
    >
      {/* Top label */}
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
          <Star className="h-5 w-5 fill-blue-400 text-blue-400" />
        </div>
        <div>
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Werbeplatz
          </p>
          <p className="text-[11px] text-gray-400">Gesponsert</p>
        </div>
      </div>

      <div className="mb-3 h-px bg-blue-100" />

      <h3 className="mb-1 text-sm font-bold text-gray-900">
        Hier könnte Ihre Firma stehen!
      </h3>
      <p className="mb-4 text-xs leading-relaxed text-gray-500">
        Erreichen Sie Umschüler &amp; Bewerber in der Region Hannover. Sichern
        Sie sich jetzt einen der begehrten Top-Plätze.
      </p>

      <div className="mt-auto">
        <a
          href="mailto:giorgio.dettmar@gmx.de?subject=Werbeplatz%20PraktikumFinder"
          className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-blue-600 py-2.5 text-xs font-bold text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
        >
          <Mail className="h-3.5 w-3.5" />
          Jetzt anfragen
        </a>
      </div>
    </motion.div>
  );
}
