import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
  description: string;
  id: string;
  title: string;
}
export function SettingsSection({ children, description, id, title }: Props) {
  return (
    <section
      className="rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-6"
      id={id}
    >
      <h2 className="text-xl font-bold text-text-primary">{title}</h2>
      <p className="mt-1 text-sm leading-6 text-text-secondary">
        {description}
      </p>
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  );
}
