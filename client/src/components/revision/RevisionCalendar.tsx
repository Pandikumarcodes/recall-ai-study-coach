const days = [
  { label: "Today", count: 4 },
  { label: "Tomorrow", count: 3 },
  { label: "This week", count: 9 },
];
export function RevisionCalendar() {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 shadow-card">
      <h2 className="text-lg font-bold text-text-primary">Revision calendar</h2>
      <div className="mt-5 space-y-3">
        {days.map((day) => (
          <div
            className="flex items-center justify-between rounded-xl bg-surface-muted px-4 py-3"
            key={day.label}
          >
            <span className="text-sm font-semibold text-text-primary">
              {day.label}
            </span>
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
              {day.count} scheduled
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
