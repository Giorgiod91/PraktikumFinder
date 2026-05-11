"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, User, CheckCircle } from "lucide-react";
import type { Company } from "../data/companies";

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
      className="group/link flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-blue-600"
    >
      <span className="flex-shrink-0 text-gray-400 transition-colors group-hover/link:text-blue-600">
        {icon}
      </span>
      <span className="truncate">{label}</span>
    </a>
  );
}

function InfoRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-start gap-2 text-xs text-gray-500">
      <span className="mt-0.5 flex-shrink-0 text-gray-400">{icon}</span>
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
      className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100"
    >
      {/* Card header */}
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 font-bold text-sm text-blue-600 ring-1 ring-blue-100">
          {initials}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-snug text-gray-900">
            {company.name}
          </h3>
          <div className="mt-1.5 flex items-center gap-1 text-[11px] text-green-600">
            <CheckCircle className="h-3 w-3" />
            <span>{company.hinweis}</span>
          </div>
        </div>
      </div>

      <div className="mb-3 h-px bg-gray-100" />

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
        <div className="mt-4 border-t border-gray-100 pt-4">
          <a
            href={`mailto:${company.email}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-xs font-semibold text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/30"
          >
            <Mail className="h-3.5 w-3.5" />
            Jetzt bewerben
          </a>
        </div>
      )}
    </motion.article>
  );
}
