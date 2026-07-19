import { GitBranch, Heart } from "lucide-react";
import { BrandMark } from "../BrandMark";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <BrandMark />
          <p className="mt-3 text-sm text-text-secondary">
            Make every study session count.
          </p>
        </div>
        <div className="flex items-center gap-5 text-sm text-text-secondary">
          <a className="transition hover:text-text-primary" href="#features">
            Features
          </a>
          <a
            className="inline-flex items-center gap-1.5 transition hover:text-text-primary"
            href="https://github.com"
            rel="noreferrer"
            target="_blank"
          >
            <GitBranch size={16} /> GitHub
          </a>
          <span className="hidden items-center gap-1 text-text-secondary sm:inline-flex">
            Made for learners{" "}
            <Heart className="fill-primary text-primary" size={14} />
          </span>
        </div>
      </div>
    </footer>
  );
}
