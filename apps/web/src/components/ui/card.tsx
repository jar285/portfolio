import * as React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={[
        "rounded-xl border border-white/10 bg-white/[0.02] shadow-sm",
        "backdrop-blur-sm",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return (
    <div className={["p-4 md:p-6", className].filter(Boolean).join(" ")} {...props} />
  );
}

export function CardTitle({ className, ...props }: CardProps) {
  return (
    <h3
      className={[
        "text-lg font-semibold tracking-tight text-[var(--foreground)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return (
    <div className={["p-4 md:p-6 pt-0", className].filter(Boolean).join(" ")} {...props} />
  );
}
