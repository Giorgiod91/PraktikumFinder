import { type ReactNode } from "react";

type BadgeVariant = "orange" | "green" | "slate";

const variants: Record<BadgeVariant, string> = {
  orange: "border-orange-500/30 bg-orange-500/10 text-orange-300",
  green: "border-green-500/30 bg-green-500/10 text-green-400",
  slate: "border-white/8 bg-white/[0.03] text-slate-500",
};

export default function Badge({
  children,
  variant = "slate",
}: {
  children: ReactNode;
  variant?: BadgeVariant;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
