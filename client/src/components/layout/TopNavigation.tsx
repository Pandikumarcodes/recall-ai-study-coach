import {
  Bell,
  ChevronDown,
  CircleHelp,
  Menu,
  Search,
  Settings,
  User,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NotificationBadge } from "../notifications/NotificationBadge";
import { NotificationDrawer } from "../notifications/NotificationDrawer";

interface TopNavigationProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

export function TopNavigation({
  isSidebarOpen,
  onSidebarToggle,
}: TopNavigationProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/80 bg-background/95 px-4 backdrop-blur-xl sm:px-8 xl:px-10">
      <button
        aria-controls="mobile-sidebar"
        aria-expanded={isSidebarOpen}
        aria-label={isSidebarOpen ? "Close navigation" : "Open navigation"}
        className="grid size-10 place-items-center rounded-xl text-text-secondary transition hover:bg-surface-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
        onClick={onSidebarToggle}
        type="button"
      >
        {isSidebarOpen ? <X size={21} /> : <Menu size={21} />}
      </button>

      <div className="hidden max-w-md flex-1 md:block">
        <label className="relative block">
          <span className="sr-only">Search your workspace</span>
          <Search
            aria-hidden="true"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
            size={18}
          />
          <input
            className="h-10 w-full rounded-xl border border-border bg-surface-muted/70 pl-10 pr-3 text-sm text-text-primary shadow-sm outline-none transition duration-200 placeholder:text-text-secondary hover:border-primary/25 hover:bg-surface focus:border-primary focus:bg-surface focus:ring-4 focus:ring-primary/10"
            placeholder="Search your workspace"
            type="search"
          />
        </label>
      </div>

      <div className="ml-auto flex items-center gap-2.5">
        <button
          aria-label="View notifications"
          aria-expanded={notificationsOpen}
          className="relative grid size-10 place-items-center rounded-xl text-text-secondary transition hover:bg-surface-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          onClick={() => setNotificationsOpen((currentOpen) => !currentOpen)}
          type="button"
        >
          <Bell size={20} />
          <span className="absolute -right-1 -top-1">
            <NotificationBadge count={3} />
          </span>
        </button>
        <div className="relative">
          <button
            aria-expanded={profileOpen}
            aria-haspopup="menu"
            className="hidden items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-primary sm:flex"
            onClick={() => setProfileOpen((currentOpen) => !currentOpen)}
            type="button"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-xs font-bold text-text-inverse">
              S
            </span>
            <span className="text-left">
              <span className="block text-sm font-semibold text-text-primary">
                Student
              </span>
              <span className="block text-[11px] text-primary">AI Learner</span>
            </span>
            <ChevronDown className="text-text-secondary" size={16} />
          </button>
          {profileOpen && (
            <div
              className="absolute right-0 top-12 z-30 w-48 rounded-xl border border-border bg-surface p-1.5 shadow-card-hover"
              role="menu"
            >
              <Link
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                onClick={() => setProfileOpen(false)}
                role="menuitem"
                to="/app/profile"
              >
                <User size={16} /> My Profile
              </Link>
              <Link
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                onClick={() => setProfileOpen(false)}
                role="menuitem"
                to="/app/settings"
              >
                <Settings size={16} /> Settings
              </Link>
              <a
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                href="mailto:support@recall.app"
                role="menuitem"
              >
                <CircleHelp size={16} /> Help
              </a>
              <button
                className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-text-secondary opacity-60"
                disabled
                type="button"
              >
                Sign Out · Coming Soon
              </button>
            </div>
          )}
        </div>
      </div>
      <NotificationDrawer
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />
    </header>
  );
}
