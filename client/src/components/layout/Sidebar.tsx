import {
  BrainCircuit,
  CalendarDays,
  FileText,
  LayoutDashboard,
  Network,
  Settings,
} from "lucide-react";
import { BrandMark } from "../BrandMark";
import { NavItem } from "./NavItem";

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard" },
  { icon: FileText, label: "Notes", to: "/notes" },
  { icon: BrainCircuit, label: "Quiz", to: "/dashboard" },
  { icon: Network, label: "Knowledge map", to: "/dashboard" },
  { icon: CalendarDays, label: "Revision plan", to: "/dashboard" },
];

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside
      aria-label="Study navigation"
      className="flex h-full flex-col border-r border-border bg-surface px-4 py-5"
    >
      <div className="px-2">
        <BrandMark />
      </div>

      <nav className="mt-9 space-y-1" onClick={onNavigate}>
        {navigationItems.map((item) => (
          <NavItem
            icon={item.icon}
            key={item.label}
            label={item.label}
            to={item.to}
          />
        ))}
      </nav>

      <div className="mt-auto border-t border-border pt-4">
        <NavItem icon={Settings} label="Settings" to="/dashboard" />
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-surface-muted p-3">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-full bg-primary text-sm font-bold text-text-inverse"
          >
            S
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-text-primary">
              Student
            </p>
            <p className="truncate text-xs text-text-secondary">
              Study workspace
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
