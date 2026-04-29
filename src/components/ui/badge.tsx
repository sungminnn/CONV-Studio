import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "dark" | "light" | "accent";
};

const toneStyles = {
  dark: "bg-fg text-white",
  light: "bg-white text-fg ring-1 ring-inset ring-border",
  accent: "bg-accent/10 text-accent ring-1 ring-inset ring-accent/15",
};

export function Badge({ children, tone = "light" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}
