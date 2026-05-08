"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, User, CheckCircle } from "lucide-react";
import type { Company } from "../data/companies";

export default function CompanyCard({
  company,
  index,
}: {
  company: Company;
  index: number;
}) {
  const initials = company.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group flex flex-col rounded-xl border border-white/6 bg-white/[0.02] p-5 transition-all hover:border-orange-500/20 hover:bg-white/[0.035]"
    >
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/[0.04] font-mono text-xs font-bold text-orange-400">
          {initials}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-snug text-white">
            {company.name}
          </h3>
          <div className="mt-0.5 flex items-center gap-1">
            <CheckCircle className="h-3 w-3 text-green-500/70" />
            <span className="font-mono text-[10px] text-green-500/70">
              {company.hinweis}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-xs text-slate-500">
        <div className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-slate-600" />
          <span>
            {company.strasse}, {company.plz} {company.ort}
          </span>
        </div>

        {company.kontakt && (
          <div className="flex items-center gap-2">
            <User className="h-3.5 w-3.5 flex-shrink-0 text-slate-600" />
            <span>{company.kontakt}</span>
          </div>
        )}

        {company.telefon && (
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 flex-shrink-0 text-slate-600" />
            <a
              href={`tel:${company.telefon.replace(/\s/g, "")}`}
              className="transition-colors hover:text-white"
            >
              {company.telefon}
            </a>
          </div>
        )}

        {company.email && (
          <div className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 flex-shrink-0 text-slate-600" />
            <a
              href={`mailto:${company.email}`}
              className="truncate transition-colors hover:text-orange-400"
            >
              {company.email}
            </a>
          </div>
        )}

        {company.homepage && (
          <div className="flex items-center gap-2">
            <Globe className="h-3.5 w-3.5 flex-shrink-0 text-slate-600" />
            <a
              href={
                company.homepage.startsWith("http")
                  ? company.homepage
                  : `https://${company.homepage}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="truncate transition-colors hover:text-orange-400"
            >
              {company.homepage.replace(/^https?:\/\//, "")}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
