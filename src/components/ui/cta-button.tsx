import Link from "next/link";
import { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary:
    "bg-cta text-white shadow-lift hover:bg-cta-dark hover:shadow-none",
  secondary:
    "border border-border bg-white text-fg hover:border-fg hover:bg-fg hover:text-white",
  ghost:
    "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-fg",
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-14 max-w-full items-center justify-center rounded-full px-7 py-3.5 text-center text-base font-semibold tracking-tight transition duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
