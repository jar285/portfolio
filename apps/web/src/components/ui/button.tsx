"use client";

import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
};

const baseClass =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  const stylesByVariant: Record<NonNullable<ButtonProps["variant"]>, string> = {
    default:
      "bg-[var(--accent)] text-[var(--background)] hover:opacity-90 focus:ring-[var(--accent)]",
    outline:
      "border border-white/10 text-[var(--foreground)] hover:bg-white/[0.06] focus:ring-[var(--accent)]",
    ghost: "text-[var(--foreground)] hover:bg-white/[0.04] focus:ring-[var(--accent)]",
  };

  const variantClass = stylesByVariant[variant] ?? stylesByVariant.default;

  return (
    <button className={[baseClass, variantClass, className].filter(Boolean).join(" ")} {...props} />
  );
}
