import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  to: string;
}

export function NavItem({ icon: Icon, label, to }: NavItemProps) {
  return (
    <NavLink
      className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
        isActive
          ? "bg-primary/10 text-primary"
          : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
      }`}
      to={to}
    >
      <Icon aria-hidden="true" size={19} />
      {label}
    </NavLink>
  );
}
