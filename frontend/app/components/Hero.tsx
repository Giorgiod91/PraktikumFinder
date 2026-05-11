"use client";

import { motion, animate, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { companies } from "../data/companies";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v).toString();
      },
    });
    return () => controls.stop();
  }, [to]);
  return <span ref={ref}>0</span>;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  const uniqueCities = [...new Set(companies.map((c) => c.ort))].length;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 px-5 py-24 sm:px-8">
      {/* Animated floating blobs */}
      <motion.div
        animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/5 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -16, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm"
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-green-400"
          />
          <span className="text-xs font-semibold tracking-widest text-white/90 uppercase">
            IHK-bestätigte Betriebe
          </span>
        </motion.div>

        {/* Headline — word by word */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-5 flex flex-wrap gap-x-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
        >
          {["Dein", "Praktikumsplatz"].map((w) => (
            <motion.span key={w} variants={word}>{w}</motion.span>
          ))}
          <br className="w-full" />
          {["in", "Hannover."].map((w, i) => (
            <motion.span
              key={w}
              variants={word}
              className={i === 1 ? "text-blue-200" : ""}
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-lg text-base leading-relaxed text-blue-100"
        >
          {companies.length} geprüfte Unternehmen im Raum Hannover, die
          Praktikumsplätze für Umschüler anbieten — direkt filtern, Kontakt
          aufnehmen, loslegen.
        </motion.p>

        {/* Stats — count up */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-wrap gap-10"
        >
          {[
            { to: companies.length, label: "Unternehmen", suffix: "" },
            { to: uniqueCities, label: "Städte", suffix: "" },
            { to: 100, label: "IHK-bestätigt", suffix: "%" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl font-extrabold text-white">
                <Counter to={stat.to} />{stat.suffix}
              </span>
              <span className="text-sm text-blue-200">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
