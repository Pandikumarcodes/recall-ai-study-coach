import { Bell, Menu, Search, X } from "lucide-react";

interface TopNavigationProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

export function TopNavigation({
  isSidebarOpen,
  onSidebarToggle,
}: TopNavigationProps) {
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
          className="grid size-10 place-items-center rounded-xl text-text-secondary transition hover:bg-surface-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          type="button"
        >
          <Bell size={20} />
        </button>
        <span className="hidden text-sm font-medium text-text-secondary sm:inline">
          Student workspace
        </span>
      </div>
    </header>
  );
}
