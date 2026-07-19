import { ArrowUpRight, GitBranch } from "lucide-react";
import { BrandMark } from "../BrandMark";
import { Button } from "../ui/Button";

const navigationItems = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur-lg">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <BrandMark />
        <div className="hidden items-center gap-7 md:flex">
          {navigationItems.map((item) => (
            <a
              className="text-sm font-medium text-text-secondary transition hover:text-text-primary"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
          <a
            aria-label="View Recall on GitHub"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition hover:text-text-primary"
            href="https://github.com"
            rel="noreferrer"
            target="_blank"
          >
            <GitBranch size={17} />
            GitHub
          </a>
        </div>
        <Button className="px-3.5 py-2 sm:px-4 sm:py-2.5" href="/app/dashboard">
          Try Recall <ArrowUpRight size={16} />
        </Button>
      </nav>
    </header>
  );
}
