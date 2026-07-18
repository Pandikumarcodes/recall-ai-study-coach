import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantClasses = {
  primary:
    "bg-primary text-text-inverse hover:bg-primary-dark shadow-sm hover:shadow-md",
  secondary:
    "border border-border bg-surface text-text-primary hover:bg-surface-muted",
  ghost: "text-text-secondary hover:bg-surface-muted hover:text-text-primary",
};

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </a>
  );
}
