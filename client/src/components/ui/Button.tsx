import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

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
  href,
  ...props
}: ButtonProps) {
  const buttonClassName = [
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-200 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href?.startsWith("/")) {
    return (
      <Link {...props} className={buttonClassName} to={href}>
        {children}
      </Link>
    );
  }

  return (
    <a
      {...props}
      href={href}
      className={buttonClassName}
    >
      {children}
    </a>
  );
}
