import { type ReactNode } from "react";

type BadgeVariant = "blue" | "green" | "gray";

const variants: Record<BadgeVariant, string> = {
  blue: "border-blue-200 bg-blue-50 text-blue-700",
  green: "border-green-200 bg-green-50 text-green-700",
  gray: "border-gray-200 bg-gray-50 text-gray-600",
};

export default function Badge({
  children,
  variant = "gray",
}: {
  children: ReactNode;
  variant?: BadgeVariant;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
