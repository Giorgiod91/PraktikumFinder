"use client";

import { motion } from "framer-motion";
import { Star, Mail } from "lucide-react";

export default function AdCard({ index }: { index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.5) }}
      className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-dashed border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5 hover:shadow-lg hover:shadow-blue-100/60"
    >
      {/* Animated pulsing ring */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        className="absolute right-4 top-4 h-8 w-8 rounded-full bg-blue-300"
      />

      {/* Top label */}
      <div className="mb-4 flex items-center gap-2">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100"
        >
          <Star className="h-5 w-5 fill-blue-400 text-blue-400" />
        </motion.div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
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
        <motion.a
          href="mailto:giorgio.dettmar@gmx.de?subject=Werbeplatz%20PraktikumFinder"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-blue-600 py-2.5 text-xs font-bold text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
        >
          <Mail className="h-3.5 w-3.5" />
          Jetzt anfragen
        </motion.a>
      </div>
    </motion.div>
  );
}
