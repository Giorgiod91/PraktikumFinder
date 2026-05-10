"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, User } from "lucide-react";
import type { Company } from "../data/companies";
import Badge from "./Badge";

function ContactRow({
  icon,
  href,
  label,
  external = false,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group/link flex items-center gap-2 text-xs text-slate-500 transition-colors hover:text-white"
    >
      <span className="flex-shrink-0 text-slate-700 transition-colors group-hover/link:text-orange-400">
        {icon}
      </span>
      <span className="truncate">{label}</span>
    </a>
  );
}

function InfoRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-start gap-2 text-xs text-slate-500">
      <span className="mt-0.5 flex-shrink-0 text-slate-700">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

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
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.6) }}
      className="group flex flex-col rounded-2xl border border-white/6 bg-white/[0.02] p-5 transition-all duration-200 hover:border-orange-500/20 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-orange-500/5"
    >
      {/* Card header */}
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/8 bg-gradient-to-br from-white/[0.06] to-white/[0.02] font-mono text-xs font-bold text-orange-400 ring-1 ring-orange-500/10">
          {initials}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-snug text-white">
            {company.name}
          </h3>
          <div className="mt-1.5">
            <Badge variant="green">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              {company.hinweis}
            </Badge>
          </div>
        </div>
      </div>

      <div className="mb-3 h-px bg-white/[0.04]" />

      {/* Details */}
      <div className="flex flex-col gap-2">
        <InfoRow
          icon={<MapPin className="h-3.5 w-3.5" />}
          label={`${company.strasse}, ${company.plz} ${company.ort}`}
        />

        {company.kontakt && (
          <InfoRow
            icon={<User className="h-3.5 w-3.5" />}
            label={company.kontakt}
          />
        )}

        {company.telefon && (
          <ContactRow
            icon={<Phone className="h-3.5 w-3.5" />}
            href={`tel:${company.telefon.replace(/\s/g, "")}`}
            label={company.telefon}
          />
        )}

        {company.email && (
          <ContactRow
            icon={<Mail className="h-3.5 w-3.5" />}
            href={`mailto:${company.email}`}
            label={company.email}
          />
        )}

        {company.homepage && (
          <ContactRow
            icon={<Globe className="h-3.5 w-3.5" />}
            href={
              company.homepage.startsWith("http")
                ? company.homepage
                : `https://${company.homepage}`
            }
            label={company.homepage.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            external
          />
        )}
      </div>

      {/* CTA */}
      {company.email && (
        <div className="mt-4 border-t border-white/[0.04] pt-4">
          <a
            href={`mailto:${company.email}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-orange-500/20 bg-orange-500/8 py-2 font-mono text-xs text-orange-400 transition-all hover:border-orange-500/40 hover:bg-orange-500/15 hover:text-orange-300"
          >
            <Mail className="h-3.5 w-3.5" />
            Jetzt bewerben
          </a>
        </div>
      )}
    </motion.article>
  );
}
