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
  featured = false,
}: {
  company: Company;
  index: number;
  featured?: boolean;
}) {
  const initials = company.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const rank = index + 1;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92, y: -8 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.5), ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative flex cursor-default flex-col rounded-2xl border p-5 shadow-sm ${
        featured
          ? "border-yellow-300 bg-gradient-to-br from-yellow-50 to-white shadow-yellow-100 hover:shadow-lg hover:shadow-yellow-200/60"
          : "border-gray-200 bg-white hover:shadow-lg hover:shadow-blue-100/60"
      }`}
    >
      {/* TOP badge */}
      {featured && (
        <motion.div
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15, delay: index * 0.05 + 0.3 }}
          className="absolute -top-3 left-4 flex items-center gap-1 rounded-full border border-yellow-300 bg-yellow-400 px-2.5 py-0.5 shadow-sm"
        >
          <span className="text-[11px]">
            {rank === 1 ? "🥇" : rank === 2 ? "🥈" : "🥉"}
          </span>
          <span className="text-[10px] font-bold text-yellow-900 uppercase tracking-wider">
            Top {rank}
          </span>
        </motion.div>
      )}

      {/* Card header */}
      <div className={`flex items-start gap-3 ${featured ? "mt-2 mb-4" : "mb-4"}`}>
        <motion.div
          whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl font-bold text-sm ring-1 ${
            featured
              ? "bg-yellow-100 text-yellow-700 ring-yellow-200"
              : "bg-blue-50 text-blue-600 ring-blue-100"
          }`}
        >
          {initials}
        </motion.div>
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
          <motion.a
            href={`mailto:${company.email}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-xs font-semibold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/30"
          >
            <Mail className="h-3.5 w-3.5" />
            Jetzt bewerben
          </motion.a>
        </div>
      )}
    </motion.article>
  );
}
